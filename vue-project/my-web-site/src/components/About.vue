<template>
  <div id="about" class=" col-md-12 clearfix section">
    <div class="wrap ">
      <div class="about-top container-fluid">
        <div class="row">
          <h2 class="general h2 col-xs-10 col-xs-offset-1">让我来简单介绍一下我自己</h2>
          <div class="brief-intro  center-block col-md-12   ">
            <div class="col-md-2  center-block">
              <img src="../assets/images/myself.png" alt="" class="center-block img-circle">
            </div>
            <div class="content col-md-9 col-md-offset-1">
              <p>
                我叫王泽杰,从接触到前端到现在,已经有有大半年了,这段时间多少还是掌握了不少前端技能.
              </p>
              <p>
                这个网站从服务器搭建到页面搭建都是全部有我自己来完成的.网页的搭建我使用了Vue加jQuery,还有一小部分的Element-UI,以及bootstrap,光是网站搭建能展示的并不多,所以有些就放在做过的项目里展示了.
              </p>
            </div>
          
          </div>
        </div>
      </div>
      <div class="about-content clearfix row">
        <div class="left-aside col-md-6 col-xs-10 col-md-offset-0 col-xs-offset-1">
          <h2 class="h4">详细信息</h2>
          <ul class="introduction">
            <li v-for="item in introduction">
              <h3 class="h5">{{item.title}}</h3>
              <p class="h5">{{item.detail}}</p>
            </li>
          </ul>
        </div>
        <div class="right-aside col-md-6 col-xs-10 col-md-offset-0 col-xs-offset-1">
          <h2 class="h4">掌握的技能</h2>
          <ul>
            <li v-for="item in skill">
              <span  class="h5">{{item.name}}</span>
              <el-progress :percentage="item.degree" :show-text="false" :text-inside="true"
                           color="rgba(142, 113, 199, 0.7)" :stroke-width="18">{{item.name}}
              </el-progress>
            </li>
          </ul>
        </div>
      </div>
      <div class="my-project h5" @click="clicked('#project')">
          <span class="center-block">
              你想要查看我的作品?
          </span>
          
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        introduction: [
          {
            title: '全名: ',
            detail: '王泽杰'
          },
          {
            title: '出生日期: ',
            detail: '1996年06月03日'
          },
          {
            title: '联系电话: ',
            detail: '17826806840'
          },
          {
            title: '工作: ',
            detail: '自由职业,前端小码农'
          },
          {
            title: '网站: ',
            detail: 'www.wangzejie.com'
          },
          {
            title: '邮箱: ',
            detail: 'wangzejie9663@foxmail.com'
          },
        ],
        skill: [
          {
            name: 'HTML+CSS : ',
            degree: 85
          },
          {
            name: 'JavaScript : ',
            degree: 81
          },
          {
            name: 'vue : ',
            degree: 73
          },
          {
            name: 'JQuery : ',
            degree: 72
          },
          {
            name: 'PhotoShop : ',
            degree: 84
          },
          {
            name: 'Rhinoceros : ',
            degree: 86
          },
        ]
      }
    },
    methods: {
      clicked(ele) {
        this.$emit('clicked', ele)
      }
    }
  }
</script>

<style>
  #about {
    background-color: #f7f7f7;
      padding:80px 0;
  }
  
  .wrap {
    margin: auto;
    color: #333;
  }
  
  .about-top {
    max-width: 700px;
  }
  
  .about-top p {
    color: #333;
    line-height: 1.6em;
  }
  
  .general {
    margin-bottom: 40px;
    color: #065FBB;
    text-align: center;
  }
  .content{
      text-indent: 2em;
  }
  .about-top .brief-intro {
    margin-bottom: 30px;
  }
  
  .about-content {
      max-width:1000px;
      margin:auto;
    padding: 30px 0;
  }
  
  .about-content h2 {
    padding-bottom: 30px;
    /*font-size: 20px;*/
  }
  
  .about-content .left-aside h3 {
    color: #888;
    letter-spacing: .5em;
  }
  
  .about-content .left-aside p {
    color: #065FBB;
    text-indent: .5em;
    letter-spacing: .1em;
  }
  
  
  .about-content .right-aside li {
    padding-bottom: 20px;
  }
  
  .about-content .right-aside span {
    line-height: 1.8em;
  }
  
  .el-progress-bar__outer {
    background-color: #ddd;
  }
  
  .my-project {
    width: 200px;
    height: 60px;
    margin: 0 auto;
    border: 3px solid #444;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
    transition: .8s;
  }
  
  .my-project:hover {
    background-color: #444;
    color: #fff;
  }
</style>
