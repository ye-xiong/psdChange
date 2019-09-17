const state = {
  main: false
}

const mutations = {
  CHANG_STATE (state, data) {
    state.main = data
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
