$(function () {
	$(window).scroll(function() {
	    $('#second-section .second-section-header').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__headShake");
	        }
	    });
	});
})