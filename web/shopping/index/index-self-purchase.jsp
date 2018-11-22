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
		<title>自购备案</title>
		<style>
		table{margin:0;padding:0;border-collapse:collapse; font-size:12px;color:#5F5F5F; }
		.table_th{ height:25px; line-height:25px; background:#f0f0f0; text-align:center; width:80px;}
		.table_style{width:100%; background:#ccc;}
		td{border-bottom:solid 1px #F0F0F0; background:#fff; height:45px; line-height:45px;text-align: center;}
		.add-botton{margin-top:10px; color:#C81624; background:#fff; border:1px solid #C81624; padding:4px 8px; border-radius:2px; cursor:pointer;}
		.star{ color:#FF0014;}
		.w-td,.add_myclass{ width:80px; height:20px; line-height:20px;margin-right: 10px;}
		.add_myclass{ cursor:pointer;}
		.n-w-td,.th-name{ width:140px; height:20px; line-height:20px;}
		.c-w-td{ width:100px; height:25px; line-height:25px;}
		
.Bomb-boxfirst{width:1000px;height:620px;position:absolute;z-index:1000;background:#ffffff;border-radius: 4px; font-size:14px;}
		</style>
		<link href="css/index.css" type="text/css" rel="stylesheet">
		<link href="css/index-dealerinfor.css" type="text/css" rel="stylesheet">
	<script src="js/jquery-1.11.3.min.js" ></script>
	<script src="js/index.js" ></script>
	<script src="../mainjs/index-self-purchase.js" ></script>
		
	</head>
	<body id="top">
		
		<!-----------------------------------------顶部-------------->
		<div id="firstread" style="display:none;" class="Bomb-boxfirst">
					<%@include file="self_firstread.jsp"%>
 				 </div>
		
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
			<div class="nav-img" style="background: #005BAC;height: 50px;"></div>
			<!--<div class="nav-imgs" style="background:url(./images/568a0a8eNe8f4df82.jpg) no-repeat center top"></div>-->	
		</div>
		<div class="focus">
			<div class="focus-a">
				<div class="fouc-img1"><img src="./images/5689d4ebN19f155a6.jpg" class="nav-img2"></div>
				<div class="fouc-font"><a href="">全部商品分类</a> </div>
			</div>
			
		<%@include file="/shopping/bar/menu.jsp"%>
			<!--<div class="focus-c"><a href=""><img src="./images/hhh.jpg"></a></div>
			<div class="focus-d"><a href=""><img src="./images/nianhuo.jpg"></a></div>-->
			<!--轮播图左边当行蓝-->
			<div class="bb"></div>
			<div class="dd-inner" style="display:none;">
			
				
			</div>
		    <div class="dealer-infor">
		    	<div class="crumb">
		    		<a href="#"><span>首页</span></a>
		    		>
		    		<span>自购备案</span>
		    	</div>
		    	<div class="comment-box">
		    		<div class="comment-nav">
		    		<h2>《自购备案》</h2>

		    		<a href="#" class="comment-nav-a">
		    			</a>
		    	             </div>
		    	             <div class="confirm-cont">
		    	             	<div class="confirm-fillin">
		    	             	      <h3>填写自购物资审核备案登记单</h3>	
		    	             	      <div class="confirm-fillin-left">
		    	             	      	<div class="fillin-txt-left">供应商：</div>
		    	             	      	<div class="fillin-txt-left">材料类型：</div>
		    	             	      	<div class="fillin-txt-left g-date">购置日期：</div>
		    	             	      	<div class="fillin-txt-left">发票号：</div>
		    	             	      	<div class="fillin-txt-left">邮费：</div>
		    	             	      	<div class="fillin-txt-left-c" >直接采购原因及情况说明：</div>
		    	             	      	<!--<div class="fillin-txt-left enclosure">附件：</div>-->

		    	             	      </div>
		    	             	      <div class="confirm-fillin-right">
		    	             	      	<div class="fillin-right-txt">
		    	             	      		<form id="suppliers">
						<!--	<input type="radio" name="a" id="af" />
							阿法埃莎（中国）化学有限公司
							<input type="radio" name="a" id="sg" />
							西格玛奥里奇（上海）贸易有限公司
							<input type="radio" name="a" id="yw" />
							英潍捷基（上海）贸易有限公司
		    	             	      		<input type="radio" name="a" id="sz" />
							苏州欧尚超市有限公司
							<input type="radio" name="a" id="shy" />
							上海圆迈贸易有限公司
							<input type="radio" name="a" id="sht" />
							上海泰坦科技股份有限公司
							<input type="radio" name="a" id="qt" />
							其他
							<input type="text" placeholder="输入搜索..." class="search-box" /><span class="star">*</span>


		    	             	      	-->
		    	             	      		   
		    	             	      		
		    	             	      		</form>
		    	             	      	</div>
		    	             	      	<div class="fillin-right-select">
		    	             	      		<select name="cs" id="CATEGORY1"  class="s-width">
												<option value="-1">请选择...</option>
												<!--<option value="cs">化学试剂</option>
												<option value="cs">生物试剂</option>
												<option value="cs">化学类耗材</option>-->
											</select>
											
		    	             	      	</div>
		    	             	      	<div class="fillin-right-select">
		    	             	      		<form>
		    	             	      		 <input type="date" name="cday" class="s-width"><span class="star">*</span>
		    	             	      		</form>
		    	             	      	</div>
		    	             	      	<div class="fillin-right-select">
		    	             	      		<form>
		    	             	      		 <input type="text" name="tickets" class="s-width"><span class="file-txt">(多个发票号用‘，’隔开)</span>	
		    	             	      		</form>
		    	             	      	</div>
										<div class="fillin-right-select">
		    	             	      		<form>
		    	             	      		 <input type="text" name="postage" class="s-width" value="0" onkeyup= "if( ! /^([0-9]|\.)+$/.test(this.value)){alert('只能输入数字以及小数点');this.value='';}">	
		    	             	      		</form>
		    	             	      	</div>
		    	             	      	<div class="fillin-right-txt">
		    	             	      		<form>
		    	             	      		<input type="radio" name="appmsg" value="平台内没有该商品" />
		    	             	      		平台内没有该商品
		    	             	      		<input type="radio" name="appmsg" value="价格比平台内价格低" />
		    	             	      		价格比平台内价格低
		    	             	      		<input type="radio" name="appmsg" value='qt' />
												其他<input type="text" placeholder="输入原因..." id="appmsg" class="search-box" /><span class="star">*</span>
		    	             	      	           </form>
		    	             	      	</div>
		    	             	      	<div>
		    	             	      		
		    	             	      			
		    	             	      		<!--	<label class="ui_button" for="xFile">选择文件</label><span class="file-txt">已通过国资处询价招标采购请上传采购记录及合同扫描件，发票及清单无需上传</span>
                                                                                                 <form><input type="file" id="xFile" style="position:absolute;clip:rect(0 0 0 0);"> </form>                         
                                            -->                                                         
		    	             	      		
		    	             	      	</div>

		    	             	      </div>
		    	             	</div>
								<div class="confirm-fillin-shop">
									<h3>商品信息</h3>
									<!--<div class="upload"><button class="upload-button">批量上传</button></div>-->
									<div>
										<table class="table_style"  id="table_test">
									            <thead >
									             <th class="table_th th-name">商品名称<span class="star">*</span></th>
									             <th class="table_th">品牌<span class="star">*</span></th>
									             <th class="table_th">数量<span class="star">*</span></th>
									             <th class="table_th">单价(元)<span class="star">*</span></th>
									             <th class="table_th">包装单位<span class="star">*</span></th>
									             <th class="table_th">CAS号</th>
									             <th class="table_th">货号<span class="star">*</span></th>
									             <th class="table_th">规格<span class="star">*</span></th>
												 <th class="table_th">小计(元)<span class="star">*</span></th>
									             <th class="table_th">操作</th>
									            </thead>
												<tbody id="slist">
												</tbody>
									           
									            
									          </table>
									        <input type="button" value="添加产品" id="add" class="add-botton"/>
									        <input type="button" value="保存" id="save" onclick="saveproducts('0')" class="add-botton"/>

									</div>
									<div class="total-quantity">总数量：<span class="total-color" id="tnum">15</span></div>
									<div class="total-quantity">总计：￥<span class="total-color" id="tamt">3.79</span>元</div>

								</div>
								<div class="remittance-mode">
									<h3>支付信息</h3>
									
										<ul>
										<li class="mode-list"><span class="mode-w">支付方式：</span><input type="radio" name="yb_type" value="DG">对公转账</input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<input  name="yb_type" type="radio" value="DS">转个人账户</input> <span class="star">*</span></li>
											<li class="mode-list"><span class="mode-w">支出项目：</span><select id="pro" name="pro" class="s-width" onChange="projchange(this)">
																										<option value="0">==请选择支付项目==</option>
																										<!--	  <option value="值">选项</option>
																											  <option value="值2">选项2</option>-->
																											</select>
																											<span class="star">*</span>
																											<span id = "proinfo">项目信息</span>
																											<span  style="display:none;" id = "proid"></span><!--项目-->
																											<span  style="display:none;" id = "chargecode"></span><!--项目负责人编号-->			
																											<span  style="display:none;" id = "chargename"></span><!--项目负责人名字-->							
																																	</li>
											<li class="mode-list"><span class="mode-w">费用项：</span><select  id="b_code"  class="s-width" >
																									<option value="0">==请选择费用项==</option>
																										  <option value="B0907">B0907-其他材料费</option>
																										</select><span class="star">*</span> </li>
											<li class="mode-list"><span class="mode-w">收款单位/收款人姓名：</span><input class="s-width" type="text" id="bankaccname" /><span class="star">*</span></li>
											<li class="mode-list"><span class="mode-w">收款人银行账号：</span><input class="s-width" type="text" id="bankacc"/><span class="star">*</span></li>
											<li class="mode-list"><span class="mode-w">收款人开户行：</span><input class="s-width" type="text" id="bankname"/><span class="star">*</span></li>
											<!--<li class="mode-list"><span class="mode-w">是否跨行：</span><input type="radio" name="c" id="yes" />
								    	             	      		<label for="yes">是</label>
								    	             	      		<input type="radio" name="a" id="no" />
													<label for="no">否</label><span class="star">*</span>
											</li>
											<li class="mode-list">
												<span class="mode-w">是否异地：</span><input type="radio" name="c" id="yes1" />
								    	             	      		<label for="yes1">是</label>
								    	             	      		<input type="radio" name="a" id="no1" />
													<label for="no1">否</label><span class="star">*</span>
											</li>-->
											<li class="mode-list"><span class="mode-w">附言：</span><input class="s-width" type="text" id="remark"/></li>
											<li class="mode-list">
											     <span class="mode-w">金额：￥</span><span class="total-color" id="tamt2">0.00</span>元								
											</li>
										        <!--   <li class="mode-list"><span class="mode-w"></span><input type="radio" name="c" id="bank" />
								    	             	      		<label for="bank">转交通银行卡</label></li>-->
										</ul>

									
									<div class="mode-next"><span class="next-botton" onclick="saveorder_s()">提交</span></div>
								</div>
		    	             </div>
		    	</div>
		    	
		    </div>
			
			
		
		<!--*****************轮播下方*****************-->
		
		 <div id="footer-20171" >
		<div class="links">
			<a rel="nofollow" target="_blank" href="#">关于我们</a>|<a  href="#">联系我们</a>|<a rel="nofollow" target="_blank" href="#">商家入驻</a>|<a target="_blank" href="#">友情链接</a></div>
		
	  </div>
	</body>
	 <script>
      $(function(){
	var i=  $("#slist tr").length+1;
/*	$("#add").click(function(){
		$("#slist").append('<tr><input value="" class="n-w-td" style="visibility:hidden" name="pid" type="text" /><td><input class="n-w-td" name="sname" type="text"/></td><td><input class="w-td"  name="brand"></input>'+
			'</td><td><input class="w-td" type="number" style="text-align: right" onBlur="upproduct(this)" name="buynum" placeholder="1.00"/>'+'</td><td><input class="w-td" name="price" onBlur="upproduct(this)"  type="number" style="text-align: right" placeholder="0.01" min="0.01" max="10" step="0.01"/>'+
			'</td><td><input class="w-td" name="unit" type="text"/>'+'</td><td><input class="w-td" name="CAS" type="text"/>'+'</td><td><input class="w-td" name="scode" type="text"/>'+
			'</td><td><input class="w-td"  name="model" type="text"/>'+'</td><td><input class="w-td" type="number" style="text-align: right" name="samt" readonly="true" />'+
			'</td><td><span class="add_myclass" id="display"  onclick="deleteTr(this)">删除</span>'+'</td></tr>');
		i++;
		
	});*/
	$("#add").click(function(){
		$("#slist").append('<tr><input value="" class="n-w-td" style="visibility:hidden" name="pid" type="text" /><td><input class="n-w-td" name="sname" type="text"/></td><td><input class="w-td"  name="brand"></input>'+
			'</td><td><input class="w-td" type="number"  style="text-align: right" onBlur="upproduct(this)" name="buynum" placeholder="1.00"/>'+'</td><td><input class="w-td" name="price" onBlur="upproduct(this)"  type="number" style="text-align: right" />'+
			'</td><td><input class="w-td" name="unit" type="text"/>'+'</td><td><input class="w-td" name="CAS" type="text"/>'+'</td><td><input class="w-td" name="scode" type="text"/>'+
			'</td><td><input class="w-td"  name="model" type="text"/>'+'</td><td><input class="w-td" type="number" style="text-align: right" name="samt" readonly="true" />'+
			'</td><td><span class="add_myclass" id="display"  onclick="deleteTr(this)">删除</span>'+'</td></tr>');
		i++;
		
	});
	
});



    </script>
</html>