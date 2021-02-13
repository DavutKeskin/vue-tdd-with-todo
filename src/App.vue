<template>
  <div id="app" class="container">
    <h1>Todo</h1>
    <Todo title="My List"></Todo>
  </div>
</template>

<script>

import Todo from '@/components/Todo'
export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
