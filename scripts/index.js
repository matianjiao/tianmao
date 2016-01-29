// window.onload=function(){
	
// // head
// 	var head=document.getElementsByClassName('mouseover');
// 	var xia=document.getElementsByClassName('yincang');
// 	var zhuan=document.getElementsByClassName('zhuanjiao');

// 	for(var i=0;i<head.length;i++){
// 		head[i].index=i;
// 		head[i].onmouseover=function(){
// 			xia[this.index].style.display='block';
// 			xia[this.index].style.zIndex=3;
// 			// 小三角转
// 			zhuan[this.index].style.webkitTransform='rotateZ(180deg)';
// 			zhuan[this.index].style.marginTop=-2+'px';

// 		}
// 		head[i].onmouseout=function(){
// 			xia[this.index].style.display='none';
// 			zhuan[this.index].style.marginTop=0+'px';
// 			zhuan[this.index].style.webkitTransform='rotateZ(0deg)';
// 		}
// 	}

// // 商品服务类
// 	var leftOver=document.getElementsByClassName('leftOver');
// 	var shuyin=document.getElementsByClassName('shuyin');
// 	var chuangda=document.getElementsByClassName('chuangda');
// 	var chuangyou=document.getElementsByClassName('chuangyou');
// 	var marketYou=document.getElementsByClassName('market-you');
// 	// var color=['#0166FF','']
// 	for(var i=0;i<leftOver.length;i++){
// 		leftOver[i].index=i;
// 		leftOver[i].onmouseover=function(){
// 			shuyin[this.index].style.display='block';
// 			chuangda[this.index].style.display='block';
// 			chuangyou[this.index].style.display='block';
// 			marketYou[this.index].style.display='block';
// 			marketYou[this.index].style.zIndex=2;
// 		}

// 		leftOver[i].onmouseout=function(){
// 			shuyin[this.index].style.display='none';
// 			chuangda[this.index].style.display='none';
// 			chuangyou[this.index].style.display='none';
// 			marketYou[this.index].style.display='none';
// 		}
// 	}


// // 右侧栏
// 	var youce=document.getElementsByClassName('youceli');
// 	var youshu=document.getElementsByClassName('youshu');

// 	for(var i=0;i<youce.length;i++){
// 		youce[i].index=i;
// 		youce[i].onmouseover=function(){
// 			youshu[this.index].style.opacity=1;
// 			youshu[this.index].style.right='35px';
// 		}
// 		youce[i].onmouseout=function(){
// 			youshu[this.index].style.opacity=0;
// 			youshu[this.index].style.right='100px';
// 		}
// 	}


// // 选项卡
// 	var xuanxiang=document.getElementsByClassName('xuanxiang');
// 	var logo=document.getElementsByClassName('logo4');
// 	for(var i=0;i<xuanxiang.length;i++){
// 		xuanxiang[i].index=i;
// 		xuanxiang[i].onclick=function(){
// 			for(var j=0;j<logo.length;j++){
// 				xuanxiang[j].style.borderBottom='none';
// 				xuanxiang[j].style.color='#666';
// 				xuanxiang[j].style.fontWeight='normal';
// 				this.style.borderBottom='2px solid #000';
// 				this.style.color='#000';
// 				this.style.fontWeight='900';

// 				logo[j].style.display='none';
// 				logo[this.index].style.display='block';
// 			}

// 		}
// 	}



// // 换一批
// 	var huan=document.getElementById('huan');
// 	var huanTop=document.getElementById('huanTop');
// 	var top=-326;
// 	huan.onclick=function(){
// 		huanTop.style.top=top+'px';
// 		top-=326;
// 		if(top==-1304){
// 			top=0;
// 		}
// 	}


// // 滑动鼠标---toutou
// 	var toutou=document.getElementById('toutou');
// 	window.onscroll=function(){
// 		if(document.body.scrollTop>2000){
// 			toutou.style.top='0px';
// 		}
// 		if(document.body.scrollTop<2000){
// 			toutou.style.top='-50px';
// 		}
// 	}
//   // 搜索
// 	var search=document.getElementById('search');
// 	search.onfocus=function(){
// 		search.value='';
// 	}
// 	search.onblur=function(){
// 		search.value='搜索 天猫 商品/品牌/店铺';
// 	}

