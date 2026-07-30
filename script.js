<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>María & Santiago | 24 de abril de 2027</title>
<meta name="description" content="María & Santiago se casan el 24 de abril de 2027 en Medellín. Después de nueve años caminando juntos, llegó el momento de comenzar su para siempre.">

<meta property="og:type" content="website">
<meta property="og:title" content="María & Santiago | 24.04.2027">
<meta property="og:description" content="Después de nueve años caminando juntos, llegó el momento de comenzar nuestro para siempre.">
<meta property="og:image" content="images/propuesta.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="María & Santiago | 24.04.2027">
<meta name="twitter:description" content="Después de nueve años caminando juntos, llegó el momento de comenzar nuestro para siempre.">
<meta name="twitter:image" content="images/propuesta.jpg">

<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23214A36'/%3E%3Ctext x='50' y='62' font-family='Georgia,serif' font-size='42' fill='%23F8F7F3' text-anchor='middle'%3EM%26S%3C/text%3E%3C/svg%3E">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">

<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- ===================================================
     INTRO CINEMATOGRÁFICA
=================================================== -->
<div id="cine-intro" aria-hidden="true">
  <p class="cine-line" id="cine-line-1">Toda gran historia tiene un comienzo...</p>
  <p class="cine-line" id="cine-line-2">La nuestra comenzó hace nueve años.</p>
  <button id="skip-intro" type="button">Saltar</button>
</div>

<!-- ===================================================
     MENÚ FIJO
=================================================== -->
<header id="site-nav">
  <nav aria-label="Navegación principal">
    <a href="#hero" class="nav-link">Inicio</a>
    <a href="#historia" class="nav-link">Historia</a>
    <a href="#gran-dia" class="nav-link">El Gran Día</a>
    <a href="#regalos" class="nav-link">Regalos</a>
    <a href="#galeria" class="nav-link">Galería</a>
    <a href="#rsvp" class="nav-link">RSVP</a>
  </nav>
</header>

