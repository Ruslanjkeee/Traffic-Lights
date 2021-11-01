import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      lights: [
        {id: 1, color: 'red', isActive: true, isBlinking: false},
        {id: 2, color: 'yellow', isActive: false, isBlinking: false},
        {id: 3, color: 'green', isActive: false, isBlinking: false},
      ],
      prevPath: '',
      currPath: '',
      timer: 0,
    }
  },

  getters: {
    isTimerBelow(state) {
      return state.timer <= 3;
    },
    isTimerZero(state) {
      return state.timer <= 0;
    }
  },

  mutations: {
    changeActive(state, id) {
      state.lights.map(light => light.isActive = light.id === id ? true : false);
    },

    changePrevPath(state, path) {
      state.prevPath = path;
    },

    changeCurrPath(state, path) {
      state.currPath = path;
    },

    changeIsBlinking(state, id) {
      state.lights.map(light => light.isActive = light.id === id ? true : false);
    },

    setTimer(state, s) {
      state.timer = s;
    },

    decreaseTimer(state) {
      state.timer -= 1;
    }
  },
  actions: {},
  modules: {},
});
