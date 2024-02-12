<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'
const store = useStore();
const userState = computed(() => store.state.user)

// const router = useRouter();
// if (!store.state.user) {
//   router.push({ name: "Main" })
// }
</script>

<template>
  <h1>Upload Component</h1>
  <h3>{{ userState }}</h3>
</template>
