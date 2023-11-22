let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    console.log("hi")
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > window.innerHeight) {
        header.style.top = "-120px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});