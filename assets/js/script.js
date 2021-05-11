/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

jQuery(function ($) {
	"use strict";


	/* ========================================================================= */
	/*	Auto close Navbar when click on link
	/* ========================================================================= */

	$('.navbar-collapse a').click(function () {
		$(".navbar-collapse").collapse('hide');
	});


	/* ========================================================================= */
	/*	lazy load initialize
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */

	var html_body = $('html, body');
	$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 50
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

	/* ========================================================================= */
	/*	counter up
	/* ========================================================================= */
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}

	$(window).on('scroll', function () {
		counter();
	});

});
//Start tourney script
let elTourneyRank, elWins, elBooster, elStreamer, elExpress;

let Rankings;
Rankings = [{
	"id": 1,
	"value": 10,
	"label": "Bronze Title",
}, {
	"id": 2,
	"value": 10,
	"label": "Silver Title",
}, {
	"id": 3,
	"value": 15,
	"label": "Gold Title",
}, {
	"id": 4,
	"value": 20,
	"label": "Platinum Title",
}, {
	"id": 5,
	"value": 25,
	"label": "Diamond Title",
}, {
	"id": 6,
	"value": 30,
	"label": "Champion Title",
}, {
	"id": 7,
	"value": 40,
	"label": "Grand Champion Title",
}, {
	"id": 8,
	"value": 80,
	"label": "Supersonic Legend Title",
}];

function initFormTourney() {
	elTourneyRank = document.getElementById("rank-tourn");
	elWins = document.getElementById("amt-wins");
	elBooster = document.getElementById('booster');
	elStreamer = document.getElementById('streamer');
	elExpress = document.getElementById('express');
	buildOptList(elTourneyRank, 0);
}

function buildOptList(select, id) {
	select.innerHTML = null;

	//alert("Populate list");
	for (let i = id; i < Rankings.length; i++) {
		if (!((id === 0) && (i === Rankings.length))) {
			let el = document.createElement("option");
			el.textContent = Rankings[i].label;
			el.value = Rankings[i].value;
			select.appendChild(el);
		}
	}
}

$("#rank-tourn").change(function () {
	$("#hidden").val($(this).find(':selected').text());
	Window.alert($(this).find(':selected').text());
});

function onChangeCurrent() {
	calcPrice();
}

//This function should determine if the box is checked.
function isBoosted() {
	return document.getElementById("booster").checked;
}

function isStreamed() {
	return document.getElementById("streamer").checked;
}

function isExpress() {
	return document.getElementById("express").checked;
}

/* This function should calculate the price of the service based on options given. */
function calcPrice() {
	// alert("Calc Price")
	let wins = parseInt(elWins.value);
	let price = parseInt(elTourneyRank.value) * wins;

	/* Adds % to price if user selects the checkbox. */
	if (isBoosted()) {
		price += (0.40 * price);
	}
	if (isStreamed()) {
		price += (0.15 * price);
	}

	if (isExpress()) {
		price += (0.50 * price);
	}

	/* Convert to String Dollar Amount */
	price = price.toFixed(2);
	document.getElementById('price-text').innerHTML = "Boost $" + price + " USD";
}


let elEmail, elConfEmail;
let ppBtn;

function initCntct() {
	elEmail = document.getElementById("email");
	elConfEmail = document.getElementById("confEmail");
}

function isEmailValid() {
	Window.alert('Email needs to be confirmed.');
	let email = elEmail.value;
	let confEmail = elConfEmail.value;
	if (email !== confEmail) {
		Window.alert('Email Not Matching!');
		return false;
	}
}


let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
	// This function will display the specified tab of the form ...
	const x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	// ... and fix the Previous/Next buttons:
	if (n === 0) {
		document.getElementById("prevBtn").style.display = "none";
		document.getElementById("nextBtn").style.visibility = 'visible';
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n === (x.length - 1)) {
		document.getElementById("nextBtn").style.visibility = 'hidden';
		//nextBtn.type ="hidden";
		ppBtn.type = "image";
	} else {
		document.getElementById("nextBtn").innerHTML = "Next";
		ppBtn.type = "hidden";
	}
	// ... and run a function that displays the correct step indicator:
	fixStepIndicator(n);
}

function nextPrev(n) {
	// This function will figure out which tab to display
	const x = document.getElementsByClassName("tab");
	// Exit the function if any field in the current tab is invalid:
	if (n === 1 && !validateForm()) {
		return false;
	}
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
	if (currentTab >= x.length) {
		//...the form gets submitted:
		document.getElementById("regForm").submit();
		return false;
	}
	// Otherwise, display the correct tab:
	showTab(currentTab);
}

function validateForm() {
	// This function deals with validation of the form fields
	let x, y, i, valid = true;
	x = document.getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");
	// A loop that checks every input field in the current tab:
	for (i = 0; i < y.length; i++) {
		// If a field is empty...
		if (y[i].value === "") {
			// add an "invalid" class to the field:
			y[i].className += " invalid";
			// and set the current valid status to false:
			valid = false;
		}
	}
	// If the valid status is true, mark the step as finished and valid:
	if (valid) {
		document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	return valid; // return the valid status
}

function fixStepIndicator(n) {
	// This function removes the "active" class of all steps...
	let i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	//... and adds the "active" class to the current step:
	x[n].className += " active";
}

// Make sure to initialize the script.
initCntct();
initFormTourney();