// // 轮播
// 	var circle=document.getElementsByClassName('circle');
// 	// var item=document.getElementsByClassName('item');
// 	// var chang=document.getElementById('chang');
// 	// var market=document.getElementById('market');
// 	// var color=['#0166FF','#F7F6F4','#FAB116','#E8E8E8','#545454','#DCDCDE'];
// 	for(var i=0;i<circle.length;i++){
// 		circle[i].index=i;
// 		circle[i].onmouseover=function(){
// 			this.style.background='#c40000';
// 			chang.style.marginLeft=this.index*(-810)+'px';
// 			// market.style.background=color[this.index];
// 		};
// 		circle[i].onmouseout=function(){
// 			this.style.background='#000';
// 			chang.style.marginLeft=this.index*(-810)+'px';
// 			// market.style.background=color[this.index];
// 		};
// 	}
// 	// var lunleft=0;
// 	// var lun=setInterval(function(){
// 	// 	lunleft-=810;
// 	// 	chang.style.marginLeft=lunleft+'px';
// 	// 	if(lunleft==-4050){
// 	// 		lunleft=810;
// 	// 	}
// 	// },2000);

// }









$(function(){

//阻止 a 标签默认事件
	var aa=document.getElementsByTagName('a');
	for (var i = 0; i < aa.length; i++) {
	 	aa[i].onclick=function(e){
	 		e.preventDefault();
	 		return false;
	 	}
	 }; 
	 
	$('.c5').mousedown(function(e){
		e.preventDefault();
	});

// ===================================导航栏
	$('.mouseover').hover(
		function(){
			$(this).find('.yincang').show();
			$(this).find('.zhuanjiao').animate({marginTop:'-3px'},10);

		},
		function(){
			$(this).find('.yincang').hide();
			$(this).find('.zhuanjiao').animate({marginTop:'0px'},10);
		}
	);

// ============================汽车图
	$('.sub-you').hover(
		function(){
			$(this).animate({marginRight:'10px'},100);
		},
		function(){
			$(this).animate({marginRight:'0px'},100);
		}
	);



// ==============================右侧
	// $('.youceli').hover(
	// 	function(){
	// 		$(this).find('.youshu').animate({right:'35px',opacity:'1'},5);
	// 		$(this).find('.youshu').show();
	// 	},
	// 	function(){
	// 		$(this).find('.youshu').animate({right:'100px',opacity:'0'},5);
	// 		$(this).find('.youshu').hide();
	// 	}
	// );

	$('.youceli').hover(function(){
	    $('.youceli').stop();
	    $(this).find('.youshu').show(0,function(){
	      	$(this).animate({right:'35px'},300);
	    });
 	},function(){
	    $('.youceli').stop();
	    $(this).find('.youshu').css({right:'80px'}).hide(0);
 	 });

//=============================== banner 右面长图
	$('.teshu-m').hover(
		function(){
			$(this).animate({right:'8px'},40);
		},function(){
			$(this).animate({right:'0px'},40);
		}
	);
	$('.you').hover(
		function(){
			$(this).animate({marginLeft:'-8px'},40);
		},function(){
			$(this).animate({marginLeft:'0px'},40);
		}
	);




// =====各种函数==========轮播  左边 鼠标经过 的效果================	

	var lunbofn=function(index){
		$($('.item')[index]).find('.item-you').animate({opacity:'0'},0);
		$($('.item')[index]).find('.bigpic').animate({width:'110%',height:'110%'},0);
		$($('.item')[index]).show(0,function(){
			$(this).find('.item-you').animate({opacity:'1'},2000);
			$($('.item')[index]).find('.bigpic').animate({width:'100%',height:'100%'},2000);
		});		
	}

	var overfn=function(index){
		$($('.chuangda1')[index]).find('.item-you').animate({opacity:'0'},0);
		$($('.chuangda1')[index]).find('.bigpic').animate({width:'110%',height:'110%'},0);
		$($('.chuangda1')[index]).show(0,function(){
			$(this).find('.item-you').animate({opacity:'1'},2000);
			$($('.chuangda1')[index]).find('.bigpic').animate({width:'100%',height:'100%'},2000);
		});	

	}


//======================================== 轮播
	// 自己动
	var color1=['#0166ff','#F7F5F6','#FAAB12','#E1E1E1','#525052','#DADADC'];
	var index=1;
	var lunbo=function(){
		if(index==6){index=0;};
		$('.chuangkou .item').hide();
		$($('.chuangkou .item')[index]).show();	
		$('.circle').removeClass('circle-ba');

		$($('.circle')[index]).addClass('circle-ba');
		$('.market').css("background",color1[index]);

		lunbofn(index);
		index++;
	}
	var timeid=setInterval(lunbo,2000);
// 下标
	$('.circle').each(function(i){
		$(this).data('index',i);
	})

	$('.circle').hover(
		function(){
			clearInterval(timeid);
			var i=$(this).data('index');
			$('.circle').removeClass('circle-ba');
			$('.chuangkou .item').hide();
			
			$(this).addClass('circle-ba');
			$($('.chuangkou .item')[i]).show();
			$('.market').css({background:color1[i]});
			lunbofn(i);
			index=i+1;
		},
		function(){
			timeid=setInterval(lunbo,2000);
		}
	);



//============================== banner中部
	var color=['#0166FF','#ffeb4b','#52585f','#00599d','#AA101A','#FAAD11','#b4f8ee','#d8c6b0','#dd080a','#d21c59','#ffe7cf','#28a6ff','#e4e3e3','#ffe1e1','#2fc5ff','#cee3ba']
	$('.leftOver').hover(
		function(){
			var index1=$('.leftOver').index(this);
			

			// 指的第一个
			if(index1==0){//index是主动轮播自己的
				// over=true;
				clearInterval(timeid);
				timeid=setInterval(lunbo,2000);
			// banner 左边 由于主动轮播index++,所以这里应该 -1
				$('.market').css({background:color1[index-1]});	
				if(index==0){
					$('.market').css({background:color1[5]});	
				}							
			}else{
				overfn(index1-1);

				clearInterval(timeid);							
				$('.market').css({background:color[index1]});
			}

			
		// 清除上次的
			$('.chuangda').hide();
			$('.market-you').hide();				
			$('.leftOver').removeClass('zuoceover');
		// 这次
			$(this).addClass('zuoceover');
			$(this).animate({paddingLeft:'5px'},200);
			$(this).find('.shuyin').show();
			$(this).find('.shuyin').animate({marginLeft:'10px'},10).delay(80).animate({marginLeft:'0px'},10);
			$($('.chuangda')[index1]).show();
			$($('.market-you')[index1]).show();
			$('.techang').hide();
			// clearInterval(timeid);

			// samefn();
		},
		function(){
			$(this).animate({paddingLeft:'0px'},200);
			$(this).find('.shuyin').hide();
			$('.techang').hide();
		}
	);



// ==========================好多图片 hover
	$('.gao3 a').hover(
		function(){
			$(this).animate({marginLeft:'-5px'},80);
		},
		function(){
			$(this).animate({marginLeft:'0px'},80);
		}
	);
	$('.ai3 a').hover(
		function(){
			$(this).animate({marginLeft:'-5px'},80);
		},
		function(){
			$(this).animate({marginLeft:'0px'},80);
		}
	);

// ========================头部搜索条
	var t;
	$(window).scroll(function(){
		if($(window).scrollTop() > 800){
			clearTimeout(t);
			$('.zuocelan').show();
			t=setTimeout(function(){
				$('.toutou').animate({top:'0px'},80);
			},500);
		}else{
			clearTimeout(t);
			$('.toutou').animate({top:'-50px'},80);
			$('.zuocelan').hide();
		}
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>600){
			$('#returntop').show(200);
		}else{
			$('#returntop').hide(200);
		}
	})
//========================= 头部搜索框内 文字
 	$('#search').focus(function(){
		this.value='';
		console.log (this,$(this));
	});
	$('#search').blur(function(){
		this.value='搜索 天猫 商品/品牌/店铺';
	});
// =================搜索框
	$('#search1').focus(function(){
		this.value='';
	});
	$('#search1').blur(function(){
		this.value='阿里88汽车节,车品好货选不停';
	});


// =======================返回顶部
	$('#returntop').click(function(){
		$({top:$(window).scrollTop()}).animate(
			{top:0},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			}
		)
	});


