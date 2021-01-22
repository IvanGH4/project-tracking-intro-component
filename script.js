const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');

const menuIcon = './images/icon-hamburger.svg';
const closeIcon = './images/icon-close.svg';

icon.addEventListener('click', () => {
    menu.classList.toggle('active');

    menu.classList.contains('active') ? icon.src = closeIcon : icon.src = menuIcon;
});