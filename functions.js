/* Menú hamburguesa desplegable al hacer click */

const toggleButton = document.getElementById('menu-hamburger'); /*Creo una variable para alojar el elemento HTML 1*/
const navMenu = document.getElementById('nav-menu'); /*Creo una variable para alojar el elemento HTML 2*/

toggleButton.addEventListener('click', () => { /*Método para crear un evento: al hacer click, ejecuta la función*/
  navMenu.classList.toggle('active'); /*El método 'toggle' me permite alternar la clase '.active' del elemeto nav-menu*/
});

/* Formulario de contacto que requiera validación y entregue errores correspondientes */

const form = document.getElementById('form');


// Función para mostrar error
function showError(input, message) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector('small');
  
  input.classList.add('input-error');
  small.innerText = message;
  small.style.display = 'block';
}

// Función para limpiar error
function clearError(input) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector('small');

  input.classList.remove('input-error');
  small.innerText = '';
  small.style.display = 'none';
}

// Función para validar nombre (solo letras y espacios)
function validateName(input) {
  const nameRegex = /^[A-Za-z\s]+$/;

  if (!input.value.trim()) {
    showError(input, 'Please complete the NAME field');
  } else if (!nameRegex.test(input.value)) {
    showError(input, 'Name must contain only letters');
  } else {
    clearError(input);
  }
}

// Función para validar email
function validateEmail(input) {
  if (!input.value.trim()) {
    showError(input, 'Please complete the EMAIL field');
  } else if (!input.validity.valid) {
    showError(input, 'Please enter a valid EMAIL address');
  } else {
    clearError(input);
  }
}

// Función para validar teléfono (solo números)
function validatePhone(input) {
  const phoneRegex = /^[0-9]+$/;

  if (!input.value.trim()) {
    showError(input, 'Please complete the PHONE field');
  } else if (!phoneRegex.test(input.value)) {
    showError(input, 'Phone must contain only numbers');
  } else {
    clearError(input);
  }
}

// Función para validar mensaje (mínimo 5 caracteres)
function validateMessage(input) {
  if (!input.value.trim()) {
    showError(input, 'Please write a MESSAGE');
  } else if (input.value.trim().length < 5) {
    showError(input, 'Message must be at least 5 characters');
  } else {
    clearError(input);
  }
}

if (form != null) { //Aplico este if aquí para que el código no se rompa cuando estamos en páginas que no tienen form.
  // Asociar eventos blur a cada input
  const nameInput = document.getElementById('name');
  nameInput.addEventListener('blur', () => validateName(nameInput));

  const emailInput = document.getElementById('email');
  emailInput.addEventListener('blur', () => validateEmail(emailInput));

  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('blur', () => validatePhone(phoneInput));

  const messageInput = document.getElementById('message');
  messageInput.addEventListener('blur', () => validateMessage(messageInput));

  // Evitar enviar formulario si hay errores
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    validateName(nameInput);
    validateEmail(emailInput);
    validatePhone(phoneInput);
    validateMessage(messageInput);

    const errors = form.querySelectorAll('.input-error');

    if (errors.length === 0) {
      form.submit();
    }
  });
}

/* Página de proyectos que muestre primero el proyecto seleccionado */

const projects = [
  {
    id: "simplify",
    title: "Simplify",
    description: "UI Design & App Development",
    date: "Completed on June 22, 2021",
    image: "projects-section/1.jpg",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et! Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. <br> Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. <br> Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. <br> Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt quix duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nis cillum minim tempor enim."
  },
  {
    id: "dashcoin",
    title: "Dashcoin",
    description: "Web Development",
    date: "Completed on June 10, 2021",
    image: "projects-section/2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "vectorify",
    title: "Vectorify",
    description: "User Experience Design",
    date: "Completed on June 18, 2021",
    image: "projects-section/3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "lorem",
    title: "Lorem ipsum",
    description: "Lorem ipsum",
    date: "Completed on July 1, 2021",
    image: "projects-section/4.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];


if (document.getElementById("projects") != null) { //Aplico este if aquí para que el código no se rompa cuando estamos en páginas que no tienen form.

// Primero identifico desde dónde llega el usuario a la página.
const params = new URLSearchParams(window.location.search);
console.log(params);

const selectedProject = params.get('project'); // "simplify", "dashcoin", etc.
console.log(selectedProject);

// Capturo los elementos que hacen al "proyecto dinámico" (el que cambie cada vez).
const dinamicProject = document.getElementById('dinamic-project');
const title = dinamicProject.querySelector("h5");
const description = dinamicProject.querySelector("h6");
const date = dinamicProject.querySelector("h7");
const image = dinamicProject.querySelector("img");
const text = dinamicProject.querySelector("p");

function fillDinamicProject (selectedProject) {
  for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.id === selectedProject) {
        projectData = project;        
      }
  }
    title.innerText = projectData.title;
    description.innerText = projectData.description;
    date.innerText = projectData.date;
    image.src = projectData.image;
    text.innerHTML = projectData.text;
}

fillDinamicProject(selectedProject)

function removeProject(selectedProject) {
  const elementToRemove = document.getElementById(selectedProject);
  if (elementToRemove) {
    elementToRemove.style.display = 'none';
  }
}

removeProject(selectedProject);

}

/* Si bajás más de 300 píxeles, se agregue la clase .visible.
Si volvés arriba, se remueve y la flecha desaparece. */

const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});