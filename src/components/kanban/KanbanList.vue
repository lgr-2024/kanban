<template>
  <div class="shadow-raised list-total-style list-width">
    <header class="list-header-style">
      <div class="flex">
        <div class="flex items-center grow">
          <h2 v-if="showListHeader" @click="isShowListHeader" class="w-[214px] pl-3 pr-2 py-1.5 truncate">{{
            props.kanbanList.title }}</h2>
          <!-- input 자리 -->
          <input v-else :value="props.kanbanList.title" @keydown.esc="isShowListHeader" @keydown.enter="isShowListHeader"
            @input="updateListInKanbanListsMethod($event)" :class="{ focus: activeInput }"
            class="shadow-[inset_0_0_0_2_blue] input-textarea-style" />
        </div>
        <button class="p-2 rounded-lg add-card-button-active transition-ease">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </header>
    <article>
      <template v-if="store.state.kanbanLists.lists[props.kanbanList.id].cards.length > 0">
        <draggable :list="store.state.kanbanLists.lists[props.kanbanList.id].cards" tag="ol" group="cards" item-key="id"
          ghost-class="ghost" class="list-body-style">
          <template #item="{ element }">
            <div>
              <KanbanCard :card="element" :listId="props.kanbanList.id" />
            </div>
          </template>
        </draggable>
      </template>
      <template v-else>
        <draggable :list="store.state.kanbanLists.lists[props.kanbanList.id].cards" tag="ol" group="cards" item-key="id"
          ghost-class="ghost" class="list-body-style">
          <template #item="{ element }">
            <li :key="element.id">
              {{ element.emptyName }}
            </li>
          </template>
        </draggable>
      </template>
    </article>

    <!-- Footer Area -->
    <footer class="flex border-none list-footer-style">
      <button v-if="!isActiveCreateCardButton" @click="activeCreateCardButton"
        class="flex items-center justify-start transition-ease add-card-button-position add-card-button-style add-card-button-active">
        <span class="mr-2">
          <i class="fa-solid fa-plus"></i>
        </span>
        Add a card!!
      </button>
      <button v-if="!isActiveCreateCardButton" class="p-2 transition-ease add-card-button-style add-card-button-active">
        <i class="fa-solid fa-clone"></i>
      </button>
      <div v-else class="add-card-popup-style">
        <input :value="cardTitle" @input="cardTitle = $event.target.value" type='text'
          @keydown.enter="createCardInCardsMethod" placeholder="Enter a title for this card..."
          class="input-textarea-style input-textarea-active transition-ease" />
        <div class="flex items-center justify-start gap-1 mt-2">
          <button @click="createCardInCardsMethod"
            class="add-list-button-active transition-ease add-list-button-style">ADD
            CARD</button>
          <button @click="activeCreateCardButton" class="p-1.5 rounded-lg add-card-button-active transition-ease">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import KanbanCard from '@components/kanban/KanbanCard.vue'
import { ref, defineProps } from 'vue'
import draggable from 'vuedraggable'
import { useStore } from 'vuex'

const props = defineProps({
  kanbanList: {
    type: Object
  }
})

const store = useStore()
let isActiveCreateCardButton = ref(false)
let cardTitle = ref('')
let showListHeader = ref(true);
const cardObject = ref({
  id: -1,
  cardTitle: "",
  notification: 'Watch',
  description: "",
  activities: [],
})

const isShowListHeader = () => {
  showListHeader.value = !showListHeader.value;
  activeInput.value = !activeInput.value;
};
const updateListInKanbanListsMethod = (event) => {
  store.commit("updateListInKanbanLists", { index: props.kanbanList.id, listTitle: event.target.value });
};

const activeCreateCardButton = () => {
  isActiveCreateCardButton.value = !isActiveCreateCardButton.value
}
const createCardInCardsMethod = () => {
  if (cardTitle.value.trim() !== '') {
    console.log(props.kanbanList.id)
    cardObject.value.id = store.state.kanbanLists.lists[props.kanbanList.id].cards.length;
    cardObject.value.cardTitle = cardTitle.value.trim();

    store.commit('createCardInCards', { index: props.kanbanList.id, newCard: { ...cardObject.value } })

    cardObject.value = {
      id: -1,
      cardTitle: "",
      notification: 'Watch',
      description: "",
      activities: [],
    }
    cardTitle.value = ''
    activeCreateCardButton()
  }
}
</script>

<style lang="scss" scoped></style>