<template>
	  <div id="home" class=" ">
      <!--<div class="wrap-shadow"></div>-->
        <div class="welcome center-block hidden-xs">
          <p class="welcome-text">欢迎来到我的主页</p>
          <h2 class="name">你好! 我叫王泽杰! </h2>
          <p class="myself">|&nbsp;&nbsp;&nbsp;一个初出茅庐的小程序员&nbsp;&nbsp;&nbsp;|</p>
          <div class="to-about" @click="clicked('#about')">了解更多  <i class="iconfont icon-xia"></i></div>
        </div>
      <div class="welcome center-block visible-xs col-xs-12">
        <p class="welcome-text h4">欢迎来到我的主页</p>
        <h3 class="h1 name ">你好! 我叫王泽杰! </h3>
        <p class="myself h4">&gt;&nbsp;一个初出茅庐的小程序员&nbsp;&lt;</p>
        <div class="to-about h5" @click="clicked('#about')">了解更多  <i class="iconfont icon-xia"></i></div>
      </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
			   
      }
		},
    methods:{
		  setHeight(){
        let $home = $('#home');
		    if ($home.height()>=500) {
          $home.height($(window).height());
        }
      },
      loadIn(){
		      $('.welcome-text').slideDown(1000 );
          $('.name').delay(800).slideDown(1000);
          $('.myself').delay(1600).slideDown(1000);
          $('.to-about').delay(2400).slideDown(1000)
		   
      },
      clicked(ele){
		    this.$emit('clicked',ele)
      }
    },
    mounted(){
		  $(window).on('resize',this.setHeight);
		  this.loadIn();
		  this.setHeight();
    }
	}
</script>

<style scoped>
  
    #home{
      display: flex;
      position: relative;
      min-height:500px;
      background: rgba(0,0,0,.5) url("../assets/images/bg.jpg") 0 0 /cover no-repeat;
      justify-content: center;
      align-items: center;
    }
    .wrap-shadow{
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .welcome{
      position: relative;
      z-index: 1;
      margin: auto;
      text-align: center;
    }
    .welcome p{
      display: none;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 3px;
    }
    .welcome .welcome-text{
      color: #065FBB;
      font-weight: bold;
    }
    .welcome .myself{
      position: relative;
      margin-bottom: 40px;
      color: #fff;
    }
     h2{
      display: none;
      margin-bottom: 10px;
      color: #fff;
      font-size: 88px;
      line-height: 1.4em;
    }
     h3{
       display: none;
     }
     .name{
       color: #fff;
     }
    .to-about{
      display: none;
      width: 120px;
      margin:0 auto;
      padding: 10px;
      border:2px solid rgba(150,150,150,.6);
      color: #fff;
      line-height: 1.8em;
      text-align: center;
      cursor: pointer;
    }
    .to-about:hover{
      transition:.5s;
      transform:translate(0,-5px);
    }
    .to-about .icon-xia{
      margin-left: 3px;
      font-size: 14px;
    }
</style>
