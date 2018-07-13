var oAccor = document.getElementById("accordion"),
	aAccorLi = oAccor.getElementsByTagName("li"),
	index=0;

for (var i = 0; i < aAccorLi.length; i++) {
	aAccorLi[i].index = i;
	aAccorLi[i].onclick = function () {
		var that = aAccorLi[index];
		animation(that,"width",60,25);
		animation(that.getElementsByTagName("div")[0],"top",300,8);
		animation(that.getElementsByClassName("name")[0],"opacity",1,.1);
		animation(that.getElementsByClassName("describe")[0],"opacity",0,.1);
		
		index = this.index;
		animation(this,"width",1000,25);
		animation(this.getElementsByTagName("div")[0],"top",600,8);
		animation(this.getElementsByClassName("name")[0],"opacity",0,.1);
		animation(this.getElementsByClassName("describe")[0],"opacity",1,.1);
		
		
		
	}
	
}



//速度版运动框架
function animation(ele,attr,value,step,callback){
	var start = parseFloat(getComputedStyle(ele)[attr]);
	var bool = start>value;
	var em = "px";
	bool && (step*=-1);
	(function fn() {
		if (bool?(start<=value):(start >= value)) {
			start = value;
			if (attr === "opacity") {
				em = "";
			}
			ele.style[attr]=start + em;
			callback&&callback.call(ele);
		}else{
			start += step;
			if (attr === "opacity") {
				em = "";
			}
			ele.style[attr]=start + em;
			requestAnimationFrame(fn);
		}
	})();
}