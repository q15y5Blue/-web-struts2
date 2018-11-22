<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" contentType="text/html; charset=utf-8" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String url = request.getScheme()+"://"+ request.getServerName()+":"+request.getServerPort()+request.getRequestURI()+"?"+request.getQueryString();
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>经销商信息</title>
		<link href="css/index.css" type="text/css" rel="stylesheet">
		<link href="css/index-dealerinfor.css" type="text/css" rel="stylesheet">
	<script src="js/jquery-1.11.3.min.js" ></script>
	<script src="js/index.js" ></script>
	<script src="../mainjs/sysconfig.js" ></script>
	<script src="../mainjs/supplier.js" ></script>
		
	</head>
	<body id="top">
		
		<!-----------------------------------------顶部-------------->
		
		<%@include file="/shopping/bar/left.jsp"%>
		<%@include file="/shopping/bar/head.jsp"%>
		
		<div class="w">
			<div class="logo"><a href=""><img src="./images/logo.png"></a></div>
			<div class="search">
				<input type="text" value="搜索" class="text" id="textt">
				<button class="button">搜索</button>
			</div>
			<div class="right">
				<i class="gw-left" style="background:url(./images/jd2015img.png)0 -58px no-repeat;width:24px;height:24px;"></i>
				<i class="gw-right">></i>
				<i class="gw-count" id="itemsnum">0</i>
				<a id="carts">我的购物车</a>
			
				<div class="dorpdown-layer" id = "maincarts">
				</div>
			</div>
			
		</div>
		
		<div class="clear"></div>
		<!--轮播图上方导航栏  一栏-->
		<div id="navv">
			<div class="nav-img" style="background:#005BAC; height:50px;"></div>
			<!--<div class="nav-imgs" style="background:url(./images/568a0a8eNe8f4df82.jpg) no-repeat center top"></div>-->	
		</div>
		<div class="focus">
			<div class="focus-a">
				<div class="fouc-img1"><img src="./images/5689d4ebN19f155a6.jpg" class="nav-img2"></div>
				<div class="fouc-font"><a href="">全部商品分类</a> </div>
			</div>
		<%@include file="/shopping/bar/menu.jsp"%>
			<!--<div class="focus-b">
				<ul>
					<li><a href="#">首页</a></li>
					<li><a href="#">自购备案</a></li>
					<li><a href="#">废弃物申报</a></li>
					<li><a href="#">求购信息</a></li>
					<li><a href="../dealerinfor/index-dealerinfor.jsp" target="_blank" >经销商信息</a></li>
				</ul>
			</div>-->
			<!--<div class="focus-c"><a href=""><img src="./images/hhh.jpg"></a></div>
			<div class="focus-d"><a href=""><img src="./images/nianhuo.jpg"></a></div>-->
			<!--轮播图左边当行蓝-->
			<div class="bb"></div>
			
		    <div class="dealer-infor">
		    	<div class="crumb">
		    		<a href="#"><span>首页</span></a>
		    		>
		    		<span>经销商信息</span>
		    	</div>
		    	<div class="dealer-s-list">
		    		<span>
		    			<select name="c" class="c-style">
					<option value="choose">请选择</option>
					<option value="name">经销商名称</option>
					<option value="contacts">联系人</option>
					</select>
		    		</span>
		    		<span>
		    			<input type="text" value="" class="k-textbox" placeholder="关键字" id="supplierkey">
		    			<button class="k-button" onclick="supplier_serch()">搜　索</button>
		    		</span>
		    	</div>
		    	<div class="dealer-s-table">
		    		<table id="table">
					<thead>
				     <tr >
				        <td class="table-tr">编号</td>
				        <td class="table-tr">经销商</td>
				        <td class="table-tr">联系人</td>
				        <td class="table-tr">联系电话</td>
				        <td class="table-tr">QQ</td>
				        <td class="table-tr">邮箱</td>
				        <td class="table-tr">网址</td>
				        <td class="table-tr">公司地址</td>
				        <td class="table-tr">工商执照</td>
				        <td class="table-tr">税务执照</td>
				     </tr>
					 </thead>
					 <tbody id="supplier">
				     <tr>
				        <td>1</td>
				        <td>bbbbbbb</td>
				        <td>ccccccc</td>
				        <td>ddddddd</td>
						<td>aaaaaaa</td>
				        <td>bbbbbbb</td>
				        <td>ccccccc</td>
				        <td>ddddddd</td>
				     </tr>
					</tbody>

				  </table>
		    	</div>
		    </div>
			
			
		
		<!--*****************轮播下方*****************-->
		
		<!-- <div id="footer-2014" >
		<div class="links">
			<a rel="nofollow" target="_blank" href="#">关于我们</a>|<a  href="#">联系我们</a>|<a rel="nofollow" target="_blank" href="#">商家入驻</a>|<a rel="nofollow" target="_blank" href="#">营销中心</a>|<a target="_blank" href="#">友情链接</a>|<a target="_blank" href="#">销售联盟</a></div>
		
	  </div> -->
	  <%@include file="/shopping/bar/foot.jsp"%>
	</div>
	</body>
	 <script>
        var otable = document.getElementById('table');
        var atr = document.getElementsByTagName('tr');
        //alert(atr.length);
        for( var i=0;i<atr.length;i++){
         if(i%2==1){
            atr[i].style.background='#F5F5F5';
         }else{
           atr[i].style.background='#fff';
         }
        }
    </script>
</html>