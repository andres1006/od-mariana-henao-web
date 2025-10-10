# 🚀 Inicio Rápido

## Pasos para ejecutar el proyecto

### 1. Iniciar el servidor de desarrollo

```bash
cd ~/Documents/proyects/od-mariana-henao-web
npm run dev
```

El sitio estará disponible en: **http://localhost:4321**

### 2. Construir para producción

```bash
npm run build
```

### 3. Previsualizar el build de producción

```bash
npm run preview
```

## 📸 Añadir Imágenes

1. Coloca tus imágenes en `public/images/`:
   - `hero-bg.jpg` - Imagen de fondo del Hero
   - `mariana-henao.jpg` - Foto de perfil circular

2. Descomenta las líneas de imagen en:
   - `src/sections/Hero.astro` (línea 11)
   - `src/sections/About.astro` (línea 28)

## 📤 Subir a GitHub

```bash
# Ver el estado
git status

# Si hay cambios nuevos
git add .
git commit -m "Tu mensaje"

# Subir al repositorio (primera vez)
git push -u origin main

# Siguientes veces
git push
```

## 🌐 Desplegar

Ver archivo `DEPLOYMENT.md` para instrucciones detalladas de despliegue en:
- Vercel (Recomendado)
- Netlify
- GitHub Pages
- Hosting tradicional

## 📝 Personalización Rápida

### Cambiar colores
Edita `src/styles/global.css`:
```css
--color-primary: #00a89d;      /* Color turquesa principal */
--color-accent: #E85D4A;        /* Color naranja/rojo */
```

### Cambiar información de contacto
Busca y reemplaza en todos los archivos:
- `310 260 86 76` → Tu nuevo teléfono
- `@od.mariana.henao` → Tu nuevo Instagram
- `Calle 64A...` → Tu nueva dirección

### Cambiar textos
Los textos principales están en:
- `src/sections/Hero.astro` - Slogan y texto principal
- `src/sections/Services.astro` - Descripción de servicios
- `src/sections/About.astro` - Biografía
- `src/sections/Contact.astro` - Información de contacto

## 🆘 Comandos Útiles

```bash
# Ver versión de Node
node --version

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Limpiar build
rm -rf dist

# Ver logs detallados
npm run build -- --verbose
```

## ✅ Checklist antes de desplegar

- [ ] Añadir imágenes reales en `public/images/`
- [ ] Verificar información de contacto
- [ ] Probar el sitio localmente con `npm run preview`
- [ ] Verificar que todos los enlaces funcionen
- [ ] Probar en móvil (DevTools → Toggle Device Toolbar)
- [ ] Hacer commit de todos los cambios
- [ ] Subir a GitHub
- [ ] Desplegar en plataforma elegida

---

¡Todo listo para comenzar! 🎉

