

 

/*购物车*/
function mainitems(){
	$("#carts").attr("href",syspath+"/shopping/cart/cart.jsp?projid="+projID);
	//$("#maincarts").children().remove();
	var carts = "";
	var cart = "";
	var tamt = 0;
	var tprice = 0;
	var nums = 0;
		/*获取订单明细*/
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_GetCart.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json);
			if(myjson.length>0){

				carts +="<div class=\"settleup-content\">"+
						"<div class=\"smt\"><h4 class=\"f1\">最新加入的商品</h4></div>"+
						"<div class=\"smc\">"+
						    "<ul class=\"smc-y\">";
			for(var i=0;i<myjson.length;i++){ 
			myjsondtl = eval(myjson[i].dtl);
			nums = Number(nums) + myjsondtl.length;
			for(var ii=0;ii<myjsondtl.length;ii++){ 
				
				cart = "<li><div class=\"p-img\"><a href=\"#\"><img style=\"width:50px;height:50px;\" src=\"fileSystem_getImgStreamAction.action?seq="+myjsondtl[ii].image.split(/&/)[0]+"&projid="+projID+"\"/></a>"+
										   "</div><div class=\"p-name\"><a href=\"#\">"+myjsondtl[ii].itemname+"</a></div><div class=\"p-detail\"><span>"+
												"<strong>￥"+myjsondtl[ii].prize+"</strong>X"+myjsondtl[ii].numbers+"</span></br>"+
											"<a class=\"\" href=\"#\">删除</a>"+
										   "</div></li>";
					tprice = parseInt(myjsondtl[ii].prize)*parseInt(myjsondtl[ii].numbers);
					tamt =   parseInt(tamt) + parseInt(tprice);
					carts += cart;
			}
			}
	  	   carts += " </ul></div><div class=\"smb\"> <div class=\"p-total\">共<b>"+nums+"</b>件商品　共计<strong>￥ "+tamt+"</strong></div> <a href=\"#\" title=\"去购物车\">去购物车</a></div></div>";
		  }	
		  else{
		    carts +=  '<div ><img src="./images/settleup-nogoods.png">购物车中还没有商品，赶紧选购吧！</div>';
		  }


				$("#maincarts").append(carts);
				$("#itemsnum").html(nums);
		  }
		 });
}


function serch(keyword){
	//var key = $("#textt").val();
	var url = "../search.jsp?category=0&keyword="+keyword+"&projid="+projID;
	window.open(encodeURI(encodeURI(url)));
}
function serchm(){
	var key = $("#textt").val();
	var url = "../search.jsp?category=0&keyword="+key+"&projid="+projID;
	window.open(encodeURI(encodeURI(url)));
}



function GetHotSearch(){
var hot_search = ""; 
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_hot_search.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json); 
			for(var i=0;i<myjson.length;i++){ 
				
			hot_search = "<a href=\"#\" onclick=\"serch('"+myjson[i].searchkey+"')\" class=\"red\">"+myjson[i].searchkey+"</a>";
			$("#hotwords").append(hot_search); 
			} 
		  }
		 });
}


/*获取今日推荐*/
function GetRECOMMEND(){ 
	var RECOMMEND = ""; 
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_GetRECOMMEND.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json); 
			for(var i=0;i<myjson.length;i++){ 
				
			RECOMMEND = "<a href=\""+myjson[i].url+"\" target=\"_blank\" ><img style=\"height:160px; width:200px\"  src=\"../fileSystem_getImgStreamAction.action?seq="+myjson[i].imgs.split(/&/)[0]+"&projid="+projID+"\" border=\"0\"/></a>";
				$("#demo1").append(RECOMMEND);
				$("#demo2").append(RECOMMEND);
			} 
		  }
		 });
}

function createMenu(){
		var l_all = "";
		var last_l = 0;
		var now_l = 0;
		 $.ajax({  
	      type: "POST",
		  url: 'SHOP_CATEGORY.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json); 
			for(var i=0;i<myjson.length;i++){ 
					now_l = Number(myjson[i].levels);
				
				if(last_l>now_l){
					l_all = l_all +'</dd></dl>';
					if(now_l==1){
					l_all = l_all +'</div></div></div>';
					}
				}
				if(Number(myjson[i].levels)==1){
				l_all = l_all +'<div class="font-item">'+
						'<div class="item fore1">'+
						'<h3><a href="../search.jsp?category='+myjson[i].categoryid+'&projid="'+projID+'>'+myjson[i].categoryname+'</a></h3>'+
						'	<i>></i>'+
						'</div>'+
						'<div class="font-item1">'+
								'<div class="font-lefty">';
				}else if(Number(myjson[i].levels)==2){
					l_all = l_all + 
							'<dl class="fore1">'+
								'<dt><a href="../search.jsp?category='+myjson[i].categoryid+'&projid="'+projID+'>'+myjson[i].categoryname+'<i>></i></a></dt>'+							
								'<dd>';
				}else if(Number(myjson[i].levels)==3){
					l_all = l_all + '<a href="../search.jsp?category='+myjson[i].categoryid+'&projid="'+projID+'>'+myjson[i].categoryname+'</a>';
				}
					last_l = Number(myjson[i].levels);

			} 

					l_all = l_all +'</dd></dl></div></div></div>';
			$("#mainmenu").append(l_all);
		  }
		 });





}

function getmsg(){ 
	var msg = "";
	var xggd = "";
	var cx = "";
      	 $.ajax({  
	      type: "POST",
		  url: 'MSG_GetMsgInfo.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json); 
			for(var i=0;i<myjson.length;i++){ 
			if(myjson[i].typeid=="M"){
			msg = "<ul>"+
						"<li><a target=\"_parent\" href=\"index-msg.jsp?mid="+myjson[i].mid+"\" >";
				if(myjson[i].keyword!=""){
					msg = msg + "<span>["+myjson[i].keyword+"]</span>";
					
				}		
			msg = msg + myjson[i].mname+"</a></li></ul>";	
		 		$("#gg").append(msg); 
				
			}else if(myjson[i].typeid=="G"){
				
			xggd = "<ul>"+
						"<li><a  target=\"_parent\" href=\"index-msg.jsp?mid="+myjson[i].mid+"\" >";
				if(myjson[i].keyword!=""){
					xggd = xggd + "<span>["+myjson[i].keyword+"]</span>";
					
				}		
			xggd = xggd + myjson[i].mname+"</a></li></ul>";	
		 		$("#xggd").append(xggd); 
			}else if(myjson[i].typeid=="C"){
				
			cx = "<ul>"+
						"<li><a target=\"_parent\" href=\"index-msg.jsp?mid="+myjson[i].mid+"\" >";
				if(myjson[i].keyword!=""){
					cx = cx + "<span>["+myjson[i].keyword+"]</span>";
					
				}		
			cx = cx + myjson[i].mname+"</a></li></ul>";	
		 		$("#cx").append(cx); 
			}
			} 
		  }
		 });
}



