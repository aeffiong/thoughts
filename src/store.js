import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    thoughts: [
      { thought: 'thought 1' },
      { thought: 'thought 2' },
    ]

  },
  getters: {
    thoughts: state => state.thoughts
  },
  mutations: {
    ADD_THOUGHTS: (state, payload) => {
      const thought = {
        thought: payload
      }
      state.thoughts.push(thought)
    }

  },
  actions: {
    addThought: ({ commit }, payload) => {
      commit('ADD_THOUGHTS', payload)
    }

  }
})
