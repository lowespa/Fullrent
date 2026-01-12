// ===============================
// Full Rent Ltda - main.js
// ===============================

// ===============================
// DATA
// ===============================

// Maquinarias disponibles (cards simples con imagen)
const maquinariaData = [
    { id: 1, nombre: "Ahoyadora", imagen: "assets/img/ahoyadora.png" },
    { id: 2, nombre: "Alzaprima", imagen: "assets/img/alzaprima.png" },
    { id: 3, nombre: "Andamio", imagen: "assets/img/andamio.png" },
    { id: 4, nombre: "Aspiradora Industrial", imagen: "assets/img/aspiradora.png" },
    { id: 5, nombre: "Calefactor Diesel", imagen: "assets/img/calefactor.png" },
    { id: 6, nombre: "Cortadora de Concreto", imagen: "assets/img/cortadora.png" },
    { id: 7, nombre: "Demoledor", imagen: "assets/img/demoledor.png" },
    { id: 8, nombre: "Esmeril Angular", imagen: "assets/img/esmeril.png" },
    { id: 9, nombre: "Generador eléctrico", imagen: "assets/img/generador.png" },
    { id: 10, nombre: "MotoBomba", imagen: "assets/img/motobba.png" },
    { id: 11, nombre: "Motosierra", imagen: "assets/img/motosierra.png" },
    { id: 12, nombre: "Placa Compactadora", imagen: "assets/img/placa.png" },
    { id: 13, nombre: "Soldadora Inverter", imagen: "assets/img/soldadora.png" },
    { id: 14, nombre: "Betonera", imagen: "assets/img/trompo.png" }
];

// Productos en venta CON IMÁGENES
const productosData = [
    {
        id: 1,
        nombre: "Generador Diésel 10KVA",
        precio: 1890000,
        precioOriginal: 3500000,
        descripcion: "Generador de energía para obras sin conexión eléctrica.",
        imagen: "assets/img/ahoyadora.png",
        categoria: "Generadores"
    },
    {
        id: 2,
        nombre: "Soldadora Inversora 250A",
        precio: 325000,
        precioOriginal: 389000,
        descripcion: "Soldadora inverter para trabajos profesionales.",
        imagen: "assets/img/productos/soldadora-inversora.jpg",
        categoria: "Soldadoras"
    },
    {
        id: 3,
        nombre: "Compresor de Aire 100L",
        precio: 450000,
        precioOriginal: 520000,
        descripcion: "Compresor estacionario para herramientas neumáticas.",
        imagen: "assets/img/productos/compresor-aire.jpg",
        categoria: "Compresores"
    },
    {
        id: 4,
        nombre: "Martillo Neumático",
        precio: 185000,
        precioOriginal: 220000,
        descripcion: "Martillo rompedor para demoliciones medianas.",
        imagen: "assets/img/productos/martillo-neumatico.jpg",
        categoria: "Herramientas Neumáticas"
    },
    {
        id: 5,
        nombre: "Andamio Modular 2x1m",
        precio: 89000,
        precioOriginal: 105000,
        descripcion: "Andamio profesional para trabajos en altura.",
        imagen: "assets/img/productos/andamio-modular.jpg",
        categoria: "Andamios"
    },
    {
        id: 6,
        nombre: "Bomba de Agua 2 HP",
        precio: 215000,
        precioOriginal: 255000,
        descripcion: "Bomba centrífuga para desagüe y trasvase de líquidos.",
        imagen: "assets/img/productos/bomba-agua.jpg",
        categoria: "Bombas"
    },
    {
        id: 7,
        nombre: "Vibrador de Concreto",
        precio: 125000,
        precioOriginal: 155000,
        descripcion: "Vibrador eléctrico para compactación de hormigón.",
        imagen: "assets/img/productos/vibrador-concreto.jpg",
        categoria: "Equipos de Construcción"
    },
    {
        id: 8,
        nombre: "Cortadora de Cerámica",
        precio: 95000,
        precioOriginal: 115000,
        descripcion: "Cortadora profesional para cerámica y porcelanato.",
        imagen: "assets/img/productos/cortadora-ceramica.jpg",
        categoria: "Herramientas de Corte"
    },
    {
        id: 9,
        nombre: "Taladro Percutor 750W",
        precio: 85000,
        precioOriginal: 99000,
        descripcion: "Taladro profesional para concreto y materiales duros.",
        imagen: "assets/img/productos/taladro-percutor.jpg",
        categoria: "Taladros"
    },
    {
        id: 10,
        nombre: "Pulidora de Piso",
        precio: 320000,
        precioOriginal: 385000,
        descripcion: "Pulidora para concreto y pisos industriales.",
        imagen: "assets/img/productos/pulidora-piso.jpg",
        categoria: "Pulidoras"
    }
];

// ===============================
// INIT
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initSmoothScroll();
    initMobileMenu();
    initFloatingContact();
    initMaquinariasGrid();
    initProductos();
    initScrollAnimations();
    initProductFilters(); // Nueva función para filtros
    initImageErrorHandling(); // Manejo de errores en imágenes
});

// ===============================
// NAVEGACIÓN Y SCROLL
// ===============================

