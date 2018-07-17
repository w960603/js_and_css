<template>
	  <section id="about" class="pd120">
      <div class="wrap">
        <div class="about-top">
          <h2 class="general">让我来简单介绍一下我自己</h2>
          <div class="brief-intro clearfix">
            <img src="../assets/images/myself.png" alt="">
            <div class="content">
              <p>我叫王泽杰,一个初出茅庐的小码农,从接触到前端到现在,已经有半年多了,别看我接触的时间不是很长,但是我觉得我的技能掌握的是不错的>w<.
              </p>
              <p>
                这个网站从服务器搭建到页面搭建都是全部有我自己来完成的.网页的搭建我使用了Vue加jQuery,还有一小部分的Element-UI,我尽量把自己所会的技能都体现到这中间.
              </p>
            </div>
            
          </div>
        </div>
        <div class="about-content clearfix">
          <div class="left-aside">
            <h2>详细信息</h2>
            <ul class="introduction">
              <li v-for="item in introduction">
                <h3>{{item.title}}</h3>
                <p>{{item.detail}}</p>
              </li>
            </ul>
          </div>
          <div class="right-aside">
              <h2>掌握的技能</h2>
            <ul>
              <li v-for="item in skill">
                <span>{{item.name}}</span>
                <el-progress :percentage="item.degree" :show-text="false" :text-inside="true" color="rgba(142, 113, 199, 0.7)" :stroke-width="18" >{{item.name}}</el-progress>
              </li>
            </ul>
          </div>
        </div>
        <div class="my-project" @click="clicked('#project')">
          你想要查看我的作品?
        </div>
      </div>
    </section>
</template>

<script>
	export default {
		data() {
			return {
        introduction:[
          {
            title:'全名: ',
            detail:'王泽杰'
          },
          {
            title:'出生日期: ',
            detail:'1996年06月03日'
          },
          {
            title:'联系电话: ',
            detail:'17826806840'
          },
          {
            title:'工作: ',
            detail:'自由职业,前端小码农'
          },
          {
            title:'网站: ',
            detail:'www.wangzejie.com'
          },
          {
            title:'邮箱: ',
            detail:'wangzejie9663@foxmail.com'
          },
        ],
        skill:[
          {
            name:'HTML+CSS : ',
            degree: 85
          },
          {
            name:'JavaScript : ',
            degree: 81
          },
          {
            name:'vue : ',
            degree: 73
          },
          {
            name:'JQuery : ',
            degree: 72
          },
          {
            name:'PhotoShop : ',
            degree: 84
          },
          {
            name:'Rhinoceros : ',
            degree: 86
          },
        ]
      }
		},
    methods:{
		  clicked(ele){
		    this.$emit('clicked',ele)
      }
    }
	}
</script>

<style>
    #about{
      background-color: #f7f7f7;
    }
    .wrap{
      max-width: 1000px;
      margin: auto;
      color: #333;
    }
    .about-top{
      max-width: 700px;
      margin: 0 auto 3rem;
    }
    .about-top p{
      color: #333;
      line-height: 1.6em;
    }
    .general{
      margin-bottom: 40px;
      color: #065FBB;
      font-size: 30px;
      text-align: center;
    }
    .about-top .brief-intro img {
      display: block;
      float: left;
      margin-left: 10px;
      padding: 20px 10px;
      border-radius:50%;
    }
    .about-top .brief-intro .content {
      float: left;
      width: 500px;
      margin-left: 60px;
      text-indent: 2em;
    }
    .about-content{
      padding: 30px 0;
    }
    .about-content h2{
      padding-bottom:30px;
      font-size: 20px;
    }
    .about-content .left-aside{
      float: left;
      width: 340px;
      padding: 0 40px 0 60px;
      line-height: 1.8em;
    }
    .about-content .left-aside li{
      padding-bottom: 10px;
    }
    .about-content .left-aside h3{
      color: #888;
      letter-spacing: .5em;
    }
    .about-content .left-aside p{
      color: #065FBB;
      text-indent: .5em;
      letter-spacing: .1em;
    }
    .about-content .right-aside {
      float: left;
      width: 50%;
    }
    .about-content .right-aside li{
      padding-bottom: 20px;
    }
    .about-content .right-aside span{
      line-height: 1.8em;
    }
    .el-progress-bar__outer{
      background-color: #ddd;
    }
    .my-project{
      width: 200px;
      height: 60px;
      margin: 0 auto;
      border: 3px solid #444;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
      transition:.8s;
    }
    .my-project:hover{
      background-color: #444;
      color: #fff;
    }
</style>
