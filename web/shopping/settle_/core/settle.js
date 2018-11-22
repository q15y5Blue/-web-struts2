var projID = "WF_NYD";
window.onload=function(){
	var myjson = "";
	
	/*获取收货地址*/
	GetAddress();

	var carts = "";
	var cart = "";
	var tamt = 0;
	var tprice = 0;
		/*获取订单明细*/
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_GetCart.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json);
			for(var i=0;i<myjson.length;i++){ 
				cart = "<li  class=\"wrap wrap-detailed\">"+
							"<div class=\"w-left\">"+
								"<img width=\"100\" height=\"100\" src=\"../fileSystem_getImgStreamAction.action?seq="+myjson[i].image.split(/&/)[0]+"&projid="+projID+"\"></div>"+
							"<div class=\"w-right\">"+
								"<div class=\"right-list\">"+
									"<span class=\"list-column list-column-color\">"+myjson[i].name+"</span>"+
									"<span class=\"list-column list-align list-color\">￥"+
								myjson[i].price+"<br><span class=\"list-color-k\">"+myjson[i].brand+"</span></span><span class=\"list-column list-align\">x"+
								myjson[i].number+"</span></div>"+
								"<div class=\"clear\"></div>"+
							"</div>"+
	 						"<div class=\"clear\"></div>"+
						"</li>";
				tprice = parseInt(myjson[i].price)*parseInt(myjson[i].number);
				tamt =   parseInt(tamt) + parseInt(tprice);

				$("#supplier").html("供应商  "+myjson[i].sname);
				$("#supplierid").html("供应商  "+myjson[i].sid);
				carts += cart;
			}
				$("#carts").append(carts);
				$("#total-amount").html(tamt);
		  }
		 });

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



		 /**设置时间**/
  /**修改时间   by  吴斌**/
  var myDate = new Date();
  var Week = "";
  if (myDate.getDay()==0)
  {
	  Week = "周日";
  }else if (myDate.getDay()==1)
  {
	  Week = "周一";
  }else if (myDate.getDay()==2)
  {
	  Week = "周二";
  }else if (myDate.getDay()==3)
  {
	  Week = "周三";
  }else if (myDate.getDay()==4)
  {
	  Week = "周四";
  }else if (myDate.getDay()==5)
  {
	  Week = "周五";
  }else if (myDate.getDay()==6)
  {
	  Week = "周六";
  }
  $("#gettime").html("预计&nbsp;"+myDate.getFullYear()+"年"+ (myDate.getMonth()+1)+"月"+myDate.getDate()+"日&nbsp;&nbsp;["+Week+"]&nbsp;&nbsp;送达");
  $("#hidetime").html(myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate())
 /**设置时间结束**/


}



function GetAddress(){
	var myjson = "";
var address = "";
	var address_s = "";
				$("#address").children().remove();
	/*获取收货地址*/
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_GetAddres.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json);
			for(var i=0;i<myjson.length;i++){ 
				address = "<li  class=\"wrap\">"+
						"<input id=\"selectaddress\" name=\"selectaddress\" type=\"radio\" value=\""+i+"\" />"+
						"<div ><a   class=\"consignee-item\">"+myjson[i].name+"</a></div>"+
						"<div class=\"addr-detail\">"+
							"<span id=\"name_"+i+"\" class=\"addr-name\">"+myjson[i].name+"</span>"+
							"<span id=\"address_"+i+"\" class=\"addr-info\">"+myjson[i].address+"</span>"+
							"<span id=\"phone_"+i+"\" class=\"addr-tel\">"+myjson[i].phone+"</span>"+
							"<span class=\"addr-default\">默认地址</span>"+
						"</div>"+
						"<div class=\"clear\"></div>"+
					"</li>";
				address_s += address;
			}
				$("#address").append(address_s);
		  }
		 });

}



 function projchange(data) {
var strs= new Array(); 
strs=data.value.split("|,|");
$("#proid").html(strs[1]);
$("#proname").html(strs[0]);
$("#chargename").html(strs[2]);
$("#balance").html(strs[3]);
    <!-- alert(data.value);-->
  }


/*提交订单*/
function submitorder(){
	var saddress = $("#selectaddress:checked").val();
	if(!$('#selectaddress').is(':checked')) {
		alert('请选择收货地址');
		return;
	}
	var Tamt = $("#total-amount").html();
	var pro_code =$("#proid").html();
	var Supplierid =$("#supplierid").html();
	var SupplierName = $("#supplier").html();
	var GetName = $("#name_"+saddress).html();
	var GetPhone = $("#phone_"+saddress).html();
	var GetAddress = $("#address_"+saddress).html();
	var GetDate = $("#hidetime").html();
	var projacc =  $("#chargecode").html();
	var projNAME = $("#chargename").html();

	$.ajax({  
	      type: "POST",
		  url: 'SHOP_SaveOrder.action',
		  data: {"Tamt":Tamt,
				 "pro_code":pro_code,
				 "Supplierid":Supplierid,
				"SupplierName":SupplierName,
				"GetName":GetName,
				"GetPhone":GetPhone,
				"GetAddress":GetAddress,
				"GetDate":GetDate,
				"projacc":projacc,
				"projNAME":projNAME},
		  dataType: "json",
		  success: function( data ){
			if (data.json=='ok')
			{
				alert('订单提交成功');
			}else{
				alert(data.json);
			}
		  }
		 });


}


/**保存收获地址信息**/
function saveaddress(){

	var newuser = $('#newuser').val();
	var newaddress = $('#newaddress').val();
	var newphone = $('#newphone').val();
	if(newuser==''){
		alert('收货人未填写');
	}
	if(newaddress==''){
		alert('收货地址未填写');
	}
	if(newphone==''){
		alert('收货人联系方式未填写')
	}
	$.ajax({  
	      type: "POST",
		  url: 'SHOP_SaveAddress.action',
		  data: {"newuser":newuser,
				 "newaddress":newaddress,
				 "newphone":newphone},
		  dataType: "json",
		  success: function( data ){
			if (data.json=='ok')
			{
				alert('地址保存成功');
				/*保存成功后重新刷新收获地址*/
				 GetAddress();
			}else{
				alert(data.json);
			}
		  }
		 });

	
}



function fun(){
    var boxes = document.getElementsByTagName("input");
    var val = []
    for(i=0;i<boxes.length;i++){
        if(boxes[i].name=="test" && boxes[i].checked == true){
            val.push(boxes[i].value);
        }
    }
    alert(val);
}
