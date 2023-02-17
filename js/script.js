document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const navColl = document.querySelector('.navbar-collapse');
	const allNavItems = document.querySelectorAll('.nav-link');

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	function removeShow(){
		navColl.classList.remove('show')
	}

	// allNavItems.forEach((item) =>
	// 	item.addEventListener('click', () => navColl.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
	window.addEventListener('click', removeShow)
});
