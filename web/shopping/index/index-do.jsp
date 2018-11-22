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
		<link href="css/index.css" type="text/css" rel="stylesheet">
	<script src="js/jquery-1.11.3.min.js" ></script>
	<script src="js/index.js" ></script>
	<script src="../mainjs/index_dt.js" ></script>
	<style>
	  .mid{ height:600px; border:1px solid #ccc; margin-top:10px;}
	</style>
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
			
				
			</div>
			
		</div>
		
		<div class="clear"></div>
		<!--轮播图上方导航栏  一栏-->
		<div id="navv">
			<div class="nav-img" style="border-bottom: 2px solid #C81623;"></div>
			<!--<div class="nav-imgs" style="background:url(./images/568a0a8eNe8f4df82.jpg) no-repeat center top">--></div>	
		</div>
		<div class="focus">
			<div class="focus-a">
				<div class="fouc-img1"><img src="./images/5689d4ebN19f155a6.jpg" class="nav-img2"></div>
				<div class="fouc-font"><a href="">全部商品分类</a> </div>
			</div>
			<div class="focus-b">
				<ul>
					<li><a href="#">首页</a></li>
					<li><a href="#">自购备案</a></li>
					<li><a href="#">废弃物申报</a></li>
					<li><a href="#">求购信息</a></li>
					<li><a href="#">经销商信息</a></li>
				</ul>
			</div>
		
			<div class="bb"></div>
			
		<div class="mid">

142141
		<%@include file="/inside.jsp"%>

		</div>
			
			
		
		
		<div id="footer-2014" >
		<div class="links">
			<a rel="nofollow" target="_blank" href="#">关于我们</a>|<a  href="#">联系我们</a>|<a rel="nofollow" target="_blank" href="#">商家入驻</a>|<a rel="nofollow" target="_blank" href="#">营销中心</a>|<a target="_blank" href="#">友情链接</a>|<a target="_blank" href="#">销售联盟</a></div>
		
	  </div>
	</div>
	</body>
</html>