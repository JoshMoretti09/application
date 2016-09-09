$(document).on('ready', function(){

	var navWrapperHeight = $('.nav-wrapper').outerHeight();
	console.log(navWrapperHeight)
	$('body').css('margin-top', navWrapperHeight);

	$('.nav-main a, .logo a, .jumbo-content a').on('click', function(e){
		e.preventDefault();
		var page = $(this).attr('href');
		$.scrollTo(page, {
			duration: 800,
			offset: -navWrapperHeight
		});
	});

	//shows first img
	$('.slideshow img').eq(0).show();

	//set defaults
	var slideNum = 0; //current slide
	var slideCount = $('.slideshow img').length;

	var doSlides = function (direction){
		//Hides curent slide
		$('.slideshow img').eq(slideNum).fadeOut()
		// console.log('slide Count: ' + slideCount);
		// console.log('slide Num: ' + slideNum);
		
		if (direction === 'next') {
			if (slideNum === slideCount - 1) {
				slideNum = 0;
			} else //Increament slide num
				{ 
				slideNum = slideNum + 1;
			}
		} else {
		// you are in Previous
			if (slideNum <= 0) {
				//reset to last slide
				slideNum = slideCount - 1;

			} else {
				slideNum = slideNum - 1;
			}
		}
		
			//shows next slide
		$('.slideshow img').eq(slideNum).fadeIn();

	} 

	var autoplay = setInterval(function(){
		doSlides('next');
	},5000)

});
