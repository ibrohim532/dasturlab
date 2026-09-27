document.addEventListener("DOMContentLoaded", async () => {
  I18N.apply();
  initLoadingScreen();
  initTheme();
  initLangMenu();
  initMobileMenu();
  initScrollReveal();
  initActiveNav();
  initHeroCanvas();
  await Promise.all([
    renderCounters(),
    renderValues(), renderTimeline(), renderProcess(),
    renderServices(),
    renderProjectsAndFilters(),
    renderTech(),
    renderTeam(), renderWhyUs(),
    renderTestimonials(),
    renderBlog()
  ]);
  initContactForm();
  initCookieBanner();
  document.addEventListener("langchange", () => {
    renderServices(); renderProjectsAndFilters(); renderTeam();
    renderWhyUs(); renderTestimonials(); renderBlog();
    renderValues(); renderTimeline(); renderProcess(); renderCounters(true);
  });
});

/* ---------------- Loading screen ---------------- */
function initLoadingScreen() {
  const el = document.getElementById("loading-screen");
  if (!el) return;
  window.addEventListener("load", () => {
    setTimeout(() => el.classList.add("hide"), 400);
  });
  setTimeout(() => el.classList.add("hide"), 1400); // safety fallback
}

/* ---------------- Theme ---------------- */
function initTheme() {
  const saved = localStorage.getItem("dl_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  const btn = document.getElementById("theme-toggle");
  updateThemeIcon(btn, saved);
  btn?.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("dl_theme", next);
    updateThemeIcon(btn, next);
  });
}
function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.textContent = theme === "dark" ? "☀️" : "🌙";
  btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

/* ---------------- Language menu ---------------- */
function initLangMenu() {
  const toggle = document.getElementById("lang-toggle");
  const menu = document.getElementById("lang-menu");
  const label = document.getElementById("lang-label");
  if (!toggle || !menu) return;
  const setLabel = () => label.textContent = I18N.current.toUpperCase();
  setLabel();
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });
  menu.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      I18N.setLang(btn.getAttribute("data-lang"));
      setLabel();
      menu.classList.remove("open");
    });
  });
  document.addEventListener("click", () => menu.classList.remove("open"));
}

/* ---------------- Mobile menu ---------------- */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const panel = document.getElementById("mobile-panel");
  if (!hamburger || !panel) return;
  hamburger.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });
  panel.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    panel.classList.remove("open");
    hamburger.classList.remove("open");
  }));
}

/* ---------------- Active nav link on scroll ---------------- */
function initActiveNav() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".nav-links a[href^='#']")];
  if (!sections.length || !links.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => io.observe(s));
}

/* ---------------- Scroll reveal ---------------- */
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

/* ---------------- Hero canvas (lightweight animated grid/particles) ---------------- */
function initHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }
  function makeParticles() {
    const count = Math.floor((w * h) / 38000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6
    }));
  }
  function step() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(123,140,255,0.7)";
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.strokeStyle = "rgba(123,140,255,0.15)";
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 110 * devicePixelRatio) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
        }
      }
    }
    if (!reduced) requestAnimationFrame(step);
  }
  resize(); makeParticles(); step();
  window.addEventListener("resize", () => { resize(); makeParticles(); });
}

/* ---------------- Counters ---------------- */
let countersAnimated = false;
async function renderCounters(force = false) {
  const stats = await Api.getStats();
  const wrap = document.getElementById("stats-grid");
  if (!wrap) return;
  wrap.innerHTML = stats.map((s, i) => `
    <div>
      <div class="stat-num" data-target="${s.value}" data-suffix="${s.suffix}" id="stat-${i}">0${s.suffix}</div>
      <div class="stat-label">${s.label[I18N.current]}</div>
    </div>`).join("");
  if (force && countersAnimated) { animateCounters(); return; }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
        obs.disconnect();
      }
    });
  }, { threshold: 0.4 });
  io.observe(wrap);
}
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = +el.getAttribute("data-target");
    const suffix = el.getAttribute("data-suffix");
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  });
}

