<template>
    <div class="detail-wrap clearfix">
        <div class="left">
            <div>
              <img :src="nowPic" alt="" >
              <ul>
                <router-link  v-for="(item ,index) in products" :key="index" tag='li'  :to='{path: item.path}' active-class="active">
                    {{item.name}}
                </router-link>
              </ul>
            </div>
        </div>
        <div class="right">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
 
 
	export default {
	    data(){
          return{
            imgSrc:{
              '/detail/count': require("../assets/images/1.png"),
              '/detail/forecast': require("../assets/images/2.png"),
              '/detail/analysis': require("../assets/images/3.png"),
              '/detail/publish': require("../assets/images/4.png")
            },
            products: [
              {
                name: '数据统计',
                path: 'count',
                icon: require('../assets/images/1.png'),
                active: false
              },
              {
                name: '数据预测',
                path: 'forecast',
                active: false
              },
              {
                name: '流量分析',
                path: 'analysis',
                active: false
              },
              {
                name: '广告发布',
                path: 'publish',
                active: false
              }
            ],
          }
      },
    computed:{
	      nowPic(){
	        return this.imgSrc[this.$route.path]
        },
    },
    
  }
</script>

<style lang='scss' >
    .detail-wrap{
      width: 1200px;
      margin: 20px auto;
        .left{
          float: left;
          width: 200px;
          padding: 20px 0;
          background-color: #fff;
          text-align: center;
          img{
            border-radius:50%;
          }
            ul{
              margin-top: 20px;
              li{
                width: 170px;
                padding: 10px 15px;
                color: #333;
                font-size: 14px;
                text-indent: 10px;
                text-align: left;
                cursor:pointer;
              }
              li.active , li:hover{
                background-color: #56acf0;
              }
            }
        }
        .right{
          float: right;
          width: 980px;
            h2{
              padding: 20px;
              font-size: 20px;
            }
            .description{
              padding:0 20px;
              font-size: 14px;
              text-indent: 2em;
              line-height: 1.8;
            }
            .top{
              width: 100%;
              background-color: #fff;
                .description{
                  padding:10px 20px;
                  color: #999;
                  background-color: #f7fcff;
                }
                .sale-wrap{
                  padding: 30px 20px;
                  .sale-list{
                    padding-bottom: 20px;
                    line-height: 25px;
                    .sale-left{
                      display: inline-block;
                      width: 100px;
                    }
                    .sale-right{
                      display: inline-block;
                      vertical-align: top;
                    }
                    .type {
                      span{
                        display: inline-block;
                        height: 25px;
                        margin-right: 8px;
                        padding: 0 8px;
                        border: 1px solid #e3e3e3;
                        border-radius:3px;
                        cursor:pointer;
                      }
                      span.active{
                        background-color: #56acf0;
                      }
                    }
                  }
                    select {
                      position: relative;
                      height: 25px;
                      border: 1px solid #e7e7e7;
                      border-radius:3px;
                      outline:none;
                      cursor:pointer;
                    }
                  
                  .buy-now{
                    width: 56px;
                    padding: 10px 20px;
                    margin-left: 100px;
                    background-color: #56acf0;
                    color: #fff;
                    border-radius:2px;
                    cursor:pointer;
                  }
                  .buy-quantity{
                      font-size: 0;
                      line-height: 25px;
                      text-align: center;
                    .button{
                      display: inline-block;
                      width: 25px;
                      height: 25px;
                      border: 1px solid #eee;
                      font-size: 16px;
                      vertical-align: top;
                      cursor: pointer;
                    }
                    .button:hover{
                      background-color: #56acf0;
                    }
                    .quantity{
                      width: 30px;
                      height: 25px;
                      border: none;
                      border-top: 1px solid #eee;
                      border-bottom: 1px solid #eee;
                      text-align: center;
                      vertical-align: top;
                      outline:none;
                    }
                  }
                }
            }
            .bottom{
              margin-top: 20px;
              background-color: #fff;
              .table{
                padding: 20px;
                table{
                  width: 100%;
                  border: 1px solid #999;
                  text-align: center;
                  td{
                    padding: 15px;
                    border: 1px solid #eee;
                  }
                }
              }
              .instructions-text{
                padding: 0 20px 20px;
                text-indent: 2em;
                line-height: 1.8em;
              }
              .bottom-ins{
                  padding: 0 20px 20px ;
                  line-height: 1.8em;
                h3{
                  padding: 10px 0;
                  font-size: 20px;
                  font-weight: bold;
                }
                p{
                  text-indent: 2em;
                }
              }
            }
        }
    }
</style>
