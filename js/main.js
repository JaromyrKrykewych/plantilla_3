const menu = document.getElementById('menu');
const menuMobile = document.getElementById('menu-mobile');
const closeMenu = document.getElementById('close-menu');

menu.addEventListener('click', () => {
    menuMobile.style.display = 'flex';
})

closeMenu.addEventListener('click', () => {
    menuMobile.style.display = 'none';
})
