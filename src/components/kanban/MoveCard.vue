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
            <optgroup v-for="selectBoardOption in selectBoardOptions" :label="selectBoardOption.optgroup"
              :key="selectBoardOption.optgroupId">
              <option v-for="boardOption in selectBoardOption.options" :value="boardOption.board"
                :selected="{ 'selected': boardOption.selected }" :key="boardOption.optionId"
                @click="toggleSelect(boardOption)">{{
                  boardOption.board }}
              </option>
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
            <option v-for="selectListOption in selectListOptions" :value="selectListOption.list"
              :selected="{ 'selected': selectListOption.selected }" :key="selectListOption.optionId">
              {{ selectListOption.list }}</option>
          </select>
        </div>
        <div class="button-link-setting form-grid-child button-link px-3 py-1.5 neutral-active">
          <span class="button-link-label">Position</span>
          <span class="button-link-value">{{ selectPosition }}</span>
          <label class="hidden">Position</label>
          <select v-model="selectPosition" class="button-link-select-style">
            <option v-for="selectPositionOption in selectPositionOptions" :value="selectPositionOption.position"
              :selected="{ 'selected': selectPositionOption.selected }" :key="selectPositionOption.optionId">{{
                selectPositionOption.position }}</option>
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
let selectList = ref('To Do')
let selectPosition = ref('1')
let selectBoardOptions = ref([
  {
    optgroupId: 0,
    optgroup: 'Devtools',
    options: [
      {
        optionId: 0,
        board: '인트라넷',
        selected: false,
      },
      {
        optionId: 1,
        board: '해주세요',
        selected: false,
      },
      {
        optionId: 2,
        board: 'Kanban Template',
        selected: false,
      },
    ]
  },
  {
    optgroupId: 1,
    optgroup: 'Trello Workspace',
    options: [
      {
        optionId: 0,
        board: 'lgr2024',
        selected: false,
      },
    ]
  }
])
let selectListOptions = ref([
  {
    optionId: 0,
    list: 'To Do',
    selected: true
  },
  {
    optionId: 1,
    list: 'Done',
    selected: false
  },
])
let selectPositionOptions = ref([
  {
    optionId: 0,
    position: 1,
    selected: true,
  },
  {
    optionId: 1,
    position: 2,
    selected: false,
  },
  {
    optionId: 2,
    position: 3,
    selected: false,
  },
  {
    optionId: 3,
    position: 4,
    selected: false,
  },
  {
    optionId: 4,
    position: 5,
    selected: false,
  },
  {
    optionId: 5,
    position: 6,
    selected: false,
  },
  {
    optionId: 6,
    position: 7,
    selected: false,
  },
])

const emit = defineEmits(["closeMoveCard"]);

const toggleSelect = (boardOption) => {
  console.log(boardOption)
  boardOption.selected = !boardOption.selected
}
const closeMoveCard = () => {
  emit("closeMoveCard");
};
</script>
