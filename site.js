/* =========================================================
   Loopsy by Akish — общие функции сайта
   ========================================================= */

const ICONS = {
  house: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 28L32 10L56 28" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 24V50C14 51.6569 15.3431 53 17 53H47C48.6569 53 50 51.6569 50 50V24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 53V38C25 36.3431 26.3431 35 28 35H36C37.6569 35 39 36.3431 39 38V53" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  bowl: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 30H56C56 41.0457 47.0457 50 36 50H28C16.9543 50 8 41.0457 8 30Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><ellipse cx="32" cy="30" rx="24" ry="6" stroke="currentColor" stroke-width="3"/><path d="M20 50L18 56M44 50L46 56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  harness: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="18" r="9" stroke="currentColor" stroke-width="3"/><path d="M18 30C18 30 24 46 24 54M46 30C46 30 40 46 40 54M18 30C24 34 40 34 46 30" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  container: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="22" width="36" height="30" rx="4" stroke="currentColor" stroke-width="3"/><path d="M10 22H54" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M22 22V16C22 13.7909 23.7909 12 26 12H38C40.2091 12 42 13.7909 42 16V22" stroke="currentColor" stroke-width="3"/></svg>`,
  bag: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 24H48L45 54H19L16 24Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M24 24V18C24 13.5817 27.5817 10 32 10C36.4183 10 40 13.5817 40 18V24" stroke="currentColor" stroke-width="3"/></svg>`,
  paw: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="42" rx="14" ry="11" stroke="currentColor" stroke-width="3"/><ellipse cx="14" cy="26" rx="6" ry="7.5" stroke="currentColor" stroke-width="3"/><ellipse cx="27" cy="16" rx="6" ry="7.5" stroke="currentColor" stroke-width="3"/><ellipse cx="41" cy="16" rx="6" ry="7.5" stroke="currentColor" stroke-width="3"/><ellipse cx="52" cy="26" rx="6" ry="7.5" stroke="currentColor" stroke-width="3"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.9 2 7L3 29l6.5-2.2c2 1.1 4.2 1.7 6.5 1.7 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.1c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1.3 1.3-3.8-.3-.4a10.4 10.4 0 0 1-1.7-5.7C5.3 9.9 10.2 5 16 5s10.7 4.9 10.7 10.7S21.8 26.1 16 26.1zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5s.3-1.4.2-1.5-.3-.2-.6-.4z"/></svg>`,
  telegram: `<svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M29 5 3.5 15c-1 .4-1 1.9.1 2.2l6.1 2 2.4 7.6c.3 1 1.6 1.2 2.3.4l3.3-3.7 6.4 4.7c1 .7 2.3.1 2.5-1L30.6 6.4c.2-1.1-.9-1.9-1.9-1.4zM11.2 18.4l11.9-7.5c.5-.3 1 .4.6.8L14.1 20l-.3 4.2-1.7-5.2z"/></svg>`,
  instagram: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="24" height="24" rx="7" stroke="currentColor" stroke-width="2.3"/><circle cx="16" cy="16" r="6" stroke="currentColor" stroke-width="2.3"/><circle cx="23" cy="9" r="1.6" fill="currentColor"/></svg>`,
  mail: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="7" width="24" height="18" rx="3" stroke="currentColor" stroke-width="2.3"/><path d="M5 9L16 18L27 9" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  phone: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5C7 5 5 7 5 9c0 10 8 18 18 18 2 0 4-2 4-4v-2.3c0-.7-.4-1.3-1.1-1.5l-4.6-1.6a1.6 1.6 0 0 0-1.7.4l-1.5 1.5a15 15 0 0 1-7-7l1.5-1.5c.5-.5.6-1.2.4-1.7L11.4 5.6A1.6 1.6 0 0 0 9.9 5H9z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>`,
  pin: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 29C16 29 25 20.3 25 13.5C25 8.3 20.5 4 16 4C11.5 4 7 8.3 7 13.5C7 20.3 16 29 16 29Z" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"/><circle cx="16" cy="13.5" r="4" stroke="currentColor" stroke-width="2.3"/></svg>`,
  clock: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2.3"/><path d="M16 9V16L21 19" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function categoryIcon(catId, categories) {
  const cat = categories.find((c) => c.id === catId);
  const key = cat ? cat.icon : "paw";
  return ICONS[key] || ICONS.paw;
}

/* Renders a product thumbnail: real photo if uploaded via admin, otherwise a placeholder icon */
function productThumbHTML(p, categories) {
  if (p.images && p.images.length && p.images[0]) {
    return `<img src="${p.images[0]}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`;
  }
  return `${categoryIcon(p.category, categories)}<span class="ph-label">пример</span>`;
}

