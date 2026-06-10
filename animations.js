/**
 * NIFES FUTMinna Premium Animations System
 * Inspired by Apple & Google design languages.
 * Handles scroll reveals, staggered entries, page-load animations, and dynamic transitions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimations();
  initScrollReveal();
  initStickyNavbar();
  initTabTransitions();
});

/**
 * 1. Hero Content Sequential Fade/Slide Up on Load
 */
function initHeroAnimations() {
  const heroInner = document.querySelector(".page-hero-inner");
  if (!heroInner) return;

  // Select children (tags, headings, descriptions, buttons)
  const children = Array.from(heroInner.children);
  
  // Wrap buttons container children if present to animate them too
  children.forEach((child, index) => {
    child.classList.add("hero-anim-item");
    child.style.animationDelay = `${index * 0.12 + 0.1}s`;
    
    // Stagger buttons inside buttons container
    if (child.classList.contains("hero-buttons")) {
      Array.from(child.children).forEach((btn, btnIndex) => {
        btn.classList.add("hero-anim-item");
        btn.style.animationDelay = `${(index + btnIndex) * 0.12 + 0.15}s`;
      });
    }
  });
}

/**
 * 2. Intersection Observer for Scroll Reveals
 */
function initScrollReveal() {
  // Stagger reveal grid children
  const revealGrids = document.querySelectorAll(".reveal-grid");
  revealGrids.forEach(grid => {
    Array.from(grid.children).forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.05}s`;
      child.classList.add("reveal-item");
    });
  });

  // Setup observer
  const observerOptions = {
    root: null, // Viewport
    rootMargin: "0px 0px -8% 0px", // Trigger slightly before entering screen
    threshold: 0.05 // Trigger when 5% of item is visible
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        
        // Unobserve once revealed to keep performance high (typical Google/Apple approach)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe items
  const itemsToReveal = document.querySelectorAll(".reveal, .reveal-grid");
  itemsToReveal.forEach(item => {
    revealObserver.observe(item);
  });
}

/**
 * 3. Premium Glassmorphism Sticky Nav Transitions on Scroll
 */
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
  handleScroll(); // Check on initial load
}

/**
 * 4. Staggered Cascades when Switching Tabs (Executives Page)
 */
function initTabTransitions() {
  // Override or augment the tab clicks to trigger staggered cascades
  window.openTab = function(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    const tablinks = document.getElementsByClassName("tab-link");
    
    // Hide all tab content immediately and remove active state
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].classList.remove("active");
    }
    
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    // Show selected tab
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
      activeTab.style.display = "block";
      // Force repaint to allow transition to trigger
      activeTab.offsetHeight; 
      activeTab.classList.add("active");
      
      // Select the grid inside this tab and trigger cascade animation
      const grid = activeTab.querySelector(".page-grid");
      if (grid) {
        // Reset dynamic transition delay to trigger stagger again
        grid.classList.remove("revealed");
        const children = Array.from(grid.children);
        children.forEach((child, index) => {
          child.style.transitionDelay = `${index * 0.04}s`;
          child.style.opacity = "0";
          child.style.transform = "translateY(24px)";
        });

        // Trigger cascade reveal shortly after tab displays
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

  // Trigger click on load to initiate staggered cascade on the active tab
  const activeTab = document.querySelector(".tab-link.active");
  if (activeTab) {
    activeTab.click();
  }
}
