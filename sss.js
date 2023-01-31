const iconoNav = document.querySelector(".icono-nav")
const nav = document.querySelector(".nav")


iconoNav.addEventListener("click",function open(){
    nav.classList.toggle("nav_visible")
})



const links = document.querySelectorAll(".nav a");

for (let link of links) {
    link.addEventListener("click", closeMenu);
  }
  
  function closeMenu() {
    nav.classList.remove("nav_visible");
  }









    
