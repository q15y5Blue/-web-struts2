
window.onload=function(){
	firstread();
product_s();
SupplierS();
var CATEGORY = "";
getCATEGORY();
getproj();
}

function firstread()
  {
     var Idiv=document.getElementById("firstread"); 
     Idiv.style.display="block";
     //以下部分要将弹出层居中显示
     Idiv.style.left=(document.documentElement.clientWidth-Idiv.clientWidth)/2+document.documentElement.scrollLeft+"px";
         //alert(document.body.scrollTop)
         var aa_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
   //  Idiv.style.top=(document.documentElement.clientHeight-Idiv.clientHeight)/2+aa_scrollTop+"px";
   Idiv.style.top= "80px";
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

  function closefirstread()   //关闭弹出层
 {
     	var checkbox =document.getElementById('check');//
		if(checkbox.checked){
		//选中了
		   var Idiv=document.getElementById("firstread"); 
         var mybg = document.getElementById("mybg");
		 document.body.removeChild(mybg);
		 Idiv.style.display="none";
		 document.body.style.overflow ="auto";//恢复页面滚动条
		 //document.getElementById("mybg").style.display="none"; 
	  }else{
		 //没选中
		 alert('未阅读相关承洛书');
	  }    
  
 }

/*获取自购未提交材料*/
function product_s(){
	$("#supplier").children().remove();
	$("#slist").children().remove();
	var skey = $("#supplierkey").val();
	var product = "";
	var products = "";
	var tamt = 0;
	var tnum = 0;
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_Getproduct_s.action',
		  data: {"key":skey},
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json);
			for(var i=0;i<myjson.length;i++){ 
				
			product = "<tr value='"+myjson[i].id+"'>"+
					//	"<a name='pid'  style='visibility:hidden'>"+myjson[i].id+"</a>"+
						"<td>"+
						//"<input value='"+myjson[i].id+"' class='n-w-td' style='visibility:hidden' name='pid' type='text' />"+
							"<input class='n-w-td' name='sname' type='text' value='"+myjson[i].common_name+"'/>"+
						"</td>"+
						"<td>"+
							"<input class='w-td' name='brand' name='cs' value='"+myjson[i].brand+"'></input>"+
						"</td>"+
						"<td>"+
							"<input class='w-td' type='number' name='buynum' style='text-align: right' onBlur='upproduct(this)'  placeholder='1.00' value='"+myjson[i].buy_num+"'/>"+
						"</td>"+
						"<td>"+
							"<input class='w-td' name='price' type='number' placeholder='0.01' style='text-align: right' onBlur='upproduct(this)'  min='0.01' max='10' step='0.01' value='"+myjson[i].price+"'/>"+
						"</td>"+
						"<td>"+
							"<input class='w-td' name='unit' type='text' value='"+myjson[i].measurement_unit+"'/>"+
						"</td>"+
						"<td>"+
							"<input class='w-td' name='CAS' type='text' value='"+myjson[i].cas_name+"'/>"+
						"</td>"+
						"<td>"+
							"<input class='w-td' name='scode' type='text' value='"+myjson[i].scode+"'/>"+
						"</td>"+
						"<td>"+
							"<input class='w-td'  name='model' type='text' value='"+myjson[i].specifications+"'/>"+
						"</td>"+
						"<td>"+
							"<input class='w-td' type='number' name='samt' placeholder='0.01' min='0.01' max='10' step='0.01' style='text-align: right'  readonly='true' value='"+parseInt(myjson[i].buy_num)*parseInt(myjson[i].price)+"'/>"+
						"</td>"+
						"<td>"+
							"<span class='add_myclass' id='display' value='"+myjson[i].id+"'  onclick='deleteTr(this)'>删除</span>"+
						"</td></tr>";

			tamt = parseInt(tamt) + (parseInt(myjson[i].buy_num)*parseInt(myjson[i].price));
			tnum = parseInt(tnum) + parseInt(myjson[i].buy_num);
			products = products + product;

		  }
		$("#slist").append(products);
		$("#tamt").html(tamt);
		$("#tamt2").html(tamt);
		$("#tnum").html(tnum);
		  }
		 });
}

function upproduct(obj){
	var plists =  $("#slist tr");
	var l = plists.length;
	var tamt = 0;
	var tnum = 0;
for(var i=0;i<l;i++){ 
		
			plists.eq(i).find("[name='samt']").val(parseInt(plists.eq(i).find("[name='buynum']").val())*parseInt(plists.eq(i).find("[name='price']").val()));
			tamt = parseInt(tamt) + (parseInt(plists.eq(i).find("[name='buynum']").val())*parseInt(plists.eq(i).find("[name='price']").val()));
			tnum = parseInt(tnum) + parseInt(plists.eq(i).find("[name='buynum']").val());
	}
	
		$("#tamt").html(tamt);
		$("#tamt2").html(tamt);
		$("#tnum").html(tnum);
}

