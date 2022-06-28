<template>
  <section id="kontakt" class="flex flex-col-reverse lg:flex-row">
    <div class="lg:w-1/2 flex items-center pt-4 xl:pt-8">
      <div class="max-w-xl mx-auto px-4 py-12 md:px-4 lg:px-3">
        <div class="pb-16 flex flex-col text-sm">
          <div class="bg-bs-red w-16 h-1 lg:h-2"></div>
          <h3 class="uppercase leading-none text-xl md:text-2xl xl:text-5xl">Kontakt</h3>
          <div class="flex text-xs lg:text-lg">
            <ul class="w-full xl:grid grid-cols-2 gap-x-16">
              <li class="flex w-full">
                <IconOrt class="w-[16px] lg:!min-w-[16px] lg:w-[20px] self-start"></IconOrt>
                <p class="ml-2 pb-2 text-sm lg:text-lg">BS Dienstleistungen - Bianca&nbsp;Schäfers<br />Schulstraße 2 | 57392 Schmallenberg-Felbecke</p>
              </li>
              <li class="flex">
                <IconOeffnungszeiten class="w-3 lg:w-4 self-start"></IconOeffnungszeiten>
                <p class="ml-2 pb-2 text-sm lg:text-lg">Mo.-Fr.: 08.00 Uhr - 18.00 Uhr<br />Sa.: 08.00 Uhr - 12.00 Uhr</p>
              </li>
              <li class="flex">
                <IconTelefon class="w-3 lg:w-4 self-start"></IconTelefon>
                <p class="ml-2 pb-2 text-sm lg:text-lg"><a href="tel:4929729622800">+49 (0) 2972 - 9622800</a></p>
              </li>
              <li class="flex">
                <IconEmail class="w-3 lg:w-4 self-start"></IconEmail>
                <p class="ml-2 pb-2 text-sm lg:text-lg"><a href="mailto:info@bsdienstleistungen.eu">info@bsdienstleistungen.eu</a></p>
              </li>
              <li class="flex">
                <IconPrinter class="w-3 lg:w-4 self-start"></IconPrinter>
                <p class="ml-2 pb-2 text-sm lg:text-lg">+49 (0) 2972 - 962229</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-16">
          <div class="bg-bs-blue w-16 h-1 lg:h-2"></div>
          <h3 class="uppercase leading-none text-xl md:text-2xl xl:text-5xl">Schreiben sie uns eine Nachricht</h3>
          <form v-if="formState === 'ready'" class="mt-8" @submit.prevent="sendForm">
            <div class="xl:w-full mx-auto mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div class="flex flex-col py-3 px-1">
                <input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:border-b-0 focus:ring-bs-red border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="name" v-model="formData.name" placeholder="Name" required type="text" />
              </div>
              <div class="flex flex-col py-3 px-1">
                <input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="email" v-model="formData.email" placeholder="eMail" required type="email" />
              </div>
              <div class="flex flex-col py-3 px-1">
                <input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="phone" v-model="formData.phone" placeholder="Telefon" type="tel" />
              </div>
              <div class="flex flex-col py-3 px-1">
                <input class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0 border-bs-black block w-full shadow-sm text-sm lg:text-lg border-b" id="subject" v-model="formData.subject" placeholder="Betreff" type="text" />
              </div>
            </div>
            <div class="flex flex-col mx-auto py-6 px-1">
              <textarea class="pl-2 focus:outline-none focus:ring-1 focus:ring-bs-red focus:border-transparent focus:border-b-0 block w-full shadow-sm text-sm lg:text-lg border-bs-black border-b" v-model="formData.message" placeholder="Nachricht" required id="message" rows="5"></textarea>
            </div>

            <div class="py-2 px-1">
              <input v-model="checked" id="data-protection-form" class="w-3 h-3 border-2 border-black bg-transparent focus:outline-none focus:ring-0" type="checkbox" />
              <label for="data-protection-form" class="text-sm pl-2"
                >Ja, ich habe die <NuxtLink :to="'/datenschutz'" class="underline">Datenschutzerklärung</NuxtLink> zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.</label
              >
            </div>

            <BasicButton
              v-text="disabled ? 'Bitte ausfüllen' : 'Nachricht senden'"
              :disabled="disabled"
              class="text-bs-white disabled:cursor-not-allowed w-full justify-center m-auto my-8 lg:my-6 py-2 px-4 border border-transparent text-sm lg:text-lg shadow-sm text-white bg-bs-red hover:bg-bs-red transition-all uppercase"
              :color="disabled ? 'Red' : 'Blue'"
              label="Nachricht senden"
              tag="button"
            >
            </BasicButton>
          </form>
          <div v-else-if="formState === 'loading'">
            <svg role="status" class="mx-auto block w-8 h-8 text-msg-gray animate-spin fill-msg-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
          <div v-else-if="formState === 'succeeded'">
            <p class="mt-4">Die Nachricht wurde erfolgreich versandt!</p>
          </div>
          <div v-else>
            <p class="mt-4">Die Nachricht konnte nicht gesendet werden.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:w-1/2 aspect-square">
      <iframe
        class="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.9400200570767!2d8.225812116088818!3d51.16489517958037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbf145c9f42d7b%3A0x647827d47eff595e!2sBS%20Dienstleistungen%20-%20Bianca%20Sch%C3%A4fers!5e0!3m2!1sde!2sde!4v1654812017432!5m2!1sde!2sde"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Ref, ref, reactive, computed } from 'vue';
type FormState = 'ready' | 'loading' | 'succeeded' | 'failed';

const selectedFiles: Ref<File[]> = ref([]);
const formState: Ref<FormState> = ref('ready');
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});
const checked = ref(false);

const disabled = computed(() => !(formData.name && formData.email && formData.phone && formData.subject && formData.message && checked.value));

const sendForm = async () => {
  formState.value = 'loading';
  const data = new FormData();
  data.append('email', formData.email);
  data.append('Telefon', formData.phone);
  data.append('Name', formData.name);
  data.append('subject', formData.subject);
  data.append('message', formData.message);
  try {
    const res = await $fetch('https://formspree.io/f/xknyekkb', {
      body: data,
      method: 'POST',
      redirect: 'manual',
      headers: {
        // "Content-Type": "multipart/form-data",
        Accept: 'multipart/form-data',
      },
    });
    console.log('res', res);
    if (res) {
      formState.value = 'succeeded';
    } else {
      formState.value = 'failed';
    }
  } catch (error) {
    formState.value = 'succeeded';
  }
};
</script>
