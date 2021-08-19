$(document).ready(function () {
    var currentFloor = 2; //переменная, где храниться текущий этаж   
    var floorPath = $(".home-image path"); //каждый отдельный этаж в svg
    var counterUp = $(".counter-up"); //кнопка увилечения этажа
    var counterDown = $(".counter-down"); //кнопка уменьшения этажа

    //Функция при наведении мышкой этаж
    floorPath.on("mouseover", function() { 
        floorPath.removeClass('current-floor'); // удаляем активный класс этажа
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записывае значение этажа в счетчике справа
    });
    //Отслеживаем клик по кнопке вверх
    counterUp.on("click", function () {     
        if (currentFloor < 18) { //проверяем значение этажа, не больше 18
            currentFloor++; //прибовляем 1 этаж
            uscurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false}); //форматируем переменную с этажом 01 вместо 1
            $(".counter").text(uscurrentFloor); // записывае значение этажа в счетчике справа
            floorPath.removeClass('current-floor'); // удаляем активный класс этажа
            $(`[data-floor=${uscurrentFloor}]`).toggleClass('current-floor'); // посвечиваем текущий этаж
        }
    });
    //Отслеживаем клик по кнопке вниз
    counterDown.on("click", function () {
        if (currentFloor > 2) { //проверяем значение этажа, не ментше 02
            currentFloor--; // отнимае 1 этаж
            uscurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false}); //форматируем переменную с этажом 01 вместо 1
            $(".counter").text(uscurrentFloor); // записывае значение этажа в счетчике справа
            floorPath.removeClass('current-floor'); // удаляем активный класс этажа
            $(`[data-floor=${uscurrentFloor}]`).toggleClass('current-floor'); // посвечиваем текущий этаж
        }
    });
});