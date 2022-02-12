let menu = document.getElementsByClassName("content")[0];
let burger = document.getElementsByClassName("hamburger")[0];
let links = document.getElementsByClassName("links");

burger.addEventListener("click", function(e) {
    menu.classList.add("show");
    burger.classList.add("rotate-burger");


    for(let i = 0; i < links.length; i++) {

        links[i].classList.add("link-appear");
        links[i].classList.remove("link-disappear");
    }



    menu.classList.remove("show-reverse");
    burger.classList.remove("rotate-burger-reverse");
})

menu.addEventListener("mouseleave", function(e) {


    menu.classList.add("show-reverse");
    burger.classList.add("rotate-burger-reverse");

    for(let i = 0; i < links.length; i++) {
        links[i].classList.add("link-disappear");
        links[i].classList.remove("link-appear");
    }


});