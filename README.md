# Lala Nutrición — Astro

Migración a [Astro](https://astro.build) del landing de Laura Araúz (Lala Nutrición).
Mismo diseño, contenido y comportamiento que la versión HTML original, con una
estructura mantenible y lista para crecer (i18n por rutas, optimización de
imágenes, blog).

## Comandos

| Comando             | Acción                                                     |
| :------------------ | :--------------------------------------------------------- |
| `npm install`       | Instala dependencias                                       |
| `npm run dev`       | Servidor de desarrollo en `http://localhost:4321`         |
| `npm run build`     | Compila el sitio estático a `./dist/`                      |
| `npm run preview`   | Sirve localmente el `./dist/` ya compilado                |

> Nota: si `npm install` falla por permisos del cache global, usa
> `npm install --cache "$(pwd)/.npm-cache"`.

## Estructura

```
public/
  assets/        Imágenes (igual que el original)
  CNAME          lalanutricion.com
  robots.txt
  sitemap.xml
src/
  assets/                Imágenes que se optimizan en build (→ WebP)
  i18n/ui.ts             Todos los textos ES/EN + metadatos + mensajes WhatsApp
  components/Page.astro  Cuerpo de la página (recibe lang) + script
  layouts/Layout.astro   <head>: meta, Open Graph, Twitter, Schema.org (recibe lang)
  pages/index.astro      Ruta ES  →  /
  pages/en/index.astro   Ruta EN  →  /en/
  styles/global.css      Todos los estilos
astro.config.mjs         site: https://lalanutricion.com
```

## Cambios respecto al original

- **i18n por rutas reales**: `/` (español) y `/en/` (inglés) se generan como
  HTML estático ya traducido. Antes el inglés era solo JavaScript en el cliente
  (`?lang=en`), así que Google solo veía la versión en español. El botón de
  idioma ahora es un enlace real entre `/` y `/en/`.
- **Imágenes optimizadas** con `astro:assets`: PNG/JPG → WebP en build.
  Ejemplos: `laura.png` 3.7 MB → 272 KB, `hero1` 1.8 MB → 64 KB,
  `hero2` 1.8 MB → 87 KB. El peso del sitio cae drásticamente (mejor LCP).
- **Sin duplicación de textos**: cada frase vive una sola vez en
  `src/i18n/ui.ts`. Antes el mismo texto estaba en el HTML, en el objeto JS de
  traducciones y en el JSON-LD (triplicado).
- El dominio canónico, Open Graph y Schema.org se unificaron a
  `https://lalanutricion.com` (antes apuntaban a `erwebo.github.io`).
- `hreflang`, `canonical`, Open Graph y el `FAQPage` de Schema.org se generan
  por idioma en cada ruta.
- El menú móvil cierra con listeners de JS en lugar de `onclick` inline.

## Editar textos / añadir un idioma

Todos los textos están en `src/i18n/ui.ts` (objeto `ui`, claves `es`/`en`).
Para corregir una frase, edítala ahí una sola vez. Para un idioma nuevo:
añade la clave en `ui`, `meta` y `waMsg`, crea `src/pages/<lang>/index.astro`
y suma su `hreflang` en `Layout.astro` y `public/sitemap.xml`.

## Despliegue

`npm run build` genera `./dist/`. Súbelo a GitHub Pages, Netlify, Vercel o
Cloudflare Pages. El `CNAME` ya viaja dentro de `dist/` para GitHub Pages.

## Próximos pasos sugeridos

1. **Blog / contenido** con content collections: lo que más mueve el SEO a
   largo plazo (recetas, condiciones, nutrición en Panamá). Cada artículo sería
   una nueva URL indexable.
2. **`@astrojs/sitemap`**: generar el sitemap automáticamente (hoy es manual en
   `public/sitemap.xml`) para que incluya nuevas páginas sin tocarlo a mano.
3. **Imágenes responsive** (`widths`/`sizes` en `<Image>`) si quieres exprimir
   aún más el rendimiento en móvil.
