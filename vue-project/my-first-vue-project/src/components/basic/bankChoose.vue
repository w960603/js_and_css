<template>
	  <div class="bank-choose">
        <ul class="clearfix">
          <li v-for="(item,index) in banks" :title="item.label" :class="[item.name,{'active':index===nowBank}]" @click="changeBank(index)"></li>
        </ul>
    </div>
</template>

<script>
	export default {
		data() {
			return {
			  nowBank:0,
        banks: [
          {
            label: '招商银行',
            name: 'zhaoshang'
          },
          {
            label: '中国建设银行',
            name: 'jianshe'
          },
          {
            label: '浦发银行',
            name: 'pufa'
          },
          {
            label: '交通银行',
            name: 'jiaotong'
          },
          {
            label: '中国工商银行',
            name: 'gongshang'
          },
          {
            label: '中国农业银行',
            name: 'nongye'
          },
          {
            label: '中国银行',
            name: 'zhongguo'
          },
          {
            label: '中信银行',
            name: 'zhongxin'
          }
        ]
      }
		},
    methods:{
      changeBank(index){
        this.nowBank = index;
      }
    }
	}
</script>

<style lang='scss' scoped>
    .bank-choose{
      width: 100%;
      ul{
        width: 100%;
        li{
          float: left;
          width: 117px;
          height: 32px;
          margin: 5px;
          border: 1px solid #ccc;
          background-image: url(../../assets/banks/banks.png) ;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        li.active{
          border-color: #56acf0;
        }
      }
    }
    .zhaoshang {
      background-position: -2160px 0;
    }
    .jianshe {
      background-position: -720px 0;
    }
    .pufa {
      background-position: -1800px 0;
    }
    .jiaotong {
      background-position: -3120px 0;
    }
    .minsheng {
      background-position: -2760px 0;
    }
    .pingan {
      background-position: -2400px 0;
    }
    .beijing {
      background-position: -960px 0;
    }
    .xingye {
      background-position: 0 0;
    }
    .shanghai {
      background-position: -1560px 0;
    }
    .guangfa {
      background-position: -840px 0;
    }
    .gongshang {
      background-position: -2640px 0;
    }
    .nongye {
      background-position: -1680px 0;
    }
    .guangda {
      background-position: -2280px 0;
    }
    .zhongguo {
      background-position: -2520px 0;
    }
    .zhongxin {
      background-position: -480px 0;
    }
    .chuxu {
      background-position: -120px 0;
    }
    .bnongshang {
      background-position: -1440px 0;
    }
    .huaxia {
      background-position: -2040px 0;
    }
    .snongshang {
      background-position: -2880px 0;
    }

    .baifubao {
      background-position: -1320px 0;
    }
</style>
