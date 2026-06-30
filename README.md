# Joel Ludeña García — Web de presentación

Landing page (one-page) profesional para servicios de digitalización a negocios
locales en Mallorca. HTML, CSS y JavaScript vanilla, sin frameworks.

## Archivos

- `index.html` — estructura y contenido (castellano)
- `styles.css` — estilos, paleta y responsive
- `script.js` — menú móvil, animaciones, validación del formulario

## Uso

Abre `index.html` directamente en el navegador. No requiere build ni dependencias.

## Marcadores de posición pendientes (busca `PLACEHOLDER` en el código)

- **Dominio / canonical / Open Graph** → `index.html` (`<head>`): sustituir
  `EJEMPLO-DOMINIO.com` y la imagen `og-image.jpg` (1200×630).
- **Foto de Joel** → sección *Sobre mí* (`.photo-frame`): reemplazar el bloque por
  `<img src="…" alt="Joel Ludeña García">`.
- **Enlace a ConeixEsporles** → sección *Sobre mí*.
- **Email** → sección *Contacto* (`mailto:EMAIL@EJEMPLO.com`).
- **Redes sociales** → footer: cambiar los `href="#"` por las URLs reales.
- **Logo** → `.brand__mark` (iniciales "JL") en header y footer.
- **Formulario** → `action="https://formspree.io/f/TU_ID"`. Mientras no haya
  endpoint configurado, el envío abre WhatsApp con el mensaje ya redactado.

## Contacto del cliente (ya configurado)

- Teléfono / WhatsApp: 616 94 44 51 (`tel:+34616944451`, `wa.me/34616944451`)
- Ubicación: Esporles, Mallorca · Illes Balears

## Notas técnicas

- Tipografías: Newsreader (serif, títulos) + Hanken Grotesk (sans, texto) vía Google Fonts.
- Responsive mobile-first; respeta `prefers-reduced-motion`.
- Accesibilidad: skip link, navegación por teclado, contraste cuidado, `alt`/`aria` en iconos.
