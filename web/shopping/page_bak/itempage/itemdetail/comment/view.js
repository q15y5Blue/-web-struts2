//@ sourceURL=comment-view.js

//子组件赋值，无子组件留空
include = [];
//商品信息
/*
    <div id="comment-0" class="mc ui-switchable-panel comments-table ui-switchable-panel-selected"
    style="display: block;">
      <div class="com-table-main">

        //每一个评论
        <div class="comments-item" >
          <div class="com-item-main clearfix">
            <div class="column column1">
              <div class="user-name">
                振***具
              </div>
              <div class="comment-time type-item">
                2016-01-16 18:19
              </div>
              <div class="features type-item">
                金夹
              </div>
            </div>
            <div class="column column2">
              <div class="p-comment">
                哎比较高档大气上档次
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    */
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');
var div6 = document.createElement('div');
var div7 = document.createElement('div');
var div8 = document.createElement('div');
var div9 = document.createElement('div');
var div10 = document.createElement('div');
var div11 = document.createElement('div');

div1.setAttribute("id","comment-0");
div1.setAttribute("class","mc ui-switchable-panel comments-table ui-switchable-panel-selected");
div1.setAttribute("style","display: block;");
div2.setAttribute("class","com-table-main");
div3.setAttribute("class","comments-item");
div4.setAttribute("class","com-item-main clearfix");
div5.setAttribute("class","column column1");
div6.setAttribute("class","user-name");
div8.setAttribute("class","comment-time type-item");
div9.setAttribute("class","features type-item");
div10.setAttribute("class","column column2");
div11.setAttribute("class","p-comment");

div1.appendChild(div2);
div5.appendChild(div6);
div5.appendChild(div8);
div5.appendChild(div9);
div10.appendChild(div11);
div4.appendChild(div5);
div4.appendChild(div10);
div3.appendChild(div4);


if (data!=null&&data!=undefined) {
  var tmp = "";
  for (var i=0;i<data.length;i++) {
    div6.innerHTML = data[i].name;
    div8.innerHTML = data[i].time;
    div9.innerHTML = data[i].type;
    div11.innerHTML = data[i].comment;
    tmp+=div3.outerHTML;
  }
  div2.innerHTML = tmp;
}
div1.outerHTML;

