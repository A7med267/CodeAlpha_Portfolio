const navLinks = document.querySelector('.nav-links'); 
const openMenu = document.querySelector('.open_menu');  
const closeMenu = document.querySelector('.close_menu'); 

openMenu.onclick = () => {
  navLinks.classList.add("active");
}
openMenu.onclick = () => {
  navLinks.classList.toggle("active");
}

closeMenu.onclick = () => {
  navLinks.classList.remove("active");
}
