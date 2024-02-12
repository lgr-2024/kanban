import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      user: false,
    };
  },
  mutations: {
    // increment(state) {
    //   state.count++;
    // },
    // decrement(state) {
    //   state.count--;
    // },
    // incrementByAmount(state, payload) {
    //   state.count += payload;
    // },
    // decrementByAmount(state, payload) {
    //   state.count -= payload;
    // },
    login(state) {
      state.user = true;
    },
    logout(state) {
      state.user = false;
    },
  },
});

export default store;
