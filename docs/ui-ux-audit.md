# Auditoría UI/UX – Landing "Mariana Henao"

## Resumen ejecutivo
- La landing ya comunica empatía, pero la jerarquía visual se diluye por fondos con alto nivel de ruido (gradientes, halos borrosos) que compiten con la foto y el mensaje principal.
- Hay oportunidades para reforzar la credibilidad (doctor, protocolos, resultados) con señales de confianza más tangibles y apoyos visuales que acompañen el storytelling emocional.
- El flujo hacia la conversión (contacto / WhatsApp) puede simplificarse con llamadas a la acción persistentes, estados de interacción claros y una sensación de inmediatez en móvil.

## Hallazgos priorizados
1. **Primer pantallazo saturado**: El hero mezcla gradientes, blobs difuminados y tarjetas flotantes (`src/sections/Hero.astro`) que generan ruido y restan protagonismo a la imagen de Mariana y al CTA principal.
2. **Foco disperso en scroll**: Cada sección repite patrones de tarjetas con sombras intensas (`Pain.astro`, `Services.astro`, `Testimonials.astro`), reduciendo contraste entre mensajes clave y dificultando el escaneo.
3. **Prueba social poco tangible**: Los testimonios carecen de fotos, detalles verificables o indicadores de proceso (antes/después), lo que limita la confianza.
4. **Formulario sin feedback ni guía**: El formulario de contacto (`Contact.astro`) no define estados de error/success ni expectativas de respuesta, y en móvil requiere demasiado scroll antes de ver el mapa o alternativas de contacto.
5. **Performance / accesibilidad**: Las múltiples sombras difusas y animaciones de blur afectan el rendimiento en dispositivos de gama media; además, falta revisión de contraste en texto sobre fondos claros.

## Recomendaciones por sección

### Navegación y header (`src/components/Header.astro`)
- **Refuerza la barra fija** con un indicador de CTA persistente (botón "Agenda tu valoración" con ícono de calendario) y versiones sticky que reduzcan altura al hacer scroll para liberar espacio en móvil.
- **Ajusta la tipografía de la marca**: utiliza un peso más alto para "Odontóloga" y evita el script en tamaños pequeños para mejorar legibilidad en pantallas densas.
- **Añade microinteracción** al hover del menú (subrayado deslizante o indicador de sección activa) para reforzar orientación.

### Hero (`src/sections/Hero.astro`)
- **Simplifica el fondo**: reemplaza los múltiples halos borrosos por una sola superposición suave o un degradado radial; considera utilizar una textura sutil de consultorio para conservar el key visual sin recargar.
- **Optimiza la foto** con un `img` responsivo (`srcset` / `sizes`) y enmascarado orgánico; agrega un badge que indique años de experiencia, y un enlace a reseñas verificadas.
- **Reordena el contenido en móvil**: prioriza el retrato y CTA antes del párrafo largo; usa un componente de "beneficios rápidos" en carrusel horizontal para evitar tarjetas duplicadas en mobile.
- **Prueba A/B de CTA**: testea copy complementario (ej. "Conoce tu plan de sonrisa en 45 minutos") y añade un microcopy de seguridad: "Sin compromiso".

### Sección de Dolor (`src/sections/Pain.astro`)
- **Introduce storytelling visual** con ilustraciones lineales o fotografías en escala suave que muestren las situaciones (taparse la boca, evitar fotos, ansiedad).
- **Convierte cada dolor en insight accionable**: agrega botones "Ver cómo lo resolvemos" que anclen a protocolos específicos.
- **Reduce sombras**: cambia `shadow-lg` por `shadow-md` y usa `border` más sutil + `hover` con elevación mínima para mejorar performance.

### Promesa / Diferenciador (`src/sections/Promise.astro`)
- **Añade evidencia**: incorpora microestadísticas (NPS, % de pacientes sin dolor reportado) y logos de asociaciones profesionales.
- **Usa un layout escalonado** que intercale texto con fotos de proceso (valoración, simulación digital, resultado) para reforzar la narrativa empática.
- **Incluye CTA contextual** (ej. "Descarga nuestros protocolos") en formato secondary link + ícono de descarga para impulsar microconversiones.

