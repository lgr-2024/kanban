<template>
  <div>
    <div class="mb-2 leading-5 shadow-raised card-button-style card-button-active" @mouseover="activeEdit = true"
      @mouseleave="activeEdit = false">
      <div class="relative flex px-3 pt-2 pb-1">
        <button v-if="!activeInput" class="inline-block w-full mb-1 text-left" @click="openPopup">
          {{ props.card.cardTitle }}
        </button>
        <button v-if="!activeInput" @click="isActiveInput" :class="{ block: activeEdit, hidden: !activeEdit }"
          class="absolute z-10 p-1 mb-1 top-1 right-1 transition-ease add-card-button-style add-card-button-active">
          <i class="fa-solid fa-pencil icon"></i>
        </button>

        <input v-else v-model="props.card.title" @keydown.esc="isActiveInput" @keydown.enter="isActiveInput" type="text"
          class="mb-1" />
      </div>
    </div>
  </div>

  <KanbanPopup :activePopup="activePopup" @closePopup="closePopup" />
</template>

<script setup>
import KanbanPopup from "@components/KanbanPopup.vue";
import { ref, defineProps, defineEmits } from "vue";

let props = defineProps({
  card: {
    type: Object,
  },
});
let activeEdit = ref(false);
let activeInput = ref(false);
let activePopup = ref(false);

const isActiveInput = () => {
  if (props.card.title.trim() !== "") {
    activeInput.value = !activeInput.value;
  }
};

// TODO: Card Popup창 보여주기
const openPopup = () => {
  activePopup.value = true;
};
const closePopup = () => {
  activePopup.value = false;
};
</script>