/* ---------------- Values / Timeline / Process ---------------- */
function renderValues() {
  const wrap = document.getElementById("values-grid");
  if (!wrap) return;
  wrap.innerHTML = VALUES.map(v => `
    <div class="value-pill reveal"><span class="dot"></span><span>${v[I18N.current]}</span></div>`).join("");
  initScrollReveal();
}
function renderTimeline() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = TIMELINE.map(t => `
    <div class="timeline-item reveal">
      <div class="timeline-year">${t.year}</div>
      <p>${t.text[I18N.current]}</p>
    </div>`).join("");
  initScrollReveal();
}
function renderProcess() {
  const wrap = document.getElementById("process-grid");
  if (!wrap) return;
  wrap.innerHTML = PROCESS_STEPS.map((s, i) => `
    <div class="card process-step reveal">
      <div class="step-num">${String(i + 1).padStart(2, "0")}</div>
      <p style="margin-top:10px;">${s[I18N.current]}</p>
    </div>`).join("");
  initScrollReveal();
}

/* ---------------- Services ---------------- */
function renderServices() {
  const wrap = document.getElementById("services-grid");
  if (!wrap) return;
  wrap.innerHTML = SERVICES.map(s => `
    <div class="card service-card reveal">
      <div class="icon">${s.icon}</div>
      <h3>${s.title[I18N.current]}</h3>
      <p>${s.desc[I18N.current]}</p>
      <div>${s.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="card-actions"><button class="btn btn-ghost" data-service="${s.key}">${I18N.t("services.more")}</button></div>
    </div>`).join("");
  initScrollReveal();
}

/* ---------------- Projects + filters ---------------- */
let activeFilter = "all";
async function renderProjectsAndFilters() {
  const filterWrap = document.getElementById("filter-bar");
  if (filterWrap && !filterWrap.dataset.bound) {
    const filters = ["all", "web", "mobile", "bot", "ai", "backend"];
    filterWrap.innerHTML = filters.map(f => `
      <button class="filter-btn ${f === activeFilter ? "active" : ""}" data-filter="${f}">${I18N.t("filter." + f)}</button>`).join("");
    filterWrap.dataset.bound = "true";
    filterWrap.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      activeFilter = btn.getAttribute("data-filter");
      renderProjectsAndFilters();
    });
  } else if (filterWrap) {
    filterWrap.querySelectorAll(".filter-btn").forEach(b => {
      b.textContent = I18N.t("filter." + b.getAttribute("data-filter"));
      b.classList.toggle("active", b.getAttribute("data-filter") === activeFilter);
    });
  }
  const projects = await Api.getProjects();
  const list = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = list.map(p => `
    <div class="card project-card reveal">
      <div class="project-thumb">${p.name}</div>
      <div class="project-body">
        <div class="project-cat">${p.tags.join(" · ")}</div>
        <h3>${p.name}</h3>
        <p>${p.desc[I18N.current]}</p>
        <div>${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="card-actions">
          <a class="btn btn-primary" href="${p.demo}" target="_blank" rel="noopener">${I18N.t("projects.demo")}</a>
          <a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener">${I18N.t("projects.code")}</a>
        </div>
      </div>
    </div>`).join("");
  initScrollReveal();
}

/* ---------------- Technologies ---------------- */
function renderTech() {
  const wrap = document.getElementById("tech-grid");
  if (!wrap) return;
  wrap.innerHTML = TECHNOLOGIES.map(t => `
    <div class="card tech-card reveal"><div class="tech-name">${t}</div></div>`).join("");
  initScrollReveal();
}

/* ---------------- Team ---------------- */
function renderTeam() {
  const wrap = document.getElementById("team-grid");
  if (!wrap) return;
  wrap.innerHTML = FOUNDERS.map(m => `
    <div class="card team-card reveal">
      <div class="avatar-ph">${m.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</div>
      <h3>${m.name}</h3>
      <p style="color:var(--accent); font-weight:600; font-size:.9rem;">${m.role[I18N.current]}</p>
      <p>${m.bio[I18N.current]}</p>
      <div class="team-skills">${m.skills.map(s => `<span class="tag">${s}</span>`).join("")}</div>
      <div class="team-links">
        <a href="${m.social.github}" aria-label="GitHub">GH</a>
        <a href="${m.social.telegram}" aria-label="Telegram">TG</a>
        <a href="${m.social.linkedin}" aria-label="LinkedIn">in</a>
      </div>
    </div>`).join("");
  initScrollReveal();
}
function renderWhyUs() {
  const wrap = document.getElementById("why-grid");
  if (!wrap) return;
  wrap.innerHTML = WHY_US.map(w => `<div class="card reveal"><p style="color:var(--text); margin:0;">${w[I18N.current]}</p></div>`).join("");
  initScrollReveal();
}

