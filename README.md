# Invitación de boda · Oliver & Beatriz

Landing page vertical, responsive y estática hecha con **React + Vite** (sin backend).

## Cómo correrla

```bash
npm install
npm run dev        # desarrollo → http://localhost:5173
npm run build      # genera la carpeta /dist lista para publicar
npm run preview    # prueba local del build
```

## Qué cambiar (todo en `src/config.js`)

| Qué | Dónde |
|---|---|
| Enlaces de Google Maps (ceremonia y recepción) | `ceremonia.mapsUrl` y `recepcion.mapsUrl` |
| Número de WhatsApp para confirmar asistencia | `confirmacion.whatsapp` (ej. `59170000000`, sin `+`) |
| Usar Google Forms en vez de WhatsApp | `confirmacion.googleFormUrl` |
| Música de fondo | Coloca el MP3 en `public/musica/sin-principio-ni-final.mp3` |
| Nombres, padres, padrinos, horarios | `src/config.js` |

> Si el archivo de música no existe, el botón flotante se oculta y la sección muestra un aviso discreto.
> Por derechos de autor, el MP3 debes agregarlo tú.

## Estructura

```
invitacion-boda/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── musica/            ← pon aquí tu MP3
└── src/
    ├── main.jsx
    ├── App.jsx            ← arma todas las secciones y controla la música
    ├── config.js          ← datos editables de la boda
    ├── hooks/
    │   ├── useCountdown.js
    │   └── useReveal.js
    ├── components/
    │   ├── Portada.jsx
    │   ├── Mensaje.jsx
    │   ├── Padres.jsx
    │   ├── Padrinos.jsx
    │   ├── CuentaRegresiva.jsx
    │   ├── Ceremonia.jsx
    │   ├── Recepcion.jsx
    │   ├── Musica.jsx
    │   ├── FraseEspecial.jsx
    │   ├── Confirmacion.jsx
    │   ├── Footer.jsx
    │   ├── Floral.jsx     ← ramas de olivo, flores, divisor, anillos (SVG)
    │   ├── Petalos.jsx    ← pétalos cayendo en la portada
    │   └── Reveal.jsx     ← animación al hacer scroll
    └── styles/
        └── global.css
```

## Publicar gratis

Sube la carpeta `dist/` (después de `npm run build`) a Netlify, Vercel, Cloudflare Pages o GitHub Pages.
