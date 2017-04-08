var overAll ={				//主函数体申明，所有东西都封装在这里面
	add:function(obj,type,functi){  //添加事件，函数有三个参数----1.需要操作的函数，2.需要操作的事件，3.要对函数干什么
	if(obj.addEventListener){		//如果可以使用addEventListener，就用这个下面这个
				obj.addEventListener(type,functi,false);	////如果不行，就用下面这个
				}else if(obj.attachEvent){					//这个是IE的添加方式	
					obj.attachEvent("on"+type,functi);		//如果还不行~~咱们用DOM  0级事件吧
					}else{
						obj["on"+type]=functi;				//中括号的意思和X.XXXXXXX是一样的，加on是为了简单的传入数据
				}
	},
	
	remove:function(obj,type,functi){			//这个就是删除事件了·，通添加函数
			if(obj.removeEventListener){				//如果能用这个~那就用这个
				obj.removeEventListener(type,functi,false);
				}else if(obj.detachEvent){				//不行咱们就换下一个，这个是IE用的
					obj.detachEvent("on"+type,functi);
					}else{								//再不行，DOM 0级事件
						obj["on"+type]=functi;
				}
			}
}





function ycc(w,y,z){		//我需要知道是谁被隐藏，是隐藏还是显示？
	if(z){		//true是显示
		document.getElementById(w).style.display ="block";
		document.getElementById(y).style.display ="block";
	}else{
		document.getElementById(w).style.display ="none";
		document.getElementById(y).style.display ="none";
		
	}
	
	
}
