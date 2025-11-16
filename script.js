const navLinks = document.querySelector('.nav-links'); 
const openMenu = document.querySelector('.open_menu');  
const closeMenu = document.querySelector('.close_menu'); 

openMenu.onclick = () => {
  navLinks.classList.toggle("active");
}

closeMenu.onclick = () => {
  navLinks.classList.remove("active");
}

// ========== Scroll to Top Button ==========
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

// ========== Light/Dark Mode Toggle ==========
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

//  localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeIcon.classList.replace('fa-sun', 'fa-moon');
}

// switch mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
//change icone
  if (body.classList.contains('light-mode')) {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  }
});
