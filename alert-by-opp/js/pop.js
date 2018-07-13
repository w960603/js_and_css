

var oBtn = document.getElementById('btn');
var data = {
	title:[
		'面向对象',
	],
	content:[
		'面向对象编程是用抽象方式创建基于现实世界模型的一种编程模式。它使用先前建立的范例，包括模块化，多态和封装几种技术。今天，许多流行的编程语言（如Java，JavaScript，C＃，C+ +，Python，PHP，Ruby和Objective-C）都支持面向对象编程（OOP）。',
		'面向对象程序设计的目的是在编程中促进更好的灵活性和可维护性，在大型软件工程中广为流行。凭借其对模块化的重视，面向对象的代码开发更简单，更容易理解，相比非模块化编程方法 1, 它能更直接地分析, 编码和理解复杂的情况和过程。'
	]
};

oBtn.addEventListener("click", function(){
	
	//生成背景
	var wrap = new Pop({
		top:0,
		right:0
	});
	wrap.getDom().className = 'wrap';
	wrap.appendDom(document.body);
	wrap.animation({
		opacity:.2
	},{
		duration:300
	});
	
	//生成弹窗
	var dom = new Pop({
		width: 0,
		height: 0,
		top:50,
		left:500
	});
	var node = dom.getDom();
	node.className = 'pop';
	dom.appendDom(document.body);
	node.innerHTML = `
			<!--<div class="close">X</div>-->
			<h2 class="alert">${data.title[0]}</h2>
			<p>${data.content[0]}</p>
			<p>${data.content[1]}</p>
		`;
	dom.animation({
		width: 600,
		height: 5,
	},{
		duration:300,
	},function(){
		dom.animation({
			height:200
		},{
			duration:500
		})
	});
	var close = document.getElementsByClassName('wrap')[0];
	close.addEventListener('click',function(){
		dom.animation({
			height:0,
			opacity:.5
		},{
			duration:500
		},function(){
			dom.removeDom()
		});
		wrap.animation({
			opacity:0
		},{
			duration:500
		},function(){
			wrap.removeDom();
		});
	});
	
	
});

function Pop(ini,tag){
	this.tag = tag||"div";
	
	this.width = ini?ini.width +'px': 'auto' ;
	this.height = ini?ini.height +'px': 'auto' ;
	this.top = ini?ini.top +'px': '';
	this.left =  ini?ini.left +'px': '';
	this.right =  ini?ini.right +'px': '';
	this.bottom =  ini?ini.bottom +'px': '';
	
	this.createDom = function(){
		
		this.dom = document.createElement(this.tag);
		
		this.dom.style.width = this.width ;
		this.dom.style.height = this.height ;
		this.dom.style.top = this.top ;
		this.dom.style.left = this.left;
		this.dom.style.right = this.right;
		this.dom.style.bottom = this.bottom;
	};
	
	this.createDom();
}
Pop.prototype = {
	constructor : Pop ,
	animation : function(attr,time,callback){
		animation(this.dom,attr,time,callback)
	},
	appendDom : function(parent){
		this.parent = parent;
		this.parent.appendChild(this.dom)
	},
	removeDom : function(){
		this.dom&&this.parent.removeChild(this.dom)
	},
	getDom : function(){
		return this.dom
	}
};