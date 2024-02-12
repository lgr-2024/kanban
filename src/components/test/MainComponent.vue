<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

// let Amount = ref(0)
// const count = computed(() => store.state.count)
// const incrementMethod = () => {
//   store.commit('increment')
// }
// const decrementMethod = () => {
//   store.commit('decrement')
// }
// const incrementByAmountMethod = () => {
//   store.commit('incrementByAmount', Amount.value)
// }
// const decrementByAmountMethod = () => {
//   store.commit('decrementByAmount', Amount.value)
// }

const userState = computed(() => store.state.user ? '로그인 상태' : '로그아웃 상태')

const loginMethod = () => {
  store.commit('login')
}
const logoutMethod = () => {
  store.commit('logout')
}
</script>

<template>
  <h1>Main Component</h1>
  <h3>{{ userState }}</h3>
  <div v-if="store.state.user">
    <button @click="logoutMethod">로그아웃</button>
  </div>
  <div v-else>
    <button @click="loginMethod">로그인</button>
  </div>
  <!-- <h3>{{ count }}</h3>
  <input v-model="Amount" type="number" />
  <button @click="incrementMethod">+1</button>
  <button @click="decrementMethod">-1</button>
  <button @click="incrementByAmountMethod">+{{ Amount }}</button>
  <button @click="decrementByAmountMethod">-{{ Amount }}</button> -->
</template>


<style lang="scss" scoped></style>