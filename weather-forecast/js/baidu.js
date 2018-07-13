var aInput = document.getElementsByTagName("input"),
	oForm = document.getElementsByTagName('form')[0],
	oSearchList = document.getElementsByClassName("search-list")[0];

	aInput[0].addEventListener('keyup',function(e){
		requestWord();
		
		//按回车键提交表单
		if (e.keyCode===13){
			oForm.submit();
		}
	});
	
	//获得焦点显示模糊查找数据
	aInput[0].addEventListener('focus',function(){
		requestWord();
		oSearchList.style.display = 'block'
	});
	
	//失去焦点隐藏模糊查找数据
	aInput[0].addEventListener('blur',function(){
		oSearchList.style.display = 'none'
	});
	
	//点击提交按钮提交表单
	aInput[1].addEventListener('click',function () {
		oForm.submit()
	});
	
	//通过jsonp请求数据
	function requestWord(){
		var _script = document.createElement('script');
		var val = aInput[0].value;
		
		_script.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+val+'&cb=query&_='+new Date().getTime();
		document.body.appendChild(_script);
		
		_script.onload=function(){
			_script.parentNode.removeChild(this)
		};
	}
	
//处理jsonp返回的数据,query为自己取得返回值的函数名
	  function query(data){
		
		oSearchList.innerHTML='';
		 for (var i=0;i<data.s.length;i++){
			 if(data.s[i]&&aInput[0].value){
				var li = document.createElement('li');
				li.innerHTML = data.s[i];
				li.onclick = function(){//点击模糊查找的数据,将搜索框的内容替换为该数据
					aInput[0].value = this.innerHTML;
					oForm.submit();
				};
				oSearchList.append(li);
			}
		}
	}