# María & Santiago — 24.04.2027

Página web de matrimonio, construida solo con HTML, CSS y JavaScript puro (sin frameworks). Lista para publicarse en GitHub Pages.

## Estructura del proyecto

```
maria-y-santiago-wedding/
├── index.html
├── style.css
├── script.js
└── images/
    ├── propuesta.jpg
    ├── beso-peru.jpg
    ├── postal-en-peru.jpg
    ├── anillo.jpg
    ├── paseo-barichara.jpg
    ├── callejon-novios.jpg
    ├── barichara-caminando.jpg
    ├── salineras.jpg
    ├── la-rufina.jpg
    ├── foto-traje.jpg
    ├── eia-graduacion.jpg
    └── mexico-piramide.jpg
```

## Cómo verla en tu computador

No necesita instalación ni servidor: abre `index.html` directamente con doble clic, o con clic derecho → "Abrir con" tu navegador.

## Cómo publicarla en GitHub Pages

1. Ve a tu repositorio `maria-y-santiago-wedding` en GitHub.
2. Borra todo el contenido actual del repositorio.
3. Sube estos 15 archivos (los 3 de la raíz + los 12 dentro de `images/`), respetando esta misma estructura de carpetas.
4. Ve a **Settings → Pages**, y confirma que la fuente sea la rama `main` (o `master`), carpeta `/ (root)`.
5. Espera 1-2 minutos y entra a `https://ambientai2704.github.io/maria-y-santiago-wedding/`.

## Cómo editar contenido

- **Textos** (historia, fechas, direcciones): edítalos directamente en `index.html`, son texto plano dentro de las etiquetas.
- **Colores y tipografía**: están centralizados al inicio de `style.css`, dentro de `:root { ... }`.
- **Regalos**: el contenido de cada categoría (Luna de Miel, Hogar, Cocina, Sala, Aporte Libre) está en el objeto `giftData` al inicio de `script.js` — solo edita el texto ahí, no hace falta tocar el HTML.
- **Número de WhatsApp del RSVP**: está al final de `script.js`, en la línea que arma la URL `https://wa.me/...`.
- **Fecha de la cuenta regresiva**: variable `weddingDate` en `script.js`.

## Notas

- Las imágenes deben conservar exactamente estos nombres (en minúscula) para que las rutas del HTML sigan funcionando.
- No agregues archivos ocultos ni copias duplicadas (`index (1).html`, etc.) al repositorio — GitHub Pages solo debe servir estos 15 archivos.
