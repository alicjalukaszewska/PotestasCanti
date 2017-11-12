
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
		dropdown.classList.add('activateDropdown');
	} else {
		dropdown.style.display = 'none';
		dropdown.classList.remove('activateDropdown');
	}
}

navbarToggleBtn.addEventListener('click', showNavbar);