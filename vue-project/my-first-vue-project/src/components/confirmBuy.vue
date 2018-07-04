<template>
	  <div class="confirm-buy">
      <span class="check-status">请检查支付状态!</span>
      <span class="success-status" @click="buy()">支付成功</span>
      <span class="error-status" @click="buy()">支付失败</span>
    </div>
</template>

<script>
	export default {
		data() {
			return {}
		},
    methods:{
		  buy(){
		    this.$emit('on-close')
      }
    }
	}
</script>

<style lang='scss' scoped>
  span{
    font-size: 16px;
    line-height: 40px;
  }
  .check-status ~ span{
    display: inline-block;
    width: 80px;
    height: 40px;
    margin: 0 5px;
    background-color: #56acf0;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
</style>
