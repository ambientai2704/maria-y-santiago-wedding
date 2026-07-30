/* =====================================================
   María & Santiago — script.js
===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------
     NAV: fondo al hacer scroll + sección activa
  ------------------------------------------------- */
  var nav = document.getElementById('site-nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  var navLinks = document.querySelectorAll('.nav-link');
  var navSections = Array.prototype.map.call(navLinks, function (link) {
    return document.querySelector(link.getAttribute('href'));
  });

  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var idx = navSections.indexOf(entry.target);
      if (idx === -1) return;
      if (entry.isIntersecting) {
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        navLinks[idx].classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  navSections.forEach(function (s) { if (s) navObserver.observe(s); });

  /* -------------------------------------------------
     REVEAL ON SCROLL (fade up / left / right)
  ------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal, .fade-left, .fade-right, .fade-up');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.2 });
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  /* -------------------------------------------------
     PARALLAX SUTIL EN EL HERO
  ------------------------------------------------- */
  var heroBg = document.getElementById('hero-bg');
  if (heroBg && !prefersReducedMotion) {
    window.addEventListener('scroll', function () {
      var offset = window.scrollY * 0.15;
      heroBg.style.transform = 'translateY(' + offset + 'px)';
    }, { passive: true });
  }

  /* -------------------------------------------------
     CUENTA REGRESIVA
  ------------------------------------------------- */
  var weddingDate = new Date('2027-04-24T16:00:00-05:00').getTime();
  function pad(n) { return String(n).padStart(2, '0'); }
  function updateCountdown() {
    var diff = weddingDate - new Date().getTime();
    var elDays = document.getElementById('cd-days');
    if (!elDays) return;
    if (diff < 0) {
      document.getElementById('countdown').innerHTML = '<p style="font-family:\'Cormorant Garamond\',serif;font-size:32px;">¡Ya nos casamos!</p>';
      return;
    }
    document.getElementById('cd-days').textContent = pad(Math.floor(diff / 86400000));
    document.getElementById('cd-hours').textContent = pad(Math.floor((diff / 3600000) % 24));
    document.getElementById('cd-minutes').textContent = pad(Math.floor((diff / 60000) % 60));
    document.getElementById('cd-seconds').textContent = pad(Math.floor((diff / 1000) % 60));
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* -------------------------------------------------
     MESA DE REGALOS — MODAL
     (Para agregar más regalos en el futuro, edita el
     objeto giftData de abajo.)
  ------------------------------------------------- */
  var giftData = {
    'luna-de-miel': {
      title: '✈️ Luna de Miel',
      body: '<p>Muy pronto agregaremos aquí las ideas para ayudarnos a construir nuestra luna de miel. ¡Vuelve a mirar más adelante!</p>'
    },
    'hogar': {
      title: '🏡 Nuestro Hogar',
      body: '<p>Muy pronto agregaremos aquí nuestra lista de regalos para el hogar. ¡Vuelve a mirar más adelante!</p>'
    },
    'cocina': {
      title: '☕ Cocina',
      body: '<p>Muy pronto agregaremos aquí nuestra lista de regalos de cocina. ¡Vuelve a mirar más adelante!</p>'
    },
    'sala': {
      title: '🛋 Sala',
      body: '<p>Muy pronto agregaremos aquí nuestra lista de regalos para la sala. ¡Vuelve a mirar más adelante!</p>'
    },
    'aporte-libre': {
      title: '💚 Aporte Libre',
      body: '<p>Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, lo recibimos con cariño por transferencia:</p>' +
            '<div class="gift-bank">' +
            '<div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;">Bancolombia · Ahorros</div>' +
            '<div class="bank-num" id="modalBankNum">991 000 001 31</div>' +
            '<button type="button" class="copy-btn" id="modalCopyBtn">Copiar número</button>' +
            '</div>'
    }
  };

  var modal = document.getElementById('gift-modal');
  var modalTitle = document.getElementById('modal-title');
  var modalBody = document.getElementById('modal-body');
  var modalClose = document.getElementById('modal-close');

  function openModal(key) {
    var data = giftData[key];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    var copyBtn = document.getElementById('modalCopyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText('99100000131').then(function () {
          copyBtn.textContent = '¡Copiado!';
          setTimeout(function () { copyBtn.textContent = 'Copiar número'; }, 2000);
        }).catch(function () {
          copyBtn.textContent = '991 000 001 31';
        });
      });
    }
    modalClose.focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gift-card').forEach(function (card) {
    card.addEventListener('click', function () {
      openModal(card.getAttribute('data-gift'));
    });
  });
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
  });

  /* -------------------------------------------------
     GALERÍA — LIGHTBOX
  ------------------------------------------------- */
  var galleryImgs = Array.prototype.slice.call(document.querySelectorAll('.masonry img'));
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var currentIndex = 0;

  function showImage(i) {
    currentIndex = (i + galleryImgs.length) % galleryImgs.length;
    lightboxImg.src = galleryImgs[currentIndex].src;
    lightboxImg.alt = galleryImgs[currentIndex].alt;
  }

  galleryImgs.forEach(function (img, i) {
    img.addEventListener('click', function () {
      showImage(i);
      lightbox.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', function () { showImage(currentIndex - 1); });
  document.getElementById('lightbox-next').addEventListener('click', function () { showImage(currentIndex + 1); });
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (lightbox.hasAttribute('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });

  /* -------------------------------------------------
     RSVP — arma el mensaje y abre WhatsApp
     (Preparado para conectar con Google Forms más
     adelante: reemplaza este bloque por un fetch/POST
     a la URL del formulario cuando lo tengas listo.)
  ------------------------------------------------- */
  var rsvpForm = document.getElementById('rsvp-form');
  rsvpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(rsvpForm);
    var nombre = data.get('nombre');
    var asistencia = data.get('asistencia');
    var personas = data.get('personas');
    var mensaje = data.get('mensaje');

    var texto = 'Hola María y Santiago, soy ' + nombre + '. ' +
      (asistencia === 'Sí'
        ? 'Confirmo mi asistencia a su boda, seremos ' + personas + ' persona(s).'
        : 'Lamentablemente no podré asistir a su boda.');
    if (mensaje) texto += ' ' + mensaje;

    var url = 'https://wa.me/573053258543?text=' + encodeURIComponent(texto);
    window.open(url, '_blank', 'noopener');
  });

});
