//加载页面模块
function control(options) {
	//dataurl本级组件所需要的数据地址,无需数据时指定null.json
	//layer本级名称
	//parent本级DOM加载点
	//afterPage执行view.js内容后的函数
	//afterCss添加完style.css内容后的函数
	//paramData获取数据时的参数
	//clear是否要清空加载点
	
	if (options==null) {
		return;
	}

	var dataurl = options.dataurl;
	var layer = options.layer;
	var parent = options.parent;
	var afterPage = options.afterPage;
	var afterCss = options.afterPCss;
	var paramData = options.paramData;
	var clear = options.clear;

	//载入页面js
	$.ajax({  
    	url:layer+"/view.js",  
    	type:'get',  
    	dataType: 'txt',
    	success:function(code) {
    		if (code==null) {
    			return;
    		}
    		
    		if(dataurl==null||dataurl==undefined||dataurl=="null") {
    			var include = new Array();
    			var data="{}";
	    		if (clear) {
	    			parent.innerHTML = "";
	    		}
	    		parent.innerHTML+=eval(code);

	    		//加载子组件控制页面	
	    		for (var i=0;i<include.length;i++) {
	    			var url = "<script type='text/javascript' src='"+layer+"/"+include[i]+"/control.js'></\script>";
	    			$("head").append(url);
	    		}
				
				//载入页面逻辑
				if(afterPage) {
					afterPage();
				}
    		} else {
    			$.ajax({               
    		    	url:dataurl,  
    		    	type:'get',  
    		    	data: paramData,
    		    	dataType:'json',  
    		    	success:function(data) {
    		    		var include = new Array();
    		    		if (clear) {
    		    			parent.innerHTML = "";
    		    		}
    		    		parent.innerHTML+=eval(code);

    		    		//加载子组件控制页面	
    		    		for (var i=0;i<include.length;i++) {
    		    			var url = "<script type='text/javascript' src='"+layer+"/"+include[i]+"/control.js'></\script>";
    		    			$("head").append(url);
    		    		}
    					
    					//载入页面逻辑
    					if(afterPage) {
    						afterPage();
    					}
    		    	},
    		    	error:function() {
    		    		console.log("加载"+layer+"层数据出错.");
    		    	}
    		    });
    		}
    	},
    	error:function() {
			console.log("加载"+layer+"层页面出错.");
    	}
    });

    //载入页面css
    $.ajax({  
    	url:layer+"/style.css",  
    	type:'get',  
    	success:function(css) {
    		$("style")[0].innerHTML+=css;
    		
			if(afterCss) {
				afterCss();
			}
    	},
    	error:function() {
			console.log("加载"+layer+"层样式出错.");
    	}
    });
}

//获取url参数
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 

function iFrameHeight(idx) {   
	var frameName = idx?("infoframe"+idx):"infoframe";
	var ifm = document.getElementById(frameName);
	var subWeb = document.frames ? document.frames[frameName].document : ifm.contentDocument;   
	if(ifm != null && subWeb != null) {
		ifm.height = subWeb.body.scrollHeight
	}   
}   


//验证用户登录信息
function checklogin(type){
	if(type=='1'){
		 $.ajax({  
	      type: "POST",
		  url: 'SHOP_IsLogin.action',
		  dataType: "json",
		  success: function( data ){
			if(data.json!='ok'){
				alert('请先登录');
			}else{
				window.open('cart/cart.jsp?projid='+projID);
				}
		  }
		 });
		// href="cart.jsp?projid='+projID+'"
	}
}


