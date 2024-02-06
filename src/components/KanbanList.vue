<template>
  <div class="shadow-raised list-total-style">
    <div class="list-header-style">
      <div class="flex">
        <div class="grow">
          <h2 v-if="showListHeader" @click="isShowListHeader" class="pl-3 pr-2 py-1.5">{{ props.List }}</h2>
          <!-- TODO: Pseudo Style (Click에 따라, is-editing) -->
          <!-- :class="{{ is - editing : false }}" -->
          <textarea v-else @keydown.esc="isShowListHeader"
            class="input-textarea-style textarea-resize-none">{{ props.List }}</textarea>
        </div>
        <button class="p-2">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </div>
    <ol class="list-body-style">
      <li v-for="(   card, index   ) in    cardList   " @click="openPopup(card)" class="pb-2" :key="index">
        <KanbanCard :card="card" />
      </li>
    </ol>
    <div class="flex list-footer-style">
      <button v-if="!activeCardPopup" @click="isActiveCardPopup"
        class="transition-ease add-card-button-position add-card-button-style add-card-button-active">Add a
        card</button>
      <button v-if="!activeCardPopup" class="p-2 transition-ease add-card-button-style add-card-button-active">
        <i class="fa-solid fa-clone"></i>
      </button>
      <form v-else class="add-card-popup-style">
        <input v-model="cardTitle" type="text" placeholder="Enter a title for this card..."
          class="input-textarea-style transition-ease" />
        <div class="flex items-center justify-start gap-1 mt-2">
          <button @click="addCard" class="add-list-button-active transition-ease add-list-button-style">Add
            card
          </button>
          <button @click="isActiveCardPopup" class="p-1.5">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import KanbanCard from './KanbanCard.vue'
import { ref, defineProps } from 'vue'

let props = defineProps({
  List: {
    type: String,
    required: true,
    default: 'add Title',
  }
})
let showListHeader = ref(true)
let cardTitle = ref('')
let cardList = ref([
  {
    title: 'project 1',
    notification: false,
    description: '',
    activity: [
      {
        profile: '사진',
        memberName: '이름',
        content: 'added this card to Doing',
        date: 'Feb 3 at 3:28 PM'
      }
    ],
    showPopup: false,
    showDetailsInActivity: false,
  },
  {
    title: 'project 2',
    notification: false,
    description: '',
    activity: [
      {
        profile: '사진',
        memberName: '이름',
        content: 'added this card to Doing',
        date: 'Feb 3 at 3:28 PM'
      }
    ],
    showPopup: false,
    showDetailsInActivity: false,
  }
])
let activeCardPopup = ref(false)

const isShowListHeader = () => {
  showListHeader.value = !showListHeader.value
}
// TODO: Card 추가
const addCard = () => {
  const newCard = {
    title: cardTitle.value,
    notification: false,
    description: '',
    activity: [
      {
        profile: '사진',
        memberName: '이름',
        content: 'added this card to Doing',
        date: 'Feb 3 at 3:28 PM'
      }
    ],
    showPopup: false,
    showDetailsInActivity: false,
  }
  cardList.value.push(newCard)

  // 초기화
  cardTitle.value = ''
  activeCardPopup.value = !activeCardPopup.value
}

// TODO: Card 수정
const isActiveCardPopup = () => {
  activeCardPopup.value = !activeCardPopup.value
}

// TODO: Card 삭제
</script>