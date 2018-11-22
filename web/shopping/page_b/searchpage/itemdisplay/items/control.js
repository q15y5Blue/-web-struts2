//@ sourceURL=item-control.js
// 初始化
$(function() {
	var cate = getQueryString("category");
	var parameter = getQueryString("parameter");
	var keyword = decodeURI(decodeURI(getQueryString("keyword")));
	var value = decodeURI(decodeURI(getQueryString("value"))); 
	var page = GetUrlString('page');

	var options = {
		dataurl:"getItem.action",
		layer:"page/searchpage/itemdisplay/items",
		parent:$("#J_goodsList")[0],
		afterPage:null,
		afterCss:null,
		clear:false,
		paramData:{
			category: cate,
			parameter: parameter,
			keyword: keyword,
			value: value,
			page:page	
		}
	};
	control(options);
});

function supplier(sid){
	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_supplier.action',
		  data:{"supplierid":sid},
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json);
			if(myjson.length>0){
				if(myjson[0].qq!=''&&myjson[0].qq!=null&&myjson[0].qq!='undefined'){ 
				window.location.href='tencent://message/?uin='+myjson[0].qq;
				}else{
				alert('该供应商未填写QQ,请用其他方式联系');
				}
			}
		  }
		 });
}


//contetn为要显示的内容  
//height为离窗口顶部的距离  
//time为多少秒后关闭的时间，单位为秒  
function showTips( content, height, time ){  
    //窗口的宽度  
  var windowWidth  = $(window).width();  
  var windowHigh  =document.body.clientHeight ;
  var tipsDiv = '<div class="tipsClass">' + content + '</div>';  
   
  $( 'body' ).append( tipsDiv );  
  $( 'div.tipsClass' ).css({  
      'top'       : windowHigh/2 + 'px',  
      'left'      : ( windowWidth / 2 ) - 350/2 + 'px',  
      'position'  : 'absolute',  
      'padding'   : '3px 5px',  
      'background': '#B1191A',  
      'font-size' : 12 + 'px',  
      'margin'    : '0 auto',  
      'text-align': 'center',  
      'width'     : '350px',  
      'height'    : 'auto',  
      'color'     : '#fff',  
      'opacity'   : '0.8'  
  }).show();  
//  setTimeout( function(){$( 'div.tipsClass' ).fadeOut();}, ( time * 1000 ) );  
}  

function addcard(subid,num){
	 $.ajax({  
	      type: "POST",
		  url: 'addCart.action',
		  data:{"subid":subid,"num":num},
		  dataType: "json",
		  success: function( data ){
			if(data.json!='ok'){
				alert('请先登录');
			}else{
			//	$('#addsuccess_'+subid).css("display", "block");
			//showTips('添加成功',350,0.5);
			show("cart");
				}
		  }
		 });
}

//加入收藏
function addColletion(itemid,num){
	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_Collection.action',
		  data:{"itemid":itemid},
		  dataType: "json",
		  success: function( data ){
			if(data.json!='ok'){
				alert('请先登录');
			}else{
			show("collection");
				}
		  }
		 });

}



 function show(type)
  {
	//添加收藏夹/购物车返回消息
	if(type == "cart"){
		$("#Idiv").html("<span style='text-align:center;color:#ffffff'>添加购物车成功</span>");
	}else if(type == "collection"){
		$("#Idiv").html("<span style='text-align:center;color:#ffffff'>添加收藏夹成功</span>");
	}

	 
     //var Idiv=document.getElementById("Idiv"); 
     Idiv.style.display="block";
     //以下部分要将弹出层居中显示
     Idiv.style.left=(document.documentElement.clientWidth-Idiv.clientWidth)/2+document.documentElement.scrollLeft+"px";
         //alert(document.body.scrollTop)
         var aa_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
     Idiv.style.top=(document.documentElement.clientHeight-Idiv.clientHeight)/2+aa_scrollTop+"px";
         //此处出现问题，弹出层左右居中，但是高度却不居中，显示在上部分，导致一                      //部分不可见,于是暂时在下面添加margin-top


     //以下部分使整个页面至灰不可点击
         var procbg = document.createElement("div");  //首先创建一个div
     procbg.setAttribute("id","mybg");            //定义该div的id
    // procbg.style.background ="#000000";
     procbg.style.width ="100%";
     procbg.style.height ="100%";
     procbg.style.position ="fixed";
     procbg.style.top ="0";
     procbg.style.left ="0";
     procbg.style.zIndex ="500";
     procbg.style.opacity ="0.6";
     procbg.style.filter ="Alpha(opacity=70)";
         //取消滚动条
     document.body.appendChild(procbg);
     document.body.style.overflow ="auto";    
	 setTimeout( closeDiv, 400 );  
   
 } 

  function closeDiv()   //关闭弹出层
 {
         
     var Idiv=document.getElementById("Idiv"); 
         var mybg = document.getElementById("mybg");
     document.body.removeChild(mybg);
     Idiv.style.display="none";
     document.body.style.overflow ="auto";//恢复页面滚动条
     //document.getElementById("mybg").style.display="none"; 
 }


