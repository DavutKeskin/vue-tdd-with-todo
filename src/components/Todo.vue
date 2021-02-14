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
import { mapGetters } from 'vuex'

export default {
  name: 'Todo',
  computed: {
    ...mapGetters(['todos'])
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('ADD_TODO', this.newTodo)
      this.newTodo = ''
    },
    toggle (todo) {
      this.$store.commit('TOGGLE_TODO', todo)
    }
  }
}
</script>

<style scoped>

</style>
