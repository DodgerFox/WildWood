"use strict";window.onload=()=>{$(".timeline").mCustomScrollbar({scrollInertia:350,autoHideScrollbar:!0,mouseWheel:{scrollAmount:200}}),$(".article").mCustomScrollbar({scrollInertia:350,autoHideScrollbar:!0,mouseWheel:{scrollAmount:200}})};let inputWithoutFocus=()=>{document.querySelectorAll("input").forEach(e=>{e.addEventListener("keyup",()=>{e.value.length>0?e.classList.add("active"):e.classList.remove("active")})})},menu=()=>{const e=document.querySelector(".header-gamburger"),t=document.querySelector(".nav");e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("open")})},scroll=()=>{$(".nav-list__item").on("click",(function(){$(".nav").removeClass("open");var e=event.target.getAttribute("href");event.preventDefault(),$("html,body").stop().animate({scrollTop:$(e).offset().top},1e3)}))},data=()=>{const e=["Чернов Алексей Владимирович","Санкт-Петербург","sniperr_89","darkdodgerfox@yandex.ru","Мне понравился уровень компании WM, реализованные проекты, и предлагаемый удаленный формат. Я надеюсь на интересные задачи, которые позволят мне развиваться в javascript."],t=document.querySelectorAll(".input input");document.querySelector(".textarea").value=e[4],t.forEach((t,l)=>{t.name;t.value=e[l]})},range=()=>{$('input[type="range"]').rangeslider({polyfill:!1,onSlide:function(e,t){const l=document.querySelector(".rangeslider__fill"),r=document.querySelector(".rangeslider__handle");switch(t){case 0:l.style.width="0%",r.style.transform="translate(-11px, 0)";break;case 100:l.style.width="25%",r.style.transform="translate(-6px, 0)";break;case 200:l.style.width="50%",r.style.transform="translate(0px, 0)";break;case 300:l.style.width="50%",r.style.left="48.3%";break;case 400:l.style.width="100%",r.style.transform="translate(9px, 0)";break;default:alert("Нет таких значений")}}})};