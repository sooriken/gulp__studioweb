!function(){var e=50,n=4,d=e*n+"$";function t(t){document.getElementById("dropdownValueDisplay").innerHTML=t,d=e*(n=t)+"$",document.getElementById("dropdownResultDisplay").innerHTML=d}function o(t,o){document.getElementById("dropdownLevelDisplay").innerHTML=t,d=(e=o)*n+"$",document.getElementById("dropdownResultDisplay").innerHTML=d}document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[0].addEventListener("click",(function(){t(4)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[1].addEventListener("click",(function(){t(5)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[2].addEventListener("click",(function(){t(6)})),document.getElementById("dropdownValues").querySelectorAll(".money-form__dropdown-text")[3].addEventListener("click",(function(){t(7)})),document.getElementById("dropdownTexts").querySelectorAll(".money-form__dropdown-text")[0].addEventListener("click",(function(){o("Начинающая",50)})),document.getElementById("dropdownTexts").querySelectorAll(".money-form__dropdown-text")[1].addEventListener("click",(function(){o("Опытная",100)})),document.getElementById("dropdownTexts").querySelectorAll(".money-form__dropdown-text")[2].addEventListener("click",(function(){o("Топ модель",300)})),document.getElementById("dropdownLevelButton").addEventListener("click",(function(){document.getElementById("dropdownTexts").classList.contains("money-form__dropdown--hidden")?document.getElementById("dropdownTexts").classList.remove("money-form__dropdown--hidden"):document.getElementById("dropdownTexts").classList.add("money-form__dropdown--hidden")})),document.getElementById("dropdownValueButton").addEventListener("click",(function(){document.getElementById("dropdownValues").classList.contains("money-form__dropdown--hidden")?document.getElementById("dropdownValues").classList.remove("money-form__dropdown--hidden"):document.getElementById("dropdownValues").classList.add("money-form__dropdown--hidden")})),document.getElementById("sidenavOpen").addEventListener("click",(function(){document.getElementById("sidenav").classList.remove("side-nav--hidden"),document.getElementById("sidenavPlaceholder").classList.remove("side-nav__placeholder--hidden")})),document.getElementById("sidenavClose").addEventListener("click",(function(){document.getElementById("sidenav").classList.add("side-nav--hidden"),document.getElementById("sidenavPlaceholder").classList.add("side-nav__placeholder--hidden")})),document.querySelectorAll("a[href^='#']").forEach((e=>{console.log("22"),e.addEventListener("click",(function(e){e.preventDefault();let n=this.getAttribute("href").substring(1);const d=document.getElementById(n).getBoundingClientRect().top-0;window.scrollBy({top:d,behavior:"smooth"})}))}))}();