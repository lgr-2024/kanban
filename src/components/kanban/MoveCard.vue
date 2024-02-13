<template>
  <div>
    <div class="pop-over-header">
      <span class="pop-over-header-title">Move Card</span>
      <a class="inline-block icon-sm pop-over-header-close-button transparent-active" @click="closeMoveCard">
        <i class="fa-solid fa-xmark"></i>
      </a>
    </div>
    <div class="px-3 pb-3">
      <h4 class="mt-4 mb-2 font-semibold">Select destination</h4>
      <div class="form-grid">
        <div class="button-link-setting form-grid-child form-grid-child-full button-link px-3 py-1.5 neutral-active">
          <span class="block">Board</span>
          <span class="block">{{ selectBoard }}</span>
          <label class="hidden">Board</label>
          <select v-model="selectBoard" class="button-link-select-style bg-tw-background-input-transparent">
            <optgroup label="Devtools">
              <option value="인트라넷">1. 인트라넷</option>
              <option value="해주세요">2. 해주세요</option>
              <option value="Kanban Template">Kanban Template</option>
            </optgroup>
            <optgroup label="Trello Workspace">
              <option value="lgr2024" selected="selected">lgr2024</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div class="form-grid">
        <div
          class="button-link-setting form-grid-child-threequarters form-grid-child button-link px-3 py-1.5 neutral-active">
          <span class="button-link-label">List</span>
          <span class="button-link-value">{{ selectList }}</span>
          <label class="hidden">List</label>
          <select v-model="selectList" class="button-link-select-style">
            <option value="To do" selected="selected">To do</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div class="button-link-setting form-grid-child button-link px-3 py-1.5 neutral-active">
          <span class="button-link-label">Position</span>
          <span class="button-link-value">{{ selectPosition }}</span>
          <label class="hidden">Position</label>
          <select v-model="selectPosition" class="button-link-select-style">
            <option value="1" selected="selected">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
      </div>
      <input type="submit" :value="move" class="nch-button nch-button--primary" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

let move = ref("Move");
let selectBoard = ref('lgr2024')
let selectList = ref('To do')
let selectPosition = ref('1')

const emit = defineEmits(["closeMoveCard"]);

const closeMoveCard = () => {
  console.log("closeMoveCard");
  emit("closeMoveCard");
};
</script>
