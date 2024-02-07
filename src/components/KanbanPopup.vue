<template>
  <div v-if="activePopup" class="fixed flex items-start justify-center w-full h-screen bg-tw-background-overlay">
    <div class="rounded-lg w-full bg-tw-background-list md:max-w-[768px] my-12 mx-2 relative">
      <div class="py-2 pr-12 pl-14">
        <div>
          <h2 v-if="!activeTitleEditing" @click="isActiveTitleEditing" class="text-xl font-semibold">{{ title }}</h2>
          <textarea v-else @keydown.esc="isActiveTitleEditing"
            class="text-xl font-semibold input-textarea-style input-textarea-active textarea-resize-none">{{ title }}</textarea>
        </div>
        <div>
          <p>in list
            <a href="#" class="underline">{{ moveCard }}</a>
          </p>
        </div>

      </div>
      <div class="flex flex-col md:flex-row">
        <MainInPopup />
        <SideBarInPopup />
      </div>
      <button class="absolute top-0 right-0 mx-2 p-2.5" @click="isActivePopup">
        <i class="text-2xl fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainInPopup from '@components/MainInPopup.vue'
import SideBarInPopup from '@components/SideBarInPopup.vue'

let activePopup = ref(true)
let activeTitleEditing = ref(false);
let title = ref('TITLE')
let moveCard = ref('To do')

const isActivePopup = () => {
  activePopup.value = false
}
const isActiveTitleEditing = () => {
  activeTitleEditing.value = !activeTitleEditing.value
}




</script>