<template>
    <div class="index-wrap clearfix">
        <div class="index-left">
          <div class="left-list products">
            <h2 class="title">全部产品</h2>
            <template v-for="items in products" >
              <div class="product-list">
                <h3>{{items.title}}</h3>
                <ul :class="{bdb: !items.hr}">
                  <li v-for="item in items.list">
                    <router-link :to="{path: item.url}">{{item.name}}</router-link>
                    <span v-if="item.hot" class="hot">HOT</span>
                  </li>
                </ul>
              </div>
            </template>
          </div>
          <div class="left-list ">
            <h2 class="title">最新消息</h2>
            <div class="news">
              <template v-for="item in news" >
                      <a :href="item.url"> {{item.name}}</a>
              </template>
            </div>
          </div>
        </div>
        <div class="index-right">
          <v-slide :delay="delay" @onChange="doSomething"></v-slide>
            <div class="board-list">
              <ul  class="clearfix">
                <li v-for="(item,index) in boardList" :class="{'board-right-padding': index%2!==0}" >
                  <div class="img"><img :src="imgSrc[index]" alt=""></div>
                  <div class="content">
                      <h3>{{item.title}}</h3>
                      <p>{{item.description}}</p>
                      <div class="buy">
                          <router-link :to="{path:'/detail/'+item.toKey}">立即购买</router-link>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
    </div>
  
</template>

<script>
  import slide from '../components/slide.vue';
  
	export default {
	  components:{
      "v-slide":slide,
    },
	  data(){
	    return{
	        imgSrc:[
	          require('../assets/images/1.png'),
	          require('../assets/images/2.png'),
	          require('../assets/images/3.png'),
	          require('../assets/images/4.png'),
          ],
	        delay:3000,
	        products:{
	            pc:{
	              title:'PC产品',
                list: [
                  {
                    name: '数据统计',
                    url: '/detail/count'
                  },
                  {
                    name: '数据预测',
                    url: '/detail/forecast'
                  },
                  {
                    name: '流量分析',
                    url: '/detail/analysis',
                    hot:true,
                  },
                  {
                    name: '广告发布',
                    url: '/detail/publish'
                  },
                ]
              },
              app:{
	              title: '手机应用类',
                list: [
                  {
                    name: '微信',
                    url: '/detail/count',
                  },
                  {
                    name: 'QQ',
                    url: '/detail/forecast',
                  },
                  {
                    name: '支付宝',
                    url: '/detail/analysis',
                    hot:true,
                  },
                  {
                    name: '头条',
                    url: '/detail/publish',
                  }
                ],
                hr: true,
              }
          },
          news: [
              {
                name: "最新消息1",
                url:"https://www.baidu.com"
              },
              {
                name: "最新消息2",
                url:"https://www.baidu.com"
              },
              {
                name: "最新消息3",
                url:"https://www.baidu.com"
              },
              {
                name: "最新消息4",
                url:"https://www.baidu.com"
              },
              {
                name: "最新消息5",
                url:"https://www.baidu.com"
              },
              {
                name: "最新消息6",
                url:"https://www.baidu.com"
              },
              {
                name: "最新消息7",
                url:"https://www.baidu.com"
              }
            ],
          boardList: [
            {
              title: '开放产品',
              description: '开放产品是一款开放产品',
              id: 'car',
              toKey: 'count',
              saleout: false
            },
            {
              title: '品牌营销',
              description: '品牌营销帮助你的产品更好地找到定位',
              id: 'earth',
              toKey: 'forecast',
              saleout: false
            },
            {
              title: '使命必达',
              description: '使命必达快速迭代永远保持最前端的速度',
              id: 'loud',
              toKey: 'analysis',
              saleout: true
            },
            {
              title: '勇攀高峰',
              description: '帮你勇闯高峰，到达事业的顶峰',
              id: 'hill',
              toKey: 'publish',
              saleout: false
            }
          ],
          
      }
    },
    methods:{
	    doSomething(){
        console.log('num');
      }
    }
	}
</script>

<style lang="scss" scoped>
  .index-wrap{
      width: 1200px;
      margin: 0 auto;
          .index-left{
              float: left;
                  h2.title{
                    padding: 10px 15px;
                    background-color: #56ACF0;
                    color: #fff;
                    font-size: 16px;
                  }
                  .left-list{
                      width: 270px;
                      margin: 15px;
                      background-color: #fff;
                      
                      h3{
                        margin-top: 15px;
                        padding: 0 15px 5px 15px;
                        font-size: 16px;
                        font-weight: bold;
                      }
                      ul{
                        padding: 10px 15px;
                        li{
                          padding: 5px;
                          font-size: 14px;
                          a{
                            color: #000;
                          }
                          .hot{
                            display: inline-block;
                            width: 10%;
                            height: 5%;
                            background-color: red;
                            color: #fff;
                            font-size: 10px;
                            text-align: center;
                            vertical-align: top;
                          }
                        }
                      }
                      ul.bdb{
                        border-bottom: 1px solid #ddd;
                      }
                      
                      .news{
                        padding: 15px;
                        height: 390px;
                          a{
                            display: inline-block;
                            padding: 10px 5px ;
                            font-size: 14px;
                            color: #333;
                           
                          }
                      }
                  }
            
          }
          .index-right{
            float: left;
              
              .board-list{
                  ul{
                    width: 900px;
                    li{
                        float: left;
                        width: 380px;
                        height: 105px;
                        margin: 0 20px 20px 0;
                        padding: 30px;
                        background-color: #fff;
                        .img {
                          float: left;
                          width: 100px;
                          height: 100px;
                          overflow: hidden;
                          border-radius: 50%;
                          img{
                            display: block;
                            width: 100px;
                            height: 100px;
                          }
                        }
                        .content{
                          float: left;
                          margin-left: 20px;
                            h3{
                              margin-bottom: 10px;
                              font-size: 18px;
                              font-weight: bold;
                            }
                            p{
                              font-size: 14px;
                            }
                            .buy{
                              margin-top: 20px;
                              a{
                                display: block;
                                width: 56px;
                                padding: 0 20px;
                                color: #fff;
                                font-size: 14px;
                                background-color: #56ACF0;
                              }
                            }
                        }
                    }
                    li.board-right-padding{
                      margin-right: 0;
                    }
                  }
              }
          }
  }

</style>
