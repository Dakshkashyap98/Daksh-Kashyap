burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list');
navRight = document.querySelector('.nav-right')

burger.addEventListener("click", ()=>{
    navRight.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('nav-h-resp');  
})