<template>
  <div class="mb-2 leading-5 shadow-raised card-button-style card-button-active" @mouseover="activeEdit = true"
    @mouseleave="activeEdit = false">
    <div class="relative flex px-3 pt-2 pb-1">
      <button v-if="!activeInput" @click="openCardPopupMethod(props.card.id)" class="inline-block w-full mb-1 text-left">
        {{ props.card.cardTitle }}
      </button>
      <button v-if="!activeInput" @click="isActiveInput" :class="{ block: activeEdit, hidden: !activeEdit }"
        class="absolute z-10 p-1 mb-1 top-1 right-1 transition-ease add-card-button-style add-card-button-active">
        <i class="fa-solid fa-pencil icon"></i>
      </button>
      <input v-else v-model="props.card.cardTitle" @keydown.esc="isActiveInput" @keydown.enter="isActiveInput" type="text"
        class="mb-1" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useStore } from 'vuex'

let props = defineProps({
  card: {
    type: Object,
  },
  listId: {
    type: Number,
  }
});
const store = useStore()
let activeEdit = ref(false);
let activeInput = ref(false);

const openCardPopupMethod = (cardId) => {
  console.log('kanbanCards')
  store.commit('openCardPopup', { listId: props.listId, cardId })
}

const isActiveInput = () => {
  if (props.card.cardTitle.trim() !== "") {
    activeInput.value = !activeInput.value;
  }
};

</script>

<style lang="scss" scoped></style>