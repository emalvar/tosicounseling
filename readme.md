Oportunidades de mejora
2. Accesibilidad: Falta form.note en el atributo role
    El párrafo .form-note avisa sobre info sensible, pero no está conectado al form. Los lectores de pantalla no lo asocian.
    Mejora:
    html<form ... role="form" aria-label="Contact form">
    ...
    <p id="form-note" class="form-note" role="doc-notice">
        Please avoid sharing sensitive...
    </p>
    </form>

3. CSS: Las transiciones pueden ser más suave
    Botones y links usan transform: translateY(-1px) que es muy sutil. Considerá:

    Aumentar a -2px o -3px para más claridad visual
    Agregar transition-duration: 0.3s en lugar de 0.2s (se siente mejor)


4. SEO: Falta hreflang para el cambio de idioma
    El link a ./es/index.html no le dice a Google que es la versión en español.
    Agregar en <head>:
    html<link rel="alternate" hreflang="es" href="https://tosicounseling.com/es/" />
    <link rel="alternate" hreflang="en-US" href="https://tosicounseling.com/" />

5. JavaScript: Sin validación de email en el cliente
    Aunque HTML5 valida, podés mejorar la UX con feedback visual:
    javascriptconst emailInput = form.querySelector('input[type="email"]');
    emailInput.addEventListener("invalid", (e) => {
    emailInput.style.borderColor = "#d32f2f";
    emailInput.setAttribute("aria-invalid", "true");
    });

6. CSS: Mobile first sería mejor
    El archivo está pensado en desktop primero. Para mantenimiento futuro, invertí el orden: estilos base mobile, luego @media (min-width: 900px).

7. Performance: Las imágenes podrían usar WebP
    El logo y la foto de Melisa se envían como PNG/JPG. Considerá WebP con fallback:
    html<picture>
    <source srcset="./assets/logo.webp" type="image/webp">
    <img src="./assets/logo.png" alt="...">
    </picture>
