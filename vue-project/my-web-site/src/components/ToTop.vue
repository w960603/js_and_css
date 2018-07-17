<template>
  <transition-group name="top">
    <div v-if='show' class="to-top" @click="top" :key="1">
      <span>↑</span>
      <p>top</p>
    </div>
  </transition-group>
	
</template>

<script>
	export default {
	  props:['show'],
		data() {
			return {
			  
      }
		},
    methods:{
		  top(){
		    this.$emit('to-top')
      },
    },
	}
</script>

<style scoped>
  .top-enter{
    opacity:0;
  }
  .top-leave-to{
    opacity:0;
  }
    .to-top{
      position: fixed;
      bottom:20px ;
      right: 20px;
      padding: 5px 10px;
      background-color: #ddd;
      text-align: center;
      box-sizing: border-box;
      border-radius:50%;
      transition:.4s;
      cursor: pointer;
    }
    .to-top:hover{
      background-color: #bbb;
    }
    span{
      font-size: 13px;
    }
</style>
