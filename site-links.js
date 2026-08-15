/**
 * ============================================================================
 * NIFES FUTMinna — Site Core (links wiring + engagement widgets)
 * ============================================================================
 * Load after config.js. Reads SITE_DATA (site-data.js).
 * Provides:
 *   - Global link wiring via [data-site] attributes (WhatsApp, Twitter, email…)
 *   - Floating WhatsApp button
 *   - Dark mode toggle (persisted in localStorage, respects prefers-color-scheme)
 *   - "Next service" countdown ticker
 *   - Testimonies + leaders rendering
 * ============================================================================
 */

(function () {
  const data = (typeof window !== "undefined" && window.SITE_DATA) ? window.SITE_DATA : null;
  const firebaseReady = (typeof db !== "undefined" && db);

  window.SITE = {
    data,
    firebaseReady
  };

  if (!data) return; // without data there is nothing to wire

  /* ------------------------------------------------------------------
   * 1. Link wiring — any element with data-site="key" gets its href set
   * ------------------------------------------------------------------ */
  function waLink(text) {
    return "https://wa.me/" + data.links.whatsappNumber + "?text=" + encodeURIComponent(text || data.links.whatsappMessage);
  }

  function wireLinks() {
    const map = {
      whatsappGroup: data.links.whatsappGroup,
      twitter: data.links.twitter,
      email: "mailto:" + data.links.email,
      youtube: data.links.youtube,
      instagram: data.links.instagram,
      facebook: data.links.facebook,
      tiktok: data.links.tiktok,
      phone: "tel:" + data.links.phoneTel
    };

    document.querySelectorAll("[data-site]").forEach(el => {
      const key = el.getAttribute("data-site");
      if (key === "whatsappChat") {
        el.setAttribute("href", waLink(el.getAttribute("data-wa-message") || ""));
      } else if (key === "whatsapp") {
        const phone = el.getAttribute("data-site-phone") || data.links.whatsappNumber;
        el.setAttribute("href", "https://wa.me/" + phone + "?text=" + encodeURIComponent(el.getAttribute("data-wa-message") || data.links.whatsappMessage));
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      } else if (map[key]) {
        el.setAttribute("href", map[key]);
        if (key === "twitter" || key === "whatsappGroup") {
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener noreferrer");
        }
      }
    });
  }

  /* ------------------------------------------------------------------
   * 2. Floating WhatsApp button (bottom-right, above back-to-top)
   * ------------------------------------------------------------------ */
  function addFloatingWhatsApp() {
    if (document.querySelector(".wa-float")) return;
    const btn = document.createElement("a");
    btn.className = "wa-float";
    btn.href = waLink();
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    btn.setAttribute("aria-label", "Chat with NIFES FUTMinna on WhatsApp");
    btn.innerHTML = '<i class="fab fa-whatsapp" aria-hidden="true"></i>';
    btn.addEventListener("click", () => {
      try { dataLayer && dataLayer.push({ event: "whatsapp_chat" }); } catch (e) {}
    });
    document.body.appendChild(btn);
  }

  /* ------------------------------------------------------------------
   * 3. Dark mode toggle (bottom-left) + theme application
   * ------------------------------------------------------------------ */
  function getStoredTheme() {
    try { return localStorage.getItem("nifes-theme"); } catch (e) { return null; }
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      root.removeAttribute("data-theme");
    } else {
      // auto
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) root.setAttribute("data-theme", "dark");
      else root.removeAttribute("data-theme");
    }
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      const isDark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
  }

  function addThemeToggle() {
    let btn = document.querySelector(".theme-toggle");
    if (!btn) {
      btn = document.createElement("button");
      btn.className = "theme-toggle";
      btn.setAttribute("aria-label", "Toggle dark mode");
      btn.innerHTML = '<i class="fas fa-moon"></i>';
      document.body.appendChild(btn);
    }

    if (!btn.dataset.themeBound) {
      btn.addEventListener("click", () => {
        const root = document.documentElement;
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        try { localStorage.setItem("nifes-theme", next); } catch (e) {}
        applyTheme(next);
      });
      btn.dataset.themeBound = "true";
    }

    // Keep the site visually consistent across devices by defaulting to the
    // light blue-and-white theme unless the user explicitly changes it.
    applyTheme(getStoredTheme() || "light");
  }

  /* ------------------------------------------------------------------
   * 4. "Next service" countdown ticker
   *    Target: element with id="next-service-ticker".
   *    Ticker data comes from SITE_DATA.weekly (day/hour/minute) or a
   *    passed-in schedule array.
   * ------------------------------------------------------------------ */
  function initCountdown(scheduleOverride) {
    const el = document.getElementById("next-service-ticker");
    if (!el) return;

    const schedule = scheduleOverride || (data.weekly || []).filter(e => typeof e.day === "number");
    if (!schedule.length) return;

    const now = new Date();
    const day = now.getDay();
    const hm = now.getHours() * 60 + now.getMinutes();

    // Find the next upcoming service (including today if still ahead)
    let best = null;
    let bestDiff = Infinity;
    schedule.forEach(ev => {
      let diff = ((ev.day - day + 7) % 7) * 1440 + (ev.hour * 60 + ev.minute) - hm;
      if (diff <= 0) diff += 7 * 1440;
      if (diff < bestDiff) { bestDiff = diff; best = ev; }
    });

    if (!best) return;

    function render() {
      const remaining = bestDiff;
      const days = Math.floor(remaining / 1440);
      const hours = Math.floor((remaining % 1440) / 60);
      const minutes = remaining % 60;

      el.innerHTML =
        '<span class="ticker-label">Next gathering:</span> ' +
        '<strong>' + best.title + '</strong>' +
        ' <span class="ticker-time">in ' +
        (days ? days + 'd ' : '') +
        (hours || days ? hours + 'h ' : '') +
        minutes + 'm</span>';

      bestDiff--;
      if (bestDiff <= 0) {
        clearInterval(timer);
        // find next service again (i.e. the same one next week)
        bestDiff = 7 * 1440 - hm + best.hour * 60 + best.minute;
        if (bestDiff <= 0) bestDiff += 7 * 1440;
      }
    }

    const timer = setInterval(render, 60000);
    render();
  }

  /* ------------------------------------------------------------------
   * 5. Testimonies render (Home) — target #testimonies-grid
   * ------------------------------------------------------------------ */
  function renderTestimonies(containerSel) {
    const container = containerSel instanceof Element ? containerSel : document.querySelector(containerSel);
    if (!container || !data.testimonies || !data.testimonies.length) return;
    container.innerHTML = "";
    data.testimonies.forEach(t => {
      const card = document.createElement("div");
      card.className = "content-card testimonial-card";
      card.innerHTML =
        '<div class="testimonial-quote-icon"><i class="fas fa-quote-left" aria-hidden="true"></i></div>' +
        '<p class="testimonial-quote">' + t.quote + '</p>' +
        '<div class="testimonial-author">' +
          '<strong>' + t.name + '</strong>' +
          '<span>' + t.role + '</span>' +
        '</div>';
      container.appendChild(card);
    });
    if (window.initScrollReveal) window.initScrollReveal();
  }

  /* ------------------------------------------------------------------
   * 6. Leaders render (Contact) — target #leaders-grid
   * ------------------------------------------------------------------ */
  function renderLeaders(containerSel) {
    const container = containerSel instanceof Element ? containerSel : document.querySelector(containerSel);
    if (!container || !data.leaders) return;
    container.innerHTML = "";
    data.leaders.forEach(l => {
      const tel = l.phone.replace(/[^0-9+]/g, "");
      const a = document.createElement("a");
      a.className = "leader-contact";
      a.href = "tel:" + tel;
      a.innerHTML =
        '<div class="leader-avatar"><i class="' + (l.icon || "fas fa-user") + '" aria-hidden="true"></i></div>' +
        '<div class="leader-info">' +
          '<h4>' + l.role + '</h4>' +
          '<p>' + l.name + '</p>' +
          '<span class="leader-phone"><i class="fas fa-phone" aria-hidden="true"></i> ' + l.phone + '</span>' +
        '</div>';
      container.appendChild(a);
    });
    if (window.initScrollReveal) window.initScrollReveal();
  }

  /* ------------------------------------------------------------------
   * Expose helpers
   * ------------------------------------------------------------------ */
  window.SITE.wireLinks = wireLinks;
  window.SITE.renderTestimonies = renderTestimonies;
  window.SITE.renderLeaders = renderLeaders;
  window.SITE.initCountdown = initCountdown;
  window.SITE.waLink = waLink;

  // Window-level convenience API used by page inline scripts
  window.renderTestimonies = renderTestimonies;
  window.initCountdownTicker = function (elOrSel) {
    initCountdown(); // reads #next-service-ticker from the DOM directly
  };
  window.initThemeToggle = function () {
    addThemeToggle();
  };

  // Boot on DOM ready
  function boot() {
    wireLinks();
    addFloatingWhatsApp();
    addThemeToggle();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
