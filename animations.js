/**
 * NIFES FUTMinna — Premium Animation System v2.0
 * Apple & Google-inspired motion design.
 * Handles: hero entrance, scroll reveals, sticky nav, tabs, hamburger menu, back-to-top, skeletons.
 */

document.addEventListener("DOMContentLoaded", () => {
  initPageLoader();
  initImageFadeIn();
  initHeroAnimations();
  initScrollReveal();
  initStickyNavbar();
  initHamburgerMenu();
  initTabTransitions();
  initBackToTop();
});

/* ==========================================================================
   1. Hero Content Sequential Fade/Slide Up on Load
   ========================================================================== */
function initHeroAnimations() {
  const heroInner = document.querySelector(".page-hero-inner");
  if (!heroInner) return;

  const children = Array.from(heroInner.children);

  children.forEach((child, index) => {
    child.classList.add("hero-anim-item");
    child.style.animationDelay = `${index * 0.12 + 0.1}s`;

    if (child.classList.contains("hero-buttons")) {
      Array.from(child.children).forEach((btn, btnIndex) => {
        btn.classList.add("hero-anim-item");
        btn.style.animationDelay = `${(index + btnIndex) * 0.12 + 0.15}s`;
      });
    }
  });
}

/* ==========================================================================
   2. Intersection Observer for Scroll Reveals
   ========================================================================== */
function initScrollReveal() {
  const revealGrids = document.querySelectorAll(".reveal-grid");
  revealGrids.forEach(grid => {
    Array.from(grid.children).forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.06}s`;
      child.classList.add("reveal-item");
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -6% 0px",
    threshold: 0.05
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const itemsToReveal = document.querySelectorAll(".reveal, .reveal-grid");
  itemsToReveal.forEach(item => revealObserver.observe(item));
}

/* ==========================================================================
   3. Sticky Nav with Glassmorphism Transition
   ========================================================================== */
function initStickyNavbar() {
  const nav = document.querySelector(".main-nav");
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   4. Hamburger Mobile Navigation
   ========================================================================== */
function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");
  if (!hamburger || !navLinks) return;

  function openMenu() {
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    navLinks.classList.add("open");
    if (overlay) overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
    if (overlay) overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    if (navLinks.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.addEventListener("click", toggleMenu);

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Close on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      closeMenu();
    }
  });

  // Close on resize to desktop
  const mql = window.matchMedia("(min-width: 769px)");
  mql.addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });
}

/* ==========================================================================
   5. Staggered Cascades when Switching Tabs (Executives Page)
   ========================================================================== */
function initTabTransitions() {
  window.openTab = function(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    const tablinks = document.getElementsByClassName("tab-link");

    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].classList.remove("active");
    }

    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    const activeTab = document.getElementById(tabName);
    if (activeTab) {
      activeTab.style.display = "block";
      activeTab.offsetHeight;
      activeTab.classList.add("active");

      const grid = activeTab.querySelector(".page-grid");
      if (grid) {
        grid.classList.remove("revealed");
        const children = Array.from(grid.children);
        children.forEach((child, index) => {
          child.style.transitionDelay = `${index * 0.04}s`;
          child.style.opacity = "0";
          child.style.transform = "translateY(24px)";
        });

        setTimeout(() => {
          grid.classList.add("revealed");
          children.forEach(child => {
            child.style.opacity = "";
            child.style.transform = "";
          });
        }, 50);
      }
    }

    evt.currentTarget.classList.add("active");
  };

  const activeTab = document.querySelector(".tab-link.active");
  if (activeTab) {
    activeTab.click();
  }
}

/* ==========================================================================
   6. Floating Back-to-Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   7. Dynamic Skeleton Screen Generator
   ========================================================================== */
window.showSkeletonLoaders = function(container, type, count = 3) {
  if (!container) return;
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const card = document.createElement("div");

    if (type === "executive") {
      card.className = "content-card exec-card skeleton-card";
      card.innerHTML = `
        <div class="skeleton-avatar"></div>
        <div class="skeleton-line skeleton-line-subtitle"></div>
      `;
    } else {
      card.className = "content-card skeleton-card";
      card.innerHTML = `
        <div class="skeleton-image"></div>
        <div class="skeleton-line skeleton-line-title"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line" style="width: 85%;"></div>
        <div class="skeleton-line" style="width: 60%; margin-top: 1rem;"></div>
      `;
    }
    container.appendChild(card);
  }
};

// Expose globally for dynamic data loading
window.initScrollReveal = initScrollReveal;
window.initHeroAnimations = initHeroAnimations;

/* ==========================================================================
   8. Page Loader
   ========================================================================== */
function initPageLoader() {
  const loader = document.querySelector(".page-loader");
  if (!loader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("loaded");
    }, 200);
  });

  // Fallback: remove loader after 3s max
  setTimeout(() => {
    loader.classList.add("loaded");
  }, 3000);
}

/* ==========================================================================
   9. Image Fade-In on Load
   ========================================================================== */
function initImageFadeIn() {
  const images = document.querySelectorAll(".content-card img, .flip-card-front img, .gallery-item img, .page-hero-split .page-hero-split-image img");

  images.forEach(img => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });
      img.addEventListener("error", () => {
        img.classList.add("loaded");
      });
    }
  });
}
