/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== EXPERIENCE TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('experience__active');
    });
    target.classList.add('experience__active');

    tabs.forEach((tab) => {
      tab.classList.remove('experience__active');
    });
    tab.classList.add('experience__active');
  });
});

/*==================== SKILLS ACCORDION ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

/*==================== PORTFOLIO SWIPER ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== CONTACT FORM ====================*/
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !subject || !message) {
    showNotification('Por favor, completa todos los campos', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    showNotification('Por favor, ingresa un email válido', 'error');
    return;
  }

  // Simulate form submission
  showNotification(
    'Mensaje enviado exitosamente. Te contactaré pronto!',
    'success'
  );
  contactForm.reset();
});

/*==================== EMAIL VALIDATION ====================*/
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/*==================== NOTIFICATION SYSTEM ====================*/
function showNotification(message, type) {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
        <div class="notification__content">
            <i class="fas ${
              type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'
            } notification__icon"></i>
            <span class="notification__message">${message}</span>
            <button class="notification__close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;

  // Add to document
  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }
  }, 5000);
}

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

/*==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================*/
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach((section) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(section);
});

/*==================== TYPING ANIMATION ====================*/
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 80);
  }
});

/*==================== PORTFOLIO FILTER (if needed) ====================*/
function filterPortfolio(category) {
  const portfolioItems = document.querySelectorAll('.portfolio__content');

  portfolioItems.forEach((item) => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'grid';
      item.style.animation = 'fadeIn 0.5s ease';
    } else {
      item.style.display = 'none';
    }
  });
}

/*==================== SKILLS ANIMATION ON SCROLL ====================*/
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !skillsAnimated) {
        animateSkillBars();
        skillsAnimated = true;
      }
    });
  },
  { threshold: 0.5 }
);

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skills__percentage');

  skillBars.forEach((bar) => {
    const width = bar.style.width || bar.className.match(/skills__(\w+)/)?.[1];
    if (width) {
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.transition = 'width 2s ease-in-out';
        bar.style.width = bar.dataset.width || getSkillWidth(bar.className);
      }, 100);
    }
  });
}

function getSkillWidth(className) {
  const skillMap = {
    // Frontend Skills
    skills__js: '95%',
    skills__react: '90%',
    skills__nextjs: '88%',
    skills__html: '95%',
    // Backend Skills
    skills__node: '90%',
    skills__python: '85%',
    skills__go: '82%',
    skills__java: '85%',
    skills__kotlin: '80%',
    skills__db: '88%',
    // Mobile Development Skills
    skills__reactnative: '85%',
    skills__kotlinandroid: '78%',
    skills__appstore: '80%',
    skills__mobileui: '82%',
    // AI & Machine Learning Skills
    skills__pythonai: '88%',
    skills__tensorflow: '80%',
    skills__openai: '85%',
    skills__datascience: '82%',
    // IoT & Arduino Skills
    skills__arduino: '92%',
    skills__raspberry: '87%',
    skills__iotprotocols: '85%',
    skills__sensors: '90%',
    // DevOps Skills
    skills__cloud: '82%',
    skills__docker: '78%',
    skills__cicd: '85%',
    skills__linux: '90%',
    // Teaching Skills
    skills__curriculum: '95%',
    skills__mentoring: '92%',
    skills__pedagogy: '88%',
    skills__leadership: '90%',
  };

  for (let skill in skillMap) {
    if (className.includes(skill)) {
      return skillMap[skill];
    }
  }
  return '50%';
}

/*==================== DARK THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton?.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  if (themeButton) {
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](
      iconTheme
    );
  }
}

// Activate / deactivate the theme manually with the button
if (themeButton) {
  themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
}

/*==================== PERFORMANCE OPTIMIZATION ====================*/
// Debounce function for scroll events
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

// Optimize scroll events
window.addEventListener(
  'scroll',
  debounce(() => {
    scrollActive();
    scrollUp();
  }, 10)
);

/*==================== LAZY LOADING IMAGES ====================*/
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => imageObserver.observe(img));

/*==================== COPY TO CLIPBOARD ====================*/
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showNotification('Copiado al portapapeles!', 'success');
    })
    .catch(() => {
      showNotification('Error al copiar', 'error');
    });
}

/*==================== ANALYTICS EVENTS ====================*/
function trackEvent(action, category = 'User Interaction') {
  // Google Analytics or other analytics tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: window.location.pathname,
    });
  }
}

// Track navigation clicks
document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    trackEvent('navigation_click', 'Navigation');
  });
});

