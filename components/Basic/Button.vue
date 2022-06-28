<template>
  <component :is="href ? 'a' : 'button'" class="inline-flex justify-center items-center text-sm lg:text-base text-center transition group" :class="buttonClasses">
    <slot name="before"></slot>
    <div>
      <span v-if="!props.labelHover">{{ props.label }}</span>
      <span class="relative" v-else>
        <span class="group-hover:-translate-y-2/3 inline-block group-hover:opacity-0 transition-all lg:px-2">{{ props.label }}</span>
        <span class="translate-y-2/3 group-hover:-translate-y-0 absolute left-0 opacity-0 group-hover:opacity-100 transition-all px-2">{{ props.labelHover }}</span>
      </span>
    </div>
    <slot name="after"></slot>
  </component>
</template>

<script setup lang="ts">
import { withDefaults, computed } from 'vue';

const props = withDefaults(
  defineProps<{
    href?: string;
    label: string;
    labelHover?: string;
    color?: 'Black' | 'Red' | 'Blue' | 'Turquoise';
    outline?: boolean;
  }>(),
  {
    color: 'Black',
    outline: false,
  }
);

const buttonClasses = computed(() => {
  if (props.outline) {
    switch (props.color) {
      case 'Black':
        return 'bg-bs-black text-bs-white border';

      case 'Red':
        return 'bg-bs-red text-bs-white  border';

      case 'Blue':
        return 'bg-bs-blue text-bs-white  border';

      case 'Turquoise':
        return 'bg-bs-turquoise text-bs-white  border ';

      default:
        return '';
    }
  } else {
    switch (props.color) {
      case 'Red':
        return 'bg-bs-red ';

      case 'Black':
        return 'bg-bs-black ';

      case 'Blue':
        return 'bg-bs-blue ';

      case 'Turquoise':
        return 'bg-msg-white-shade text-bg-turquoise shadow-md hover:shadow-lg shadow-neutral-200';

      default:
        return '';
    }
  }
});
</script>
