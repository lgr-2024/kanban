<template>
  <main class="h-screen background-style background-position basic-font-style">
    <div class="board-main-content">
      <div class="board-canvas">
        <div class="flex h-full">
          <ol
            id="board"
            class="flex-1 flex flex-row list-none list-image-none px-1.5">
            <div
              @drop="onDrop($event, 1)"
              @dragenter.prevent
              @dragover.prevent
              class="item-style">
              <li
                v-for="(List, index) in Lists"
                :key="index"
                draggable="true"
                @dragstart="startDrag($event, index)">
                <KanbanList
                  :List="List"
                  @handleEmit="newValue => updateList(newValue, index)" />
              </li>
            </div>

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
          </ol>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import KanbanList from "@components/KanbanList.vue";
import { ref } from "vue";

let Lists = ref([]);
let listsLength = ref(Lists.value.length + 1);
let activeListPopup = ref(false);
let list = ref({});
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
  const newList = {
    title: listTitle.value,
    list: listsLength,
  };
  Lists.value.push(newList);
  console.log(newList.list);
  // 초기화
  listTitle.value = "";
  activeListPopup.value = !activeListPopup.value;
  listsLength = Lists.value.length + 1;
};

// COMPLETED: 2. List 수정
const updateList = (newValue, index) => {
  console.log(newValue, index);
  Lists.value[index] = newValue;
};

// TODO: Drag
const startDrag = (event, index) => {
  console.log(index);
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemIndex", index);
};
const onDrop = (event, list) => {
  console.log("list: ", list);
  const itemIndex = event.dataTransfer.getData("itemIndex");
  const item = Lists.value.find(i => i === itemIndex);
  item.list = list + 1;
};
</script>

<style scoped></style>
