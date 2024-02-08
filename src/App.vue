<template>
  <main class="background-style background-position basic-font-style">
    <div class="flex m-2">
      <ol class="flex">
        <li
          v-for="(List, index) in Lists"
          class="px-1.5 min-h-screen list-width"
          :key="index"
          draggable="true">
          <KanbanList
            :List="List"
            @handleEmit="newValue => updateList(newValue, index)" />
        </li>
      </ol>

      <div class="grow px-1.5">
        <button
          v-if="!activeListPopup"
          @click="isActiveListPopup"
          class="flex items-center justify-start gap-1 add-list-active-button-style list-width transition-ease shadow-raised">
          <span class="mr-2">
            <i class="fa-solid fa-plus"></i>
          </span>
          Add Another List
        </button>
        <div v-else class="add-list-popup-style">
          <input
            v-model="listTitle"
            @keydown.enter="addList"
            placeholder="Enter list title..."
            class="input-textarea-style input-textarea-active transition-ease" />
          <div class="flex items-center justify-start gap-1 mt-2">
            <button
              @click="addList"
              class="add-list-button-active transition-ease add-list-button-style">
              Add list
            </button>
            <button
              @click="isActiveListPopup"
              class="p-1.5 rounded-lg add-card-button-active transition-ease">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import KanbanList from "@components/KanbanList.vue";
import { ref } from "vue";

let Lists = ref([]);
let activeListPopup = ref(false);
let listTitle = ref("");
let activePopup = ref(false);

// 1. List 추가
/**
 * 1.1. Popup 활성화
 * 1.2. List 추가
 */
// COMPLETED: 1.1. Popup 활성화
const isActiveListPopup = () => {
  activeListPopup.value = !activeListPopup.value;
};
// COMPLETED: 1.2. List 추가
const addList = () => {
  Lists.value.push(listTitle.value);
  // 초기화
  listTitle.value = "";
  activeListPopup.value = !activeListPopup.value;
};

// COMPLETED: 2. List 수정
const updateList = (newValue, index) => {
  console.log(newValue, index);
  Lists.value[index] = newValue;
};
</script>

<style scoped></style>
