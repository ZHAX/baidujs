window.onload = function(){
 	
 	var Ddiv3 =document.getElementById("Ddiv3");		
 	var Ddiv2 =document.getElementById("Ddiv2");
	var dinwei =document.getElementById("dinwei");
	var dinying =document.getElementById("dinying");
	var dinyingb=document.getElementById("dinying-b");
	dinwei.onmouseover = function(){
		dinying.style.display = "block";
		dinyingb.style.display = "block";
		Ddiv2.style.zIndex ="2";
		Ddiv3.style.zIndex ="2";
	}
	dinwei.onmouseout = function(){
		dinying.style.display ="none";
		dinyingb.style.display = "none";
		Ddiv2.style.zIndex ="4";
		Ddiv3.style.zIndex ="4";
	}
	//上面是定位下拉菜单
	
	
	
	var dinwMa =document.getElementsByClassName("dinwM-a");
	var dinweip =document.getElementById("dinwei-p");
	var dinwMa =document.getElementsByClassName("dinwM-a");
		for(var i=0;i<dinwMa.length;i++){
			dinwMa[i].onclick =function(){
			var dinZxz =document.getElementsByClassName("dinZ-xz");
			if(dinZxz.length>0){
				dinZxz[0].className ="dinwM-a";	
			}
			this.className ="dinZ-xz";
			dinweip.innerHTML = this.innerHTML;
			if(dinweip.innerHTML.length>2){
				dinwei.style.width ="70px";
				dinyingb.style.width="70px";
			}
			else{
				dinwei.style.width ="60px";
				dinyingb.style.width="60px";
				}
			}
		}
			//上面是定位下拉菜单更换地址界面
		
		
	
	var myJD =document.getElementById("myJD");
	var myJDyc =document.getElementById("myJDyc");
	var myJDycb =document.getElementById("myJDycb");
		myJD.onmouseover=function(){
			myJDyc.style.display ="block";	
			myJDycb.style.display ="block";
			Ddiv2.style.zIndex ="2";
			Ddiv3.style.zIndex ="2";
		}
		myJD.onmouseout=function(){
			myJDyc.style.display ="none";	
			myJDycb.style.display ="none";	
			Ddiv2.style.zIndex ="4";
			Ddiv3.style.zIndex ="4";
		}
		//上面是我的京东下拉菜单
		//——————————————————————————————————————————————————————————————————
		//上面都是dom0级事件，懒得改，将就用吧%………………
		//——————————————————————————————————————————————————————————————————
		
		
		var myKh =document.getElementById("myKh"); 
		overAll.add(myKh,"mouseover",function(){myKhfun(1)});
		overAll.add(myKh,"mouseout",function(){myKhfun(2)});
		//我的客户
		
		var myDh =document.getElementById("myDh");
		overAll.add(myDh,"mouseover",function(){myDhfun(1)});
		overAll.add(myDh,"mouseout",function(){myDhfun(2)});
		//导航
		
		var sousk = document.getElementById("sousk");
		overAll.add(sousk,"focus",function(){souskfun(1)});
		overAll.add(sousk,"blur",function(){souskfun(2)});
		//搜索框点击
		
		var gouWc = document.getElementById("gouWc");
		overAll.add(gouWc,"mouseover",function(){gouWcycfun(true)});
		overAll.add(gouWc,"mouseout",function(){gouWcycfun(false)});
		//购物车
		
		
		var Ddiv3lbt = document.getElementById("Ddiv3lbt");
		overAll.add(Ddiv3lbt,"mouseover",function(){lunborufun2(true)});
		overAll.add(Ddiv3lbt,"mouseout",function(){lunborufun2(false)});
		//鼠标进入轮播图出现左右
		
		lunborufun ();
		//轮播图切换
		
		
		var Ddiv3lbtz =document.getElementById("Ddiv3lbtz");
		var Ddiv3lbty =document.getElementById("Ddiv3lbty");
		overAll.add(Ddiv3lbtz,"mouseover",function(){Ddiv3lbtzy(true)});
		overAll.add(Ddiv3lbty,"mouseover",function(){Ddiv3lbtzy(true)});
		overAll.add(Ddiv3lbtz,"mouseout",function(){Ddiv3lbtzy(false)});
		overAll.add(Ddiv3lbty,"mouseout",function(){Ddiv3lbtzy(false)});
		Ddiv3lbtz.onclick =function(){doudfun(9)};
		Ddiv3lbty.onclick =function(){doudfun(10)};
		//轮播图左右黑块
		
		
		
		
		var lunboru = document.getElementById("lunboru");
		var doudou =document.getElementsByClassName("doudou");
		for(let z=0;z<doudou.length;z++){
			doudou[z].onclick = function(){doudfun(z+1)};
		};
 		//轮播图位置表，红色小豆豆
 		
 		var chxa =document.getElementById("chxa");
 		var goga =document.getElementById("goga");
 		overAll.add(chxa,"mouseover",function(){chaxfun(1)});
 		overAll.add(goga,"mouseover",function(){chaxfun(2)});
 		//右侧栏红色滑块动画，可以用css3写，简单
 		
 		var Ddiul =document.getElementsByClassName("Ddiul");
 		for(let i=0;i<Ddiul.length;i++){
 			Ddiul[i].onmouseover =function(){Ddiulfun(i,true)};
 			Ddiul[i].onmouseout = function(){Ddiulfun(i,false)};
 		};
 		//这么二的事是不是只有我才干的出来……………………
 		//for循环把第一个var i=0变成let i =0就可以了………………变量换成常量
 		
 		sy();//倒计时抢购
 		
 		var zzl =document.getElementById("zzl");
 		var yyl =document.getElementById("yyl");
 		overAll.add(zzl,"click",function(){zzlyyl(1)});//左
 		overAll.add(yyl,"click",function(){zzlyyl(2)});//右
 		//左右出现滑块
 		
 		var skdu1	 = document.getElementsByClassName("skdu1");
 		for(let g = 0;g<skdu1.length;g++){
 			skdu1[g].onmouseover=function(){
 				cculiFun(this,3);
 			}
 			skdu1[g].onmouseout=function(){		//鼠标移动到图像上画面上移动
 				cculiFun(this,10);
 			}
 		}
 		var spqieh21 =document.getElementById("spqieh21");
 		overAll.add(spqieh21,"mouseover",function(){ycc("zzl","yyl",true)});
 		overAll.add(spqieh21,"mouseout",function(){ycc("zzl","yyl",false)});
 		
 		
 		
 		
	}//window。onload结束
 
 
 
 
 
 
 	var specd = 1;
 	function cculiFun(obj,iTa){					//obj.firstChild.offsetTop，其中obj.firstChild代表当前属性值的第一个子元素
 	 	if(obj.childNodes[1].offsetTop > iTa){//当前值如果小于目标值，mouseover是目标1，现在是10
 	 		clearInterval(obj.time)
 	 		obj.time = setInterval(function(){
 	 			specd = -1;
 	 		obj.childNodes[1].style.top = obj.childNodes[1].offsetTop +specd+"px";
 	 		if(obj.childNodes[1].offsetTop == iTa){
 	 			clearInterval(obj.time);}
 	 		},30);
 	 	}
 	 	
 	 else if(obj.childNodes[1].offsetTop < iTa){//当前值如果小于目标值，mouseout是目标10，现在是1
 	 		clearInterval(obj.time)
 	 		obj.time = setInterval(function(){
 	 			specd = 1;
 	 		obj.childNodes[1].style.top = obj.childNodes[1].offsetTop +specd+"px";
 	 		if(obj.childNodes[1].offsetTop == iTa){
 	 				clearInterval(obj.time);}
 	 		},30);}
	}
 	 
 	 var dq = 0;
 	 var cu = 0;
 	 var speed =0;
 	 var tim1 =null;
 	 function zzlyyl(fun){
 	 	var ccul =document.getElementById("ccul");
 	 	var zzl =document.getElementById("zzl");
 		var yyl =document.getElementById("yyl");
 	 	if(fun == 1){
 	 		clearInterval(tim1);
 	 		speed = 10;	
 	 		tim1 = setInterval(function(){
 	 			if(dq == 0){   	
 	 			dq =-3000;
 	 			cu = dq;
 	 		}
 	 			dq = dq+speed;
 	 			ccul.style.left = dq+"px";
 	 			if(Math.abs(cu)-Math.abs(dq) == 1000){
 	 				cu = dq;
 	 				clearInterval(tim1);
 	 			}},1)}
 	 	if(fun == 2){		
 	 		clearInterval(tim1);
 	 		speed = -10;
 	 		tim1 = setInterval(function(){
 	 			if(dq == -5000){   
 	 			dq =-2000;
 	 			cu = dq;
 	 		}
 	 			dq = dq+speed;
 	 			ccul.style.left = dq+"px";
 	 			if(Math.abs(dq)-Math.abs(cu) == 1000){	
 	 				cu = dq;
 	 				clearInterval(tim1);
 	 			}
 	 		},1)
 	 	}
 	 }
 	 
 	 //无缝轮播图
 	 
 	 function sy(){
 	 	setTimeout(sy,300);
 	 	var dazizi = document.getElementsByClassName("dazizi");
 	 	var xsj = new Date();//现在时间
 	 	var h   = xsj.getHours();
 	 	var d = xsj.getDate();
 	 	if(h<20){
 	 		h = h+3;
 	 	}else{
 	 		d =d+1;
 	 	}
 	 	var jzsj = new Date("2018/12/"+d+","+h+":25:00");//截止时间
 	 	var sysj = (jzsj.getTime() - xsj.getTime())/1000;//剩余时间秒
 	 	console.log(d);
 	 	var hh = Math.floor(sysj/(60*60)%24);
 	 	var mm = Math.floor(sysj/60%60);
 	 	var ss = Math.floor(sysj%60);
 	 	if(hh<10){
 	 		hh = "0"+hh;
 	 	}
 	 	if(mm<10){
 	 		mm= "0"+mm;
 	 	}
 	 	if(ss<10){
 	 		ss = "0"+ss;
 	 	}
 	 	dazizi[2].innerHTML =hh;
 	 	dazizi[1].innerHTML =mm;
 	 	dazizi[0].innerHTML =ss;
 	 }
 	 
 	 function Ddiulfun(rd,rn){			//轮播图隐藏菜单
 	 	var lbycl=document.getElementsByClassName("lbycl");
 	 	if(rn == true){
 	 		lbycl[rd].style.display ="block";
 	 	}else if(rn == false){
 	 		lbycl[rd].style.display ="none";
 	 	}
 	 }
 	 
 	 
 	function chaxfun(cax){
 		var	Ddiv3ybls3a1 =document.getElementsByClassName("Ddiv3ybls3a1");
 		if(cax == 1){
 			Ddiv3ybls3a1[0].innerHTML ="海尔冰箱买一送一晒单送延保";
 			Ddiv3ybls3a1[1].innerHTML ="京东服饰 新品低至7折";
 			Ddiv3ybls3a1[2].innerHTML ="图书钜惠!100减30,叠券更省！";
 			Ddiv3ybls3a1[3].innerHTML ="洗衣不看天，爆款洗烘来袭";
 			xiaohuafun(1);
 		}else{
 			Ddiv3ybls3a1[0].innerHTML ="京东成为中国最大家电零售商";
 			Ddiv3ybls3a1[1].innerHTML ="京东自营家电清洗服务上线";
 			Ddiv3ybls3a1[2].innerHTML ="京东帮服务店突破1700家";
 			Ddiv3ybls3a1[3].innerHTML ="京东售后退换无忧服务上线";
 			xiaohuafun(2)
 		}
 	}
 	
 	
 	 var stm3 =null;
 	 var stm2 =null;
 	 var dqw =-2;
 	 function xiaohuafun(cax){
 	 	var donghuag =document.getElementById("donghuag");
 	 	if(cax ==2 && dqw < 52){
 	 		clearInterval(stm2);
 	 		clearInterval(stm3);
 	 		stm2=setInterval(function(){
 	 			dqw =dqw+10;
 	 			donghuag.style.left = dqw+"px";
 	 			if(dqw>52){
 	 				clearInterval(stm2);
 	 			donghuag.style.left = "52px";
 	 			}
 	 		},30);
 	 	}else if(cax ==1 && dqw > -2){
 	 		clearInterval(stm3);
 	 		clearInterval(stm2);
 	 		stm3=setInterval(function(){
 	 			dqw =dqw-10;
 	 			donghuag.style.left = dqw+"px";
 	 			if(dqw<-2){
 	 				clearInterval(stm3);
 	 			donghuag.style.left = "-2px";
 	 			}
 	 		},30);
 	 	}
 	 }
 	 
 	 
 	var timerTim2 =null;
 	function doudfun(iz){
 		if(iz == 9){
 			var doudou =document.getElementsByClassName("doudou");
 			if(window.io == 1){
 				window.io = 7;
 				doudou[0].style.background ="#fff";
 				lunborufun ();	
 			}else{
 			doudou[io-1].style.background ="#fff";
 			window.io = window.io-2;
 			lunborufun ();	
 			}
 			
 		}
 		else if(iz == 10){
 			lunborufun ();
 		}									//上面是点击左右按钮切换图片,与图片切换共用一个函数
 		
 		clearInterval(timerTim);
 		clearInterval(timerTim2);			//停掉定时器
 		var doudou =document.getElementsByClassName("doudou");//io是正在轮回图片的值
 		var lunboru = document.getElementById("lunboru");
 		doudou[window.io-1].style.background ="#fff";
 		doudou[iz-1].style.background ="#db192a";
 		window.io =iz;
 		lunboru.src ="img/pic-"+iz+".jpg";	
 		timerTim2=setInterval(lunborufun,3000);
 	}
 
 	
 	var timerTim =null;
 	var timerInt =null;
 	window.io = 0;	//io  是正在轮回图片的值
 	
 	function lunborufun (){	//轮播图切换
 		var doudou =document.getElementsByClassName("doudou");
 		clearTimeout(timerTim);
 		var aph =100;
 		window.io =io+1;									//现在的图片地址1
 		window.ip = io-1;									//现在的要清除豆豆地址0
 		if(ip>0){
 			doudou[ip-1].style.background ="#fff";
 		}
 		var lunboru = document.getElementById("lunboru");	//获取id						
 		if(aph == 100){										//如果透明度 100
 			timerInt =setInterval(function(){				//开启定时器，30毫秒
 				aph = aph-10;								//减去20的透明度
 				lunboru.style.opacity =aph/100;				//设置当前透明度
 				if(aph < 60){								//如果透明度 =50
 					clearInterval(timerInt);				//关闭定时器
 					if(io > 8){								//如果io》8		
						io = 1;	
						}
 					lunboru.src ="img/pic-"+io+".jpg";		//开始更换图片
 					doudou[io-1].style.background ="#db192a";
 					aph == 100;					//aph变回100
 					lunboru.style.opacity =1;				//透明度变回100
 					}
 				}
 			,15);
 		}
 		timerTim=setTimeout(lunborufun,3000);
 	}
 	
 	
 	
 	
 	
 	function lunborufun2 (rdd){		//鼠标进入轮播图出现左右
 		var Ddiv3lbtz=document.getElementById("Ddiv3lbtz");
 		var Ddiv3lbty=document.getElementById("Ddiv3lbty");
 		if(rdd){
 			Ddiv3lbtz.style.display ="block";
 			Ddiv3lbty.style.display ="block";
 			
 			
 		}else{
 			Ddiv3lbtz.style.display ="none";
 			Ddiv3lbty.style.display ="none";
 		}
 	}
 	
 	
		function Ddiv3lbtzy (rdd){//轮播图左右黑块
		var Ddiv3lbtz =document.getElementById("Ddiv3lbtz");
		var Ddiv3lbty =document.getElementById("Ddiv3lbty");
		if(rdd){
			Ddiv3lbtz.style.opacity = 0.6;
			Ddiv3lbty.style.opacity = 0.6;
		}else{
			Ddiv3lbtz.style.opacity = 0.2;
			Ddiv3lbty.style.opacity = 0.2;
		}
	}
 	
	
	function gouWcycfun(rdd){			//购物车
		var gouWcyc = document.getElementById("gouWcyc");
		var gouWcycb =document.getElementById("gouWcycb");
		if(rdd){
			gouWcyc.style.display = "block";
			gouWcycb.style.display = "block";
		}else{
			gouWcyc.style.display = "none";
			gouWcycb.style.display = "none";
			
		}
	}


	function myKhfun(rdd){  //我的客户函数体
		myKHyc =document.getElementById("myKHyc");
		myKHycb =document.getElementById("myKHycb");
		if(rdd == 1){
		myKHyc.style.display = "block";
		myKHycb.style.display = "block";
		Ddiv2.style.zIndex ="2";
		Ddiv3.style.zIndex ="2";
		}else{
		myKHyc.style.display = "none";
		myKHycb.style.display = "none";
		Ddiv2.style.zIndex ="4";
		Ddiv3.style.zIndex ="4";
		}	
	}
	
	function myDhfun(rdd){//导航函数体
		myDhyc =document.getElementById("myDhyc");
		myDhycb =document.getElementById("myDhycb");
		if(rdd == 1){
		myDhyc.style.display = "block";
		myDhycb.style.display = "block";	
		Ddiv2.style.zIndex ="2";
		Ddiv3.style.zIndex ="2";
		}else{
		myDhyc.style.display = "none";
		myDhycb.style.display = "none";
		Ddiv2.style.zIndex ="4";
		Ddiv3.style.zIndex ="4";
		}	
	}
	
	function souskfun(rdd){
		
		if(rdd == 1){
			sousk.style.color ="black";
			if(document.getElementById("sousk").value == "扫地机器人"){
				sousk.value ="";
			}
		}else{
			if(document.getElementById("sousk").value == ""){
			sousk.value ="扫地机器人";
			}
			sousk.style.color ="#999";
		}
	}
