<template>
    <div class="nav hidden-xs">
      <ul class="main-nav hidden-xs">
        <li  :class="{active:item.active}" v-for="item in nav" @click="goto(item.hash)  ">
          <a :href="item.hash">{{item.content}}</a>
        </li>
      </ul>
    </div>
 
</template>

<script>
	export default {
    props:['nav'],
		data() {
			return {
			  
      }
		},
    methods:{
		  goto(ele){
		    this.$emit('goto',ele)
      },
    },
    
	}
</script>

<style>
  .nav {
    position: fixed;
    top:50%;left:2px;
    z-index: 9999;
    opacity:.8;
    background-color: #333;
    margin-top:-5%;
  }
  .nav li{
    width: 70px;
    padding:5px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }
  .nav li:hover{
    background-color: rgba(0,0,0,0.4);
  }
  .nav li a{
    color: #fff;
    transition:.3s;
  }
  .nav li.active a{
    color: #065FBB;
  }
</style>
