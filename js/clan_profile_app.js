$(function (){
	$(document).on("click", ".profile-menu a", function(){
		if (!$(this).hasClass("active")) {
			$(".profile-menu a").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(document).on("click", "#likeButton", function(){
		$(this).find("img").attr("src", "images/liked.png")
	});
});