async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error("Не удалось загрузить " + path);
  return res.json();
}

function waLink(phoneDigits, text) {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
}

function money(n) {
  return new Intl.NumberFormat("ru-RU").format(n) + " ₽";
}

/* ---------- Header / footer include + nav ---------- */
async function includePartials() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const site = await fetchJSON("/content/site.json");

  if (header) {
    header.innerHTML = `
      <div class="container">
        <a href="/" class="logo">
          <svg class="logo-mark" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="#EABFA8"/>
            <path d="M18 34L32 22L46 34" stroke="#4A3327" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 31V44C22 45.1046 22.8954 46 24 46H40C41.1046 46 42 45.1046 42 44V31" stroke="#4A3327" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Loopsy<span class="dot">·</span>by Akish</span>
        </a>
        <nav class="main-nav" id="main-nav">
          <a href="/">Главная</a>
          <a href="/catalog.html">Каталог</a>
          <a href="/about.html">О нас</a>
          <a href="/reviews.html">Отзывы</a>
          <a href="/contacts.html">Контакты</a>
        </nav>
        <div class="nav-cta">
          <a href="/contacts.html" class="btn btn-primary btn-sm">Заказать</a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Меню">
            <svg viewBox="0 0 24 24" fill="none"><path d="M3 6H21M3 12H21M3 18H21" stroke="#4A3327" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>`;

    const path = location.pathname.replace(/index\.html$/, "") || "/";
    header.querySelectorAll(".main-nav a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path || (href === "/" && path === "/")) a.classList.add("active");
    });
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");
    toggle?.addEventListener("click", () => nav.classList.toggle("open"));
  }

  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="logo">Loopsy<span class="dot">·</span>by Akish</div>
            <p style="margin-top:12px;color:rgba(251,243,230,0.75)">${site.footer_note}</p>
          </div>
          <div>
            <h4>Разделы</h4>
            <ul class="footer-links">
              <li><a href="/catalog.html">Каталог</a></li>
              <li><a href="/about.html">О нас</a></li>
              <li><a href="/reviews.html">Отзывы</a></li>
              <li><a href="/contacts.html">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4>Связаться</h4>
            <ul class="footer-links">
              <li><a href="${waLink(site.contacts.whatsapp, "Здравствуйте! Хочу узнать про изделия Loopsy by Akish")}" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="https://t.me/${site.contacts.telegram}" target="_blank" rel="noopener">Telegram</a></li>
              <li><a href="https://instagram.com/${site.contacts.instagram}" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="mailto:${site.contacts.email}">${site.contacts.email}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">© ${new Date().getFullYear()} Loopsy by Akish. Сделано с любовью вручную.</div>
      </div>`;
  }

  // floating whatsapp button
  const wa = document.createElement("a");
  wa.href = waLink(site.contacts.whatsapp, "Здравствуйте! Хочу сделать заказ в Loopsy by Akish");
  wa.className = "wa-float";
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.setAttribute("aria-label", "Написать в WhatsApp");
  wa.innerHTML = ICONS.whatsapp;
  document.body.appendChild(wa);

  return site;
}
