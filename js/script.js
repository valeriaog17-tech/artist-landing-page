const reveals =document.querySelectorAll(".reveal");

const observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
});

reveals.forEach(section => {
    observe.observe(section);
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});