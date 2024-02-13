<template>
  <div v-if="activePopup"
    class="fixed top-0 left-0 flex items-start justify-center w-full h-full overflow-y-auto z-[1] bg-tw-background-overlay">
    <div
      class="rounded-lg w-auto md:w-full bg-tw-background-list md:max-w-[768px] my-9 mx-2 md:mt-12 md:mb-[80px] md:mx-0 relative">
      <div class="pop-over left-[94.4531px] top-[60px]" :class="{ 'is-shown': activeMoveCard }">
        <MoveCard :activeMoveCard="activeMoveCard" @closeMoveCard="isInactiveMoveCard" />
      </div>

      <!-- Title Area -->
      <div class="relative py-2 pr-12 pl-14">
        <div class="relative">
          <span class="absolute left-[-34px] top-[4px]">
            <i class="fa-solid fa-table"></i>
          </span>
          <h2 v-if="!activeTitleEditing" @click="isActiveTitleEditing" class="text-xl font-semibold">
            {{ title }}
          </h2>
          <textarea v-else v-model="title" @keydown.esc="isActiveTitleEditing"
            class="text-xl font-semibold input-textarea-style input-textarea-active textarea-resize-none" />
        </div>
        <div>
          <p>
            in list
            <a href="#" class="underline" @click="isActiveMoveCard">{{
              moveCard
            }}</a>
          </p>
        </div>
      </div>

      <!-- Main, SideBar Area -->
      <div class="flex flex-col md:flex-row">
        <MainInPopup />
        <SideBarInPopup />
      </div>
      <button class="absolute top-0 right-0 mx-2 p-2.5" @click="closePopup">
        <i class="text-2xl fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import MainInPopup from "@components/MainInPopup.vue";
import SideBarInPopup from "@components/SideBarInPopup.vue";
import MoveCard from "@components/MoveCard.vue";

let props = defineProps({
  activePopup: {
    type: Boolean,
  },
});
let activeTitleEditing = ref(false);
let activeMoveCard = ref(false);
let title = ref("TITLE");
let moveCard = ref("To do");
let emit = defineEmits(["closePopup"]);

const closePopup = () => {
  emit("closePopup");
};
const isActiveTitleEditing = () => {
  activeTitleEditing.value = !activeTitleEditing.value;
};
const isActiveMoveCard = () => {
  activeMoveCard.value = true;
};
const isInactiveMoveCard = () => {
  activeMoveCard.value = false;
};
</script>
