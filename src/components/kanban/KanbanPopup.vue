<template>
  <div v-if="store.state.isActiveCardPopup"
    class="fixed top-0 left-0 flex items-start justify-center w-full h-full overflow-y-auto z-[1] bg-tw-background-overlay">
    <div
      class="rounded-lg w-auto md:w-full bg-tw-background-list md:max-w-[768px] my-9 mx-2 md:mt-12 md:mb-[80px] md:mx-0 relative">
      <div class="pop-over left-[94.4531px] top-[60px]" :class="{ 'is-shown': activeMoveCard }">
        <MoveCard :activeMoveCard="activeMoveCard" @closeMoveCard="isInactiveMoveCard" />
      </div>

      <!-- Title Area -->
      <header class="relative py-2 pr-12 pl-14">
        <div class="relative">
          <span class="absolute left-[-34px] top-[4px]">
            <i class="fa-solid fa-table"></i>
          </span>
          <h2 v-if="!activeTitleEditing" @click="isActiveTitleEditing" class="text-xl font-semibold">
            {{ store.state.kanbanLists.lists[store.state.listId].cards[store.state.cardId].cardTitle }}
          </h2>
          <textarea v-else v-model="store.state.kanbanLists.lists[store.state.listId].cards[store.state.cardId].cardTitle"
            @keydown.esc="isActiveTitleEditing"
            class="text-xl font-semibold input-textarea-style input-textarea-active textarea-resize-none" />
        </div>
        <div>
          <p>
            in list
            <a href="#" class="underline" @click="isActiveMoveCard">{{
              store.state.kanbanLists.lists[store.state.listId].title
            }}</a>
          </p>
        </div>
      </header>

      <!-- Main, SideBar Area -->
      <div class="flex flex-col md:flex-row">
        <MainInPopup />
        <SideBarInPopup />
      </div>
      <button class="absolute top-0 right-0 mx-2 p-2.5" @click="openCardPopupMethod(-1)">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import MainInPopup from '@components/kanban/MainInPopup.vue'
import SideBarInPopup from '@components/kanban/SideBarInPopup.vue'
import MoveCard from "@components/kanban/MoveCard.vue";
import { useStore } from 'vuex'
import { ref } from 'vue'

const store = useStore()

let activeTitleEditing = ref(false);
let activeMoveCard = ref(false);

const isActiveTitleEditing = () => {
  activeTitleEditing.value = !activeTitleEditing.value;
};
const openCardPopupMethod = (cardId) => {
  console.log('hello')
  store.commit('openCardPopup', { popupListId: -1, cardId })
}


const isActiveMoveCard = () => {
  activeMoveCard.value = true;
};
const isInactiveMoveCard = () => {
  activeMoveCard.value = false;
};

</script>

<style lang="scss" scoped></style>