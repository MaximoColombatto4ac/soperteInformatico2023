/* SUBMENU */
const itemMenu = document.getElementById('item');
const submenu = document.getElementById('subitem');
const subitems = document.querySelectorAll('.navbar__menu--subitems');
subitems.forEach(items => {
    items.addEventListener('click', () => {
        itemMenu.classList.remove('active');
        submenu.classList.remove('show');
    });
});
itemMenu.addEventListener('click', () => {
    itemMenu.classList.toggle('active');
    submenu.classList.toggle('show');
});

/* ONSCROLL NAVBAR */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (currentY >= 500) {
        navbar.style.backgroundColor = 'rgb(142, 130, 100)';
    } else {
        navbar.style.backgroundColor = 'transparent'
    }
});
