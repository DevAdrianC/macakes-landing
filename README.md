# Macakes — Landing Page

Landing page de presentación para **Macakes**, pastelería artesanal en Resistencia, Chaco. Pensada para escanearse vía código QR durante la **Bienal Chaco – Resistencia** y llevar al visitante, en menos de 30 segundos, a conocer la marca, contactar por WhatsApp, seguir Instagram, llegar al local y dejar una reseña en Google.

No es un ecommerce: es una experiencia de una sola página, corta, rápida y mobile-first.

Este proyecto es también la **primera Landing Card reutilizable de CloudCastle**: la base para futuras landings de otros clientes, cambiando únicamente un archivo de configuración.

---

## Tecnologías utilizadas

- **React 19** + **Vite** — arquitectura y bundling
- **Tailwind CSS v4** — estilos utilitarios (vía `@tailwindcss/vite`, sin `tailwind.config.js`, con tokens definidos en `src/index.css`)
- **Framer Motion** — animaciones sutiles (fade in, slide up, hover, reveal on scroll)
- **lucide-react** — iconografía minimalista

---

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Levanta el servidor local (por defecto en `http://localhost:5173`).

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para deploy. Se puede previsualizar localmente con:

```bash
npm run preview
```

---

## Configuración de la empresa

**Todo el contenido editable vive en un único archivo:**

```
src/config/companyConfig.js
```

Ahí se define: nombre, slogan, logo, colores, textos del hero, sección de reseñas, datos de contacto (WhatsApp, teléfono, Instagram, Google Maps), servicios ofrecidos, y el copy asociado al evento puntual (Bienal Chaco / Pinky Experiencia).

**Ningún componente de React tiene textos, colores ni URLs hardcodeadas.** Todo se consume desde `companyConfig.js`.

### Cómo actualizar datos comunes

| Qué cambiar | Dónde |
|---|---|
| Logo | Reemplazar `src/assets/logo.svg` (mismo nombre de archivo) |
| Colores de marca | `company.colors` en `companyConfig.js` + tokens en `src/index.css` (`@theme`) |
| Textos del Hero | `company.hero` |
| Link de WhatsApp / mensaje precargado | `company.contact.whatsapp.url` |
| Teléfono mostrado / copiable | `company.contact.phone` |
| Instagram | `company.contact.instagram` |
| Ubicación (Google Maps) | `company.contact.maps` |
| Link de Google Reviews | `company.reviews.url` |
| Servicios (tarjetas) | `company.services` (array de `{ icon, label }`, íconos disponibles en `ServicesSection.jsx`) |
| Mensaje de footer / evento activo | `company.event` |

---

## Arquitectura

```
src/
  components/
    Hero/              → Logo, título, subtítulo, CTAs principales
    ReviewSection/      → Sección de reseñas de Google (prioridad #1 post-hero)
    ContactSection/     → WhatsApp, teléfono (copiar), Instagram, ubicación
    ServicesSection/    → Grilla de servicios con ícono + animación
    Footer/             → Logo, redes, mensaje de cierre
    shared/
      Button.jsx        → Botón base reutilizable (variantes primary/outline/ghost)
      FrostingDivider.jsx → Divisor decorativo (curva tipo glaseado) entre secciones
  config/
    companyConfig.js    → Única fuente de verdad de contenido/colores/URLs
  assets/
    logo.svg            → Logo oficial (vectorial, sin modificar)
  App.jsx
  main.jsx
  index.css              → Tokens de diseño (@theme) + estilos base
```

---

## Deploy en Netlify

El proyecto incluye `netlify.toml` ya configurado, así que el deploy no requiere tocar nada en la UI de Netlify:

1. Crear una cuenta gratuita en [netlify.com](https://netlify.com) si no tenés una.
2. **Opción A — Deploy desde Git (recomendado):**
   - Subir este proyecto a un repositorio de GitHub.
   - En Netlify: **Add new site → Import an existing project → conectar el repositorio**.
   - Netlify detecta automáticamente `npm run build` y la carpeta `dist` gracias al `netlify.toml`.
3. **Opción B — Deploy manual (drag & drop):**
   - Correr `npm run build` localmente.
   - Arrastrar la carpeta `dist/` generada a [app.netlify.com/drop](https://app.netlify.com/drop).

El plan gratuito de Netlify es suficiente para este proyecto (sitio estático, sin backend).

---

## Cómo subir el proyecto a GitHub

```bash
git init
git add .
git commit -m "Landing Macakes - versión inicial"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<nombre-repo>.git
git push -u origin main
```

> Este repositorio ya se inicializó localmente (`git init` + primer commit) como parte de la entrega. Solo falta crear el repositorio remoto en GitHub y hacer `git push`.

---

## Cómo reutilizar esta plantilla para un nuevo cliente

1. Duplicar el proyecto (o crear una rama/branch nueva).
2. Reemplazar `src/assets/logo.svg` por el logo del nuevo cliente.
3. Editar `src/config/companyConfig.js` con los datos del nuevo cliente (colores, textos, contacto, servicios).
4. Ajustar los valores de color en el bloque `@theme` de `src/index.css` si la paleta cambia.
5. Ejecutar `npm run build` y deployar — **no es necesario tocar ningún componente de React.**

Si en el futuro se suman muchos clientes en simultáneo, el siguiente paso natural es dividir `companyConfig.js` en `src/config/clients/<cliente>.js` y seleccionar el activo por variable de entorno — hoy el proyecto está armado para un solo cliente por decisión explícita, pero la separación de contenido ya deja el terreno preparado para ese salto.

---

## Rendimiento y accesibilidad

- Imágenes en formato SVG (vectorial, liviano) y lazy-loading nativo donde aplica.
- Contraste validado en textos sobre fondo rosa (texto en tono bordó/tinta oscura, nunca blanco sobre rosa claro).
- Foco visible (`focus-visible`) en todos los botones y links.
- Textos alternativos (`alt`) en imágenes y `aria-label` en íconos interactivos.
- Animaciones respetan `prefers-reduced-motion`.
- Meta tags de SEO, Open Graph, Twitter Card, favicon y manifest incluidos en `index.html` / `public/`.

---

## Pendientes a cargo del cliente

- Ninguno funcional: WhatsApp, Instagram, Maps y Google Reviews ya están con los enlaces oficiales confirmados.
- Opcional: reemplazar `public/og-image.png` (imagen de vista previa al compartir el link) si se desea una pieza gráfica distinta a la generada automáticamente con el logo.
