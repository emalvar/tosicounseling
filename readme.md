Oportunidades de mejora
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