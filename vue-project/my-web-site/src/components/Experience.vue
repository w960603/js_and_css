<template>
	  <div class="pd120 col-md-12 section" id="experience">
        <div class="wrap">
            <h2 class="general h2">我的经历</h2>
          <div class="col-md-12 ">
              <h2 class="sub-title">工作经历</h2>
              <exp-list :expList="jobExp" :icon="jobIcon"></exp-list>
            <h2 class="sub-title">教育经历</h2>
            <exp-list :expList="eduExp" :icon="eduIcon"></exp-list>
            <h2 class="sub-title">获奖情况</h2>
            <exp-list :expList="awordExp" :icon="awordIcon"></exp-list>
          </div>
        </div>
    </div>
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
                job:'前端工程师',
                time:'2018年7月-至今',
                company:'杭州慕南电子商务有限公司',
                detail:"这是我作为程序员的第一家公司,所以也是我第一次将理论知识真正的运用到了实际工作中,从工作中,我也了解了我与其他程序员之间的优势和劣势.让我对自身技能水平有了一个比较清晰的了解,当然在工作期间我也对以前了解地更完善了."
            },
          {
            job:'兼职测试实习生',
            time:'2017年2月-2018年5月',
            company:'杭州讯霸科技有限公司',
            detail:"从大三开始到这家公司实习,做硬件测试.期间工作尽心尽责,也为公司做出了不少贡献,替公司较少了不少损失,也受到了公司上下的一直认可.但是期间我也认真思考过未来的打算,所以最终走上了程序员的道路,利用业余时间不断地学习前端知识."
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
