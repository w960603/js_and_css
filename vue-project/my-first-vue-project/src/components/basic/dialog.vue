<template>
  <div class="dialog">
    <div class="cover" @click="cancel()"  v-if="isShow"></div>
        <transition name="drop">
            <div class="dialog-content" v-if="isShow" >
                <span class="cancel" @click="cancel()">X</span>
                <slot>empty</slot>
            </div>
        </transition>
    
  </div>
</template>

<script>
	export default {
	  data(){
	    return {
      }
    },
    props:['isShow'],
    methods:{
	    cancel(){
        this.$emit('on-close')
      }
    },
  }
</script>

<style lang='scss'>
  
    .drop-enter-active{
      transition:all .5s;
      transform:translateY(0);
    }
    .drop-leave-active{
      transition:all .5s;
      transform:translateY(-500px);
    }
    .drop-enter{
      transform:translateY(-500px);
    }
    
    .dialog{
        position: fixed;
        z-index:10;
        width: 100%;
        height: 100%;
        .cover{
          position: fixed;
          top:0;left:0;
          z-index: 10;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.2)  ;
        }
        .dialog-content{
          position: fixed;
          left: 50%;top:20%;
          z-index: 10;
          overflow:auto;
          width: 50%;
          max-height: 60%;
          margin-left: -25%;
          padding: 2%;
          border:2px solid #bbb;
          background-color: #fff;
          .cancel{
            position: absolute;
            top:5px;right:10px;
            cursor:pointer;
          }
        }
    }
  .form{
    font-size: 16px;
    .user , .password , .login{
      margin-top: 20px;
    }
    .user .user-name, .password .pwd{
        display: inline-block;
        width: 60px;
    }
    .user .input-name , .password .input-pwd{
      display: inline-block;
      width: 250px;
      height: 26px;
      text-indent: 1em;
    }
    .login{
      width: 60px;
      height: 30px;
      margin-left: 130px;
      background-color: #56acf0;
      color: #fff;
      line-height: 30px;
      text-align: center;
      border-radius:3px;
      cursor: pointer;
    }
  }
  
</style>
