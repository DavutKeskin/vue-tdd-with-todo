<template>
  <div>
    <h2>{{ title }}</h2>
    <label>
      <input type="text" data-testid="todo-input" v-model="newTodo"/>
    </label>
    <button data-testid="todo-submit" @click.prevent="addTodo">Add</button>
    <div data-testid="todos">
      <div v-for="(todo,todoKey) of todos" :key="todoKey">
        {{todo}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      todos: [],
      newTodo: ''
    }
  },
  methods: {
    addTodo () {
      this.todos.push(this.newTodo)
    }
  }
}
</script>

<style scoped>

</style>