/* ---------------- Testimonials ---------------- */
function renderTestimonials() {
  const wrap = document.getElementById("testimonials-grid");
  if (!wrap) return;
  wrap.innerHTML = TESTIMONIALS.map(t => `
    <div class="card testimonial-card reveal">
      <div class="stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <p>“${t.text[I18N.current]}”</p>
      <div class="testi-person">
        <div class="testi-avatar">${t.name[0]}</div>
        <div><strong style="font-size:.9rem;">${t.name}</strong><div style="font-size:.8rem; color:var(--text-muted);">${t.position[I18N.current]}</div></div>
      </div>
    </div>`).join("") + `<p class="testi-note" style="grid-column:1/-1;">${I18N.current === "uz" ? "Namunaviy fikrlar — haqiqiy mijoz sharhlari emas." : I18N.current === "ru" ? "Примеры отзывов — не реальные комментарии клиентов." : "Sample testimonials — not real client feedback."}</p>`;
  initScrollReveal();
}

/* ---------------- Blog ---------------- */
async function renderBlog() {
  const wrap = document.getElementById("blog-grid");
  if (!wrap) return;
  const posts = await Api.getBlogPosts();
  wrap.innerHTML = posts.map(p => `
    <div class="card project-card reveal">
      <div class="blog-thumb">${p.category.toUpperCase()}</div>
      <div class="project-body">
        <div class="project-cat">${p.category}</div>
        <h3>${p.title[I18N.current]}</h3>
        <p>${p.excerpt[I18N.current]}</p>
        <div class="blog-meta"><span>${p.date}</span><span>${p.readTime} min</span></div>
        <a class="btn btn-ghost" href="#" data-blog="${p.id}">${I18N.t("blog.readmore")}</a>
      </div>
    </div>`).join("");
  initScrollReveal();
}

/* ---------------- Contact form ---------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    let valid = true;
    clearErrors(form);

    if (!data.name?.trim()) { setError(form, "name"); valid = false; }
    if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { setError(form, "email", I18N.t("contact.invalidEmail")); valid = false; }
    if (!data.message?.trim()) { setError(form, "message"); valid = false; }

    if (!valid) return;

    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = I18N.t("contact.sending");
    status.className = "form-status";

    try {
      const payload = createContactRequest(data);
      const res = await Api.submitContactRequest(payload);
      if (res.ok) {
        status.textContent = I18N.t("contact.success");
        status.classList.add("show", "success");
        form.reset();
      } else {
        throw new Error("failed");
      }
    } catch {
      status.textContent = I18N.t("contact.error");
      status.classList.add("show", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}
function setError(form, field, msg) {
  const row = form.querySelector(`[data-field="${field}"]`);
  if (!row) return;
  row.classList.add("invalid");
  const errEl = row.querySelector(".form-error");
  if (errEl) errEl.textContent = msg || I18N.t("contact.required");
}
function clearErrors(form) {
  form.querySelectorAll(".form-row").forEach(r => r.classList.remove("invalid"));
}

/* ---------------- Cookie banner ---------------- */
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  if (localStorage.getItem("dl_cookie_consent")) return;
  setTimeout(() => banner.classList.add("show"), 1200);
  banner.querySelector("[data-accept]").addEventListener("click", () => {
    localStorage.setItem("dl_cookie_consent", "accepted");
    banner.classList.remove("show");
  });
  banner.querySelector("[data-decline]").addEventListener("click", () => {
    localStorage.setItem("dl_cookie_consent", "declined");
    banner.classList.remove("show");
  });
}
