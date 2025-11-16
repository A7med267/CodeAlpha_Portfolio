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


        const scrollBtn = document.getElementById('up');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
