
for (var i = 1; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
}

var navbarToggleBtn = document.querySelector('.navbar-toggle');
var dropdown = document.querySelector('.dropdown');

function showNavbar() {
	let display = window.getComputedStyle(dropdown,null).getPropertyValue("display");
	if (display === 'none'){
		dropdown.style.display = 'block';
	} else {
		dropdown.style.display = 'none';
	}
}

navbarToggleBtn.addEventListener('click', showNavbar);
window.addEventListener('resize', () => {
	if (window.innerWidth >= 768){
		dropdown.style.display = 'block';
	}
})