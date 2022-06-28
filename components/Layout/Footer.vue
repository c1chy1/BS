<template>
  <footer class="flex flex-col lg:flex-row items-start bg-bs-black text-bs-white py-10">
    <div class="relative max-w-xl w-full lg:w-1/2 lg:max-w-5xl p-4 lg:p-8 lg:my-8 bg-black bg-opacity-70 rounded-r-3xl">
      <div class="bg-bs-red w-16 h-1 lg:h-2"></div>
      <h4 class="font-bold text-left text-3xl lg:text-5xl leading-none line">
        <i> <span class="text-bs-red mr-4">BS</span>{{ props.title }}</i>
      </h4>
      <p class="text-xs md:text-sm xl:text-xl text-white sm:w-2/3 lg:w-4/5 leading-4 md:leading-6 xl:leading-8">
        Tankstelle • Reifendienst • Dienstleistungen im Bereich HDD<br />
        Spülbohrverfahren • Frachtenvermittlung / Spedition • Baustoffhandel
      </p>
    </div>
    <div class="w-full lg:w-1/2 h-full flex text-xs lg:text-sm lg:my-8 p-4 lg:p-8">
      <div class="w-1/2 self-baseline leading-relaxed">
        <div class="bg-bs-red w-16 h-1 lg:h-2"></div>
        <h4 class="uppercase text-base lg:text-2xl">Kontakt</h4>
        <ul class="space-y-2 text-xs lg:text-sm">
          <li class="flex text-bs-white">
            <IconOrt class="hidden lg:block w-4 filter-white self-start" />
            <p class="lg:pl-2">
              BS Dienstleistungen - Bianca&nbsp;Schäfers <br />
              Schulstraße 2 <br />
              57392 Schmallenberg-Felbecke
            </p>
          </li>

          <li class="flex">
            <BasicButton class="lg:pr-2 text-xs" tag="a" label="+49 (0) 2972 - 9622800" label-hover="Jetzt anrufen" href="tel:+49029729622800">
              <template #before><IconTelefon class="hidden lg:block w-3 filter-white" /></template>
            </BasicButton>
          </li>

          <li class="flex">
            <IconPrinter class="hidden lg:block w-3 filter-white" />
            <p class="lg:pl-2 text-xs lg:text-base">+49 (0) 2972 962229</p>
          </li>

          <li class="flex">
            <BasicButton class="lg:pr-2 text-xs" tag="a" label="info@bsdienstleistungen.eu" label-hover="Jetzt eine Nachricht schreiben" href="mailto:info@bsdienstleistungen.eu">
              <template #before>
                <IconEmail class="hidden lg:block w-3 filter-white" />
              </template>
            </BasicButton>
          </li>
        </ul>
      </div>
      <div class="w-1/2 pl-4 self-baseline leading-relaxed">
        <div class="bg-bs-red w-16 h-1 lg:h-2"></div>
        <h4 class="uppercase text-base lg:text-2xl">Dienstleistungen</h4>
        <ul class="flex flex-col text-md font-normal capitalize space-y-2 mb-16">
          <li :key="item.label" v-for="item of idf">
            <a :href="`/#${item.id}`" class="hover:text-bs-red">{{ item.label }}</a>
          </li>
        </ul>

        <ul class="flex text-sm capitalize space-x-8 justify-center md:justify-end">
          <li :key="item.label" v-for="item of legal">
            <NuxtLink class="hover:text-bs-red" :to="item.route">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { legal, idf } from '~~/config/menu';

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
#kontakt {
  display: none;
}
</style>
