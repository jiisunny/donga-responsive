/* tabbar.js */

$(function(){
	$(".tab_title > div > h3").click(function(){
		var index=$(this).index();

		/*
		$(this).parent("div").children("h3").removeClass("active");
		$(this).addClass("active");

		$(this).parents(".tab_title").next(".description").children("div").removeClass("active");
		$(this).parents(".tab_title").next(".description").children("div").eq(index).addClass("active");
		*/

		$(this).parent().children().removeClass("active");
		$(this).addClass("active");

		$(this).parents(".tab_title").next().children().removeClass("active");
		$(this).parents(".tab_title").next().children().eq(index).addClass("active");
	});


});