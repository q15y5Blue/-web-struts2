

 function show()
  {
     var Idiv=document.getElementById("Idiv"); 
     Idiv.style.display="block";
     //以下部分要将弹出层居中显示
     Idiv.style.left=(document.documentElement.clientWidth-Idiv.clientWidth)/2+document.documentElement.scrollLeft+"px";
         //alert(document.body.scrollTop)
         var aa_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
     Idiv.style.top=(document.documentElement.clientHeight-Idiv.clientHeight)/2+aa_scrollTop+"px";
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
 function closeDiv()   //关闭弹出层
 {
         
     var Idiv=document.getElementById("Idiv"); 
         var mybg = document.getElementById("mybg");
     document.body.removeChild(mybg);
     Idiv.style.display="none";
     document.body.style.overflow ="auto";//恢复页面滚动条
     //document.getElementById("mybg").style.display="none"; 
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