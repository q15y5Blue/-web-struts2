// var conte = ;
var cwd = new Vue({
    el: '#tableContent',
    data: {
        jsonArray:[],
        supplier_name:'',
        startTime:startTime,
        endTime:endTime,
        time: time,
        userName:userName,
        MultiRows:MultiRows,
        collect:flag==0?'(未汇总)':'汇总'
    },
    methods:{
        parseData:function(data){
            this.jsonArray = data.jsonArray;
        },getTypeList:function(typeList,index){
            return typeList[index];
        },getPrice:function(a,b){
            return a*b;
        },testLen:function(list,index){
            if(list.length>index+1)
                return true;
            else
                return false;
        },countNumber:function(list) {
            count = 0;
            list.forEach(it=>{
                count +=it.in_num*1;
            });
            return count;
        }, countPrice:function(list){
            var price = 0;
            list.forEach(it=>{
                price += it.in_num*1*it.in_price*1;
                if(this.supplier_name==""){
                    this.supplier_name = it.name;
                }
            });
            return price;
        },getAllNumber:function(){
            var number = 0;
            this.jsonArray.forEach(its=>{
                its.list.forEach(it=>{
                    number +=it.in_num*1;
                });
            });
            return number;
        },getAllPrice:function(){
            var price = 0;
            this.jsonArray.forEach(its=>{
                its.list.forEach(it=>{
                    price +=it.in_num*1*it.in_price*1;
                });
            });
            return price;
        }, printPage:function(){
            var nal = $("button").remove();
            document.body.innerHTML=document.getElementById('tableContent').innerHTML;
            window.print();
        }
    },
    mounted:function(){
        var toUrl = "";
        if (flag == 0){
            toUrl = "CenterWaresDetails_noCollectSelect.action";
        }else {
            toUrl = "CenterWaresDetails_collectSelect.action"
        }
        this.$http.post(toUrl, {MultiRows:MultiRows}).
        then(response =>{
            if (response.data.jsonArray!=null){
                this.parseData(response.data);
            }
        },failResponse=>{
            console.error("some error");
        });
    },filters: {
        currency: function (value) {
            if (!value) return '';
            return Number(value).toFixed(2);
        }
    }
});

$(function() {
    $("#excelButton").click(function () {
        $("#tableContent").table2excel({
            name: $("#tableName").text().replace(/\s+/g,"")+".xls",
            exclude: ".noExl",
            fileext: ".xls",
            filename: $("#tableName").text() + new Date().toISOString().replace(/[\-\:\.]/g, "") + ".xls",
        });
        alert("导出成功！");
    });
});