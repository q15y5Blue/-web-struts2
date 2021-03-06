//@ sourceURL=itemdisplay-view.js

//子组件赋值，无子组件留空
include = ['condition','items','page'];

/*
<div id="J_crumbsBar" class="crumbs-bar">
	<div class="crumbs-nav">
		<div class="crumbs-nav-main clearfix">
			<div class="crumbs-nav-item">
				<div class="crumbs-first">全部结果</div>
			</div>

			每一层
			<i class="crumbs-arrow">&gt;</i>
			<div class="crumbs-nav-item">
				<strong class="search-key">"abc"</strong>
			</div>


		</div>
	</div>
</div>

<div id="J_selector" class="selector">...<div>
<div id="J_goodsList" class="goods-list-v1">...</div>
<div id="pages" class="page clearfix">...</div>
*/

var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');
var div6 = document.createElement('div');
var i1 = document.createElement('i');
var strong = document.createElement('strong');

var div7 = document.createElement('div');
var div8 = document.createElement('div');
var div9 = document.createElement('div');

div1.setAttribute("class","crumbs-bar");
div1.setAttribute("id","J_crumbsBar");
div2.setAttribute("class","crumbs-nav");
div3.setAttribute("class","crumbs-nav-main clearfix");
div4.setAttribute("class","crumbs-nav-item");
div5.setAttribute("class","crumbs-first");
i1.setAttribute("class","crumbs-arrow");
i1.innerHTML="&gt;";
div6.setAttribute("class","crumbs-nav-item");
div5.setAttribute("style","margin-left:10px;");
strong.setAttribute("class","search-key");
div7.setAttribute("id","J_selector");
div7.setAttribute("class","selector");
div8.setAttribute("id","J_goodsList");
div8.setAttribute("class","goods-list-v1");
div9.setAttribute("id", "pages");
div9.setAttribute("class", "page clearfix");
div6.appendChild(strong);
div4.appendChild(div5);
div2.appendChild(div3);
div1.appendChild(div2);

var key = decodeURI(decodeURI(getQueryString("keyword")));
var para = getQueryString("parameter");
var value = decodeURI(decodeURI(getQueryString("value")));

if (key==null||key == "null"){
	key = "全部结果";
}
if (value==null||value == "null"){
	value = "全部结果";

div5.innerHTML = value;
var d = div4.outerHTML;
strong.innerHTML=key;
d+=i1.outerHTML+div6.outerHTML;
div3.innerHTML = d;

div1.outerHTML+div7.outerHTML+div8.outerHTML+div9.outerHTML;
