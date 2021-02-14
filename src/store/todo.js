export default {
  state: () => {
    return {
      todos: []
    }
  },
  getters: {
    todos (state) {
      return state.todos
    }
  },
  mutations: {
    ADD_TODO (state, description) {
      state.todos.push({
        description,
        done: false
      })
    },
    TOGGLE_TODO (state, targetTodo) {
      const todo = state.todos.find(item => item.description === targetTodo.description)
      if (todo) {
        todo.done = !todo.done
      }
    }
  }
}
