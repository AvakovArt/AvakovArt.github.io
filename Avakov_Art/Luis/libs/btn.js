$('.menu-btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
	$('.header_mnu').slideToggle(500);
});