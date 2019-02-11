$("button").click(function(){
var mars1=$(".input1").val();
var milk1=$(".input2").val();
var ice1=$(".input3").val();

console.log(milk1);

var mars2=parseInt(mars1);
var milk2=parseInt(milk1);
var ice2=parseInt(ice1);

var add=mars2+milk2+ice2;

$("body").text(add);    
});