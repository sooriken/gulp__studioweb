!function(){var e=200,n=1,d=e*n+"$";function t(t){document.getElementById("dropdownValueDisplay").innerHTML=t,d=e*(n=t)+"$",document.getElementById("dropdownResultDisplay").innerHTML=d}function o(t,o){document.getElementById("dropdownLevelDisplay").innerHTML=t,d=(e=o)*n+"$",document.getElementById("dropdownResultDisplay").innerHTML=d}document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[0].addEventListener("click",(function(){t(1)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[1].addEventListener("click",(function(){t(2)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[2].addEventListener("click",(function(){t(3)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[3].addEventListener("click",(function(){t(4)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[4].addEventListener("click",(function(){t(5)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[5].addEventListener("click",(function(){t(6)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[6].addEventListener("click",(function(){t(7)})),document.getElementById("dropdownTexts").querySelectorAll(".money-form__dropdown-text")[0].addEventListener("click",(function(){o("Начинающая",200)})),document.getElementById("dropdownTexts").querySelectorAll(".money-form__dropdown-text")[1].addEventListener("click",(function(){o("Опытная",400)})),document.getElementById("dropdownTexts").querySelectorAll(".money-form__dropdown-text")[2].addEventListener("click",(function(){o("Топ модель",800)})),document.getElementById("dropdownLevelButton").addEventListener("click",(function(){document.getElementById("dropdownTexts").classList.contains("money-form__dropdown--hidden")?document.getElementById("dropdownTexts").classList.remove("money-form__dropdown--hidden"):document.getElementById("dropdownTexts").classList.add("money-form__dropdown--hidden")})),document.getElementById("dropdownValueButton").addEventListener("click",(function(){document.getElementById("dropdownValues").classList.contains("money-form__dropdown--hidden")?document.getElementById("dropdownValues").classList.remove("money-form__dropdown--hidden"):document.getElementById("dropdownValues").classList.add("money-form__dropdown--hidden")})),document.getElementById("sidenavOpen").addEventListener("click",(function(){document.getElementById("sidenav").classList.remove("side-nav--hidden"),document.getElementById("sidenavPlaceholder").classList.remove("side-nav__placeholder--hidden")})),document.getElementById("sidenavClose").addEventListener("click",(function(){document.getElementById("sidenav").classList.add("side-nav--hidden"),document.getElementById("sidenavPlaceholder").classList.add("side-nav__placeholder--hidden")}))}();