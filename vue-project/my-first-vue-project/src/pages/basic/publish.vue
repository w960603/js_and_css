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
        <div class="area sale-list">
          <span class=" sale-left">行业: </span>
          <div class=" sale-right">
            <select name="" id="">
              <option value="" v-for="item in industry">{{item}} </option>
            </select>
          </div>
        </div>
        <div class="types sale-list">
          <div class=" sale-left">产品版本:</div>
          <div class="type sale-right">
            <span v-for="(item , index) in version" :key="index" :class="{'active':index===versionNum}" @click="change1(index )">{{item}}</span>
          </div>
        </div>
        
        <div class="duration sale-list">
          <span class=" sale-left">有效时间:</span>
          <div class="time sale-right">
                      <span class="time" v-for="(item,index) in duration" :key="index" :class="{'active':index===durationNum}" @click="change2(index)">
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
      <p class="description">{{descript}}</p>
      <div class="table">
        <table>
          <tr v-for="items in lists">
            <td v-for="item in items">{{item}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      change1(index){
        return this.versionNum=index;
      },
      change2(index){
        return this.durationNum=index;
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
      },
    },
    data() {
      return {
        count:0,
        versionNum:0,
        durationNum:0,
        color:{
          red: "红色版",
          green: '绿色版',
          purple: '紫色版',
        },
        industry:['出版业','媒体','金融','互联网','游戏'],
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
        duration:['半年'],
        price:678,
        totalPrice:0,
        version:[ '初级版','中级版','高级版','专家版'],
        descript:"广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。"
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
