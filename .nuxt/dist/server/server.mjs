
// --------------------
// Request: C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/paths.mjs ($id_e6ed7614)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/css.mjs ($id_2613bdd1)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs ($id_8264f4b7)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/root-component.mjs ($id_d400ee83)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/app-component.mjs ($id_d02ac52c)
// --------------------
const $id_c69c8440 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry ($id_c69c8440)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/components.plugin.mjs ($id_87e582ea)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /pages/datenschutz.vue?macro=true ($id_be45ed04)
// - /pages/impressum.vue?macro=true ($id_c18e24f4)
// - /components/Section/Image-content.vue ($id_7b66d7af)
// - /components/Icon/pkw.vue ($id_e859319d)
// - /components/Icon/lkw.vue ($id_a9004d1b)
// - /components/Icon/motorsport.vue ($id_4e34aab3)
// - /components/Icon/Ort.vue ($id_ec23dc9c)
// - /components/Icon/Oeffnungszeiten.vue ($id_d1b33b5c)
// - /components/Icon/Telefon.vue ($id_111afe07)
// - /components/Icon/Email.vue ($id_eedab458)
// - /components/Icon/Printer.vue ($id_33e59396)
// - /components/Basic/Button.vue ($id_065e283f)
// - /components/Section/Contact.vue ($id_5e25048f)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/datenschutz.vue ($id_e4ecc621)
// - /pages/impressum.vue ($id_27e097fe)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs ($id_9019377a)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/layouts.mjs ($id_2ff6a94d)
// - /components/Icon/LogoBS.vue ($id_b984290f)
// - /components/Layout/Navigation.vue ($id_65319fa0)
// - /components/Layout/Header.vue ($id_ad589f88)
// - /components/Layout/Footer.vue ($id_9cc62014)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry ($id_c69c8440)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/paths.mjs
// Parents: 
// - C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry ($id_c69c8440)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_e6ed7614 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/paths.mjs ($id_e6ed7614)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry ($id_c69c8440)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs ($id_9019377a)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
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
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
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
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
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
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
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
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
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
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /components/Section/Contact.vue ($id_5e25048f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /components/Layout/Navigation.vue ($id_65319fa0)
// - /components/Layout/Footer.vue ($id_9cc62014)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
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
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs ($id_9019377a)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/css.mjs
// Parents: 
// - C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry ($id_c69c8440)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// --------------------
const $id_2613bdd1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/css.mjs ($id_2613bdd1)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:\"Calibri\",sans-serif;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}html{scroll-behavior:smooth}h1{font-size:1.875rem;font-weight:700;line-height:2.25rem;line-height:1;padding-bottom:1rem;text-align:left}@media (min-width:1024px){h1{font-size:3rem;line-height:1}}h2{font-size:1.875rem;font-weight:700;line-height:1rem;padding-bottom:1.25rem;padding-top:1.25rem;text-transform:uppercase}@media (min-width:768px){h2{font-size:2.25rem;line-height:2.5rem}}@media (min-width:1280px){h2{font-size:3rem;line-height:1}}h3{font-size:1.25rem;font-weight:700;line-height:1.75rem;padding-bottom:1rem;padding-top:1rem}@media (min-width:1024px){h3{font-size:3rem;line-height:1}}h4{font-weight:700;padding-bottom:1rem;padding-top:1rem}a{cursor:pointer}a:hover{--tw-text-opacity:1;color:rgb(230 106 101/var(--tw-text-opacity))}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.filter-white{filter:invert(100%) sepia(100%) saturate(17%) hue-rotate(240deg) brightness(104%) contrast(100%)}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.left-0{left:0}.top-0{top:0}.right-6{right:1.5rem}.top-2{top:.5rem}.z-10{z-index:10}.z-50{z-index:50}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-bottom:1rem;margin-top:1rem}.my-8{margin-bottom:2rem;margin-top:2rem}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mr-4{margin-right:1rem}.mb-16{margin-bottom:4rem}.ml-2{margin-left:.5rem}.mt-8{margin-top:2rem}.mt-10{margin-top:2.5rem}.mt-4{margin-top:1rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1/1}.h-1{height:.25rem}.h-full{height:100%}.h-6{height:1.5rem}.h-screen{height:100vh}.h-3{height:.75rem}.h-8{height:2rem}.min-h-screen{min-height:100vh}.w-7{width:1.75rem}.w-full{width:100%}.w-16{width:4rem}.w-1\\/2{width:50%}.w-4{width:1rem}.w-3{width:.75rem}.w-12{width:3rem}.w-3\\/4{width:75%}.w-11{width:2.75rem}.w-\\[16px\\]{width:16px}.w-8{width:2rem}.max-w-xl{max-width:36rem}.translate-y-2\\/3{--tw-translate-y:66.666667%}.-translate-x-full,.translate-y-2\\/3{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x:-100%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-x-16{-moz-column-gap:4rem;column-gap:4rem}.gap-y-6{row-gap:1.5rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(2rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(2rem*var(--tw-space-x-reverse))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.self-start{align-self:flex-start}.self-center{align-self:center}.self-baseline{align-self:baseline}.overflow-hidden{overflow:hidden}.rounded-r-3xl{border-bottom-right-radius:1.5rem;border-top-right-radius:1.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-bs-black{--tw-border-opacity:1;border-color:rgb(31 31 31/var(--tw-border-opacity))}.bg-bs-black{--tw-bg-opacity:1;background-color:rgb(31 31 31/var(--tw-bg-opacity))}.bg-bs-red{--tw-bg-opacity:1;background-color:rgb(230 106 101/var(--tw-bg-opacity))}.bg-bs-blue{--tw-bg-opacity:1;background-color:rgb(16 39 134/var(--tw-bg-opacity))}.bg-bs-turquoise{--tw-bg-opacity:1;background-color:rgb(109 169 169/var(--tw-bg-opacity))}.bg-bs-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-opacity-70{--tw-bg-opacity:0.7}.bg-cover{background-size:cover}.p-4{padding:1rem}.p-8{padding:2rem}.p-1{padding:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-12{padding-bottom:3rem;padding-top:3rem}.px-4{padding-left:1rem;padding-right:1rem}.px-1{padding-left:.25rem;padding-right:.25rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.pl-4{padding-left:1rem}.pt-2{padding-top:.5rem}.pt-4{padding-top:1rem}.pb-16{padding-bottom:4rem}.pb-2{padding-bottom:.5rem}.pl-2{padding-left:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-normal{font-weight:400}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.leading-none{line-height:1}.leading-4{line-height:1rem}.leading-relaxed{line-height:1.625}.text-bs-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-bs-red{--tw-text-opacity:1;color:rgb(230 106 101/var(--tw-text-opacity))}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.opacity-0{opacity:0}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-md,.shadow-sm{box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-75{transition-duration:75ms}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@font-face{font-display:swap;font-family:\"Calibri\";font-style:normal;font-weight:500;src:url(/_nuxt/assets/fonts/Calibri.woff2) format(\"woff2\")}@font-face{font-display:swap;font-family:\"Calibri Bold\";font-style:normal;font-weight:700;src:url(/_nuxt/assets/fonts/Calibri-Bold.woff2) format(\"woff2\")}.hover\\:bg-bs-red:hover{--tw-bg-opacity:1;background-color:rgb(230 106 101/var(--tw-bg-opacity))}.hover\\:text-bs-red:hover{--tw-text-opacity:1;color:rgb(230 106 101/var(--tw-text-opacity))}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:border-b-0:focus{border-bottom-width:0}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-0:focus,.focus\\:ring-1:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-bs-red:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(230 106 101/var(--tw-ring-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.group:hover .group-hover\\:-translate-y-2\\/3{--tw-translate-y:-66.666667%}.group:hover .group-hover\\:-translate-y-0,.group:hover .group-hover\\:-translate-y-2\\/3{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:-translate-y-0{--tw-translate-y:-0px}.group:hover .group-hover\\:opacity-0{opacity:0}.group:hover .group-hover\\:opacity-100{opacity:1}@media (min-width:640px){.sm\\:w-2\\/3{width:66.666667%}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:gap-x-8{-moz-column-gap:2rem;column-gap:2rem}.sm\\:self-end{align-self:flex-end}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:w-1\\/2{width:50%}.md\\:flex-row{flex-direction:row}.md\\:flex-row-reverse{flex-direction:row-reverse}.md\\:justify-end{justify-content:flex-end}.md\\:justify-center{justify-content:center}.md\\:space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.md\\:p-6{padding:1.5rem}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:leading-6{line-height:1.5rem}}@media (min-width:1024px){.lg\\:my-8{margin-bottom:2rem;margin-top:2rem}.lg\\:my-6{margin-bottom:1.5rem;margin-top:1.5rem}.lg\\:my-12{margin-bottom:3rem;margin-top:3rem}.lg\\:mt-32{margin-top:8rem}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:h-2{height:.5rem}.lg\\:min-h-screen{min-height:100vh}.lg\\:w-1\\/2{width:50%}.lg\\:w-4\\/5{width:80%}.lg\\:w-24{width:6rem}.lg\\:w-\\[20px\\]{width:20px}.lg\\:w-4{width:1rem}.lg\\:w-\\[31rem\\]{width:31rem}.lg\\:\\!min-w-\\[16px\\]{min-width:16px!important}.lg\\:max-w-5xl{max-width:64rem}.lg\\:max-w-7xl{max-width:80rem}.lg\\:max-w-none{max-width:none}.lg\\:flex-row{flex-direction:row}.lg\\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.lg\\:p-8{padding:2rem}.lg\\:px-2{padding-left:.5rem;padding-right:.5rem}.lg\\:px-3{padding-left:.75rem;padding-right:.75rem}.lg\\:py-0{padding-bottom:0;padding-top:0}.lg\\:pl-2{padding-left:.5rem}.lg\\:pr-2{padding-right:.5rem}.lg\\:text-base{font-size:1rem;line-height:1.5rem}.lg\\:text-5xl{font-size:3rem;line-height:1}.lg\\:text-sm{font-size:.875rem;line-height:1.25rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:grid{display:grid}.xl\\:w-3\\/5{width:60%}.xl\\:w-auto{width:auto}.xl\\:w-full{width:100%}.xl\\:space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1.5rem*var(--tw-space-x-reverse))}.xl\\:p-0{padding:0}.xl\\:pt-8{padding-top:2rem}.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}.xl\\:text-5xl{font-size:3rem;line-height:1}.xl\\:leading-8{line-height:2rem}}@media (min-width:1536px){.\\32xl\\:w-1\\/2{width:50%}}";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs
// Parents: 
// - C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry ($id_c69c8440)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/components.plugin.mjs ($id_87e582ea)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// --------------------
const $id_8264f4b7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs ($id_8264f4b7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs ($id_8264f4b7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_87e582ea = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs ($id_8264f4b7)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
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

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
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

// src/stringify-attrs.ts
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

// src/utils.ts
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

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
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
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
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
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
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
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
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
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
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
    updateDOM(document = window.document) {
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
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
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
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs ($id_8264f4b7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/meta.config.mjs ($id_a35078d9)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
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
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
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
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
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
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_a35078d9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs ($id_8264f4b7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs ($id_b9dc4107)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/router.options.mjs ($id_1014da17)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/middleware.mjs ($id_a0df7e7f)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
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
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/datenschutz.vue?macro=true ($id_be45ed04)
// - /pages/impressum.vue?macro=true ($id_c18e24f4)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/datenschutz.vue ($id_e4ecc621)
// - /pages/impressum.vue ($id_27e097fe)
// - /pages/index.vue ($id_cca58e97)
// --------------------
const $id_b9dc4107 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/datenschutz.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/impressum.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "datenschutz",
    path: "/datenschutz",
    file: "C:/Users/cichy/Downloads/BS-main/BS-main/pages/datenschutz.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/datenschutz.vue')
  },
  {
    name: "impressum",
    path: "/impressum",
    file: "C:/Users/cichy/Downloads/BS-main/BS-main/pages/impressum.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/impressum.vue')
  },
  {
    name: "index",
    path: "/",
    file: "C:/Users/cichy/Downloads/BS-main/BS-main/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  }
];
}


// --------------------
// Request: /pages/datenschutz.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs ($id_b9dc4107)
// Dependencies: 
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_be45ed04 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Basic/SeoHead.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_BasicSeoHead, {
    title: "Datenschutz",
    description: "Datenschutz"
  }, null, _parent))
  _push(`<div class="min-h-screen"><h1>Datenschutz</h1></div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/datenschutz.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/pages/datenschutz.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Basic/SeoHead.vue
// Parents: 
// - /pages/datenschutz.vue?macro=true ($id_be45ed04)
// - /pages/impressum.vue?macro=true ($id_c18e24f4)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/datenschutz.vue ($id_e4ecc621)
// - /pages/impressum.vue ($id_27e097fe)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_16853963 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "SeoHead",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { WEBSITE_URL } = __vite_ssr_import_0__.useRuntimeConfig();
    __vite_ssr_import_1__.useHead({
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
    const __returned__ = { WEBSITE_URL, props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Basic/SeoHead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/cichy/Downloads/BS-main/BS-main/components/Basic/SeoHead.vue"]]);
;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /pages/datenschutz.vue?macro=true ($id_be45ed04)
// - /pages/impressum.vue?macro=true ($id_c18e24f4)
// - /components/Section/Image-content.vue ($id_7b66d7af)
// - /components/Icon/pkw.vue ($id_e859319d)
// - /components/Icon/lkw.vue ($id_a9004d1b)
// - /components/Icon/motorsport.vue ($id_4e34aab3)
// - /components/Icon/Ort.vue ($id_ec23dc9c)
// - /components/Icon/Oeffnungszeiten.vue ($id_d1b33b5c)
// - /components/Icon/Telefon.vue ($id_111afe07)
// - /components/Icon/Email.vue ($id_eedab458)
// - /components/Icon/Printer.vue ($id_33e59396)
// - /components/Basic/Button.vue ($id_065e283f)
// - /components/Section/Contact.vue ($id_5e25048f)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/datenschutz.vue ($id_e4ecc621)
// - /pages/impressum.vue ($id_27e097fe)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/Icon/LogoBS.vue ($id_b984290f)
// - /components/Layout/Navigation.vue ($id_65319fa0)
// - /components/Layout/Header.vue ($id_ad589f88)
// - /components/Layout/Footer.vue ($id_9cc62014)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /pages/datenschutz.vue?macro=true ($id_be45ed04)
// - /pages/impressum.vue?macro=true ($id_c18e24f4)
// - /components/Section/Image-content.vue ($id_7b66d7af)
// - /components/Icon/pkw.vue ($id_e859319d)
// - /components/Icon/lkw.vue ($id_a9004d1b)
// - /components/Icon/motorsport.vue ($id_4e34aab3)
// - /components/Icon/Ort.vue ($id_ec23dc9c)
// - /components/Icon/Oeffnungszeiten.vue ($id_d1b33b5c)
// - /components/Icon/Telefon.vue ($id_111afe07)
// - /components/Icon/Email.vue ($id_eedab458)
// - /components/Icon/Printer.vue ($id_33e59396)
// - /components/Basic/Button.vue ($id_065e283f)
// - /components/Section/Contact.vue ($id_5e25048f)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/datenschutz.vue ($id_e4ecc621)
// - /pages/impressum.vue ($id_27e097fe)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/Icon/LogoBS.vue ($id_b984290f)
// - /components/Layout/Navigation.vue ($id_65319fa0)
// - /components/Layout/Header.vue ($id_ad589f88)
// - /components/Layout/Footer.vue ($id_9cc62014)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/impressum.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs ($id_b9dc4107)
// Dependencies: 
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c18e24f4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Basic/SeoHead.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_BasicSeoHead, {
    title: "Impressum",
    description: "Impressum"
  }, null, _parent))
  _push(`<div class="min-h-screen"><h1>Impressum</h1></div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/impressum.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/pages/impressum.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs ($id_b9dc4107)
// Dependencies: 
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /components/Section/Image-content.vue ($id_7b66d7af)
// - /components/Icon/pkw.vue ($id_e859319d)
// - /components/Icon/lkw.vue ($id_a9004d1b)
// - /components/Icon/motorsport.vue ($id_4e34aab3)
// - /components/Section/Contact.vue ($id_5e25048f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Basic/SeoHead.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Section/Image-content.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Icon/pkw.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Icon/lkw.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Icon/motorsport.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Section/Contact.vue");

const _sfc_main = {}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = __vite_ssr_import_0__.default
  const _component_SectionImageContent = __vite_ssr_import_1__.default
  const _component_IconPkw = __vite_ssr_import_2__.default
  const _component_IconLkw = __vite_ssr_import_3__.default
  const _component_IconMotorsport = __vite_ssr_import_4__.default
  const _component_SectionContact = __vite_ssr_import_5__.default

  _push(`<section${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_BasicSeoHead, {
    title: "BS Dienstleistungen - Bianca Schäfers",
    description: "Tankstelle Reifendienst Dienstleistungen im Bereich HDD Spülbohrverfahren Frachtenvermittlung Spedition Baustoffhandel"
  }, null, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "tankstelle",
    "image-link": "assets/images/bs_tankstelle.jpg",
    "title-bar-color": "#803a33",
    title: "tankstelle",
    direction: "left"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="text-sm lg:text-lg"${_scopeId}> Die Tankstelle wurde von der BS Dienstleistung im März 2020 übernommen und im Januar 2021 mit einer neuen Tanksäule ausgestattet. Mit einem Tankchip kann rund um die Uhr Diesel und AdBlue getankt werden. Die Tankstellenpreise werden nach jeder Belieferung neu angepasst und im Säulenbereich ausgeschildert. </p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg" }, " Die Tankstelle wurde von der BS Dienstleistung im März 2020 übernommen und im Januar 2021 mit einer neuen Tanksäule ausgestattet. Mit einem Tankchip kann rund um die Uhr Diesel und AdBlue getankt werden. Die Tankstellenpreise werden nach jeder Belieferung neu angepasst und im Säulenbereich ausgeschildert. ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "frachtenvermittlung",
    "image-link": "assets/images/bs_frachtenvermittlung-spedition.jpg",
    "title-bar-color": "#fb311c",
    title: "frachtenvermittlung / spedition",
    direction: "right"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="text-sm lg:text-lg"${_scopeId}>Wir vermarkten Ihre Ladungen EU weit. Teil und Komplettladungen aller Art.</p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg" }, "Wir vermarkten Ihre Ladungen EU weit. Teil und Komplettladungen aller Art.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "baustoffhandel",
    "image-link": "assets/images/bs_baustoffhandel.jpg",
    "title-bar-color": "#97754d",
    title: "baustoffhandel",
    direction: "left"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="text-sm lg:text-lg"${_scopeId}>Unser Unternehmen bietet Ihnen gerne Konditionen im Bereich Sand, Kies und Zement für Ihr Lager oder direkt zur Baustelle an. Weiterhin besitzen wir gute Kontakte zu Lieferanten von Reitsanden und Bodengemischen.</p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg" }, "Unser Unternehmen bietet Ihnen gerne Konditionen im Bereich Sand, Kies und Zement für Ihr Lager oder direkt zur Baustelle an. Weiterhin besitzen wir gute Kontakte zu Lieferanten von Reitsanden und Bodengemischen.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "reifendienst",
    "image-link": "assets/images/bs_reifendienst.jpg",
    "title-bar-color": "#fb7f43",
    title: "reifendienst",
    direction: "right"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="md:flex md:flex-row w-full lg:max-w-none justify-between"${
          _scopeId
        }><article class="my-6 mx-1 flex-col self-center sm:self-end text-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_IconPkw, null, null, _parent, _scopeId))
        _push(`<p class="font-bold py-2 text-sm lg:text-lg"${
          _scopeId
        }>PKW</p></article><article class="my-6 flex-col self-center sm:self-end text-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_IconLkw, null, null, _parent, _scopeId))
        _push(`<p class="font-bold py-2 text-sm lg:text-lg"${
          _scopeId
        }>LKW</p></article><article class="my-6 flex-col self-center sm:self-end text-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_IconMotorsport, null, null, _parent, _scopeId))
        _push(`<p class="font-bold py-2 text-sm lg:text-lg"${
          _scopeId
        }>Motorsportfahrzeuge</p></article></div><p class="text-sm lg:text-lg max-w-"${
          _scopeId
        }> Wir können Ihnen alle Reifen liefern, von PKW, SUV über Motorsportreifen bis hin zu allen LKW Reifen und Marken. Wenn Sie schon Reifen haben und die nur umgezogen werden müssen, sind wir auch Ihr richtiger Ansprechpartner. Sprechen Sie mit uns, wir finden eine Lösung. </p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("div", { class: "md:flex md:flex-row w-full lg:max-w-none justify-between" }, [
            __vite_ssr_import_6__.createVNode("article", { class: "my-6 mx-1 flex-col self-center sm:self-end text-center" }, [
              __vite_ssr_import_6__.createVNode(_component_IconPkw),
              __vite_ssr_import_6__.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "PKW")
            ]),
            __vite_ssr_import_6__.createVNode("article", { class: "my-6 flex-col self-center sm:self-end text-center" }, [
              __vite_ssr_import_6__.createVNode(_component_IconLkw),
              __vite_ssr_import_6__.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "LKW")
            ]),
            __vite_ssr_import_6__.createVNode("article", { class: "my-6 flex-col self-center sm:self-end text-center" }, [
              __vite_ssr_import_6__.createVNode(_component_IconMotorsport),
              __vite_ssr_import_6__.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "Motorsportfahrzeuge")
            ])
          ]),
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg max-w-" }, " Wir können Ihnen alle Reifen liefern, von PKW, SUV über Motorsportreifen bis hin zu allen LKW Reifen und Marken. Wenn Sie schon Reifen haben und die nur umgezogen werden müssen, sind wir auch Ihr richtiger Ansprechpartner. Sprechen Sie mit uns, wir finden eine Lösung. ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "dienstleistungen",
    "image-link": "assets/images/bs-dienstleistungen-bianca-schaefers_spuelbohrverfahren.jpg",
    "title-bar-color": "#f1d4d0",
    title: "Dienstleistungen im Bereich HDD Spülbohrverfahren",
    direction: "left"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="text-sm lg:text-lg"${_scopeId}>Unsere Mitarbeiter haben sich in den letzten 2 Jahren besonders im Bereich Vermessung und Recycling eingearbeitet. Wir stehen aber auch für alle anderen Arbeiten rund um das HDD Spülbohrverfahren (bis auf Bedienung des Bohrgerätes) zur Verfügung.</p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg" }, "Unsere Mitarbeiter haben sich in den letzten 2 Jahren besonders im Bereich Vermessung und Recycling eingearbeitet. Wir stehen aber auch für alle anderen Arbeiten rund um das HDD Spülbohrverfahren (bis auf Bedienung des Bohrgerätes) zur Verfügung.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionContact, null, null, _parent))
  _push(`</section>`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Section/Image-content.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7b66d7af = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "Image-content",
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    direction: { type: String, required: true },
    titleBarColor: { type: String, required: true },
    imageLink: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    id: $setup.props.id,
    class: [$setup.props.direction === "right" ? "md:flex-row-reverse" : "md:flex-row", "flex flex-col w-full lg:min-h-screen"]
  }, _attrs))}><div style="${__vite_ssr_import_2__.ssrRenderStyle(`background-image: url(${$setup.props.imageLink});`)}" class="md:w-1/2 w-full bg-cover aspect-square"></div><div class="md:w-1/2 p-4 lg:my-12 flex flex-col space-y-2 justify-start md:justify-center"><div class="lg:w-[31rem] py-12 md:p-6 mx-auto"><div><div style="${__vite_ssr_import_2__.ssrRenderStyle(`background-color: ${$setup.props.titleBarColor}`)}" class="w-16 h-1 lg:h-2"></div><h2 class="leading-none text-xl md:text-2xl xl:text-5xl">${__vite_ssr_import_2__.ssrInterpolate($setup.props.title)}</h2></div>`);
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Image-content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/cichy/Downloads/BS-main/BS-main/components/Section/Image-content.vue"]]);
;
}


// --------------------
// Request: /components/Icon/pkw.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e859319d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "93.5",
    height: "64.281",
    viewBox: "0 0 93.5 64.281",
    class: "mx-auto px-2"
  }, _attrs))}><path id="electric-car" d="M88.388,34.427l-5.481-4.386c-.022-.018-.044-.039-.066-.057l5.1-1.021a1.459,1.459,0,0,0,1.173-1.432V23.148a1.461,1.461,0,0,0-1.461-1.461h-7.3a1.461,1.461,0,0,0-1.461,1.461v2.56l-.1-.136a1.416,1.416,0,0,0-.463-.627,21.567,21.567,0,0,1-1.985-3.338l-2.469-5.43A11.3,11.3,0,0,0,64.281,10H29.219a11.3,11.3,0,0,0-9.591,6.177L17.16,21.606a21.575,21.575,0,0,1-1.985,3.34,1.427,1.427,0,0,0-.463.627l-.1.136v-2.56a1.461,1.461,0,0,0-1.461-1.461H5.844a1.461,1.461,0,0,0-1.461,1.461v4.383a1.458,1.458,0,0,0,1.175,1.432l5.1,1.021c-.022.018-.044.039-.066.057L5.112,34.427A15.194,15.194,0,0,0,0,45.062V69.9a4.388,4.388,0,0,0,4.383,4.383H16.07A4.388,4.388,0,0,0,20.453,69.9V66.977H73.047V69.9a4.388,4.388,0,0,0,4.383,4.383H89.117A4.388,4.388,0,0,0,93.5,69.9V45.062A15.194,15.194,0,0,0,88.388,34.427ZM75.113,64.055l-3.35-3.35a9.489,9.489,0,0,0-6.021-2.494H27.027A9.489,9.489,0,0,0,21.007,60.7l-3.35,3.35H7.3a4.388,4.388,0,0,1-4.383-4.383v-7.3H4.383v1.461a5.85,5.85,0,0,0,5.844,5.844h4.383a1.461,1.461,0,0,0,0-2.922H10.227A2.925,2.925,0,0,1,7.3,53.828V52.367h2.922A6.754,6.754,0,0,1,14.181,54a1.461,1.461,0,0,0,2.066-2.066,9.485,9.485,0,0,0-6.021-2.494h-7.3V45.062a8.417,8.417,0,0,1,.2-1.641A5.555,5.555,0,0,0,7.3,45.062H18.992a1.46,1.46,0,0,0,1.033-.428l1.889-1.889L23.8,44.634a1.457,1.457,0,0,0,1.033.428H41.762l3.955,3.955a1.46,1.46,0,0,0,2.066,0l3.955-3.955H68.664a1.457,1.457,0,0,0,1.033-.428l1.889-1.889,1.889,1.889a1.457,1.457,0,0,0,1.033.428H86.2a5.555,5.555,0,0,0,4.186-1.641,8.416,8.416,0,0,1,.2,1.641v4.383h-7.3a9.489,9.489,0,0,0-6.021,2.494A1.461,1.461,0,1,0,79.319,54a6.754,6.754,0,0,1,3.955-1.638H86.2v1.461a2.925,2.925,0,0,1-2.922,2.922H78.891a1.461,1.461,0,0,0,0,2.922h4.383a5.85,5.85,0,0,0,5.844-5.844V52.367h1.461v7.3A4.388,4.388,0,0,1,86.2,64.055Zm-4.132,0H21.788l1.284-1.284a6.754,6.754,0,0,1,3.955-1.638H65.742A6.754,6.754,0,0,1,69.7,62.771ZM16.888,27.531H76.612a28.215,28.215,0,0,0,4.469,4.792l1.758,1.405L72.5,37.862h0a1.463,1.463,0,0,0-.486.321l-1.461,1.461-2.5,2.5H51.133a1.457,1.457,0,0,0-1.033.428l-3.35,3.35-3.35-3.35a1.457,1.457,0,0,0-1.033-.428H25.441l-2.494-2.494-1.461-1.461A1.463,1.463,0,0,0,21,37.864h0L10.663,33.73l1.758-1.405A28.34,28.34,0,0,0,16.888,27.531Zm72.143,12.3a2.6,2.6,0,0,1-2.836,2.31H75.113L73.652,40.68l.216-.216L85.46,35.826l1.1.882A10.512,10.512,0,0,1,89.031,39.831ZM81.813,24.609H86.2v1.724l-4.383.877ZM19.818,22.815l2.468-5.429a8.417,8.417,0,0,1,6.934-4.465H64.281a8.414,8.414,0,0,1,6.932,4.463l2.469,5.43a19.74,19.74,0,0,0,.958,1.794H18.859A19.387,19.387,0,0,0,19.818,22.815ZM7.3,24.609h4.383v2.6L7.3,26.333Zm-.368,12.1,1.1-.882,11.594,4.637.216.216-1.461,1.461H7.3a2.6,2.6,0,0,1-2.836-2.31A10.509,10.509,0,0,1,6.937,36.709ZM16.07,71.359H4.383A1.463,1.463,0,0,1,2.922,69.9V65.479a7.237,7.237,0,0,0,4.383,1.5H17.531V69.9A1.463,1.463,0,0,1,16.07,71.359Zm73.047,0H77.43A1.463,1.463,0,0,1,75.969,69.9V66.977H86.2a7.237,7.237,0,0,0,4.383-1.5V69.9A1.463,1.463,0,0,1,89.117,71.359Z" transform="translate(0 -10)" fill="#1f1f1f"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/pkw.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/pkw.vue"]]);
}


// --------------------
// Request: /components/Icon/lkw.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a9004d1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    id: "semi",
    xmlns: "http://www.w3.org/2000/svg",
    width: "96.484",
    height: "100.406",
    class: "mx-auto px-2",
    viewBox: "0 0 96.484 100.406"
  }, _attrs))}><path id="Pfad_4" data-name="Pfad 4" d="M103.053,78.639h-.882v-11.5a13.167,13.167,0,0,0-2.745-8.058V46.771a5.4,5.4,0,0,0-2.942-4.8V27.945a3.433,3.433,0,0,0-1.964-3.1L94.478,9.9h2.888a1.471,1.471,0,0,0,1.471-1.471V1.471A1.471,1.471,0,0,0,97.365,0H94.228A9.617,9.617,0,0,0,84.72,9.564L83.538,6.215A9.329,9.329,0,0,0,74.754,0H41.73a9.329,9.329,0,0,0-8.784,6.215L31.764,9.564A9.617,9.617,0,0,0,22.257,0H19.119a1.471,1.471,0,0,0-1.471,1.471V8.433A1.471,1.471,0,0,0,19.119,9.9h2.888l-.041,14.944A3.433,3.433,0,0,0,20,27.945V42.076a5.4,5.4,0,0,0-2.745,4.7v.49a1.471,1.471,0,0,0,2.942,0v-.49a2.454,2.454,0,0,1,2.451-2.451h6.177v9.542l-1.144-.011A13.179,13.179,0,0,0,20.2,56.079V54.125a1.471,1.471,0,0,0-2.942,0v4.643a13.128,13.128,0,0,0-2.942,8.319V78.639h-.882A3.436,3.436,0,0,0,10,82.071v3.746a5.378,5.378,0,0,0,4.492,5.317l3.745.635v3.245a5.4,5.4,0,0,0,5.393,5.393h7.06a5.4,5.4,0,0,0,5.393-5.393v-.49H80.4v.49a5.4,5.4,0,0,0,5.393,5.393h7.06a5.4,5.4,0,0,0,5.393-5.393V91.769l3.745-.635a5.378,5.378,0,0,0,4.492-5.317V82.071A3.436,3.436,0,0,0,103.053,78.639Zm-20.689,0V74.717H92.855a3.436,3.436,0,0,0,3.432-3.432v-4.9a3.436,3.436,0,0,0-3.432-3.432H82.363v-6.1h6.57a10.307,10.307,0,0,1,10.3,10.3v11.5Zm-45.3,0V54.616A8.344,8.344,0,0,1,45.4,46.281h25.69a8.344,8.344,0,0,1,8.335,8.335V78.639Zm-2.942-6.864H23.629a.491.491,0,0,1-.49-.49v-4.9a.491.491,0,0,1,.49-.49H34.121Zm48.242-5.883H92.855a.491.491,0,0,1,.49.49v4.9a.491.491,0,0,1-.49.49H82.363ZM93.541,27.945V41.378H87.658V27.455h5.393A.491.491,0,0,1,93.541,27.945ZM87.658,44.32h6.373a2.454,2.454,0,0,1,2.451,2.451V56.28a13.159,13.159,0,0,0-7.55-2.373H87.658Zm0-34.613a6.677,6.677,0,0,1,6.57-6.766h1.667v4.02H94.228a2.7,2.7,0,0,0-2.692,2.7l.041,14.855H87.658V9.707ZM35.72,7.194a6.384,6.384,0,0,1,6.01-4.252h.823V5.393a5.4,5.4,0,0,0,5.393,5.393H49.81a1.471,1.471,0,1,0,0-2.942H47.947A2.454,2.454,0,0,1,45.5,5.393V2.942H70.989V5.393a2.454,2.454,0,0,1-2.451,2.451H56.673a1.471,1.471,0,1,0,0,2.942H68.538a5.4,5.4,0,0,0,5.393-5.393V2.942h.823a6.383,6.383,0,0,1,6.01,4.252l3.344,9.475H32.376ZM20.59,6.962V2.942h1.667a6.677,6.677,0,0,1,6.57,6.766V24.513H24.908l.041-14.859a2.7,2.7,0,0,0-2.692-2.692Zm2.353,34.417V27.945a.491.491,0,0,1,.49-.49h5.393V41.378Zm8.825-15.394V19.611H84.717v34.3H82.339A11.289,11.289,0,0,0,71.087,43.34H45.4A11.289,11.289,0,0,0,34.145,53.915l-2.377-.024Zm-14.512,41.1a10.3,10.3,0,0,1,10.4-10.295l6.468.064V62.95H23.629A3.436,3.436,0,0,0,20.2,66.382v4.9a3.436,3.436,0,0,0,3.432,3.432H34.121v3.922H17.256ZM30.689,97.465h-7.06a2.454,2.454,0,0,1-2.451-2.451V92.267L33.141,94.3v.719A2.454,2.454,0,0,1,30.689,97.465Zm7.354-5.883V87.66h3.922v3.922Zm36.476,0V87.66h3.922v3.922Zm20.787,3.432a2.454,2.454,0,0,1-2.451,2.451H85.8a2.454,2.454,0,0,1-2.451-2.451V94.3l11.962-2.028Zm8.236-9.2a2.445,2.445,0,0,1-2.042,2.417L81.749,91.582h-.367V87.169a2.454,2.454,0,0,0-2.451-2.451h-4.9a2.454,2.454,0,0,0-2.451,2.451v4.412H44.907V87.169a2.454,2.454,0,0,0-2.451-2.451h-4.9A2.454,2.454,0,0,0,35.1,87.169v4.412h-.367L14.983,88.234a2.445,2.445,0,0,1-2.042-2.417V82.071a.491.491,0,0,1,.49-.49h89.621a.491.491,0,0,1,.49.49Z" transform="translate(-10 0)" fill="#1f1f1f"></path><path id="Pfad_5" data-name="Pfad 5" d="M193.1,251H177.708a1.471,1.471,0,1,0,0,2.942H193.1a3.436,3.436,0,0,1,3.432,3.432V271.1a3.436,3.436,0,0,1-3.432,3.432H169.373a3.436,3.436,0,0,1-3.432-3.432V257.373a3.436,3.436,0,0,1,3.432-3.432h1.471a1.471,1.471,0,1,0,0-2.942h-1.471A6.381,6.381,0,0,0,163,257.373V271.1a6.381,6.381,0,0,0,6.373,6.373H193.1a6.381,6.381,0,0,0,6.373-6.373V257.373A6.381,6.381,0,0,0,193.1,251Z" transform="translate(-132.996 -201.777)" fill="#1f1f1f"></path><path id="Pfad_6" data-name="Pfad 6" d="M216.435,281H194.471a1.471,1.471,0,1,0,0,2.942h21.964a1.471,1.471,0,1,0,0-2.942Z" transform="translate(-157.113 -225.894)" fill="#1f1f1f"></path><path id="Pfad_7" data-name="Pfad 7" d="M216.435,311H194.471a1.471,1.471,0,1,0,0,2.942h21.964a1.471,1.471,0,1,0,0-2.942Z" transform="translate(-157.113 -250.011)" fill="#1f1f1f"></path><path id="Pfad_8" data-name="Pfad 8" d="M216.435,341H194.471a1.471,1.471,0,1,0,0,2.942h21.964a1.471,1.471,0,1,0,0-2.942Z" transform="translate(-157.113 -274.128)" fill="#1f1f1f"></path><path id="Pfad_9" data-name="Pfad 9" d="M136.432,132.846H177.81a3.436,3.436,0,0,0,3.432-3.432v-.49a1.471,1.471,0,1,0-2.942,0v.49a.491.491,0,0,1-.49.49H136.432a.491.491,0,0,1-.49-.49V118.432a.491.491,0,0,1,.49-.49H177.81a.491.491,0,0,1,.49.49v3.628a1.471,1.471,0,1,0,2.942,0v-3.628A3.436,3.436,0,0,0,177.81,115H136.432A3.436,3.436,0,0,0,133,118.432v10.982A3.436,3.436,0,0,0,136.432,132.846Z" transform="translate(-108.879 -92.448)" fill="#1f1f1f"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/lkw.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/lkw.vue"]]);
}


// --------------------
// Request: /components/Icon/motorsport.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4e34aab3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: "mx-auto px-2",
    xmlns: "http://www.w3.org/2000/svg",
    width: "106.1",
    height: "82.655",
    viewBox: "0 0 106.1 82.655"
  }, _attrs))}><g id="racing-car-2" transform="translate(0.3 0.3)"><path id="Pfad_1" data-name="Pfad 1" d="M104.656,89.426c.033-1.094.08-2.817.116-4.851a12.422,12.422,0,0,0,1.726-6.26c0-2.929-1.1-4.3-1.743-4.854-.187-6.64-.695-8.395-1.062-9.132a21.761,21.761,0,0,0-2.219-3.26v-3.4a6.368,6.368,0,0,0-6.361-6.361H91.342s0-.009,0-.014c-.139-.277-.314-.646-.517-1.086l1.962-3.924h4.59a5.783,5.783,0,0,0,5.776-5.776V38.746a.837.837,0,0,0-.837-.837h-5.04a5.851,5.851,0,0,0-5.611,4.223,5.124,5.124,0,0,0-3.621,1.85c-1.506-3.4-3.3-7.424-5.053-11.15-.1-.207-.2-.409-.312-.608,2.323.215,3.795.414,4.567.533v1.8a2.512,2.512,0,1,0,5.024,0V24.512a2.508,2.508,0,0,0-5.015-.085c-3.638-.348-17.724-1.589-33.5-1.589s-29.861,1.241-33.5,1.589a2.508,2.508,0,0,0-5.015.085V34.559a2.512,2.512,0,1,0,5.024,0v-1.8c.771-.118,2.242-.317,4.566-.533-.11.2-.214.4-.311.608-1.755,3.727-3.547,7.752-5.053,11.151a5.1,5.1,0,0,0-3.451-1.84c-.379-2.561-2.6-4.233-5.781-4.233H5.186a.837.837,0,0,0-.837.837v1.759a5.783,5.783,0,0,0,5.776,5.776h4.59l1.962,3.924c-.2.44-.378.809-.517,1.086,0,0,0,.009,0,.014H12.384a6.368,6.368,0,0,0-6.36,6.361v3.4A21.762,21.762,0,0,0,3.8,64.329c-.368.739-.875,2.5-1.061,9.132C2.1,74.014,1,75.385,1,78.315a12.425,12.425,0,0,0,1.727,6.26c.036,2.036.083,3.76.116,4.855A4.017,4.017,0,0,0,1,93.156a4.219,4.219,0,0,0,1.359,3.065c5.678,5.775,30.27,7.833,51.391,7.833S99.462,102,105.14,96.221a4.216,4.216,0,0,0,1.359-3.065,4.024,4.024,0,0,0-1.843-3.729Zm-38.347-.092c4.127-.784,7.351-1.69,8.319-1.974,1.456.624,7.972,3.3,12.613,3.3,2.886,0,10.839-3.039,15.837-5.071-.043,2.083-.093,3.735-.119,4.527-2.293,1.046-12.458,5.568-16.691,5.568-4.742,0-11.232-3.228-11.3-3.26a.837.837,0,0,0-.606-.057c-.036.01-3.495,1-8.056,1.886V89.334Zm37.04-5.643a.869.869,0,0,0-.113.022c-2.211.908-4.26,1.712-6.12,2.406a83.718,83.718,0,0,0,7.008-10.835,5.618,5.618,0,0,1,.7,3.031A10.854,10.854,0,0,1,103.349,83.691ZM99.8,57.666v3.418c-2.956,4.143-9.933,11.781-23.337,16.177,3.656-7.32,2.323-18.937,1.427-24.281H95.114A4.691,4.691,0,0,1,99.8,57.666ZM33.381,77.971c-4.742-6.955-2.77-20.988-2.05-25.136a.837.837,0,0,1,.826-.693h1.561c-.14,8.607.036,17.364.522,26.066Q33.805,78.091,33.381,77.971ZM45.665,27.926q-.156,2.1-.292,4.2c-3.251.064-6.28.167-9.042.309-.08,0-.157.022-.237.028q.136-2.141.292-4.267Q40.728,28.01,45.665,27.926Zm-9.247,6.183c4.982-.256,10.814-.387,17.331-.387q4.631,0,8.775.088L45.866,50.468H32.156a2.5,2.5,0,0,0-1.866.837H24.134c.475-.964,1.094-2.264,1.815-3.777,1.37-2.874,3.075-6.452,4.726-9.7a6.851,6.851,0,0,1,5.743-3.721Zm30.992-.16L50.891,50.468H48.235l16.6-16.6Q66.152,33.9,67.41,33.949Zm9.8,17.356a2.5,2.5,0,0,0-1.867-.837H53.259L69.684,34.043c.471.022.941.043,1.4.066a6.85,6.85,0,0,1,5.743,3.72c1.651,3.246,3.356,6.824,4.726,9.7.722,1.514,1.341,2.813,1.815,3.777H77.209ZM66.424,53.088a2.936,2.936,0,0,1,.7,2.321c-.824,6.286-3.656,16.829-13.372,16.829S41.2,61.694,40.378,55.409a2.936,2.936,0,0,1,.7-2.321,2.725,2.725,0,0,1,2.072-.945H64.352a2.725,2.725,0,0,1,2.072.945ZM35.936,78.635c-.507-8.842-.687-17.745-.544-26.493h4.3a4.614,4.614,0,0,0-.972,3.484c.98,7.476,3.316,11.963,6.007,14.62.1,3.294.263,6.628.462,9.934A70.435,70.435,0,0,1,35.936,78.635Zm10.937,1.7c-.175-2.876-.311-5.77-.414-8.647a12.687,12.687,0,0,0,7.291,2.226c4.719,0,12.947-2.375,15.031-18.286a4.613,4.613,0,0,0-.972-3.484h7.534a.836.836,0,0,1,.825.694c.722,4.153,2.693,18.178-2.052,25.136A74.4,74.4,0,0,1,53.749,80.61c-2.406,0-4.689-.1-6.877-.277Zm50.4-40.75h4.2v.922a4.106,4.106,0,0,1-4.1,4.1H93.1v-.854A4.174,4.174,0,0,1,97.272,39.583Zm-5.844,4.264v1.4l-1.5,2.994c-.329-.737-.694-1.559-1.091-2.452A3.5,3.5,0,0,1,91.428,43.847Zm-4.481,1.8c1.07,2.418,1.953,4.408,2.54,5.657h-4.25c-.481-.943-1.243-2.542-2.176-4.5-1.374-2.883-3.085-6.471-4.744-9.737a8.53,8.53,0,0,0-7.15-4.634c-2.077-.107-4.308-.191-6.666-.255H64.5q-4.991-.133-10.747-.135-3.483,0-6.695.05.136-2.1.291-4.195c2.069-.027,4.2-.042,6.4-.042,7.453,0,14.16.155,19.937.459a9.122,9.122,0,0,1,7.787,5.225c1.917,4.074,3.889,8.526,5.473,12.1Zm1.969-21.137a.837.837,0,1,1,1.675,0V34.559a.837.837,0,1,1-1.675,0ZM18.583,34.559a.837.837,0,1,1-1.675,0V24.512a.837.837,0,1,1,1.675,0Zm1.675-3.5V26.108c3.357-.324,17.558-1.6,33.492-1.6s30.134,1.272,33.492,1.6v4.954c-1.022-.151-2.877-.385-5.8-.628a10.8,10.8,0,0,0-7.666-3.786c-5.8-.306-12.542-.461-20.025-.461-2.42,0-4.752.018-7.011.05a.808.808,0,0,0-.109-.031.826.826,0,0,0-.31.037c-4.563.069-8.784.2-12.6.405a10.8,10.8,0,0,0-7.666,3.786C23.135,30.677,21.28,30.911,20.258,31.062ZM14.4,44.607H10.126a4.107,4.107,0,0,1-4.1-4.1v-.922h4.2c2.015,0,4.17.88,4.17,3.349Zm1.675.64v-1.4a3.5,3.5,0,0,1,2.588,1.941c-.4.894-.761,1.716-1.091,2.452Zm4.481.4c1.585-3.577,3.556-8.029,5.474-12.1a9.123,9.123,0,0,1,7.787-5.225l.89-.044q-.166,2.242-.309,4.5a8.514,8.514,0,0,0-5.213,4.293c-1.66,3.265-3.37,6.854-4.744,9.737-.932,1.955-1.695,3.555-2.176,4.5h-4.25C18.6,50.056,19.481,48.066,20.552,45.648ZM12.385,52.98H29.609c-.894,5.339-2.227,16.962,1.427,24.281-13.4-4.4-20.381-12.035-23.337-16.177V57.666A4.692,4.692,0,0,1,12.385,52.98ZM6.843,62.751c4.927,6.543,18.321,19.534,46.907,19.534s41.979-12.991,46.907-19.534a16.764,16.764,0,0,1,1.539,2.324c.26.522.722,2.331.89,8.575,0,.009.006.018.006.027A87.574,87.574,0,0,1,94.21,87.166a28.731,28.731,0,0,1-6.969,1.818c-4.786,0-12.146-3.245-12.219-3.277a.838.838,0,0,0-.586-.035c-.036.011-3.445,1.052-8.127,1.959V86.472a.837.837,0,0,0-.837-.837H42.027a.837.837,0,0,0-.837.837V87.63c-4.68-.906-8.091-1.947-8.127-1.958a.833.833,0,0,0-.586.035c-.074.032-7.428,3.276-12.219,3.276a29.355,29.355,0,0,1-6.976-1.826,87.467,87.467,0,0,1-8.869-13.47c.167-6.265.63-8.087.892-8.613a16.474,16.474,0,0,1,1.538-2.323ZM64.634,87.309V97.356H42.865V87.309ZM20.258,90.658c4.641,0,11.156-2.673,12.613-3.3.969.283,4.192,1.19,8.319,1.974v4.917c-4.557-.888-8.02-1.876-8.056-1.886a.832.832,0,0,0-.606.057c-.065.032-6.555,3.26-11.3,3.26-4.232,0-14.4-4.523-16.691-5.569-.026-.792-.077-2.444-.119-4.527C8.845,87.385,17.3,90.658,20.258,90.658ZM3.373,75.282a83.681,83.681,0,0,0,7,10.83c-2.069-.77-4.222-1.62-6.249-2.455a10.777,10.777,0,0,1-1.454-5.343A5.636,5.636,0,0,1,3.373,75.282ZM103.945,95.046c-4.379,4.455-24.082,7.334-50.2,7.334S7.933,99.5,3.554,95.046a2.582,2.582,0,0,1-.879-1.862A3.253,3.253,0,0,1,3.2,91.309a.829.829,0,0,0,.163.106c.517.243,12.735,5.941,17.866,5.941,4.6,0,10.379-2.635,11.755-3.295.988.271,4.215,1.129,8.2,1.895v2.237a.837.837,0,0,0,.837.837H65.471a.837.837,0,0,0,.837-.837V95.956c3.991-.766,7.217-1.624,8.2-1.895,1.377.66,7.159,3.295,11.755,3.295,5.131,0,17.349-5.7,17.866-5.941a.862.862,0,0,0,.164-.106,3.247,3.247,0,0,1,.526,1.875A2.579,2.579,0,0,1,103.945,95.046Z" transform="translate(-0.999 -22)" fill="#1f1f1f" stroke="#1f1f1f" stroke-width="0.6"></path><path id="Pfad_2" data-name="Pfad 2" d="M19.559,95.42c4.438,0,9.532-4.2,9.747-4.381a.837.837,0,0,0-.537-1.48c-7.929,0-20.217-12.191-20.34-12.314a.837.837,0,0,0-1.356.935C8.37,81.06,15.06,95.42,19.559,95.42Zm0-1.675c-.975,0-2.387-1.439-3.927-3.585a7.448,7.448,0,0,1,1.908-3.339,27.609,27.609,0,0,0,9,4.17C24.8,92.164,21.988,93.746,19.559,93.746Zm-3.435-7.888a9.128,9.128,0,0,0-1.668,2.569c-1.352-2.1-2.741-4.58-3.976-7.014C12.006,82.738,13.966,84.337,16.125,85.858Z" transform="translate(-1.976 -30.949)" fill="#1f1f1f" stroke="#1f1f1f" stroke-width="0.6"></path><path id="Pfad_3" data-name="Pfad 3" d="M104.048,95.42c4.5,0,11.19-14.36,12.486-17.24a.837.837,0,0,0-1.356-.935c-.123.123-12.405,12.314-20.34,12.314a.837.837,0,0,0-.536,1.48c.214.179,5.308,4.381,9.746,4.381Zm5.1-6.993a9.119,9.119,0,0,0-1.669-2.569,71.432,71.432,0,0,0,5.645-4.446c-1.235,2.433-2.624,4.916-3.976,7.015Zm-3.084-1.605a7.451,7.451,0,0,1,1.907,3.341c-1.539,2.144-2.951,3.583-3.926,3.583-2.423,0-5.233-1.582-6.983-2.755A27.624,27.624,0,0,0,106.066,86.822Z" transform="translate(-16.131 -30.949)" fill="#1f1f1f" stroke="#1f1f1f" stroke-width="0.6"></path></g></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/motorsport.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/motorsport.vue"]]);
}


// --------------------
// Request: /components/Section/Contact.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /components/Icon/Ort.vue ($id_ec23dc9c)
// - /components/Icon/Oeffnungszeiten.vue ($id_d1b33b5c)
// - /components/Icon/Telefon.vue ($id_111afe07)
// - /components/Icon/Email.vue ($id_eedab458)
// - /components/Icon/Printer.vue ($id_33e59396)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /components/Basic/Button.vue ($id_065e283f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5e25048f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Icon/Ort.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Icon/Oeffnungszeiten.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Icon/Telefon.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Icon/Email.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Icon/Printer.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Basic/Button.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_7__.defineComponent({
  __name: "Contact",
  setup(__props, { expose }) {
    expose();
    const selectedFiles = __vite_ssr_import_8__.ref([]);
    const formState = __vite_ssr_import_8__.ref("ready");
    const formData = __vite_ssr_import_8__.reactive({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    const checked = __vite_ssr_import_8__.ref(false);
    const disabled = __vite_ssr_import_8__.computed(() => !(formData.name && formData.email && formData.phone && formData.subject && formData.message && checked.value));
    const sendForm = async () => {
      formState.value = "loading";
      const data = new FormData();
      data.append("email", formData.email);
      data.append("Telefon", formData.phone);
      data.append("Name", formData.name);
      data.append("subject", formData.subject);
      data.append("message", formData.message);
      try {
        const res = await $fetch("https://formspree.io/f/xknyekkb", {
          body: data,
          method: "POST",
          redirect: "manual",
          headers: {
            Accept: "multipart/form-data"
          }
        });
        console.log("res", res);
        if (res) {
          formState.value = "succeeded";
        } else {
          formState.value = "failed";
        }
      } catch (error) {
        formState.value = "succeeded";
      }
    };
    const __returned__ = { selectedFiles, formState, formData, checked, disabled, sendForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconOrt = __vite_ssr_import_0__.default;
  const _component_IconOeffnungszeiten = __vite_ssr_import_1__.default;
  const _component_IconTelefon = __vite_ssr_import_2__.default;
  const _component_IconEmail = __vite_ssr_import_3__.default;
  const _component_IconPrinter = __vite_ssr_import_4__.default;
  const _component_NuxtLink = __vite_ssr_import_5__.default;
  const _component_BasicButton = __vite_ssr_import_6__.default;
  _push(`<section${__vite_ssr_import_10__.ssrRenderAttrs(__vite_ssr_import_9__.mergeProps({
    id: "kontakt",
    class: "flex flex-col-reverse lg:flex-row"
  }, _attrs))}><div class="lg:w-1/2 flex items-center pt-4 xl:pt-8"><div class="max-w-xl mx-auto px-4 py-12 md:px-4 lg:px-3"><div class="pb-16 flex flex-col text-sm"><div class="bg-bs-red w-16 h-1 lg:h-2"></div><h3 class="uppercase leading-none text-xl md:text-2xl xl:text-5xl">Kontakt</h3><div class="flex text-xs lg:text-lg"><ul class="w-full xl:grid grid-cols-2 gap-x-16"><li class="flex w-full">`);
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_IconOrt, { class: "w-[16px] lg:!min-w-[16px] lg:w-[20px] self-start" }, null, _parent));
  _push(`<p class="ml-2 pb-2 text-sm lg:text-lg">BS Dienstleistungen - Bianca\xA0Sch\xE4fers<br>Schulstra\xDFe 2 | 57392 Schmallenberg-Felbecke</p></li><li class="flex">`);
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_IconOeffnungszeiten, { class: "w-3 lg:w-4 self-start" }, null, _parent));
  _push(`<p class="ml-2 pb-2 text-sm lg:text-lg">Mo.-Fr.: 08.00 Uhr - 18.00 Uhr<br>Sa.: 08.00 Uhr - 12.00 Uhr</p></li><li class="flex">`);
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_IconTelefon, { class: "w-3 lg:w-4 self-start" }, null, _parent));
  _push(`<p class="ml-2 pb-2 text-sm lg:text-lg"><a href="tel:4929729622800">+49 (0) 2972 - 9622800</a></p></li><li class="flex">`);
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_IconEmail, { class: "w-3 lg:w-4 self-start" }, null, _parent));
  _push(`<p class="ml-2 pb-2 text-sm lg:text-lg"><a href="mailto:info@bsdienstleistungen.eu">info@bsdienstleistungen.eu</a></p></li><li class="flex">`);
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_IconPrinter, { class: "w-3 lg:w-4 self-start" }, null, _parent));
  _push(`<p class="ml-2 pb-2 text-sm lg:text-lg">+49 (0) 2972 - 962229</p></li></ul></div></div><div class="mb-16"><div class="bg-bs-blue w-16 h-1 lg:h-2"></div><h3 class="uppercase leading-none text-xl md:text-2xl xl:text-5xl">Schreiben sie uns eine Nachricht</h3>`);
  if ($setup.formState === "ready") {
    _push(`<form class="mt-8"><div class="xl:w-full mx-auto mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"><div class="flex flex-col py-3 px-1"><input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:border-b-0 focus:ring-bs-red border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="name"${__vite_ssr_import_10__.ssrRenderAttr("value", $setup.formData.name)} placeholder="Name" required type="text"></div><div class="flex flex-col py-3 px-1"><input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="email"${__vite_ssr_import_10__.ssrRenderAttr("value", $setup.formData.email)} placeholder="eMail" required type="email"></div><div class="flex flex-col py-3 px-1"><input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="phone"${__vite_ssr_import_10__.ssrRenderAttr("value", $setup.formData.phone)} placeholder="Telefon" type="tel"></div><div class="flex flex-col py-3 px-1"><input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="subject"${__vite_ssr_import_10__.ssrRenderAttr("value", $setup.formData.subject)} placeholder="Betreff" type="text"></div></div><div class="flex flex-col mx-auto py-6 px-1"><textarea class="pl-2 focus:outline-none focus:ring-1 focus:ring-bs-red focus:border-transparent focus:border-b-0 block w-full shadow-sm text-sm lg:text-lg border-bs-black border-b" placeholder="Nachricht" required id="message" rows="5">${__vite_ssr_import_10__.ssrInterpolate($setup.formData.message)}</textarea></div><div class="py-2 px-1"><input${__vite_ssr_import_10__.ssrIncludeBooleanAttr(Array.isArray($setup.checked) ? __vite_ssr_import_10__.ssrLooseContain($setup.checked, null) : $setup.checked) ? " checked" : ""} id="data-protection-form" class="w-3 h-3 border-2 border-black bg-transparent focus:outline-none focus:ring-0" type="checkbox"><label for="data-protection-form" class="text-sm pl-2">Ja, ich habe die `);
    _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
      to: "/datenschutz",
      class: "underline"
    }, {
      default: __vite_ssr_import_9__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Datenschutzerkl\xE4rung`);
        } else {
          return [
            __vite_ssr_import_9__.createTextVNode("Datenschutzerkl\xE4rung")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(` zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.</label></div>`);
    _push(__vite_ssr_import_10__.ssrRenderComponent(_component_BasicButton, {
      disabled: $setup.disabled,
      class: "text-bs-white disabled:cursor-not-allowed w-full justify-center m-auto my-8 lg:my-6 py-2 px-4 border border-transparent text-sm lg:text-lg shadow-sm text-white bg-bs-red hover:bg-bs-red transition-all uppercase",
      color: $setup.disabled ? "Red" : "Blue",
      label: "Nachricht senden",
      tag: "button"
    }, null, _parent));
    _push(`</form>`);
  } else if ($setup.formState === "loading") {
    _push(`<div><svg role="status" class="mx-auto block w-8 h-8 text-msg-gray animate-spin fill-msg-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg></div>`);
  } else if ($setup.formState === "succeeded") {
    _push(`<div><p class="mt-4">Die Nachricht wurde erfolgreich versandt!</p></div>`);
  } else {
    _push(`<div><p class="mt-4">Die Nachricht konnte nicht gesendet werden.</p></div>`);
  }
  _push(`</div></div></div><div class="lg:w-1/2 aspect-square"><iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.9400200570767!2d8.225812116088818!3d51.16489517958037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbf145c9f42d7b%3A0x647827d47eff595e!2sBS%20Dienstleistungen%20-%20Bianca%20Sch%C3%A4fers!5e0!3m2!1sde!2sde!4v1654812017432!5m2!1sde!2sde" width="600" height="450" style="${__vite_ssr_import_10__.ssrRenderStyle({ "border": "0" })}" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></section>`);
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/cichy/Downloads/BS-main/BS-main/components/Section/Contact.vue"]]);
;
}


