<%@ page contentType="text/html;charset=UTF-8" language="java" %><html><head>    <title>类别汇总结账表</title>    <script src="../js/vue.js"></script>    <script src="../js/vue-resource.js"></script>    <script src="../jquery/custom/jquery.min.js"></script>    <script src="../jquery/custom/jquery.table2excel.min.js"></script>    <script language="JavaScript">        var startTime = window.parent.startTime;        var endTime = window.parent.endTime;        var class_id = window.parent.class_id;    </script><style>    #tableContent{        text-align: center;    }    button{        border: 1px;        color: black;        padding: 15px 32px;        text-align: center;        text-decoration: none;        display: inline-block;        font-size: 16px;    }    table.inTable {        width:1000px;        margin-left: auto;        margin-right: auto;        align-content: center;        border-width: 0px;        border-style: solid;        border-color: #666666;        border-collapse: collapse;    }    table.inTable tr {        border-style: solid;        border-color: #666666;        border-width: 0px;        border-style: solid;    }    table.inTable td {        text-align: center;        border-width: 1px;        border-style: solid;        border-color: #666666;        width: 15%;        height: 10%;    }</style></head><body><div id="tableContent"><table class="inTable">    <tr>        <td  style="border: 0px" colspan="3"><h1 id="tableName">{{storeName.storeName|trim}}类别汇总结账表</h1></td>    </tr>    <tr>        <td style="border: 0px;text-align: right;" colspan="3" align="right">日期:{{startTime}}至{{endTime}}</td>    </tr><tr>    <td><b>类别名称</b></td>    <td><b>数量</b></td>    <td><b>金额（元）</b></td></tr>    <tr v-for="(value,key,index) in typeList">        <td>{{ value[0]}}</td>        <td style="text-align: right">{{value[1]|currency}}</td>        <td style="text-align: right">{{value[2]|currency}}</td></tr><tr>    <td style="border: 0px;" >合计</td>    <td  style="border: 0px;text-align: right">{{countNumber()|currency}}</td>    <td  style="border: 0px;text-align: right">{{countPrice()|currency}}</td></tr>    <tr>        <td align="left" style="border: 0px;" >&nbsp;&nbsp;制表人：</td>        <td colspan="2"style="border: 0px;text-align: left">制表时间：{{tableDate}}</td>    </tr></table>    <button type="button" v-on:click="printPage()" >打印界面</button>    <button id="excelButton" type="button" >导出Excel</button></div></body><script src="../js/custom/waresCatePage.js"></script></html>