<main>

  <!-- ===================================================
       HERO
  =================================================== -->
  <section id="hero">
    <div class="hero-bg" id="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="eyebrow reveal">Con alegría en el corazón</p>
      <h1 class="reveal">María <span class="amp">&amp;</span> Santiago</h1>
      <p class="hero-date reveal">24 · Abril · 2027</p>
      <p class="hero-quote reveal">"Después de nueve años caminando juntos... llegó el momento de comenzar nuestro para siempre."</p>
      <a href="#historia" class="btn-outline reveal">
        Descubrir nuestra historia
        <span class="arrow">↓</span>
      </a>
    </div>
  </section>

  <!-- ===================================================
       CUENTA REGRESIVA
  =================================================== -->
  <section id="countdown-section">
    <p class="section-label reveal">Falta poco</p>
    <h2 class="reveal">Nos vemos en...</h2>
    <div class="countdown" id="countdown">
      <div class="cd-unit reveal"><span id="cd-days">00</span><small>Días</small></div>
      <div class="cd-unit reveal"><span id="cd-hours">00</span><small>Horas</small></div>
      <div class="cd-unit reveal"><span id="cd-minutes">00</span><small>Minutos</small></div>
      <div class="cd-unit reveal"><span id="cd-seconds">00</span><small>Segundos</small></div>
    </div>
  </section>

  <!-- ===================================================
       HISTORIA — CAPÍTULOS
  =================================================== -->
  <section id="historia">

    <article class="chapter" style="background-image:url('images/eia-graduacion.jpg')">
      <div class="chapter-overlay"></div>
      <div class="chapter-content fade-left">
        <p class="chapter-num">Capítulo I</p>
        <h2>Todo comenzó hace nueve años...</h2>
        <p>Nos conocimos en Emaús, un grupo juvenil. Año 2017.</p>
      </div>
    </article>

    <article class="chapter" style="background-image:url('images/Beso-cartagena.jpg')">
      <div class="chapter-overlay"></div>
      <div class="chapter-content fade-right">
        <p class="chapter-num">Capítulo II</p>
        <h2>23 de abril de 2017</h2>
        <p>Un picnic. Un ramo de flores. Y comenzó nuestra historia.</p>
      </div>
    </article>

    <article class="chapter" style="background-image:url('images/foto-traje.jpg')">
      <div class="chapter-overlay"></div>
      <div class="chapter-content fade-left">
        <p class="chapter-num">Capítulo III</p>
        <h2>Universidad EIA</h2>
        <p>Ingeniería Administrativa. Entramos al mismo grupo, estudiamos juntos, y nos graduamos el mismo día.</p>
      </div>
    </article>

    <article class="chapter" style="background-image:url('images/Callejon-novios.jpg')">
      <div class="chapter-overlay"></div>
      <div class="chapter-content fade-right">
        <p class="chapter-num">Capítulo IV</p>
        <h2>Emprendimos juntos</h2>
        <p>Vendimos arepas. Vendimos dulces. Creamos Silvestre — y tenemos un gato con ese mismo nombre.</p>
      </div>
    </article>

    <article class="chapter" style="background-image:url('images/La-rufina.jpg')">
      <div class="chapter-overlay"></div>
      <div class="chapter-content fade-left">
        <p class="chapter-num">Capítulo V</p>
        <h2>Ustedes son especiales</h2>
        <p>No invitamos a nadie por obligación. Queremos compartir este día con quienes realmente han hecho parte de nuestra historia.</p>
      </div>
    </article>

  </section>

  <!-- ===================================================
       SECCIÓN PERÚ — CINEMATOGRÁFICA
  =================================================== -->
  <section id="peru">

    <div class="peru-step" style="background-image:url('images/salineras.jpg')">
      <div class="chapter-overlay"></div>
      <p class="peru-line fade-up">Había un secreto.</p>
    </div>

    <div class="peru-step" style="background-image:url('images/beso-peru.jpg')">
      <div class="chapter-overlay"></div>
      <p class="peru-line fade-up">Ella todavía no lo sabía.</p>
    </div>

    <div class="peru-step" style="background-image:url('images/Postal-en-peru.jpg')">
      <div class="chapter-overlay"></div>
      <p class="peru-line fade-up">Solo íbamos a tomarnos unas fotos...</p>
    </div>

    <div class="peru-step" style="background-image:url('images/propuesta.jpg')">
      <div class="chapter-overlay"></div>
      <p class="peru-line fade-up">Pero ese nunca fue el verdadero plan.</p>
    </div>

    <div class="peru-si">
      <p class="fade-up">SÍ.</p>
    </div>

    <div class="peru-story">
      <p class="section-label reveal">La propuesta</p>
      <h2 class="reveal">Cusco, Perú</h2>
      <div class="peru-story-grid">
        <ul class="peru-list reveal">
          <li>Viaje a Lima</li>
          <li>Luego Cusco</li>
          <li>Mountain View Experience</li>
          <li>Una cabaña en el Valle Sagrado</li>
          <li>Picnic, champaña y tabla de quesos</li>
          <li>Flores</li>
          <li>Llegaron las llamas</li>
          <li>Se arrodilló</li>
          <li>Ella lloró</li>
          <li>Dijo que sí</li>
        </ul>
        <img class="peru-story-img reveal" src="images/propuesta.jpg" alt="El momento de la propuesta en el Valle Sagrado, Cusco" loading="lazy">
      </div>
    </div>

  </section>

  <!-- ===================================================
       EL GRAN DÍA
  =================================================== -->
  <section id="gran-dia">
    <p class="section-label reveal">El gran día</p>
    <h2 class="reveal">24 de abril de 2027</h2>

    <div class="detail-cards">
      <div class="detail-card reveal">
        <div class="detail-icon">⛪</div>
        <h3>Ceremonia</h3>
        <p>Parroquia María Madre de Dios<br>Medellín</p>
        <a href="https://www.google.com/maps/place/Parroquia+Mar%C3%ADa+Madre+de+Dios/@6.1771647,-75.450335,17z" target="_blank" rel="noopener" class="map-link">Ver ubicación</a>
      </div>
      <div class="detail-card reveal">
        <div class="detail-icon">🥂</div>
        <h3>Recepción</h3>
        <p>Bárbaro Cocina Primitiva<br>Rionegro · Desde las 4:00 pm</p>
        <a href="https://www.google.com/maps/place/Barbaro+Cocina+Primitiva+Rionegro/@6.169977,-75.4521315,17z" target="_blank" rel="noopener" class="map-link">Ver ubicación</a>
      </div>
    </div>

    <div class="maps-grid">
      <iframe class="map-frame reveal" loading="lazy" src="https://www.google.com/maps?q=6.1771647,-75.450335&z=16&output=embed" title="Mapa: Parroquia María Madre de Dios"></iframe>
      <iframe class="map-frame reveal" loading="lazy" src="https://www.google.com/maps?q=6.169977,-75.4521315&z=16&output=embed" title="Mapa: Bárbaro Cocina Primitiva"></iframe>
    </div>

    <div class="dresscode reveal">
      <p class="section-label">Código de vestimenta</p>
      <h3>Formal</h3>
      <div class="palette">
        <span style="background:#c9a27a"></span>
        <span style="background:#e3c9a5"></span>
        <span style="background:#d9b8a3"></span>
        <span style="background:#f0d9c0"></span>
        <span style="background:#c7d3c0"></span>
        <span style="background:#e6cfe0"></span>
      </div>
      <ul>
        <li>Traje para ellos, vestido para ellas</li>
        <li>Tonos tierra y pasteles</li>
        <li>Por favor evitar estampados</li>
      </ul>
    </div>
  </section>

  <!-- ===================================================
       MESA DE REGALOS
  =================================================== -->
  <section id="regalos">
    <p class="section-label reveal">Con todo nuestro cariño</p>
    <h2 class="reveal">Mesa de regalos</h2>
    <p class="section-intro reveal">Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, estas son algunas ideas.</p>

    <div class="gift-grid">
      <button class="gift-card reveal" type="button" data-gift="luna-de-miel">
        <img src="images/Postal-en-peru.jpg" alt="" loading="lazy">
        <div class="gift-card-label"><span>✈️</span> Luna de Miel</div>
      </button>
      <button class="gift-card reveal" type="button" data-gift="hogar">
        <img src="images/La-rufina.jpg" alt="" loading="lazy">
        <div class="gift-card-label"><span>🏡</span> Nuestro Hogar</div>
      </button>
      <button class="gift-card reveal" type="button" data-gift="cocina">
        <img src="images/Callejon-novios.jpg" alt="" loading="lazy">
        <div class="gift-card-label"><span>☕</span> Cocina</div>
      </button>
      <button class="gift-card reveal" type="button" data-gift="sala">
        <img src="images/foto-traje.jpg" alt="" loading="lazy">
        <div class="gift-card-label"><span>🛋</span> Sala</div>
      </button>
      <button class="gift-card reveal" type="button" data-gift="aporte-libre">
        <img src="images/anillo.jpg" alt="" loading="lazy">
        <div class="gift-card-label"><span>💚</span> Aporte Libre</div>
      </button>
    </div>
  </section>

  <!-- Modal de regalos -->
  <div id="gift-modal" class="modal-backdrop" hidden>
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" id="modal-close" type="button" aria-label="Cerrar">✕</button>
      <h3 id="modal-title"></h3>
      <div id="modal-body"></div>
    </div>
  </div>

  <!-- ===================================================
       GALERÍA
  =================================================== -->
  <section id="galeria">
    <p class="section-label reveal">Nuestros momentos</p>
    <h2 class="reveal">Galería</h2>

    <div class="masonry reveal">
      <img src="images/eia-graduacion.jpg" alt="Graduación EIA" loading="lazy">
      <img src="images/Beso-cartagena.jpg" alt="Cartagena" loading="lazy">
      <img src="images/Paseo-barichara.jpg" alt="Paseo en Barichara" loading="lazy">
      <img src="images/barichara-caminando.jpg" alt="Caminando en Barichara" loading="lazy">
      <img src="images/mexico-piramide.jpg" alt="Pirámide en México" loading="lazy">
      <img src="images/Postal-en-peru.jpg" alt="Perú" loading="lazy">
      <img src="images/anillo.jpg" alt="El anillo" loading="lazy">
      <img src="images/beso-peru.jpg" alt="Perú" loading="lazy">
      <img src="images/salineras.jpg" alt="Salineras de Maras" loading="lazy">
      <img src="images/foto-traje.jpg" alt="Foto de gala" loading="lazy">
      <img src="images/Callejon-novios.jpg" alt="Callejón" loading="lazy">
      <img src="images/La-rufina.jpg" alt="La Rufina" loading="lazy">
    </div>
  </section>

  <!-- Lightbox -->
  <div id="lightbox" class="modal-backdrop" hidden>
    <button id="lightbox-prev" class="lightbox-nav" type="button" aria-label="Anterior">‹</button>
    <img id="lightbox-img" src="" alt="">
    <button id="lightbox-next" class="lightbox-nav" type="button" aria-label="Siguiente">›</button>
    <button id="lightbox-close" class="modal-close lightbox-close" type="button" aria-label="Cerrar">✕</button>
  </div>

  <!-- ===================================================
       RSVP
  =================================================== -->
  <section id="rsvp">
    <p class="section-label reveal">Te esperamos</p>
    <h2 class="reveal">Confirma tu asistencia</h2>
    <p class="section-intro reveal">Escríbenos antes del 24 de marzo de 2027 para tenerte en cuenta.</p>

    <form id="rsvp-form" class="reveal">
      <label>
        Nombre completo
        <input type="text" name="nombre" required>
      </label>

      <fieldset>
        <legend>¿Asistirás?</legend>
        <label class="radio"><input type="radio" name="asistencia" value="Sí" checked> Sí</label>
        <label class="radio"><input type="radio" name="asistencia" value="No"> No</label>
      </fieldset>

      <label>
        Número de personas
        <input type="number" name="personas" min="1" value="1">
      </label>

      <label>
        Mensaje (opcional)
        <textarea name="mensaje" rows="3"></textarea>
      </label>

      <button type="submit" class="btn-solid">Enviar confirmación</button>
      <p class="rsvp-note">Al enviar, se abrirá WhatsApp con tu confirmación lista para mandarnos.</p>
    </form>
  </section>

</main>

<footer id="site-footer">
  <p class="footer-msg">Gracias por hacer parte de nuestra historia.</p>
  <h2>María &amp; Santiago</h2>
  <p class="footer-date">24 · Abril · 2027</p>
</footer>

<script src="script.js"></script>
</body>
</html>