/*获取历史自购供应商*/
function SupplierS(){
	var supplier = "";
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_SupplierS.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json);
			for(var i=0;i<myjson.length;i++){ 
				
			supplier = "<input type=\"radio\" name=\"suppliers\" value=\""+myjson[i].id+"\" >"+myjson[i].name+"</input>";


			$("#suppliers").append(supplier);

		  }
		  $("#suppliers").append("<input type=\"radio\" name=\"suppliers\" id=\"qt\" value='qt'>其他</input><input type=\"text\" id='qtname' placeholder=\"新添加...\" class=\"search-box\" /><span class=\"star\">*</span>")
		  }
		 });
}

/**获取材料属性**/
function getCATEGORY(){
var CATEGORYS = "";
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_CATEGORY.action',
		  dataType: "json",
		  success: function( data ){
			  CATEGORY = data.json;
			myjson = eval(data.json);
			for(var i=0;i<myjson.length;i++){ 
			if(myjson[i].levels=='1'){	
				CATEGORYS = "<option value='"+myjson[i].categoryid+"' parents='"+myjson[i].parents+"'>"+myjson[i].categoryname+"</option>";
			$("#CATEGORY1").append(CATEGORYS);
			}
			
		  }
		  }
		 });

}





/**临时保存自购材料信息**/
function saveproducts(typ){
	var plists =  $("#slist tr");
	var l = plists.length;
	var products = "[";
	var product = "";
	for(var i=0;i<l;i++){ 
		if(plists.eq(i).find("[name='sname']").val()==''){
		alert('第'+(i+1)+'条商品名称不能为空');
		return;
		}
		
		if(plists.eq(i).find("[name='brand']").val()==''){
		alert('第'+(i+1)+'条品牌不能为空');
		return;
		}
		if(plists.eq(i).find("[name='buynum']").val()==''){
		alert('第'+(i+1)+'条购买数量不能为空');
		return;
		}
		if(plists.eq(i).find("[name='price']").val()==''){
		alert('第'+(i+1)+'条单价不能为空');
		return;
		}
		if(plists.eq(i).find("[name='unit']").val()==''){
		alert('第'+(i+1)+'条单位不能为空');
		return;
		}
		if(plists.eq(i).find("[name='scode']").val()==''){
		alert('第'+(i+1)+'条货号不能为空');
		return;
		}
		if(plists.eq(i).find("[name='model']").val()==''){
		alert('第'+(i+1)+'条规格不能为空');
		return;
		}
		product = "{"+
					"pid:'"+plists.eq(i).attr("value")+"',"+
					"common_name:'"+plists.eq(i).find("[name='sname']").val()+"',"+
					"brand:'"+plists.eq(i).find("[name='brand']").val()+"',"+
					"buy_num:'"+plists.eq(i).find("[name='buynum']").val()+"',"+
					"price:'"+plists.eq(i).find("[name='price']").val()+"',"+
					"unit:'"+plists.eq(i).find("[name='unit']").val()+"',"+
					"cas_name:'"+plists.eq(i).find("[name='CAS']").val()+"',"+
					"scode:'"+plists.eq(i).find("[name='scode']").val()+"',"+
					"specifications:'"+plists.eq(i).find("[name='model']").val()+"'"+
					"}";
		if(i==0){
			products = products + product;
		}else{
		products = products +","+ product;
		}
	}
	products = products + "]";
		 $.ajax({  
	      type: "POST",
		  url: 'SHOP_SaveProducts.action',
		  data: {"products":products},
		  dataType: "json",
		  success: function( data ){
			if(data.json=='ok'){
				if(typ=='0'){
					alert('保存成功');

				}
				product_s();
			}else{
			alert(data.json);
			}
		  }
		 });
}

