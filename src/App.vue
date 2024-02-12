<template>
  <main class="h-screen background-style background-position basic-font-style">
    <div class="board-main-content">
      <div class="board-canvas">
        <div class="flex h-full">
          <draggable :list="kanbanLists" tag="ol" :disabled="!enabled" item-key="id" id="board" ghost-class="ghost"
            class="flex-1 flex flex-row list-none list-image-none px-1.5">
            <template v-for="(element, index) in kanbanLists" :itemKey="element.id" #item="{ element }">
              <div class="px-1.5">
                <KanbanList :kanbanList="element" @handleEmit="newValue => updateListInKanbanLists(newValue, index)" />
              </div>
            </template>
          </draggable>

          <!-- <div class="grow px-1.5">
            <button v-if="!activeListPopup" @click="isActiveKanbanListPopup"
              class="flex items-center justify-start gap-1 add-list-active-button-style list-width transition-ease shadow-raised">
              <span class="mr-2">
                <i class="fa-solid fa-plus"></i>
              </span>
              Add Another List
            </button>
            <div v-else class="add-list-popup-style">
              <input v-model="kanbanListTitle" @keydown.enter="addListInKanbanLists" placeholder="Enter list title..."
                class="input-textarea-style input-textarea-active transition-ease" />
              <div class="flex items-center justify-start gap-1 mt-2">
                <button @click="addListInKanbanLists"
                  class="add-list-button-active transition-ease add-list-button-style">
                  Add list
                </button>
                <button @click="isActiveKanbanListPopup" class="p-1.5 rounded-lg add-card-button-active transition-ease">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import KanbanList from "@components/KanbanList.vue";
import draggable from 'vuedraggable'
// import DragAndDrop from "@components/DragAndDrop.vue";
import { ref } from "vue";

let enabled = ref(true)
let kanbanLists = ref([
  {
    id: 0, title: "list A", cards: [
      { cardTitle: 'cardName A-1' },
      { cardTitle: 'cardName A-2' },
      { cardTitle: 'cardName A-3' },
    ], empty: [
      { emptyName: 'empty' }
    ]
  },
  {
    id: 1, title: "list B", cards: [
      { cardTitle: 'cardName B-1' },
      { cardTitle: 'cardName B-2' },
      { cardTitle: 'cardName B-3' },
    ], empty: [
      { emptyName: 'empty' }
    ]
  },
  {
    id: 2, title: "list C", cards: [
      { cardTitle: 'cardName C-1' },
      { cardTitle: 'cardName C-2' },
      { cardTitle: 'cardName C-3' },
    ], empty: [
      { emptyName: 'empty' }
    ]
  },
  {
    id: 3, title: "list D", cards: [
      { cardTitle: 'cardName D-1' },
      { cardTitle: 'cardName D-2' },
      { cardTitle: 'cardName D-3' },
    ], empty: [
      { emptyName: 'empty' }
    ]
  },
]);
let listsLength = ref(kanbanLists.value.length + 1);
let activeListPopup = ref(false);
let kanbanListTitle = ref("");

// 1. List 추가
/**
 * 1.1. Popup 활성화
 * 1.2. List 추가
 */
// COMPLETED: 1.1. Popup 활성화
const isActiveKanbanListPopup = () => {
  activeListPopup.value = !activeListPopup.value;
};
// COMPLETED: 1.2. List 추가
const addListInKanbanLists = () => {
  const newList = {
    id: kanbanLists.value.length,
    title: kanbanListTitle.value,
    card: [],
    empty: [
      { emptyName: 'empty' }
    ]
  };
  kanbanLists.value.push(newList);

  // 초기화
  kanbanListTitle.value = "";
  activeListPopup.value = !activeListPopup.value;
  listsLength.value = kanbanLists.value.length + 1;
};

// COMPLETED: 2. List 수정
const updateListInKanbanLists = (newValue, index) => {
  console.log(newValue, index);
  kanbanLists.value[index] = newValue;
};
</script>

<style scoped></style>
