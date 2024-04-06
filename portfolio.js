function toggleMenu(){
    const menu=document.querySelector(".menulinks");
    const icon=document.querySelector(".hamicon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed=new Typed(".p2",{
    strings:["Frontend Developer", "Web Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});