<template>
  <div class="shadow-raised card-button-style card-button-active transition-ease" @mouseover="isActiveEdit = true"
    @mouseleave="isActiveEdit = false">
    <div class="px-3 pt-2 pb-2">
      <button class="mb-1" @click="">{{ props.card.title }}</button>
      <button :class="{ 'is-active-edit': isActiveEdit }"></button>
    </div>
  </div>

  <!-- Popup components -->
</template>

<script setup>
import { ref, defineProps } from 'vue'
// import activeEdit from '../assets/tailwind.css'

let props = defineProps({
  card: {
    type: Object
  }
})
let isActiveEdit = ref(false)

// TODO: Card Popup창 보여주기
const openCardPopup = () => {

}
</script>