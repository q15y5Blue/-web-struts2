// 初始化
$(function() {
	var options = {
	    dataurl:null,
		layer:"page/cartpage",
		parent:$("body")[0],
		afterPage:null,
		afterCss:null,
		clear:false,
		paramData:{}
	}
	control(options);
});