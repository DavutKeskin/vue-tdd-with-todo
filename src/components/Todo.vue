<template>
  <div>
    <h2 class="mb-4">{{ title }}</h2>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

export default {
  name: 'Todo',
  components: {
    TodoList,
    TodoInput
  },
  computed: {
    ...mapGetters(['todos'])
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
