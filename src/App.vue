<template>
  <main class="flex flex-col min-h-screen font-NotoSans bg-background">
    <div class="flex">
      <ol class="flex">
        <li v-for='List in Lists' class="px-1.5 min-h-screen list-width">
          <KanbanList :List="List" />
        </li>
      </ol>
      <div class="grow px-1.5">
        <button @click="addAnotherList" class="add-button-style list-width">Add Another List</button>
      </div>
      <button @click="addList">add</button>
    </div>
  </main>
</template>

<script setup>
// import { RouterView } from 'vue-router';
import KanbanList from './components/KanbanList.vue'
// import KanbanPopup from './components/KanbanPopup.vue'
import { ref } from 'vue'

let Lists = ref(['todo', 'done'])
const addList = () => {
  // TODO: push 값 수정
  Lists.value.push('hello')

  console.log(Lists)
}

</script>

<style scoped></style>
