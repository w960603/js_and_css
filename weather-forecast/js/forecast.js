/*
*天气预报的js脚本
 */
    var oContent = document.getElementsByClassName('content')[0];
    var oSearch = document.getElementsByClassName('submit')[0];
    
    //页面加载完时获取一次天气
    window.addEventListener('load',function(){
	    var val = returnCitySN.cname||'杭州'; //获取客户端所在地的省会的天气,如果没有就使用'杭州市'的天气
        requestWeather(val);
    });

    //点击搜索或者按回车搜索天气
    oSearch.addEventListener('click',function(){
        var val = oContent.value;
        requestWeather(val);
    });
    oContent.addEventListener('keydown',function(e){
        if (e.keyCode===13) {
            var val = oContent.value;
            requestWeather(val);
        }
    });

//请求天气
    function requestWeather(val){
        if (val) {
            ajax({
                type: 'post',
                url: 'http://route.showapi.com/9-2',
                data: {
                    //"showapi_timestamp": formatterDateTime(),
                    "showapi_appid": '69142', //这里需要改成自己的appid
                    "showapi_sign": '3db85b6ca1a945108d395a3d857977eb',  //这里需要改成自己的应用的密钥secret
                    "area":val,
                    'needMoreDay': '1',
                },
                success: function(result){
                    if (result.showapi_res_body.ret_code) {
                        return alert('请输入正确的地名')
                    }
                    dealResult(result);
                },
            });
        }
    }

//请求成功后处理页面
    function dealResult(result){
        //console.log(result) //console变量在ie低版本下不能用
        var res = result.showapi_res_body;
        var oProvince = document.getElementsByClassName('province')[0],
            oCity = document.getElementsByClassName('city')[0],
            oDistrict = document.getElementsByClassName('district')[0],
            oUpdateTime = document.getElementsByClassName('update-time')[0],
            oNowWeather = document.getElementsByClassName("now-weather")[0],
            oNowTemp = oNowWeather.getElementsByClassName("now-temp")[0],
            oWeather = oNowWeather.getElementsByClassName('today-weather')[0],
            oWeatherList = document.getElementsByClassName('weather-list')[0];

			//搜索的城市及省份
			
			oProvince.innerHTML = res.cityInfo.c7;
			oCity.innerHTML = res.cityInfo.c5;
			oDistrict.innerHTML = res.cityInfo.c3;

			//当前日期
            var aDate = document.getElementsByClassName('date')[0].getElementsByTagName('span');
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
	
            aDate[0].innerHTML = year;
            aDate[1].innerHTML = month;
            aDate[2].innerHTML = day;
	
	
	
	    //数据更新时间
            oUpdateTime.innerHTML = res.now.temperature_time;

			//当前气温及天气
            oNowTemp.innerHTML = res.now.temperature;
            oWeather.innerHTML = res.now.weather;

			//获取7天的天气,并按顺序排好放到数组里
            var arr = [];
            for (var key in res) {
                var str = key.match(/^f(\d+)/);
	            console.log(str);
	            if (str) {
                    arr[str[1]-1] = res[key];
                }
            }

			//循环生成七天的天气
            oWeatherList.innerHTML = '';
            for (var i = 0, iL = arr.length ; i < iL ; i++){
                var dom = document.createElement('li');
                var weekday = ['周一','周二','周三','周四','周五','周六','周日'];
                 month = arr[i].day.slice(4,6);
                 day = arr[i].day.slice(6,8);

                dom.innerHTML = `
                    <h3 class="week">${weekday[i]}</h3>
                    <p class="day-weather">${arr[i].day_weather}</p>
                    <div class="img">
                        <img src="${arr[i].day_weather_pic}">
                    </div>
                    <p class="temp">
                        <span class="high-temp">${arr[i].day_air_temperature}</span>°~
                        <span class="low-temp">${arr[i].night_air_temperature}</span>°
                    </p>
                    <div class="img">
                        <img src="${arr[i].day_weather_pic}">
                    </div>
                    <p class="night-weather">${arr[i].night_weather}</p>
                    <p class="date"><span>${month}</span>/<span>${day}</span></p>
                `;
                if (i===0) {
                    dom.classList.add('on');
                }
                oWeatherList.append(dom);
            }
    }
