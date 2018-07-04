<template>
	<div class="banner">
        <transition-group  name="banner" tag="ul" class="pic">
                <li v-for="(item,index) in pics" v-show="index===num" :key="index">
                  <router-link :to="item.url"><img :src="item.src" alt=""></router-link>
                </li>
        </transition-group>
      <p class="ban-bottom">第 <span>{{num+1}}</span> 张</p>
      <ul class="button">
          <li @click="goto(pre)">&lt;</li>
          <li v-for="(item,index) in pics" @click="goto(index)"><span  :class="{'on': index===num}">{{index}}</span></li>
          <li @click="goto(next)">&gt;</li>
      </ul>
  </div>
</template>

<script>
	export default {
	  props:{
      delay:{
        type: Number,
        default: 1000
      }
    },
	  data(){
	    return{
	      mag: 'sadfasdf',
        num:0,
        pics: [
	        {
            src: require('../assets/slideShow/pic1.jpg'),
            url: '/detail/count'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            url: '/detail/forecast'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            url: '/detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            url: '/detail/publish'
          }
        ],
        intv:0 ,
      }
    },
    computed:{
	    pre(){
	      if (this.num === 0) {
	        return this.pics.length-1;
        }else{
	         return this.num -1;
        }
      },
      next(){
        if (this.num === this.pics.length-1) {
          return 0;
        }else{
          return this.num + 1;
        }
      }
    },
    methods:{
	    goto(index){
        this.num=index;
      },
      interval(){
	      this.intv=setInterval( ()=>{
	        this.goto(this.next);
	        this.$emit("onchange")
        },this.delay)
      }
    },
    mounted(){
	    this.interval()
    }
  }
</script>

<style lang='scss' scoped>
      .banner-enter-active{
        transition:all .5s;
      }
      .banner-leave-active{
        transition:all .5s;
        transform:translateX(-900px);
      }
      .banner-enter{
        transform:translateX(900px);
      }
      .banner{
          overflow: hidden;
          position: relative;
          width: 900px;
          height: 506px;
          margin: 15px 0;
          background-color: #fff;
          color: #fff;
          line-height:  30px;
        .pic{
          width: 100%;
          height: 100%;
          li{
            position: absolute;
            width: 100%;
            height: 100%;
            a{
              display: block;
              width: 100%;
              height: 100%;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .ban-bottom{
          position: absolute;
          left:0;bottom:0;
          z-index:5;
          width: 100%;
          height: 30px;
          background-color: rgba(0,0,0,.3);
          font-size: 12px;
          text-indent: 2em;
        }
        .button{
          display: inline-block;
          position: absolute;
          right:0;
          bottom: 0;
          z-index:5;
          height: 30px;
          li{
            float: left;
            padding: 0 5px;
            font-size: 12px;
            cursor:pointer;
            span.on{
              border-bottom: 1px solid #fff;
            }
          }
        }
      }
</style>
