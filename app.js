// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initBackToTop();
    initAnimatedCounters();
    initProjectFilters();
    initTestimonialsSlider();
    initContactForm();
    initAOS();
    initSmoothScrolling();
    initServiceCards();
    initProjectsToggle();
    initThemeToggle();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    });
}

// Scroll effects
function initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        // Header background on scroll
        if (scrollY >= 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Back to top button
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        if (scrollY >= 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animated counters
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat__number');
    let hasAnimated = false;

    function animateCounters() {
        if (hasAnimated) return;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
        
        hasAnimated = true;
    }

    // Trigger animation when stats section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats__container');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Project filters
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter__btn');
    const projectCards = document.querySelectorAll('.project__card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    card.classList.remove('hidden');
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

// Testimonials slider
function initTestimonialsSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial__card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial__prev');
    const nextBtn = document.querySelector('.testimonial__next');
    let currentSlide = 0;
    const maxSlides = testimonialCards.length;

    function showSlide(n) {
        // Hide all testimonials
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Normalize slide index
        if (n >= maxSlides) currentSlide = 0;
        if (n < 0) currentSlide = maxSlides - 1;
        
        // Show current slide
        if (testimonialCards[currentSlide]) {
            testimonialCards[currentSlide].classList.add('active');
        }
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 5000);

    // Initialize first slide
    showSlide(0);
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Success state
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#27AE60';
                
                // Show success message
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
                
            }, 2000);
        });
    }

    // Form validation
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearValidation);
    });

    function validateInput(e) {
        const input = e.target;
        const value = input.value.trim();
        
        if (input.hasAttribute('required') && !value) {
            showFieldError(input, 'This field is required');
        } else if (input.type === 'email' && value && !isValidEmail(value)) {
            showFieldError(input, 'Please enter a valid email address');
        } else {
            clearFieldError(input);
        }
    }

    function clearValidation(e) {
        clearFieldError(e.target);
    }

    function showFieldError(input, message) {
        clearFieldError(input);
        input.style.borderColor = '#E74C3C';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#E74C3C';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        
        input.parentNode.appendChild(errorDiv);
    }

    function clearFieldError(input) {
        input.style.borderColor = '';
        const errorDiv = input.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27AE60' : '#1B4F72'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// AOS (Animate On Scroll) implementation
function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, parseInt(delay));
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
    const heroButtons = document.querySelectorAll('.hero__btn[href^="#"]');
    const allSmoothLinks = [...navLinks, ...heroButtons];

    allSmoothLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scroll for hero scroll indicator
    const heroScroll = document.querySelector('.hero__scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                const offsetTop = servicesSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Service cards interactions
function initServiceCards() {
    const serviceButtons = document.querySelectorAll('.service__btn');
    
    serviceButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceCard = this.closest('.service__card');
            const serviceTitle = serviceCard.querySelector('.service__title').textContent;
            
            // Create quote request modal or redirect to contact form
            const contactSection = document.getElementById('contact');
            const projectTypeSelect = document.getElementById('project-type');
            
            if (contactSection && projectTypeSelect) {
                // Scroll to contact form
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Pre-select project type based on service
                setTimeout(() => {
                    const serviceMap = {
                        'Building & Civil Construction': 'residential',
                        'Plan Development & Design': 'design',
                        'Project Management': 'consultancy',
                        'Civil Engineering': 'civil',
                        'Construction Consultancy': 'consultancy',
                        'Quality Assurance': 'consultancy'
                    };
                    
                    const projectType = serviceMap[serviceTitle];
                    if (projectType) {
                        projectTypeSelect.value = projectType;
                        projectTypeSelect.style.borderColor = '#1B4F72';
                    }
                    
                    // Focus on name field
                    const nameField = document.getElementById('name');
                    if (nameField) {
                        nameField.focus();
                    }
                }, 800);
                
                // Show notification
                showNotification(`Great! Please fill out the form below for ${serviceTitle}.`, 'info');
            }
        });
    });
}

