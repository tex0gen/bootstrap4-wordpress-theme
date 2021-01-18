// Sticky Menu
/* eslint-disable */
const StickyMenu = (elem) => {
	const nav = document.getElementsByClassName(elem);
	console.log(nav);
	// if (nav.length) {
	// 	const navTop = nav.offset().top,
	// 		navContainer = nav.parent(),
	// 		navContainerHeight = navContainer.outerHeight();

	// 	$(document).on('scroll', function () {
	// 		const scrollPos = $(document).scrollTop();

	// 		if (scrollPos >= navTop) {
	// 			nav.addClass('sticky');
	// 			navContainer.height(navContainerHeight);
	// 		} else {
	// 			nav.removeClass('sticky');
	// 			navContainer.height();
	// 		}
	// 	});
	// }
}

export default StickyMenu;
/* eslint-enable */
