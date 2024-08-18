// переменные для дропдауна
var dropdownResultLevel = 50;
var dropdownResultValue = 4;
var dropdownResultLang = 1;
var dropdownResult = Math.round((dropdownResultLevel * dropdownResultValue * dropdownResultLang)*4) + "$";
// переменные для слайдера
var sliderId = 0;

// переменные для слайдера "gain"
var gainItems = document.getElementById("gainSlider").querySelectorAll('.gain-item');
var gainAll = gainItems.length;
var gainId = 0;
console.log(gainAll);

// функция для слайдера gain влево
document.getElementById("gainLeft").addEventListener('click',function (){
    gainId = gainId - 1;
    if (gainId < 0) {
        gainId = gainAll - 1; 
    } 
    sliderGain(); 
});
// функция для слайдера gain вправо
document.getElementById("gainRight").addEventListener('click',function (){
    gainId = gainId + 1;
    if (gainId == gainAll) {
        gainId = 0; 
    } 
    sliderGain(); 
});

// функция слайдера gain
function sliderGain() {
    var i = 0;
    while (i < gainAll) {
        gainItems[i].classList.remove('gain-item--active');
        i++;
    }
    gainItems[gainId].classList.add('gain-item--active');
}

function dropdownValue(dropdownNumber) {
    document.getElementById("dropdownValueDisplay").innerHTML = dropdownNumber;
    dropdownResultValue = dropdownNumber;
    dropdownResult = Math.round((dropdownResultLevel * dropdownResultValue * dropdownResultLang)*4) + "$";
    document.getElementById("dropdownResultDisplay").innerHTML = dropdownResult;
}

function dropdownLevel(dropdownText, dropdownTextLevel) {
    document.getElementById("dropdownLevelDisplay").innerHTML = dropdownText;
    dropdownResultLevel = dropdownTextLevel;
    dropdownResult = Math.round((dropdownResultLevel * dropdownResultValue * dropdownResultLang)*4) + "$";
    document.getElementById("dropdownResultDisplay").innerHTML = dropdownResult;
}

function dropdownLang(dropdownLang, dropdownLangLevel) {
    document.getElementById("dropdownLangDisplay").innerHTML = dropdownLang;
    dropdownResultLang = dropdownLangLevel;
    console.log(dropdownResultLevel);
    console.log(dropdownResultValue);
    console.log(dropdownResultLang);
    dropdownResult = Math.round((dropdownResultLevel * dropdownResultValue * dropdownResultLang)*4) + "$";
    console.log(dropdownResult);
    document.getElementById("dropdownResultDisplay").innerHTML = dropdownResult;
}

// listeners dropdownValues
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[0].addEventListener('click',function (){
    dropdownValue(4);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[1].addEventListener('click',function (){
    dropdownValue(5);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[2].addEventListener('click',function (){
    dropdownValue(6);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[3].addEventListener('click',function (){
    dropdownValue(7);
});

// listeners dropdownTexts
document.getElementById("dropdownTexts").querySelectorAll('.money-form__dropdown-text')[0].addEventListener('click',function (){
    dropdownLevel("Начинающая", 50); 
});
document.getElementById("dropdownTexts").querySelectorAll('.money-form__dropdown-text')[1].addEventListener('click',function (){
    dropdownLevel("Опытная", 100);
});
document.getElementById("dropdownTexts").querySelectorAll('.money-form__dropdown-text')[2].addEventListener('click',function (){
    dropdownLevel("Топ модель", 200);
});

// listeners dropdownLang
document.getElementById("dropdownLang").querySelectorAll('.money-form__dropdown-text')[0].addEventListener('click',function (){
    dropdownLang("Базовый", 1); 
});
document.getElementById("dropdownLang").querySelectorAll('.money-form__dropdown-text')[1].addEventListener('click',function (){
    dropdownLang("Средний", 1.1);
});
document.getElementById("dropdownLang").querySelectorAll('.money-form__dropdown-text')[2].addEventListener('click',function (){
    dropdownLang("Разговорный", 1.2);
});
document.getElementById("dropdownLang").querySelectorAll('.money-form__dropdown-text')[3].addEventListener('click',function (){
    dropdownLang("Профессиональный", 1.3);
});
console.log("228");

// dropdownLevel function
document.getElementById("dropdownLevelButton").addEventListener('click',function (){
    if(document.getElementById("dropdownTexts").classList.contains("money-form__dropdown--hidden")) {
        document.getElementById("dropdownTexts").classList.remove("money-form__dropdown--hidden");
    } else {
        document.getElementById("dropdownTexts").classList.add("money-form__dropdown--hidden");
    }
});  

 // dropdownValue function
document.getElementById("dropdownValueButton").addEventListener('click',function (){
    if(document.getElementById("dropdownValues").classList.contains("money-form__dropdown--hidden")) {
        document.getElementById("dropdownValues").classList.remove("money-form__dropdown--hidden");
    } else {
        document.getElementById("dropdownValues").classList.add("money-form__dropdown--hidden");
    }
});  
 // dropdownValue function
document.getElementById("dropdownLangButton").addEventListener('click',function (){
    if(document.getElementById("dropdownLang").classList.contains("money-form__dropdown--hidden")) {
        document.getElementById("dropdownLang").classList.remove("money-form__dropdown--hidden");
    } else {
        document.getElementById("dropdownLang").classList.add("money-form__dropdown--hidden");
    }
});  

 
// функция открытия бокового меню
document.getElementById("sidenavOpen").addEventListener('click',function (){
    document.getElementById("sidenav").classList.remove("side-nav--hidden");
    document.getElementById("sidenavPlaceholder").classList.remove("side-nav__placeholder--hidden");
}); 
// функция закрытия бокового меню
document.getElementById("sidenavClose").addEventListener('click',function (){
    document.getElementById("sidenav").classList.add("side-nav--hidden");
    document.getElementById("sidenavPlaceholder").classList.add("side-nav__placeholder--hidden");
}); 
// функция закрытия бокового меню при нажатии на серую зону
document.getElementById("sidenavPlaceholder").addEventListener('click',function (){
    document.getElementById("sidenav").classList.add("side-nav--hidden");
    document.getElementById("sidenavPlaceholder").classList.add("side-nav__placeholder--hidden");
}); 

// функция для слайдера
document.getElementById("sliderLeft").addEventListener('click',function (){
    sliderId = sliderId - 1;
    if (sliderId < 0) {
        sliderId = 3; 
    } 
    slide(); 
});
// функция для слайдера
document.getElementById("sliderRight").addEventListener('click',function (){
    sliderId = sliderId + 1;
    if (sliderId > 3) { 
        sliderId = 0;
    }
    slide(); 
});


function slide() {
    var i = 0;
    while (i < 4) {
        document.getElementById("slider").querySelectorAll('.faq__item')[i].classList.remove('faq__item--active');
        console.log(document.getElementById("slider").querySelectorAll('.faq__item')[i]);
        i++;
    }
    console.log(document.getElementById("slider").querySelectorAll('.faq__item')[sliderId]);
    document.getElementById("slider").querySelectorAll('.faq__item')[sliderId].classList.add('faq__item--active');
}

// Скролл до элементов
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});