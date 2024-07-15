var dropdownResultLevel = 200;
var dropdownResultValue = 1;
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
    dropdownValue(1);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[1].addEventListener('click',function (){
    dropdownValue(2);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[2].addEventListener('click',function (){
    dropdownValue(3);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[3].addEventListener('click',function (){
    dropdownValue(4);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[4].addEventListener('click',function (){
    dropdownValue(5);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[5].addEventListener('click',function (){
    dropdownValue(6);
});
document.getElementById("dropdownValues").querySelectorAll('.money-form__dropdown-text')[6].addEventListener('click',function (){
    dropdownValue(7);
});

// listeners dropdownTexts
document.getElementById("dropdownTexts").querySelectorAll('.money-form__dropdown-text')[0].addEventListener('click',function (){
    dropdownLevel("Начинающая", 200); 
});
document.getElementById("dropdownTexts").querySelectorAll('.money-form__dropdown-text')[1].addEventListener('click',function (){
    dropdownLevel("Опытная", 400);
});
document.getElementById("dropdownTexts").querySelectorAll('.money-form__dropdown-text')[2].addEventListener('click',function (){
    dropdownLevel("Топ модель", 800);
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