// ==================楼层跳转
	$('.zuoceli').each(function(i){ //下标
		$(this).data('ii',i);
	});
	$('.zuoceli').click(function(){
		var i=$(this).data('ii');
		var newtop=$($('.louceng')[i]).offset().top-100;
		$({top:$(window).scrollTop()}).animate(
			{top:newtop},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			}
		)
	});

// =================楼层跳转 ===>鼠标经过
	$('.zuoceli').hover(
		function(){
			$(this).find('em').css({visibility:'initial',color:'#fff'});
			$(this).addClass('zuoceover');
			$(this).find('i').hide();
		},
		function(){
			$(this).removeClass('zuoceover');
			$('em').css({visibility:'hidden'});
			$(this).find('i').show();
		}
	);

// ==========楼层跳转 滚轮
	var findex=0;
	$(window).scroll(function(){
		console.log(1);
		var arrfloor=[];
		$('.louceng').each(function(){
			arrfloor.push( $(this).offset().top );
		})
		arrfloor.push( arrfloor[ arrfloor.length-1 ]+450);
		//到12楼的时候findex+1出错,所以给他多加一个让12楼和他进行比较

		var zuofloor=$('.zuoceli a:last').offset().top;
		if(zuofloor>=arrfloor[findex]&&zuofloor<arrfloor[findex+1]){
			$('.zuoceli').removeClass('fontSize');
			$($('.zuoceli')[findex]).addClass('fontSize');
		}
		if(zuofloor>arrfloor[findex+1]){
			findex++;
		}
		if(zuofloor<arrfloor[findex]){
			findex--;
		}
		if (zuofloor<arrfloor[0] || zuofloor>arrfloor[12]) {
			$('.zuoceli').removeClass('fontSize');
		};
	});

