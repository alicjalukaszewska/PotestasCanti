
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

/* Light YouTube Embeds by @labnol */
    /* Web: http://labnol.org/?p=27941 */

    document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
}