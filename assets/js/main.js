/* ka blog js
   - menu mobile
   - tema: dark / auto (respeita prefers-color-scheme quando auto)
   - filtro de tags + busca na pagina de artigos
*/

(function () {
  const qs = (s, p = document) => p.querySelector(s);
  const qsa = (s, p = document) => Array.from(p.querySelectorAll(s));

  // mobile nav
  const navToggle = qs("#navToggle");
  const mobileNav = qs("#mobileNav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });
  }

  // theme
  const themeBtn = qs("#themeToggle");
  const body = document.body;
  const key = "ka_theme"; // "dark" | "auto"
  const setTheme = (mode) => {
    body.classList.remove("theme-dark", "theme-auto");
    body.classList.add(mode === "auto" ? "theme-auto" : "theme-dark");
    localStorage.setItem(key, mode);
    if (themeBtn) themeBtn.setAttribute("aria-label", "tema " + mode);
  };
  const saved = localStorage.getItem(key) || "dark";
  setTheme(saved);
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = localStorage.getItem(key) || "dark";
      setTheme(current === "dark" ? "auto" : "dark");
    });
  }

  // filtros (artigos)
  const list = qs("[data-post-list]");
  const search = qs("[data-post-search]");
  const pills = qsa("[data-tag-pill]");
  if (list && (search || pills.length)) {
    const cards = qsa("[data-post-card]", list);

    const state = {
      q: "",
      tag: "",
    };

    const url = new URL(window.location.href);
    const tagFromUrl = url.searchParams.get("tag") || "";
    if (tagFromUrl) state.tag = tagFromUrl;

    const apply = () => {
      const q = state.q.trim().toLowerCase();
      const tag = state.tag.trim().toLowerCase();

      cards.forEach((card) => {
        const title = (card.getAttribute("data-title") || "").toLowerCase();
        const tags = (card.getAttribute("data-tags") || "").toLowerCase();
        const matchQ = !q || title.includes(q);
        const matchTag = !tag || tags.split(",").includes(tag);
        card.style.display = (matchQ && matchTag) ? "" : "none";
      });

      // update pressed
      pills.forEach((p) => {
        const t = (p.getAttribute("data-tag-pill") || "");
        p.setAttribute("aria-pressed", String(t === state.tag));
      });

      // keep url shareable
      const next = new URL(window.location.href);
      if (state.tag) next.searchParams.set("tag", state.tag);
      else next.searchParams.delete("tag");
      if (state.q) next.searchParams.set("q", state.q);
      else next.searchParams.delete("q");
      window.history.replaceState({}, "", next.toString());
    };

    // init ui state from url
    const qFromUrl = url.searchParams.get("q") || "";
    if (search && qFromUrl) {
      search.value = qFromUrl;
      state.q = qFromUrl;
    }

    // hook events
    if (search) {
      search.addEventListener("input", (e) => {
        state.q = e.target.value || "";
        apply();
      });
    }

    pills.forEach((p) => {
      p.addEventListener("click", () => {
        const t = p.getAttribute("data-tag-pill") || "";
        state.tag = (state.tag === t) ? "" : t;
        apply();
      });
    });

    apply();
  }
})();
