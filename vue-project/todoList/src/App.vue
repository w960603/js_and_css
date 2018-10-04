<template>
  <div id="app">
      <v-todo></v-todo>
  </div>
</template>

<script>
  import basicCss from './css/basic.css';
  import todolist from './component/todoList'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'v-todo': todolist,
  }
}
</script>

<style>

</style>
