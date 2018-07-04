<template>
    <div class="wrap">
        <div class="header">
            <div class="container">
                <h1>my-project
                    <router-link :to="{path: '/'}" title="返回首页"><img src="../assets/logo.png" alt="返回首页"> </router-link>
                </h1>
                <div class="nav">
                    <span class="right-line" v-if="userInfo!==''">{{userInfo}}</span>
                    <span class="right-line" v-if="userInfo!==''" @click="exit()">退出</span>
                    <span class="right-line" v-if="userInfo===''" @click="logClick()">登录</span>
                    <span class="right-line" v-if="userInfo===''" @click="regClick()">注册</span>
                    <span @click="aboutClick()">关于</span>
                </div>
            </div>
        </div>
        <div class="contents">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
        <div class="footer">
            <p>&copy; build by 王泽杰 ; QQ:903853302</p>
        </div>
      <my-dialog :is-show="isLogShow" @on-close="close('isLogShow')">
          <my-login  @success-log="login('isLogShow')" ref="info"></my-login>
      </my-dialog>
      <my-dialog :is-show="isRegShow" @on-close="close('isRegShow')">
        <my-reg  @clicklog="[close('isRegShow'),logClick()]" ref="info"></my-reg>
      </my-dialog>
      <my-dialog :is-show="isAboutShow" @on-close="close('isAboutShow')">
        <p class="about">{{about}}</p>
      </my-dialog>
    </div>
  
</template>

<script>
  import myDialog from './basic/dialog.vue'
  import myLogin from './login.vue'
  import myReg from './register.vue'
	export default {
    components:{
		  myDialog,
      myLogin,
      myReg,
    },
    data(){
      return {
        isAboutShow: false,
        isLogShow: false,
        isRegShow: false,
        userInfo:'',
        about:'这是我的第一个vue项目,找的网上的项目模仿,算是磕磕碰碰的完成了吧,当然只是看了原项目的大致方案,其他都是用自己的方法来完成的,基本上可以算是独立完成的了----王泽杰.'
      }
    },
    methods:{
      logClick(){
        this.isLogShow=true
      },
      regClick(){
        this.isRegShow=true
      },
      aboutClick(){
        this.isAboutShow=true
      },
      close(attr){
        this[attr]=false;
      },
      login(attr){
        this.close(attr);
        this.userInfo=this.$refs.info.userName;
      },
      exit(){
        this.userInfo=''
      }
    }
	}
</script>

<style lang="scss">
  .about{
    line-height: 1.8em;
    text-indent: 2em;
  }
  body {
    min-width: 1200px;
    background-color: #eee;
    .header {
      width: 100%;
      height: 80px;
      background-color: rgba(0,0,0,.6);
      .container {
        width: 1170px;
        height: 50px;
        margin: 0 auto;
        padding: 15px;
        h1 {
          float: left;
          width: 50px;
          height: 50px;
          font-size: 0;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
  
            }
          }
        }
        .nav{
          float: right;
          height: 100%;
          font-size: 16px;
            span{
              display: inline-block;
              padding: 0 5px;
              color: #eee;
              line-height: 50px;
              cursor: pointer;
          }
        }
      }
    }
    .footer{
      width: 100%;
      height: 60px;
      background-color: #ddd;
      p{
        width: 100%;
        line-height: 60px;
        text-align: center;
      }
    }
  }
</style>
