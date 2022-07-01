const menuBtn = document.querySelector('.menu-btn');
const ham  = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const  menu = document.querySelector('.menu-nav');
const link = document.querySelectorAll('.menu-nav_item');

let showMenu = false;


menuBtn.addEventListener('click',togglemenu);

function togglemenu(){
    if(!showMenu){
        ham.classList.add('open');
        nav.classList.add('open');
        menu.classList.add('open');
        link.forEach(item => item.classList.add('open'));
        showMenu =true;
    }
    else{
        ham.classList.remove('open');
        nav.classList.remove('open');
        menu .classList.remove('open');
        link.forEach(item => item.classList.remove('open'));
        showMenu =false;
    }
}