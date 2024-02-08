<template>
  <div>
    <div class="pop-over-header">
      <span class="pop-over-header-title">Move Card</span>
      <a
        class="inline-block icon-sm pop-over-header-close-button transparent-active"
        @click="closeMoveCard">
        <i class="fa-solid fa-xmark"></i>
      </a>
    </div>
    <div class="px-3 pb-3">
      <h4 class="mt-4 mb-2 font-semibold">Select destination</h4>
      <div class="form-grid">
        <div
          class="button-link-setting form-grid-child form-grid-child-full button-link px-3 py-1.5 neutral-active">
          <span class="block">Board</span>
          <span class="block">lgr2024</span>
          <label class="hidden">Board</label>
          <select
            class="button-link-select-style bg-tw-background-input-transparent">
            <optgroup label="Devtools">
              <option>1. 인트라넷</option>
              <option>2. 해주세요</option>
              <option>Kanban Template</option>
            </optgroup>
            <optgroup label="Trello Workspace">
              <option selected="selected">lgr2024</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div class="form-grid">
        <div
          class="button-link-setting form-grid-child-threequarters form-grid-child button-link px-3 py-1.5 neutral-active">
          <span class="button-link-label">List</span>
          <span class="button-link-value">Backlog</span>
          <label class="hidden">List</label>
          <select class="button-link-select-style">
            <option selected="selected">To do</option>
            <option>Done</option>
          </select>
        </div>
        <div
          class="button-link-setting form-grid-child button-link px-3 py-1.5 neutral-active">
          <span class="button-link-label">Position</span>
          <span class="button-link-value">3</span>
          <label class="hidden">Position</label>
          <select class="button-link-select-style">
            <option selected="selected">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
        </div>
      </div>
      <input
        type="submit"
        :value="move"
        class="nch-button nch-button--primary" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

let move = ref("Move");

const emit = defineEmits(["closeMoveCard"]);

const closeMoveCard = () => {
  console.log("closeMoveCard");
  emit("closeMoveCard");
};
</script>
