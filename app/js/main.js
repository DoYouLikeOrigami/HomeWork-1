$(function() {
	console.log('JS работает?');
});

$(".hiddenMenu__button").click( function() {
	$(".mainNav").toggleClass('hidden');
});

/*
//Функция показа/скрытия меню
$(".work-new").click( function() {
	$(".popup-wrapper").removeClass('hidden');
} );

//Функция скрытия меню при нажатии на крестик в нём
$(".popup-close").click( function() {
	$(".popup-wrapper").addClass('hidden');
});
*/