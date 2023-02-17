$('.team-carousel').slick({
	mobileFirst: true,
	autoplay: true,
    autoplaySpeed: 3000,
	arrows: false,
	infinite: true,
    touchMove: true,
	responsive: [
        {
			breakpoint: 576,
			settings: { slidesToShow: 2, slidesToScroll: 2 },
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 3, slidesToScroll: 3 },
		},
        {
			breakpoint: 1400,
			settings: { slidesToShow: 4, slidesToScroll: 4 },
		},
	],
});