// --------------------
// Request: /components/Icon/Ort.vue
// Parents: 
// - /components/Section/Contact.vue ($id_5e25048f)
// - /components/Layout/Footer.vue ($id_9cc62014)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ec23dc9c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {"enable-background":"new 0 0 512 512"},
    "xml:space": "preserve"
  }, _attrs))}><g><g><path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257
			c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22
			C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34
			C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180
			C406.1,207.121,398.689,233.688,384.866,256.818z"></path></g></g><g><g><path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z
			 M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2
			C316.1,212.683,289.784,240.2,256,240.2z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/Ort.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/Ort.vue"]]);
}


// --------------------
// Request: /components/Icon/Oeffnungszeiten.vue
// Parents: 
// - /components/Section/Contact.vue ($id_5e25048f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d1b33b5c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {"enable-background":"new 0 0 512 512"},
    "xml:space": "preserve",
    class: "w-7"
  }, _attrs))}><g><g><path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978
			c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952
			C357.766,320.208,355.981,307.775,347.216,301.211z"></path></g></g><g><g><path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341
			c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341
			S375.275,472.341,256,472.341z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/Oeffnungszeiten.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/Oeffnungszeiten.vue"]]);
}


// --------------------
// Request: /components/Icon/Telefon.vue
// Parents: 
// - /components/Section/Contact.vue ($id_5e25048f)
// - /components/Layout/Footer.vue ($id_9cc62014)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_111afe07 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 482.6 482.6",
    style: {"enable-background":"new 0 0 482.6 482.6"},
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
		C28.039,146.4,24.139,124.3,25.739,104.2z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/Telefon.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/Telefon.vue"]]);
}


