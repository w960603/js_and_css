<template>
    <div @click="clickLog">登录</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
    methods:{
      clickLog(){
        this.$emit('clicklog');
      }
    }
	}
</script>

<style lang='scss' scoped>
    div{
      width: 60px;
      height: 30px;
      margin: 0 auto;
      border: 1px solid #bbb;
      background-color: #56acf0;
      color: #fff;
      text-align: center;
      line-height: 30px;
      box-shadow:2px 2px 2px #bbb;
      cursor: pointer;
    }
</style>
