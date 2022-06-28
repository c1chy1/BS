<template>
  <header class="flex items-end bg-cover text-bs-white"
          :style="`background-image: url(${props.imageLink});`"
          style="height:calc(100vh - 3rem)">
    <div class=" max-w-xl lg:max-w-7xl p-8 lg:mt-32  bg-bs-black bg-opacity-70">
      <div class=" bg-red w-12 lg:w-24 h-1 lg:h-2 my-4 "></div>
      <div class="bg-bs-red w-16 h-1 lg:h-2 "></div>
      <h1 class="py-3 font-bold text-left  leading-none line "><i> <span
          class="text-bs-red mr-4">BS</span>{{ props.title }}</i></h1>
      <p class="text-xs md:text-sm xl:text-xl text-white sm:w-2/3  lg:w-1/2 xl:w-3/5 leading-4 md:leading-6 xl:leading-8">
        Tankstelle • Reifendienst • Dienstleistungen im Bereich HDD
        Spülbohrverfahren • Frachtenvermittlung / Spedition • Baustoffhandel</p>
    </div>
  </header>
</template>

<script setup lang="ts">

interface Props {
  title: string;
  imageLink: string
}

const props = defineProps<Props>()

</script>
