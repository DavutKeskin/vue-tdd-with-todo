export default {
  state: () => {
    return {
      todos: []
    }
  },
  mutations: {
    ADD_TODO (state, description) {
      state.todos.push({
        description,
        done: false
      })
    }
  }
}
