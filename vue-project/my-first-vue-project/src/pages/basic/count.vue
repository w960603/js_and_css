<template>
  <div class="detail-right-wrap">
      <div class="top">
          <h2>数据统计</h2>
          <p class="description">{{descript}}</p>
          <div class="sale-wrap">
            <div class="duration sale-list">
              <span class=" sale-left">产品类型:</span>
              <div class="type sale-right">
                <span class="time" v-for="(item,index) in color" :key="index" :class="{'active':index===colorNum,'on':index===0}" @click="changeColor(index)" >
                    {{item}}
                </span>
              </div>
            </div>
              <div class="area sale-list">
                  <span class=" sale-left">地区: </span>
                  <div class=" sale-right">
                    <select name="" id="">
                      <option value="index" v-for="(item,index) in areas" @click="changeArea(index)">{{item}} </option>
                    </select>
                  </div>
              </div>
            
            <div class="duration sale-list">
              <span class=" sale-left">有效时间:</span>
              <div class=" sale-right">
                      <span class="time" v-for="(item,index) in duration" @click="changeDuration(index)">
                          {{item}}
                      </span>
              </div>
            </div>
              <div class="total-price sale-list">
                  <span class="total  sale-left">总价: </span>
                  <div class="price sale-right">
                    <span>{{totalPrice}}元</span>
                  </div>
              </div>
              <p class="buy-now" @click="[buyNow(),confirmList()]" >立即购买</p>
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
    <my-dialog :is-show="isBankShow" @on-close="close('isBankShow')">
      <table>
        <tr class="title">
          <td v-for="item in buyTitle">{{item}}</td>
        </tr>
        <tr class="content">
          <td v-for="item in buyList">{{item}}</td>
        </tr>
      </table>
      <h3 class="pay">请选择支付方式</h3>
      <bank-choose></bank-choose>
      <div class="buy" @click="confirmBuy()"> 确认购买</div>
    </my-dialog>
    <my-dialog :is-show="isConfirmShow" @on-close="close('isConfirmShow')">
      <confirm-buy @on-close="showSuccess()"></confirm-buy>
    </my-dialog>
    <my-dialog :is-show="isSuccessBuyShow" @on-close="close('isSuccessBuyShow')">
      <success-buy></success-buy>
    </my-dialog>
  </div>
</template>

<script>
  import myDialog from '../../components/basic/dialog.vue'
  import bankChoose from '../../components/basic/bankChoose.vue'
  import confirmBuy from '../../components/basic/confirmBuy.vue'
  import successBuy from '../../components/basic/successBuy.vue'
	export default {
    components:{
      myDialog,
      bankChoose,
      confirmBuy,
      successBuy
    },
    data(){
      return {
        isBankShow: false,
        isConfirmShow : false,
        isSuccessBuyShow:false,
        colorNum: 0,
        areaNum: 0,
        durationNum : 0,
        color:["红色版",'绿色版','紫色版',],
        buyTitle:[
          '产品类型','地区','有效时间','总价'
        ],
        areas:['北京','上海','杭州','武汉','成都','深圳'],
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
        totalPrice:700,
        descript:"历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。",
        buyList:[],
      }
    },
	  methods:{
      confirmBuy(){
        this.isBankShow=false;
        this.isConfirmShow=true;
      },
	    changeColor(index){
        return this.colorNum=index;
      },
      showSuccess(){
        this.isConfirmShow=false;
        this.isSuccessBuyShow=true
      },
      buyNow(){
	      this.isBankShow=true
      },
      close(attr){
        this[attr]=false;
      },
      changeArea(index){
	      this.areaNum=index;
      },
      changeDuration(index){
	      this.durationNum=index;
      },
      confirmList(){
        var buyList = {
          buyColor : this.color[this.colorNum],
          buyArea : this.areas[this.areaNum],
          buyDuration : this.duration[this.durationNum],
          buyPrice : this.totalPrice
        };
        return this.buyList = buyList;
      }
    },
    computed:{
      changePrice(){
        this.totalPrice= 700
      }
    },
    mounted(){
     console.log(this.buyList);
    },
	}
</script>

<style lang='scss' >
    table{
      width: 100%;
      margin-bottom: 20px;
      text-align: center;
      tr{
        width: 100%;
        height: 30px;
        td{
        
        border: 1px solid #bbb;
        }
      }
      tr.title{
        background-color: #56acf0;
      }
    }
  .pay{
    padding: 5px 0;
    font-size: 16px;
    font-weight: bold;
  }
  .buy{
    width: 80px;
    height: 40px;
    margin-top: 20px;
    background-color: #56acf0;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
</style>