// Track contact form submission
document.getElementById('contact-form')?.addEventListener('submit', () => {
  trackEvent('contact_form_submit', 'Contact');
});

// Track social media clicks
document
  .querySelectorAll('.hero__social-icon, .footer__social')
  .forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('social_media_click', 'Social Media');
    });
  });

/*==================== PRELOADER ====================*/
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});

/*==================== ACCESSIBILITY IMPROVEMENTS ====================*/
// Keyboard navigation for custom elements
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close any open modals or menus
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('show-menu')) {
      navMenu.classList.remove('show-menu');
    }
  }
});

// Focus management for mobile menu
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    setTimeout(() => {
      const firstNavLink = document.querySelector('.nav__link');
      if (firstNavLink) firstNavLink.focus();
    }, 300);
  });
}

/*==================== ERROR HANDLING ====================*/
window.addEventListener('error', (e) => {
  console.error('JavaScript Error:', e.error);
  // Optionally send error to analytics or error reporting service
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled Promise Rejection:', e.reason);
  // Optionally send error to analytics or error reporting service
});

/*==================== CONTACT INFO ACTIONS ====================*/
function callPhone(number) {
  window.open(`tel:${number}`, '_self');
  trackEvent('phone_call', 'Contact');
}

function sendEmail(email) {
  window.open(`mailto:${email}`, '_self');
  trackEvent('email_click', 'Contact');
}

// Add click events to contact information
document.addEventListener('DOMContentLoaded', () => {
  // Phone number click
  const phoneElement = document.querySelector('.contact__subtitle');
  if (phoneElement && phoneElement.textContent.includes('+57')) {
    phoneElement.style.cursor = 'pointer';
    phoneElement.addEventListener('click', () => {
      callPhone(phoneElement.textContent.trim());
    });
  }

  // Email click
  const emailElements = document.querySelectorAll('.contact__subtitle');
  emailElements.forEach((element) => {
    if (element.textContent.includes('@')) {
      element.style.cursor = 'pointer';
      element.addEventListener('click', () => {
        sendEmail(element.textContent.trim());
      });
    }
  });
});

/*==================== PRINT FUNCTIONALITY ====================*/
function printPage() {
  window.print();
  trackEvent('print_page', 'Actions');
}

// Add print button functionality if exists
const printButton = document.querySelector('.print-button');
if (printButton) {
  printButton.addEventListener('click', printPage);
}

console.log('🚀 EPTI Portfolio loaded successfully!');
console.log('💼 Full Stack Developer & Educator');
console.log('📧 Contact via secure form only');

/*==================== CONTACT FORM FUNCTIONALITY ====================*/
const contactFormElement = document.getElementById('contact-form');
const formButton = contactFormElement?.querySelector('button[type="submit"]');
const originalButtonText = formButton?.innerHTML;

// Form validation
function validateForm(formData) {
  const errors = [];

  if (!formData.get('name')?.trim()) {
    errors.push('El nombre es requerido');
  }

  if (!formData.get('email')?.trim()) {
    errors.push('El email es requerido');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email'))) {
    errors.push('El email no tiene un formato válido');
  }

  if (!formData.get('subject')) {
    errors.push('El asunto es requerido');
  }

  if (!formData.get('message')?.trim()) {
    errors.push('El mensaje es requerido');
  }

  if (!formData.get('privacy')) {
    errors.push('Debes aceptar el procesamiento de datos');
  }

  return errors;
}

// Show form message
function showFormMessage(message, isError = false) {
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message ${
    isError ? 'form-message--error' : 'form-message--success'
  }`;
  messageDiv.textContent = message;

  contactFormElement.insertBefore(messageDiv, contactFormElement.firstChild);

  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Handle form submission
if (contactFormElement) {
  contactFormElement.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactFormElement);
    const errors = validateForm(formData);

    if (errors.length > 0) {
      showFormMessage(errors.join('. '), true);
      return;
    }

    // Update button state
    if (formButton) {
      formButton.disabled = true;
      formButton.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    }

    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success message
      showFormMessage(
        '¡Mensaje enviado exitosamente! Te responderé en máximo 24 horas.'
      );
      contactFormElement.reset();

      // Track event
      trackEvent('form_submission', 'Contact');
    } catch (error) {
      showFormMessage(
        'Error al enviar el mensaje. Por favor, intenta nuevamente.',
        true
      );
      console.error('Form submission error:', error);
    } finally {
      // Restore button state
      if (formButton) {
        formButton.disabled = false;
        formButton.innerHTML = originalButtonText;
      }
    }
  });
}
