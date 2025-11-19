const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const configPanel = document.getElementById('config-panel');
const closeConfig = document.getElementById('close-config');

const themeToggle = document.getElementById('theme-toggle');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active'); 
});

const configButton = navMenu.querySelector('li:nth-child(4) a');

configButton.addEventListener('click', (event) => {
  event.preventDefault();

  navMenu.classList.remove('active');
  hamburger.classList.remove('active');

  configPanel.classList.add('active');
});

closeConfig.addEventListener('click', () => {
  configPanel.classList.remove('active');
});


// ---------- SISTEMA DE TEMA ----------

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
} else {
    document.body.classList.add("light-theme");
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    }
});
