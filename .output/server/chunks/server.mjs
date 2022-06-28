import { v as vue_cjs_prod, s as serverRenderer, r as require$$0 } from './renderer.mjs';
import { hasProtocol, isEqual, withBase, withQuery, joinURL } from 'ufo';
import { u as useRuntimeConfig$1 } from './node-server.mjs';
import 'h3';
import 'unenv/runtime/mock/proxy';
import 'stream';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response._data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift();
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  const { fetch: fetch2, Headers: Headers2 } = globalOptions;
  function onError(ctx) {
    if (ctx.options.retry !== false) {
      const retries = typeof ctx.options.retry === "number" ? ctx.options.retry : isPayloadMethod(ctx.options.method) ? 0 : 1;
      const responseCode = ctx.response && ctx.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(ctx.request, __spreadProps(__spreadValues({}, ctx.options), {
          retry: retries - 1
        }));
      }
    }
    const err = createFetchError(ctx.request, ctx.error, ctx.response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _opts = {}) {
    const ctx = {
      request: _request,
      options: __spreadValues(__spreadValues({}, globalOptions.defaults), _opts),
      response: void 0,
      error: void 0
    };
    if (ctx.options.onRequest) {
      await ctx.options.onRequest(ctx);
    }
    if (typeof ctx.request === "string") {
      if (ctx.options.baseURL) {
        ctx.request = withBase(ctx.request, ctx.options.baseURL);
      }
      if (ctx.options.params) {
        ctx.request = withQuery(ctx.request, ctx.options.params);
      }
      if (ctx.options.body && isPayloadMethod(ctx.options.method)) {
        if (isJSONSerializable(ctx.options.body)) {
          ctx.options.body = typeof ctx.options.body === "string" ? ctx.options.body : JSON.stringify(ctx.options.body);
          ctx.options.headers = new Headers2(ctx.options.headers);
          if (!ctx.options.headers.has("content-type")) {
            ctx.options.headers.set("content-type", "application/json");
          }
          if (!ctx.options.headers.has("accept")) {
            ctx.options.headers.set("accept", "application/json");
          }
        }
      }
    }
    ctx.response = await fetch2(ctx.request, ctx.options).catch(async (error) => {
      ctx.error = error;
      if (ctx.options.onRequestError) {
        await ctx.options.onRequestError(ctx);
      }
      return onError(ctx);
    });
    const responseType = (ctx.options.parseResponse ? "json" : ctx.options.responseType) || detectResponseType(ctx.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await ctx.response.text();
      const parseFn = ctx.options.parseResponse || destr;
      ctx.response._data = parseFn(data);
    } else {
      ctx.response._data = await ctx.response[responseType]();
    }
    if (ctx.options.onResponse) {
      await ctx.options.onResponse(ctx);
    }
    if (!ctx.response.ok) {
      if (ctx.options.onResponseError) {
        await ctx.options.onResponseError(ctx);
      }
    }
    return ctx.response.ok ? ctx.response : onError(ctx);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r._data);
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.create = (defaultOptions = {}) => createFetch(__spreadProps(__spreadValues({}, globalOptions), {
    defaults: __spreadValues(__spreadValues({}, globalOptions.defaults), defaultOptions)
  }));
  return $fetch2;
}
const _globalThis$2 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch = _globalThis$2.fetch || (() => Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!")));
const Headers = _globalThis$2.Headers;
const $fetch = createFetch({ fetch, Headers });
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serialCaller(hooks, args) {
  return hooks.reduce((promise, hookFn) => promise.then(() => hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
  return Promise.all(hooks.map((hook) => hook.apply(void 0, args)));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    return serialCaller(this._hooks[name] || [], args);
  }
  callHookParallel(name, ...args) {
    return parallelCaller(this._hooks[name] || [], args);
  }
  callHookWith(caller, name, ...args) {
    return caller(this._hooks[name] || [], args);
  }
}
function createHooks() {
  return new Hookable();
}
function createContext() {
  let currentInstance = null;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  return {
    use: () => currentInstance,
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = null;
      isSingleton = false;
    },
    call: (instance, cb) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return cb();
      } finally {
        if (!isSingleton) {
          currentInstance = null;
        }
      }
    },
    async callAsync(instance, cb) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = cb();
        if (!isSingleton) {
          currentInstance = null;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace() {
  const contexts = {};
  return {
    get(key) {
      if (!contexts[key]) {
        contexts[key] = createContext();
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const getContext = (key) => defaultNamespace.get(key);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = /* @__PURE__ */ new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = /* @__PURE__ */ new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
};
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = __spreadValues({
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive(__spreadValues({
      data: {},
      state: {},
      _errors: {}
    }, { serverRendered: true })),
    isHydrating: false,
    _asyncDataPromises: {}
  }, options);
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0;
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2 && segments.length > 1) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore))
        return 1;
      if (isLastScoreNegative(bScore))
        return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign(meta2, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute2() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute2;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const useState = (key, init) => {
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
const useError = () => {
  const nuxtApp = useNuxtApp();
  return useState("error", () => nuxtApp.ssrContext.error);
};
const throwError = (_err) => {
  const nuxtApp = useNuxtApp();
  useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  }
  return err;
};
const MIMES = {
  html: "text/html",
  json: "application/json"
};
const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      event.res.end(data);
      resolve(void 0);
    });
  });
}
function defaultContentType(event, type) {
  if (type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", type);
  }
}
function sendRedirect(event, location2, code = 302) {
  event.res.statusCode = code;
  event.res.setHeader("Location", location2);
  return send(event, "Redirecting to " + location2, MIMES.html);
}
class H3Error extends Error {
  constructor() {
    super(...arguments);
    this.statusCode = 500;
    this.statusMessage = "Internal Server Error";
  }
}
function createError(input) {
  var _a;
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (input instanceof H3Error) {
    return input;
  }
  const err = new H3Error((_a = input.message) != null ? _a : input.statusMessage, input.cause ? { cause: input.cause } : void 0);
  if (input.statusCode) {
    err.statusCode = input.statusCode;
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  }
  if (input.data) {
    err.data = input.data;
  }
  return err;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  return useNuxtApp()._route;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
  };
  return vue_cjs_prod.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        checkPropConflicts();
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return vue_cjs_prod.h(vue_cjs_prod.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        checkPropConflicts();
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return vue_cjs_prod.h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_5 = defineNuxtLink({ componentName: "NuxtLink" });
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escaped;
  }
  return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$1;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
