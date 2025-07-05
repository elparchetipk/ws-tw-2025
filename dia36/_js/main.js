// JavaScript para el Día 36
// TailwindCSS Workshop 2025

document.addEventListener('DOMContentLoaded', function() {
    console.log('Día 36 - TailwindCSS Workshop 2025');
    
    // Inicialización de componentes
    initializeComponents();
    
    // Event listeners
    setupEventListeners();
});

function initializeComponents() {
    // Agregar animaciones a elementos
    const elements = document.querySelectorAll('.animate-fadeInUp');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
}

function setupEventListeners() {
    // Event listeners para interacciones
    
    // Ejemplo: Toggle mobile menu
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Ejemplo: Smooth scroll
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utilidades adicionales
function toggleClass(element, className) {
    element.classList.toggle(className);
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `
        fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50
        ${type === 'success' ? 'bg-green-500' : 
          type === 'error' ? 'bg-red-500' : 
          type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}
        text-white transform transition-transform duration-300 translate-x-full
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
