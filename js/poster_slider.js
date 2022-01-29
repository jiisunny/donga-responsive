/* poster_slider.js */

$(function(){

	var nStep=$("#poster .imgs_wrap > ul > li").outerWidth(); //175
	var leftValue=0;
	var maxLeftValue=0;

	setInterval(function(){
		maxLeftValue= $("#poster .imgs_wrap").outerWidth()-$("#poster .imgs_wrap > ul").outerWidth();

		if(leftValue <= maxLeftValue){
			leftValue=maxLeftValue;
			$("#poster .imgs_wrap > ul").css({left:leftValue});
		}else{
			$("#poster .btn_next").css({background:"url(images/btn_next_a.png)"});
		}
	},50);
	
	$("#poster .btn_next").click(function(){
		$("#poster .btn_prev").css({background:"url(images/btn_prev_a.png)"});

		leftValue-=nStep;
		if(leftValue <= maxLeftValue){
			leftValue=maxLeftValue;
			$("#poster .btn_next").css({background:"url(images/btn_next_n.png)"});
		}
		$("#poster .imgs_wrap > ul").css({left:leftValue});
	});

	$("#poster .btn_prev").click(function(){
		$("#poster .btn_next").css({background:"url(images/btn_next_a.png)"});

		leftValue+=nStep;
		if(leftValue >= 0){
			leftValue=0;
			$("#poster .btn_prev").css({background:"url(images/btn_prev_n.png)"});
		}
		$("#poster .imgs_wrap > ul").css({left:leftValue});
	});

});