// ========================floor楼层 小轮播
// floor1.
	var indexf1=0;
	var floorlunbo1=function(){
		$('.xiaolun1').animate({marginLeft:-191*(indexf1+1)},150);
		indexf1++;	
		if(indexf1==2){
			indexf1=-1;
		}	
	}
	var floort1=setInterval(floorlunbo1,2000);
// floor 点击
	$('.flooryou1').click(function(){
		clearInterval(floort1);
		if(indexf1>=2){
			indexf1=-1;
		}
		$('.xiaolun1').animate({marginLeft:-191*(indexf1+1)},100);
		indexf1++;
		floort1=setInterval(floorlunbo1,2000);
	});

	$('.floorzuo1').click(function(){
		clearInterval(floort1);
		indexf1--;
		if(indexf1<=-1){
			indexf1=2;
		}
		$('.xiaolun1').animate({marginLeft:-191*indexf1},100);
		floort1=setInterval(floorlunbo1,2000);
	});

// floor2.
	var indexf2=0;
	var floorlunbo2=function(){
		$('.xiaolun2').animate({marginLeft:-191*(indexf2+1)},150);
		indexf2++;	
		if(indexf2==2){
			indexf2=-1;
		}	
	}
	var floort2=setInterval(floorlunbo2,2000);
	$('.flooryou2').click(function(){
		clearInterval(floort2);
		if(indexf2>=2){
			indexf2=-1;
		}
		$('.xiaolun2').animate({marginLeft:-191*(indexf2+1)},100);
		indexf2++;
		floort2=setInterval(floorlunbo2,2000);
	});

	$('.floorzuo2').click(function(){
		clearInterval(floort2);
		indexf2--;
		if(indexf2<=-1){
			indexf2=2;
		}
		$('.xiaolun2').animate({marginLeft:-191*indexf2},100);
		floort2=setInterval(floorlunbo2,2000);
	});

