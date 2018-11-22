

 function show()
  {
     var Idiv=document.getElementById("Idiv"); 
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
     procbg.style.background ="#000000";
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




     //以下部分实现弹出层的拖拽效果(如果想要弹出层内的div移动,把以下注销去掉即可)
         /*
         var posX;
     var posY;
     Idiv.onmousedown=function(e)
     {
         if(!e) e = window.event;  //IE
         posX = e.clientX - parseInt(Idiv.style.left);
         posY = e.clientY - parseInt(Idiv.style.top);
         document.onmousemove = mousemove;           
     }
     document.onmouseup =function()
     {
         document.onmousemove =null;
     }
     function mousemove(ev)
     {
        if(ev==null) ev = window.event;//IE
        Idiv.style.left = (ev.clientX - posX) +"px";
        Idiv.style.top = (ev.clientY - posY) +"px";
     }*/
   
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



function savewantfor(){
    var pname = $('#w_pname').val();
	var brand = $('#w_brand').val();
	var model = $('#w_model').val();
	var num = $('#w_num').val();
	var remark = $('#w_remark').val();
	var tel = $('#w_tel').val();
	if(pname==''){
		alert('求购商品名称未填写');
	}
	if(num==''){
		alert('求购数量未填写');
	}
	if(tel==''){
		alert('求购人联系方式未填写')
	}
	$.ajax({  
	      type: "POST",
		  url: 'SHOP_WantFor.action',
		  data: {"pname":pname,
				 "brand":brand,
				 "model":model,
				 "num":num,
				 "remark":remark,
				 "tel":tel},
		  dataType: "json",
		  success: function( data ){
			if (data.json=='ok')
			{
				alert('发布求购成功'); 
			}else{
				alert(data.json);
			}
		  }
		 });

	closeDiv();

}


function getWantFor(){
var wantfors = "";
		/*获取订单明细*/
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_GetWantFor.action',
		  dataType: "json",
		  success: function( data ){
			if(data.json!=''){
				myjson = eval(data.json);
				$("#wbody").children().remove();
				for(var i=0;i<myjson.length;i++){ 
					  
				supplier = " <tr  >"+
							"<td class=\"table-tr\" style=\"width:20%;text-align:center\">"+myjson[i].wname+"</td>"+
							"<td class=\"table-tr\" style=\"width:10%;text-align:center\">"+myjson[i].brand+"</td>"+
							"<td class=\"table-tr\" style=\"width:15%;text-align:center\">"+myjson[i].model+"</td>"+
							"<td class=\"table-tr\" style=\"width:10%;text-align:center\">"+myjson[i].num+"</td>"+
							"<td class=\"table-tr\" style=\"width:25%;text-align:center\">"+myjson[i].remark+"</td>"+
							"<td class=\"table-tr\" style=\"width:10%;text-align:center\">"+myjson[i].indate+"</td>"+
							"<td class=\"table-tr\" style=\"width:10%;text-align:center\">"+
									"<a href='#' wid='"+myjson[i].wid+"' wname='"+myjson[i].wname+"' class='big-link' data-reveal-id='myModal' data-animation='fade'>查看("+myjson[i].c+")</a>|"+
									"<a href='#' wid='"+myjson[i].wid+"' onclick='close_wf(this)'>关闭</a>"+
							"</td>"+
						"</tr>";
			$("#wbody").append(supplier);
				 
			  }
			}
		  }
		 });

}



/**获取自购反馈**/
function getWantForReq(wid){
var WantForReq = "";
var tb = $('#reqbody');
tb.children().remove();
 $.ajax({  
	      type: "POST",
		  url: 'SHOP_WantReq.action',
		  dataType: "json",
		  data: {"wid":wid},
		  success: function( data ){
			if(data.json!=''){
				myjson = eval(data.json);
				for(var i=0;i<myjson.length;i++){ 
					  
				WantForReq = " <tr> "+
								"<td>"+myjson[i].remark+"</td>"+
								"<td>"+myjson[i].price+"</td>"+
								"<td>"+myjson[i].uname+"</td>"+
								"<td>"+myjson[i].sname+"</td>"+
								"<td>"+myjson[i].tele+"</td>"+
								"<td><a rid='"+myjson[i].rid+"' href='#' onclick='ignore(this,'"+wid+"')'>忽略</a></td>"+
							 "</tr> "; 
			tb.append(WantForReq);
				 
			  }
			}
		  }
		 });
}

function close_wf(obj){
var wid = $(obj).attr('wid');
 $.ajax({  
	      type: "POST",
		  url: 'SHOP_Close_WantFor.action',
		  dataType: "json",
		  data: {"wid":wid},
		  success: function( data ){
			if(data.json=='ok'){
				getWantFor();
			}
		  }
		 });
}


function ignore(obj,wid){
var rid = $(obj).attr('rid');
 $.ajax({  
	      type: "POST",
		  url: 'SHOP_ignore.action',
		  dataType: "json",
		  data: {"rid":rid},
		  success: function( data ){
			if(data.json=='ok'){
				getWantForReq(wid);
			}
		  }
		 });
}