/**保存自购订单**/
function saveorder_s(){
	/*先进行材料保存,如果供应商编号=qt，说明是填写的其他供应商*/
	var plists =  $("#slist tr");
	var l = plists.length;
	var products = "[";
	var product = "";
	for(var i=0;i<l;i++){ 
		if(plists.eq(i).find("[name='sname']").val()==''){
		alert('第'+(i+1)+'条商品名称不能为空');
		return;
		}
		
		if(plists.eq(i).find("[name='brand']").val()==''){
		alert('第'+(i+1)+'条品牌不能为空');
		return;
		}
		if(plists.eq(i).find("[name='buynum']").val()==''){
		alert('第'+(i+1)+'条购买数量不能为空');
		return;
		}
		if(plists.eq(i).find("[name='price']").val()==''){
		alert('第'+(i+1)+'条单价不能为空');
		return;
		}
		if(plists.eq(i).find("[name='unit']").val()==''){
		alert('第'+(i+1)+'条单位不能为空');
		return;
		}
		if(plists.eq(i).find("[name='scode']").val()==''){
		alert('第'+(i+1)+'条货号不能为空');
		return;
		}
		if(plists.eq(i).find("[name='model']").val()==''){
		alert('第'+(i+1)+'条规格不能为空');
		return;
		}
		product = "{"+
					"pid:'"+plists.eq(i).attr("value")+"',"+
					"common_name:'"+plists.eq(i).find("[name='sname']").val()+"',"+
					"brand:'"+plists.eq(i).find("[name='brand']").val()+"',"+
					"buy_num:'"+plists.eq(i).find("[name='buynum']").val()+"',"+
					"price:'"+plists.eq(i).find("[name='price']").val()+"',"+
					"unit:'"+plists.eq(i).find("[name='unit']").val()+"',"+
					"cas_name:'"+plists.eq(i).find("[name='CAS']").val()+"',"+
					"scode:'"+plists.eq(i).find("[name='scode']").val()+"',"+
					"specifications:'"+plists.eq(i).find("[name='model']").val()+"'"+
					"}";
		if(i==0){
			products = products + product;
		}else{
		products = products +","+ product;
		}
	}
	products = products + "]";
	//saveproducts('1');





	var sid = $("input[name='suppliers']:checked").val();
	if(sid==''||'undefined'==typeof(sid)){
		alert('请填写供应商');
		return; 
	}
	if(sid == 'qt'){
		var sname = $("#qtname").val();
	}
	/*材料类型*/
	var scat = $("#CATEGORY1").find("option:selected").val();
	/*购置日期*/
	var buydate = $("[name='cday']").val();
	/*发票*/
	var tickets = $("[name='tickets']").val(); 
	
	var postage = $("[name='postage']").val(); 
	/*自购原因*/
	var AppMsg = $("input[name='appmsg']:checked").val();
	if(AppMsg=='qt'){
		AppMsg =  $("#appmsg").val();
	}
	/*开户行信息*/
	var bankacc = $("#bankacc").val();
	var bankaccname = $("#bankaccname").val();
	var bankname = $("#bankname").val();
	var remark =  $("#remark").val();
	var tamt =  $("#tamt2").html();

	var pro_code =$("#proid").html();
	var b_code= $("#b_code").find("option:selected").attr('value');
	var b_namearr= $("#b_code").find("option:selected").html();
	var strs= new Array(); 
		strs = b_namearr.split('-');
	var b_name = strs[1];
	var yb_type = $("input[name='yb_type']:checked").val();
	if(yb_type==''||'undefined'==typeof(yb_type)){
		alert('请选择支付方式');
		return; 
	}



		if(bankacc==''||bankacc==null){
		alert('请填写收款账户');
		return;
		}
		if(bankaccname==''||bankaccname==null){
		alert('请填写收款账户名');
		return;
		}
		if(bankname==''||bankname==null){
		alert('请填写开户行');
		return;
		}

		if(pro_code==''||pro_code==null){
		alert('请选择支付项目');
		return;
		}
		if(b_code==''||b_code==null){
		alert('请选择费用项');
		return;
		}
		if(b_name==''||b_name==null){
		alert('请选择费用项');
		return;
		}

 $.ajax({  
	      type: "POST",
		  url: 'SHOP_SaveProducts.action',
		  data: {"products":products},
		  dataType: "json",
		  success: function( data ){
			if(data.json=='ok'){ 
						$.ajax({  
							  type: "POST",
							  url: 'SHOP_SaveOrder_S.action',
							  data: {"sid":sid,
									"sname":sname,
									"Tamt":tamt,
									"scat":scat,
									"buydate":buydate,
									"tickets":tickets,
								    "postage":postage,
									"AppMsg":AppMsg,
									"bankacc":bankacc,
									"bankaccname":bankaccname,
									"bankname":bankname,
									"pro_code":pro_code,
									"b_code":b_code,
									"b_name":b_name,
								    "yb_type":yb_type,
									"remark":remark},
							  dataType: "json",
							  success: function( data ){
								if(data.json.split(':')[0]=='ok'){
									//alert('自购订单保存成功');
									window.location.href=syspath+'/customWin/frame_self_print.jsp?ordercode='+data.json.split(':')[1];
								}else{
									alert(data.json);
								}
							  }
							 });
		}else{
			alert(data.json);
			}
		  }
		 });
product_s();
}


function getproj(){
	/*获取项目信息*/
	var pros = "";
	var pro = "";
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_GetProInfo.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json);
			for(var i=0;i<myjson.length;i++){ 
				pro = "<option value=\""+myjson[i].name+"|,|"+myjson[i].procode+"|,|"+myjson[i].proname+"|,|"+myjson[i].haveprice+"\">"+myjson[i].name+"("+myjson[i].procode+")</option>";
				pros += pro;
			}
				$("#pro").append(pros);
		  }
		 });
}


function projchange(data) {
var strs= new Array(); 
if(data.value==0){
	$("#proinfo").hide();

}else{
	strs=data.value.split("|,|");
	$("#proinfo").html("项目负责人："+strs[2]+"；项目余额："+strs[3]);//项目编号："+strs[1]+"；项目名称："+strs[0]+"；
	$("#paytype").html("项目支付");
	$("#chargename").html(strs[2]);
	$("#proid").html(strs[1]);

   /* alert(data.value);*/
		
	$("#proinfo").show();
}
}

function deleteTr(obj){
	cart=$(obj).attr('value');
 $.ajax({  
	      type: "POST",
		  url: 'SHOP_Delproduct_s.action',
		  dataType: "json",
	      data: {"cart":cart},
		  success: function( data ){
			if(data.json=='ok'){
			$(obj).parent().parent().remove();
			}
		  }
		 });

}


