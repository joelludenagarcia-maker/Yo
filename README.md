# Joel Ludeña García — Web de presentación

Landing page (one-page) profesional para servicios de digitalización a negocios
locales en Mallorca. HTML, CSS y JavaScript vanilla, sin frameworks.

## Archivos

- `index.html` — estructura y contenido
- `styles.css` — estilos, paleta y responsive
- `script.js` — un único archivo JS con dos partes: las traducciones de los
  7 idiomas (objeto `DICT`) y las interacciones (menú, animaciones, formulario)

## Uso

Abre `index.html` directamente en el navegador. No requiere build ni dependencias.

## Idiomas

La web está disponible en **7 idiomas**: español, català, English, Deutsch,
italiano, français y العربية (árabe, con diseño de derecha a izquierda).

- Selector de idioma en la barra de navegación.
- Detecta el idioma del navegador y recuerda la elección (localStorage).
- Para editar un texto, busca su clave `data-i18n="..."` en `index.html` y
  cámbialo en cada idioma dentro del objeto `DICT` de `script.js`.
- El contacto se atiende solo en catalán, español e inglés (aviso visible en la
  sección de contacto, traducido a cada idioma).

## Formulario de contacto

Conectado a **FormSubmit.co**, que envía los mensajes a
`joeldigitalizaciones@gmail.com` sin necesidad de cuenta.

- **Activación (solo una vez):** la primera vez que alguien envíe el formulario,
  FormSubmit te mandará un correo para confirmar la dirección. Acéptalo y a partir
  de ahí recibirás todos los mensajes.
- Si el envío falla, la web invita a escribir por WhatsApp o teléfono.
- Para cambiar de servicio (p. ej. Formspree), edita solo el `action` del `<form>`.

## Dominio y vista previa al compartir (Open Graph)

- Configurado con la URL de **GitHub Pages**:
  `https://joelludenagarcia-maker.github.io/Yo/`
- Imagen de compartir ya creada: `assets/og-image.png` (1200×630).
- **Si usas un dominio propio:** cambia la URL base en las 3 etiquetas marcadas
  en el `<head>` de `index.html` (`canonical`, `og:url`, `og:image`).

## Pendiente (opcional)

- **Redes sociales** → footer: cambiar los `href="#"` por las URLs reales.
- **Logo** → ahora hay un monograma "JL" con sello dorado (`.brand__mark`). Si
  tienes un logo propio, se puede sustituir ahí.

## Contacto del cliente (ya configurado)

- Teléfono / WhatsApp: 616 94 44 51 (`tel:+34616944451`, `wa.me/34616944451`)
- Email: joeldigitalizaciones@gmail.com
- Ubicación: Esporles, Mallorca · Illes Balears

## Notas técnicas

- Estética editorial inspirada en Goyard: crema + negro + oro envejecido, bordes nítidos, mucho aire.
- Tipografías: Newsreader (serif, títulos) + Hanken Grotesk (sans, texto) vía Google Fonts.
- Responsive mobile-first; respeta `prefers-reduced-motion`.
- Accesibilidad: skip link, navegación por teclado, contraste cuidado, `alt`/`aria` en iconos.