// --------------------
// Request: /components/Icon/Email.vue
// Parents: 
// - /components/Section/Contact.vue ($id_5e25048f)
// - /components/Layout/Footer.vue ($id_9cc62014)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_eedab458 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {"enable-background":"new 0 0 512 512"},
    "xml:space": "preserve"
  }, _attrs))}><g><g><path d="M467,76H45C20.238,76,0,96.149,0,121v270c0,24.86,20.251,45,45,45h422c24.762,0,45-20.149,45-45V121
			C512,96.143,491.752,76,467,76z M460.09,106c-14.549,14.597-185.445,186.05-192.466,193.094c-5.864,5.882-17.381,5.886-23.248,0
			L51.91,106H460.09z M30,385.485v-258.97L159.065,256L30,385.485z M51.91,406l128.334-128.752l42.885,43.025
			c17.574,17.631,48.175,17.624,65.743,0l42.885-43.024L460.09,406H51.91z M482,385.485L352.935,256L482,126.515V385.485z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/Email.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/Email.vue"]]);
}


// --------------------
// Request: /components/Icon/Printer.vue
// Parents: 
// - /components/Section/Contact.vue ($id_5e25048f)
// - /components/Layout/Footer.vue ($id_9cc62014)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_33e59396 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {"enable-background":"new 0 0 512 512"},
    "xml:space": "preserve"
  }, _attrs))}><path d="m465.934 146.253h-62.331v-73.881c0-3.564-1.585-6.944-4.324-9.224l-49.721-41.372c-2.156-1.794-4.872-2.776-7.676-2.776h-221.485c-6.628 0-12 5.373-12 12v115.253h-62.331c-14.924 0-27.066 12.143-27.066 27.067v165.737c0 14.925 12.142 27.067 27.066 27.067h62.331v99.809c0 14.925 12.142 27.067 27.066 27.067h241.072c14.925 0 27.066-12.142 27.066-27.067v-99.809h62.331c14.925 0 27.066-12.142 27.066-27.067v-165.737c.002-14.924-12.14-27.067-27.064-27.067zm-333.537-103.253h205.145l42.061 34.998v68.256h-247.206zm247.206 422.933c0 1.663-1.404 3.067-3.066 3.067h-241.073c-1.662 0-3.066-1.404-3.066-3.067v-178.104c0-1.663 1.404-3.067 3.066-3.067h241.072c1.662 0 3.066 1.404 3.066 3.067v178.104zm89.397-126.876c0 1.662-1.404 3.067-3.066 3.067h-62.331v-54.295c0-14.925-12.142-27.067-27.066-27.067h-241.073c-14.925 0-27.066 12.142-27.066 27.067v54.295h-62.332c-1.662 0-3.066-1.405-3.066-3.067v-165.737c0-1.663 1.404-3.067 3.066-3.067h419.867c1.662 0 3.066 1.404 3.066 3.067v165.737zm-131.338 87.194c0 6.627-5.372 12-12 12h-139.324c-6.628 0-12-5.373-12-12s5.372-12 12-12h139.324c6.628 0 12 5.373 12 12zm0-49.37c0 6.627-5.372 12-12 12h-139.324c-6.628 0-12-5.373-12-12s5.372-12 12-12h139.324c6.628 0 12 5.373 12 12zm0-49.37c0 6.627-5.372 12-12 12h-139.324c-6.628 0-12-5.373-12-12s5.372-12 12-12h139.324c6.628 0 12 5.373 12 12z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/Printer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/Printer.vue"]]);
}


