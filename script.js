const startups = window.STARTUPS || [];
const cardsContainer = document.querySelector("#startup-cards");
const filtersContainer = document.querySelector("#filters");
const comparisonContainer = document.querySelector("#comparison-rows");
const progress = document.querySelector(".progress");

const numberWords = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six",
  "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"
];

const paragraphs = (items) => items.map((text) => `<p>${text}</p>`).join("");

function renderCard(startup, index) {
  const number = String(index + 1).padStart(2, "0");
  const category = startup.category.toLowerCase();
  return `
    <article class="card ${startup.accent}" data-category="${category}">
      <aside>
        <b>${number}</b>
        <span>${startup.category}</span>
        <div class="rating"><strong>${startup.score}</strong>/10<small>usefulness</small></div>
      </aside>
      <div class="article">
        <p class="company">${startup.name}</p>
        <h3>${startup.title}</h3>
        <blockquote>${startup.pullQuote}</blockquote>
        <div class="columns">
          <section><h4>01 · What it does</h4>${paragraphs(startup.whatItDoes)}</section>
          <section><h4>02 · How AI powers it</h4>${paragraphs(startup.howAIWorks)}</section>
          <section><h4>03 · Is it useful?</h4>${paragraphs(startup.usefulness)}</section>
        </div>
      </div>
    </article>`;
}

function renderSite() {
  cardsContainer.innerHTML = startups.map(renderCard).join("");

  const categories = [...new Set(startups.map((startup) => startup.category))];
  filtersContainer.innerHTML = ["All", ...categories].map((category, index) => `
    <button class="${index === 0 ? "active" : ""}" data-filter="${category.toLowerCase()}">
      ${category}
    </button>`).join("");

  comparisonContainer.innerHTML = startups.map((startup) => `
    <div class="row">
      <strong>${startup.name}</strong>
      <span>${startup.reads}</span>
      <span>${startup.bestUse}</span>
      <strong>${startup.score}/10</strong>
    </div>`).join("");

  const count = startups.length;
  document.querySelector("#startup-count").textContent =
    numberWords[count] || String(count);

  const featured = startups.find((startup) => startup.featured) || startups[0];
  if (featured) {
    document.querySelector("#featured-name").textContent = featured.name;
    document.querySelector("#featured-score-number").textContent = featured.score;
    document.querySelector("#featured-copy").innerHTML = `
      <p class="lead">${featured.featuredIntro || featured.pullQuote}</p>
      <p>${featured.featuredDetail || featured.usefulness.at(-1)}</p>`;
  }

  filtersContainer.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      filtersContainer.querySelectorAll("[data-filter]")
        .forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      cardsContainer.querySelectorAll("[data-category]").forEach((card) => {
        card.hidden = button.dataset.filter !== "all"
          && card.dataset.category !== button.dataset.filter;
      });
    });
  });
}

renderSite();

addEventListener("scroll", () => {
  const available = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${available ? (scrollY / available) * 100 : 0}%`;
}, { passive: true });
