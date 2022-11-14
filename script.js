const btnMenu = document.querySelector('#menu-link');
function displayMenu() {
  const menu = document.querySelector('#menu-mobile');
  menu.classList.toggle('display-off');
}

btnMenu.addEventListener('click', displayMenu);
document.querySelectorAll('.close').forEach((l) => {
  l.addEventListener('click', displayMenu);
});
