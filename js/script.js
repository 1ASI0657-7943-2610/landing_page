document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Menú Móvil (Hamburguesa)
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });


    // ==========================================
    // 2. Toggle de Idioma Móvil (Reubicación)
    // ==========================================
    const navButtons = document.querySelector('.nav-buttons');
    const langSwitch = document.querySelector('.lang-switch');

    // Función que reubica el botón según el tamaño de pantalla
    function moveLanguageSwitch() {
        if(window.innerWidth < 992) {
            // En móvil, mover DENTRO del menú de navegación
            if(langSwitch && navLinks) {
                navLinks.appendChild(langSwitch);
            }
        } else {
            // En escritorio, mover de vuelta a su posición original
            if(langSwitch && navButtons) {
                navButtons.appendChild(langSwitch);
            }
        }
    }

    // Ejecutar al cargar la página y al cambiar el tamaño de ventana
    moveLanguageSwitch();
    window.addEventListener('resize', moveLanguageSwitch);


    // ==========================================
    // 3. Sistema de Traducción (ES / EN)
    // ==========================================
    const btnES = document.getElementById('lang-es');
    const btnEN = document.getElementById('lang-en');

    // Diccionario con los textos
    const translations = {
        es: {
            nav_about: "Sobre Nosotros",
            nav_features: "Características",
            nav_plans: "Planes",
            nav_contact: "Contacto",
            btn_login: "Ingresar",
            btn_register: "Regístrate",
            hero_title: "Asesoría Experta Inteligente y Consultas",
            hero_desc: "Optimiza la búsqueda de asesoría profesional con FinTeka. Conecta con expertos verificados, gestiona sesiones de consulta, controla costos y recibe insights para optimizar tus proyectos.",
            hero_btn_plans: "Ver Planes",
            hero_btn_register: "Regístrate Ahora",
            vid1_title: "Conoce la Plataforma",
            vid1_desc: "Descubre cómo FinTeka transforma la manera en que encuentras y gestionas asesorías.",
            vid2_desc: "Conoce al equipo de expertos detrás de la plataforma.",
            feat_subtitle: "Características",
            feat_title: "Potentes Características para tu Negocio",
            feat_desc: "Todo lo que necesitas para encontrar y conectar con expertos eficientemente.",
            feat1_title: "Búsqueda de Expertos",
            feat1_desc: "Accede a un perfil detallado de cada experto, incluyendo experiencia, especialidad, disponibilidad y tarifas.",
            feat2_title: "Control de Agendas",
            feat2_desc: "Gestiona las sesiones de asesoría con facilidad y recibe notificaciones cuando un experto actualice su disponibilidad.",
            feat3_title: "Alertas Inteligentes",
            feat3_desc: "Recibe notificaciones sobre estado de reservas, recordatorios de sesiones y recomendaciones post-sesión.",
            plan_title: "Elige tu Plan Perfecto",
            plan_desc: "Todo lo que necesitas para encontrar y conectar eficientemente y recibir asesoría especializada.",
            plan_monthly: "Mensual",
            plan_annual: "Anual",
            plan_save: "Ahorra 20%",
            plan1_name: "Gratis",
            plan1_desc: "Perfecto para probar FinTeka sin costo.",
            per_month: "/mes",
            f_10exp: "Hasta 10 expertos guardados",
            f_2ses: "Hasta 2 sesiones por mes",
            f_alertb: "Alertas de correo básicas",
            btn_try_free: "Probar Gratis",
            badge_popular: "Más Popular",
            plan2_name: "Pro",
            plan2_desc: "Para negocios que buscan crecer y optimizar.",
            f_5kexp: "Hasta 5,000 expertos guardados",
            f_100ses: "Hasta 100 sesiones por mes",
            f_alerta: "Alertas avanzadas (correo y SMS)",
            btn_choose_pro: "Elegir Plan Pro",
            faq_title: "Preguntas Frecuentes",
            faq1_q: "¿Qué es la búsqueda de FinTeka?",
            faq1_a: "FinTeka te conecta con profesionales expertos verificados para asesorías online en tiempo real, optimizando tus proyectos.",
            faq2_q: "¿Hay un período de prueba gratis?",
            faq2_a: "Sí, nuestro plan básico es gratuito de por vida, ideal para que explores la plataforma y agendes tus primeras sesiones.",
            faq3_q: "¿Qué métodos de pago aceptan?",
            faq3_a: "Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias para planes corporativos.",
            contact_title: "Ponte en Contacto",
            contact_desc: "¿Listo para revolucionar tu gestión de asesorías? Contáctanos hoy.",
            form_opt1: "Selecciona tu tipo de negocio",
            form_opt2: "Pequeña Empresa",
            btn_send: "Enviar Mensaje",
            footer_desc: "Gestión inteligente de asesorías para el negocio moderno. Reduce tiempos, optimiza operaciones y maximiza proyectos.",
            footer_prod: "Producto",
            footer_sol: "Soluciones",
            footer_comp: "Compañía",
            footer_rights: "&copy; 2026 FinTeka. Todos los derechos reservados."
        },
        en: {
            nav_about: "About Us",
            nav_features: "Features",
            nav_plans: "Pricing",
            nav_contact: "Contact",
            btn_login: "Login",
            btn_register: "Sign Up",
            hero_title: "Smart Expert Consulting & Advice",
            hero_desc: "Optimize your professional consulting search with FinTeka. Connect with verified experts, manage consultation sessions, control costs, and get insights to optimize your projects.",
            hero_btn_plans: "See Plans",
            hero_btn_register: "Register Now",
            vid1_title: "Meet the Platform",
            vid1_desc: "Discover how FinTeka transforms the way you find and manage consulting.",
            vid2_desc: "Meet the team of experts behind the platform.",
            feat_subtitle: "Features",
            feat_title: "Powerful Features for your Business",
            feat_desc: "Everything you need to find and connect with experts efficiently.",
            feat1_title: "Expert Search",
            feat1_desc: "Access a detailed profile of each expert, including experience, specialty, availability, and rates.",
            feat2_title: "Schedule Control",
            feat2_desc: "Manage consulting sessions easily and get notified when an expert updates their availability.",
            feat3_title: "Smart Alerts",
            feat3_desc: "Receive notifications on booking status, session reminders, and post-session recommendations.",
            plan_title: "Choose Your Perfect Plan",
            plan_desc: "Everything you need to connect efficiently and get specialized advice.",
            plan_monthly: "Monthly",
            plan_annual: "Annual",
            plan_save: "Save 20%",
            plan1_name: "Free",
            plan1_desc: "Perfect to try FinTeka at no cost.",
            per_month: "/mo",
            f_10exp: "Up to 10 saved experts",
            f_2ses: "Up to 2 sessions per month",
            f_alertb: "Basic email alerts",
            btn_try_free: "Try for Free",
            badge_popular: "Most Popular",
            plan2_name: "Pro",
            plan2_desc: "For businesses looking to grow and optimize.",
            f_5kexp: "Up to 5,000 saved experts",
            f_100ses: "Up to 100 sessions per month",
            f_alerta: "Advanced alerts (email & SMS)",
            btn_choose_pro: "Choose Pro Plan",
            faq_title: "Frequently Asked Questions",
            faq1_q: "What is FinTeka search?",
            faq1_a: "FinTeka connects you with verified professional experts for real-time online consulting, optimizing your projects.",
            faq2_q: "Is there a free trial?",
            faq2_a: "Yes, our basic plan is free forever, ideal for you to explore the platform and book your first sessions.",
            faq3_q: "What payment methods do you accept?",
            faq3_a: "We accept all major credit cards, PayPal, and bank transfers for corporate plans.",
            contact_title: "Get in Touch",
            contact_desc: "Ready to revolutionize your consulting management? Contact us today.",
            form_opt1: "Select your business type",
            form_opt2: "Small Business",
            btn_send: "Send Message",
            footer_desc: "Smart consulting management for modern business. Reduce time, optimize operations and maximize projects.",
            footer_prod: "Product",
            footer_sol: "Solutions",
            footer_comp: "Company",
            footer_rights: "&copy; 2026 FinTeka. All rights reserved."
        }
    };

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const translationKey = element.getAttribute('data-i18n');
            if (translations[lang][translationKey]) {
                element.innerHTML = translations[lang][translationKey];
            }
        });

        if(lang === 'es') {
            btnES.classList.add('active');
            btnEN.classList.remove('active');
        } else {
            btnEN.classList.add('active');
            btnES.classList.remove('active');
        }
    }

    if(btnES && btnEN) {
        btnES.addEventListener('click', () => setLanguage('es'));
        btnEN.addEventListener('click', () => setLanguage('en'));
    }

    // ==========================================
    // 4. Toggle de Precios (Mensual / Anual)
    // ==========================================
    const billingSwitch = document.getElementById('billing-toggle-checkbox');
    const proPriceValue = document.getElementById('pro-price-value');

    if(billingSwitch && proPriceValue) {
        billingSwitch.addEventListener('change', (e) => {
            // Si está marcado (Anual), el precio baja a 39
            if (e.target.checked) {
                proPriceValue.textContent = '39';
            } 
            // Si se desmarca (Mensual), el precio vuelve a 49
            else {
                proPriceValue.textContent = '49';
            }
        });
    }

});