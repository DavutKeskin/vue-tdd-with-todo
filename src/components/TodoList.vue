<template>
  <div>
    <ul data-testid="todos" class="text-left">
      <li
        v-for="(todo,todoKey) of todos"
        :data-testid="`todo-${todoKey}`"
        :key="todoKey"
        :class="todo.done ? 'done' : ''"
        class="block mb-3">
        <span
          :data-testid="`todo-${todoKey}-toggle`"
          @click.prevent="toggle(todo)"
          :class=" todo.done ? 'done' : ''">
          {{ todo.done ? 'Done' : 'Mark Done' }}
        </span>
        {{ todo.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',

  computed: {
    ...mapGetters(['todos'])
  },

  methods: {
    toggle (todo) {
      this.$store.commit('TOGGLE_TODO', todo)
    }
  }
}
</script>

<style scoped>

</style>
