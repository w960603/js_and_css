function animation(ele,attr,value,step,callback){
    var start = parseFloat(getComputedStyle(ele)[attr]);
    var bool = start>value;
    bool && (step*=-1);
    (function fn() {
        if (bool?(start<=value):(start >= value)) {
            start = value;
            ele.style[attr]=start + "px";
            callback&&callback.call(ele);
        }else{
            start += step;
            ele.style[attr]=start+"px";
            requestAnimationFrame(fn);
        }
    })();
}}