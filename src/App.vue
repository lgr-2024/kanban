<template>
  <main class="h-screen background-style background-position basic-font-style">
    <div class="board-main-content">
      <div class="board-canvas">
        <div class="flex h-full">
          <div id="board" class="flex flex-row flex-1">
            <template v-if="kanbanLists.list.length > 0">
              <draggable :list="kanbanLists.list" tag="ol" group="lists" :disabled="!enabled" item-key="id"
                ghost-class="ghost" class="flex flex-row list-none list-image-none px-1.5">
                <template v-for="(element, index) in kanbanLists.list" :itemKey="element.id" #item="{ element }">
                  <div class="px-1.5">
                    <KanbanList :kanbanList="element"
                      @handleListTitleInput="newValue => updateListInKanbanLists(newValue, index)">
                      <div class="flex border-none list-footer-style">
                        <button v-if="!element.activeCardPopup" @click="isActiveCardPopup(element)"
                          class="flex items-center justify-start transition-ease add-card-button-position add-card-button-style add-card-button-active">
                          <span class="mr-2">
                            <i class="fa-solid fa-plus"></i>
                          </span>
                          Add a card!!
                        </button>
                        <button v-if="!element.activeCardPopup"
                          class="p-2 transition-ease add-card-button-style add-card-button-active">
                          <i class="fa-solid fa-clone"></i>
                        </button>
                        <div v-else class="add-card-popup-style">
                          <input v-model="cardTitle" @keydown.enter="addCardInKanbanListByEnterKey(element, index)"
                            type="text" placeholder="Enter a title for this card..."
                            class="input-textarea-style input-textarea-active transition-ease" />
                          <div class="flex items-center justify-start gap-1 mt-2">
                            <button type="submit" @click="addCardInKanbanList(element, index)"
                              class="add-list-button-active transition-ease add-list-button-style">
                              Add card
                            </button>
                            <button @click="isActiveCardPopup(element)"
                              class="p-1.5 rounded-lg add-card-button-active transition-ease">
                              <i class="fa-solid fa-xmark"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </KanbanList>
                  </div>
                </template>
              </draggable>
            </template>
            <template v-else>
              <draggable :list="kanbanLists.list" tag="ol" group="lists" item-key="id"
                class="flex flex-row list-none list-image-none px-1.5">
                <template v-for="(element, index) in kanbanLists.empty" :itemKey="index" #item="{ element }">
                  <div class="px-1.5">
                    {{ element.list }}
                  </div>
                </template>
              </draggable>
            </template>

            <div class="px-1.5">
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
                  <button @click="updateListInKanbanLists"
                    class="p-1.5 rounded-lg add-card-button-active transition-ease">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DragAndDrop />
  </main>
  <!-- <TestComponent /> -->
</template>

<script setup>
import KanbanList from "@components/KanbanList.vue";
import draggable from 'vuedraggable'
// import TestComponent from '@components/TestComponent.vue'
// import DragAndDrop from "@components/DragAndDrop.vue";
import { ref } from "vue";

// @handleAddCard="addCard(element)" @handleIsActiveCardPopup="isActiveCardPopup"
// @handleAddCardByEnterKey="addCardByEnterKey(element)" : activeCardPopup = "activeCardPopup"
// v - model="cardTitle"

let enabled = ref(true)
let kanbanLists = ref({
  list: [
    {
      id: 0, title: "list A", activeCardPopup: false, cards: [
        { id: 0, cardTitle: 'cardName A-1' },
        { id: 1, cardTitle: 'cardName A-2' },
        { id: 2, cardTitle: 'cardName A-3' },
      ], empty: [
        { emptyName: 'empty' }
      ]
    },
    // {
    //   id: 1, title: "list B", cards: [
    //     { id: 0, cardTitle: 'cardName B-1' },
    //     { id: 1, cardTitle: 'cardName B-2' },
    //     { id: 2, cardTitle: 'cardName B-3' },
    //   ], empty: [
    //     { emptyName: 'empty' }
    //   ]
    // },
    // {
    //   id: 2, title: "list C", cards: [
    //     { id: 0, cardTitle: 'cardName C-1' },
    //     { id: 1, cardTitle: 'cardName C-2' },
    //     { id: 2, cardTitle: 'cardName C-3' },
    //   ], empty: [
    //     { emptyName: 'empty' }
    //   ]
    // },
    // {
    //   id: 3, title: "list D", cards: [
    //     { id: 0, cardTitle: 'cardName D-1' },
    //     { id: 1, cardTitle: 'cardName D-2' },
    //     { id: 2, cardTitle: 'cardName D-3' },
    //   ], empty: [
    //     { emptyName: 'empty' }
    //   ]
    // },
  ], empty: [
    { emptyName: 'empty' }
  ]
});

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
  console.log('hello')
  const newList = {
    id: kanbanLists.value.list.length,
    title: kanbanListTitle.value,
    activeCardPopup: false,
    cards: [],
    empty: [
      { emptyName: 'empty' }
    ]
  };

  kanbanLists.value.list.push(newList)
  console.log('kanbanLists.value.list: ', kanbanLists.value.list)

  // kanbanLists.value = {
  //   ...kanbanLists.value,
  //   list: [...kanbanLists.value.list, newList]
  // };

  // 초기화
  kanbanListTitle.value = "";
  activeListPopup.value = !activeListPopup.value;
};

// COMPLETED: 2. List 수정
const updateListInKanbanLists = (newValue, index) => {
  console.log(newValue, index);
  kanbanLists.list[index] = newValue;
};

// COMPLETED: Card 추가
let cardTitle = ref("");
const addCardInKanbanList = (kanbanList, index) => {
  if (cardTitle.value.trim() !== "") {
    const newCard = {
      id: kanbanLists.value.list[index].cards.length,
      cardTitle: cardTitle.value,
      // notification: false,
      // description: "",
      // activity: [
      //   {
      //     profile: "사진",
      //     memberName: "이름",
      //     content: "added this card to Doing",
      //     date: "Feb 3 at 3:28 PM",
      //   },
      // ],
      // showPopup: false,
      // showDetailsInActivity: false,
    };
    console.log(newCard)
    kanbanLists.value.list[index].cards.push(newCard)


    // kanbanLists.value.list[index] = {
    //   ...kanbanLists.value.list[index],
    //   cards: [...kanbanLists.value.list[index].cards, newCard]
    // };
    console.log(kanbanLists.value.list[index].cards)
    isActiveCardPopup(kanbanList)
  }

  // 초기화
  cardTitle.value = "";
};


const addCardInKanbanListByEnterKey = (kanbanList, index) => {
  addCardInKanbanList(kanbanList, index);
  isActiveCardPopup(kanbanList);
};

// COMPLETED: Card 수정
const isActiveCardPopup = (kanbanList) => {
  kanbanList.activeCardPopup = !kanbanList.activeCardPopup;
};
</script>

<style scoped></style>
