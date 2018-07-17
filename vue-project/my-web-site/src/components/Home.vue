<template>
	  <section id="home">
      <div class="wrap-shadow"></div>
        <div class="welcome">
          <p class="welcome-text">欢迎来到我的主页</p>
          <h2>你好! 我叫王泽杰! </h2>
          <p class="myself">|&nbsp;&nbsp;&nbsp;一个初出茅庐的小码农&nbsp;&nbsp;&nbsp;|</p>
          <div class="to-about" @click="clicked('#about')">了解更多  <i class="iconfont icon-xia"></i></div>
        </div>
    </section>
</template>

<script>
	export default {
		data() {
			return {
			   
      }
		},
    methods:{
		  setHeight(){
        var $home = $('#home');
		    if ($home.height()>=500) {
          $home.height($(window).height());
        }
      },
      loadIn(){
		      $('.welcome-text').slideDown(1000 );
          $('h2').delay(800).slideDown(1000);
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
      background: url("../assets/images/bg.jpg") 0 0 /cover no-repeat;
      justify-content: center;
      align-items: center;
    }
    .wrap-shadow{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);
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
    .welcome h2{
      display: none;
      margin-bottom: 10px;
      color: #fff;
      font-size: 88px;
      line-height: 1.4em;
    }
    .to-about{
      display: none;
      width: 100px;
      margin:0 auto;
      padding: 10px;
      border:2px solid rgba(150,150,150,.6);
      color: #fff;
      line-height: 1.8em;
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
