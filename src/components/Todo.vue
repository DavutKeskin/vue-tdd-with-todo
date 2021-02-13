<template>
  <div>
    <h2>{{ title }}</h2>
    <label>
      <input type="text" data-testid="todo-input" v-model="newTodo"/>
    </label>
    <button data-testid="todo-submit" @click.prevent="addTodo">Add</button>
    <ul data-testid="todos" class="text-left">
      <li v-for="(todo,todoKey) of todos"
          data-testid="`todo-${todoKey}`"
          :key="todoKey">
        <span :data-testid="`todo-${todoKey}-toggle`" :data-done="todo.done" @click.prevent="toggle(todo)">
          {{
            todo.done ? 'Done' : 'Mark done'
          }}</span>
        {{ todo.description }}
      </li>
    </ul>
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
      this.todos.push(
        {
          description: this.newTodo,
          done: false
        }
      )
      this.newTodo = ''
    },
    toggle (todo) {
      todo.done = !todo.done
    }
  }
}
</script>

<style scoped>

</style>
