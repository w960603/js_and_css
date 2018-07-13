/*
 * Tween.js
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
*/
var Tween = {

    //直线运动
    Linear:  function(t, b, c, d) { return c*t/d + b; },

    //二次曲线
    Quad: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c *(t /= d)*(t-2) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t-2) - 1) + b;
        }
    },

    //三次曲线
    Cubic: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t/d - 1) * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
            return c / 2*((t -= 2) * t * t + 2) + b;
        }
    },

    //四次曲线
    Quart: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t*t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c * ((t = t/d - 1) * t * t*t - 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t*t - 2) + b;
        }
    },

    //五
    Quint: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t/d - 1) * t * t * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2*((t -= 2) * t * t * t * t + 2) + b;
        }
    },

    Sine: {
        easeIn: function(t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t/d) - 1) + b;
        }
    },

    Expo: {
        easeIn: function(t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t, b, c, d) {
            return (t==d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t/d - 1) * t) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    Bounce: {
        easeIn: function(t, b, c, d) {
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOut: function(t, b, c, d) {
            if (t < d / 2) {
                return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
                return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }
    }
};



/*
*完整时间版运动框架
* ele: 为元素节点对象
* attr: 为json格式的属性值
* time: 跟时间相关的json数据格式数据
* callback: 回调函数
 */

function animation(ele,attr,time,callback){//动画框架
    var goTime = new Date(),
        startValue = {},
        timingFn = Tween.Linear,
        timingType = ["easeIn","easeOut","easeInOut"];

    if (time.timing){//如果有设置时间;

        //如果有运动曲线那么就把值赋给timingFn(改变默认的运动曲线)
        (Tween[time.timing][timingType[time.timingType]]) && (timingFn = Tween[time.timing][timingType[time.timingType]]) ;
    }

    for (var key in attr) {

            //判断传入的json数据的值是否是对象
        if (typeof attr[key] === "object") {

            //如果是对象就获取该键值保存到startValue
            startValue[key]= attr[key].up.bind(ele,attr[key].start.call(ele,key));

        }else{//如果不是对象
            var start = parseFloat(getStyle(ele)[key]),//获得初始值
                change = parseFloat(attr[key])-start;//总共需要多少

            if (change !== 0) {//判断该变量是否为0
                startValue[key] = {//不为0就保存初始值及该变量
                    start : start,
                    change :change
                }
            }
        }
    }
    cancelAnimationFrame(ele.animaTimer);//关闭前一个动画

    if (time.delay) {//判断是否有延迟

        (function delay(){
            if (new Date().getTime() - goTime >= time.delay) {

                goTime = new Date();//如果延迟时间到了就初始化动画开始时间

                fn();//执行动画
            }else{//如果延迟时长还没到,就继续执行延迟的函数

                ele.animaTimer = requestAnimationFrame(delay);
            }
        })();
    }else{//如果没有设置延迟

        goTime = new Date();//初始化动画时间,(消除延迟所用的时间);

        fn();//执行函数
    }

    function fn(){//动画执行函数
        var now = new Date().getTime() - goTime;//now=动画已经执行的时长

        if ((now / time.duration) >= 1) {//判断动画执行时长是否等于需要的时长

            now = time.duration;//如果执行时间够了就让执行时长等于需要的时长

            setStyle(ele,startValue,now,time.duration,timingFn);//应用动画执行后的最终样式

            callback && callback.call(ele);//执行回调函数
        }else{
            setStyle(ele,startValue,now,time.duration,timingFn);//动画执行一次后应用样式

            requestAnimationFrame(fn);//继续执行
        }
    }
}
function setStyle(ele,attr,now,duration,timingFn){//设置样式的函数
    for (var key in attr){
        if (typeof attr[key] === "function") {
            attr[key](now,duration,key,timingFn);
        }else{
            var em = "px";
            if (key === "opacity") {
                em = "";//如果是opacity属性,就去掉px
            }
            ele.style[key] = timingFn(now,attr[key].start,attr[key].change,duration) + em;//应用动画曲线函数
        }
    }
}

function getStyle(ele){
    return ele.currentstyle || getComputedStyle(ele);
}

