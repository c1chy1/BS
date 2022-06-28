<template>
  <div class="top-0 left-0 w-full bg-white z-100">
    <nav class="flex items-center justify-between px-6 py-4">
      <!-- logo -->
      <NuxtLink to="/" class="h-6 flex justify-start">
        <IconLogoBS class="h-6" />
      </NuxtLink>

      <!-- Nav Link -->
      <div class="hidden lg:flex items-center">
        <ul
          class="w-3/4 2xl:w-1/2 flex justify-start text-sm lg:text-base font-bold uppercase md:space-x-3 py-2 lg:space-x-4 xl:space-x-6"
        >
          <li :key="item.label" v-for="item of ids">
            <a :href="`/#${item.id}`" class="hover:text-bs-red">{{
              item.id
            }}</a>
          </li>
        </ul>
      </div>

      <!-- Hamburger menu -->
      <button
        @click="menu = !menu"
        type="button"
        aria-label="Menu button"
        class="hamburger fixed z-10 bg-bs-white pt-2 right-6 top-2 lg:hidden"
      >
        <svg
          class="xl:w-auto w-11"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g transform="translate(-0.03 2)">
            <line
              x2="30"
              transform="translate(0.03)"
              fill="none"
              stroke="#000"
              stroke-width="3"
            />
            <line
              x2="30"
              transform="translate(0.03 8)"
              fill="none"
              stroke="#000"
              stroke-width="3"
            />
            <line
              x2="30"
              transform="translate(0.03 16)"
              fill="none"
              stroke="#000"
              stroke-width="3"
            />
          </g>
        </svg>
      </button>
    </nav>

    <!-- mobile Nav -->
    <nav
      id="menu-mobile"
      :class="menu ? '' : '-translate-x-full'"
      class="fixed w-full h-screen lg:hidden bg-bs-white top-0 left-0 z-1000 p-8 pt-4 z-50 transition-transform duration-75 ease-in-out"
    >
      <div class="flex justify-end">
        <button
          @click="menu = !menu"
          type="button"
          aria-label="Menu close"
          class="hamburger"
        >
          <span>
            <svg
              class="xl:p-0 p-1"
              xmlns="http://www.w3.org/2000/svg"
              width="36.376"
              height="36.376"
              viewBox="0 0 47.376 47.376"
            >
              <g transform="translate(-7.875 15.688)">
                <line
                  x2="63"
                  transform="translate(9.289 -14.274) rotate(45)"
                  fill="none"
                  stroke="#000"
                  stroke-width="4"
                />
                <line
                  x2="63"
                  transform="translate(9.289 30.274) rotate(-45)"
                  fill="none"
                  stroke="#000"
                  stroke-width="4"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>

      <div class="flex flex-col py-12">
        <ul
          class="w-3/4 mx-auto flex flex-col text-center justify-evenly text-base lg:text-lg font-bold uppercase space-y-8"
        >
          <li :key="item.label" v-for="item of idf">
            <a
              @click="menu = false"
              :href="`/#${item.id}`"
              class="hover:text-bs-red"
              >{{ item.id }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ids, idf } from "~~/config/menu";
const menu = ref(false);
</script>
