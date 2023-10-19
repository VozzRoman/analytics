

//------------------burger--------------------//
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.page__header-list').toggleClass('active');
		$('body').toggleClass('lock');

	});
});

//-----------SLider Swiper-----------//
if (screen.width <=1100) {

const swiper = new Swiper('.swiper' ,{ 
	slidesPerView: 1,
	
}) ;

}

