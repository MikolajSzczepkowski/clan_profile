$(function (){
	$(document).on("mouseenter", ".progress",function(){
		$(this).find("span").fadeIn();
	});
	$(document).on("mouseleave", ".progress", function(){
		$(this).find("span").fadeOut();
	});
});