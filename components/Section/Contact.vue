<template>
  <section id="kontakt" class="flex flex-col-reverse lg:flex-row">
    <div class="lg:w-1/2 flex items-center pt-4 xl:pt-8 ">
      <div class=" max-w-xl mx-auto px-4  lg:px-3">

        <div class="pb-16 flex flex-col text-sm">
          <div class="bg-bs-red w-16 h-1 lg:h-2 "></div>
          <h3 class="uppercase">Kontakt</h3>
          <div class=" flex text-xs lg:text-lg ">
            <ul class="w-full lg:grid grid-cols-2 gap-x-16">
              <SectionList

                  :columns="[
        {
          svgWidth:'w-4 lg:w-12 ',
          tag:'p',
          icon: IconOrt,
          text: 'BS Dienstleistungen - Bianca Schäfers \n'+
'                  Schulstraße 2 \n'+
'                  57392 Schmallenberg-Felbecke',
        },


             {
          svgWidth:'w-4 lg:w-6',
          tag:'p',
          icon: IconOeffnungszeiten,
          text: ' Mo.-Fr.: 08.00 Uhr - 18.00 Uhr\n'+
'                  Sa.: 08.00 Uhr - 12.00 Uhr',
        },
        {
          svgWidth:'w-4',
          tag:'a',
          href: 'tel:4929729622800',
          icon: IconTelefon,
          text: '+49 (0) 2972 - 9622800',
        },
        {
          svgWidth:'w-4',
          tag:'a',
          href: 'mailto:info@bsdienstleistungen.eu',
          icon: IconEmail,
          text:'info@bsdienstleistungen.eu',
        },
        {
          svgWidth:'w-4',
          tag:'p',
          icon: IconPrinter,
          text: '+49 (0) 2972 - 962229',
        },]
"/>
            </ul>
          </div>
        </div>

        <div>
          <div class="bg-bs-blue w-16 h-1 lg:h-2  "></div>
          <h3 class="uppercase ">Schreiben sie uns eine nachricht</h3>
          <form v-if="formState === 'ready'" class="mt-8" @submit.prevent="sendForm">
            <div class=" xl:w-full mx-auto mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 ">

              <div class="flex flex-col">
                <label

                    class="block text-sm font-medium text-gray-700 pb-1"
                    for="name">Name</label>
                <input
                    class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:border-b-0 focus:ring-bs-red border-bs-black  block w-full shadow-sm sm:text-lg border-b"
                    id="name" v-model="formData.name" type="text">
              </div>
              <div class="flex flex-col">
                <label class="block text-sm font-medium text-gray-700 pb-1" for="email">E-mail *</label>
                <input
                    class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0  border-bs-black  block w-full shadow-sm sm:text-lg border-b"
                    id="email" v-model="formData.email" required type="email">
              </div>
              <div class="flex flex-col">
                <label class="block text-sm font-medium text-gray-700 pb-1" for="phone">Telefon</label>
                <input
                    class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red  focus:border-b-0  border-bs-black  block w-full shadow-sm sm:text-lg border-b"
                    id="phone" v-model="formData.phone" type="tel">
              </div>
              <div class="flex flex-col">
                <label class="block text-sm font-medium text-gray-700 pb-1" for="subject">Betreff</label>
                <input
                    class="pl-2 focus:outline-none focus:ring-1 focus:border-transparent focus:ring-bs-red focus:border-b-0  border-bs-black  block w-full shadow-sm sm:text-lg border-b"
                    id="subject" v-model="formData.subject" type="text">
              </div>
            </div>
            <div class=" flex flex-col mx-auto">
              <label class="block text-sm font-medium text-gray-700 pb-1" for="message">Nachricht</label>
              <textarea
                  class="pl-2 focus:outline-none focus:ring-1 focus:ring-bs-red focus:border-transparent focus:border-b-0  block w-full shadow-sm sm:text-lg border-bs-black border-b"
                  v-model="formData.message"
                  id="message"></textarea>
            </div>

            <BasicButton
                class="text-bs-white w-full justify-center m-auto my-8 lg:my-6  py-2 px-4 border border-transparent shadow-sm text-white  bg-bs-red hover:bg-bs-red transition-all  uppercase"
                color="Blue"
                label="Submit"
                label-hover="Thanks"
                tag="button">Submit
            </BasicButton>

          </form>
          <div v-else-if="formState === 'loading'">
            <svg
                role="status"
                class="mx-auto block w-8 h-8 text-msg-gray animate-spin fill-msg-blue"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
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


    <div class="lg:w-1/2">
      <img class="w-full" src="/assets/images/google.png" alt="google">
    </div>

  </section>
</template>


<script setup lang="ts">

import {IconEmail} from "#components";
import {IconOeffnungszeiten} from "#components";
import {IconOrt} from "#components";
import {IconPrinter} from "#components";
import {IconTelefon} from "#components";


import {Ref} from 'vue'
type FormState = 'ready' | 'loading' | 'succeeded' | 'failed'


const selectedFiles: Ref<File[]> = ref([])
const formState: Ref<FormState> = ref('ready')
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject:'',
  message: '',
})

const handleFile = (event: any) => {
  let files = [...event.target.files]

  files = files.filter((file) => !selectedFiles.value.filter((existingFile) => existingFile.name === file.name).length)

  selectedFiles.value = [...selectedFiles.value, ...files]

  console.log(selectedFiles)
}

const deleteFile = (name: string) => {
  selectedFiles.value = selectedFiles.value.filter((file) => file.name !== name)
}

const sendForm = async () => {
  formState.value = 'loading'
  const data = new FormData()
  for (const file of selectedFiles.value) {
    data.append(file.name, file, file.name)
  }
  data.append('email', formData.email)
  data.append('Telefon', formData.phone)
  data.append('Name', formData.name)
  data.append('subject', formData.subject)
  data.append('message', formData.message)
  data.forEach((v) => {
    console.log(v.toString())
  })

  try {
    const res = await $fetch('https://formspree.io/f/????????', {
      body: data,
      method: 'POST',
      redirect: 'manual',
      headers: {
        // "Content-Type": "multipart/form-data",
        Accept: 'multipart/form-data',
      },
    })
    console.log('res', res)
    if (res) {
      formState.value = 'succeeded'
    } else {
      formState.value = 'failed'
    }
  } catch (error) {
    formState.value = 'succeeded'
    // TODO: implement froms.vrnhlb.dev service ( not ready yet )
    // console.log("error", error);
    // formState.value = "failed";
  }
}


</script>


