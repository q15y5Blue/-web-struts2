/*系统参数定义表*/
var projID ="SHOP";
function getRealPath(){  
	var curWwwPath=window.document.location.href; 
	//获取主机地址之后的目录，如： myproj/view/my.jsp   
	var pathName=window.document.location.pathname;  
	var pos=curWwwPath.indexOf(pathName);  
	//获取主机地址，如： http://localhost:8083   
	var localhostPaht=curWwwPath.substring(0,pos);  
	//获取带"/"的项目名，如：/myproj 
	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);   
	　　 //得到了 http://localhost:8083/myproj  
	var realPath=localhostPaht+projectName;  
	return  realPath;
	} 
/**获取项目路径**/
var syspath = getRealPath();

/**获取地址参数**/
function GetUrlString(name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = window.location.search.substr(1).match(reg); 
if (r != null) return unescape(r[2]); return null; 
} 

function repstr(str){
if(str==''||str==null){
	return '&nbsp;';
}else{
	return str;
	}
}

function linkto(toid){
			if(toid=='cart'){
				window.open(syspath+"/shopping/cart/cart.jsp?projid="+projID);
			}
			if(toid=='qq'){
				window.location.href='tencent://message/?uin=1003695686';
			}
			if(toid=='collection'){
				window.open(syspath+"/shopping/search.jsp?collection=T");
			}
		}

function OpenQQ(qq){ 
		window.location.href='tencent://message/?uin='+qq;
			 
		}