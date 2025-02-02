document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show');
      menuToggle.classList.toggle('open');
    });
  });
  