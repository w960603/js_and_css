<template>
  <div id="container">
    <!--<my-pop></my-pop>-->
    <my-nav :nav="nav" @goto="goto"></my-nav>
    <my-home id="home" @clicked="goto"></my-home>
    <my-about id="about" @clicked="goto"></my-about>
    <my-exp id="experience"></my-exp>
    <my-project id="project"></my-project>
    
    <my-top @to-top="top" :show="isShow"></my-top>
    <footer class="footer">
      <p>&copy;Designed-By-王泽杰-联系邮箱-wangzejie9663@foxmail.com</p>
    </footer>
  </div>
  
</template>

<script>
import myNav from './components/MyNav.vue'
import myTop from './components/ToTop'
import myHome from './components/Home'
import myAbout from './components/About'
import myExp from './components/Experience'
import myProject from './components/Project'
import myPop from './components/Pop'
export default {
    components:{
      myNav,
      myTop,
      myHome,
      myAbout,
      myExp,
      myProject,
      myPop,
    },
    data(){
      return{
        isShow:false,
        nav:[
          {
            hash: '#home',
            content: '主页',
            active: true,
          },
          {
            hash: '#about',
            content: '关于我',
          },
          {
            hash: '#experience',
            content: '我的经历',
          },
          {
            hash: '#project',
            content: '我的作品',
          },
        ]
      }
    },
    methods:{
      handleScroll(){ //滚动到某一页面时给该页面对应的导航添加类名
        $('section').each(function(){
          var $this = $(this),$window = $(window);
          var minTop =$this.offset().top,
              maxTop = $this.offset().top+$this.height();
          
          if ( $window.scrollTop()>=minTop-1&&$window.scrollTop()<maxTop){
            $('.main-nav a[href="#' + $this.attr('id') + '"]').parent().addClass('active').siblings().removeClass('active')
          }
        });
        this.changeShow();
      },
      changeShow(){
        
        if ($(window).scrollTop() > 300) {
          this.isShow = true;
        }else{
          this.isShow = false;
        }
        return this.isShow
      },
      top(){
        $('html,body').animate({
          scrollTop:0
        },800)
      },
      goto(ele) {
        $('html,body').animate({
          scrollTop: $(ele).offset().top
        }, 500);
      }
    },
    mounted() {
      $(window).on('scroll',this.handleScroll);//监听窗口滚动事件
      document.title='王泽杰的个人网站'
    }
}
</script>

<style>
    #container{
      min-width:1200px;
    }
    section{
      min-height: 400px;
      background-color: rgba(0,0,0,.5);
    }
    .pd120{
      padding: 120px;
    }
    .pd120 .wrap{
      max-width:1000px;
    }
    .footer{
      padding: 15px;
      text-align: center;
      background-color: #eee;
    }
</style>
