# Imágenes para Portfolio EPTI

## Imágenes Requeridas

Para completar tu portfolio, necesitarás agregar las siguientes imágenes en la carpeta `assets/`:

### Fotos Personales

- **profile-photo.jpg** (400x400px) - Foto profesional para el hero section
- **about-photo.jpg** (350x350px) - Foto para la sección "Sobre Mí"

### Imágenes de Proyectos

- **project1.jpg** (600x400px) - Plataforma E-commerce
- **project2.jpg** (600x400px) - Sistema de Gestión de Aprendizaje
- **project3.jpg** (600x400px) - Dashboard IoT Industrial

### Documentos

- **EPTI-CV.pdf** - Tu CV actualizado
- **favicon.ico** - Icono para el navegador

## Sugerencias para las Imágenes

### Fotos Personales

- **Formato:** JPG o PNG
- **Resolución:** Mínimo 400x400px
- **Estilo:** Profesional, fondo neutro
- **Iluminación:** Natural, bien iluminada
- **Expresión:** Sonrisa profesional, confianza

### Proyectos

- **Formato:** JPG o PNG
- **Resolución:** 600x400px (aspect ratio 3:2)
- **Contenido:** Screenshots de las aplicaciones
- **Calidad:** Alta resolución para display retina

## Herramientas Recomendadas

### Para Crear Imágenes Placeholder

- [Unsplash](https://unsplash.com) - Fotos profesionales gratuitas
- [Pexels](https://pexels.com) - Banco de imágenes
- [Lorem Picsum](https://picsum.photos) - Placeholder images
- [Canva](https://canva.com) - Editor gráfico online

### Para Optimización

- [TinyPNG](https://tinypng.com) - Compresión de imágenes
- [Squoosh](https://squoosh.app) - Optimización avanzada
- [ImageOptim](https://imageoptim.com) - Herramienta local

## URLs Temporales (mientras consigues las imágenes)

Puedes usar estas URLs temporalmente:

```html
<!-- Hero Profile Photo -->
<img
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  alt="EPTI Profile" />

<!-- About Photo -->
<img
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=350&h=350&fit=crop&crop=face"
  alt="EPTI About" />

<!-- Project 1 - E-commerce -->
<img
  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  alt="E-commerce Project" />

<!-- Project 2 - LMS -->
<img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
  alt="LMS Project" />

<!-- Project 3 - IoT Dashboard -->
<img
  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  alt="IoT Dashboard" />
```

## Favicon

Para crear un favicon personalizado:

1. Usa [Favicon.io](https://favicon.io)
2. Sube tu foto o logo
3. Descarga el paquete completo
4. Coloca `favicon.ico` en la carpeta `assets/`

## Consideraciones de Performance

- **Formato WebP:** Considera convertir las imágenes a WebP para mejor compresión
- **Lazy Loading:** Las imágenes ya están configuradas para lazy loading
- **Responsive Images:** Usa `srcset` para diferentes tamaños de pantalla
- **Compresión:** Mantén las imágenes bajo 500KB cada una

## Estructura Final

```
assets/
├── profile-photo.jpg
├── about-photo.jpg
├── project1.jpg
├── project2.jpg
├── project3.jpg
├── EPTI-CV.pdf
└── favicon.ico
```

Una vez que tengas todas las imágenes, simplemente reemplaza las URLs en el HTML con las rutas locales.