// --------------------
// Request: /components/Basic/Button.vue
// Parents: 
// - /components/Section/Contact.vue ($id_5e25048f)
// - /components/Layout/Footer.vue ($id_9cc62014)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_065e283f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "Button",
  props: {
    href: { type: String, required: false },
    label: { type: String, required: true },
    labelHover: { type: String, required: false },
    color: { type: String, required: false, default: "Black" },
    outline: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const buttonClasses = __vite_ssr_import_1__.computed(() => {
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
    const __returned__ = { props, buttonClasses };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  __vite_ssr_import_3__.ssrRenderVNode(_push, __vite_ssr_import_2__.createVNode(__vite_ssr_import_2__.resolveDynamicComponent($props.href ? "a" : "button"), __vite_ssr_import_2__.mergeProps({
    class: ["inline-flex justify-center items-center text-sm lg:text-base text-center transition group", $setup.buttonClasses]
  }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
        _push2(`<div${_scopeId}>`);
        if (!$setup.props.labelHover) {
          _push2(`<span${_scopeId}>${__vite_ssr_import_3__.ssrInterpolate($setup.props.label)}</span>`);
        } else {
          _push2(`<span class="relative"${_scopeId}><span class="group-hover:-translate-y-2/3 inline-block group-hover:opacity-0 transition-all lg:px-2"${_scopeId}>${__vite_ssr_import_3__.ssrInterpolate($setup.props.label)}</span><span class="translate-y-2/3 group-hover:-translate-y-0 absolute left-0 opacity-0 group-hover:opacity-100 transition-all px-2"${_scopeId}>${__vite_ssr_import_3__.ssrInterpolate($setup.props.labelHover)}</span></span>`);
        }
        _push2(`</div>`);
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "before"),
          __vite_ssr_import_2__.createVNode("div", null, [
            !$setup.props.labelHover ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("span", { key: 0 }, __vite_ssr_import_2__.toDisplayString($setup.props.label), 1)) : (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("span", {
              key: 1,
              class: "relative"
            }, [
              __vite_ssr_import_2__.createVNode("span", { class: "group-hover:-translate-y-2/3 inline-block group-hover:opacity-0 transition-all lg:px-2" }, __vite_ssr_import_2__.toDisplayString($setup.props.label), 1),
              __vite_ssr_import_2__.createVNode("span", { class: "translate-y-2/3 group-hover:-translate-y-0 absolute left-0 opacity-0 group-hover:opacity-100 transition-all px-2" }, __vite_ssr_import_2__.toDisplayString($setup.props.labelHover), 1)
            ]))
          ]),
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "after")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Basic/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/cichy/Downloads/BS-main/BS-main/components/Basic/Button.vue"]]);
;
}


// --------------------
// Request: /pages/datenschutz.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs ($id_b9dc4107)
// Dependencies: 
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e4ecc621 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Basic/SeoHead.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_BasicSeoHead, {
    title: "Datenschutz",
    description: "Datenschutz"
  }, null, _parent))
  _push(`<div class="min-h-screen"><h1>Datenschutz</h1></div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/datenschutz.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/pages/datenschutz.vue"]]);
}


// --------------------
// Request: /pages/impressum.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs ($id_b9dc4107)
// Dependencies: 
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_27e097fe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Basic/SeoHead.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_BasicSeoHead, {
    title: "Impressum",
    description: "Impressum"
  }, null, _parent))
  _push(`<div class="min-h-screen"><h1>Impressum</h1></div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/impressum.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/pages/impressum.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs ($id_b9dc4107)
// Dependencies: 
// - /components/Basic/SeoHead.vue ($id_16853963)
// - /components/Section/Image-content.vue ($id_7b66d7af)
// - /components/Icon/pkw.vue ($id_e859319d)
// - /components/Icon/lkw.vue ($id_a9004d1b)
// - /components/Icon/motorsport.vue ($id_4e34aab3)
// - /components/Section/Contact.vue ($id_5e25048f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Basic/SeoHead.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Section/Image-content.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Icon/pkw.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Icon/lkw.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Icon/motorsport.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Section/Contact.vue");

const _sfc_main = {}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BasicSeoHead = __vite_ssr_import_0__.default
  const _component_SectionImageContent = __vite_ssr_import_1__.default
  const _component_IconPkw = __vite_ssr_import_2__.default
  const _component_IconLkw = __vite_ssr_import_3__.default
  const _component_IconMotorsport = __vite_ssr_import_4__.default
  const _component_SectionContact = __vite_ssr_import_5__.default

  _push(`<section${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_BasicSeoHead, {
    title: "BS Dienstleistungen - Bianca Schäfers",
    description: "Tankstelle Reifendienst Dienstleistungen im Bereich HDD Spülbohrverfahren Frachtenvermittlung Spedition Baustoffhandel"
  }, null, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "tankstelle",
    "image-link": "assets/images/bs_tankstelle.jpg",
    "title-bar-color": "#803a33",
    title: "tankstelle",
    direction: "left"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="text-sm lg:text-lg"${_scopeId}> Die Tankstelle wurde von der BS Dienstleistung im März 2020 übernommen und im Januar 2021 mit einer neuen Tanksäule ausgestattet. Mit einem Tankchip kann rund um die Uhr Diesel und AdBlue getankt werden. Die Tankstellenpreise werden nach jeder Belieferung neu angepasst und im Säulenbereich ausgeschildert. </p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg" }, " Die Tankstelle wurde von der BS Dienstleistung im März 2020 übernommen und im Januar 2021 mit einer neuen Tanksäule ausgestattet. Mit einem Tankchip kann rund um die Uhr Diesel und AdBlue getankt werden. Die Tankstellenpreise werden nach jeder Belieferung neu angepasst und im Säulenbereich ausgeschildert. ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "frachtenvermittlung",
    "image-link": "assets/images/bs_frachtenvermittlung-spedition.jpg",
    "title-bar-color": "#fb311c",
    title: "frachtenvermittlung / spedition",
    direction: "right"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="text-sm lg:text-lg"${_scopeId}>Wir vermarkten Ihre Ladungen EU weit. Teil und Komplettladungen aller Art.</p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg" }, "Wir vermarkten Ihre Ladungen EU weit. Teil und Komplettladungen aller Art.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "baustoffhandel",
    "image-link": "assets/images/bs_baustoffhandel.jpg",
    "title-bar-color": "#97754d",
    title: "baustoffhandel",
    direction: "left"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="text-sm lg:text-lg"${_scopeId}>Unser Unternehmen bietet Ihnen gerne Konditionen im Bereich Sand, Kies und Zement für Ihr Lager oder direkt zur Baustelle an. Weiterhin besitzen wir gute Kontakte zu Lieferanten von Reitsanden und Bodengemischen.</p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg" }, "Unser Unternehmen bietet Ihnen gerne Konditionen im Bereich Sand, Kies und Zement für Ihr Lager oder direkt zur Baustelle an. Weiterhin besitzen wir gute Kontakte zu Lieferanten von Reitsanden und Bodengemischen.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "reifendienst",
    "image-link": "assets/images/bs_reifendienst.jpg",
    "title-bar-color": "#fb7f43",
    title: "reifendienst",
    direction: "right"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="md:flex md:flex-row w-full lg:max-w-none justify-between"${
          _scopeId
        }><article class="my-6 mx-1 flex-col self-center sm:self-end text-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_IconPkw, null, null, _parent, _scopeId))
        _push(`<p class="font-bold py-2 text-sm lg:text-lg"${
          _scopeId
        }>PKW</p></article><article class="my-6 flex-col self-center sm:self-end text-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_IconLkw, null, null, _parent, _scopeId))
        _push(`<p class="font-bold py-2 text-sm lg:text-lg"${
          _scopeId
        }>LKW</p></article><article class="my-6 flex-col self-center sm:self-end text-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_IconMotorsport, null, null, _parent, _scopeId))
        _push(`<p class="font-bold py-2 text-sm lg:text-lg"${
          _scopeId
        }>Motorsportfahrzeuge</p></article></div><p class="text-sm lg:text-lg max-w-"${
          _scopeId
        }> Wir können Ihnen alle Reifen liefern, von PKW, SUV über Motorsportreifen bis hin zu allen LKW Reifen und Marken. Wenn Sie schon Reifen haben und die nur umgezogen werden müssen, sind wir auch Ihr richtiger Ansprechpartner. Sprechen Sie mit uns, wir finden eine Lösung. </p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("div", { class: "md:flex md:flex-row w-full lg:max-w-none justify-between" }, [
            __vite_ssr_import_6__.createVNode("article", { class: "my-6 mx-1 flex-col self-center sm:self-end text-center" }, [
              __vite_ssr_import_6__.createVNode(_component_IconPkw),
              __vite_ssr_import_6__.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "PKW")
            ]),
            __vite_ssr_import_6__.createVNode("article", { class: "my-6 flex-col self-center sm:self-end text-center" }, [
              __vite_ssr_import_6__.createVNode(_component_IconLkw),
              __vite_ssr_import_6__.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "LKW")
            ]),
            __vite_ssr_import_6__.createVNode("article", { class: "my-6 flex-col self-center sm:self-end text-center" }, [
              __vite_ssr_import_6__.createVNode(_component_IconMotorsport),
              __vite_ssr_import_6__.createVNode("p", { class: "font-bold py-2 text-sm lg:text-lg" }, "Motorsportfahrzeuge")
            ])
          ]),
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg max-w-" }, " Wir können Ihnen alle Reifen liefern, von PKW, SUV über Motorsportreifen bis hin zu allen LKW Reifen und Marken. Wenn Sie schon Reifen haben und die nur umgezogen werden müssen, sind wir auch Ihr richtiger Ansprechpartner. Sprechen Sie mit uns, wir finden eine Lösung. ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionImageContent, {
    id: "dienstleistungen",
    "image-link": "assets/images/bs-dienstleistungen-bianca-schaefers_spuelbohrverfahren.jpg",
    "title-bar-color": "#f1d4d0",
    title: "Dienstleistungen im Bereich HDD Spülbohrverfahren",
    direction: "left"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="text-sm lg:text-lg"${_scopeId}>Unsere Mitarbeiter haben sich in den letzten 2 Jahren besonders im Bereich Vermessung und Recycling eingearbeitet. Wir stehen aber auch für alle anderen Arbeiten rund um das HDD Spülbohrverfahren (bis auf Bedienung des Bohrgerätes) zur Verfügung.</p>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("p", { class: "text-sm lg:text-lg" }, "Unsere Mitarbeiter haben sich in den letzten 2 Jahren besonders im Bereich Vermessung und Recycling eingearbeitet. Wir stehen aber auch für alle anderen Arbeiten rund um das HDD Spülbohrverfahren (bis auf Bedienung des Bohrgerätes) zur Verfügung.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_SectionContact, null, null, _parent))
  _push(`</section>`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/pages/index.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_1014da17 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_a0df7e7f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/root-component.mjs
// Parents: 
// - C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry ($id_c69c8440)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_d400ee83 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/root-component.mjs ($id_d400ee83)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/error-component.mjs ($id_70e4118e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_70e4118e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/error-component.mjs ($id_70e4118e)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs ($id_9019377a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
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
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_9019377a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useMeta }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue3 }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtLink }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useTransitionState }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs ($id_9019377a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs ($id_9019377a)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:-ms-grid;display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs ($id_9019377a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
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
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:-ms-grid;display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs ($id_9019377a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
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
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/app-component.mjs
// Parents: 
// - C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry ($id_c69c8440)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_d02ac52c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/app-component.mjs ($id_d02ac52c)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, null, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/layouts.mjs ($id_2ff6a94d)
// --------------------
const $id_39003883 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_2ff6a94d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/default.vue'))
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/layouts.mjs ($id_2ff6a94d)
// Dependencies: 
// - /components/Layout/Navigation.vue ($id_65319fa0)
// - /components/Layout/Header.vue ($id_ad589f88)
// - /components/Layout/Footer.vue ($id_9cc62014)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Layout/Navigation.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Layout/Header.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Layout/Footer.vue");

const _sfc_main = {}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutNavigation = __vite_ssr_import_0__.default
  const _component_LayoutHeader = __vite_ssr_import_1__.default
  const _component_LayoutFooter = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "min-h-screen overflow-hidden" }, _attrs))}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_LayoutNavigation, null, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_LayoutHeader, {
    imageLink: "/assets/images/bs_header.jpg",
    title: "Dienstleistungen - Bianca Schäfers"
  }, null, _parent))
  __vite_ssr_import_4__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_LayoutFooter, { title: "Dienstleistungen" }, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/layouts/default.vue"]]);
}


