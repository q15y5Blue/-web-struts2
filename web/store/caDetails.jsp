﻿<%@ page language="java" contentType="text/html; charset=utf-8"    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<script src="../jquery/custom/jquery.min.js"></script>
	<script src="../jquery/custom/jquery.table2excel.min.js"></script>
<script src="../jquery/angular.min.js">
</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>餐厅领科明细表</title>
<style>
	h1{
		margin: 0 auto;
		align-content: center;
		text-align: center;
	}

	button{
		text-align: center;
		align-content: center;
		margin: 0 auto;
		align-self: center;
		border: 1px;
		color: black;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}
table.inTable {
margin-left: auto;
	margin-right: auto;
	align-content: center;
	border-width: 0px;
	border-style: solid;
	border-color: #666666;
	border-collapse: collapse;
}

table.inTable tr {
	border-style: solid;
	border-color: #666666;
	border-width: 0px;
	border-style: solid;
}

table.inTable td {
	text-align: center;
	border-width: 1px;
	border-style: solid;
	border-color: #666666;
	height: 20px;
	width: 200px;
}
</style>

<script type="text/javascript">

var year =  window.parent.year;
var month =  window.parent.month;
var app = angular.module('detailTable', []);
app.controller('detailTableControl', function($scope,$http) {
//dataDB
    $scope.printPage=(function(){
        document.body.innerHTML=document.getElementById('print').innerHTML;
        window.print();
    });
	$scope.$watch('$viewContentLoaded', function() {  
		$scope.getData();
	}); 
	$scope.toExcel = (function(){
        $("#inTable").table2excel({
            exclude: ".excludeThisClass",
            name: "Worksheet Name",
            fileext: ".xls",
            filename: $("#tableName").text()
        });
        alert("下载成功");
    });
	//important
	$scope.parser = (function(typeJson,jsonData,storeNameJson){
        var classList = [];
		var typeData=angular.fromJson(typeJson);
		var jsonData = angular.fromJson(jsonData);
		var storeNames = angular.fromJson(storeNameJson);
		var store = {};
        angular.forEach(storeNames,function(li){
            var temp = [];
            classList.push(li.storename);
            store[li.storename]=temp;
        });
		angular.forEach(jsonData, function (jsonD){// list
			var cateCount = 0;
			var key = jsonD.storeName;
			var typeList = [];
			angular.forEach(jsonD.list,function(pro_cate){//store - list
				var pro_cate_number = 0;
				angular.forEach(pro_cate.list,function(cateli){//pro_cate - list
					var cate_number = 0;
					angular.forEach(cateli.list,function(cli){ //cate - list
						cate_number = cate_number + cli.acount*1;
					});
					var cli={};
					cli.id = cateli.cate;
					cli.number = cate_number;
					typeList.push(cli);
					pro_cate_number = pro_cate_number + cate_number;
				});
			
			});
			//console.log(typeList);
			//console.log(store);
			store[key] = typeList;
            console.log(typeList);
            console.log(store);
		});	
		
		//console.log(store);//班组对应
		// console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

		reList = [];
		//type遍历
		///////question waiting
		angular.forEach(typeData,function(jsObj){
			var fobj = {};
			fobj = jsObj;
			var childList = [];
			//type.list遍历
			angular.forEach(jsObj.list,function(childType){

			    //childType对象
				/*
				* angular.forEach(storeNames,function(li){
            		classList.push(li.storename);
				});
				* */
				for(var key in store){//key 是所有的班组名称
					childType[key]= "0";
					angular.forEach(store[key],function(ljj){
						if(ljj.id==childType.id){
							childType[key] = ljj.number;
						}
					});
				}
				childList.push(childType);
			});
			fobj.list = childList;
			reList.push(fobj);
		
	});
	

		// for(var key in store){
		//     console.log(key)
		// 	classList.push(key);
		// }
		// angular.forEach(storeNames,function(li){
         //    classList.push(li.storename);
		// });

		//console.log(classList);

	$scope.rsList = reList;
	$scope.classList = classList;
	$scope.getTypeCount($scope.classList,$scope.rsList);//统计班组总计
	$scope.typeAmount($scope.classList,$scope.rsList);//统计类别总计
	});
	
	$scope.countList=[];
	
	$scope.getTypeCount=(function(classList,reList){
		var clazzObj = {};
		//遍历班组名称
		angular.forEach(classList,function(clazzName){
			var obj = {};//classObj
			obj.name = clazzName;
			var amount = 0;
			angular.forEach(reList,function(rs){
				var count = 0;
				angular.forEach(rs.list,function(rs_li){
					count = count + rs_li[clazzName]*1;
				});
				obj[rs.name]=count;
				//console.log(rs.name);
				amount = amount + count ;
			});
			obj.amount = amount;
			$scope.countList.push(obj);
		});
		//console.log("countList");
		//console.log($scope.countList);
	});
	$scope.getAll=(function(){
		var numb = 0;
		var countList = $scope.countList;
		angular.forEach(countList,function(li){
			numb = numb + li.amount
		});
		return numb;
	});
	//查询//

	$scope.getData = (function(){
         // year = "2018-01-01";
         // month =  "2019-01-01";
        $scope.year = year;
        $scope.month= month;
		$http({
            params : {
                "year":year,
				"month":month
			},
		    method: 'post',
		    url: 'DetailsActionPrint_dataFromDB.action',
		}).then(function successCallback(response) {
			$scope.parser(response.data.typeJson,response.data.json,response.data.storeNameJson);
		}, function errorCallback(response) {
				alert("请输入正确的时间!");
		});
	});
	
	$scope.typeAmount = (function (classList,rsList){
		var rs_list = [];
		angular.forEach(rsList,function(rs){
			var acount = 0;
			angular.forEach(rs.list,function(rs_li){
				var count = 0;
				angular.forEach(classList,function(className){
					count =rs_li[className]*1 + count;
				});
				rs_li.count = count;
				//console.log(rs_li);
				acount = acount + count;
			});
			rs.count = acount;
			rs_list.push(rs);
		});
		//console.log("rs_list");
		//console.log(rs_list);
		return rs_list;
	});
	
	
});
app.filter('customCurrency', ["$filter", function ($filter) {
    return function(amount, currencySymbol){
    	var currency = $filter('currency');
        if(amount == 0){
            return "";
        }year
        return currency(amount, currencySymbol);
    };
}]);

