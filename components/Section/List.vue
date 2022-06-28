<template>
  <li class="flex" v-for="column in props.columns" :key="column.text">
    <component :class="column.svgWidth" :is="column.icon"></component>
    <component :is="column.tag" :href="column.href" class="ml-2 py-1 lg:py-0 self-center">
      {{ column.text }}
    </component>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  columns: {
    href: string;
    tag: any;
    icon: object;
    svgWidth: string;
    text: string;
  }[];
}>();
</script>