function C_58_47Users_47cichy_47Downloads_47BS_45main_47BS_45main_47_46nuxt_47components_46plugin_46mjs(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues2({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a;
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const C_58_47Users_47cichy_47Downloads_47BS_45main_47BS_45main_47node_modules_47nuxt_47dist_47head_47runtime_47lib_47vueuse_45head_46plugin = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  const titleTemplate = vue_cjs_prod.ref();
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    if ("titleTemplate" in meta2.value) {
      titleTemplate.value = meta2.value.titleTemplate;
    }
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta2.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta2.value.title) : titleTemplate.value.replace(/%s/g, meta2.value.title);
      }
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory(__spreadValues(__spreadValues({}, removeUndefinedProps(props)), ctx.attrs), ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, globalProps), {
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  }),
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, globalProps), {
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  }),
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, globalProps), {
    href: String,
    target: String
  }),
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, globalProps), {
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  }),
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, globalProps), {
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  }),
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = __spreadValues({}, props);
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, globalProps), {
    manifest: String,
    version: String,
    xmlns: String
  }),
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "charset": "utf-8", "viewport": "width=device-width, initial-scale=1", "meta": [], "link": [], "style": [], "script": [] } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const C_58_47Users_47cichy_47Downloads_47BS_45main_47BS_45main_47node_modules_47nuxt_47dist_47head_47runtime_47plugin = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw(__spreadValues({ title: "" }, metaConfig.globalMeta)));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.RouterView, __spreadValues({ name: props.name, route: props.route }, attrs), {
        default: (routeProps) => {
          var _a;
          return routeProps.Component && _wrapIf(vue_cjs_prod.Transition, (_a = routeProps.route.meta.pageTransition) != null ? _a : defaultPageTransition, wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
            onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
            onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
          }, { default: () => vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) }))).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const _sfc_main$p = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "SeoHead",
  __ssrInlineRender: true,
  props: {
    title: null,
    description: null
  },
  setup(__props) {
    const props = __props;
    useRuntimeConfig();
    useHead({
      title: props.title,
      htmlAttrs: {
        lang: "de"
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: props.description
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Basic/SeoHead.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const meta$2 = void 0;
const meta$1 = void 0;
const _sfc_main$o = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Image-content",
  __ssrInlineRender: true,
  props: {
    id: null,
    title: null,
    direction: null,
    titleBarColor: null,
    imageLink: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        id: props.id,
        class: [props.direction === "right" ? "md:flex-row-reverse" : "md:flex-row", "flex flex-col w-full lg:min-h-screen"]
      }, _attrs))}><div style="${serverRenderer.exports.ssrRenderStyle(`background-image: url(${props.imageLink});`)}" class="md:w-1/2 w-full bg-cover aspect-square"></div><div class="md:w-1/2 p-4 lg:my-12 flex flex-col space-y-2 justify-start md:justify-center"><div class="lg:w-[31rem] py-12 md:p-6 mx-auto"><div><div style="${serverRenderer.exports.ssrRenderStyle(`background-color: ${props.titleBarColor}`)}" class="w-16 h-1 lg:h-2"></div><h2 class="leading-none text-xl md:text-2xl xl:text-5xl">${serverRenderer.exports.ssrInterpolate(props.title)}</h2></div>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Image-content.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "93.5",
    height: "64.281",
    viewBox: "0 0 93.5 64.281",
    class: "mx-auto px-2"
  }, _attrs))}><path id="electric-car" d="M88.388,34.427l-5.481-4.386c-.022-.018-.044-.039-.066-.057l5.1-1.021a1.459,1.459,0,0,0,1.173-1.432V23.148a1.461,1.461,0,0,0-1.461-1.461h-7.3a1.461,1.461,0,0,0-1.461,1.461v2.56l-.1-.136a1.416,1.416,0,0,0-.463-.627,21.567,21.567,0,0,1-1.985-3.338l-2.469-5.43A11.3,11.3,0,0,0,64.281,10H29.219a11.3,11.3,0,0,0-9.591,6.177L17.16,21.606a21.575,21.575,0,0,1-1.985,3.34,1.427,1.427,0,0,0-.463.627l-.1.136v-2.56a1.461,1.461,0,0,0-1.461-1.461H5.844a1.461,1.461,0,0,0-1.461,1.461v4.383a1.458,1.458,0,0,0,1.175,1.432l5.1,1.021c-.022.018-.044.039-.066.057L5.112,34.427A15.194,15.194,0,0,0,0,45.062V69.9a4.388,4.388,0,0,0,4.383,4.383H16.07A4.388,4.388,0,0,0,20.453,69.9V66.977H73.047V69.9a4.388,4.388,0,0,0,4.383,4.383H89.117A4.388,4.388,0,0,0,93.5,69.9V45.062A15.194,15.194,0,0,0,88.388,34.427ZM75.113,64.055l-3.35-3.35a9.489,9.489,0,0,0-6.021-2.494H27.027A9.489,9.489,0,0,0,21.007,60.7l-3.35,3.35H7.3a4.388,4.388,0,0,1-4.383-4.383v-7.3H4.383v1.461a5.85,5.85,0,0,0,5.844,5.844h4.383a1.461,1.461,0,0,0,0-2.922H10.227A2.925,2.925,0,0,1,7.3,53.828V52.367h2.922A6.754,6.754,0,0,1,14.181,54a1.461,1.461,0,0,0,2.066-2.066,9.485,9.485,0,0,0-6.021-2.494h-7.3V45.062a8.417,8.417,0,0,1,.2-1.641A5.555,5.555,0,0,0,7.3,45.062H18.992a1.46,1.46,0,0,0,1.033-.428l1.889-1.889L23.8,44.634a1.457,1.457,0,0,0,1.033.428H41.762l3.955,3.955a1.46,1.46,0,0,0,2.066,0l3.955-3.955H68.664a1.457,1.457,0,0,0,1.033-.428l1.889-1.889,1.889,1.889a1.457,1.457,0,0,0,1.033.428H86.2a5.555,5.555,0,0,0,4.186-1.641,8.416,8.416,0,0,1,.2,1.641v4.383h-7.3a9.489,9.489,0,0,0-6.021,2.494A1.461,1.461,0,1,0,79.319,54a6.754,6.754,0,0,1,3.955-1.638H86.2v1.461a2.925,2.925,0,0,1-2.922,2.922H78.891a1.461,1.461,0,0,0,0,2.922h4.383a5.85,5.85,0,0,0,5.844-5.844V52.367h1.461v7.3A4.388,4.388,0,0,1,86.2,64.055Zm-4.132,0H21.788l1.284-1.284a6.754,6.754,0,0,1,3.955-1.638H65.742A6.754,6.754,0,0,1,69.7,62.771ZM16.888,27.531H76.612a28.215,28.215,0,0,0,4.469,4.792l1.758,1.405L72.5,37.862h0a1.463,1.463,0,0,0-.486.321l-1.461,1.461-2.5,2.5H51.133a1.457,1.457,0,0,0-1.033.428l-3.35,3.35-3.35-3.35a1.457,1.457,0,0,0-1.033-.428H25.441l-2.494-2.494-1.461-1.461A1.463,1.463,0,0,0,21,37.864h0L10.663,33.73l1.758-1.405A28.34,28.34,0,0,0,16.888,27.531Zm72.143,12.3a2.6,2.6,0,0,1-2.836,2.31H75.113L73.652,40.68l.216-.216L85.46,35.826l1.1.882A10.512,10.512,0,0,1,89.031,39.831ZM81.813,24.609H86.2v1.724l-4.383.877ZM19.818,22.815l2.468-5.429a8.417,8.417,0,0,1,6.934-4.465H64.281a8.414,8.414,0,0,1,6.932,4.463l2.469,5.43a19.74,19.74,0,0,0,.958,1.794H18.859A19.387,19.387,0,0,0,19.818,22.815ZM7.3,24.609h4.383v2.6L7.3,26.333Zm-.368,12.1,1.1-.882,11.594,4.637.216.216-1.461,1.461H7.3a2.6,2.6,0,0,1-2.836-2.31A10.509,10.509,0,0,1,6.937,36.709ZM16.07,71.359H4.383A1.463,1.463,0,0,1,2.922,69.9V65.479a7.237,7.237,0,0,0,4.383,1.5H17.531V69.9A1.463,1.463,0,0,1,16.07,71.359Zm73.047,0H77.43A1.463,1.463,0,0,1,75.969,69.9V66.977H86.2a7.237,7.237,0,0,0,4.383-1.5V69.9A1.463,1.463,0,0,1,89.117,71.359Z" transform="translate(0 -10)" fill="#1f1f1f"></path></svg>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/pkw.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$m = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    id: "semi",
    xmlns: "http://www.w3.org/2000/svg",
    width: "96.484",
    height: "100.406",
    class: "mx-auto px-2",
    viewBox: "0 0 96.484 100.406"
  }, _attrs))}><path id="Pfad_4" data-name="Pfad 4" d="M103.053,78.639h-.882v-11.5a13.167,13.167,0,0,0-2.745-8.058V46.771a5.4,5.4,0,0,0-2.942-4.8V27.945a3.433,3.433,0,0,0-1.964-3.1L94.478,9.9h2.888a1.471,1.471,0,0,0,1.471-1.471V1.471A1.471,1.471,0,0,0,97.365,0H94.228A9.617,9.617,0,0,0,84.72,9.564L83.538,6.215A9.329,9.329,0,0,0,74.754,0H41.73a9.329,9.329,0,0,0-8.784,6.215L31.764,9.564A9.617,9.617,0,0,0,22.257,0H19.119a1.471,1.471,0,0,0-1.471,1.471V8.433A1.471,1.471,0,0,0,19.119,9.9h2.888l-.041,14.944A3.433,3.433,0,0,0,20,27.945V42.076a5.4,5.4,0,0,0-2.745,4.7v.49a1.471,1.471,0,0,0,2.942,0v-.49a2.454,2.454,0,0,1,2.451-2.451h6.177v9.542l-1.144-.011A13.179,13.179,0,0,0,20.2,56.079V54.125a1.471,1.471,0,0,0-2.942,0v4.643a13.128,13.128,0,0,0-2.942,8.319V78.639h-.882A3.436,3.436,0,0,0,10,82.071v3.746a5.378,5.378,0,0,0,4.492,5.317l3.745.635v3.245a5.4,5.4,0,0,0,5.393,5.393h7.06a5.4,5.4,0,0,0,5.393-5.393v-.49H80.4v.49a5.4,5.4,0,0,0,5.393,5.393h7.06a5.4,5.4,0,0,0,5.393-5.393V91.769l3.745-.635a5.378,5.378,0,0,0,4.492-5.317V82.071A3.436,3.436,0,0,0,103.053,78.639Zm-20.689,0V74.717H92.855a3.436,3.436,0,0,0,3.432-3.432v-4.9a3.436,3.436,0,0,0-3.432-3.432H82.363v-6.1h6.57a10.307,10.307,0,0,1,10.3,10.3v11.5Zm-45.3,0V54.616A8.344,8.344,0,0,1,45.4,46.281h25.69a8.344,8.344,0,0,1,8.335,8.335V78.639Zm-2.942-6.864H23.629a.491.491,0,0,1-.49-.49v-4.9a.491.491,0,0,1,.49-.49H34.121Zm48.242-5.883H92.855a.491.491,0,0,1,.49.49v4.9a.491.491,0,0,1-.49.49H82.363ZM93.541,27.945V41.378H87.658V27.455h5.393A.491.491,0,0,1,93.541,27.945ZM87.658,44.32h6.373a2.454,2.454,0,0,1,2.451,2.451V56.28a13.159,13.159,0,0,0-7.55-2.373H87.658Zm0-34.613a6.677,6.677,0,0,1,6.57-6.766h1.667v4.02H94.228a2.7,2.7,0,0,0-2.692,2.7l.041,14.855H87.658V9.707ZM35.72,7.194a6.384,6.384,0,0,1,6.01-4.252h.823V5.393a5.4,5.4,0,0,0,5.393,5.393H49.81a1.471,1.471,0,1,0,0-2.942H47.947A2.454,2.454,0,0,1,45.5,5.393V2.942H70.989V5.393a2.454,2.454,0,0,1-2.451,2.451H56.673a1.471,1.471,0,1,0,0,2.942H68.538a5.4,5.4,0,0,0,5.393-5.393V2.942h.823a6.383,6.383,0,0,1,6.01,4.252l3.344,9.475H32.376ZM20.59,6.962V2.942h1.667a6.677,6.677,0,0,1,6.57,6.766V24.513H24.908l.041-14.859a2.7,2.7,0,0,0-2.692-2.692Zm2.353,34.417V27.945a.491.491,0,0,1,.49-.49h5.393V41.378Zm8.825-15.394V19.611H84.717v34.3H82.339A11.289,11.289,0,0,0,71.087,43.34H45.4A11.289,11.289,0,0,0,34.145,53.915l-2.377-.024Zm-14.512,41.1a10.3,10.3,0,0,1,10.4-10.295l6.468.064V62.95H23.629A3.436,3.436,0,0,0,20.2,66.382v4.9a3.436,3.436,0,0,0,3.432,3.432H34.121v3.922H17.256ZM30.689,97.465h-7.06a2.454,2.454,0,0,1-2.451-2.451V92.267L33.141,94.3v.719A2.454,2.454,0,0,1,30.689,97.465Zm7.354-5.883V87.66h3.922v3.922Zm36.476,0V87.66h3.922v3.922Zm20.787,3.432a2.454,2.454,0,0,1-2.451,2.451H85.8a2.454,2.454,0,0,1-2.451-2.451V94.3l11.962-2.028Zm8.236-9.2a2.445,2.445,0,0,1-2.042,2.417L81.749,91.582h-.367V87.169a2.454,2.454,0,0,0-2.451-2.451h-4.9a2.454,2.454,0,0,0-2.451,2.451v4.412H44.907V87.169a2.454,2.454,0,0,0-2.451-2.451h-4.9A2.454,2.454,0,0,0,35.1,87.169v4.412h-.367L14.983,88.234a2.445,2.445,0,0,1-2.042-2.417V82.071a.491.491,0,0,1,.49-.49h89.621a.491.491,0,0,1,.49.49Z" transform="translate(-10 0)" fill="#1f1f1f"></path><path id="Pfad_5" data-name="Pfad 5" d="M193.1,251H177.708a1.471,1.471,0,1,0,0,2.942H193.1a3.436,3.436,0,0,1,3.432,3.432V271.1a3.436,3.436,0,0,1-3.432,3.432H169.373a3.436,3.436,0,0,1-3.432-3.432V257.373a3.436,3.436,0,0,1,3.432-3.432h1.471a1.471,1.471,0,1,0,0-2.942h-1.471A6.381,6.381,0,0,0,163,257.373V271.1a6.381,6.381,0,0,0,6.373,6.373H193.1a6.381,6.381,0,0,0,6.373-6.373V257.373A6.381,6.381,0,0,0,193.1,251Z" transform="translate(-132.996 -201.777)" fill="#1f1f1f"></path><path id="Pfad_6" data-name="Pfad 6" d="M216.435,281H194.471a1.471,1.471,0,1,0,0,2.942h21.964a1.471,1.471,0,1,0,0-2.942Z" transform="translate(-157.113 -225.894)" fill="#1f1f1f"></path><path id="Pfad_7" data-name="Pfad 7" d="M216.435,311H194.471a1.471,1.471,0,1,0,0,2.942h21.964a1.471,1.471,0,1,0,0-2.942Z" transform="translate(-157.113 -250.011)" fill="#1f1f1f"></path><path id="Pfad_8" data-name="Pfad 8" d="M216.435,341H194.471a1.471,1.471,0,1,0,0,2.942h21.964a1.471,1.471,0,1,0,0-2.942Z" transform="translate(-157.113 -274.128)" fill="#1f1f1f"></path><path id="Pfad_9" data-name="Pfad 9" d="M136.432,132.846H177.81a3.436,3.436,0,0,0,3.432-3.432v-.49a1.471,1.471,0,1,0-2.942,0v.49a.491.491,0,0,1-.49.49H136.432a.491.491,0,0,1-.49-.49V118.432a.491.491,0,0,1,.49-.49H177.81a.491.491,0,0,1,.49.49v3.628a1.471,1.471,0,1,0,2.942,0v-3.628A3.436,3.436,0,0,0,177.81,115H136.432A3.436,3.436,0,0,0,133,118.432v10.982A3.436,3.436,0,0,0,136.432,132.846Z" transform="translate(-108.879 -92.448)" fill="#1f1f1f"></path></svg>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/lkw.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$l = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "mx-auto px-2",
    xmlns: "http://www.w3.org/2000/svg",
    width: "106.1",
    height: "82.655",
    viewBox: "0 0 106.1 82.655"
  }, _attrs))}><g id="racing-car-2" transform="translate(0.3 0.3)"><path id="Pfad_1" data-name="Pfad 1" d="M104.656,89.426c.033-1.094.08-2.817.116-4.851a12.422,12.422,0,0,0,1.726-6.26c0-2.929-1.1-4.3-1.743-4.854-.187-6.64-.695-8.395-1.062-9.132a21.761,21.761,0,0,0-2.219-3.26v-3.4a6.368,6.368,0,0,0-6.361-6.361H91.342s0-.009,0-.014c-.139-.277-.314-.646-.517-1.086l1.962-3.924h4.59a5.783,5.783,0,0,0,5.776-5.776V38.746a.837.837,0,0,0-.837-.837h-5.04a5.851,5.851,0,0,0-5.611,4.223,5.124,5.124,0,0,0-3.621,1.85c-1.506-3.4-3.3-7.424-5.053-11.15-.1-.207-.2-.409-.312-.608,2.323.215,3.795.414,4.567.533v1.8a2.512,2.512,0,1,0,5.024,0V24.512a2.508,2.508,0,0,0-5.015-.085c-3.638-.348-17.724-1.589-33.5-1.589s-29.861,1.241-33.5,1.589a2.508,2.508,0,0,0-5.015.085V34.559a2.512,2.512,0,1,0,5.024,0v-1.8c.771-.118,2.242-.317,4.566-.533-.11.2-.214.4-.311.608-1.755,3.727-3.547,7.752-5.053,11.151a5.1,5.1,0,0,0-3.451-1.84c-.379-2.561-2.6-4.233-5.781-4.233H5.186a.837.837,0,0,0-.837.837v1.759a5.783,5.783,0,0,0,5.776,5.776h4.59l1.962,3.924c-.2.44-.378.809-.517,1.086,0,0,0,.009,0,.014H12.384a6.368,6.368,0,0,0-6.36,6.361v3.4A21.762,21.762,0,0,0,3.8,64.329c-.368.739-.875,2.5-1.061,9.132C2.1,74.014,1,75.385,1,78.315a12.425,12.425,0,0,0,1.727,6.26c.036,2.036.083,3.76.116,4.855A4.017,4.017,0,0,0,1,93.156a4.219,4.219,0,0,0,1.359,3.065c5.678,5.775,30.27,7.833,51.391,7.833S99.462,102,105.14,96.221a4.216,4.216,0,0,0,1.359-3.065,4.024,4.024,0,0,0-1.843-3.729Zm-38.347-.092c4.127-.784,7.351-1.69,8.319-1.974,1.456.624,7.972,3.3,12.613,3.3,2.886,0,10.839-3.039,15.837-5.071-.043,2.083-.093,3.735-.119,4.527-2.293,1.046-12.458,5.568-16.691,5.568-4.742,0-11.232-3.228-11.3-3.26a.837.837,0,0,0-.606-.057c-.036.01-3.495,1-8.056,1.886V89.334Zm37.04-5.643a.869.869,0,0,0-.113.022c-2.211.908-4.26,1.712-6.12,2.406a83.718,83.718,0,0,0,7.008-10.835,5.618,5.618,0,0,1,.7,3.031A10.854,10.854,0,0,1,103.349,83.691ZM99.8,57.666v3.418c-2.956,4.143-9.933,11.781-23.337,16.177,3.656-7.32,2.323-18.937,1.427-24.281H95.114A4.691,4.691,0,0,1,99.8,57.666ZM33.381,77.971c-4.742-6.955-2.77-20.988-2.05-25.136a.837.837,0,0,1,.826-.693h1.561c-.14,8.607.036,17.364.522,26.066Q33.805,78.091,33.381,77.971ZM45.665,27.926q-.156,2.1-.292,4.2c-3.251.064-6.28.167-9.042.309-.08,0-.157.022-.237.028q.136-2.141.292-4.267Q40.728,28.01,45.665,27.926Zm-9.247,6.183c4.982-.256,10.814-.387,17.331-.387q4.631,0,8.775.088L45.866,50.468H32.156a2.5,2.5,0,0,0-1.866.837H24.134c.475-.964,1.094-2.264,1.815-3.777,1.37-2.874,3.075-6.452,4.726-9.7a6.851,6.851,0,0,1,5.743-3.721Zm30.992-.16L50.891,50.468H48.235l16.6-16.6Q66.152,33.9,67.41,33.949Zm9.8,17.356a2.5,2.5,0,0,0-1.867-.837H53.259L69.684,34.043c.471.022.941.043,1.4.066a6.85,6.85,0,0,1,5.743,3.72c1.651,3.246,3.356,6.824,4.726,9.7.722,1.514,1.341,2.813,1.815,3.777H77.209ZM66.424,53.088a2.936,2.936,0,0,1,.7,2.321c-.824,6.286-3.656,16.829-13.372,16.829S41.2,61.694,40.378,55.409a2.936,2.936,0,0,1,.7-2.321,2.725,2.725,0,0,1,2.072-.945H64.352a2.725,2.725,0,0,1,2.072.945ZM35.936,78.635c-.507-8.842-.687-17.745-.544-26.493h4.3a4.614,4.614,0,0,0-.972,3.484c.98,7.476,3.316,11.963,6.007,14.62.1,3.294.263,6.628.462,9.934A70.435,70.435,0,0,1,35.936,78.635Zm10.937,1.7c-.175-2.876-.311-5.77-.414-8.647a12.687,12.687,0,0,0,7.291,2.226c4.719,0,12.947-2.375,15.031-18.286a4.613,4.613,0,0,0-.972-3.484h7.534a.836.836,0,0,1,.825.694c.722,4.153,2.693,18.178-2.052,25.136A74.4,74.4,0,0,1,53.749,80.61c-2.406,0-4.689-.1-6.877-.277Zm50.4-40.75h4.2v.922a4.106,4.106,0,0,1-4.1,4.1H93.1v-.854A4.174,4.174,0,0,1,97.272,39.583Zm-5.844,4.264v1.4l-1.5,2.994c-.329-.737-.694-1.559-1.091-2.452A3.5,3.5,0,0,1,91.428,43.847Zm-4.481,1.8c1.07,2.418,1.953,4.408,2.54,5.657h-4.25c-.481-.943-1.243-2.542-2.176-4.5-1.374-2.883-3.085-6.471-4.744-9.737a8.53,8.53,0,0,0-7.15-4.634c-2.077-.107-4.308-.191-6.666-.255H64.5q-4.991-.133-10.747-.135-3.483,0-6.695.05.136-2.1.291-4.195c2.069-.027,4.2-.042,6.4-.042,7.453,0,14.16.155,19.937.459a9.122,9.122,0,0,1,7.787,5.225c1.917,4.074,3.889,8.526,5.473,12.1Zm1.969-21.137a.837.837,0,1,1,1.675,0V34.559a.837.837,0,1,1-1.675,0ZM18.583,34.559a.837.837,0,1,1-1.675,0V24.512a.837.837,0,1,1,1.675,0Zm1.675-3.5V26.108c3.357-.324,17.558-1.6,33.492-1.6s30.134,1.272,33.492,1.6v4.954c-1.022-.151-2.877-.385-5.8-.628a10.8,10.8,0,0,0-7.666-3.786c-5.8-.306-12.542-.461-20.025-.461-2.42,0-4.752.018-7.011.05a.808.808,0,0,0-.109-.031.826.826,0,0,0-.31.037c-4.563.069-8.784.2-12.6.405a10.8,10.8,0,0,0-7.666,3.786C23.135,30.677,21.28,30.911,20.258,31.062ZM14.4,44.607H10.126a4.107,4.107,0,0,1-4.1-4.1v-.922h4.2c2.015,0,4.17.88,4.17,3.349Zm1.675.64v-1.4a3.5,3.5,0,0,1,2.588,1.941c-.4.894-.761,1.716-1.091,2.452Zm4.481.4c1.585-3.577,3.556-8.029,5.474-12.1a9.123,9.123,0,0,1,7.787-5.225l.89-.044q-.166,2.242-.309,4.5a8.514,8.514,0,0,0-5.213,4.293c-1.66,3.265-3.37,6.854-4.744,9.737-.932,1.955-1.695,3.555-2.176,4.5h-4.25C18.6,50.056,19.481,48.066,20.552,45.648ZM12.385,52.98H29.609c-.894,5.339-2.227,16.962,1.427,24.281-13.4-4.4-20.381-12.035-23.337-16.177V57.666A4.692,4.692,0,0,1,12.385,52.98ZM6.843,62.751c4.927,6.543,18.321,19.534,46.907,19.534s41.979-12.991,46.907-19.534a16.764,16.764,0,0,1,1.539,2.324c.26.522.722,2.331.89,8.575,0,.009.006.018.006.027A87.574,87.574,0,0,1,94.21,87.166a28.731,28.731,0,0,1-6.969,1.818c-4.786,0-12.146-3.245-12.219-3.277a.838.838,0,0,0-.586-.035c-.036.011-3.445,1.052-8.127,1.959V86.472a.837.837,0,0,0-.837-.837H42.027a.837.837,0,0,0-.837.837V87.63c-4.68-.906-8.091-1.947-8.127-1.958a.833.833,0,0,0-.586.035c-.074.032-7.428,3.276-12.219,3.276a29.355,29.355,0,0,1-6.976-1.826,87.467,87.467,0,0,1-8.869-13.47c.167-6.265.63-8.087.892-8.613a16.474,16.474,0,0,1,1.538-2.323ZM64.634,87.309V97.356H42.865V87.309ZM20.258,90.658c4.641,0,11.156-2.673,12.613-3.3.969.283,4.192,1.19,8.319,1.974v4.917c-4.557-.888-8.02-1.876-8.056-1.886a.832.832,0,0,0-.606.057c-.065.032-6.555,3.26-11.3,3.26-4.232,0-14.4-4.523-16.691-5.569-.026-.792-.077-2.444-.119-4.527C8.845,87.385,17.3,90.658,20.258,90.658ZM3.373,75.282a83.681,83.681,0,0,0,7,10.83c-2.069-.77-4.222-1.62-6.249-2.455a10.777,10.777,0,0,1-1.454-5.343A5.636,5.636,0,0,1,3.373,75.282ZM103.945,95.046c-4.379,4.455-24.082,7.334-50.2,7.334S7.933,99.5,3.554,95.046a2.582,2.582,0,0,1-.879-1.862A3.253,3.253,0,0,1,3.2,91.309a.829.829,0,0,0,.163.106c.517.243,12.735,5.941,17.866,5.941,4.6,0,10.379-2.635,11.755-3.295.988.271,4.215,1.129,8.2,1.895v2.237a.837.837,0,0,0,.837.837H65.471a.837.837,0,0,0,.837-.837V95.956c3.991-.766,7.217-1.624,8.2-1.895,1.377.66,7.159,3.295,11.755,3.295,5.131,0,17.349-5.7,17.866-5.941a.862.862,0,0,0,.164-.106,3.247,3.247,0,0,1,.526,1.875A2.579,2.579,0,0,1,103.945,95.046Z" transform="translate(-0.999 -22)" fill="#1f1f1f" stroke="#1f1f1f" stroke-width="0.6"></path><path id="Pfad_2" data-name="Pfad 2" d="M19.559,95.42c4.438,0,9.532-4.2,9.747-4.381a.837.837,0,0,0-.537-1.48c-7.929,0-20.217-12.191-20.34-12.314a.837.837,0,0,0-1.356.935C8.37,81.06,15.06,95.42,19.559,95.42Zm0-1.675c-.975,0-2.387-1.439-3.927-3.585a7.448,7.448,0,0,1,1.908-3.339,27.609,27.609,0,0,0,9,4.17C24.8,92.164,21.988,93.746,19.559,93.746Zm-3.435-7.888a9.128,9.128,0,0,0-1.668,2.569c-1.352-2.1-2.741-4.58-3.976-7.014C12.006,82.738,13.966,84.337,16.125,85.858Z" transform="translate(-1.976 -30.949)" fill="#1f1f1f" stroke="#1f1f1f" stroke-width="0.6"></path><path id="Pfad_3" data-name="Pfad 3" d="M104.048,95.42c4.5,0,11.19-14.36,12.486-17.24a.837.837,0,0,0-1.356-.935c-.123.123-12.405,12.314-20.34,12.314a.837.837,0,0,0-.536,1.48c.214.179,5.308,4.381,9.746,4.381Zm5.1-6.993a9.119,9.119,0,0,0-1.669-2.569,71.432,71.432,0,0,0,5.645-4.446c-1.235,2.433-2.624,4.916-3.976,7.015Zm-3.084-1.605a7.451,7.451,0,0,1,1.907,3.341c-1.539,2.144-2.951,3.583-3.926,3.583-2.423,0-5.233-1.582-6.983-2.755A27.624,27.624,0,0,0,106.066,86.822Z" transform="translate(-16.131 -30.949)" fill="#1f1f1f" stroke="#1f1f1f" stroke-width="0.6"></path></g></svg>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/motorsport.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$k = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: { "enable-background": "new 0 0 512 512" },
    "xml:space": "preserve"
  }, _attrs))}><g><g><path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257
			c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22
			C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34
			C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180
			C406.1,207.121,398.689,233.688,384.866,256.818z"></path></g></g><g><g><path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z
			 M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2
			C316.1,212.683,289.784,240.2,256,240.2z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Ort.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$j = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: { "enable-background": "new 0 0 512 512" },
    "xml:space": "preserve",
    class: "w-7"
  }, _attrs))}><g><g><path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978
			c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952
			C357.766,320.208,355.981,307.775,347.216,301.211z"></path></g></g><g><g><path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341
			c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341
			S375.275,472.341,256,472.341z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Oeffnungszeiten.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$i = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 482.6 482.6",
    style: { "enable-background": "new 0 0 482.6 482.6" },
    "xml:space": "preserve"
  }, _attrs))}><g><path d="M98.339,320.8c47.6,56.9,104.9,101.7,170.3,133.4c24.9,11.8,58.2,25.8,95.3,28.2c2.3,0.1,4.5,0.2,6.8,0.2
		c24.9,0,44.9-8.6,61.2-26.3c0.1-0.1,0.3-0.3,0.4-0.5c5.8-7,12.4-13.3,19.3-20c4.7-4.5,9.5-9.2,14.1-14
		c21.3-22.2,21.3-50.4-0.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2c-12.8,0-25.1,5.6-35.6,16.1l-35.8,35.8
		c-3.3-1.9-6.7-3.6-9.9-5.2c-4-2-7.7-3.9-11-6c-32.6-20.7-62.2-47.7-90.5-82.4c-14.3-18.1-23.9-33.3-30.6-48.8
		c9.4-8.5,18.2-17.4,26.7-26.1c3-3.1,6.1-6.2,9.2-9.3c10.8-10.8,16.6-23.3,16.6-36s-5.7-25.2-16.6-36l-29.8-29.8
		c-3.5-3.5-6.8-6.9-10.2-10.4c-6.6-6.8-13.5-13.8-20.3-20.1c-10.3-10.1-22.4-15.4-35.2-15.4c-12.7,0-24.9,5.3-35.6,15.5l-37.4,37.4
		c-13.6,13.6-21.3,30.1-22.9,49.2c-1.9,23.9,2.5,49.3,13.9,80C32.739,229.6,59.139,273.7,98.339,320.8z M25.739,104.2
		c1.2-13.3,6.3-24.4,15.9-34l37.2-37.2c5.8-5.6,12.2-8.5,18.4-8.5c6.1,0,12.3,2.9,18,8.7c6.7,6.2,13,12.7,19.8,19.6
		c3.4,3.5,6.9,7,10.4,10.6l29.8,29.8c6.2,6.2,9.4,12.5,9.4,18.7s-3.2,12.5-9.4,18.7c-3.1,3.1-6.2,6.3-9.3,9.4
		c-9.3,9.4-18,18.3-27.6,26.8c-0.2,0.2-0.3,0.3-0.5,0.5c-8.3,8.3-7,16.2-5,22.2c0.1,0.3,0.2,0.5,0.3,0.8
		c7.7,18.5,18.4,36.1,35.1,57.1c30,37,61.6,65.7,96.4,87.8c4.3,2.8,8.9,5,13.2,7.2c4,2,7.7,3.9,11,6c0.4,0.2,0.7,0.4,1.1,0.6
		c3.3,1.7,6.5,2.5,9.7,2.5c8,0,13.2-5.1,14.9-6.8l37.4-37.4c5.8-5.8,12.1-8.9,18.3-8.9c7.6,0,13.8,4.7,17.7,8.9l60.3,60.2
		c12,12,11.9,25-0.3,37.7c-4.2,4.5-8.6,8.8-13.3,13.3c-7,6.8-14.3,13.8-20.9,21.7c-11.5,12.4-25.2,18.2-42.9,18.2
		c-1.7,0-3.5-0.1-5.2-0.2c-32.8-2.1-63.3-14.9-86.2-25.8c-62.2-30.1-116.8-72.8-162.1-127c-37.3-44.9-62.4-86.7-79-131.5
		C28.039,146.4,24.139,124.3,25.739,104.2z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Telefon.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$h = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: { "enable-background": "new 0 0 512 512" },
    "xml:space": "preserve"
  }, _attrs))}><g><g><path d="M467,76H45C20.238,76,0,96.149,0,121v270c0,24.86,20.251,45,45,45h422c24.762,0,45-20.149,45-45V121
			C512,96.143,491.752,76,467,76z M460.09,106c-14.549,14.597-185.445,186.05-192.466,193.094c-5.864,5.882-17.381,5.886-23.248,0
			L51.91,106H460.09z M30,385.485v-258.97L159.065,256L30,385.485z M51.91,406l128.334-128.752l42.885,43.025
			c17.574,17.631,48.175,17.624,65.743,0l42.885-43.024L460.09,406H51.91z M482,385.485L352.935,256L482,126.515V385.485z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Email.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$g = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: { "enable-background": "new 0 0 512 512" },
    "xml:space": "preserve"
  }, _attrs))}><path d="m465.934 146.253h-62.331v-73.881c0-3.564-1.585-6.944-4.324-9.224l-49.721-41.372c-2.156-1.794-4.872-2.776-7.676-2.776h-221.485c-6.628 0-12 5.373-12 12v115.253h-62.331c-14.924 0-27.066 12.143-27.066 27.067v165.737c0 14.925 12.142 27.067 27.066 27.067h62.331v99.809c0 14.925 12.142 27.067 27.066 27.067h241.072c14.925 0 27.066-12.142 27.066-27.067v-99.809h62.331c14.925 0 27.066-12.142 27.066-27.067v-165.737c.002-14.924-12.14-27.067-27.064-27.067zm-333.537-103.253h205.145l42.061 34.998v68.256h-247.206zm247.206 422.933c0 1.663-1.404 3.067-3.066 3.067h-241.073c-1.662 0-3.066-1.404-3.066-3.067v-178.104c0-1.663 1.404-3.067 3.066-3.067h241.072c1.662 0 3.066 1.404 3.066 3.067v178.104zm89.397-126.876c0 1.662-1.404 3.067-3.066 3.067h-62.331v-54.295c0-14.925-12.142-27.067-27.066-27.067h-241.073c-14.925 0-27.066 12.142-27.066 27.067v54.295h-62.332c-1.662 0-3.066-1.405-3.066-3.067v-165.737c0-1.663 1.404-3.067 3.066-3.067h419.867c1.662 0 3.066 1.404 3.066 3.067v165.737zm-131.338 87.194c0 6.627-5.372 12-12 12h-139.324c-6.628 0-12-5.373-12-12s5.372-12 12-12h139.324c6.628 0 12 5.373 12 12zm0-49.37c0 6.627-5.372 12-12 12h-139.324c-6.628 0-12-5.373-12-12s5.372-12 12-12h139.324c6.628 0 12 5.373 12 12zm0-49.37c0 6.627-5.372 12-12 12h-139.324c-6.628 0-12-5.373-12-12s5.372-12 12-12h139.324c6.628 0 12 5.373 12 12z"></path></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Printer.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$f = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    href: null,
    label: null,
    labelHover: null,
    color: { default: "Black" },
    outline: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const buttonClasses = vue_cjs_prod.computed(() => {
      if (props.outline) {
        switch (props.color) {
          case "Black":
            return "bg-bs-black text-bs-white border";
          case "Red":
            return "bg-bs-red text-bs-white  border";
          case "Blue":
            return "bg-bs-blue text-bs-white  border";
          case "Turquoise":
            return "bg-bs-turquoise text-bs-white  border ";
          default:
            return "";
        }
      } else {
        switch (props.color) {
          case "Red":
            return "bg-bs-red ";
          case "Black":
            return "bg-bs-black ";
          case "Blue":
            return "bg-bs-blue ";
          case "Turquoise":
            return "bg-msg-white-shade text-bg-turquoise shadow-md hover:shadow-lg shadow-neutral-200";
          default:
            return "";
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.exports.ssrRenderVNode(_push, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(__props.href ? "a" : "button"), vue_cjs_prod.mergeProps({
        class: ["inline-flex justify-center items-center text-sm lg:text-base text-center transition group", vue_cjs_prod.unref(buttonClasses)]
      }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
            _push2(`<div${_scopeId}>`);
            if (!props.labelHover) {
              _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate(props.label)}</span>`);
            } else {
              _push2(`<span class="relative"${_scopeId}><span class="group-hover:-translate-y-2/3 inline-block group-hover:opacity-0 transition-all lg:px-2"${_scopeId}>${serverRenderer.exports.ssrInterpolate(props.label)}</span><span class="translate-y-2/3 group-hover:-translate-y-0 absolute left-0 opacity-0 group-hover:opacity-100 transition-all px-2"${_scopeId}>${serverRenderer.exports.ssrInterpolate(props.labelHover)}</span></span>`);
            }
            _push2(`</div>`);
            serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue_cjs_prod.renderSlot(_ctx.$slots, "before"),
              vue_cjs_prod.createVNode("div", null, [
                !props.labelHover ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 0 }, vue_cjs_prod.toDisplayString(props.label), 1)) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", {
                  key: 1,
                  class: "relative"
                }, [
                  vue_cjs_prod.createVNode("span", { class: "group-hover:-translate-y-2/3 inline-block group-hover:opacity-0 transition-all lg:px-2" }, vue_cjs_prod.toDisplayString(props.label), 1),
                  vue_cjs_prod.createVNode("span", { class: "translate-y-2/3 group-hover:-translate-y-0 absolute left-0 opacity-0 group-hover:opacity-100 transition-all px-2" }, vue_cjs_prod.toDisplayString(props.labelHover), 1)
                ]))
              ]),
              vue_cjs_prod.renderSlot(_ctx.$slots, "after")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Basic/Button.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    vue_cjs_prod.ref([]);
    const formState = vue_cjs_prod.ref("ready");
    const formData = vue_cjs_prod.reactive({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    const checked = vue_cjs_prod.ref(false);
    const disabled = vue_cjs_prod.computed(() => !(formData.name && formData.email && formData.phone && formData.subject && formData.message && checked.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOrt = __nuxt_component_0$1;
      const _component_IconOeffnungszeiten = __nuxt_component_1$1;
      const _component_IconTelefon = __nuxt_component_2$1;
      const _component_IconEmail = __nuxt_component_4;
      const _component_IconPrinter = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_5;
      const _component_BasicButton = _sfc_main$f;
      _push(`<section${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        id: "kontakt",
        class: "flex flex-col-reverse lg:flex-row"
      }, _attrs))}><div class="lg:w-1/2 flex items-center pt-4 xl:pt-8"><div class="max-w-xl mx-auto px-4 py-12 md:px-4 lg:px-3"><div class="pb-16 flex flex-col text-sm"><div class="bg-bs-red w-16 h-1 lg:h-2"></div><h3 class="uppercase leading-none text-xl md:text-2xl xl:text-5xl">Kontakt</h3><div class="flex text-xs lg:text-lg"><ul class="w-full xl:grid grid-cols-2 gap-x-16"><li class="flex w-full">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_IconOrt, { class: "w-[16px] lg:!min-w-[16px] lg:w-[20px] self-start" }, null, _parent));
      _push(`<p class="ml-2 pb-2 text-sm lg:text-lg">BS Dienstleistungen - Bianca\xA0Sch\xE4fers<br>Schulstra\xDFe 2 | 57392 Schmallenberg-Felbecke</p></li><li class="flex">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_IconOeffnungszeiten, { class: "w-3 lg:w-4 self-start" }, null, _parent));
      _push(`<p class="ml-2 pb-2 text-sm lg:text-lg">Mo.-Fr.: 08.00 Uhr - 18.00 Uhr<br>Sa.: 08.00 Uhr - 12.00 Uhr</p></li><li class="flex">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_IconTelefon, { class: "w-3 lg:w-4 self-start" }, null, _parent));
      _push(`<p class="ml-2 pb-2 text-sm lg:text-lg"><a href="tel:4929729622800">+49 (0) 2972 - 9622800</a></p></li><li class="flex">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_IconEmail, { class: "w-3 lg:w-4 self-start" }, null, _parent));
      _push(`<p class="ml-2 pb-2 text-sm lg:text-lg"><a href="mailto:info@bsdienstleistungen.eu">info@bsdienstleistungen.eu</a></p></li><li class="flex">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_IconPrinter, { class: "w-3 lg:w-4 self-start" }, null, _parent));
      _push(`<p class="ml-2 pb-2 text-sm lg:text-lg">+49 (0) 2972 - 962229</p></li></ul></div></div><div class="mb-16"><div class="bg-bs-blue w-16 h-1 lg:h-2"></div><h3 class="uppercase leading-none text-xl md:text-2xl xl:text-5xl">Schreiben sie uns eine Nachricht</h3>`);
      if (formState.value === "ready") {
        _push(`<form class="mt-8"><div class="xl:w-full mx-auto mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"><div class="flex flex-col py-3 px-1"><input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:border-b-0 focus:ring-bs-red border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="name"${serverRenderer.exports.ssrRenderAttr("value", formData.name)} placeholder="Name" required type="text"></div><div class="flex flex-col py-3 px-1"><input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="email"${serverRenderer.exports.ssrRenderAttr("value", formData.email)} placeholder="eMail" required type="email"></div><div class="flex flex-col py-3 px-1"><input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="phone"${serverRenderer.exports.ssrRenderAttr("value", formData.phone)} placeholder="Telefon" type="tel"></div><div class="flex flex-col py-3 px-1"><input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="subject"${serverRenderer.exports.ssrRenderAttr("value", formData.subject)} placeholder="Betreff" type="text"></div></div><div class="flex flex-col mx-auto py-6 px-1"><textarea class="pl-2 focus:outline-none focus:ring-1 focus:ring-bs-red focus:border-transparent focus:border-b-0 block w-full shadow-sm text-sm lg:text-lg border-bs-black border-b" placeholder="Nachricht" required id="message" rows="5">${serverRenderer.exports.ssrInterpolate(formData.message)}</textarea></div><div class="py-2 px-1"><input${serverRenderer.exports.ssrIncludeBooleanAttr(Array.isArray(checked.value) ? serverRenderer.exports.ssrLooseContain(checked.value, null) : checked.value) ? " checked" : ""} id="data-protection-form" class="w-3 h-3 border-2 border-black bg-transparent focus:outline-none focus:ring-0" type="checkbox"><label for="data-protection-form" class="text-sm pl-2">Ja, ich habe die `);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: "/datenschutz",
          class: "underline"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Datenschutzerkl\xE4rung`);
            } else {
              return [
                vue_cjs_prod.createTextVNode("Datenschutzerkl\xE4rung")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.</label></div>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_BasicButton, {
          disabled: vue_cjs_prod.unref(disabled),
          class: "text-bs-white disabled:cursor-not-allowed w-full justify-center m-auto my-8 lg:my-6 py-2 px-4 border border-transparent text-sm lg:text-lg shadow-sm text-white bg-bs-red hover:bg-bs-red transition-all uppercase",
          color: vue_cjs_prod.unref(disabled) ? "Red" : "Blue",
          label: "Nachricht senden",
          tag: "button"
        }, null, _parent));
        _push(`</form>`);
      } else if (formState.value === "loading") {
        _push(`<div><svg role="status" class="mx-auto block w-8 h-8 text-msg-gray animate-spin fill-msg-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg></div>`);
      } else if (formState.value === "succeeded") {
        _push(`<div><p class="mt-4">Die Nachricht wurde erfolgreich versandt!</p></div>`);
      } else {
        _push(`<div><p class="mt-4">Die Nachricht konnte nicht gesendet werden.</p></div>`);
      }
      _push(`</div></div></div><div class="lg:w-1/2 aspect-square"><iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.9400200570767!2d8.225812116088818!3d51.16489517958037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbf145c9f42d7b%3A0x647827d47eff595e!2sBS%20Dienstleistungen%20-%20Bianca%20Sch%C3%A4fers!5e0!3m2!1sde!2sde!4v1654812017432!5m2!1sde!2sde" width="600" height="450" style="${serverRenderer.exports.ssrRenderStyle({ "border": "0" })}" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></section>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Contact.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const meta = void 0;
const routes = [
  {
    name: "datenschutz",
    path: "/datenschutz",
    file: "C:/Users/cichy/Downloads/BS-main/BS-main/pages/datenschutz.vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return datenschutz$1;
    })
  },
  {
    name: "impressum",
    path: "/impressum",
    file: "C:/Users/cichy/Downloads/BS-main/BS-main/pages/impressum.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return impressum$1;
    })
  },
  {
    name: "index",
    path: "/",
    file: "C:/Users/cichy/Downloads/BS-main/BS-main/pages/index.vue",
    children: [],
    meta,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$1;
    })
  }
];
const configRouterOptions = {};
const routerOptions = __spreadValues({}, configRouterOptions);
const globalMiddleware = [];
const namedMiddleware = {};
const C_58_47Users_47cichy_47Downloads_47BS_45main_47BS_45main_47node_modules_47nuxt_47dist_47pages_47runtime_47router = defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = vueRouter_cjs_prod.createRouter(__spreadProps(__spreadValues({}, routerOptions), {
    history: routerHistory,
    routes
  }));
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = vue_cjs_prod.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = vue_cjs_prod.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = vue_cjs_prod.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._activeRoute = vue_cjs_prod.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    callWithNuxt(nuxtApp, throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    var _a;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a = namedMiddleware[entry2]) == null ? void 0 : _a.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, throwError, [createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace(__spreadProps(__spreadValues({}, router.resolve(initialURL)), {
        name: void 0,
        force: true
      }));
    } catch (error2) {
      callWithNuxt(nuxtApp, throwError, [error2]);
    }
  });
  return { provide: { router } };
});
const _plugins = [
  preload,
  C_58_47Users_47cichy_47Downloads_47BS_45main_47BS_45main_47_46nuxt_47components_46plugin_46mjs,
  C_58_47Users_47cichy_47Downloads_47BS_45main_47BS_45main_47node_modules_47nuxt_47dist_47head_47runtime_47lib_47vueuse_45head_46plugin,
  C_58_47Users_47cichy_47Downloads_47BS_45main_47BS_45main_47node_modules_47nuxt_47dist_47head_47runtime_47plugin,
  C_58_47Users_47cichy_47Downloads_47BS_45main_47BS_45main_47node_modules_47nuxt_47dist_47pages_47runtime_47router
];
const _sfc_main$d = {
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "404"
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_5;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-011aae6d><div class="fixed left-0 right-0 spotlight z-10" data-v-011aae6d></div><div class="max-w-520px text-center z-20" data-v-011aae6d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-011aae6d>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-011aae6d>${serverRenderer.exports.ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-011aae6d>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Error404 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-011aae6d"]]);
const _sfc_main$c = {
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "500"
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-6aee6495><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-6aee6495></div><div class="max-w-520px text-center" data-v-6aee6495><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-6aee6495>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-6aee6495>${serverRenderer.exports.ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Error500 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-6aee6495"]]);
const _sfc_main$a = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const error = props.error;
    (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = String(error.statusCode || 500);
    const is404 = statusCode === "404";
    const statusMessage = (_a = error.statusMessage) != null ? _a : is404 ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = void 0;
    const ErrorTemplate = is404 ? Error404 : Error500;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorTemplate), vue_cjs_prod.mergeProps({ statusCode: vue_cjs_prod.unref(statusCode), statusMessage: vue_cjs_prod.unref(statusMessage), description: vue_cjs_prod.unref(description), stack: vue_cjs_prod.unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, throwError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(_sfc_main$a), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const layouts = {
  default: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _default$1;
  }))
};
const defaultLayoutTransition = { name: "layout", mode: "out-in" };
const __nuxt_component_0 = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = vue_cjs_prod.isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      return _wrapIf(vue_cjs_prod.Transition, hasLayout && ((_c = route.meta.layoutTransition) != null ? _c : defaultLayoutTransition), _wrapIf(layouts[layout], hasLayout, context.slots)).default();
    };
  }
});
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$9);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = _sfc_main$p;
  _push(`<section${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_BasicSeoHead, {
    title: "Datenschutz",
    description: "Datenschutz"
  }, null, _parent));
  _push(`<div class="min-h-screen"><h1>Datenschutz</h1></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datenschutz.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const datenschutz = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const datenschutz$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": datenschutz
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = _sfc_main$p;
  _push(`<section${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_BasicSeoHead, {
    title: "Impressum",
    description: "Impressum"
  }, null, _parent));
  _push(`<div class="min-h-screen"><h1>Impressum</h1></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impressum.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const impressum = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const impressum$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": impressum
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = _sfc_main$p;
  const _component_SectionImageContent = _sfc_main$o;
  const _component_IconPkw = __nuxt_component_2$2;
  const _component_IconLkw = __nuxt_component_3$1;
  const _component_IconMotorsport = __nuxt_component_4$1;
  const _component_SectionContact = _sfc_main$e;
  _push(`<section${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_BasicSeoHead, {
    title: "BS Dienstleistungen - Bianca Sch\xE4fers",
    description: "Tankstelle Reifendienst Dienstleistungen im Bereich HDD Sp\xFClbohrverfahren Frachtenvermittlung Spedition Baustoffhandel"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_SectionImageContent, {
    id: "tankstelle",
    "image-link": "assets/images/bs_tankstelle.jpg",
    "title-bar-color": "#803a33",
    title: "tankstelle",
    direction: "left"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm lg:text-lg"${_scopeId}> Die Tankstelle wurde von der BS Dienstleistung im M\xE4rz 2020 \xFCbernommen und im Januar 2021 mit einer neuen Tanks\xE4ule ausgestattet. Mit einem Tankchip kann rund um die Uhr Diesel und AdBlue getankt werden. Die Tankstellenpreise werden nach jeder Belieferung neu angepasst und im S\xE4ulenbereich ausgeschildert. </p>`);
      } else {
        return [
          vue_cjs_prod.createVNode("p", { class: "text-sm lg:text-lg" }, " Die Tankstelle wurde von der BS Dienstleistung im M\xE4rz 2020 \xFCbernommen und im Januar 2021 mit einer neuen Tanks\xE4ule ausgestattet. Mit einem Tankchip kann rund um die Uhr Diesel und AdBlue getankt werden. Die Tankstellenpreise werden nach jeder Belieferung neu angepasst und im S\xE4ulenbereich ausgeschildert. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_SectionImageContent, {
    id: "frachtenvermittlung",
    "image-link": "assets/images/bs_frachtenvermittlung-spedition.jpg",
    "title-bar-color": "#fb311c",
    title: "frachtenvermittlung\xA0/ spedition",
    direction: "right"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm lg:text-lg"${_scopeId}>Wir vermarkten Ihre Ladungen EU weit. Teil und Komplettladungen aller Art.</p>`);
      } else {
        return [
          vue_cjs_prod.createVNode("p", { class: "text-sm lg:text-lg" }, "Wir vermarkten Ihre Ladungen EU weit. Teil und Komplettladungen aller Art.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_SectionImageContent, {
    id: "baustoffhandel",
    "image-link": "assets/images/bs_baustoffhandel.jpg",
    "title-bar-color": "#97754d",
    title: "baustoffhandel",
    direction: "left"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm lg:text-lg"${_scopeId}>Unser Unternehmen bietet Ihnen gerne Konditionen im Bereich Sand, Kies und Zement f\xFCr Ihr Lager oder direkt zur Baustelle an. Weiterhin besitzen wir gute Kontakte zu Lieferanten von Reitsanden und Bodengemischen.</p>`);
      } else {
        return [
          vue_cjs_prod.createVNode("p", { class: "text-sm lg:text-lg" }, "Unser Unternehmen bietet Ihnen gerne Konditionen im Bereich Sand, Kies und Zement f\xFCr Ihr Lager oder direkt zur Baustelle an. Weiterhin besitzen wir gute Kontakte zu Lieferanten von Reitsanden und Bodengemischen.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_SectionImageContent, {
    id: "reifendienst",
    "image-link": "assets/images/bs_reifendienst.jpg",
    "title-bar-color": "#fb7f43",
    title: "reifendienst",
    direction: "right"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="md:flex md:flex-row w-full lg:max-w-none justify-between"${_scopeId}><article class="my-6 mx-1 flex-col self-center sm:self-end text-center"${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_IconPkw, null, null, _parent2, _scopeId));
        _push2(`<p class="font-bold py-2 text-sm lg:text-lg"${_scopeId}>PKW</p></article><article class="my-6 flex-col self-center sm:self-end text-center"${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_IconLkw, null, null, _parent2, _scopeId));
        _push2(`<p class="font-bold py-2 text-sm lg:text-lg"${_scopeId}>LKW</p></article><article class="my-6 flex-col self-center sm:self-end text-center"${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_IconMotorsport, null, null, _parent2, _scopeId));
        _push2(`<p class="font-bold py-2 text-sm lg:text-lg"${_scopeId}>Motorsportfahrzeuge</p></article></div><p class="text-sm lg:text-lg max-w-"${_scopeId}> Wir k\xF6nnen Ihnen alle Reifen liefern, von PKW, SUV \xFCber Motorsportreifen bis hin zu allen LKW Reifen und Marken. Wenn Sie schon Reifen haben und die nur umgezogen werden m\xFCssen, sind wir auch Ihr richtiger Ansprechpartner. Sprechen Sie mit uns, wir finden eine L\xF6sung. </p>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "md:flex md:flex-row w-full lg:max-w-none justify-between" }, [
            vue_cjs_prod.createVNode("article", { class: "my-6 mx-1 flex-col self-center sm:self-end text-center" }, [
              vue_cjs_prod.createVNode(_component_IconPkw),
              vue_cjs_prod.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "PKW")
            ]),
            vue_cjs_prod.createVNode("article", { class: "my-6 flex-col self-center sm:self-end text-center" }, [
              vue_cjs_prod.createVNode(_component_IconLkw),
              vue_cjs_prod.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "LKW")
            ]),
            vue_cjs_prod.createVNode("article", { class: "my-6 flex-col self-center sm:self-end text-center" }, [
              vue_cjs_prod.createVNode(_component_IconMotorsport),
              vue_cjs_prod.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "Motorsportfahrzeuge")
            ])
          ]),
          vue_cjs_prod.createVNode("p", { class: "text-sm lg:text-lg max-w-" }, " Wir k\xF6nnen Ihnen alle Reifen liefern, von PKW, SUV \xFCber Motorsportreifen bis hin zu allen LKW Reifen und Marken. Wenn Sie schon Reifen haben und die nur umgezogen werden m\xFCssen, sind wir auch Ihr richtiger Ansprechpartner. Sprechen Sie mit uns, wir finden eine L\xF6sung. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_SectionImageContent, {
    id: "dienstleistungen",
    "image-link": "assets/images/bs-dienstleistungen-bianca-schaefers_spuelbohrverfahren.jpg",
    "title-bar-color": "#f1d4d0",
    title: "Dienstleistungen im Bereich HDD Spu\u0308lbohrverfahren",
    direction: "left"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm lg:text-lg"${_scopeId}>Unsere Mitarbeiter haben sich in den letzten 2 Jahren besonders im Bereich Vermessung und Recycling eingearbeitet. Wir stehen aber auch f\xFCr alle anderen Arbeiten rund um das HDD Sp\xFClbohrverfahren (bis auf Bedienung des Bohrger\xE4tes) zur Verf\xFCgung.</p>`);
      } else {
        return [
          vue_cjs_prod.createVNode("p", { class: "text-sm lg:text-lg" }, "Unsere Mitarbeiter haben sich in den letzten 2 Jahren besonders im Bereich Vermessung und Recycling eingearbeitet. Wir stehen aber auch f\xFCr alle anderen Arbeiten rund um das HDD Sp\xFClbohrverfahren (bis auf Bedienung des Bohrger\xE4tes) zur Verf\xFCgung.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_SectionContact, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    version: "1.1",
    id: "Ebene_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 267.91 28.31",
    style: { "enable-background": "new 0 0 267.91 28.31" },
    "xml:space": "preserve"
  }, _attrs))}><g class="st0"><path class="st1" d="M16.85,5.83c0,0.63-0.09,1.23-0.27,1.8c-0.18,0.56-0.43,1.08-0.77,1.55c-0.34,0.47-0.75,0.88-1.22,1.24
		c-0.48,0.36-1.01,0.65-1.6,0.86c0.47,0.09,0.91,0.24,1.31,0.45s0.74,0.49,1.02,0.82c0.28,0.33,0.5,0.73,0.66,1.18
		c0.16,0.46,0.23,0.97,0.23,1.54c0,0.52-0.07,1.05-0.21,1.6c-0.14,0.55-0.36,1.09-0.66,1.62s-0.69,1.03-1.18,1.51
		c-0.48,0.48-1.07,0.9-1.75,1.26c-0.68,0.36-1.47,0.64-2.36,0.85c-0.89,0.21-1.93,0.31-3.11,0.31H1.16c-0.44,0-0.76-0.11-0.96-0.32
		c-0.2-0.21-0.25-0.55-0.15-1.02L3.69,2.92C3.78,2.44,3.97,2.1,4.26,1.89C4.56,1.68,4.9,1.58,5.28,1.58h5.01
		c1.11,0,2.06,0.09,2.87,0.26s1.48,0.43,2.03,0.78c0.55,0.35,0.96,0.79,1.24,1.32C16.71,4.47,16.85,5.1,16.85,5.83z M11.78,15.48
		c0-0.69-0.26-1.23-0.77-1.63s-1.32-0.6-2.44-0.6H5.75l-1.18,5.93h3c0.76,0,1.4-0.11,1.93-0.32s0.95-0.49,1.29-0.84
		c0.34-0.34,0.59-0.74,0.75-1.18C11.7,16.4,11.78,15.95,11.78,15.48z M12.49,6.62c0-0.3-0.05-0.56-0.16-0.79s-0.27-0.42-0.48-0.58
		s-0.49-0.28-0.81-0.37C10.7,4.8,10.28,4.75,9.78,4.75h-2.3l-1.1,5.41h2.38c0.7,0,1.28-0.11,1.74-0.33c0.46-0.22,0.84-0.5,1.14-0.85
		c0.29-0.35,0.51-0.73,0.64-1.15C12.42,7.41,12.49,7.01,12.49,6.62z"></path><path class="st1" d="M32.97,3.17c0,0.09-0.01,0.21-0.02,0.37c-0.02,0.16-0.04,0.34-0.07,0.53s-0.07,0.39-0.12,0.59
		c-0.05,0.2-0.11,0.38-0.18,0.55c-0.07,0.17-0.15,0.3-0.23,0.41c-0.09,0.11-0.18,0.16-0.27,0.16c-0.15,0-0.34-0.07-0.56-0.2
		C31.28,5.45,31,5.3,30.67,5.15c-0.33-0.16-0.71-0.3-1.15-0.44c-0.44-0.13-0.94-0.2-1.5-0.2c-0.58,0-1.07,0.08-1.47,0.24
		c-0.4,0.16-0.73,0.37-0.99,0.64c-0.26,0.26-0.45,0.56-0.57,0.89C24.86,6.6,24.8,6.93,24.8,7.27c0,0.39,0.1,0.73,0.29,1.02
		c0.19,0.3,0.45,0.57,0.77,0.82c0.32,0.25,0.69,0.5,1.1,0.73s0.83,0.48,1.26,0.74s0.84,0.54,1.26,0.85c0.41,0.31,0.78,0.66,1.1,1.06
		c0.32,0.4,0.58,0.86,0.77,1.39c0.19,0.52,0.29,1.12,0.29,1.8c0,1.01-0.2,1.95-0.61,2.81c-0.41,0.86-0.99,1.62-1.73,2.26
		c-0.75,0.64-1.65,1.14-2.71,1.51c-1.06,0.37-2.23,0.55-3.52,0.55c-0.7,0-1.34-0.06-1.93-0.17c-0.59-0.11-1.11-0.25-1.57-0.41
		c-0.46-0.16-0.84-0.33-1.15-0.51c-0.31-0.18-0.54-0.35-0.69-0.51s-0.23-0.4-0.23-0.72c0-0.09,0.01-0.21,0.03-0.39
		s0.05-0.36,0.09-0.56c0.04-0.2,0.08-0.4,0.14-0.61c0.05-0.21,0.12-0.4,0.19-0.57s0.16-0.31,0.25-0.42c0.09-0.11,0.19-0.16,0.3-0.16
		c0.18,0,0.4,0.08,0.65,0.25c0.25,0.17,0.57,0.35,0.94,0.55c0.38,0.2,0.82,0.38,1.34,0.56s1.13,0.26,1.85,0.26
		c0.63,0,1.19-0.08,1.67-0.24c0.48-0.16,0.88-0.38,1.2-0.66s0.57-0.6,0.73-0.98c0.17-0.37,0.25-0.78,0.25-1.22
		c0-0.4-0.1-0.75-0.29-1.05s-0.45-0.58-0.77-0.83c-0.32-0.25-0.68-0.49-1.08-0.72c-0.4-0.23-0.81-0.47-1.23-0.73
		s-0.83-0.54-1.23-0.84c-0.4-0.3-0.76-0.65-1.08-1.05c-0.32-0.4-0.57-0.87-0.77-1.39C20.5,9.16,20.4,8.55,20.4,7.85
		c0-0.97,0.19-1.86,0.58-2.68c0.39-0.82,0.92-1.52,1.61-2.1c0.69-0.58,1.51-1.04,2.47-1.37c0.96-0.33,2.01-0.49,3.16-0.49
		c0.54,0,1.05,0.04,1.53,0.12c0.48,0.08,0.92,0.18,1.32,0.31c0.4,0.12,0.74,0.26,1.02,0.41s0.47,0.28,0.58,0.38
		c0.11,0.1,0.19,0.21,0.23,0.32C32.94,2.86,32.97,3,32.97,3.17z"></path></g><g class="st0"><path class="st2" d="M60.79,9.12c0,0.64-0.04,1.33-0.12,2.05c-0.08,0.72-0.21,1.45-0.4,2.2c-0.19,0.75-0.44,1.49-0.76,2.22
		c-0.32,0.74-0.71,1.44-1.18,2.11c-0.47,0.67-1.03,1.3-1.68,1.88s-1.4,1.08-2.25,1.51c-0.85,0.42-1.8,0.75-2.87,0.99
		s-2.33,0.35-3.8,0.35h-5.3c-0.17,0-0.34-0.02-0.49-0.06c-0.16-0.04-0.29-0.12-0.39-0.22c-0.1-0.1-0.17-0.24-0.21-0.41
		c-0.04-0.17-0.03-0.39,0.02-0.64L45,2.92c0.09-0.47,0.27-0.81,0.56-1.02c0.29-0.21,0.63-0.31,1.03-0.31h5.03
		c1.65,0,3.04,0.16,4.15,0.48c1.11,0.32,2.04,0.8,2.79,1.43c0.75,0.63,1.3,1.42,1.68,2.36C60.61,6.8,60.79,7.88,60.79,9.12z
		 M56.35,9.62c0-0.68-0.09-1.3-0.27-1.88s-0.48-1.08-0.89-1.5c-0.41-0.42-0.93-0.75-1.57-0.98s-1.5-0.35-2.57-0.35h-2.21
		l-2.85,14.18h2.22c1.13,0,2.08-0.14,2.84-0.41c0.77-0.27,1.44-0.65,2.03-1.13c0.58-0.48,1.08-1.03,1.5-1.66
		c0.41-0.63,0.75-1.29,1.02-1.99c0.26-0.7,0.45-1.41,0.57-2.14C56.29,11.02,56.35,10.31,56.35,9.62z"></path><path class="st2" d="M65.82,21.88c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.37,0.2s-0.38,0.09-0.65,0.12
		c-0.27,0.03-0.6,0.04-0.98,0.04c-0.4,0-0.72-0.01-0.98-0.04c-0.25-0.03-0.45-0.07-0.6-0.12c-0.15-0.05-0.24-0.12-0.28-0.2
		c-0.04-0.08-0.05-0.17-0.03-0.28l2.85-14.34c0.02-0.11,0.07-0.2,0.15-0.28c0.08-0.08,0.2-0.15,0.37-0.21
		c0.17-0.06,0.38-0.1,0.64-0.14c0.26-0.03,0.59-0.05,0.99-0.05s0.72,0.02,0.98,0.05c0.25,0.03,0.45,0.08,0.6,0.14
		c0.15,0.06,0.24,0.13,0.28,0.21c0.04,0.08,0.05,0.17,0.03,0.28L65.82,21.88z M69.98,2.67c-0.08,0.4-0.18,0.73-0.31,1.01
		c-0.13,0.27-0.3,0.49-0.52,0.66c-0.21,0.17-0.48,0.28-0.79,0.35c-0.31,0.07-0.7,0.1-1.16,0.1c-0.45,0-0.82-0.04-1.1-0.1
		c-0.28-0.07-0.5-0.19-0.64-0.35c-0.14-0.17-0.23-0.39-0.25-0.66c-0.02-0.27,0.01-0.61,0.1-1.01c0.08-0.39,0.18-0.71,0.31-0.98
		c0.13-0.27,0.3-0.49,0.52-0.66s0.48-0.29,0.79-0.37c0.31-0.07,0.7-0.11,1.16-0.11c0.45,0,0.82,0.04,1.1,0.11
		c0.28,0.08,0.5,0.2,0.64,0.37c0.14,0.17,0.23,0.39,0.24,0.66C70.08,1.96,70.05,2.29,69.98,2.67z"></path><path class="st2" d="M84.85,10.67c0,0.77-0.17,1.47-0.52,2.09c-0.35,0.62-0.89,1.15-1.63,1.59c-0.74,0.45-1.67,0.79-2.8,1.02
		c-1.13,0.24-2.48,0.35-4.05,0.35h-1.48c-0.04,0.25-0.08,0.49-0.1,0.73c-0.02,0.24-0.03,0.46-0.03,0.67c0,0.87,0.23,1.53,0.68,1.96
		c0.45,0.44,1.18,0.66,2.18,0.66c0.71,0,1.35-0.05,1.91-0.15c0.56-0.1,1.06-0.21,1.48-0.34c0.42-0.12,0.78-0.24,1.06-0.34
		c0.28-0.1,0.48-0.15,0.61-0.15s0.22,0.04,0.27,0.11s0.08,0.19,0.08,0.35c0,0.18-0.02,0.39-0.05,0.63c-0.03,0.24-0.08,0.47-0.14,0.7
		c-0.06,0.23-0.13,0.45-0.23,0.65c-0.09,0.21-0.2,0.36-0.31,0.47c-0.13,0.13-0.37,0.26-0.71,0.39s-0.76,0.25-1.24,0.35
		s-1.03,0.2-1.63,0.27c-0.6,0.07-1.21,0.11-1.84,0.11c-1.03,0-1.93-0.11-2.7-0.32c-0.77-0.21-1.41-0.54-1.93-0.98s-0.9-1-1.16-1.68
		c-0.26-0.68-0.39-1.49-0.39-2.42c0-0.72,0.07-1.49,0.2-2.31c0.13-0.82,0.35-1.63,0.65-2.43c0.3-0.8,0.69-1.57,1.16-2.3
		s1.04-1.37,1.72-1.93c0.67-0.55,1.45-1,2.33-1.33s1.89-0.5,3.01-0.5c0.98,0,1.82,0.12,2.52,0.35c0.7,0.23,1.28,0.54,1.73,0.92
		c0.45,0.38,0.79,0.82,1.01,1.3C84.74,9.65,84.85,10.15,84.85,10.67z M80.87,10.97c0-0.43-0.17-0.79-0.51-1.07
		c-0.34-0.28-0.83-0.43-1.47-0.43c-0.54,0-1.02,0.1-1.44,0.29c-0.42,0.19-0.8,0.45-1.12,0.78c-0.32,0.33-0.6,0.71-0.83,1.16
		c-0.23,0.45-0.42,0.92-0.56,1.43h1.35c0.86,0,1.58-0.06,2.16-0.17c0.58-0.11,1.05-0.27,1.4-0.46s0.61-0.42,0.77-0.68
		C80.79,11.56,80.87,11.27,80.87,10.97z"></path><path class="st2" d="M101.55,10.71c0,0.38-0.02,0.75-0.07,1.13c-0.05,0.38-0.11,0.76-0.19,1.16l-1.79,8.88
		c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.37,0.2c-0.17,0.05-0.38,0.09-0.64,0.12c-0.26,0.03-0.59,0.04-0.99,0.04
		s-0.72-0.01-0.97-0.04c-0.25-0.03-0.45-0.07-0.59-0.12s-0.23-0.12-0.28-0.2c-0.05-0.08-0.06-0.17-0.04-0.28l1.74-8.62
		c0.05-0.26,0.09-0.52,0.12-0.79s0.04-0.5,0.04-0.71c0-0.48-0.1-0.88-0.31-1.19s-0.55-0.47-1.03-0.47c-0.44,0-0.9,0.14-1.38,0.42
		c-0.48,0.28-0.93,0.66-1.35,1.14c-0.42,0.48-0.8,1.04-1.14,1.68c-0.33,0.64-0.57,1.32-0.71,2.04l-1.31,6.51
		c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.37,0.2s-0.38,0.09-0.65,0.12c-0.27,0.03-0.6,0.04-0.98,0.04
		c-0.4,0-0.72-0.01-0.98-0.04c-0.25-0.03-0.45-0.07-0.6-0.12c-0.15-0.05-0.24-0.12-0.28-0.2c-0.04-0.08-0.05-0.17-0.03-0.28
		l2.88-14.39c0.02-0.11,0.07-0.2,0.14-0.28c0.07-0.08,0.18-0.15,0.32-0.19C89.58,6.97,89.77,6.93,90,6.9
		c0.23-0.03,0.51-0.04,0.83-0.04c0.33,0,0.6,0.01,0.81,0.04c0.21,0.03,0.37,0.06,0.49,0.11c0.12,0.05,0.2,0.11,0.23,0.19
		c0.04,0.08,0.05,0.17,0.02,0.28l-0.47,2.37c0.23-0.38,0.53-0.76,0.9-1.15c0.38-0.39,0.81-0.74,1.3-1.05s1.02-0.57,1.6-0.77
		c0.57-0.2,1.17-0.3,1.8-0.3c0.75,0,1.38,0.11,1.89,0.33c0.51,0.22,0.92,0.52,1.24,0.89c0.32,0.38,0.54,0.81,0.68,1.31
		C101.48,9.63,101.55,10.16,101.55,10.71z"></path><path class="st2" d="M115.34,8.14c0,0.13-0.02,0.32-0.06,0.57c-0.04,0.25-0.09,0.51-0.17,0.77s-0.16,0.48-0.27,0.67
		c-0.1,0.19-0.22,0.28-0.35,0.28c-0.14,0-0.3-0.05-0.49-0.15c-0.19-0.1-0.42-0.21-0.68-0.34c-0.27-0.12-0.58-0.23-0.94-0.33
		c-0.36-0.1-0.78-0.14-1.27-0.14c-0.38,0-0.71,0.05-1.01,0.14s-0.54,0.23-0.73,0.39c-0.19,0.17-0.34,0.36-0.44,0.59
		c-0.1,0.23-0.15,0.47-0.15,0.73c0,0.33,0.14,0.61,0.41,0.84c0.27,0.23,0.61,0.44,1.02,0.64c0.41,0.2,0.85,0.41,1.32,0.62
		s0.91,0.48,1.32,0.81s0.75,0.71,1.02,1.18s0.4,1.04,0.4,1.74c0,0.82-0.16,1.57-0.47,2.26c-0.31,0.69-0.77,1.29-1.36,1.8
		c-0.6,0.5-1.32,0.9-2.18,1.18c-0.85,0.29-1.82,0.43-2.89,0.43c-0.52,0-1.01-0.04-1.47-0.11c-0.47-0.08-0.89-0.17-1.26-0.27
		c-0.37-0.11-0.69-0.23-0.94-0.37s-0.45-0.27-0.58-0.39c-0.09-0.09-0.15-0.18-0.19-0.27c-0.04-0.1-0.06-0.22-0.06-0.37
		c0-0.1,0.01-0.22,0.02-0.37c0.02-0.15,0.04-0.32,0.08-0.5s0.08-0.37,0.13-0.55c0.05-0.18,0.1-0.35,0.17-0.5
		c0.06-0.15,0.13-0.27,0.21-0.36c0.08-0.09,0.16-0.14,0.24-0.14c0.15,0,0.32,0.06,0.5,0.19s0.42,0.27,0.71,0.43
		c0.29,0.16,0.65,0.3,1.07,0.44c0.42,0.13,0.95,0.2,1.59,0.2c0.44,0,0.82-0.05,1.15-0.15c0.33-0.1,0.6-0.24,0.81-0.43
		s0.37-0.39,0.48-0.63c0.1-0.24,0.15-0.49,0.15-0.76c0-0.38-0.13-0.68-0.39-0.92c-0.26-0.24-0.59-0.46-0.99-0.66
		s-0.83-0.41-1.3-0.63c-0.47-0.21-0.9-0.48-1.3-0.79s-0.73-0.7-0.99-1.16c-0.26-0.46-0.4-1.04-0.4-1.74c0-0.76,0.15-1.47,0.44-2.13
		s0.71-1.23,1.27-1.72c0.56-0.49,1.24-0.87,2.03-1.14c0.79-0.27,1.7-0.41,2.71-0.41c0.45,0,0.89,0.03,1.31,0.09
		c0.42,0.06,0.81,0.14,1.14,0.23c0.34,0.1,0.63,0.21,0.89,0.32c0.25,0.12,0.43,0.24,0.54,0.36C115.28,7.7,115.34,7.88,115.34,8.14z"></path><path class="st2" d="M127.41,7.65c0,0.11-0.01,0.24-0.03,0.41c-0.02,0.17-0.05,0.35-0.09,0.54c-0.04,0.19-0.09,0.39-0.15,0.58
		s-0.14,0.37-0.22,0.52c-0.08,0.16-0.17,0.29-0.27,0.39c-0.1,0.1-0.21,0.15-0.33,0.15h-3.14L121.82,17
		c-0.03,0.16-0.06,0.35-0.09,0.57c-0.03,0.22-0.04,0.4-0.04,0.54c0,0.43,0.1,0.74,0.31,0.94c0.2,0.2,0.53,0.3,0.97,0.3
		c0.26,0,0.48-0.02,0.66-0.06c0.18-0.04,0.34-0.08,0.48-0.13c0.13-0.05,0.25-0.09,0.35-0.13c0.1-0.04,0.19-0.06,0.27-0.06
		s0.16,0.04,0.22,0.12c0.06,0.08,0.09,0.21,0.09,0.39c0,0.2-0.02,0.43-0.06,0.69s-0.1,0.51-0.17,0.75
		c-0.07,0.24-0.15,0.46-0.23,0.66c-0.09,0.2-0.18,0.35-0.27,0.44s-0.24,0.19-0.44,0.27c-0.19,0.09-0.42,0.16-0.68,0.23
		c-0.26,0.06-0.55,0.12-0.85,0.15c-0.3,0.04-0.6,0.06-0.9,0.06c-0.64,0-1.21-0.07-1.7-0.2c-0.49-0.13-0.9-0.35-1.23-0.64
		s-0.58-0.66-0.75-1.11s-0.25-1-0.25-1.64c0-0.12,0.01-0.25,0.02-0.41c0.01-0.16,0.03-0.32,0.06-0.49c0.03-0.17,0.05-0.35,0.08-0.52
		c0.03-0.18,0.06-0.33,0.09-0.47l1.4-7.01h-1.74c-0.14,0-0.24-0.05-0.31-0.14c-0.06-0.09-0.1-0.27-0.1-0.52
		c0-0.18,0.02-0.42,0.06-0.72c0.04-0.29,0.1-0.58,0.19-0.87c0.09-0.28,0.2-0.53,0.34-0.73s0.31-0.31,0.5-0.31h1.72l0.64-3.21
		c0.02-0.11,0.07-0.2,0.15-0.29c0.08-0.09,0.2-0.16,0.37-0.22c0.17-0.06,0.38-0.1,0.64-0.13c0.26-0.03,0.59-0.04,0.99-0.04
		c0.39,0,0.71,0.01,0.97,0.04c0.26,0.03,0.46,0.07,0.6,0.13c0.14,0.06,0.23,0.13,0.28,0.22c0.05,0.09,0.06,0.18,0.04,0.29
		l-0.64,3.21h3.11c0.18,0,0.31,0.06,0.37,0.18S127.41,7.43,127.41,7.65z"></path><path class="st2" d="M131.6,21.88c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.36,0.2s-0.38,0.09-0.64,0.12
		c-0.27,0.03-0.6,0.04-0.98,0.04c-0.41,0-0.74-0.01-0.99-0.04c-0.25-0.03-0.45-0.07-0.59-0.12c-0.14-0.05-0.23-0.12-0.28-0.2
		c-0.05-0.08-0.06-0.17-0.04-0.28l4.24-21.19c0.02-0.11,0.07-0.2,0.15-0.29c0.08-0.08,0.2-0.16,0.37-0.22
		c0.17-0.06,0.39-0.11,0.65-0.14c0.26-0.03,0.59-0.05,0.99-0.05s0.72,0.02,0.98,0.05c0.25,0.03,0.45,0.08,0.59,0.14
		c0.14,0.06,0.23,0.13,0.27,0.22c0.04,0.09,0.05,0.18,0.03,0.29L131.6,21.88z"></path><path class="st2" d="M150.63,10.67c0,0.77-0.17,1.47-0.52,2.09c-0.35,0.62-0.89,1.15-1.63,1.59c-0.74,0.45-1.67,0.79-2.8,1.02
		c-1.13,0.24-2.48,0.35-4.05,0.35h-1.48c-0.04,0.25-0.08,0.49-0.1,0.73c-0.02,0.24-0.03,0.46-0.03,0.67c0,0.87,0.23,1.53,0.68,1.96
		c0.45,0.44,1.18,0.66,2.18,0.66c0.71,0,1.35-0.05,1.91-0.15c0.56-0.1,1.06-0.21,1.48-0.34c0.42-0.12,0.78-0.24,1.06-0.34
		c0.28-0.1,0.48-0.15,0.61-0.15s0.22,0.04,0.27,0.11s0.08,0.19,0.08,0.35c0,0.18-0.02,0.39-0.05,0.63c-0.03,0.24-0.08,0.47-0.14,0.7
		c-0.06,0.23-0.13,0.45-0.23,0.65c-0.09,0.21-0.2,0.36-0.31,0.47c-0.13,0.13-0.37,0.26-0.71,0.39s-0.76,0.25-1.24,0.35
		s-1.03,0.2-1.63,0.27c-0.6,0.07-1.21,0.11-1.84,0.11c-1.03,0-1.93-0.11-2.7-0.32c-0.77-0.21-1.41-0.54-1.93-0.98s-0.9-1-1.16-1.68
		c-0.26-0.68-0.39-1.49-0.39-2.42c0-0.72,0.07-1.49,0.2-2.31c0.13-0.82,0.35-1.63,0.65-2.43c0.3-0.8,0.69-1.57,1.16-2.3
		s1.04-1.37,1.72-1.93c0.67-0.55,1.45-1,2.33-1.33s1.89-0.5,3.01-0.5c0.98,0,1.82,0.12,2.52,0.35c0.7,0.23,1.28,0.54,1.73,0.92
		c0.45,0.38,0.79,0.82,1.01,1.3C150.52,9.65,150.63,10.15,150.63,10.67z M146.65,10.97c0-0.43-0.17-0.79-0.51-1.07
		c-0.34-0.28-0.83-0.43-1.47-0.43c-0.54,0-1.02,0.1-1.44,0.29c-0.42,0.19-0.8,0.45-1.12,0.78c-0.32,0.33-0.6,0.71-0.83,1.16
		c-0.23,0.45-0.42,0.92-0.56,1.43h1.35c0.86,0,1.58-0.06,2.16-0.17c0.58-0.11,1.05-0.27,1.4-0.46s0.61-0.42,0.77-0.68
		C146.57,11.56,146.65,11.27,146.65,10.97z"></path><path class="st2" d="M155.91,21.88c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.37,0.2s-0.38,0.09-0.65,0.12
		c-0.27,0.03-0.6,0.04-0.98,0.04c-0.4,0-0.72-0.01-0.98-0.04c-0.25-0.03-0.45-0.07-0.6-0.12c-0.15-0.05-0.24-0.12-0.28-0.2
		c-0.04-0.08-0.05-0.17-0.03-0.28l2.85-14.34c0.02-0.11,0.07-0.2,0.15-0.28c0.08-0.08,0.2-0.15,0.37-0.21
		c0.17-0.06,0.38-0.1,0.64-0.14c0.26-0.03,0.59-0.05,0.99-0.05s0.72,0.02,0.98,0.05c0.25,0.03,0.45,0.08,0.6,0.14
		c0.15,0.06,0.24,0.13,0.28,0.21c0.04,0.08,0.05,0.17,0.03,0.28L155.91,21.88z M160.07,2.67c-0.08,0.4-0.18,0.73-0.31,1.01
		c-0.13,0.27-0.3,0.49-0.52,0.66c-0.21,0.17-0.48,0.28-0.79,0.35c-0.31,0.07-0.7,0.1-1.16,0.1c-0.45,0-0.82-0.04-1.1-0.1
		c-0.28-0.07-0.5-0.19-0.64-0.35c-0.14-0.17-0.23-0.39-0.25-0.66c-0.02-0.27,0.01-0.61,0.1-1.01c0.08-0.39,0.18-0.71,0.31-0.98
		c0.13-0.27,0.3-0.49,0.52-0.66s0.48-0.29,0.79-0.37c0.31-0.07,0.7-0.11,1.16-0.11c0.45,0,0.82,0.04,1.1,0.11
		c0.28,0.08,0.5,0.2,0.64,0.37c0.14,0.17,0.23,0.39,0.24,0.66C160.17,1.96,160.14,2.29,160.07,2.67z"></path><path class="st2" d="M171.82,8.14c0,0.13-0.02,0.32-0.06,0.57c-0.04,0.25-0.09,0.51-0.17,0.77s-0.16,0.48-0.27,0.67
		c-0.1,0.19-0.22,0.28-0.35,0.28c-0.14,0-0.3-0.05-0.49-0.15c-0.19-0.1-0.42-0.21-0.68-0.34c-0.27-0.12-0.58-0.23-0.94-0.33
		c-0.36-0.1-0.78-0.14-1.27-0.14c-0.38,0-0.71,0.05-1.01,0.14s-0.54,0.23-0.73,0.39c-0.19,0.17-0.34,0.36-0.44,0.59
		c-0.1,0.23-0.15,0.47-0.15,0.73c0,0.33,0.14,0.61,0.41,0.84c0.27,0.23,0.61,0.44,1.02,0.64c0.41,0.2,0.85,0.41,1.32,0.62
		s0.91,0.48,1.32,0.81s0.75,0.71,1.02,1.18s0.4,1.04,0.4,1.74c0,0.82-0.16,1.57-0.47,2.26c-0.31,0.69-0.77,1.29-1.36,1.8
		c-0.6,0.5-1.32,0.9-2.18,1.18c-0.85,0.29-1.82,0.43-2.89,0.43c-0.52,0-1.01-0.04-1.47-0.11c-0.47-0.08-0.89-0.17-1.26-0.27
		c-0.37-0.11-0.69-0.23-0.94-0.37s-0.45-0.27-0.58-0.39c-0.09-0.09-0.15-0.18-0.19-0.27c-0.04-0.1-0.06-0.22-0.06-0.37
		c0-0.1,0.01-0.22,0.02-0.37c0.02-0.15,0.04-0.32,0.08-0.5s0.08-0.37,0.13-0.55c0.05-0.18,0.1-0.35,0.17-0.5
		c0.06-0.15,0.13-0.27,0.21-0.36c0.08-0.09,0.16-0.14,0.24-0.14c0.15,0,0.32,0.06,0.5,0.19s0.42,0.27,0.71,0.43
		c0.29,0.16,0.65,0.3,1.07,0.44c0.42,0.13,0.95,0.2,1.59,0.2c0.44,0,0.82-0.05,1.15-0.15c0.33-0.1,0.6-0.24,0.81-0.43
		s0.37-0.39,0.48-0.63c0.1-0.24,0.15-0.49,0.15-0.76c0-0.38-0.13-0.68-0.39-0.92c-0.26-0.24-0.59-0.46-0.99-0.66
		s-0.83-0.41-1.3-0.63c-0.47-0.21-0.9-0.48-1.3-0.79s-0.73-0.7-0.99-1.16c-0.26-0.46-0.4-1.04-0.4-1.74c0-0.76,0.15-1.47,0.44-2.13
		s0.71-1.23,1.27-1.72c0.56-0.49,1.24-0.87,2.03-1.14c0.79-0.27,1.7-0.41,2.71-0.41c0.45,0,0.89,0.03,1.31,0.09
		c0.42,0.06,0.81,0.14,1.14,0.23c0.34,0.1,0.63,0.21,0.89,0.32c0.25,0.12,0.43,0.24,0.54,0.36C171.76,7.7,171.82,7.88,171.82,8.14z"></path><path class="st2" d="M183.88,7.65c0,0.11-0.01,0.24-0.03,0.41c-0.02,0.17-0.05,0.35-0.09,0.54c-0.04,0.19-0.09,0.39-0.15,0.58
		s-0.14,0.37-0.22,0.52c-0.08,0.16-0.17,0.29-0.27,0.39c-0.1,0.1-0.21,0.15-0.33,0.15h-3.14L178.29,17
		c-0.03,0.16-0.06,0.35-0.09,0.57c-0.03,0.22-0.04,0.4-0.04,0.54c0,0.43,0.1,0.74,0.31,0.94c0.2,0.2,0.53,0.3,0.97,0.3
		c0.26,0,0.48-0.02,0.66-0.06c0.18-0.04,0.34-0.08,0.48-0.13c0.13-0.05,0.25-0.09,0.35-0.13c0.1-0.04,0.19-0.06,0.27-0.06
		s0.16,0.04,0.22,0.12c0.06,0.08,0.09,0.21,0.09,0.39c0,0.2-0.02,0.43-0.06,0.69s-0.1,0.51-0.17,0.75
		c-0.07,0.24-0.15,0.46-0.23,0.66c-0.09,0.2-0.18,0.35-0.27,0.44s-0.24,0.19-0.44,0.27c-0.19,0.09-0.42,0.16-0.68,0.23
		c-0.26,0.06-0.55,0.12-0.85,0.15c-0.3,0.04-0.6,0.06-0.9,0.06c-0.64,0-1.21-0.07-1.7-0.2c-0.49-0.13-0.9-0.35-1.23-0.64
		s-0.58-0.66-0.75-1.11s-0.25-1-0.25-1.64c0-0.12,0.01-0.25,0.02-0.41c0.01-0.16,0.03-0.32,0.06-0.49c0.03-0.17,0.05-0.35,0.08-0.52
		c0.03-0.18,0.06-0.33,0.09-0.47l1.4-7.01h-1.74c-0.14,0-0.24-0.05-0.31-0.14c-0.06-0.09-0.1-0.27-0.1-0.52
		c0-0.18,0.02-0.42,0.06-0.72c0.04-0.29,0.1-0.58,0.19-0.87c0.09-0.28,0.2-0.53,0.34-0.73s0.31-0.31,0.5-0.31h1.72l0.64-3.21
		c0.02-0.11,0.07-0.2,0.15-0.29c0.08-0.09,0.2-0.16,0.37-0.22c0.17-0.06,0.38-0.1,0.64-0.13c0.26-0.03,0.59-0.04,0.99-0.04
		c0.39,0,0.71,0.01,0.97,0.04c0.26,0.03,0.46,0.07,0.6,0.13c0.14,0.06,0.23,0.13,0.28,0.22c0.05,0.09,0.06,0.18,0.04,0.29
		l-0.64,3.21h3.11c0.18,0,0.31,0.06,0.37,0.18S183.88,7.43,183.88,7.65z"></path><path class="st2" d="M197.35,21.9c-0.02,0.11-0.07,0.2-0.14,0.28c-0.07,0.08-0.18,0.15-0.32,0.19c-0.14,0.05-0.33,0.09-0.56,0.11
		c-0.23,0.03-0.5,0.04-0.84,0.04s-0.6-0.01-0.81-0.04c-0.21-0.03-0.37-0.06-0.49-0.11c-0.12-0.05-0.2-0.11-0.23-0.19
		c-0.04-0.08-0.04-0.17-0.01-0.28l0.44-2.34c-0.21,0.38-0.51,0.75-0.89,1.14c-0.38,0.38-0.81,0.73-1.3,1.05
		c-0.49,0.32-1.02,0.57-1.59,0.76s-1.15,0.29-1.76,0.29c-0.75,0-1.39-0.11-1.91-0.31c-0.52-0.21-0.94-0.49-1.26-0.85
		c-0.32-0.36-0.55-0.79-0.69-1.3c-0.14-0.5-0.22-1.05-0.22-1.64c0-0.37,0.02-0.74,0.07-1.12c0.05-0.38,0.11-0.77,0.19-1.17
		l1.77-8.91c0.02-0.11,0.07-0.2,0.15-0.28c0.08-0.08,0.2-0.15,0.37-0.19c0.17-0.05,0.38-0.09,0.65-0.11
		c0.27-0.03,0.6-0.04,0.98-0.04c0.4,0,0.72,0.01,0.98,0.04c0.25,0.03,0.45,0.06,0.59,0.11c0.14,0.05,0.23,0.11,0.28,0.19
		c0.05,0.08,0.06,0.17,0.04,0.28l-1.71,8.64c-0.05,0.24-0.09,0.48-0.12,0.74s-0.04,0.5-0.04,0.74c0,0.26,0.02,0.49,0.07,0.7
		c0.05,0.21,0.13,0.39,0.23,0.54s0.24,0.26,0.41,0.34s0.37,0.11,0.6,0.11c0.44,0,0.9-0.14,1.38-0.43c0.48-0.29,0.93-0.68,1.36-1.18
		c0.43-0.5,0.81-1.09,1.15-1.77c0.34-0.68,0.59-1.42,0.77-2.21l1.22-6.22c0.01-0.11,0.06-0.2,0.15-0.28
		c0.09-0.08,0.21-0.15,0.38-0.19c0.17-0.05,0.38-0.09,0.65-0.11c0.27-0.03,0.6-0.04,0.98-0.04c0.4,0,0.72,0.01,0.98,0.04
		c0.25,0.03,0.45,0.06,0.6,0.11c0.15,0.05,0.24,0.11,0.28,0.19c0.04,0.08,0.05,0.17,0.03,0.28L197.35,21.9z"></path><path class="st2" d="M216.88,10.71c0,0.38-0.02,0.75-0.07,1.13c-0.05,0.38-0.11,0.76-0.19,1.16l-1.79,8.88
		c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.37,0.2c-0.17,0.05-0.38,0.09-0.64,0.12c-0.26,0.03-0.59,0.04-0.99,0.04
		s-0.72-0.01-0.97-0.04c-0.25-0.03-0.45-0.07-0.59-0.12s-0.23-0.12-0.28-0.2c-0.05-0.08-0.06-0.17-0.04-0.28l1.74-8.62
		c0.05-0.26,0.09-0.52,0.12-0.79s0.04-0.5,0.04-0.71c0-0.48-0.1-0.88-0.31-1.19s-0.55-0.47-1.03-0.47c-0.44,0-0.9,0.14-1.38,0.42
		c-0.48,0.28-0.93,0.66-1.35,1.14c-0.42,0.48-0.8,1.04-1.14,1.68c-0.33,0.64-0.57,1.32-0.71,2.04l-1.31,6.51
		c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.37,0.2s-0.38,0.09-0.65,0.12c-0.27,0.03-0.6,0.04-0.98,0.04
		c-0.4,0-0.72-0.01-0.98-0.04c-0.25-0.03-0.45-0.07-0.6-0.12c-0.15-0.05-0.24-0.12-0.28-0.2c-0.04-0.08-0.05-0.17-0.03-0.28
		l2.88-14.39c0.02-0.11,0.07-0.2,0.14-0.28c0.07-0.08,0.18-0.15,0.32-0.19c0.14-0.05,0.33-0.09,0.56-0.11
		c0.23-0.03,0.51-0.04,0.83-0.04c0.33,0,0.6,0.01,0.81,0.04c0.21,0.03,0.37,0.06,0.49,0.11c0.12,0.05,0.2,0.11,0.23,0.19
		c0.04,0.08,0.05,0.17,0.02,0.28l-0.47,2.37c0.23-0.38,0.53-0.76,0.9-1.15c0.38-0.39,0.81-0.74,1.3-1.05s1.02-0.57,1.6-0.77
		c0.57-0.2,1.17-0.3,1.8-0.3c0.75,0,1.38,0.11,1.89,0.33c0.51,0.22,0.92,0.52,1.24,0.89c0.32,0.38,0.54,0.81,0.68,1.31
		C216.81,9.63,216.88,10.16,216.88,10.71z"></path><path class="st2" d="M232.05,22.46c-0.19,0.98-0.49,1.83-0.9,2.55c-0.41,0.73-0.95,1.33-1.61,1.82c-0.67,0.49-1.47,0.86-2.42,1.1
		c-0.95,0.25-2.06,0.37-3.33,0.37c-0.91,0-1.73-0.07-2.46-0.22c-0.72-0.15-1.33-0.33-1.81-0.56c-0.17-0.09-0.29-0.18-0.35-0.29
		c-0.06-0.11-0.1-0.26-0.1-0.45c0-0.06,0.01-0.17,0.02-0.32c0.01-0.15,0.03-0.32,0.07-0.5c0.04-0.18,0.08-0.37,0.14-0.57
		c0.05-0.2,0.12-0.38,0.2-0.53c0.08-0.16,0.17-0.29,0.27-0.39c0.1-0.1,0.21-0.15,0.34-0.15s0.29,0.05,0.48,0.14
		c0.19,0.09,0.44,0.19,0.75,0.3s0.7,0.21,1.16,0.3c0.46,0.09,1.03,0.14,1.71,0.14c0.55,0,1.04-0.04,1.47-0.13
		c0.43-0.09,0.81-0.23,1.14-0.42s0.58-0.44,0.78-0.74s0.34-0.67,0.43-1.11c0.14-0.7,0.28-1.28,0.42-1.76s0.27-0.86,0.39-1.16
		c-0.19,0.35-0.47,0.71-0.83,1.06c-0.36,0.35-0.77,0.66-1.23,0.94s-0.96,0.5-1.49,0.67c-0.53,0.17-1.07,0.25-1.6,0.25
		c-0.83,0-1.52-0.14-2.09-0.42c-0.56-0.28-1.02-0.67-1.38-1.16c-0.35-0.49-0.61-1.07-0.77-1.74c-0.16-0.67-0.23-1.38-0.23-2.16
		c0-0.7,0.06-1.45,0.19-2.26c0.13-0.81,0.33-1.61,0.6-2.4c0.27-0.79,0.62-1.56,1.04-2.29s0.92-1.38,1.51-1.94
		c0.58-0.56,1.26-1.01,2.01-1.35c0.76-0.33,1.61-0.5,2.55-0.5c0.89,0,1.68,0.19,2.37,0.56c0.69,0.37,1.29,0.91,1.8,1.62l0.26-1.27
		c0.04-0.22,0.21-0.39,0.51-0.48c0.29-0.1,0.77-0.15,1.43-0.15c0.32,0,0.59,0.01,0.81,0.04c0.21,0.03,0.38,0.06,0.51,0.11
		c0.12,0.05,0.21,0.11,0.25,0.19c0.04,0.08,0.05,0.17,0.03,0.28L232.05,22.46z M230.18,11.79c-0.38-0.59-0.79-1.03-1.25-1.33
		c-0.46-0.3-0.99-0.44-1.59-0.44c-0.45,0-0.86,0.11-1.23,0.32c-0.37,0.21-0.7,0.5-1,0.86c-0.3,0.36-0.55,0.78-0.77,1.25
		c-0.22,0.47-0.4,0.97-0.55,1.48c-0.15,0.52-0.25,1.03-0.32,1.55c-0.07,0.52-0.1,1-0.1,1.47c0,0.37,0.03,0.7,0.1,1
		s0.16,0.56,0.3,0.77c0.13,0.21,0.31,0.37,0.52,0.48c0.21,0.11,0.46,0.17,0.77,0.17c0.47,0,0.96-0.14,1.45-0.43
		c0.49-0.29,0.96-0.67,1.39-1.16c0.43-0.49,0.81-1.06,1.14-1.72c0.33-0.65,0.57-1.35,0.72-2.09L230.18,11.79z"></path><path class="st2" d="M251.22,10.67c0,0.77-0.17,1.47-0.52,2.09c-0.35,0.62-0.89,1.15-1.63,1.59c-0.74,0.45-1.67,0.79-2.8,1.02
		c-1.13,0.24-2.48,0.35-4.05,0.35h-1.48c-0.04,0.25-0.08,0.49-0.1,0.73c-0.02,0.24-0.03,0.46-0.03,0.67c0,0.87,0.23,1.53,0.68,1.96
		c0.45,0.44,1.18,0.66,2.18,0.66c0.71,0,1.35-0.05,1.91-0.15c0.56-0.1,1.06-0.21,1.48-0.34c0.42-0.12,0.78-0.24,1.06-0.34
		c0.28-0.1,0.48-0.15,0.61-0.15s0.22,0.04,0.27,0.11s0.08,0.19,0.08,0.35c0,0.18-0.02,0.39-0.05,0.63c-0.03,0.24-0.08,0.47-0.14,0.7
		c-0.06,0.23-0.13,0.45-0.23,0.65c-0.09,0.21-0.2,0.36-0.31,0.47c-0.13,0.13-0.37,0.26-0.71,0.39s-0.76,0.25-1.24,0.35
		s-1.03,0.2-1.63,0.27c-0.6,0.07-1.21,0.11-1.84,0.11c-1.03,0-1.93-0.11-2.7-0.32c-0.77-0.21-1.41-0.54-1.93-0.98s-0.9-1-1.16-1.68
		c-0.26-0.68-0.39-1.49-0.39-2.42c0-0.72,0.07-1.49,0.2-2.31c0.13-0.82,0.35-1.63,0.65-2.43c0.3-0.8,0.69-1.57,1.16-2.3
		s1.04-1.37,1.72-1.93c0.67-0.55,1.45-1,2.33-1.33s1.89-0.5,3.01-0.5c0.98,0,1.82,0.12,2.52,0.35c0.7,0.23,1.28,0.54,1.73,0.92
		c0.45,0.38,0.79,0.82,1.01,1.3C251.11,9.65,251.22,10.15,251.22,10.67z M247.24,10.97c0-0.43-0.17-0.79-0.51-1.07
		c-0.34-0.28-0.83-0.43-1.47-0.43c-0.54,0-1.02,0.1-1.44,0.29c-0.42,0.19-0.8,0.45-1.12,0.78c-0.32,0.33-0.6,0.71-0.83,1.16
		c-0.23,0.45-0.42,0.92-0.56,1.43h1.35c0.86,0,1.58-0.06,2.16-0.17c0.58-0.11,1.05-0.27,1.4-0.46s0.61-0.42,0.77-0.68
		C247.16,11.56,247.24,11.27,247.24,10.97z"></path><path class="st2" d="M267.91,10.71c0,0.38-0.02,0.75-0.07,1.13c-0.05,0.38-0.11,0.76-0.18,1.16l-1.79,8.88
		c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.37,0.2c-0.17,0.05-0.38,0.09-0.64,0.12c-0.26,0.03-0.59,0.04-0.99,0.04
		s-0.72-0.01-0.97-0.04c-0.25-0.03-0.45-0.07-0.59-0.12s-0.23-0.12-0.28-0.2c-0.05-0.08-0.06-0.17-0.04-0.28l1.74-8.62
		c0.05-0.26,0.09-0.52,0.12-0.79c0.03-0.27,0.04-0.5,0.04-0.71c0-0.48-0.1-0.88-0.31-1.19s-0.55-0.47-1.03-0.47
		c-0.44,0-0.9,0.14-1.38,0.42c-0.48,0.28-0.93,0.66-1.35,1.14c-0.42,0.48-0.8,1.04-1.14,1.68c-0.33,0.64-0.57,1.32-0.71,2.04
		l-1.3,6.51c-0.02,0.11-0.07,0.2-0.15,0.28c-0.08,0.08-0.2,0.15-0.37,0.2c-0.17,0.05-0.38,0.09-0.65,0.12
		c-0.27,0.03-0.6,0.04-0.98,0.04c-0.4,0-0.72-0.01-0.98-0.04c-0.25-0.03-0.45-0.07-0.6-0.12c-0.15-0.05-0.24-0.12-0.28-0.2
		c-0.04-0.08-0.05-0.17-0.03-0.28l2.88-14.39c0.02-0.11,0.07-0.2,0.14-0.28c0.07-0.08,0.18-0.15,0.32-0.19
		c0.14-0.05,0.33-0.09,0.56-0.11c0.23-0.03,0.51-0.04,0.83-0.04c0.33,0,0.6,0.01,0.81,0.04c0.21,0.03,0.37,0.06,0.49,0.11
		c0.12,0.05,0.2,0.11,0.23,0.19c0.04,0.08,0.05,0.17,0.02,0.28l-0.47,2.37c0.23-0.38,0.53-0.76,0.9-1.15
		c0.38-0.39,0.81-0.74,1.3-1.05c0.49-0.31,1.02-0.57,1.6-0.77c0.57-0.2,1.17-0.3,1.8-0.3c0.75,0,1.38,0.11,1.89,0.33
		c0.51,0.22,0.92,0.52,1.24,0.89c0.32,0.38,0.54,0.81,0.68,1.31C267.84,9.63,267.91,10.16,267.91,10.71z"></path></g></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/LogoBS.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const ids = [
  {
    label: "tankstelle",
    id: "tankstelle"
  },
  {
    label: "frachtenvermittlung / spedition",
    id: "frachtenvermittlung"
  },
  {
    label: "baustoffhandel",
    id: "baustoffhandel"
  },
  {
    label: "reifendienst",
    id: "reifendienst"
  },
  {
    label: "dienstleistungen im bereich hdd spu\u0308lbohrverfahren",
    id: "dienstleistungen"
  },
  {
    label: "kontakt",
    id: "kontakt"
  }
];
const idf = [
  {
    label: "tankstelle",
    id: "tankstelle"
  },
  {
    label: "frachtenvermittlung / spedition",
    id: "frachtenvermittlung"
  },
  {
    label: "baustoffhandel",
    id: "baustoffhandel"
  },
  {
    label: "reifendienst",
    id: "reifendienst"
  },
  {
    label: "dienstleistungen im bereich hdd spu\u0308lbohrverfahren",
    id: "dienstleistungen"
  },
  {
    label: "kontakt",
    id: "kontakt"
  }
];
const legal = [
  {
    label: "Impressum",
    route: "impressum"
  },
  {
    label: "Datenschutz",
    route: "datenschutz"
  }
];
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = vue_cjs_prod.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_5;
      const _component_IconLogoBS = __nuxt_component_1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "top-0 left-0 w-full bg-white z-100" }, _attrs))}><nav class="flex items-center justify-between px-6 py-4">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "h-6 flex justify-start"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_IconLogoBS, { class: "h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_IconLogoBS, { class: "h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex items-center"><ul class="w-3/4 2xl:w-1/2 flex justify-start text-sm lg:text-base font-bold uppercase md:space-x-3 py-2 lg:space-x-4 xl:space-x-6"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(ids), (item) => {
        _push(`<li><a${serverRenderer.exports.ssrRenderAttr("href", `/#${item.id}`)} class="hover:text-bs-red">${serverRenderer.exports.ssrInterpolate(item.id)}</a></li>`);
      });
      _push(`<!--]--></ul></div><button type="button" aria-label="Menu button" class="hamburger fixed z-10 bg-bs-white pt-2 right-6 top-2 lg:hidden"><svg class="xl:w-auto w-11" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><g transform="translate(-0.03 2)"><line x2="30" transform="translate(0.03)" fill="none" stroke="#000" stroke-width="3"></line><line x2="30" transform="translate(0.03 8)" fill="none" stroke="#000" stroke-width="3"></line><line x2="30" transform="translate(0.03 16)" fill="none" stroke="#000" stroke-width="3"></line></g></svg></button></nav><nav id="menu-mobile" class="${serverRenderer.exports.ssrRenderClass([menu.value ? "" : "-translate-x-full", "fixed w-full h-screen lg:hidden bg-bs-white top-0 left-0 z-1000 p-8 pt-4 z-50 transition-transform duration-75 ease-in-out"])}"><div class="flex justify-end"><button type="button" aria-label="Menu close" class="hamburger"><span><svg class="xl:p-0 p-1" xmlns="http://www.w3.org/2000/svg" width="36.376" height="36.376" viewBox="0 0 47.376 47.376"><g transform="translate(-7.875 15.688)"><line x2="63" transform="translate(9.289 -14.274) rotate(45)" fill="none" stroke="#000" stroke-width="4"></line><line x2="63" transform="translate(9.289 30.274) rotate(-45)" fill="none" stroke="#000" stroke-width="4"></line></g></svg></span></button></div><div class="flex flex-col py-12"><ul class="w-3/4 mx-auto flex flex-col text-center justify-evenly text-base lg:text-lg font-bold uppercase space-y-8"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(idf), (item) => {
        _push(`<li><a${serverRenderer.exports.ssrRenderAttr("href", `/#${item.id}`)} class="hover:text-bs-red">${serverRenderer.exports.ssrInterpolate(item.id)}</a></li>`);
      });
      _push(`<!--]--></ul></div></nav></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Navigation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    title: null,
    imageLink: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: "flex items-end bg-cover text-bs-white",
        style: [`background-image: url(${props.imageLink});`, { "height": "calc(100vh - 3rem)" }]
      }, _attrs))}><div class="max-w-xl lg:max-w-7xl p-8 lg:mt-32 bg-bs-black bg-opacity-70"><div class="bg-red w-12 lg:w-24 h-1 lg:h-2 my-4"></div><div class="bg-bs-red w-16 h-1 lg:h-2"></div><h1 class="py-3 font-bold text-left leading-none line"><i><span class="text-bs-red mr-4">BS</span>${serverRenderer.exports.ssrInterpolate(props.title)}</i></h1><p class="text-xs md:text-sm xl:text-xl text-white sm:w-2/3 lg:w-1/2 xl:w-3/5 leading-4 md:leading-6 xl:leading-8"> Tankstelle \u2022 Reifendienst \u2022 Dienstleistungen im Bereich HDD Sp\xFClbohrverfahren \u2022 Frachtenvermittlung / Spedition \u2022 Baustoffhandel</p></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    title: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOrt = __nuxt_component_0$1;
      const _component_BasicButton = _sfc_main$f;
      const _component_IconTelefon = __nuxt_component_2$1;
      const _component_IconPrinter = __nuxt_component_3;
      const _component_IconEmail = __nuxt_component_4;
      const _component_NuxtLink = __nuxt_component_5;
      _push(`<footer${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex flex-col lg:flex-row items-start bg-bs-black text-bs-white py-10" }, _attrs))} data-v-074a4226><div class="relative max-w-xl w-full lg:w-1/2 lg:max-w-5xl p-4 lg:p-8 lg:my-8 bg-black bg-opacity-70 rounded-r-3xl" data-v-074a4226><div class="bg-bs-red w-16 h-1 lg:h-2" data-v-074a4226></div><h4 class="font-bold text-left text-3xl lg:text-5xl leading-none line" data-v-074a4226><i data-v-074a4226><span class="text-bs-red mr-4" data-v-074a4226>BS</span>${serverRenderer.exports.ssrInterpolate(props.title)}</i></h4><p class="text-xs md:text-sm xl:text-xl text-white sm:w-2/3 lg:w-4/5 leading-4 md:leading-6 xl:leading-8" data-v-074a4226> Tankstelle \u2022 Reifendienst \u2022 Dienstleistungen im Bereich HDD<br data-v-074a4226> Sp\xFClbohrverfahren \u2022 Frachtenvermittlung / Spedition \u2022 Baustoffhandel </p></div><div class="w-full lg:w-1/2 h-full flex text-xs lg:text-sm lg:my-8 p-4 lg:p-8" data-v-074a4226><div class="w-1/2 self-baseline leading-relaxed" data-v-074a4226><div class="bg-bs-red w-16 h-1 lg:h-2" data-v-074a4226></div><h4 class="uppercase text-base lg:text-2xl" data-v-074a4226>Kontakt</h4><ul class="space-y-2 text-xs lg:text-sm" data-v-074a4226><li class="flex text-bs-white" data-v-074a4226>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_IconOrt, { class: "hidden lg:block w-4 filter-white self-start" }, null, _parent));
      _push(`<p class="lg:pl-2" data-v-074a4226> BS Dienstleistungen - Bianca\xA0Sch\xE4fers <br data-v-074a4226> Schulstra\xDFe 2 <br data-v-074a4226> 57392 Schmallenberg-Felbecke </p></li><li class="flex" data-v-074a4226>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_BasicButton, {
        class: "lg:pr-2 text-xs",
        tag: "a",
        label: "+49 (0) 2972 - 9622800",
        "label-hover": "Jetzt anrufen",
        href: "tel:+49029729622800"
      }, {
        before: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_IconTelefon, { class: "hidden lg:block w-3 filter-white" }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_IconTelefon, { class: "hidden lg:block w-3 filter-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="flex" data-v-074a4226>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_IconPrinter, { class: "hidden lg:block w-3 filter-white" }, null, _parent));
      _push(`<p class="lg:pl-2 text-xs lg:text-base" data-v-074a4226>+49 (0) 2972 962229</p></li><li class="flex" data-v-074a4226>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_BasicButton, {
        class: "lg:pr-2 text-xs",
        tag: "a",
        label: "info@bsdienstleistungen.eu",
        "label-hover": "Jetzt eine Nachricht schreiben",
        href: "mailto:info@bsdienstleistungen.eu"
      }, {
        before: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_IconEmail, { class: "hidden lg:block w-3 filter-white" }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_IconEmail, { class: "hidden lg:block w-3 filter-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="w-1/2 pl-4 self-baseline leading-relaxed" data-v-074a4226><div class="bg-bs-red w-16 h-1 lg:h-2" data-v-074a4226></div><h4 class="uppercase text-base lg:text-2xl" data-v-074a4226>Dienstleistungen</h4><ul class="flex flex-col text-md font-normal capitalize space-y-2 mb-16" data-v-074a4226><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(idf), (item) => {
        _push(`<li data-v-074a4226><a${serverRenderer.exports.ssrRenderAttr("href", `/#${item.id}`)} class="hover:text-bs-red" data-v-074a4226>${serverRenderer.exports.ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul><ul class="flex text-sm capitalize space-x-8 justify-center md:justify-end" data-v-074a4226><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(legal), (item) => {
        _push(`<li data-v-074a4226>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          class: "hover:text-bs-red",
          to: item.route
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(item.label)}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-074a4226"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutNavigation = _sfc_main$3;
  const _component_LayoutHeader = _sfc_main$2;
  const _component_LayoutFooter = __nuxt_component_2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "min-h-screen overflow-hidden" }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_LayoutNavigation, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_LayoutHeader, {
    imageLink: "/assets/images/bs_header.jpg",
    title: "Dienstleistungen - Bianca Sch\xE4fers"
  }, null, _parent));
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(serverRenderer.exports.ssrRenderComponent(_component_LayoutFooter, { title: "Dienstleistungen" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const _default$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _default
}, Symbol.toStringTag, { value: "Module" }));

export { entry$1 as default };
//# sourceMappingURL=server.mjs.map
