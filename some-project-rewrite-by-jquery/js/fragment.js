var aBanner = document.getElementsByClassName("banner")[0],
	aPic = document.getElementsByClassName("pic")[0],
	aPicI = document.getElementsByTagName("i"),
	aBtn = document.getElementsByClassName("btn")[0],
	aPre = aBtn.getElementsByClassName("pre")[0],
	aNext = aBtn.getElementsByClassName("next")[0],
	arr = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg",],
	
	//声明属性
	grid = {
		row : 10,
		column : 10
	},
	iAttr = {
		width : aBanner.offsetWidth / grid.row,
		height : aBanner.offsetHeight / grid.column
	},
	index = 0;

//生成碎片i
for (var i=0 ;i< grid.row;i++){
	for (var j = 0; j < grid.column; j++) {
		var theI = document.createElement("i");
		theI.style.width = iAttr.width+ "px";
		theI.style.height = iAttr.height + "px";
		theI.style.backgroundImage = `url('${arr[index]}')`;
		theI.style.backgroundPosition = `${-j * iAttr.width}px ${-i * iAttr.height}px`;
		aPic.appendChild(theI);
	}
}
//切换上一张
aPre.onclick = function () {
	index--;
	if (index < 0) {
		index = arr.length-1;
	}
	move();
};

//切换下一张
aNext.onclick = function () {
	index++;
	index%=arr.length;
	move();
};
//定义动画函数
function move() {
	for (var i = 0, iL = aPicI.length; i < iL; i++) {
		animation(aPicI[i], {
			left: parseInt(Math.random()* 2 * aBanner.offsetWidth) - aBanner.offsetWidth,
			top: parseInt(Math.random()* 2 * aBanner.offsetHeight) - aBanner.offsetHeight,
			opacity : 0
		}, {
			duration: 1000,
			delay : parseInt(Math.random()*500)
		},function () {
			this.style.backgroundImage = `url(${arr[index]})`;
			animation(this,{
				left: 0,
				top: 0,
				opacity : 1
			}, {
				duration: 1000,
				delay : parseInt(Math.random()*500)
			})
		})
	}
}
