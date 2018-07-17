<template>
	  <div class="pop" >
      <h3>温馨提示 :</h3>
      <p>由于本网站所用的服务器位于台湾省,所以打开可能会有些许延迟,请见谅!</p>
    </div>
</template>

<script>
	export default {
		data() {
			return {
      }
		},
    methods:{
		  showPop(){
		    $('.pop').slideDown(1000,function(){
            $(this).delay(4000).slideUp()
        })
      }
    },
    mounted(){
		  $(window).on('load',this.showPop())
    }
	}
</script>

<style>
    .pop{
      display: none;
      position: fixed;
      top:10px;left:20px;
      z-index:9999;
      width: 300px;
      opacity:.9;
      padding: 10px 20px;
      background-color: #ffc;
      line-height: 1.5em;
      border-radius:5px;
    }
</style>
