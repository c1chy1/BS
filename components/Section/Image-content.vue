<template>
  <div :id="props.id" :class="props.direction === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'" class="flex flex-col w-full lg:min-h-screen">
    <div :style="`background-image: url(${props.imageLink});`" class="md:w-1/2 w-full bg-cover aspect-square"></div>
    <div class="md:w-1/2 p-4 lg:my-12 flex flex-col space-y-2 justify-start md:justify-center">
      <div class="lg:w-[31rem] py-12 md:p-6 mx-auto">
        <div>
          <div :style="`background-color: ${props.titleBarColor}`" class="w-16 h-1 lg:h-2"></div>
          <h2 class="leading-none text-xl md:text-2xl xl:text-5xl">{{ props.title }}</h2>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  title: string;
  direction: 'left' | 'right';
  titleBarColor: string;
  imageLink: string;
}

const props = defineProps<Props>();
</script>
