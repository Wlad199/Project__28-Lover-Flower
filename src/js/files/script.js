// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера - слик(MW 3.2)
$(document).ready(function () {
	$('.popular__content').slick({
		arrows: true, // стрелки
		dots: false, // точки
		//adaptiveHeight: true, // адаптивная высота (false)
		slidesToShow: 3, // кол-во показ. слайдов
		touchThreshold: 10, // расстояние для считывания свайпа (5 1/5 экрана)
		centerMode: true, // добавляет класс к центральному слайду (false)
		autoplay: true, // автовоспроизведение (false)
		autoplaySpeed: 1000, // скорость (3000)
		responsive: [
			{
				breakpoint: 550,
				settings: "unslick",
			}
		]
	});
})

//////////////////////////////////////////////////////////////////////
// Price-scroll

function setLeftValue() {
	let min = parseInt($("#input-left").attr('min')), // Минимально допустимое число
		max = parseInt($("#input-left").attr('max')), // Максимально допустимое число
		text = Math.min(parseInt($("#input-left").val()), parseInt($("#input-right").val()) - 1), // Минимальное значение ползунка
		percent = ((text - min) / (max - min)) * 100; // % Левого значения

	$("#input-left").val(text);
	$(".price_value_min").text(text.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' P');
	$(".slider > .thumb.left").css('left', percent + "%");
	$(".slider > .range").css('left', percent + "%");
}
setLeftValue();

function setRightValue() {
	let min = parseInt($("#input-right").attr('min')),
		max = parseInt($("#input-right").attr('max')),
		text = Math.max(parseInt($("#input-right").val()), parseInt($("#input-left").val()) + 1),
		percent = ((text - min) / (max - min)) * 100;

	$("#input-right").val(text);
	$(".price_value_max").text(text.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' P');
	$(".slider > .thumb.right").css('right', (100 - percent) + "%");
	$(".slider > .range").css('right', (100 - percent) + "%");
}
setRightValue();

$("#input-left").bind("input", setLeftValue);
$("#input-right").bind("input", setRightValue);

//////////////////////////////////////////////////////////////////////////////////