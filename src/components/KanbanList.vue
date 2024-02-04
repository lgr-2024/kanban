<template>
  <div class="shadow-raised">
    <div class="list-header-style">
      <div class="flex">
        <div class="grow">
          <h2 v-if="showListHeader" @click="isShowListHeader" class="pl-3 pr-2 py-1.5">{{ List }}</h2>
          <textarea v-else @keydown.esc="isShowListHeader" class=".textarea-style">{{ listHeader }}</textarea>
        </div>
        <button class="p-2">MORE</button>
      </div>
    </div>
    <ol class="list-body-style">
      <KanbanCard />
      <KanbanCard />
      <KanbanCard />
    </ol>
    <div class="flex list-footer-style">
      <button class="flex items-center justify-start grow pl-2 pr-3 py-1.5">Add a card</button>
      <button class="p-2">TPL</button>
    </div>
  </div>
</template>

<script setup>
import KanbanCard from './KanbanCard.vue'
import { ref, defineProps } from 'vue'

let props = defineProps({
  List: {
    type: String,
    required: true,
    default: 'add Title',
  }
})
let showListHeader = ref(true)

const isShowListHeader = () => {
  showListHeader.value = !showListHeader.value
}
</script>