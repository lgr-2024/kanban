<template>
  <main class="background-style background-position">
    <div class="flex m-2">
      <ol class="flex">
        <li v-for='(List, index) in   Lists  ' class="px-1.5 min-h-screen list-width" :key="index">
          <KanbanList :List="List" @handleEmit="(newValue) => updateList(newValue, index)" />
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
            <button @click="isActiveListPopup" class="p-1.5 rounded-lg add-card-button-active transition-ease ">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Popup components -->
    <KanbanPopup />
  </main>
</template>

<script setup>
import KanbanList from './components/KanbanList.vue'
import KanbanPopup from './components/KanbanPopup.vue'
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

// COMPLETED: List 수정
const updateList = (newValue, index) => {
  console.log(newValue, index)
  Lists.value[index] = newValue
}

</script>

<style scoped></style>