// floor3.
	var indexf3=0;
	var floorlunbo3=function(){
		$('.xiaolun3').animate({marginLeft:-191*(indexf3+1)},150);
		indexf3++;	
		if(indexf3==2){
			indexf3=-1;
		}	
	}
	var floort3=setInterval(floorlunbo3,2000);
	$('.flooryou3').click(function(){
		clearInterval(floort3);
		if(indexf3>=2){
			indexf3=-1;
		}
		$('.xiaolun3').animate({marginLeft:-191*(indexf3+1)},100);
		indexf3++;
		floort3=setInterval(floorlunbo3,2000);
	});

	$('.floorzuo3').click(function(){
		clearInterval(floort3);
		indexf3--;
		if(indexf3<=-1){
			indexf3=2;
		}
		$('.xiaolun3').animate({marginLeft:-191*indexf3},100);
		floort3=setInterval(floorlunbo3,2000);
	});

// floor4.
	var indexf4=0;
	var floorlunbo4=function(){
		$('.xiaolun4').animate({marginLeft:-191*(indexf4+1)},150);
		indexf4++;	
		if(indexf4==2){
			indexf4=-1;
		}	
	}
	var floort4=setInterval(floorlunbo4,2000);
	$('.flooryou4').click(function(){
		clearInterval(floort4);
		if(indexf4>=2){
			indexf4=-1;
		}
		$('.xiaolun4').animate({marginLeft:-191*(indexf4+1)},100);
		indexf4++;
		floort4=setInterval(floorlunbo4,2000);
	});

	$('.floorzuo4').click(function(){
		clearInterval(floort4);
		indexf4--;
		if(indexf4<=-1){
			indexf4=2;
		}
		$('.xiaolun4').animate({marginLeft:-191*indexf4},100);
		floort4=setInterval(floorlunbo4,2000);
	});

// // floor5.
	var indexf5=0;
	var floorlunbo5=function(){
		$('.xiaolun5').animate({marginLeft:-191*(indexf5+1)},150);
		indexf5++;	
		if(indexf5==2){
			indexf5=-1;
		}	
	}
	var floort5=setInterval(floorlunbo5,2000);
	$('.flooryou5').click(function(){
		clearInterval(floort5);
		if(indexf5>=2){
			indexf5=-1;
		}
		$('.xiaolun5').animate({marginLeft:-191*(indexf5+1)},100);
		indexf5++;
		floort5=setInterval(floorlunbo5,2000);
	});

	$('.floorzuo5').click(function(){
		clearInterval(floort5);
		indexf5--;
		if(indexf5<=-1){
			indexf5=2;
		}
		$('.xiaolun5').animate({marginLeft:-191*indexf5},100);
		floort5=setInterval(floorlunbo5,2000);
	});
// floor8.
	var indexf8=0;
	var floorlunbo8=function(){
		$('.xiaolun8').animate({marginLeft:-191*(indexf8+1)},150);
		indexf8++;	
		if(indexf8==2){
			indexf8=-1;
		}	
	}
	var floort8=setInterval(floorlunbo8,2000);
	$('.flooryou8').click(function(){
		clearInterval(floort8);
		if(indexf8>=2){
			indexf8=-1;
		}
		$('.xiaolun8').animate({marginLeft:-191*(indexf8+1)},100);
		indexf8++;
		floort8=setInterval(floorlunbo8,2000);
	});

	$('.floorzuo8').click(function(){
		clearInterval(floort8);
		indexf8--;
		if(indexf8<=-1){
			indexf8=2;
		}
		$('.xiaolun8').animate({marginLeft:-191*indexf8},100);
		floort8=setInterval(floorlunbo8,2000);
	});


//===================================== 选项卡
	var i;
	var kaiguan=true;
	$('.xuanxiang').click(function(){
	 i=$('.xuanxiang').index(this);
		$('.xuanxiang').removeClass('cuti');
		$(this).addClass('cuti');
		$('.logo4').hide();
		$($('.logo4')[i]).show(0);
		kaiguan=false;
	});

	var count=1;
	$('.huan').click(function(){
		console.log(i);
		if(kaiguan){//刷新完页面没点xuanxiang的时候
			$($('.logo4')[2]).css({marginTop:-328*count});
		}else{
			$($('.logo4')[i]).css({marginTop:-328*count});
		}
		count++;
		if(count==4){
			count=1;
		}		
	});







});






