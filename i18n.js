/* =========================================================
   Joel Ludeña García — Internacionalización (i18n)
   7 idiomas: es · ca · en · de · it · fr · ar (RTL)
   Sin dependencias. Se carga ANTES que script.js.

   Para editar un texto: localiza su clave (data-i18n="...") y
   cámbialo en cada idioma dentro de DICT.
   ========================================================= */
(function () {
  "use strict";

  var DICT = {
    /* ---------------- ESPAÑOL (idioma base) ---------------- */
    es: {
      "skip": "Saltar al contenido",
      "aria.lang": "Idioma", "aria.menu": "Abrir menú", "aria.whatsapp": "Escríbeme por WhatsApp",
      "nav.about": "Sobre mí", "nav.services": "Servicios", "nav.process": "Cómo trabajo", "nav.why": "Por qué yo", "nav.contact": "Contacto",
      "hero.eyebrow": "Digitalización para negocios locales · Mallorca",
      "hero.title": "Llevo tu negocio a internet<br>sin complicaciones ni palabras raras.",
      "hero.subtitle": "Webs y contenido digital pensados para comercios, restaurantes y profesionales de Mallorca. Trato directo, precios honestos y todo a tu medida.",
      "hero.ctaWhatsapp": "Hablemos por WhatsApp", "hero.ctaServices": "Ver servicios",
      "hero.trust1": "años, nativo digital", "hero.trust2": "trato personalizado", "hero.trust3": "base en Mallorca",
      "about.eyebrow": "Sobre mí",
      "about.title": "Soy Joel, y trabajo cada proyecto como si fuera el mío.",
      "about.p1": "Tengo 18 años y vivo en Esporles. Crecí con la tecnología en la mano, así que para mí lo digital no es una asignatura: es mi idioma. Eso significa que estoy al día de lo que funciona hoy y tengo la energía y la disponibilidad para volcarme en cada proyecto como si fuera el mío.",
      "about.p2": "No soy una gran agencia, y precisamente esa es la ventaja: hablas siempre conmigo, entiendo tu negocio de cerca y te explico todo en cristiano, sin tecnicismos.",
      "about.photoAlt": "Retrato de Joel Ludeña García",
      "services.eyebrow": "Servicios", "services.title": "Lo que puedo hacer por tu negocio",
      "services.lead": "Soluciones concretas, sin paquetes inflados. Pagas por lo que de verdad te hace falta.",
      "services.web.title": "Webs para negocios",
      "services.web.text": "Páginas rápidas, claras y a medida que dan confianza y se ven perfectas en el móvil. Listas para que te encuentren y te contacten.",
      "services.advice.title": "Asesoría en digitalización",
      "services.advice.text": "Te ayudo a poner orden: Google, redes, reseñas y herramientas. Un plan sencillo y realista para empezar a estar presente online.",
      "services.support.title": "Acompañamiento continuo",
      "services.support.text": "No te dejo solo después de entregar. Mantengo, actualizo y resuelvo dudas para que tu presencia online no se quede anticuada.",
      "process.eyebrow": "Cómo trabajo", "process.title": "Cuatro pasos, cero líos",
      "process.s1.title": "Contacto", "process.s1.text": "Me escribes por WhatsApp o llamas. Sin formularios eternos: empezamos por una conversación normal.",
      "process.s2.title": "Diagnóstico gratuito", "process.s2.text": "Miro tu situación actual y te digo con sinceridad qué necesitas y qué no. Sin compromiso.",
      "process.s3.title": "Propuesta a medida", "process.s3.text": "Te paso una propuesta clara, con precio cerrado y plazos. Tú decides con todo sobre la mesa.",
      "process.s4.title": "Desarrollo y entrega", "process.s4.text": "Construyo, te enseño avances y entrego. Y sigo disponible para lo que surja después.",
      "why.eyebrow": "Por qué trabajar conmigo", "why.title": "Cercanía de verdad, no un número de cliente.", "why.lead": "Lo que una gran agencia no te puede dar.",
      "why.1.title": "Trato directo", "why.1.text": "Hablas conmigo de principio a fin. Nada de intermediarios ni respuestas automáticas.",
      "why.2.title": "Precios para pequeños negocios", "why.2.text": "Presupuestos adaptados a la realidad de un comercio local, no a la de una multinacional.",
      "why.3.title": "Conozco el terreno", "why.3.text": "Vivo aquí. Entiendo el tejido local de Mallorca y a quién te diriges.",
      "why.4.title": "Respuesta rápida", "why.4.text": "Te contesto pronto y resuelvo sin hacerte esperar días por un correo.",
      "contact.eyebrow": "Contacto", "contact.title": "¿Hablamos de tu negocio?",
      "contact.lead": "El primer paso es gratis y sin compromiso. Escríbeme y vemos qué necesitas.",
      "contact.langNote": "Para contactar, te atiendo en catalán, español e inglés.",
      "form.name": "Nombre", "form.business": "Negocio", "form.message": "Mensaje",
      "form.messagePlaceholder": "Cuéntame brevemente qué necesitas…", "form.submit": "Enviar mensaje",
      "form.errName": "Dime cómo te llamas.", "form.errMessage": "Cuéntame brevemente qué necesitas.",
      "form.errCheck": "Revisa los campos marcados, por favor.",
      "form.waOpened": "Te he abierto WhatsApp con tu mensaje listo para enviar.",
      "form.sending": "Enviando…", "form.sent": "¡Mensaje enviado! Te responderé lo antes posible.",
      "form.error": "No se pudo enviar. Escríbeme directamente por WhatsApp o teléfono.",
      "footer.tag": "Digitalización para negocios locales · Mallorca", "footer.rights": "Todos los derechos reservados.",
      "metaTitle": "Joel Ludeña García · Digitalización para negocios locales en Mallorca",
      "metaDesc": "Webs, contenido digital y presencia online para pequeños negocios de Mallorca. Trato cercano, precios adaptados y respuesta rápida. Hablemos por WhatsApp."
    },

    /* ---------------- CATALÀ ---------------- */
    ca: {
      "skip": "Vés al contingut",
      "aria.lang": "Idioma", "aria.menu": "Obre el menú", "aria.whatsapp": "Escriu-me per WhatsApp",
      "nav.about": "Sobre mi", "nav.services": "Serveis", "nav.process": "Com treballo", "nav.why": "Per què jo", "nav.contact": "Contacte",
      "hero.eyebrow": "Digitalització per a negocis locals · Mallorca",
      "hero.title": "Porto el teu negoci a internet<br>sense complicacions ni paraules estranyes.",
      "hero.subtitle": "Webs i contingut digital pensats per a comerços, restaurants i professionals de Mallorca. Tracte directe, preus honestos i tot a la teva mida.",
      "hero.ctaWhatsapp": "Parlem per WhatsApp", "hero.ctaServices": "Veure serveis",
      "hero.trust1": "anys, nadiu digital", "hero.trust2": "tracte personalitzat", "hero.trust3": "base a Mallorca",
      "about.eyebrow": "Sobre mi",
      "about.title": "Soc en Joel, i treballo cada projecte com si fos meu.",
      "about.p1": "Tinc 18 anys i visc a Esporles. Vaig créixer amb la tecnologia a la mà, així que per a mi el món digital no és una assignatura: és la meva llengua. Això vol dir que estic al dia del que funciona avui i tinc l'energia i la disponibilitat per bolcar-me en cada projecte com si fos meu.",
      "about.p2": "No soc una gran agència, i precisament aquest és l'avantatge: parles sempre amb mi, entenc el teu negoci de prop i t'ho explico tot de manera clara, sense tecnicismes.",
      "about.photoAlt": "Retrat de Joel Ludeña García",
      "services.eyebrow": "Serveis", "services.title": "Què puc fer pel teu negoci",
      "services.lead": "Solucions concretes, sense paquets inflats. Pagues pel que realment necessites.",
      "services.web.title": "Webs per a negocis",
      "services.web.text": "Pàgines ràpides, clares i a mida que generen confiança i es veuen perfectes al mòbil. A punt perquè et trobin i et contactin.",
      "services.advice.title": "Assessoria en digitalització",
      "services.advice.text": "T'ajudo a posar ordre: Google, xarxes, ressenyes i eines. Un pla senzill i realista per començar a tenir presència en línia.",
      "services.support.title": "Acompanyament continu",
      "services.support.text": "No et deixo sol després de l'entrega. Mantinc, actualitzo i resolc dubtes perquè la teva presència en línia no quedi desfasada.",
      "process.eyebrow": "Com treballo", "process.title": "Quatre passos, zero embolics",
      "process.s1.title": "Contacte", "process.s1.text": "M'escrius per WhatsApp o em truques. Sense formularis eterns: comencem amb una conversa normal.",
      "process.s2.title": "Diagnòstic gratuït", "process.s2.text": "Miro la teva situació actual i et dic amb sinceritat què necessites i què no. Sense compromís.",
      "process.s3.title": "Proposta a mida", "process.s3.text": "Et passo una proposta clara, amb preu tancat i terminis. Tu decideixes amb tot sobre la taula.",
      "process.s4.title": "Desenvolupament i entrega", "process.s4.text": "Construeixo, et mostro avenços i entrego. I segueixo disponible per al que faci falta després.",
      "why.eyebrow": "Per què treballar amb mi", "why.title": "Proximitat de veritat, no un número de client.", "why.lead": "El que una gran agència no et pot donar.",
      "why.1.title": "Tracte directe", "why.1.text": "Parles amb mi de principi a fi. Res d'intermediaris ni respostes automàtiques.",
      "why.2.title": "Preus per a petits negocis", "why.2.text": "Pressupostos adaptats a la realitat d'un comerç local, no a la d'una multinacional.",
      "why.3.title": "Conec el terreny", "why.3.text": "Visc aquí. Entenc el teixit local de Mallorca i a qui t'adreces.",
      "why.4.title": "Resposta ràpida", "why.4.text": "Et responc aviat i ho resolc sense fer-te esperar dies per un correu.",
      "contact.eyebrow": "Contacte", "contact.title": "En parlem, del teu negoci?",
      "contact.lead": "El primer pas és gratis i sense compromís. Escriu-me i veiem què necessites.",
      "contact.langNote": "Per contactar, t'atenc en català, castellà i anglès.",
      "form.name": "Nom", "form.business": "Negoci", "form.message": "Missatge",
      "form.messagePlaceholder": "Explica'm breument què necessites…", "form.submit": "Enviar missatge",
      "form.errName": "Digues-me com et dius.", "form.errMessage": "Explica'm breument què necessites.",
      "form.errCheck": "Revisa els camps marcats, si us plau.",
      "form.waOpened": "T'he obert WhatsApp amb el teu missatge a punt per enviar.",
      "form.sending": "Enviant…", "form.sent": "Missatge enviat! Et respondré al més aviat possible.",
      "form.error": "No s'ha pogut enviar. Escriu-me directament per WhatsApp o telèfon.",
      "footer.tag": "Digitalització per a negocis locals · Mallorca", "footer.rights": "Tots els drets reservats.",
      "metaTitle": "Joel Ludeña García · Digitalització per a negocis locals a Mallorca",
      "metaDesc": "Webs, contingut digital i presència en línia per a petits negocis de Mallorca. Tracte proper, preus adaptats i resposta ràpida. Parlem per WhatsApp."
    },

    /* ---------------- ENGLISH ---------------- */
    en: {
      "skip": "Skip to content",
      "aria.lang": "Language", "aria.menu": "Open menu", "aria.whatsapp": "Message me on WhatsApp",
      "nav.about": "About", "nav.services": "Services", "nav.process": "How I work", "nav.why": "Why me", "nav.contact": "Contact",
      "hero.eyebrow": "Digital solutions for local businesses · Mallorca",
      "hero.title": "I bring your business online<br>with no jargon and no fuss.",
      "hero.subtitle": "Websites and digital content made for shops, restaurants and professionals in Mallorca. Direct contact, honest prices and everything tailored to you.",
      "hero.ctaWhatsapp": "Let's talk on WhatsApp", "hero.ctaServices": "See services",
      "hero.trust1": "years old, digital native", "hero.trust2": "personal service", "hero.trust3": "based in Mallorca",
      "about.eyebrow": "About me",
      "about.title": "I'm Joel, and I treat every project as if it were my own.",
      "about.p1": "I'm 18 and I live in Esporles. I grew up with technology in my hands, so for me digital isn't a subject to study: it's my language. That means I'm up to date with what works today, and I have the energy and availability to throw myself into every project as if it were my own.",
      "about.p2": "I'm not a big agency, and that's exactly the advantage: you always talk to me, I understand your business up close, and I explain everything in plain words, with no jargon.",
      "about.photoAlt": "Portrait of Joel Ludeña García",
      "services.eyebrow": "Services", "services.title": "What I can do for your business",
      "services.lead": "Concrete solutions, no bloated packages. You pay for what you actually need.",
      "services.web.title": "Websites for businesses",
      "services.web.text": "Fast, clear, custom pages that build trust and look perfect on mobile. Ready for people to find you and get in touch.",
      "services.advice.title": "Digital advice",
      "services.advice.text": "I help you get organised: Google, social media, reviews and tools. A simple, realistic plan to start being present online.",
      "services.support.title": "Ongoing support",
      "services.support.text": "I don't leave you on your own after delivery. I maintain, update and answer questions so your online presence never goes stale.",
      "process.eyebrow": "How I work", "process.title": "Four steps, zero hassle",
      "process.s1.title": "Get in touch", "process.s1.text": "You message me on WhatsApp or call. No endless forms: we start with a normal conversation.",
      "process.s2.title": "Free assessment", "process.s2.text": "I look at where you are now and tell you honestly what you need and what you don't. No commitment.",
      "process.s3.title": "Tailored proposal", "process.s3.text": "I send you a clear proposal, with a fixed price and timeline. You decide with everything on the table.",
      "process.s4.title": "Build and delivery", "process.s4.text": "I build it, show you progress and deliver. And I stay available for whatever comes up afterwards.",
      "why.eyebrow": "Why work with me", "why.title": "Real closeness, not a customer number.", "why.lead": "What a big agency can't give you.",
      "why.1.title": "Direct contact", "why.1.text": "You deal with me from start to finish. No middlemen, no automated replies.",
      "why.2.title": "Prices for small businesses", "why.2.text": "Quotes adapted to the reality of a local shop, not a multinational.",
      "why.3.title": "I know the ground", "why.3.text": "I live here. I understand Mallorca's local fabric and who you're speaking to.",
      "why.4.title": "Quick response", "why.4.text": "I get back to you soon and sort things out without making you wait days for an email.",
      "contact.eyebrow": "Contact", "contact.title": "Shall we talk about your business?",
      "contact.lead": "The first step is free and with no commitment. Write to me and let's see what you need.",
      "contact.langNote": "For contact, I can help you in Catalan, Spanish and English.",
      "form.name": "Name", "form.business": "Business", "form.message": "Message",
      "form.messagePlaceholder": "Tell me briefly what you need…", "form.submit": "Send message",
      "form.errName": "Let me know your name.", "form.errMessage": "Tell me briefly what you need.",
      "form.errCheck": "Please check the highlighted fields.",
      "form.waOpened": "I've opened WhatsApp with your message ready to send.",
      "form.sending": "Sending…", "form.sent": "Message sent! I'll get back to you as soon as possible.",
      "form.error": "Couldn't send. Write to me directly on WhatsApp or by phone.",
      "footer.tag": "Digital solutions for local businesses · Mallorca", "footer.rights": "All rights reserved.",
      "metaTitle": "Joel Ludeña García · Digital solutions for local businesses in Mallorca",
      "metaDesc": "Websites, digital content and online presence for small businesses in Mallorca. Personal service, adapted prices and quick response. Let's talk on WhatsApp."
    },

    /* ---------------- DEUTSCH ---------------- */
    de: {
      "skip": "Zum Inhalt springen",
      "aria.lang": "Sprache", "aria.menu": "Menü öffnen", "aria.whatsapp": "Schreib mir auf WhatsApp",
      "nav.about": "Über mich", "nav.services": "Leistungen", "nav.process": "So arbeite ich", "nav.why": "Warum ich", "nav.contact": "Kontakt",
      "hero.eyebrow": "Digitalisierung für lokale Unternehmen · Mallorca",
      "hero.title": "Ich bringe dein Unternehmen ins Netz –<br>ohne Fachchinesisch und ohne Stress.",
      "hero.subtitle": "Websites und digitale Inhalte für Geschäfte, Restaurants und Selbstständige auf Mallorca. Direkter Kontakt, faire Preise und alles nach Maß.",
      "hero.ctaWhatsapp": "Lass uns auf WhatsApp sprechen", "hero.ctaServices": "Leistungen ansehen",
      "hero.trust1": "Jahre, Digital Native", "hero.trust2": "persönlicher Service", "hero.trust3": "Sitz auf Mallorca",
      "about.eyebrow": "Über mich",
      "about.title": "Ich bin Joel und behandle jedes Projekt, als wäre es mein eigenes.",
      "about.p1": "Ich bin 18 und wohne in Esporles. Ich bin mit der Technik aufgewachsen, für mich ist das Digitale also kein Schulfach, sondern meine Sprache. Das heißt: Ich bin auf dem neuesten Stand und habe die Energie und Zeit, mich in jedes Projekt zu stürzen, als wäre es mein eigenes.",
      "about.p2": "Ich bin keine große Agentur, und genau das ist der Vorteil: Du sprichst immer mit mir, ich verstehe dein Geschäft aus der Nähe und erkläre dir alles verständlich, ohne Fachjargon.",
      "about.photoAlt": "Porträt von Joel Ludeña García",
      "services.eyebrow": "Leistungen", "services.title": "Was ich für dein Unternehmen tun kann",
      "services.lead": "Konkrete Lösungen, keine aufgeblähten Pakete. Du zahlst nur für das, was du wirklich brauchst.",
      "services.web.title": "Websites für Unternehmen",
      "services.web.text": "Schnelle, klare und maßgeschneiderte Seiten, die Vertrauen schaffen und auf dem Handy perfekt aussehen. Bereit, damit man dich findet und kontaktiert.",
      "services.advice.title": "Beratung zur Digitalisierung",
      "services.advice.text": "Ich helfe dir, Ordnung zu schaffen: Google, soziale Netzwerke, Bewertungen und Tools. Ein einfacher, realistischer Plan für deinen Start im Netz.",
      "services.support.title": "Laufende Betreuung",
      "services.support.text": "Nach der Übergabe lasse ich dich nicht allein. Ich pflege, aktualisiere und beantworte Fragen, damit dein Online-Auftritt nie veraltet.",
      "process.eyebrow": "So arbeite ich", "process.title": "Vier Schritte, null Aufwand",
      "process.s1.title": "Kontakt", "process.s1.text": "Du schreibst mir auf WhatsApp oder rufst an. Keine endlosen Formulare: Wir beginnen mit einem normalen Gespräch.",
      "process.s2.title": "Kostenlose Analyse", "process.s2.text": "Ich schaue mir deine aktuelle Lage an und sage dir ehrlich, was du brauchst und was nicht. Unverbindlich.",
      "process.s3.title": "Maßgeschneidertes Angebot", "process.s3.text": "Ich schicke dir ein klares Angebot mit Festpreis und Terminen. Du entscheidest mit allem auf dem Tisch.",
      "process.s4.title": "Umsetzung und Übergabe", "process.s4.text": "Ich setze um, zeige dir Fortschritte und übergebe. Und ich bleibe für alles Weitere erreichbar.",
      "why.eyebrow": "Warum mit mir arbeiten", "why.title": "Echte Nähe, keine Kundennummer.", "why.lead": "Was dir eine große Agentur nicht geben kann.",
      "why.1.title": "Direkter Kontakt", "why.1.text": "Du hast von Anfang bis Ende mit mir zu tun. Keine Vermittler, keine automatischen Antworten.",
      "why.2.title": "Preise für kleine Unternehmen", "why.2.text": "Angebote, die zur Realität eines lokalen Geschäfts passen, nicht zu der eines Konzerns.",
      "why.3.title": "Ich kenne die Gegend", "why.3.text": "Ich wohne hier. Ich kenne das lokale Umfeld Mallorcas und weiß, wen du ansprichst.",
      "why.4.title": "Schnelle Antwort", "why.4.text": "Ich melde mich schnell und löse es, ohne dass du tagelang auf eine E-Mail wartest.",
      "contact.eyebrow": "Kontakt", "contact.title": "Sprechen wir über dein Unternehmen?",
      "contact.lead": "Der erste Schritt ist kostenlos und unverbindlich. Schreib mir, und wir schauen, was du brauchst.",
      "contact.langNote": "Für den Kontakt stehe ich auf Katalanisch, Spanisch und Englisch zur Verfügung.",
      "form.name": "Name", "form.business": "Unternehmen", "form.message": "Nachricht",
      "form.messagePlaceholder": "Erzähl mir kurz, was du brauchst…", "form.submit": "Nachricht senden",
      "form.errName": "Sag mir, wie du heißt.", "form.errMessage": "Erzähl mir kurz, was du brauchst.",
      "form.errCheck": "Bitte überprüfe die markierten Felder.",
      "form.waOpened": "Ich habe WhatsApp mit deiner fertigen Nachricht geöffnet.",
      "form.sending": "Senden…", "form.sent": "Nachricht gesendet! Ich melde mich so schnell wie möglich.",
      "form.error": "Konnte nicht gesendet werden. Schreib mir direkt über WhatsApp oder per Telefon.",
      "footer.tag": "Digitalisierung für lokale Unternehmen · Mallorca", "footer.rights": "Alle Rechte vorbehalten.",
      "metaTitle": "Joel Ludeña García · Digitalisierung für lokale Unternehmen auf Mallorca",
      "metaDesc": "Websites, digitale Inhalte und Online-Präsenz für kleine Unternehmen auf Mallorca. Persönlicher Service, faire Preise und schnelle Antwort. Lass uns auf WhatsApp sprechen."
    },

    /* ---------------- ITALIANO ---------------- */
    it: {
      "skip": "Vai al contenuto",
      "aria.lang": "Lingua", "aria.menu": "Apri il menu", "aria.whatsapp": "Scrivimi su WhatsApp",
      "nav.about": "Chi sono", "nav.services": "Servizi", "nav.process": "Come lavoro", "nav.why": "Perché me", "nav.contact": "Contatto",
      "hero.eyebrow": "Digitalizzazione per attività locali · Maiorca",
      "hero.title": "Porto la tua attività online<br>senza complicazioni né paroloni.",
      "hero.subtitle": "Siti web e contenuti digitali pensati per negozi, ristoranti e professionisti di Maiorca. Rapporto diretto, prezzi onesti e tutto su misura.",
      "hero.ctaWhatsapp": "Parliamone su WhatsApp", "hero.ctaServices": "Vedi i servizi",
      "hero.trust1": "anni, nativo digitale", "hero.trust2": "rapporto personalizzato", "hero.trust3": "con base a Maiorca",
      "about.eyebrow": "Chi sono",
      "about.title": "Sono Joel, e seguo ogni progetto come se fosse mio.",
      "about.p1": "Ho 18 anni e vivo a Esporles. Sono cresciuto con la tecnologia in mano, quindi per me il digitale non è una materia: è la mia lingua. Vuol dire che sono aggiornato su ciò che funziona oggi e ho l'energia e la disponibilità per dedicarmi a ogni progetto come se fosse mio.",
      "about.p2": "Non sono una grande agenzia, ed è proprio questo il vantaggio: parli sempre con me, conosco la tua attività da vicino e ti spiego tutto in modo chiaro, senza tecnicismi.",
      "about.photoAlt": "Ritratto di Joel Ludeña García",
      "services.eyebrow": "Servizi", "services.title": "Cosa posso fare per la tua attività",
      "services.lead": "Soluzioni concrete, senza pacchetti gonfiati. Paghi solo ciò che ti serve davvero.",
      "services.web.title": "Siti web per attività",
      "services.web.text": "Pagine veloci, chiare e su misura che danno fiducia e si vedono perfette sul cellulare. Pronte perché ti trovino e ti contattino.",
      "services.advice.title": "Consulenza sulla digitalizzazione",
      "services.advice.text": "Ti aiuto a fare ordine: Google, social, recensioni e strumenti. Un piano semplice e realistico per iniziare a essere presente online.",
      "services.support.title": "Supporto continuo",
      "services.support.text": "Non ti lascio solo dopo la consegna. Mantengo, aggiorno e rispondo ai dubbi perché la tua presenza online non diventi obsoleta.",
      "process.eyebrow": "Come lavoro", "process.title": "Quattro passi, zero grattacapi",
      "process.s1.title": "Contatto", "process.s1.text": "Mi scrivi su WhatsApp o mi chiami. Niente moduli infiniti: si parte da una normale chiacchierata.",
      "process.s2.title": "Diagnosi gratuita", "process.s2.text": "Guardo la tua situazione attuale e ti dico con sincerità cosa ti serve e cosa no. Senza impegno.",
      "process.s3.title": "Proposta su misura", "process.s3.text": "Ti mando una proposta chiara, con prezzo fisso e tempi. Decidi tu, con tutto sul tavolo.",
      "process.s4.title": "Sviluppo e consegna", "process.s4.text": "Realizzo, ti mostro gli avanzamenti e consegno. E resto disponibile per ciò che serve dopo.",
      "why.eyebrow": "Perché lavorare con me", "why.title": "Vicinanza vera, non un numero cliente.", "why.lead": "Ciò che una grande agenzia non può darti.",
      "why.1.title": "Rapporto diretto", "why.1.text": "Tratti con me dall'inizio alla fine. Niente intermediari né risposte automatiche.",
      "why.2.title": "Prezzi per piccole attività", "why.2.text": "Preventivi adatti alla realtà di un negozio locale, non a quella di una multinazionale.",
      "why.3.title": "Conosco il territorio", "why.3.text": "Vivo qui. Conosco il tessuto locale di Maiorca e a chi ti rivolgi.",
      "why.4.title": "Risposta rapida", "why.4.text": "Ti rispondo presto e risolvo senza farti aspettare giorni per un'email.",
      "contact.eyebrow": "Contatto", "contact.title": "Parliamo della tua attività?",
      "contact.lead": "Il primo passo è gratuito e senza impegno. Scrivimi e vediamo cosa ti serve.",
      "contact.langNote": "Per il contatto ti rispondo in catalano, spagnolo e inglese.",
      "form.name": "Nome", "form.business": "Attività", "form.message": "Messaggio",
      "form.messagePlaceholder": "Dimmi in breve cosa ti serve…", "form.submit": "Invia messaggio",
      "form.errName": "Dimmi come ti chiami.", "form.errMessage": "Dimmi in breve cosa ti serve.",
      "form.errCheck": "Controlla i campi evidenziati, per favore.",
      "form.waOpened": "Ho aperto WhatsApp con il tuo messaggio pronto da inviare.",
      "form.sending": "Invio…", "form.sent": "Messaggio inviato! Ti risponderò al più presto.",
      "form.error": "Invio non riuscito. Scrivimi direttamente su WhatsApp o per telefono.",
      "footer.tag": "Digitalizzazione per attività locali · Maiorca", "footer.rights": "Tutti i diritti riservati.",
      "metaTitle": "Joel Ludeña García · Digitalizzazione per attività locali a Maiorca",
      "metaDesc": "Siti web, contenuti digitali e presenza online per piccole attività di Maiorca. Rapporto diretto, prezzi adatti e risposta rapida. Parliamone su WhatsApp."
    },

    /* ---------------- FRANÇAIS ---------------- */
    fr: {
      "skip": "Aller au contenu",
      "aria.lang": "Langue", "aria.menu": "Ouvrir le menu", "aria.whatsapp": "Écris-moi sur WhatsApp",
      "nav.about": "À propos", "nav.services": "Services", "nav.process": "Comment je travaille", "nav.why": "Pourquoi moi", "nav.contact": "Contact",
      "hero.eyebrow": "Numérisation pour les commerces locaux · Majorque",
      "hero.title": "Je mets votre activité en ligne<br>sans complications ni jargon.",
      "hero.subtitle": "Sites web et contenus numériques pensés pour les commerces, restaurants et indépendants de Majorque. Contact direct, prix honnêtes et tout sur mesure.",
      "hero.ctaWhatsapp": "Discutons sur WhatsApp", "hero.ctaServices": "Voir les services",
      "hero.trust1": "ans, natif du numérique", "hero.trust2": "service personnalisé", "hero.trust3": "basé à Majorque",
      "about.eyebrow": "À propos de moi",
      "about.title": "Je suis Joel, et je traite chaque projet comme s'il était le mien.",
      "about.p1": "J'ai 18 ans et je vis à Esporles. J'ai grandi avec la technologie en main, donc pour moi le numérique n'est pas une matière : c'est ma langue. Cela veut dire que je suis au courant de ce qui marche aujourd'hui et que j'ai l'énergie et la disponibilité pour m'investir dans chaque projet comme s'il était le mien.",
      "about.p2": "Je ne suis pas une grande agence, et c'est justement l'avantage : tu parles toujours avec moi, je comprends ton activité de près et je t'explique tout simplement, sans jargon.",
      "about.photoAlt": "Portrait de Joel Ludeña García",
      "services.eyebrow": "Services", "services.title": "Ce que je peux faire pour votre activité",
      "services.lead": "Des solutions concrètes, sans forfaits gonflés. Tu paies pour ce dont tu as vraiment besoin.",
      "services.web.title": "Sites web pour entreprises",
      "services.web.text": "Des pages rapides, claires et sur mesure qui inspirent confiance et s'affichent parfaitement sur mobile. Prêtes pour qu'on te trouve et te contacte.",
      "services.advice.title": "Conseil en numérisation",
      "services.advice.text": "Je t'aide à mettre de l'ordre : Google, réseaux sociaux, avis et outils. Un plan simple et réaliste pour commencer ta présence en ligne.",
      "services.support.title": "Accompagnement continu",
      "services.support.text": "Je ne te laisse pas seul après la livraison. J'entretiens, je mets à jour et je réponds à tes questions pour que ta présence en ligne ne vieillisse pas.",
      "process.eyebrow": "Comment je travaille", "process.title": "Quatre étapes, zéro tracas",
      "process.s1.title": "Contact", "process.s1.text": "Tu m'écris sur WhatsApp ou tu m'appelles. Pas de formulaires interminables : on commence par une conversation normale.",
      "process.s2.title": "Diagnostic gratuit", "process.s2.text": "Je regarde ta situation actuelle et je te dis honnêtement ce dont tu as besoin et ce dont tu n'as pas besoin. Sans engagement.",
      "process.s3.title": "Proposition sur mesure", "process.s3.text": "Je t'envoie une proposition claire, avec un prix fixe et des délais. Tu décides avec tout sur la table.",
      "process.s4.title": "Développement et livraison", "process.s4.text": "Je construis, je te montre les avancées et je livre. Et je reste disponible pour la suite.",
      "why.eyebrow": "Pourquoi travailler avec moi", "why.title": "Une vraie proximité, pas un numéro de client.", "why.lead": "Ce qu'une grande agence ne peut pas t'offrir.",
      "why.1.title": "Contact direct", "why.1.text": "Tu traites avec moi du début à la fin. Pas d'intermédiaires ni de réponses automatiques.",
      "why.2.title": "Des prix pour les petits commerces", "why.2.text": "Des devis adaptés à la réalité d'un commerce local, pas à celle d'une multinationale.",
      "why.3.title": "Je connais le terrain", "why.3.text": "Je vis ici. Je comprends le tissu local de Majorque et à qui tu t'adresses.",
      "why.4.title": "Réponse rapide", "why.4.text": "Je te réponds vite et je règle les choses sans te faire attendre des jours pour un e-mail.",
      "contact.eyebrow": "Contact", "contact.title": "On parle de votre activité ?",
      "contact.lead": "Le premier pas est gratuit et sans engagement. Écris-moi et voyons ce dont tu as besoin.",
      "contact.langNote": "Pour le contact, je te réponds en catalan, espagnol et anglais.",
      "form.name": "Nom", "form.business": "Activité", "form.message": "Message",
      "form.messagePlaceholder": "Dis-moi brièvement ce dont tu as besoin…", "form.submit": "Envoyer le message",
      "form.errName": "Dis-moi comment tu t'appelles.", "form.errMessage": "Dis-moi brièvement ce dont tu as besoin.",
      "form.errCheck": "Vérifie les champs indiqués, s'il te plaît.",
      "form.waOpened": "J'ai ouvert WhatsApp avec ton message prêt à envoyer.",
      "form.sending": "Envoi…", "form.sent": "Message envoyé ! Je te réponds dès que possible.",
      "form.error": "Envoi impossible. Écris-moi directement sur WhatsApp ou par téléphone.",
      "footer.tag": "Numérisation pour les commerces locaux · Majorque", "footer.rights": "Tous droits réservés.",
      "metaTitle": "Joel Ludeña García · Numérisation pour les commerces locaux à Majorque",
      "metaDesc": "Sites web, contenus numériques et présence en ligne pour les petits commerces de Majorque. Contact direct, prix adaptés et réponse rapide. Discutons sur WhatsApp."
    },

    /* ---------------- العربية (RTL) ---------------- */
    ar: {
      "skip": "تخطَّ إلى المحتوى",
      "aria.lang": "اللغة", "aria.menu": "افتح القائمة", "aria.whatsapp": "راسلني على واتساب",
      "nav.about": "نبذة عني", "nav.services": "الخدمات", "nav.process": "طريقة عملي", "nav.why": "لماذا أنا", "nav.contact": "تواصل",
      "hero.eyebrow": "حلول رقمية للأنشطة المحلية · مايوركا",
      "hero.title": "أنقل نشاطك إلى الإنترنت<br>بلا تعقيد ولا مصطلحات غريبة.",
      "hero.subtitle": "مواقع ومحتوى رقمي مصمَّم للمتاجر والمطاعم والمهنيين في مايوركا. تعامل مباشر وأسعار عادلة وكل شيء حسب احتياجك.",
      "hero.ctaWhatsapp": "لنتحدث عبر واتساب", "hero.ctaServices": "شاهد الخدمات",
      "hero.trust1": "عامًا، ابن العصر الرقمي", "hero.trust2": "خدمة شخصية", "hero.trust3": "مقري في مايوركا",
      "about.eyebrow": "نبذة عني",
      "about.title": "أنا جويل، وأتعامل مع كل مشروع كأنه مشروعي.",
      "about.p1": "عمري 18 عامًا وأعيش في إسبورلس. نشأتُ والتقنية بين يدي، لذا فالعالم الرقمي بالنسبة لي ليس مادة دراسية بل لغتي. هذا يعني أنني مواكب لما ينجح اليوم، ولديّ الطاقة والوقت لأنغمس في كل مشروع كأنه مشروعي.",
      "about.p2": "أنا لست وكالة كبيرة، وهذه هي الميزة تمامًا: تتحدث معي دائمًا، أفهم نشاطك عن قرب، وأشرح لك كل شيء بوضوح ودون مصطلحات معقدة.",
      "about.photoAlt": "صورة جويل لوذينيا غارثيا",
      "services.eyebrow": "الخدمات", "services.title": "ما يمكنني فعله لنشاطك",
      "services.lead": "حلول ملموسة بلا باقات منتفخة. تدفع مقابل ما تحتاجه فعلًا.",
      "services.web.title": "مواقع للأنشطة التجارية",
      "services.web.text": "صفحات سريعة وواضحة ومصمَّمة خصيصًا تبني الثقة وتظهر بشكل مثالي على الهاتف. جاهزة ليجدك العملاء ويتواصلوا معك.",
      "services.advice.title": "استشارات في التحول الرقمي",
      "services.advice.text": "أساعدك على ترتيب الأمور: جوجل، ووسائل التواصل، والتقييمات، والأدوات. خطة بسيطة وواقعية لتبدأ حضورك على الإنترنت.",
      "services.support.title": "مرافقة مستمرة",
      "services.support.text": "لا أتركك وحدك بعد التسليم. أتابع وأحدّث وأجيب عن أسئلتك حتى لا يتقادم حضورك الرقمي.",
      "process.eyebrow": "طريقة عملي", "process.title": "أربع خطوات بلا تعقيد",
      "process.s1.title": "التواصل", "process.s1.text": "تراسلني على واتساب أو تتصل بي. بلا نماذج طويلة: نبدأ بمحادثة عادية.",
      "process.s2.title": "تشخيص مجاني", "process.s2.text": "أنظر إلى وضعك الحالي وأخبرك بصراحة بما تحتاجه وما لا تحتاجه. دون أي التزام.",
      "process.s3.title": "عرض حسب الطلب", "process.s3.text": "أرسل لك عرضًا واضحًا بسعر ثابت ومواعيد محددة. تقرر أنت وكل شيء أمامك.",
      "process.s4.title": "التنفيذ والتسليم", "process.s4.text": "أنفّذ، وأطلعك على التقدم، وأسلّم. وأبقى متاحًا لأي أمر يطرأ لاحقًا.",
      "why.eyebrow": "لماذا تعمل معي", "why.title": "قرب حقيقي، لا مجرد رقم عميل.", "why.lead": "ما لا تستطيع وكالة كبيرة أن تقدمه لك.",
      "why.1.title": "تعامل مباشر", "why.1.text": "تتعامل معي من البداية إلى النهاية. بلا وسطاء ولا ردود آلية.",
      "why.2.title": "أسعار للأنشطة الصغيرة", "why.2.text": "عروض أسعار تناسب واقع متجر محلي، لا واقع شركة كبرى.",
      "why.3.title": "أعرف المكان", "why.3.text": "أعيش هنا. أفهم النسيج المحلي في مايوركا ومن تخاطبه.",
      "why.4.title": "استجابة سريعة", "why.4.text": "أرد عليك بسرعة وأحل الأمور دون أن أجعلك تنتظر أيامًا لرسالة بريد.",
      "contact.eyebrow": "تواصل", "contact.title": "هل نتحدث عن نشاطك؟",
      "contact.lead": "الخطوة الأولى مجانية وبلا التزام. راسلني ولنرَ ما تحتاجه.",
      "contact.langNote": "للتواصل، أخدمك بالكتالونية والإسبانية والإنجليزية.",
      "form.name": "الاسم", "form.business": "النشاط", "form.message": "الرسالة",
      "form.messagePlaceholder": "أخبرني باختصار بما تحتاجه…", "form.submit": "إرسال الرسالة",
      "form.errName": "أخبرني باسمك.", "form.errMessage": "أخبرني باختصار بما تحتاجه.",
      "form.errCheck": "يرجى مراجعة الحقول المحددة.",
      "form.waOpened": "فتحتُ لك واتساب ورسالتك جاهزة للإرسال.",
      "form.sending": "جارٍ الإرسال…", "form.sent": "تم إرسال الرسالة! سأرد عليك في أقرب وقت ممكن.",
      "form.error": "تعذّر الإرسال. راسلني مباشرة عبر واتساب أو الهاتف.",
      "footer.tag": "حلول رقمية للأنشطة المحلية · مايوركا", "footer.rights": "جميع الحقوق محفوظة.",
      "metaTitle": "جويل لوذينيا غارثيا · حلول رقمية للأنشطة المحلية في مايوركا",
      "metaDesc": "مواقع ومحتوى رقمي وحضور على الإنترنت للأنشطة الصغيرة في مايوركا. تعامل مباشر وأسعار مناسبة واستجابة سريعة. لنتحدث عبر واتساب."
    }
  };

  var RTL = ["ar"];

  function detect() {
    try {
      var saved = localStorage.getItem("lang");
      if (saved && DICT[saved]) return saved;
    } catch (e) {}
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return DICT[nav] ? nav : "es";
  }

  var current = detect();

  function apply() {
    var d = DICT[current] || DICT.es;
    var root = document.documentElement;
    root.lang = current;
    root.dir = RTL.indexOf(current) >= 0 ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (d[k] != null) el.setAttribute("placeholder", d[k]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (d[k] != null) el.setAttribute("aria-label", d[k]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (d[k] != null) el.setAttribute("alt", d[k]);
    });

    var metaDesc = document.querySelector('[data-i18n-meta="metaDesc"]');
    if (metaDesc && d.metaDesc) metaDesc.setAttribute("content", d.metaDesc);
    if (d.metaTitle) document.title = d.metaTitle;

    var sel = document.getElementById("langSelect");
    if (sel) sel.value = current;

    document.dispatchEvent(new CustomEvent("languagechange", { detail: current }));
  }

  function setLanguage(lang) {
    if (!DICT[lang]) return;
    current = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    apply();
  }

  // API pública para script.js (mensajes del formulario, etc.)
  window.I18N = {
    t: function (key) {
      var d = DICT[current] || DICT.es;
      return d[key] != null ? d[key] : (DICT.es[key] != null ? DICT.es[key] : key);
    },
    set: setLanguage,
    get lang() { return current; }
  };

  function init() {
    var sel = document.getElementById("langSelect");
    if (sel) {
      sel.value = current;
      sel.addEventListener("change", function () { setLanguage(this.value); });
    }
    apply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
