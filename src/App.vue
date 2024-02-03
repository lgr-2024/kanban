<template>
  <main class="flex flex-col min-h-screen font-NotoSans bg-canvas-background">
    <!-- <div class="canvas-background">hello</div> -->
    <TodoList />
    <!-- <RouterView /> -->
  </main>
</template>

<script setup>
// import { RouterView } from 'vue-router';
import TodoList from './components/TodoList.vue';
</script>

<style scoped>
@import "../src/assets/reset.css";

.canvas-background {
  width: 100%;
  height: 100vh;
}
</style>
