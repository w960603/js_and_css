<template>
  <div id="app">
      <v-todo></v-todo>
  </div>
</template>

<script>
  import basicCss from './css/basic.css';

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
