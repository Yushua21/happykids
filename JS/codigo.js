const btnMenu = document.getElementById('menu');
const asideMenu = document.getElementById('aside-menu');
/*const btnClose = document.querySelector('.popup-close');*/

btnMenu.addEventListener('click', function(){
        asideMenu.classList.toggle('showMenu');
});