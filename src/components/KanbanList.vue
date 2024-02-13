<template>
  <div class="shadow-raised list-total-style list-width">
    <div class="list-header-style">
      <div class="flex">
        <div class="flex items-center grow">
          <h2 v-if="showListHeader" @click="isShowListHeader" class="w-[214px] pl-3 pr-2 py-1.5 truncate">
            {{ props.kanbanList.title }}
          </h2>
          <input v-else :value="props.kanbanList.title" @keydown.esc="isShowListHeader" @keydown.enter="isShowListHeader"
            @input="handleListTitleInput" :class="{ focus: activeInput }"
            class="shadow-[inset_0_0_0_2_blue] input-textarea-style" />
        </div>
        <button class="p-2 rounded-lg add-card-button-active transition-ease">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </div>
    <template v-if="props.kanbanList.cards.length > 0">
      <draggable :list="kanbanList.cards" tag="ol" group="cards" item-key="id" ghost-class="ghost"
        class="list-body-style">
        <template v-for="(element, index) in kanbanList.cards" :itemKey="element.id" #item="{ element }">
          <div>
            <KanbanCard :card="element" :index="index" />
          </div>
        </template>
      </draggable>
    </template>
    <template v-else>
      <draggable :list="kanbanList.cards" tag="ol" group="cards" item-key="id" class="list-body-style">
        <template v-for="(element, index) in kanbanList.empty" :itemKey="index" #item="{ element }">
          <div class="list-group-item">
            {{ element.cardName }}
          </div>
        </template>
      </draggable>
    </template>
    <slot></slot>
  </div>
</template>

<script setup>
import KanbanCard from "./KanbanCard.vue";
import draggable from 'vuedraggable';
import { ref, defineProps, defineEmits, defineModel } from "vue";

let props = defineProps({
  kanbanList: {
    type: Object,
  }
});

let showListHeader = ref(true);
// let cardTitle = ref("");
let cardList = ref([
  // TODO: 더미 데이터 빼기(newCard)
]);
// let activeCardPopup = ref(false);
let activeInput = ref(false);

let emit = defineEmits(["handleListTitleInput"]);

const isShowListHeader = () => {
  showListHeader.value = !showListHeader.value;
  activeInput.value = !activeInput.value;
};
const handleListTitleInput = $event => {
  emit("handleListTitleInput", $event.target.value);
};

// TODO: Card 삭제
const deleteCard = () => {
  // TODO: Card 삭제 내용 추가
};
</script>
