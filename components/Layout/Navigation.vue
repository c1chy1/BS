<template>

<nav class="w-full  hidden fixed lg:flex justify-around items-center bg-bs-white">
    <NuxtLink to="/">
      <IconLogoBS class=" lg:h-6 my-4"
                  @click="scrollTop()"
      />
    </NuxtLink>

    <ul class="w-1/2  flex justify-evenly text-sm lg:text-md xl:text-base font-bold uppercase  md:space-x-3  md:py-2 lg:py-3 xl:py-5 lg:space-x-4 xl:space-x-6 ">
      <li :key="item.label" v-for="item of ids">
<!--        <NuxtLink  :href="item.id"  class="block cursor-pointer ">{{ item.label }}</NuxtLink>-->
        <a :href="`#${item.id}`" class="hover:text-bs-red" >{{ item.id }}</a>
      </li>
    </ul>
</nav>
</template>
<script setup lang="ts">

import { ids } from '~~/config/menu.ts'


const scrollTop = () => {
  window.scrollTo(0, 0)
}


</script>
