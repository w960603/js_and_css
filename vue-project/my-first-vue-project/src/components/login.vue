<template>
  <div class="form">
    <form action="">
      <div class="user">
        <div class="user-name">用户名:</div>
        <input type="text" class="input-name" placeholder="请输入邮箱" v-model="userName">
        <span class="check" :class="{'passed': user.status }">{{user.errorText}}</span>
      </div>
      <div class="password">
        <div class="pwd">密码:</div>
        <input type="password" class="input-pwd" placeholder="请输入6-12位密码" v-model="password">
        <span class="check" >{{pwd.errorText}}</span>
      </div>
    </form>
    <div class="login" @click="login(showError)">登录</div>
    <p v-if="onerror" class="error">{{showError}}</p>
  </div>
</template>

<script>
	export default {
		data() {
			return {
			  userName: '',
        password: '',
        check:'',
        onerror:false,
        error:'',
      }
		},
    computed:{
		    user(){
          var reg=/^\w+@\w+.com$/;
          var errorText,status;
          if(!reg.test(this.userName)){
            status=false;
            errorText='请输入正确的邮箱';
          }else{
            status=true;
            errorText='√';
          }
          if (!this.userName) {
            errorText='';
          }
          return {errorText,status}
        },
        pwd(){
          var reg=/^[\w]{6,12}$/;
          var errorText,status;
          if(!reg.test(this.password)){
            status=false;
            errorText='请输入6-12位密码';
          }else{
            status=true;
            errorText='';
          }
          if (!this.password) {
            errorText='';
          }
          return {errorText,status}
        },
        showError(){
          if( this.user.status&&this.pwd.status){
            this.onerror=false;
            
          }else{
            this.onerror=true;
            return this.error="用户名或密码输入有误,请重新输入"
          }
        }
    },
    methods:{
        login(){
          if( this.user.status&&this.pwd.status){
            console.log(2);
            this.$emit("success-log")
          }else{
            this.onerror=true;
          }
        }
    }
	}
</script>

<style lang='scss' scoped>
    .check{
      display: inline-block;
      text-indent: 1em;
      color: red;
    }
    .passed{
      color: lawngreen;
    }
    .error{
      padding: 10px 50px;
      color: red;
    }
</style>
