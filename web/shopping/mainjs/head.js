


function GetTGROUP(){
	var groups = "";
	var group = "";
		/*获取所属课题组*/
      	 $.ajax({  
	      type: "POST",
		  url: 'SHOP_GetTGROUP.action',
		  dataType: "json",
		  success: function( data ){
			myjson = eval(data.json);
			for(var i=0;i<myjson.length;i++){ 
				if(i==0){
					group = "<li class=\"bj\">所属课题组："+myjson[i].groupname+"<i class=\"ci-leftll\">"+ 
								"<s class=\"jt\">◇</s>"+
							"</i>"+
							"<div class=\"bj-1\">"; 
				}
				else
				{
					group = group + "<a href=\"\">"+myjson[i].groupname+"</a>";
				}
			}
		
			group = group + "</div></li>";
			$("#group").append(group);
		  }
		 });

}