function initSmoothScroll() {
    const links = document.querySelectorAll('.nav-link, .btn[href^="#"], .logo');

    links.forEach(link => {
        link.addEventListener("click", e => {
            const targetId = link.getAttribute("href");
            if (!targetId || !targetId.startsWith("#")) return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (!target) return;

            // Cerrar menú móvil si está abierto
            const nav = document.getElementById("mainNav");
            const toggle = document.getElementById("menuToggle");
            if (nav && nav.classList.contains("active")) {
                nav.classList.remove("active");
                if (toggle) toggle.classList.remove("active");
            }

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        });
    });
}

function initNavigation() {
    const header = document.querySelector(".main-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY > 80;
        header.classList.toggle("header-scrolled", scrolled);
        
        // Añadir efecto de transición suave
        if (scrolled) {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
            header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    });
}

// ===============================
// MENÚ MÓVIL
// ===============================

function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", e => {
        if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains("active")) {
            nav.classList.remove("active");
            toggle.classList.remove("active");
        }
    });

    // Cerrar menú al presionar Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && nav.classList.contains("active")) {
            nav.classList.remove("active");
            toggle.classList.remove("active");
        }
    });
}

// ===============================
// CONTACTO FLOTANTE
// ===============================

function initFloatingContact() {
    const btn = document.getElementById("contactBtn");
    const options = document.getElementById("contactOptions");

    if (!btn || !options) return;

    let isOpen = false;

    btn.addEventListener("click", e => {
        e.stopPropagation();
        isOpen = !isOpen;
        btn.classList.toggle("active");
        options.classList.toggle("active");
        
        // Cambiar icono
        const chatIcon = btn.querySelector('.chat-icon');
        const closeIcon = btn.querySelector('.close-icon');
        if (chatIcon && closeIcon) {
            if (isOpen) {
                chatIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                chatIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", () => {
        if (isOpen) {
            btn.classList.remove("active");
            options.classList.remove("active");
            isOpen = false;
            
            // Restaurar icono
            const chatIcon = btn.querySelector('.chat-icon');
            const closeIcon = btn.querySelector('.close-icon');
            if (chatIcon && closeIcon) {
                chatIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }
    });

    // Cerrar al presionar Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && isOpen) {
            btn.classList.remove("active");
            options.classList.remove("active");
            isOpen = false;
            
            const chatIcon = btn.querySelector('.chat-icon');
            const closeIcon = btn.querySelector('.close-icon');
            if (chatIcon && closeIcon) {
                chatIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }
    });
}

// ===============================
// MAQUINARIAS (GRID CON IMAGEN)
// ===============================

function initMaquinariasGrid() {
    const grid = document.getElementById("maquinariasGrid");
    if (!grid) return;

    maquinariaData.forEach(item => {
        const card = document.createElement("div");
        card.className = "maquinaria-card";
        card.dataset.category = "maquinaria";

        card.innerHTML = `
            <div class="maquinaria-img">
                <img src="${item.imagen}" alt="${item.nombre}" loading="lazy" 
                     onerror="this.src='assets/img/placeholder-maquinaria.jpg'; this.alt='Imagen no disponible'">
                <div class="maquinaria-overlay">
                    <span class="btn btn-secondary">Consultar Disponibilidad</span>
                </div>
            </div>
            <div class="maquinaria-info">
                <h3>${item.nombre}</h3>
                <div class="maquinaria-disponible">
                    <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Disponible para arriendo
                </div>
            </div>
        `;

        // Añadir evento de clic para redirigir al contacto
        card.addEventListener("click", () => {
            window.location.href = "#contacto";
        });

        grid.appendChild(card);
    });
}

// ===============================
// PRODUCTOS EN VENTA CON IMÁGENES
// ===============================

function initProductos() {
    const grid = document.getElementById("productosGrid");
    if (!grid) return;

    // Limpiar grid existente
    grid.innerHTML = '';

    productosData.forEach(p => {
        const card = document.createElement("div");
        card.className = "producto-card";
        card.dataset.category = p.categoria.toLowerCase().replace(/\s+/g, '-');

        // Calcular descuento
        const descuento = Math.round(((p.precioOriginal - p.precio) / p.precioOriginal) * 100);

        card.innerHTML = `
            <div class="producto-img">
                <img src="${p.imagen}" alt="${p.nombre}" loading="lazy"
                     onerror="this.src='assets/img/placeholder-producto.jpg'; this.alt='Imagen no disponible'">
                ${descuento > 0 ? `<div class="producto-badge">-${descuento}%</div>` : ''}
                <div class="producto-overlay">
                    <span>Ver detalles</span>
                </div>
            </div>
            <div class="producto-info">
                <div class="producto-categoria">${p.categoria}</div>
                <h3>${p.nombre}</h3>
                <p class="producto-descripcion">${p.descripcion}</p>
                
                <div class="producto-precio-container">
                    <div class="producto-precio">
                        <span class="precio-actual">$${formatPrice(p.precio)}</span>
                        ${p.precioOriginal > p.precio ? 
                            `<span class="producto-precio-original">$${formatPrice(p.precioOriginal)}</span>` : ''}
                    </div>
                    <div class="producto-descuento">
                        ${descuento > 0 ? `<span class="badge">-${descuento}% OFF</span>` : ''}
                    </div>
                </div>
                
                <div class="producto-disponible">
                    <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Disponible en tienda
                </div>
                
                <div class="producto-aviso">
                    ⚠️ Producto disponible para compra en tienda física
                </div>
                
                <div class="producto-buttons">
                    <a href="#contacto" class="btn btn-primary">
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                        </svg>
                        Cotiza ahora
                    </a>
                    <a href="#ubicacion" class="btn btn-secondary">
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        Ver en tienda
                    </a>
                </div>
            </div>
        `;

        // Efecto hover en imagen
        const imgContainer = card.querySelector('.producto-img');
        const overlay = card.querySelector('.producto-overlay');
        
        if (imgContainer && overlay) {
            imgContainer.addEventListener('mouseenter', () => {
                overlay.style.opacity = '1';
            });
            
            imgContainer.addEventListener('mouseleave', () => {
                overlay.style.opacity = '0';
            });
        }

        grid.appendChild(card);
    });
}

function formatPrice(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ===============================
// FILTROS DE PRODUCTOS
// ===============================

function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productosGrid = document.getElementById('productosGrid');
    
    if (!filterButtons.length || !productosGrid) return;
    
    // Función para filtrar productos
    const filterProducts = (category) => {
        const cards = productosGrid.querySelectorAll('.producto-card');
        
        cards.forEach(card => {
            if (category === 'todos' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Actualizar botones activos
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === category);
        });
    };
    
    // Añadir eventos a los botones de filtro
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterProducts(filter);
        });
    });
}

