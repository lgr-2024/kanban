<script setup>
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
  category: {
    type: String
  }
})
const emits = defineEmits(['setCategory'])

const setCategoryHandler = (element) => {
  if (props.category === element) return;

  emits('setCategory', element)
}
const setClassName = (element) => {
  return computed(() => {
    return element === props.category ? 'active' : null
  })
}
</script>

<template>
  <ul>
    <!-- <li @click="setCategoryHandler('Main')" :class="setClassName('Main').value">Main</li>
    <li @click="setCategoryHandler('List')" :class="setClassName('List').value">List</li>
    <li @click="setCategoryHandler('Upload')" :class="setClassName('Upload').value">Upload</li> -->
    <router-link to="/">Main</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/upload">Upload</router-link>
  </ul>
</template>

<style scoped>
ul {
  padding: 0;
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

.active {
  cursor: default;
  font-weight: bold;
}

li,
a {
  margin-left: 1rem;
  cursor: pointer;
  user-select: none;
}

li:first-of-type {
  margin: 0;
}
</style>