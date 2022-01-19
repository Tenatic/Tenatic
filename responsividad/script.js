$(function(){
  var trigger = $(".nav__trigger");
  
  trigger.on("click",function(){
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
  });
});