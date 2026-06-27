/* ═══════════════════════════════════════════════════════════════════════
   JOG Morocco — script.js
   Modules: Navbar · Hamburger · Fade-in · Form · Back-to-top · Scroll
═══════════════════════════════════════════════════════════════════════ */

'use strict';

const HEADER_HEIGHT = 72;

/* ── 1. Navbar: scroll effect + active link tracking ─────────────────── */
(function initNavbar() {
  const header   = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 30);

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - HEADER_HEIGHT - 24) {
        current = sec.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ── 2. Hamburger mobile menu ─────────────────────────────────────────── */
(function initHamburger() {
  const btn    = document.querySelector('.hamburger');
  const header = document.getElementById('header');
  if (!btn) return;

  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.setAttribute('role', 'menu');

  document.querySelectorAll('.nav-links .nav-link').forEach(link => {
    const a = link.cloneNode(true);
    a.setAttribute('role', 'menuitem');
    mobileNav.appendChild(a);
  });

  const ctaClone = document.querySelector('.nav-cta')?.cloneNode(true);
  if (ctaClone) {
    ctaClone.className = 'btn btn--primary nav-cta';
    mobileNav.appendChild(ctaClone);
  }

  header.appendChild(mobileNav);

  function close() {
    btn.classList.remove('open');
    mobileNav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = btn.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  document.addEventListener('click', e => {
    if (!header.contains(e.target)) close();
  });
})();


/* ── 3. Fade-in on scroll (IntersectionObserver) ─────────────────────── */
(function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.10 }
  );

  els.forEach(el => io.observe(el));
})();


/* ── 4. Contact form — JS alert, no backend needed ───────────────────── */
(function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = form.querySelector('#name')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();

    if (!name || !email) {
      alert('Please fill in your name and email address.');
      return;
    }

    alert(
      'Thank you! Please contact JOG Morocco by WhatsApp or email.\n\n' +
      '💬 WhatsApp: +212 773 737 000\n' +
      '✉ Email: contact@jogmorocco.com\n\n' +
      'We look forward to adventuring with you! 🧭'
    );

    form.reset();
  });
})();


/* ── 5. Back-to-top button ────────────────────────────────────────────── */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 420);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ── 6. Smooth scroll for anchor links (respects fixed header) ────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
