<template>
  <ul class="experience ">
    <li v-for="item in expList" class="clearfix">
      <div class="icon">
        <i class="iconfont" :class="icon"></i>
      </div>
      <div class="left">
        <h3 class="exp-desc">{{item.job}}</h3>
        <p class="time">{{item.time}}</p>
      </div>
      <div class="right">
        <h3 class="company">{{item.company}}</h3>
        <p class="detail">{{item.detail}}</p>
      </div>
    </li>
  </ul>
  
</template>

<script>
	export default {
	  props:['expList','icon'],
		data() {
			return {
			  
      }
		}
	}
</script>

<style scoped>
    .experience{
      position: relative;
    }
    .experience:before{
      content:'';
      display: block;
      position: absolute;
      left:35%;top:0;
      width: 1px;
      height: 100%;
      background-color: #bbb;
      
    }
    .experience li{
      padding: 15px 0;
    }
    .icon {
      display: block;
      position: absolute;
      left: 35%;
      width: 48px;
      height: 48px;
      margin-left: -24px;
      background-color: #333;
      color: #fff;
      text-align: center;
      line-height: 48px;
      border-radius:50%;
    }
    .iconfont{
      font-size: 26px;
    }
    .left{
      float: left;
      width: 35%;
      padding-right: 70px;
      text-align: right;
      box-sizing:border-box;
      line-height: 1.8em;
    }
    
    .experience h3{
       font-size: 20px;
        line-height: 30px;
       font-weight: 600;
     }
    .left p{
      color: #999;
      font-size: 18px;
    }
    .right{
      float: left;
      width: 65%;
      padding-left: 60px;
      box-sizing: border-box;
    }
    .right h3{
      position: relative;
      margin-bottom: 22px;
      padding-bottom: 22px;
    }
    .right h3:after{
      content: '';
      display: block;
      position: absolute;
      bottom:0;left:0;
      width: 60px;
      height: 4px;
      background-color: #bbb;
    }
    .right p{
      color: #666;
      font-size: 16px;
      text-indent: 2em;
      line-height: 30px;
    }
</style>
