function GetSuccessOrder(){
	var orderid = GetUrlString('orderid');  
	var payinfo = "";
	var paytitle = "";
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_GetOrdersByORDERID.action',
		  dataType: "json",
		    data: {"orderid":orderid},
		  success: function( data ){
			myjson = eval(data.json);
			for(var i=0;i<myjson.length;i++){ 
				if(myjson[i].paytype=='XM'){
				    paytitle = "订单提交成功！供应商将尽快安排为您发货。";
				}else{
				    paytitle = "订单提交成功！待["+myjson[i].pro_acc+"-"+myjson[i].pro_name+"]审批,审批通过后,供应商将尽快安排为您发货";
				}
					payinfo	= " <div style=\"font-size: 15px;\"> "+
								"<span>供应商："+myjson[i].sname+"&nbsp;&nbsp;&nbsp;&nbsp;"+
									"支付方式："+myjson[i].payinfo+"&nbsp;&nbsp;&nbsp;&nbsp;"+
									"支付订单金额：￥"+myjson[i].tamt+"元(其中包含运费￥"+myjson[i].postage+"元)</span>"+
								"&nbsp;&nbsp;&nbsp;&nbsp;<span><a href=\""+syspath+"/main.jsp\">查看订单</a></span><div>";
				$("#payinfo").append(payinfo);  
			}
				$("#paytitle").html('')
				$("#paytitle").html(paytitle);
		  }
		 });

}