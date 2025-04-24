const toggleButton = document.getElementById('menu-hamburger'); /*Creo una variable para alojar el elemento HTML 1*/
const navMenu = document.getElementById('nav-menu'); /*Creo una variable para alojar el elemento HTML 2*/

toggleButton.addEventListener('click', () => { /*Método para crear un evento: al hacer click, ejecuta la función*/
  navMenu.classList.toggle('active'); /*El método 'toggle' me permite alternar la clase '.active' del elemeto nav-menu*/
});