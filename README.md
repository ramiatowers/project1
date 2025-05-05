# Circle — Responsive Web Portfolio

## Descripción del proyecto

**Circle** es una web responsive desarrollada con HTML, CSS y JavaScript puro (sin frameworks), que simula un sitio real para una agencia digital creativa. El objetivo de este proyecto es demostrar habilidades en diseño adaptativo (mobile-first), interactividad básica en el frontend, manipulación dinámica del DOM, y validación de formularios. El proyecto está estructurado en múltiples páginas (`index.html`, `projects.html`, `contact.html` y `404.html`) y se apoya en una hoja de estilos centralizada (`styles.css`) y un único archivo JavaScript (`functions.js`) que gestiona el comportamiento interactivo.

---

## Estructura del sitio

### 1. **Página principal (`index.html`)**

Contiene todas las secciones centrales del sitio:

- **Header y navegación**: con menú hamburguesa para mobile, y menú expandido a partir de los 768px.
- **Sección Hero**: encabezado con texto promocional y call-to-actions, acompañado de imágenes decorativas animadas que aparecen a partir de resolución tablet.
- **Sección de logos**: muestra logotipos de marcas asociadas (Airbnb, Google, Microsoft, etc.), con efecto hover.
- **Proyectos destacados**: presenta una galería de proyectos recientes, cada uno con su título, categoría y enlace hacia una página detallada.
- **Testimonios**: bloque con fondo oscuro, cita textual de un cliente y elementos decorativos (emojis flotantes) visibles desde tablet.
- **Servicios ofrecidos**: UI, UX y desarrollo de aplicaciones; cada servicio con icono, descripción y enlace de navegación interna.
- **Newsletter / contacto rápido**: formulario simulado con campo de email y botón de suscripción que redirige al usuario a la página de contacto.
- **Footer**: incluye dirección, enlaces útiles y repetición del logotipo.

Adicionalmente, se incorpora un **botón flotante "scroll-to-top"** que aparece al hacer scroll y permite volver al header de forma suave.

---

### 2. **Página de proyectos (`projects.html`)**

Permite visualizar proyectos individuales en detalle y cuenta con:

- Un **proyecto destacado cargado dinámicamente** en función del parámetro URL (`?project=simplify`, por ejemplo). Esta sección muestra título, descripción, fecha, imagen y un texto extenso.
- Una galería con los demás proyectos disponibles, excepto el actualmente activo (que se oculta para evitar redundancia).
- Un bloque inferior con el mismo formulario de contacto simulado que la home, como cierre del contenido.

La lógica de carga dinámica se implementa en JavaScript usando `window.location.search` y un array con los proyectos.

---

### 3. **Página de contacto (`contact.html`)**

Incluye un **formulario con validación en tiempo real** de los siguientes campos:

- Nombre: sólo permite letras y espacios.
- Email: requiere formato válido.
- Teléfono: sólo números.
- Mensaje: mínimo 5 caracteres.

Se incluyen íconos decorativos que reaccionan ante errores y campos con contorno rojo si hay validaciones fallidas. Los errores se muestran con mensajes contextualizados debajo de cada input.

El formulario se valida al perder el foco (`blur`) y antes de enviar (`submit`). Si no hay errores, se procede al envío.

---

### 4. **Página de error 404 (`404.html`)**

Es una página personalizada de error que se alinea visual y gráficamente al resto del sitio, con el mismo header y footer. Muestra un mensaje claro, un número 404 destacado y un botón para volver al home.

---

## Lógica y funcionalidades JavaScript

El archivo `functions.js` se encarga de:

- **Toggle del menú hamburguesa**: activa/desactiva el menú en mobile.
- **Validación del formulario de contacto**: aplicando reglas personalizadas, mensajes de error y estilos dinámicos.
- **Renderizado dinámico de proyectos**: en `projects.html`, carga el proyecto según el parámetro en la URL y oculta el proyecto seleccionado en la galería inferior.
- **Scroll-to-top animado**: muestra una flecha flotante solo si el usuario hace scroll más allá de 300px.

---

## Diseño responsive

El sitio fue diseñado **mobile-first** y adaptado para resoluciones de **768px (tablet)** y **1024px o superior (desktop)**. Entre los cambios adaptativos destacan:

- Transformación del menú de navegación.
- Alineación horizontal de las secciones.
- Reaparición de elementos decorativos como emojis y tarjetas flotantes.
- Ajuste del layout en las secciones de proyectos y servicios.

---

## Estética visual

- Uso de **colores corporativos definidos**: azul (#072AC8), gris claro (#F2F4FC), gris intermedio (#6B708D), acento amarillo (#FFC600).
- Tipografía: `Roboto`, sans-serif, aplicada de forma coherente en todo el sitio.
- Estilo de botones consistente y elementos interactivos accesibles.
- Fondos personalizados (por ejemplo, sección de testimonios) y transiciones suaves en hover.

---

## Estructura de archivos

- `index.html` — Página principal del sitio.
- `projects.html` — Detalle de los proyectos.
- `contact.html` — Formulario de contacto con validación.
- `404.html` — Página de error personalizada.
- `styles.css` — Hoja de estilos principal (incluye media queries y animaciones).
- `functions.js` — Archivo JavaScript con lógica interactiva.
- Carpeta `/logos`, `/projects-section`, `/hero-section`, etc. — Contienen los recursos gráficos.

---

## Conclusión

Circle es un ejercicio completo de frontend en el que se aplican buenas prácticas de HTML semántico, CSS modular con media queries, y JS nativo para lógica del lado del cliente. El proyecto demuestra dominio de:

- Maquetación responsive y mobile-first.
- Organización por componentes visuales.
- Validación de formularios sin plugins.
- Manipulación del DOM para contenido dinámico.
- Estructura clara de navegación entre páginas.
- Uso efectivo de animaciones simples y diseño visual consistente.

Este proyecto es ideal como portfolio personal o como base para desarrollar un sitio real de agencia o freelancer creativo.