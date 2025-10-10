# 📁 Estructura del Proyecto

## Directorio Principal

```
od-mariana-henao-web/
├── public/              # Archivos estáticos (accesibles públicamente)
│   ├── favicon.svg      # Ícono del sitio
│   └── images/          # Carpeta para imágenes
│       └── (añade aquí tus fotos)
├── src/                 # Código fuente
│   ├── components/      # Componentes reutilizables
│   │   ├── ContactCard.tsx       # Tarjeta de contacto individual
│   │   ├── ContactGrid.tsx       # Grid de tarjetas de contacto
│   │   ├── Footer.astro          # Pie de página
│   │   ├── Header.astro          # Cabecera con navegación
│   │   ├── MobileMenu.tsx        # Menú móvil hamburguesa
│   │   ├── ServiceCard.tsx       # Tarjeta de servicio individual
│   │   ├── ServicesGrid.tsx      # Grid de servicios
│   │   └── WhatsAppButton.tsx    # Botón flotante de WhatsApp
│   ├── layouts/         # Layouts de página
│   │   └── Layout.astro          # Layout principal con SEO
│   ├── pages/           # Páginas del sitio
│   │   └── index.astro           # Página principal (única)
│   ├── sections/        # Secciones de la landing page
│   │   ├── About.astro           # Sección "Acerca de mí"
│   │   ├── Contact.astro         # Sección de contacto
│   │   ├── Hero.astro            # Sección hero (principal)
│   │   └── Services.astro        # Sección de servicios
│   └── styles/          # Estilos globales
│       └── global.css            # Estilos y variables CSS
├── .gitignore           # Archivos ignorados por Git
├── astro.config.mjs     # Configuración de Astro
├── package.json         # Dependencias del proyecto
├── tsconfig.json        # Configuración de TypeScript
├── DEPLOYMENT.md        # Guía de despliegue completa
├── QUICKSTART.md        # Guía de inicio rápido
└── README.md            # Documentación principal
```

## 📄 Descripción de Componentes

### Componentes React (`.tsx`)
Componentes interactivos con animaciones y estado:

- **MobileMenu.tsx**: Menú hamburguesa para móviles con animaciones de apertura/cierre
- **WhatsAppButton.tsx**: Botón flotante siempre visible con animación de pulso
- **ServiceCard.tsx**: Tarjeta individual de servicio con animaciones on-scroll
- **ServicesGrid.tsx**: Contenedor de todas las tarjetas de servicio
- **ContactCard.tsx**: Tarjeta individual de contacto con hover effects
- **ContactGrid.tsx**: Contenedor de todas las tarjetas de contacto

### Componentes Astro (`.astro`)
Componentes estáticos optimizados para SEO:

- **Header.astro**: Navegación sticky con logo y menú
- **Footer.astro**: Pie de página con redes sociales y copyright

### Secciones (`.astro`)
Cada sección de la landing page:

- **Hero.astro**: Primera impresión con slogan y CTA principal
- **Services.astro**: Muestra los 4 servicios principales
- **About.astro**: Biografía y presentación de la Dra.
- **Contact.astro**: Información de contacto y CTAs

### Layout
- **Layout.astro**: Wrapper principal con:
  - Metadatos SEO
  - Open Graph tags
  - Fuentes de Google
  - Estructura HTML base

## 🎨 Estilos

### Variables CSS Personalizadas
Definidas en `src/styles/global.css`:

```css
--color-primary: #00a89d        /* Turquesa principal */
--color-primary-dark: #008a81   /* Turquesa oscuro */
--color-accent: #E85D4A         /* Naranja/Rojo */
--color-text-dark: #333333      /* Texto principal */
--color-bg-light: #F8F9FA       /* Fondo claro */
--color-bg-monogram: #EAEAEA    /* Monograma MH */
--font-sans: "Montserrat"       /* Fuente principal */
--font-script: "Dancing Script" /* Fuente cursiva */
```

## 🔧 Archivos de Configuración

- **astro.config.mjs**: Configuración de Astro, React y Tailwind
- **tsconfig.json**: Configuración de TypeScript
- **package.json**: Dependencias y scripts
  - `npm run dev`: Servidor de desarrollo
  - `npm run build`: Construir para producción
  - `npm run preview`: Previsualizar build

## 📦 Dependencias Principales

```json
{
  "astro": "Framework principal",
  "@astrojs/react": "Integración de React",
  "react": "Componentes interactivos",
  "react-dom": "Renderizado de React",
  "tailwindcss": "Estilos utility-first",
  "framer-motion": "Animaciones fluidas",
  "react-icons": "Biblioteca de íconos"
}
```

## 🎯 Flujo de la Página

1. **index.astro** → Página principal que importa:
2. **Header.astro** → Navegación fija
3. **Hero.astro** → Sección de bienvenida
4. **Services.astro** → Muestra ServicesGrid.tsx
5. **About.astro** → Biografía y foto
6. **Contact.astro** → Muestra ContactGrid.tsx
7. **Footer.astro** → Información final
8. **WhatsAppButton.tsx** → Botón flotante (siempre visible)

## 🔄 Cómo Fluyen los Datos

```
Layout.astro (SEO + estructura)
    ↓
index.astro (página principal)
    ↓
Header.astro + Secciones + Footer
    ↓
Componentes React (interactividad)
    ↓
Estilos (Tailwind + CSS custom)
```

## 📝 Para Modificar el Contenido

### Cambiar textos:
- **Slogan**: `src/sections/Hero.astro`
- **Servicios**: `src/components/ServicesGrid.tsx`
- **Biografía**: `src/sections/About.astro`
- **Contacto**: `src/components/ContactGrid.tsx`

### Cambiar colores:
- `src/styles/global.css` → Variables CSS

### Cambiar fuentes:
- `src/layouts/Layout.astro` → Google Fonts link
- `src/styles/global.css` → Variables de fuentes

### Añadir imágenes:
- Coloca archivos en `public/images/`
- Descomenta líneas en Hero.astro y About.astro
- Usa rutas absolutas: `/images/nombre.jpg`

## 🚀 Rendimiento

El proyecto está optimizado para:
- ⚡ Carga ultra rápida (Astro genera HTML estático)
- 🎨 Hidratación selectiva (React solo donde se necesita)
- 📱 Mobile-first responsive
- 🔍 SEO optimizado
- ♿ Accesibilidad (semantic HTML, ARIA labels)

---

**Esta estructura está diseñada para ser fácil de mantener y escalar.**

