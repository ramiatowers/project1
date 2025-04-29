const toggleButton = document.getElementById('menu-hamburger'); /*Creo una variable para alojar el elemento HTML 1*/
const navMenu = document.getElementById('nav-menu'); /*Creo una variable para alojar el elemento HTML 2*/

toggleButton.addEventListener('click', () => { /*Método para crear un evento: al hacer click, ejecuta la función*/
  navMenu.classList.toggle('active'); /*El método 'toggle' me permite alternar la clase '.active' del elemeto nav-menu*/
});

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