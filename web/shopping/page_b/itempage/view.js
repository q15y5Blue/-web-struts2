//@ sourceURL=homepage-view.js

//子组件赋值，无子组件留空
include = ['navigation','searchbar','iteminfo','itemdetail'];

//页面生成
/*'
<div id="wrapper">
	<div class="w">
		<div id="img">
			<a href = "http://baidu.com"><img src="./page/homepage/loan1.jpg" width="100px height="36px" /></a>
			<a href = "http://www.sina.com"><img src="./page/homepage/loan2.jpg" width="100px" height="36px" /></a>
		</div>
		<div id = "search-2014"></div>
		<div id="settleup-2014" class="dorpdown">
			<div class="cw-icon">
			<i class="ci-left"></i>
			<a href="cart.jsp?projid='+projID+'">我的购物车</a>
			</div>
		</div>
		<span class="clr"></span>
	</div>
	<div id = "nav-2014"></div>//全部商品分类
	<div id="product-intro" class="m-item-grid clearfix"></div>
	<div class="w">
		<div id="itemdetail" class="right"></div>
	</div>
</div>'
*/
'<div id="wrapper"><div class="w"><div id="img"></div><div id = "search-2014"></div><div id="settleup-2014" class="dorpdown"><div class="cw-icon"><i class="ci-left"></i><a href="cart.jsp?projid='+projID+'">我的购物车</a></div></div><span class="clr"></span></div><div id = "nav-2014"></div><div id="product-intro" class="m-item-grid clearfix"></div><div class="w"><div id="itemdetail" class="right"></div></div></div>'