### Servicios (`src/sections/Services.astro`)
- **Implementa tabs o cards con anclajes** para evitar scroll largo; cada servicio podría mostrar un preview con ícono, beneficios, duración promedio y financiamiento disponible.
- **Agrega testimonios cortos o métricas** específicas por servicio ("92% sienten alivio del bruxismo en 2 semanas").
- **Mejora accesibilidad**: asegúrate que el contraste texto-fondo cumpla WCAG AA, y utiliza `aria-labelledby` para describir cada card.

### Testimonios (`src/sections/Testimonials.astro`)
- **Integra evidencia visual**: usa carrusel con fotos reales (autorizadas), iniciales o avatares profesionales, y sello "Verificado".
- **Añade narrativa**: cada card puede incluir el punto de partida + resultado en formato "Antes → Después" y CTA "Ver historia completa".
- **Refuerza confianza** con badges de plataformas externas (Google Reviews, Instagram) y un contador dinámico de valoraciones.

### CTA Final (`src/sections/FinalCTA.astro`)
- **Introduce urgencia responsable**: añade elementos como disponibilidad semanal limitada o countdown ligero a la siguiente agenda abierta.
- **Ofrece alternativas**: duplica el botón primario y suma un CTA secundario ("Habla con Mariana por WhatsApp") con contraste alto.
- **Simplifica copy**: utiliza una frase principal corta + bullet con beneficios para evitar bloque de texto.

### Contacto (`src/sections/Contact.astro`)
- **Diseña el formulario en dos pasos**: primer paso para datos rápidos (nombre + WhatsApp) y segundo para objetivos; esto reduce fricción inicial.
- **Añade feedback inmediato**: mensajes de éxito, errores de validación en tiempo real, y promesa de respuesta ("Te contactaremos en <2h").
- **Optimiza la disposición en móvil**: coloca el botón primario siempre visible (sticky) y mueve el mapa a un acordeón desplegable.
- **Integra agenda automática**: conecta con Calendly / Doctoralia para permitir que la persona reserve directamente si ya está lista.

### Botón flotante de WhatsApp (`src/components/WhatsAppButton.tsx`)
- **Controla la animación**: ofrece opción de silenciar el pulso tras 1-2 iteraciones para evitar distracción; ajusta contraste para modo oscuro del sistema.
- **Añade mensaje contextual**: tooltip breve con "Responderemos en <15 min" para reforzar rapidez.

### Footer / Confianza
- **Incluye elementos de respaldo**: logos de aseguradoras, universidades, certificaciones, horario extendido.
- **Añade enlace a políticas** (privacidad, consentimiento informado) para transmitir profesionalismo.

## Performance y accesibilidad
- Minimiza el uso de múltiples `blur-3xl` y sombras en simultáneo; considera usar imágenes SVG preprocesadas o pseudo-elementos con `opacity` en lugar de blur para mantener 60fps en dispositivos modestos.
- Implementa `prefers-reduced-motion` en animaciones (CTA, WhatsApp button) y asegura contraste de texto > 4.5:1, especialmente en copy gris sobre fondos blancos.
- Optimiza assets: exporta fotografías en formato AVIF/WebP y aplica `loading="lazy"` + `decoding="async"` para todas las imágenes no críticas.

## Propuesta de roadmap
1. **Sprint 1 – Hero & CTA**: Simplificar fondo, optimizar retrato responsivo, clarificar CTA/microcopy.
2. **Sprint 2 – Confianza**: Reforzar prueba social (testimonios enriquecidos, logos, métricas) y diferenciales con evidencia.
3. **Sprint 3 – Conversión**: Formularios modulares, agenda automática, feedback en tiempo real.
4. **Sprint 4 – Performance & accesibilidad**: Refactor visual effects, implementar guidelines WCAG, optimizar assets.

Implementar estos ajustes mantendrá el key visual empático pero con una experiencia más enfocada, confiable y lista para convertir visitas en valoraciones agendadas.
