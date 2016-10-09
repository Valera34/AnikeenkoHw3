 $(function(){
var LIST=$(".leftside");
var LIST2=$(".bl-bought1");
var LIST3=$(".bl-left1");
var BOUGHT=$(".bl-bought2").html();
var LEFT=$(".bl-left2").html();
var ITEM_TEMPLATE=$(".bl-list").html();	

$(".bl-list").hide();
addItem($("#noshow1").text());
addItem($("#noshow2").text());
addItem($("#noshow3").text());
$("#button3").click(function(){
 var t = $(".text");
addItem(t.val());
$(".text").val('');
$(".text").focus();
});
$('.text').bind("enterKey",function(e){
   var t = $(".text");
addItem(t.val());
$(".text").val('');
$(".text").focus();
});
$('.text').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});
function addItem(title)	{
var node=$( ITEM_TEMPLATE);
var node1=$( LEFT);
var node2=$(BOUGHT);
var count=1;
node.find(".bl-label").text(count);
node.find(".bl-product").text(title);
node1.find(".ch").text(title);	
node.find(".bl-product").attr('contentEditable',true);
node.find(".bl-product").bind("DOMSubtreeModified",function(){ 
node1.find(".ch").text(node.find(".bl-product").text()); 
});
node.find(".x").click(function(){
node.remove();
node1.remove();	
});
node.find(".bl-minus").click(function(){
if(count>1){
count--;
node.find(".bl-label").text(count);
node1.find(".bl-title3").text(count);	
}
else{
node.find(".bl-minus").prop("disabled",true);
}
});
node.find(".bl-plus").click(function(){
node.find(".bl-minus").prop("disabled",false);
count++;
node.find(".bl-label").text(count);
node1.find(".bl-title3").text(count);	
});
node.find(".bought").click(function(){
if(node.find(".x").is(':hidden')){
node.find(".bl-product").removeClass("ff");
node.find(".x").show();
node.find(".bl-plus").show();
node.find(".bl-minus").show();
node2.remove();
node1.show();
}
else{
node.find(".bl-product").addClass("ff");
node.find(".x").hide();
node.find(".bl-plus").hide();
node.find(".bl-minus").hide();
node2.find(".ch").text(title);
node2.find(".bl-title3").text(count);
node2.find(".ch").addClass("ff");
node2.find(".bl-title3").addClass("ff");
LIST2.append(node2);
node1.hide();
}
});
LIST.append(node);
LIST3.append(node1);
}
});