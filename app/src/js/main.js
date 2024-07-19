var dropdownResultLevel = 50;
var dropdownResultValue = 4;
var dropdownResult = dropdownResultLevel * dropdownResultValue + "$";

function dropdownValue(dropdownNumber) {
    document.getElementById("dropdownValueDisplay").innerHTML = dropdownNumber;
    dropdownResultValue = dropdownNumber;
    dropdownResult = dropdownResultLevel * dropdownResultValue + "$";
    document.getElementById("dropdownResultDisplay").innerHTML = dropdownResult;
};

function dropdownLevel(dropdownText, dropdownTextLevel) {
    document.getElementById("dropdownLevelDisplay").innerHTML = dropdownText;
    dropdownResultLevel = dropdownTextLevel;
    dropdownResult = dropdownResultLevel * dropdownResultValue + "$";
    document.getElementById("dropdownResultDisplay").innerHTML = dropdownResult;
};

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
    dropdownLevel("Топ модель", 300);
});

// dropdownLevel function
document.getElementById("dropdownLevelButton").addEventListener('click',function (){
    if(document.getElementById("dropdownTexts").classList.contains("money-form__dropdown--hidden")) {
        document.getElementById("dropdownTexts").classList.remove("money-form__dropdown--hidden");
    } else {
        document.getElementById("dropdownTexts").classList.add("money-form__dropdown--hidden");
    };
});  

 // dropdownValue function
document.getElementById("dropdownValueButton").addEventListener('click',function (){
    if(document.getElementById("dropdownValues").classList.contains("money-form__dropdown--hidden")) {
        document.getElementById("dropdownValues").classList.remove("money-form__dropdown--hidden");
    } else {
        document.getElementById("dropdownValues").classList.add("money-form__dropdown--hidden");
    };
});  

 
document.getElementById("sidenavOpen").addEventListener('click',function (){
    document.getElementById("sidenav").classList.remove("side-nav--hidden");
    document.getElementById("sidenavPlaceholder").classList.remove("side-nav__placeholder--hidden");
}); 

document.getElementById("sidenavClose").addEventListener('click',function (){
    document.getElementById("sidenav").classList.add("side-nav--hidden");
    document.getElementById("sidenavPlaceholder").classList.add("side-nav__placeholder--hidden");
}); 

// Скролл до элементов
document.querySelectorAll("a[href^='#']").forEach(link => {
    console.log('22');
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