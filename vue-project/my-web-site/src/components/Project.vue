<template>
	<section id="project" class="pd120">
    <div class="wrap">
      <h2 class="general">来看看我的作品吧</h2>
      <p class="download">所有小项目
        <a href="https://github.com/w960603/js_and_css.git" target="_blank">→ GitHub下载地址 ←</a>
      </p>
      <div>
        <ul class="clearfix">
          <li v-for="item in img">
            <img :src="item.src" alt="">
            <a :href="item.url" target="_blank"><span>{{item.detail}}</span></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		data() {
			return {
			  img:[
          {
            src: require('../assets/images/project/1.png'),
            url:'https://www.wangzejie.com/pages/accordion/accor-css+js.html',
            detail:'手风琴效果'
          },
          {
            src: require('../assets/images/project/2.png'),
            url:'https://www.wangzejie.com/pages/accordion-and-banner/banner.html',
            detail:'无缝轮播'
          },
          // {
          //   src: require('../assets/images/project/3.jpg'),
          //   url:'https://www.wangzejie.com/pages/ball/ball.html',
          //   detail:'运动的小球'
          // },
          {
            src: require('../assets/images/project/4.jpg'),
            url:'https://www.wangzejie.com/pages/chuizi-mall/index.html',
            detail:'纯css做得锤子官网'
          },
          {
            src: require('../assets/images/project/5.jpg'),
            url:'https://www.wangzejie.com/pages/css-hover-animation/mouseenter.html',
            detail:'纯css做的鼠标移入效果'
          },
          {
            src: require('../assets/images/project/6.jpg'),
            url:'https://www.wangzejie.com/pages/login-confirm-by-regExp/regExp.html',
            detail:'一个用正则做的登录验证'
          },
          {
            src: require('../assets/images/project/7.jpg'),
            url:'https://www.wangzejie.com/pages/accordion-and-banner/frag-baner.html',
            detail:'碎片化轮播'
          },
          {
            src: require('../assets/images/project/8.jpg'),
            url:'https://www.wangzejie.com/pages/meizu-mobile/index.html',
            detail:'纯css做的魅族官网移动端'
          },
          {
            src: require('../assets/images/project/9.jpg'),
            url:'https://www.wangzejie.com/pages/puzzle/puzzle.html',
            detail:'拼图小游戏'
          },
          {
            src: require('../assets/images/project/10.jpg'),
            url:'https://www.wangzejie.com/pages/rotate-label/rotate-label.html',
            detail:'一个旋转标签'
          },
          {
            src: require('../assets/images/project/11.jpg'),
            url:'https://www.wangzejie.com/pages/tab/tab.html',
            detail:'选项卡'
          },
          {
            src: require('../assets/images/project/12.jpg'),
            url:'https://www.wangzejie.com/pages/vue-project//todoList/index.html',
            detail:'用vue写的todolist'
          },
          {
            src: require('../assets/images/project/13.jpg'),
            url:'https://www.wangzejie.com/pages/vue-project/my-first-vue-project/index.html',
            detail:'用vue写的一个网站页面'
          },
          {
            src: require('../assets/images/project/14.jpg'),
            url:'http://www.wangzejie.com/pages/weather-forecast/weather.html',
            detail:'调用api接口实现的天气预报'
          },
          {
            src: require('../assets/images/project/15.jpg'),
            url:'http://www.wangzejie.com/pages/weather-forecast/baidu.html',
            detail:'调用百度jsonp实现的百度搜索'
          },
          {
            src: require('../assets/images/project/16.jpg'),
            url:'https://www.wangzejie.com/pages/cart/cart.html',
            detail:'购物车结算'
          },
          {
            src: require('../assets/images/project/17.jpg'),
            url:'https://www.wangzejie.com/pages/clock/clock.html',
            detail:'时钟'
          },
        ]
      }
		},
    methods:{
		  open(url){
		    window.open('/'+url)
      }
    }
	}
</script>

<style scoped>
  #project{
    background-color: #f7f7f7;
  }
  .download{
    margin: 10px;
  }
  .download a{
    color: #065FBB;
  }
  ul{
    width: 100%;
    column-count: 3;
    column-gap:1em;
  }
  ul li{
    /*float: left;*/
    overflow: hidden;
    position: relative;
    width: 100%;
    border: 4px solid #065FBB;
    background-color: #eee;
    break-inside: avoid;
    transform: scale(1);
  }
  ul li:not(:nth-child(1)){
    margin: 1em 0;
  }
  ul li img{
    width: 100%;
    transition:.8s;
  }
  ul li a{
    visibility: hidden;
    position: absolute;
    top:0;left:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    text-align: center;
    transition:.6s;
  }
  ul li a span{
    display: block;
    position: absolute;
    top:50%;
    width: 100%;
    left: -100%;
    transform:translate(-50%,0);
    transition:.6s;
  }
  ul li:hover img{
    transform:scale(1.1);
  }
  ul li:hover a{
    visibility: visible;
    opacity: 1;
  }
  ul li:hover a span{
    left:50%;
    transform:translateX(-50%);
  }
</style>
