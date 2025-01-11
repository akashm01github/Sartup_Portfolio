let openBtn = document.querySelector(".ri-menu-line");

let closeBtn = document.querySelector(".ri-close-large-line");

let menu  = document.querySelector(".navbar_menu");


openBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
})


closeBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
})