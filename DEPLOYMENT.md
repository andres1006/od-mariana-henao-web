# Guía de Despliegue

Esta guía te ayudará a desplegar la landing page de la Odontóloga Mariana Henao en diferentes plataformas.

## 📋 Pre-requisitos

- Node.js v18 o superior
- npm o yarn
- Git

## 🚀 Opciones de Despliegue

### 1. Vercel (Recomendado - Gratis)

Vercel es la opción más sencilla y rápida para desplegar proyectos Astro:

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desde el directorio del proyecto
vercel

# Seguir las instrucciones en pantalla
```

O desde la interfaz web:
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Astro
4. ¡Despliega!

### 2. Netlify (Gratis)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Desde el directorio del proyecto
npm run build

# Desplegar
netlify deploy --prod
```

O desde la interfaz web:
1. Ve a [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. ¡Despliega!

### 3. GitHub Pages

1. Actualiza `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://andres1006.github.io',
  base: '/od-mariana-henao-web',
  // ... resto de la configuración
});
```

2. Crea `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

3. En GitHub, ve a Settings → Pages → Source: "GitHub Actions"

### 4. Hosting Tradicional (cPanel, etc.)

```bash
# Construir el proyecto
npm run build

# El contenido de la carpeta 'dist' es lo que debes subir
# Sube todos los archivos de 'dist' a la carpeta public_html de tu servidor
```

## 🔧 Variables de Entorno

Si necesitas usar variables de entorno:

1. Crea un archivo `.env`:
```
PUBLIC_CONTACT_EMAIL=contacto@marianahenao.com
```

2. En tu plataforma de hosting, añade las mismas variables.

## 📸 Añadir Imágenes Reales

Para agregar las fotos de Mariana Henao:

1. Coloca las imágenes en `public/images/`:
   - `hero-bg.jpg` - Foto para el Hero (1920x1080px mínimo)
   - `mariana-henao.jpg` - Foto circular (cuadrada, 800x800px mínimo)

2. Actualiza los componentes:
   - En `src/sections/Hero.astro` línea 11, descomenta la imagen
   - En `src/sections/About.astro` línea 28, descomenta la imagen

3. Reconstruye y despliega:
```bash
npm run build
```

## 🔍 Verificar el Build Local

Antes de desplegar, verifica que todo funciona:

```bash
# Construir
npm run build

# Previsualizar
npm run preview
```

Abre http://localhost:4321 en tu navegador.

## 📱 Configuración del Dominio Personalizado

Una vez desplegado, puedes conectar un dominio personalizado:

### En Vercel/Netlify:
1. Ve a la configuración del proyecto
2. Busca "Domains" o "Domain settings"
3. Añade tu dominio (ej: `www.marianahenao.com`)
4. Configura los DNS según las instrucciones

Registros DNS típicos:
```
Tipo: CNAME
Nombre: www
Valor: [lo que te proporcione Vercel/Netlify]
```

## 📊 Analíticas (Opcional)

Para añadir Google Analytics, agrega en `src/layouts/Layout.astro` antes del cierre de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆘 Solución de Problemas

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### El sitio no se ve como en desarrollo
- Verifica que todas las rutas de imágenes usen rutas absolutas desde `/`
- Asegúrate de que la configuración `base` en `astro.config.mjs` sea correcta

### Errores de build en producción
```bash
# Limpia y reconstruye
rm -rf dist
npm run build
```

## 📞 Soporte

Si tienes problemas con el despliegue, revisa:
- [Documentación de Astro](https://docs.astro.build/en/guides/deploy/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

**¡Tu sitio está listo para brillar en la web! 🌟**