// ===============================
// MANEJO DE ERRORES EN IMÁGENES
// ===============================

function initImageErrorHandling() {
    // Función global para manejar errores de imágenes
    window.handleImageError = function(img) {
        // Verificar si ya tiene una imagen de placeholder
        if (!img.src.includes('placeholder')) {
            // Determinar tipo de placeholder basado en clase o contexto
            const isProducto = img.closest('.producto-img');
            const isMaquinaria = img.closest('.maquinaria-img');
            
            if (isProducto) {
                img.src = 'assets/img/placeholder-producto.jpg';
                img.alt = 'Imagen de producto no disponible';
            } else if (isMaquinaria) {
                img.src = 'assets/img/placeholder-maquinaria.jpg';
                img.alt = 'Imagen de maquinaria no disponible';
            } else {
                img.src = 'assets/img/placeholder-general.jpg';
                img.alt = 'Imagen no disponible';
            }
            
            // Añadir clase para estilos específicos
            img.classList.add('placeholder-image');
        }
    };
    
    // Aplicar a imágenes existentes
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete || img.naturalHeight === 0) {
            img.onerror = function() {
                window.handleImageError(this);
            };
        }
    });
}

// ===============================
// ANIMACIONES SCROLL
// ===============================

function initScrollAnimations() {
    const elements = document.querySelectorAll(
        ".servicio-card, .producto-card, .maquinaria-card, .ventaja-card, .ubicacion-item"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
    
    // Animación para números de ventajas
    animateAdvantageNumbers();
}

// ===============================
// ANIMACIÓN DE NÚMEROS EN VENTAJAS
// ===============================

function animateAdvantageNumbers() {
    const numberElements = document.querySelectorAll('.ventaja-number');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                number.style.animation = 'countUp 1s ease-out forwards';
                observer.unobserve(number);
            }
        });
    }, { threshold: 0.5 });
    
    numberElements.forEach(el => observer.observe(el));
}

// ===============================
// FUNCIONALIDADES ADICIONALES
// ===============================

// Función para calcular y mostrar el descuento
function calculateDiscount(current, original) {
    if (!current || !original || original <= current) return 0;
    return Math.round(((original - current) / original) * 100);
}

// Función para formatear números con separadores de miles
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Función para mostrar modal de producto (opcional)
function showProductModal(productId) {
    const product = productosData.find(p => p.id === productId);
    if (!product) return;
    
    // Crear modal dinámicamente
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body">
                <img src="${product.imagen}" alt="${product.nombre}">
                <div class="modal-info">
                    <h3>${product.nombre}</h3>
                    <p>${product.descripcion}</p>
                    <div class="modal-price">$${formatPrice(product.precio)}</div>
                    <a href="#contacto" class="btn btn-primary">Cotizar este producto</a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar modal
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Inicializar tooltips para precios
document.addEventListener('DOMContentLoaded', () => {
    const priceElements = document.querySelectorAll('.producto-precio');
    
    priceElements.forEach(element => {
        const original = element.querySelector('.producto-precio-original');
        if (original) {
            const current = element.querySelector('.precio-actual');
            if (current) {
                const discount = calculateDiscount(
                    parseFloat(current.textContent.replace(/[^0-9]/g, '')),
                    parseFloat(original.textContent.replace(/[^0-9]/g, ''))
                );
                if (discount > 0) {
                    element.setAttribute('title', `${discount}% de descuento`);
                }
            }
        }
    });
});