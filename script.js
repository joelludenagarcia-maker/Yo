/* =========================================================
   Joel Ludeña García — Interacciones de la landing
   Vanilla JS, sin dependencias.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Año dinámico en el footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    // Cerrar al pulsar un enlace del menú
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Cerrar con Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Sombra del header al hacer scroll ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Animación de aparición (reveal) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Validación + envío del formulario ---------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  function setError(input, message) {
    var holder = form.querySelector('.field__error[data-for="' + input.id + '"]');
    if (holder) holder.textContent = message || "";
    if (message) {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
  }

  // Acceso a las traducciones (i18n.js); con respaldo por si no cargara.
  function t(key, fallback) {
    return (window.I18N && window.I18N.t) ? window.I18N.t(key) : fallback;
  }

  function validate() {
    var ok = true;
    var nombre = form.elements["nombre"];
    var mensaje = form.elements["mensaje"];

    if (!nombre.value.trim()) { setError(nombre, t("form.errName", "Dime cómo te llamas.")); ok = false; }
    else setError(nombre, "");

    if (!mensaje.value.trim()) { setError(mensaje, t("form.errMessage", "Cuéntame brevemente qué necesitas.")); ok = false; }
    else setError(mensaje, "");

    return ok;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) { status.textContent = ""; status.className = "form__status"; }

      if (!validate()) {
        if (status) {
          status.textContent = t("form.errCheck", "Revisa los campos marcados, por favor.");
          status.classList.add("is-err");
        }
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var action = form.getAttribute("action") || "";

      // Si el endpoint sigue siendo el marcador de posición, abrimos WhatsApp como
      // alternativa para que el mensaje no se pierda mientras no haya backend configurado.
      if (action.indexOf("TU_ID") !== -1 || !action) {
        var texto =
          "Hola Joel, soy " + form.elements["nombre"].value.trim() +
          (form.elements["negocio"].value.trim() ? " (" + form.elements["negocio"].value.trim() + ")" : "") +
          ". " + form.elements["mensaje"].value.trim();
        window.open("https://wa.me/34616944451?text=" + encodeURIComponent(texto), "_blank", "noopener");
        if (status) {
          status.textContent = t("form.waOpened", "Te he abierto WhatsApp con tu mensaje listo para enviar.");
          status.classList.add("is-ok");
        }
        form.reset();
        return;
      }

      // Envío real vía fetch (p. ej. Formspree) cuando el endpoint esté configurado.
      if (btn) { btn.disabled = true; btn.textContent = t("form.sending", "Enviando…"); }

      fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            if (status) { status.textContent = t("form.sent", "¡Mensaje enviado! Te responderé lo antes posible."); status.classList.add("is-ok"); }
          } else {
            throw new Error("Respuesta no válida");
          }
        })
        .catch(function () {
          if (status) {
            status.textContent = t("form.error", "No se pudo enviar. Escríbeme directamente por WhatsApp o teléfono.");
            status.classList.add("is-err");
          }
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = t("form.submit", "Enviar mensaje"); }
        });
    });

    // Limpiar el error de un campo al corregirlo
    ["nombre", "mensaje"].forEach(function (name) {
      var field = form.elements[name];
      if (field) field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid")) setError(field, "");
      });
    });
  }
})();
