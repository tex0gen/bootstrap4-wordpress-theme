// import {
// 	Alert,
// 	BaseComponentbutton,
// 	Carousel,
// 	Collapse,
// 	Dropdown,
// 	Modal,
// 	Popover,
// 	ScrollSpy,
// 	Tab,
// 	Toast,
// 	Tooltip
// } from 'bootstrap';
// import heightMatcher from './utilities/heightMatcher';
/* eslint-disable */
import Swiper, { Autoplay } from 'swiper';
import StickyMenu from './components/stickyMenu';
console.log('lol');
Swiper.use([Autoplay]);

new Swiper('.slider', {
	slidesPerView: 1,
	centeredSlides: true,
	effect: 'slide',
	loop: true,
	autoplay: {
		delay: 5000,
	},
});

StickyMenu('.sticky-nav');

// $(window).on('load, resize', stickyMenu('.sticky-nav'));

// $('.woocommerce-review-link').on('click', function (e) {
// 	e.preventDefault();

// 	const anchorToScroll = $('.woocommerce-tabs'),
// 		scrollToPoint = $(anchorToScroll).offset().top;

// 	$('body').animate({
// 		scrollTop: scrollToPoint - 60,
// 	});
// });

// OWL CAROUSEL REMOVED
// /*
//  * Carousel
//  */
// const oc = $('.owl-carousel');
// const ocOptions = oc.data('carousel-options');
// const defaults = {
//   items: 1,
//   loop: true,
//   autoplay: true,
//   autoplayHoverPause: true,
//   checkVisible: false
// };

// oc.owlCarousel($.extend(defaults, ocOptions));
/* eslint-enable */
