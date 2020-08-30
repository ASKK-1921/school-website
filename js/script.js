// JavaScript Document

// UI Controler
var userInterfaceController = (function(){
	
	var DOMstrings = {
		slidesImage: ('.slides_image'),
		slidesDot: ('.slides_dot')
	}
	
	return {
		slideShow: function(){
			// Slideshow
			var slideIndex = 0;
			showSlides();

			function showSlides() {
				var i;
				var slides = document.querySelectorAll(DOMstrings.slidesImage);
				var dots = document.querySelectorAll(DOMstrings.slidesDot);

				for (i = 0; i < slides.length; i++) {
					slides[i].style.display = "none";
				}

				slideIndex++;

				if (slideIndex > slides.length) {slideIndex = 1}

				for (i = 0; i < dots.length; i++) {
					dots[i].className = dots[i].className.replace(" active", "");
				}

				slides[slideIndex-1].style.display = "block";
				dots[slideIndex-1].className += " active";
				setTimeout(showSlides, 5000);
			}
		},
		
		getDOMstrings: function() {
			return DOMstrings;
		}
	}
})();

// GLOBAL APP CONTROLLER
var controller = (function(UIctrl){
	
	return {
		init: function() {
			console.log('Application has started.');
			UIctrl.slideShow();
		}
	}
})(userInterfaceController);

controller.init();