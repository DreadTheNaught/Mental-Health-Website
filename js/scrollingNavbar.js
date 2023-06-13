window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scroll-nav").style.background-color= "white";
    } else {
        document.getElementById("scroll-nav").style.fontSize = "90px";
    }
}