// --------------------
// Request: /components/Layout/Navigation.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /components/Icon/LogoBS.vue ($id_b984290f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /config/menu.ts ($id_0e838efc)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_65319fa0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Icon/LogoBS.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/config/menu.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "Navigation",
  setup(__props, { expose }) {
    expose();
    const menu = __vite_ssr_import_2__.ref(false);
    const __returned__ = { menu, ids: __vite_ssr_import_4__.ids, idf: __vite_ssr_import_4__.idf };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  const _component_IconLogoBS = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "top-0 left-0 w-full bg-white z-100" }, _attrs))}><nav class="flex items-center justify-between px-6 py-4"><!-- logo -->`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "h-6 flex justify-start"
  }, {
    default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_6__.ssrRenderComponent(_component_IconLogoBS, { class: "h-6" }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_5__.createVNode(_component_IconLogoBS, { class: "h-6" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!-- Nav Link --><div class="hidden lg:flex items-center"><ul class="w-3/4 2xl:w-1/2 flex justify-start text-sm lg:text-base font-bold uppercase md:space-x-3 py-2 lg:space-x-4 xl:space-x-6"><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($setup.ids, (item) => {
    _push(`<li><a${__vite_ssr_import_6__.ssrRenderAttr("href", `/#${item.id}`)} class="hover:text-bs-red">${__vite_ssr_import_6__.ssrInterpolate(item.id)}</a></li>`);
  });
  _push(`<!--]--></ul></div><!-- Hamburger menu --><button type="button" aria-label="Menu button" class="hamburger fixed z-10 bg-bs-white pt-2 right-6 top-2 lg:hidden"><svg class="xl:w-auto w-11" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><g transform="translate(-0.03 2)"><line x2="30" transform="translate(0.03)" fill="none" stroke="#000" stroke-width="3"></line><line x2="30" transform="translate(0.03 8)" fill="none" stroke="#000" stroke-width="3"></line><line x2="30" transform="translate(0.03 16)" fill="none" stroke="#000" stroke-width="3"></line></g></svg></button></nav><!-- mobile Nav --><nav id="menu-mobile" class="${__vite_ssr_import_6__.ssrRenderClass([$setup.menu ? "" : "-translate-x-full", "fixed w-full h-screen lg:hidden bg-bs-white top-0 left-0 z-1000 p-8 pt-4 z-50 transition-transform duration-75 ease-in-out"])}"><div class="flex justify-end"><button type="button" aria-label="Menu close" class="hamburger"><span><svg class="xl:p-0 p-1" xmlns="http://www.w3.org/2000/svg" width="36.376" height="36.376" viewBox="0 0 47.376 47.376"><g transform="translate(-7.875 15.688)"><line x2="63" transform="translate(9.289 -14.274) rotate(45)" fill="none" stroke="#000" stroke-width="4"></line><line x2="63" transform="translate(9.289 30.274) rotate(-45)" fill="none" stroke="#000" stroke-width="4"></line></g></svg></span></button></div><div class="flex flex-col py-12"><ul class="w-3/4 mx-auto flex flex-col text-center justify-evenly text-base lg:text-lg font-bold uppercase space-y-8"><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($setup.idf, (item) => {
    _push(`<li><a${__vite_ssr_import_6__.ssrRenderAttr("href", `/#${item.id}`)} class="hover:text-bs-red">${__vite_ssr_import_6__.ssrInterpolate(item.id)}</a></li>`);
  });
  _push(`<!--]--></ul></div></nav></div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Navigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/cichy/Downloads/BS-main/BS-main/components/Layout/Navigation.vue"]]);
;
}


// --------------------
// Request: /components/Icon/LogoBS.vue
// Parents: 
// - /components/Layout/Navigation.vue ($id_65319fa0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/Icon/LogoBS.vue?vue&type=style&index=0&lang.css ($id_dfabf431)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b984290f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    version: "1.1",
    id: "Ebene_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 267.91 28.31",
    style: {"enable-background":"new 0 0 267.91 28.31"},
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
		c0.51,0.22,0.92,0.52,1.24,0.89c0.32,0.38,0.54,0.81,0.68,1.31C267.84,9.63,267.91,10.16,267.91,10.71z"></path></g></svg>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Icon/LogoBS.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Icon/LogoBS.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/cichy/Downloads/BS-main/BS-main/components/Icon/LogoBS.vue"]]);
}


// --------------------
// Request: /components/Icon/LogoBS.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/Icon/LogoBS.vue ($id_b984290f)
// Dependencies: 

// --------------------
const $id_dfabf431 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".st0{enable-background:new}.st1{fill:#e66a65}.st2{fill:#1f1f1f}";
}


// --------------------
// Request: /config/menu.ts
// Parents: 
// - /components/Layout/Navigation.vue ($id_65319fa0)
// - /components/Layout/Footer.vue ($id_9cc62014)
// Dependencies: 

// --------------------
const $id_0e838efc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
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
Object.defineProperty(__vite_ssr_exports__, "ids", { enumerable: true, configurable: true, get(){ return ids }});
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
Object.defineProperty(__vite_ssr_exports__, "idf", { enumerable: true, configurable: true, get(){ return idf }});
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
Object.defineProperty(__vite_ssr_exports__, "legal", { enumerable: true, configurable: true, get(){ return legal }});
;
}


// --------------------
// Request: /components/Layout/Header.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ad589f88 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "Header",
  props: {
    title: { type: String, required: true },
    imageLink: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    class: "flex items-end bg-cover text-bs-white",
    style: [`background-image: url(${$setup.props.imageLink});`, { "height": "calc(100vh - 3rem)" }]
  }, _attrs))}><div class="max-w-xl lg:max-w-7xl p-8 lg:mt-32 bg-bs-black bg-opacity-70"><div class="bg-red w-12 lg:w-24 h-1 lg:h-2 my-4"></div><div class="bg-bs-red w-16 h-1 lg:h-2"></div><h1 class="py-3 font-bold text-left leading-none line"><i><span class="text-bs-red mr-4">BS</span>${__vite_ssr_import_2__.ssrInterpolate($setup.props.title)}</i></h1><p class="text-xs md:text-sm xl:text-xl text-white sm:w-2/3 lg:w-1/2 xl:w-3/5 leading-4 md:leading-6 xl:leading-8"> Tankstelle \u2022 Reifendienst \u2022 Dienstleistungen im Bereich HDD Sp\xFClbohrverfahren \u2022 Frachtenvermittlung / Spedition \u2022 Baustoffhandel</p></div></header>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/cichy/Downloads/BS-main/BS-main/components/Layout/Header.vue"]]);
;
}


// --------------------
// Request: /components/Layout/Footer.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /components/Icon/Ort.vue ($id_ec23dc9c)
// - /components/Basic/Button.vue ($id_065e283f)
// - /components/Icon/Telefon.vue ($id_111afe07)
// - /components/Icon/Printer.vue ($id_33e59396)
// - /components/Icon/Email.vue ($id_eedab458)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /config/menu.ts ($id_0e838efc)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/Layout/Footer.vue?vue&type=style&index=0&scoped=true&lang.css ($id_852de351)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9cc62014 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Icon/Ort.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Basic/Button.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Icon/Telefon.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Icon/Printer.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Icon/Email.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/config/menu.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_6__.defineComponent({
  __name: "Footer",
  props: {
    title: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, legal: __vite_ssr_import_7__.legal, idf: __vite_ssr_import_7__.idf };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconOrt = __vite_ssr_import_0__.default;
  const _component_BasicButton = __vite_ssr_import_1__.default;
  const _component_IconTelefon = __vite_ssr_import_2__.default;
  const _component_IconPrinter = __vite_ssr_import_3__.default;
  const _component_IconEmail = __vite_ssr_import_4__.default;
  const _component_NuxtLink = __vite_ssr_import_5__.default;
  _push(`<footer${__vite_ssr_import_9__.ssrRenderAttrs(__vite_ssr_import_8__.mergeProps({ class: "flex flex-col lg:flex-row items-start bg-bs-black text-bs-white py-10" }, _attrs))} data-v-cebcba16><div class="relative max-w-xl w-full lg:w-1/2 lg:max-w-5xl p-4 lg:p-8 lg:my-8 bg-black bg-opacity-70 rounded-r-3xl" data-v-cebcba16><div class="bg-bs-red w-16 h-1 lg:h-2" data-v-cebcba16></div><h4 class="font-bold text-left text-3xl lg:text-5xl leading-none line" data-v-cebcba16><i data-v-cebcba16><span class="text-bs-red mr-4" data-v-cebcba16>BS</span>${__vite_ssr_import_9__.ssrInterpolate($setup.props.title)}</i></h4><p class="text-xs md:text-sm xl:text-xl text-white sm:w-2/3 lg:w-4/5 leading-4 md:leading-6 xl:leading-8" data-v-cebcba16> Tankstelle \u2022 Reifendienst \u2022 Dienstleistungen im Bereich HDD<br data-v-cebcba16> Sp\xFClbohrverfahren \u2022 Frachtenvermittlung / Spedition \u2022 Baustoffhandel </p></div><div class="w-full lg:w-1/2 h-full flex text-xs lg:text-sm lg:my-8 p-4 lg:p-8" data-v-cebcba16><div class="w-1/2 self-baseline leading-relaxed" data-v-cebcba16><div class="bg-bs-red w-16 h-1 lg:h-2" data-v-cebcba16></div><h4 class="uppercase text-base lg:text-2xl" data-v-cebcba16>Kontakt</h4><ul class="space-y-2 text-xs lg:text-sm" data-v-cebcba16><li class="flex text-bs-white" data-v-cebcba16>`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_IconOrt, { class: "hidden lg:block w-4 filter-white self-start" }, null, _parent));
  _push(`<p class="lg:pl-2" data-v-cebcba16> BS Dienstleistungen - Bianca\xA0Sch\xE4fers <br data-v-cebcba16> Schulstra\xDFe 2 <br data-v-cebcba16> 57392 Schmallenberg-Felbecke </p></li><li class="flex" data-v-cebcba16>`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_BasicButton, {
    class: "lg:pr-2 text-xs",
    tag: "a",
    label: "+49 (0) 2972 - 9622800",
    "label-hover": "Jetzt anrufen",
    href: "tel:+49029729622800"
  }, {
    before: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_IconTelefon, { class: "hidden lg:block w-3 filter-white" }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_8__.createVNode(_component_IconTelefon, { class: "hidden lg:block w-3 filter-white" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex" data-v-cebcba16>`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_IconPrinter, { class: "hidden lg:block w-3 filter-white" }, null, _parent));
  _push(`<p class="lg:pl-2 text-xs lg:text-base" data-v-cebcba16>+49 (0) 2972 962229</p></li><li class="flex" data-v-cebcba16>`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_BasicButton, {
    class: "lg:pr-2 text-xs",
    tag: "a",
    label: "info@bsdienstleistungen.eu",
    "label-hover": "Jetzt eine Nachricht schreiben",
    href: "mailto:info@bsdienstleistungen.eu"
  }, {
    before: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_IconEmail, { class: "hidden lg:block w-3 filter-white" }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_8__.createVNode(_component_IconEmail, { class: "hidden lg:block w-3 filter-white" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="w-1/2 pl-4 self-baseline leading-relaxed" data-v-cebcba16><div class="bg-bs-red w-16 h-1 lg:h-2" data-v-cebcba16></div><h4 class="uppercase text-base lg:text-2xl" data-v-cebcba16>Dienstleistungen</h4><ul class="flex flex-col text-md font-normal capitalize space-y-2 mb-16" data-v-cebcba16><!--[-->`);
  __vite_ssr_import_9__.ssrRenderList($setup.idf, (item) => {
    _push(`<li data-v-cebcba16><a${__vite_ssr_import_9__.ssrRenderAttr("href", `/#${item.id}`)} class="hover:text-bs-red" data-v-cebcba16>${__vite_ssr_import_9__.ssrInterpolate(item.label)}</a></li>`);
  });
  _push(`<!--]--></ul><ul class="flex text-sm capitalize space-x-8 justify-center md:justify-end" data-v-cebcba16><!--[-->`);
  __vite_ssr_import_9__.ssrRenderList($setup.legal, (item) => {
    _push(`<li data-v-cebcba16>`);
    _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NuxtLink, {
      class: "hover:text-bs-red",
      to: item.route
    }, {
      default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${__vite_ssr_import_9__.ssrInterpolate(item.label)}`);
        } else {
          return [
            __vite_ssr_import_8__.createTextVNode(__vite_ssr_import_8__.toDisplayString(item.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div></footer>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/components/Layout/Footer.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cebcba16"], ["__file", "C:/Users/cichy/Downloads/BS-main/BS-main/components/Layout/Footer.vue"]]);
;
}


// --------------------
// Request: /components/Layout/Footer.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/Layout/Footer.vue ($id_9cc62014)
// Dependencies: 

// --------------------
const $id_852de351 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "#kontakt[data-v-cebcba16]{display:none}";
}


const __modules__ = {
  "C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry": $id_c69c8440,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/paths.mjs": $id_e6ed7614,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/css.mjs": $id_2613bdd1,
  "/assets/css/tailwind.css": $id_f75548e1,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/plugins/server.mjs": $id_8264f4b7,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/components.plugin.mjs": $id_87e582ea,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/meta.config.mjs": $id_a35078d9,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/routes.mjs": $id_b9dc4107,
  "/pages/datenschutz.vue?macro=true": $id_be45ed04,
  "/components/Basic/SeoHead.vue": $id_16853963,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/impressum.vue?macro=true": $id_c18e24f4,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/components/Section/Image-content.vue": $id_7b66d7af,
  "/components/Icon/pkw.vue": $id_e859319d,
  "/components/Icon/lkw.vue": $id_a9004d1b,
  "/components/Icon/motorsport.vue": $id_4e34aab3,
  "/components/Section/Contact.vue": $id_5e25048f,
  "/components/Icon/Ort.vue": $id_ec23dc9c,
  "/components/Icon/Oeffnungszeiten.vue": $id_d1b33b5c,
  "/components/Icon/Telefon.vue": $id_111afe07,
  "/components/Icon/Email.vue": $id_eedab458,
  "/components/Icon/Printer.vue": $id_33e59396,
  "/components/Basic/Button.vue": $id_065e283f,
  "/pages/datenschutz.vue": $id_e4ecc621,
  "/pages/impressum.vue": $id_27e097fe,
  "/pages/index.vue": $id_cca58e97,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/router.options.mjs": $id_1014da17,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/middleware.mjs": $id_a0df7e7f,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/root-component.mjs": $id_d400ee83,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/error-component.mjs": $id_70e4118e,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/imports.mjs": $id_9019377a,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/app-component.mjs": $id_d02ac52c,
  "/app.vue": $id_2b46e842,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_39003883,
  "/@id/virtual:nuxt:C:/Users/cichy/Downloads/BS-main/BS-main/.nuxt/layouts.mjs": $id_2ff6a94d,
  "/layouts/default.vue": $id_7689e89d,
  "/components/Layout/Navigation.vue": $id_65319fa0,
  "/components/Icon/LogoBS.vue": $id_b984290f,
  "/components/Icon/LogoBS.vue?vue&type=style&index=0&lang.css": $id_dfabf431,
  "/config/menu.ts": $id_0e838efc,
  "/components/Layout/Header.vue": $id_ad589f88,
  "/components/Layout/Footer.vue": $id_9cc62014,
  "/components/Layout/Footer.vue?vue&type=style&index=0&scoped=true&lang.css": $id_852de351
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("C:/Users/cichy/Downloads/BS-main/BS-main/node_modules/nuxt/dist/app/entry")