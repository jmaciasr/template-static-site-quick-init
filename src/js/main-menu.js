const menuIcon = document.getElementById('menuIcon');
const navItems = document.getElementById('navItems');
const navigation = document.getElementById('navigation');
let menuOpen = 1;

let showMenu = () => {
	if (menuOpen == 1) {
		navItems.classList.toggle('nav-display');
		menuIcon.classList.toggle('menu-icon-x');
		menuOpen ++;
	} else {
		navItems.classList.toggle('nav-display');
		menuIcon.classList.toggle('menu-icon-x');
		menuOpen = 1;
	}
}

menuIcon.addEventListener('click', showMenu);

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 120) {
        $('#navigation').addClass('nav--fixed');
    } else {
        $('#navigation').removeClass('nav--fixed');
    }
});