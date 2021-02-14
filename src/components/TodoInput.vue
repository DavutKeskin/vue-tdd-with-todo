<template>
  <div>
    <input
      type="text"
      data-testid="todo-input"
      placeholder="Add todo item..."
      class="border border-dark p-1 text-black-50"
      v-model="newTodo">
    <button
      class="px-3 py-1 text-white bg-secondary mb-4"
      data-testid="todo-submit"
      @click.prevent="addTodo">
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',

  data () {
    return {
      newTodo: ''
    }
  },

  methods: {
    addTodo () {
      this.$store.commit('ADD_TODO', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>

</style>
