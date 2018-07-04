<template>
  <div class="detail-right-wrap">
    <div class="top">
      <h2>数据统计</h2>
      <p class="description">{{descript}}</p>
      <div class="sale-wrap">
        <div class=" sale-list">
          <div class=" sale-left">购买数量:</div>
          <div class="buy-quantity sale-right">
            <span class="less button" @click="less()">-</span>
            <input class="quantity" type="text" :value="count">
            <span class="plus button" @click="plus()">+</span>
          </div>
        </div>
        
        <div class="types sale-list">
          <div class=" sale-left">媒介:</div>
          <div class="type sale-right">
            <span v-for="(item,index) in mediums" :key="index" :class="{'active':index===mediumNum}" @click="change(index)" >{{item}}</span>
          </div>
        </div>
        <div class="duration sale-list">
          <span class=" sale-left">有效时间:</span>
          <div class="time sale-right">
                      <span class="time" v-for="(item,key) in duration" >
                          {{item}}
                      </span>
          </div>
        </div>
        <div class="total-price sale-list">
          <span class="total  sale-left">总价: </span>
          <div class="price sale-right">
            <span>{{changePrice}}元</span>
          </div>
        </div>
        <p class="buy-now">立即购买</p>
      </div>
    </div>
    <div class="bottom">
      <h2 class="instructions">产品说明</h2>
      <p class="instructions-text">{{instructions}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      change(index){
        return this.mediumNum=index;
      },
      less(){
        if (this.count > 0) {
          return this.count--;
        }
      },
      plus(){
          return this.count++;
      },
    },
    computed:{
      changePrice(){
        return this.totalPrice=this.count*this.price;
      }
    },
    data() {
      return {
        count:0,
        mediumNum:0,
        mediums:[
          "纸质报告",
          'pdf',
          '页面报告',
          '邮件',
        ],
        lists:{
          list1:[
            "安全安保",
            '办公文教',
            '彩票',
            '车辆物流',
            '成人用品',
            '出版传媒',
            '电脑硬件',
          ],
          list2:[
            '电子电工',
            '房地产建筑装修',
            '分类平台',
            '服装鞋帽',
            '箱包饰品',
            '化工原料制品',
            '机械设备',
          ],
          list3:[
            '家庭日用品',
            '家用电器',
            '教育培训',
            '节能环保',
            '金融服务',
            '礼品',
            '旅游住宿',
          ],
          list4:[
            '美容化妆',
            '母婴护理',
            '农林牧渔',
            '软件',
            '商务服务',
            '生活服务',
            '食品保健品',
          ],
          list5:[
            '手机数码',
            '通讯服务设备',
            '网络服务',
            '医疗服务',
            '游戏',
            '运动休闲娱乐',
            '招商加盟',
          ]
        },
        duration:['一年'],
        price:456,
        totalPrice:0,
        instructions:'2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。 关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。',
        descript:"未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。"
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
