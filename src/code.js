//add class name to links for current page
for (var i = 1; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
}


//dropdown menu on mobile devices
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

//show "normal" menu when window is wider than 768px
window.addEventListener('resize', () => {
	if (window.innerWidth >= 768){
		dropdown.style.display = 'block';
	}
})

function changeSite (direction) {
    let link = document.querySelector('.dropdown a.active');
    if (direction === 'down') {
        document.location = link.nextElementSibling.href;
    } else {
        document.location = link.previousElementSibling.href;
    }
}

const body = document.querySelector('body');

let lastScrollTop = window.pageYOffset || window.scrollTop;

const html = document.documentElement;

window.addEventListener('keydown', function (e){
    if (e.keyCode === 38) {
        scrollUp();
    } else if(e.keyCode === 40) {
        scrollDown();
    }
});
function scrollDown () {
    const windowOnBottom = window.scrollY + window.innerHeight;
    const maxScroll = body.scrollHeight;
    if (windowOnBottom === maxScroll){
        const events = ['DOMMouseScroll', 'mousewheel'];
        events.forEach(event => {
            html.addEventListener(event, function () {
                changeSite('down');
            });
        });

        html.addEventListener('keydown', (e) => {
            if (e.keyCode === 40) 
                changeSite('down');

        });
    }
};



function scrollUp () {
    if (window.scrollY === 0){
        const events = ['DOMMouseScroll', 'mousewheel'];
        events.forEach(event => {
            html.addEventListener(event, function () {
                changeSite('up');
            });
        });

        html.addEventListener('keydown', (e) => {
            if (e.keyCode === 38) 
                changeSite('up');
        });
   }
}

html.addEventListener('DOMMouseScroll', function (e) {
    var delta = e.detail;
    if (delta > 0) {
        scrollDown();
    } else if (delta < 0) {
        scrollUp();
    }
});

html.addEventListener('mousewheel', function (e) {
    var delta = e.wheelDeltaY;
    if (delta < 0) {
        scrollDown();
    } else if (delta > 0) {
        scrollUp();
    }
});

// function loadContent() {
//      let contentDiv = document.getElementById("moreContent");
//      contentDiv.innerHTML='<object type="text/html" data="about.html" ></object>';
// }

// window.addEventListener('load', () => {
//     if (window.innerWidth <= 768){
//         loadContent();
//     }
// })

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