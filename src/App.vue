<template>
  <main class="flex flex-col min-h-screen font-NotoSans bg-tw-background">
    <div class="flex m-2">
      <ol class="flex">
        <li v-for='List in Lists' class="px-1.5 min-h-screen list-width">
          <KanbanList :List="List" />
        </li>
      </ol>
      <div class="grow px-1.5">
        <button v-if="!activeListPopup" @click="isActiveListPopup"
          class="flex items-center justify-start gap-1 add-list-active-button-style list-width transition-ease shadow-raised">
          <span class="mr-2">
            <i class="fa-solid fa-plus"></i>
          </span>
          Add Another List</button>
        <form v-else class="add-list-popup-style">
          <input placeholder="Enter list title..." class="input-textarea-style transition-ease" />
          <div class="flex items-center justify-start gap-1 mt-2">
            <button @click="addList" class="add-list-button-active transition-ease add-list-button-style">Add
              list</button>
            <button @click="isActiveListPopup" class="p-1.5">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import KanbanList from './components/KanbanList.vue'
import { ref } from 'vue'

let Lists = ref(['todo', 'done'])
let activeListPopup = ref(false)

// TODO: List 추가
/** 
 * 1. List Popup 활성화
 * 2. List title 입력
 * 3. add List Button 클릭
 */
const isActiveListPopup = () => {
  activeListPopup.value = !activeListPopup.value
}
const addList = () => {
  // TODO: push 값 수정
  Lists.value.push('hello')

  // 초기화
  activeListPopup.value = !activeListPopup.value
}

// TODO: List 

</script>

<style scoped></style>
