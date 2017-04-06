window.onload = function(){
	var aix3 = document.getElementById("aix3");
	var bud = document.getElementById("bud");
	var imgd = document.getElementsByTagName("img");
	aix3.onclick = function(){aixc(1);}					//点击事件
	aix3.onmouseover = function(){aixcOver(true);}		//true、代表的鼠标进入事件
	aix3.onmouseout = function(){aixcOver(false);}		//false、代表的鼠标离开事件
	var bia =document.getElementById("bia");
	var zuoz =document.getElementById("zuoz");
	bia.onmouseover = function(){biaFun(true,this);}
	bia.onmouseout = function(){biaFun(false,this);}
	zuoz.onmouseover = function(){biaFun(true,this);}
	zuoz.onmouseout = function(){biaFun(false,this);}
	imgd[1].onmouseover = function(){imgdFun(this,"词2");}
	imgd[1].onmouseout = function(){imgdFun(this,"词1");}
	imgd[2].onmouseover = function(){imgdFun(this,"下载2");}
	imgd[2].onmouseout = function(){imgdFun(this,"下载1");}
	imgd[3].onmouseover = function(){imgdFun(this,"分享2");}
	imgd[3].onmouseout = function(){imgdFun(this,"分享1");}
	imgd[5].onmouseover = function(){imgdFun(this,"删除2");}
	imgd[5].onmouseout = function(){imgdFun(this,"删除1");}
	imgd[7].onmouseover = function(){imgdFun(this,"下一曲2");}
	imgd[7].onmouseout = function(){imgdFun(this,"下一曲1");}
	imgd[4].onclick = function(){imgd4F(this);}
	imgd[0].onclick =function(){imgd5F(this);}
}

	function imgdFun(ac,cv){
			ac.src = "img/"+cv+".png";
	}
	var ddz =true;
	function imgd4F(ac){
		if(ddz){
			ac.src = "img/爱心2.png";
			ddz =false;
		}else{
			ac.src="img/爱心1.png";
			ddz = true;
		}
	}
	var zzd =true;
	function imgd5F(ac){
		if(zzd){
			ac.src = "img/静音2.png";
			bud.muted=true;
			zzd =false;
		}else{
			ac.src="img/音量2.png";
			bud.muted=false;
			zzd = true;
		}
	}
	function biaFun(ad,da){
		if(ad){
			da.style.borderBottom ="1px solid #000";
		}else{
			da.style.borderBottom = "0";
		}
	}
	var cld = null;
	function timed(){
		var tim = document.getElementById("tim");	//剩余时间innhtml
		var zt = Math.floor(bud.duration);			//总的视频时长
		var jindu1 = document.getElementById("jindu1");
		cld = setInterval(function(){
			var sy =Math.floor(bud.currentTime);		//已经播放的时间!
			var syss =sy/zt;						//剩余的时间除于总时间，得到百分比
			var dd = Math.floor((zt-sy)/60);			//分钟
			var ss = Math.floor((zt-sy)%60);			//秒
			if(dd<10){
				dd = "0"+dd;
			};
			if(ss<10){
				ss ="0"+ss;
			};
			tim.innerHTML = "-"+dd+":"+ss;
			jindu1.style.width = 430 * syss+"px";
		},1000)
	}
	var imgd = document.getElementsByTagName("img");		//作用域简直像谜一样
	var lo = true;
	function aixc(){
		if(lo){
			bud.play();
			lo = false;
			imgd[6].src = "img/暂停1.png";			//现状态播放1
			timed();								//开始计时
		}else{
			bud.pause()
			lo = true;
			imgd[6].src = "img/播放1.png";			//现状态暂停1
			clearInterval(cld);						//停止计时；
		}
	}
	function aixcOver(dr){
		if(dr){
			if(lo){
			imgd[6].src = "img/播放2.png";
			}else{
			imgd[6].src = "img/暂停2.png";
			}							//经过事件
		}else{
			if(lo){
			imgd[6].src = "img/播放1.png";
			}else{
			imgd[6].src = "img/暂停1.png";
			}							//离开事件
		}		
		
	}
