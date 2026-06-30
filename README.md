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

## Marcadores de posición pendientes (busca `PLACEHOLDER` en el código)

- **Dominio / canonical / Open Graph** → `index.html` (`<head>`): sustituir
  `EJEMPLO-DOMINIO.com` y la imagen `og-image.jpg` (1200×630).
- **Redes sociales** → footer: cambiar los `href="#"` por las URLs reales.
- **Logo** → `.brand__mark` (iniciales "JL") en header y footer.
- **Formulario** → `action="https://formspree.io/f/TU_ID"`. Mientras no haya
  endpoint configurado, el envío abre WhatsApp con el mensaje ya redactado.

## Contacto del cliente (ya configurado)

- Teléfono / WhatsApp: 616 94 44 51 (`tel:+34616944451`, `wa.me/34616944451`)
- Email: joeldigitalizaciones@gmail.com
- Ubicación: Esporles, Mallorca · Illes Balears

## Notas técnicas

- Estética editorial inspirada en Goyard: crema + negro + oro envejecido, bordes nítidos, mucho aire.
- Tipografías: Newsreader (serif, títulos) + Hanken Grotesk (sans, texto) vía Google Fonts.
- Responsive mobile-first; respeta `prefers-reduced-motion`.
- Accesibilidad: skip link, navegación por teclado, contraste cuidado, `alt`/`aria` en iconos.
