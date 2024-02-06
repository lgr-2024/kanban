<template>
  <div class="shadow-raised list-total-style">
    <div class="list-header-style">
      <div class="flex">
        <div class="flex items-center grow">
          <h2 v-if="showListHeader" @click="isShowListHeader" class="w-[214px] pl-3 pr-2 py-1.5 truncate">{{ props.List
          }}</h2>
          <input v-else :value="props.List" @keydown.esc="isShowListHeader" @keydown.enter="isShowListHeader"
            @input="handleInput" :class="{ focus: activeInput }"
            class="shadow-[inset_0_0_0_2_blue] input-textarea-style" />
        </div>
        <button class="p-2 rounded-lg add-card-button-active transition-ease">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </div>
    <ol class="list-body-style">
      <li v-for="(   card, index   ) in    cardList   " :key="index" draggable="true">
        <KanbanCard :card="card" :index="index" />
      </li>
    </ol>
    <div class="flex border-none list-footer-style">
      <button v-if="!activeCardPopup" @click="isActiveCardPopup"
        class="flex items-center justify-start transition-ease add-card-button-position add-card-button-style add-card-button-active">
        <span class="mr-2">
          <i class="fa-solid fa-plus"></i>
        </span>
        Add a card!!
      </button>
      <button v-if="!activeCardPopup" class="p-2 transition-ease add-card-button-style add-card-button-active">
        <i class="fa-solid fa-clone"></i>
      </button>
      <div v-else class="add-card-popup-style">
        <input v-model="cardTitle" @keydown.enter="addCardByEnterKey" type="text"
          placeholder="Enter a title for this card..." class="input-textarea-style transition-ease" />
        <div class="flex items-center justify-start gap-1 mt-2">
          <button type="submit" @click="addCard" class="add-list-button-active transition-ease add-list-button-style">Add
            card
          </button>
          <button @click="isActiveCardPopup" class="p-1.5 rounded-lg  add-card-button-active transition-ease">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import KanbanCard from './KanbanCard.vue'
import { ref, defineProps, defineEmits } from 'vue'

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
  // TODO: 더미 데이터 빼기(newCard)
])
let activeCardPopup = ref(false)
let activeInput = ref(false)

let emit = defineEmits(['handleEmit'])

const isShowListHeader = () => {
  showListHeader.value = !showListHeader.value
  activeInput.value = !activeInput.value
}
const handleInput = ($event) => {
  emit('handleEmit', $event.target.value)
}

// TODO: Card 추가
const addCard = () => {
  if (cardTitle.value.trim() !== '') {
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
  }

  // 초기화
  cardTitle.value = ''
  activeCardPopup.value = !activeCardPopup.value
}

const addCardByEnterKey = () => {
  addCard()
  isActiveCardPopup()
}

// TODO: Card 수정
const isActiveCardPopup = () => {
  activeCardPopup.value = !activeCardPopup.value
}

// TODO: Card 삭제
const deleteCard = () => {
  // TODO: Card 삭제 내용 추가
}
</script>