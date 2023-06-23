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
		//autoplay: true, // автовоспроизведение (false)
		//autoplaySpeed: 100, // скорость (3000)
		responsive: [
			{
				breakpoint: 550,
				settings: "unslick",
			}
		]
	});
})