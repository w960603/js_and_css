<template>
	  <section class="pd120" id="experience">
        <div class="wrap">
            <h2 class="general">我的经历</h2>
          <div>
            <h2 class="sub-title">教育经历</h2>
            <exp-list :expList="eduExp" :icon="eduIcon"></exp-list>
            <h2 class="sub-title">工作经验</h2>
            <exp-list :expList="jobExp" :icon="jobIcon"></exp-list>
            <h2 class="sub-title">获奖情况</h2>
            <exp-list :expList="awordExp" :icon="awordIcon"></exp-list>
          </div>
        </div>
    </section>
</template>

<script>
  import expList from './expList'
	export default {
    components:{
      expList,
    },
		data() {
			return {
        jobIcon:'icon-gongzuobao',
        eduIcon:'icon-zhishi',
        awordIcon:'icon-bisai',
        jobExp:[
          {
            job:'兼职测试实习生',
            time:'2017年2月-2018年5月',
            company:'杭州讯霸科技有限公司',
            detail:"细心地你可能会发现我的工作时间与下面的有点冲突了, 没错,因为我中途因为想试试从事专业相关工作而去了中粮包装实习,但结果并不是很喜欢,所以后来应原公司老板之邀回去兼职做原来的工作,并且抽出一半时间来学习前端的知识."
          },
          {
            job:'中粮包装实习生',
            time:'2017年12月-2018年1月',
            company:'杭州中粮包装',
            detail:"当时在中粮包装做轮岗实习生, 每天在工厂里做着一成不变而且是任何人都可以替代的工作. 感觉这不绝是我未来想要做的, 就想着从事一下更具技术性的岗位, 这也是我决定要从事互联网行业的一个契机吧"
          },
        ],
        eduExp:[
          {
            job:'潭州在线教育',
            time:'2018年3月-至今',
            company:'潭州教育',
            detail:"我在去年年底是接触到了基于HTML的网页开发, 然后就被这门语言吸引了; 通过代码能在电脑上写出美丽的页面, 对于一个从小喜欢技术,同时又学过一些设计的我来说,简直就是为我而设计的职业方向;所以在进一步了解了前端这个职业后,我就决定深入学习前端的各方面语言,所以就再网上找到了这个在线教育平台,来学习."
          },
          {
            job:'学士学位',
            time:'2014年9月-2018年6月',
            company:'浙江科技学院',
            detail:"我的专业是包装工程, 专业从事设计方向, 主要课程包括PhotoShop, Rhinoceros, SolidWorks, CorelDRAW等设计课程,还有包括包装材料,包装机械设计,包装管理等理论课程. 大一时还学过一点C语言,CAD等课程."
          },
        ],
        awordExp:[
          {
            job:'中国绿色包装三等奖',
            time:'2017年6月',
            company:'中国绿色环保包装大赛',
            detail:"这个奖项的作品是一个我自己设计的用于冷链运输的包装箱"
          },
          {
            job:'世界包装之星入围奖',
            time:'2017年4月',
            company:'世界学生之星',
            detail:"这个奖项的作品是我与同学合作设计的用于易碎品的运输包装;"
          },
          {
            job:'校大学生校园心理情景剧第二名',
            time:'2016年6月',
            company:'浙江科技学院',
            detail:"虽然是说第二名, 但其实与第一名差不多, 因为第一名是校话剧社."
          },
        ]
      }
		}
	}
</script>

<style>
    #experience{
      background-color: #eee;
    }
    .general{
      color: #065FBB;
      font-size: 30px;
      text-align: center;
    }
    .sub-title{
      position: relative;
      padding: 40px 0;
      color: #065FBB;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
    .sub-title:before{
      content:'';
      position: absolute;
      bottom: 30px;
      left: 0;right:0;
      width: 30px;
      height: 3px;
      margin: auto;
      background-color: #065FBB;
    }
</style>
