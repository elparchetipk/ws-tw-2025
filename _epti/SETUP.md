# Configuración del Portfolio EPTI

## 🚀 Inicio Rápido

### 1. Clona el repositorio

```bash
git clone https://github.com/epti/_epti.git
cd _epti
```

### 2. Instala las dependencias (opcional para desarrollo)

```bash
npm install
```

### 3. Ejecuta el servidor local

```bash
npm start
# O simplemente abre index.html en tu navegador
```

### 4. Personaliza el contenido

- Edita `index.html` para cambiar el contenido
- Modifica `styles/main.css` para personalizar estilos
- Actualiza `scripts/main.js` para agregar funcionalidades
- Reemplaza las imágenes en `assets/`

## 📁 Estructura del Proyecto

```
_epti/
├── index.html              # Página principal
├── styles/
│   └── main.css            # Estilos principales
├── scripts/
│   └── main.js             # JavaScript principal
├── assets/
│   ├── README.md           # Guía de imágenes
│   ├── profile-photo.jpg   # Tu foto de perfil
│   ├── about-photo.jpg     # Foto para "Sobre Mí"
│   ├── project1.jpg        # Imagen proyecto 1
│   ├── project2.jpg        # Imagen proyecto 2
│   ├── project3.jpg        # Imagen proyecto 3
│   ├── EPTI-CV.pdf         # Tu CV
│   └── favicon.ico         # Icono del sitio
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions
├── package.json            # Configuración NPM
├── .gitignore             # Archivos ignorados por Git
├── LICENSE                # Licencia MIT
└── README.md              # Documentación principal
```

## 🎨 Personalización

### Colores

Edita las variables CSS en `styles/main.css`:

```css
:root {
  --hue-color: 230; /* Cambia el color principal */
  --primary-color: hsl(var(--hue-color), 69%, 61%);
}
```

### Contenido

Principales secciones a personalizar en `index.html`:

1. **Hero Section** - Tu nombre y título
2. **About** - Tu biografía profesional
3. **Experience** - Tu experiencia laboral
4. **Skills** - Tus habilidades técnicas
5. **Projects** - Tus proyectos destacados
6. **Education** - Tu experiencia docente
7. **Contact** - Tu información de contacto

### Redes Sociales

Actualiza los enlaces en:

- Hero section (`.hero__social`)
- Footer (`.footer__socials`)

## 🌐 Despliegue en GitHub Pages

### 1. Crea un repositorio en GitHub

- Nombre: `tu-usuario.github.io` o cualquier nombre
- Público o privado

### 2. Sube tu código

```bash
git init
git add .
git commit -m "Initial commit: EPTI Portfolio"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

### 3. Configura GitHub Pages

- Ve a Settings > Pages
- Source: Deploy from a branch
- Branch: main / (root)
- Save

### 4. Accede a tu sitio

Tu portfolio estará disponible en:
`https://tu-usuario.github.io/tu-repositorio`

## 📱 Características

### ✅ Responsive Design

- Mobile-first approach
- Compatible con todos los dispositivos
- Navegación optimizada para móvil

### ✅ Performance

- Imágenes optimizadas con lazy loading
- CSS y JavaScript minificados
- Carga rápida y eficiente

### ✅ SEO

- Meta tags optimizados
- Estructura semántica HTML5
- Open Graph para redes sociales

### ✅ Accesibilidad

- Cumple estándares WCAG 2.1
- Navegación por teclado
- Screen reader friendly
- Contraste de colores adecuado

### ✅ Interactividad

- Animaciones suaves
- Formulario de contacto funcional
- Sistema de notificaciones
- Smooth scrolling

## 🛠️ Scripts Disponibles

```bash
npm start          # Servidor de desarrollo
npm run build      # Construir para producción
npm test           # Validar HTML y auditoría
npm run minify-css # Minificar CSS
npm run minify-js  # Minificar JavaScript
```

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript ES6+** - Interactividad
- **Swiper.js** - Slider de proyectos
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía (Inter)

## 📊 Optimización SEO

### Meta Tags Incluidos

- Title y Description optimizados
- Open Graph para redes sociales
- Keywords relevantes
- Canonical URL
- Viewport meta tag

### Estructura Semántica

- Headers jerárquicos (H1, H2, H3)
- Elementos semánticos HTML5
- Alt text en todas las imágenes
- Schema.org markup (opcional)

## 🎯 Próximas Mejoras

- [ ] Progressive Web App (PWA)
- [ ] Modo oscuro/claro
- [ ] Blog integrado
- [ ] Testimonios de estudiantes
- [ ] Certificaciones dinámicas
- [ ] Integración con CMS
- [ ] Analytics avanzados
- [ ] Multilingual support

## 📞 Soporte

Si necesitas ayuda con la personalización o tienes preguntas:

- **Email**: epti@developer.com
- **GitHub Issues**: [Crear un issue](https://github.com/epti/_epti/issues)
- **Documentación**: [Wiki del proyecto](https://github.com/epti/_epti/wiki)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tu portfolio personal.

---

**¡Éxito con tu portfolio profesional!** 🚀