</script>
</head>
<body ng-app="detailTable" ng-controller="detailTableControl">
<div id="print">
<h1 id="tableName" class="tableName">{{year}}至{{month}}各餐厅领料明细表</h1>
<table id="inTable" class="inTable" title="detailTable" >
		<thead >
			<tr>
				<td ><b>类别名称</b></td>
				<td  ng-repeat="clazz in classList"><b>{{clazz}}</b></td>
				<td ><b>合计</b></td>
			</tr>
		</thead>
				<tbody class="inTable" ng-repeat="dataTable in rsList">
					<tr ng-repeat = "datas in dataTable.list">
						<td >{{datas.name}}</td>
						<td  style="text-align: right;" ng-repeat="clazz in classList">{{datas[clazz]|customCurrency:""}}</td>
						<td style="text-align: right;">{{datas.count|customCurrency:""}}</td>
					</tr>
					<tr>
						<td>
						<b>{{dataTable.name}}小计</b>
						</td>
						<td style="text-align: right;" ng-repeat="clazz in countList">
							{{clazz[dataTable.name]|customCurrency:""}}
						</td>
						<td style="text-align: right;">
							{{dataTable.count|customCurrency:""}}
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td><b>合计</b></td>
						<td style="text-align: right;" ng-repeat="class in countList">
							{{class.amount|customCurrency:''}}
						</td>
						<td style="text-align: right;">{{getAll()|customCurrency:""}}</td>
					</tr>

				</tfoot>
	</table>
</div>
<center>
	<button type="button"   ng-click="printPage()" >打印界面</button>
	<button type="button"   ng-click="toExcel()">导出表格</button>
</center>
</body>
</html>