// Project card interactions
function initProjectCards() {
    const projectButtons = document.querySelectorAll('.project__btn');
    
    projectButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectCard = this.closest('.project__card');
            const projectTitle = projectCard.querySelector('.project__title').textContent;
            const projectDescription = projectCard.querySelector('.project__description').textContent;
            const projectLocation = projectCard.querySelector('.project__location').textContent;
            
            // Create modal for project details
            showProjectModal(projectTitle, projectDescription, projectLocation);
        });
    });
}

// Project modal
function showProjectModal(title, description, location) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 500px;
        margin: 2rem;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="color: #1B4F72; margin: 0;">${title}</h3>
            <button class="close-modal" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">&times;</button>
        </div>
        <p style="color: #666; margin-bottom: 1rem;"><i class="fas fa-map-marker-alt"></i> ${location}</p>
        <p style="line-height: 1.6; margin-bottom: 1.5rem;">${description}</p>
        <button class="btn btn--primary" style="width: 100%;">Contact Us About This Project</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal functionality
    const closeModal = () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.8)';
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }, 300);
    };
    
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Contact button functionality
    modal.querySelector('.btn--primary').addEventListener('click', () => {
        closeModal();
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                setTimeout(() => {
                    const messageField = document.getElementById('message');
                    if (messageField) {
                        messageField.value = `I'm interested in learning more about the ${title} project located in ${location}.`;
                        messageField.focus();
                    }
                }, 800);
            }
        }, 300);
    });
}

// Initialize project cards after DOM load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initProjectCards();
    }, 100);
});

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroImg = document.querySelector('.hero__img');
    
    if (hero && heroImg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroImg.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// Initialize parallax
document.addEventListener('DOMContentLoaded', function() {
    initParallax();
});

// Loading animation
function initLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// Intersection Observer for additional animations
function initIntersectionAnimations() {
    const animateElements = document.querySelectorAll('.service__card, .project__card, .team__card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
}

// Initialize all additional features
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initLoadingAnimation();
        initIntersectionAnimations();
    }, 500);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close modals
    if (e.key === 'Escape') {
        const modal = document.querySelector('.project-modal');
        if (modal) {
            modal.querySelector('.close-modal').click();
        }
    }
});

// Smooth reveal animation for elements
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);

// Performance optimization - Throttle scroll events
function throttle(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Existing scroll handlers
}, 16); // ~60fps


window.addEventListener('scroll', throttledScrollHandler);

// Projects Toggle functionality
function initProjectsToggle() {
    const projectsToggle = document.getElementById('projects-toggle');
    const projectsGrid = document.querySelector('.projects__grid');
    const btnText = document.querySelector('.btn-text');
    const btnIcon = document.querySelector('.btn-icon');
    
    if (projectsToggle && projectsGrid) {
        projectsToggle.addEventListener('click', () => {
            const isExpanded = projectsGrid.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse to show only first 2 rows
                projectsGrid.classList.remove('expanded');
                projectsToggle.classList.remove('expanded');
                btnText.textContent = 'View All Projects';
                btnIcon.className = 'fas fa-chevron-down btn-icon';
            } else {
                // Expand to show all projects
                projectsGrid.classList.add('expanded');
                projectsToggle.classList.add('expanded');
                btnText.textContent = 'Show Less';
                btnIcon.className = 'fas fa-chevron-up btn-icon';
            }
        });
    }
}

// Theme Toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Get saved theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    updateLogo(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Update theme
            body.setAttribute('data-theme', newTheme);
            
            // Save to localStorage
            localStorage.setItem('theme', newTheme);
            
            // Update icon and logo
            updateThemeIcon(newTheme);
            updateLogo(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (theme === 'light') {
            themeIcon.className = 'fas fa-moon theme-icon';
        } else {
            themeIcon.className = 'fas fa-sun theme-icon';
        }
    }
}

function updateLogo(theme) {
    const logoImg = document.querySelector('.nav__logo-img');
    if (logoImg) {
        if (theme === 'light') {
            logoImg.src = 'excite white  bg.png';
        } else {
            logoImg.src = 'excite_black-removebg-preview.png';
        }
    }
}