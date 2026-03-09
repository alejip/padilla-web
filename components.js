// ─── PADILLA PERITACIONES · SHARED COMPONENTS ───

// Render header
function renderHeader(activeService) {
  const services = [
    { label: 'Siniestro Total', href: 'siniestro-total.html' },
    { label: 'Antes de Comprar', href: 'antes-de-comprar.html' },
    { label: 'Reparación Mal Realizada', href: 'reparacion-mal-realizada.html' },
    { label: 'Averías Mecánicas', href: 'averias-mecanicas.html' },
    { label: 'Vicios Ocultos', href: 'vicios-ocultos.html' },
    { label: 'Valoración de Daños', href: 'valoracion-danos.html' },
  ];

  const submenuItems = services.map((s) =>
    `<li role="none"><a href="${s.href}" role="menuitem" ${s.href === activeService ? 'aria-current="page"' : ''}>${s.label}</a></li>`
  ).join('');

  const mobileLinks = services.map((s) =>
    `<a href="${s.href}" onclick="closeMobileNav()" ${s.href === activeService ? 'style="color:var(--primary);background:var(--primary-xlight)"' : ''}>${s.label}</a>`
  ).join('');

  const isService = services.some(s => s.href === activeService);

  document.getElementById('app-header').innerHTML = `
    <style>
      /* ── PILL HEADER ── */
      #header { position:fixed;top:0;left:0;right:0;z-index:1000;padding:16px 0;transition:padding 0.4s ease; }
      #header.scrolled { padding:10px 0; }
      .header-inner { display:flex;align-items:center;justify-content:space-between;gap:16px;background:rgba(255,255,255,0.13);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,0.25);border-radius:60px;padding:8px 8px 8px 22px;transition:all 0.4s cubic-bezier(0.4,0,0.2,1); }
      #header.scrolled .header-inner { background:rgba(255,255,255,0.90);border-color:rgba(34,109,148,0.15);box-shadow:0 4px 28px rgba(34,109,148,0.13);padding:6px 6px 6px 20px; }
      .logo img { height:38px;filter:brightness(0) invert(1);transition:height 0.3s,filter 0.4s; }
      #header.scrolled .logo img { height:32px;filter:none; }
      .main-nav { display:flex;align-items:center;gap:2px; }
      .main-nav a { color:rgba(255,255,255,0.88);text-decoration:none;padding:8px 12px;border-radius:50px;font-size:14px;font-weight:500;transition:all 0.2s; }
      .main-nav a:hover { color:white;background:rgba(255,255,255,0.15); }
      #header.scrolled .main-nav a { color:var(--text-muted); }
      #header.scrolled .main-nav a:hover { color:var(--primary);background:var(--primary-xlight); }
      .header-cta { display:flex;align-items:center;gap:8px; }
      .phone-chip { display:flex;align-items:center;gap:7px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);padding:8px 15px;border-radius:50px;color:white;text-decoration:none;font-size:13px;font-weight:600;transition:all 0.2s; }
      .phone-chip:hover { background:rgba(255,255,255,0.28); }
      #header.scrolled .phone-chip { background:var(--primary-xlight);border-color:rgba(34,109,148,0.3);color:var(--primary); }
      #header.scrolled .phone-chip:hover { background:#d4ecf5; }
      .hamburger { display:none;background:none;border:none;cursor:pointer;padding:8px 10px;border-radius:50px;transition:background 0.2s; }
      .hamburger:hover { background:rgba(255,255,255,0.15); }
      #header.scrolled .hamburger:hover { background:var(--primary-xlight); }
      .hamburger span { display:block;width:20px;height:2px;background:white;margin:4px 0;transition:all 0.3s;border-radius:2px; }
      #header.scrolled .hamburger span { background:var(--text); }
      /* ── NAV DROPDOWN ── */
      .nav-parent { display:flex;align-items:center;cursor:pointer; }
      .nav-submenu { display:none;position:absolute;top:calc(100% + 12px);left:-12px;background:white;border:1.5px solid var(--border);border-radius:16px;padding:8px;min-width:270px;list-style:none;box-shadow:0 16px 60px rgba(34,109,148,0.15);z-index:100; }
      .nav-submenu::before { content:'';position:absolute;top:-6px;left:24px;width:12px;height:12px;background:white;border-top:1.5px solid var(--border);border-left:1.5px solid var(--border);transform:rotate(45deg); }
      .nav-submenu a { display:flex;align-items:center;gap:10px;padding:10px 13px;border-radius:10px;font-size:14px;color:var(--text)!important;transition:all 0.2s;white-space:nowrap;font-weight:500; }
      .nav-submenu a:hover { background:var(--primary-xlight)!important;color:var(--primary)!important; }
      .nav-submenu a[aria-current="page"] { color:var(--primary)!important;background:var(--primary-xlight)!important; }
      .nav-dropdown { position:relative; }
      .nav-dropdown:hover .nav-submenu { display:block; }
      .nav-dropdown:hover .nav-parent svg { transform:rotate(180deg); }
      .nav-parent svg { transition:transform 0.2s; }
      /* ── MOBILE NAV ── */
      .mobile-nav { display:none;position:fixed;top:0;left:0;right:0;bottom:0;z-index:1001;background:rgba(255,255,255,0.96);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:24px; }
      .mobile-nav.open { display:flex; }
      .mobile-nav a { color:var(--text);text-decoration:none;font-size:17px;font-weight:700;padding:13px 32px;border-radius:50px;width:100%;max-width:320px;text-align:center;transition:all 0.2s;border:1.5px solid transparent; }
      .mobile-nav a:hover { color:var(--primary);background:var(--primary-xlight);border-color:rgba(34,109,148,0.2); }
      .mobile-nav-close { position:absolute;top:20px;right:20px;background:rgba(0,0,0,0.06);border:none;cursor:pointer;color:var(--text);font-size:16px;width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background 0.2s; }
      .mobile-nav-close:hover { background:rgba(34,109,148,0.1);color:var(--primary); }
      .mobile-nav-logo { margin-bottom:12px; }
      .mobile-nav-logo img { height:32px; }
    </style>
    <nav class="mobile-nav" id="mobileNav" aria-label="Menú móvil">
      <button class="mobile-nav-close" onclick="closeMobileNav()" aria-label="Cerrar menú">✕</button>
      <div class="mobile-nav-logo"><img src="img/logo-negro.png" alt="Padilla Peritaciones" style="height:52px;width:auto" /></div>
      <a href="index.html" onclick="closeMobileNav()">🏠 Inicio</a>
      ${mobileLinks}
    </nav>
    <header id="header" role="banner">
      <div class="container">
        <div class="header-inner">
          <a href="index.html" class="logo" aria-label="Padilla Peritaciones - Inicio">
            <img src="img/logo-negro.png" alt="Padilla Peritaciones - Perito de coches en Alicante"
              onerror="this.style.display='none';this.nextElementSibling.style.display='block'" />
            <span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:18px;color:white;">PADILLA <span style="color:var(--accent)">PERITACIONES</span></span>
          </a>
          <nav class="main-nav" aria-label="Navegación principal" role="navigation">
            <a href="index.html" ${!activeService ? 'aria-current="page"' : ''}>Inicio</a>
            <div class="nav-dropdown">
              <a class="nav-parent" href="index.html#servicios" aria-haspopup="true" ${isService ? 'style="color:var(--accent)"' : ''}>
                Servicios
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </a>
              <ul class="nav-submenu" role="menu" aria-label="Servicios de peritación">
                ${submenuItems}
              </ul>
            </div>
            <a href="index.html#sobre-mi">Sobre mí</a>
            <a href="index.html#testimonios">Opiniones</a>
            <a href="index.html#presupuesto">Contacto</a>
          </nav>
          <div class="header-cta">
            <a href="tel:633979981" class="phone-chip" aria-label="Llamar al 633 97 99 81">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.15-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              633 97 99 81
            </a>
            <a href="index.html#presupuesto" class="btn btn-primary btn-sm" id="headerBtn" style="display:none">Presupuesto</a>
          </div>
          <button class="hamburger" onclick="openMobileNav()" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

// Render footer
function renderFooter() {
  document.getElementById('app-footer').innerHTML = `
    <section class="cta-strip">
      <div class="container">
        <div class="strip-inner">
          <div class="strip-text">
            <h2>¿Tienes un problema con tu coche?</h2>
            <p>Llámanos ahora o escríbenos por WhatsApp. Te respondemos hoy mismo.</p>
          </div>
          <div class="strip-actions">
            <a href="tel:633979981" class="btn btn-accent btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.15-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              633 97 99 81
            </a>
            <a href="https://wa.me/34633979981" target="_blank" class="btn btn-secondary btn-lg" style="background:rgba(255,255,255,0.15)">WhatsApp →</a>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-logo">
              <img src="img/logo-negro.png" alt="Padilla Peritaciones"
                onerror="this.style.display='none';this.nextElementSibling.style.display='block'" />
              <span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:16px;color:white;">PADILLA <span style="color:var(--accent)">PERITACIONES</span></span>
            </div>
            <p class="footer-desc">Especialistas en peritación de vehículos en Alicante. Técnico Superior en Automoción y Perito acreditado APCAS.</p>
            <div style="margin-bottom:18px">
              <img src="img/logo-apcas.png" alt="Miembro APCAS" style="height:34px;width:auto;object-fit:contain;filter:brightness(0) invert(1);opacity:0.55" title="Asociación de Peritos de Seguros y Comisarios de Averías" />
            </div>
            <div class="footer-social">
              <a href="#" class="social-btn">in</a>
              <a href="#" class="social-btn">G</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Servicios</h4>
            <ul class="footer-links">
              <li><a href="siniestro-total.html">Siniestro total</a></li>
              <li><a href="antes-de-comprar.html">Antes de comprar</a></li>
              <li><a href="reparacion-mal-realizada.html">Reparación mal realizada</a></li>
              <li><a href="averias-mecanicas.html">Averías mecánicas</a></li>
              <li><a href="vicios-ocultos.html">Vicios ocultos</a></li>
              <li><a href="valoracion-danos.html">Valoración de daños</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Empresa</h4>
            <ul class="footer-links">
              <li><a href="index.html#sobre-mi">Sobre nosotros</a></li>
              <li><a href="index.html#como-funciona">Cómo funciona</a></li>
              <li><a href="index.html#testimonios">Opiniones</a></li>
              <li><a href="index.html#faq">FAQ</a></li>
              <li><a href="index.html#presupuesto">Contacto</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contacto</h4>
            <div class="footer-contact-list">
              <div class="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.15-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>633 97 99 81 / 965 24 77 31</span>
              </div>
              <div class="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Calle Aspe, 7 · 03012 Alicante</span>
              </div>
              <div class="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Lun–Jue: 9:00–14:00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Padilla Peritaciones · Todos los derechos reservados</p>
          <div class="footer-legal">
            <a href="#">Política de privacidad</a>
            <a href="#">Política de cookies</a>
            <a href="#">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/34633979981" target="_blank" class="wa-float" title="WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.17.576 4.2 1.581 5.95L0 24l6.27-1.557A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.675-.5-5.22-1.378l-.37-.22-3.722.924.991-3.621-.241-.374A9.957 9.957 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
    </a>
    <button class="scroll-top" id="scrollTopBtn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</button>
    <div class="modal" id="modal">
      <div class="modal-box">
        <div style="font-size:52px;margin-bottom:14px">✅</div>
        <h3 style="font-size:22px;font-weight:800;margin-bottom:10px">¡Consulta enviada!</h3>
        <p style="color:var(--text-muted);line-height:1.7;margin-bottom:24px">Hemos recibido tu mensaje. José Ángel te contactará en menos de 2 horas en horario laboral.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <a href="tel:633979981" class="btn btn-primary" style="justify-content:center">Llamar: 633 97 99 81</a>
          <button onclick="closeModal()" class="btn btn-secondary" style="justify-content:center">Cerrar</button>
        </div>
      </div>
    </div>
  `;
}

// Shared JS behaviors
function initShared() {
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const headerBtn = document.getElementById('headerBtn');

  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    if (header) header.classList.toggle('scrolled', s > 50);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', s > 400);
    if (headerBtn) headerBtn.style.display = s > 300 ? 'flex' : 'none';
  });

  // Reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(r => obs.observe(r));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // Modal close on backdrop
  const modal = document.getElementById('modal');
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
}

function openMobileNav() { document.getElementById('mobileNav').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); document.body.style.overflow = ''; }
async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = 'Enviando...'; btn.disabled = true;
  try {
    const res = await fetch('https://formspree.io/f/xqedlvzw', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      document.getElementById('modal').classList.add('open');
      form.reset();
    } else {
      alert('Ha ocurrido un error. Por favor llámanos al 633 97 99 81.');
    }
  } catch {
    alert('Ha ocurrido un error. Por favor llámanos al 633 97 99 81.');
  }
  btn.innerHTML = original; btn.disabled = false;
}
function closeModal() { document.getElementById('modal').classList.remove('open'); }
