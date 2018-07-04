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
          <span class=" sale-left">产品类型: </span>
          <div class=" sale-right">
            <select name="" id="">
              <option value="" v-for="item in types">{{item}} </option>
            </select>
          </div>
        </div>
        <div class="duration sale-list">
          <span class=" sale-left">有效时间:</span>
          <div class="type sale-right">
                      <span class="time" v-for="(item,index) in duration" :key="index" :class="{'active':index===durationNum}" @click="change2(index)" >
                          {{item}}
                      </span>
          </div>
        </div>
        <div class="version sale-list">
          <span class=" sale-left">产品版本:</span>
          <div class="type sale-right">
            <span class="time" v-for="(item,index) in versions" :key="index" :class="{'active':index===versionNum}" @click="change1(index)">
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
      <div class="bottom-ins">
        <div v-for="items in subInstructions">
            <h3>{{items.title}}</h3>
            <p  v-for="item in items.list">{{item}}</p>
        </div>
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
      }
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
        types:[
          '入门版',
          '中级班',
          '高级版',
        ],
        versions:[
          '客户版',
          '代理商版',
          '专家版'
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
        duration:['半年','一年','两年'],
        price:567,
        totalPrice:0,
        descript:"是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的",
        instructions:'网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。',
        subInstructions:{
          subList1:{
            title:'用户行为指标',
            list:[
                '用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：',
              '用户在网站的停留时间；',
              '用户来源网站（也叫“引导网站”）；',
              '用户所使用的搜索引擎及其关键词；',
              '在不同时段的用户访问量情况等。'
            ]
          },
          subList2:{
            title:'用户行为指标',
            list:[
              '用户上网设备类型',
              '用户浏览器的名称和版本',
              '访问者电脑分辨率显示模式',
              '用户所使用的操作系统名称和版本',
              '用户所在地理区域分布状况等'
            ]
          }
          
      }
      }
      
    }
  }
</script>

<style lang='scss' scoped>

</style>
