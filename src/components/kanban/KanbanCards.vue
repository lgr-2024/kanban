<template>
  <header>{{ props.kanbanList.title }}</header>
  <article>
    <template v-if="store.state.kanbanLists.lists[props.kanbanList.id].cards.length > 0">
      <draggable :list="store.state.kanbanLists.lists[props.kanbanList.id].cards" tag="ol" group="cards" item-key="id"
        ghost-class="ghost">
        <template #item="{ element }">
          <div @click="openCardPopupMethod(element.id)">
            {{ element.cardTitle }}
          </div>
        </template>
      </draggable>
    </template>
    <template v-else>
      {{ store.state.kanbanLists.lists[props.kanbanList.id].empty }}
    </template>
  </article>
  <footer>
    <button v-if="!isActiveCreateCardButton" @click="activeCreateCardButton">add card</button>
    <div v-else>
      <input :value="cardTitle" @input="cardTitle = $event.target.value" type='text' />
      <button @click="createCardInCardsMethod">ADD CARD</button>
      <button @click="activeCreateCardButton">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </footer>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import draggable from 'vuedraggable'
import { useStore } from 'vuex'

const props = defineProps({
  kanbanList: {
    type: Object
  }
})

const store = useStore()
const isActiveCreateCardButton = ref(false)
const cardTitle = ref('')
const cardObject = ref({
  id: -1,
  cardTitle: "",
  notification: 'Watch',
  description: "",
  activities: [],
})

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
      notification: false,
      description: "",
      activities: [],
    }
    cardTitle.value = ''
    activeCreateCardButton()
  }
}
const openCardPopupMethod = (cardId) => {
  console.log('kanbanCards')
  store.commit('openCardPopup', { listId: props.kanbanList.id, cardId })
}

</script>

<style lang="scss" scoped></style>