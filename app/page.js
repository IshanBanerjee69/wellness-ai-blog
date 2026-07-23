"use client";

import { useEffect, useState } from "react";

const startups = [
  {
    id: "haut-ai",
    number: "01",
    name: "Haut.AI",
    category: "Skin",
    title: "A skin analysis from a selfie",
    score: 7,
    accent: "coral",
    pull: "A useful shopping guide — not a dermatologist in your pocket.",
    what: [
      "Buying skincare can feel like guessing. Shelves are packed with cleansers, moisturizers, and serums that promise clearer or healthier skin, but it is difficult to know which product is right for you.",
      "Haut.AI is a skincare technology company that tries to solve this problem using computer vision. Instead of mainly selling its own skincare products, it provides AI software to beauty brands and retailers.",
      "A customer takes or uploads a selfie through a company’s website or app. Haut.AI analyzes visible features such as redness, pigmentation, blemishes, wrinkles, and skin texture, then uses the results to suggest products from the brand’s catalog."
    ],
    ai: [
      "The software first identifies skin areas in the photograph and separates them from hair, eyes, and the background. Machine-learning models search for patterns in the skin pixels and turn those patterns into measurements and recommendations.",
      "Haut.AI also offers SkinGPT, a generative-AI tool that can simulate what someone’s skin might look like after using a product. It is an illustration, not a guaranteed prediction: allergies, genetics, medication, sun exposure, and consistency all influence real results."
    ],
    useful: [
      "The biggest weakness is the selfie itself. Bad lighting, makeup, shadows, or a blurry camera can affect the analysis. A photograph also cannot explain the medical cause of acne, irritation, or another skin condition.",
      "Still, the tool could make online skincare shopping feel more personal and less random. It can help shoppers narrow down choices, but should never replace a dermatologist or be treated as a medical diagnosis."
    ]
  },
  {
    id: "myavana",
    number: "02",
    name: "MYAVANA",
    category: "Hair",
    title: "A digital identity for your hair",
    score: 8,
    accent: "gold",
    pull: "The strongest idea here: a photo starts the story, but a strand tells more.",
    what: [
      "Hair care is another area where people waste money testing products that do not work. Hair differs in curl pattern, thickness, porosity, elasticity, damage, and moisture needs. A product that works well for one person may be useless for someone else.",
      "MYAVANA builds what it calls a HairID: a detailed profile of a person’s hair. The company focuses especially on textured and multicultural hair, which has not always been represented well in mainstream beauty technology.",
      "Users upload a photograph and answer questions about treatments, concerns, and goals. A more detailed service lets customers send physical strands from different areas of the head for further analysis."
    ],
    ai: [
      "Machine learning helps classify texture, type, and visible condition. The strand service can add measurements such as porosity, elasticity, density, diameter, curl pattern, and damage.",
      "MYAVANA is not powered by AI alone. Its deeper analysis combines machine learning, laboratory measurements, product information, and human expertise. The HairID then matches the user with products, ingredients, and routines that may fit their needs."
    ],
    useful: [
      "The original part is that MYAVANA goes beyond a simple curl-type quiz and looks at several characteristics at once. Its accuracy still depends on the training data and product database, and a photo cannot reveal everything about a strand’s condition.",
      "The combination of photos, strand testing, and personalized recommendations could be genuinely helpful, especially for people underserved by broad hair categories. Sudden hair loss or scalp pain, however, still belongs with a medical professional."
    ]
  },
  {
    id: "tonal",
    number: "03",
    name: "Tonal",
    category: "Fitness",
    title: "A weight machine that thinks while you lift",
    score: 8,
    accent: "blue",
    pull: "Here, AI does more than recommend — it changes the workout in real time.",
    what: [
      "Tonal uses AI to personalize strength training. It is a wall-mounted exercise system that creates resistance electronically instead of using metal weight plates. Users pull cables connected to the machine while following guided workouts on a screen.",
      "On a first session, Tonal estimates strength and recommends resistance for different exercises. During a workout, sensors track repetition speed, range of motion, cable movement, and previous performance."
    ],
    ai: [
      "That data lets the system adjust the workout. If someone begins struggling, Spotter Mode can temporarily reduce resistance. Other modes can increase weight during parts of a movement or lower it as the person gets tired.",
      "Camera-based movement analysis can estimate major joint positions and compare the user’s movement with expected exercise form. In simple terms, Tonal combines digitally controlled resistance, movement sensors, and computer vision."
    ],
    useful: [
      "AI feels especially necessary here because it directly changes the workout while it is happening. A normal video cannot automatically lower the weight when a user struggles.",
      "It is not the same as a skilled trainer. Cameras may miss mistakes, and the machine cannot fully understand pain, injury, or medical history. Its high price and need for wall space also limit access. The experience can be safer and more personal, but not universally available."
    ]
  }
];

const tabs = ["All", "Skin", "Hair", "Fitness"];

function Score({ value }) {
  return (
    <div className="score" aria-label={`${value} out of 10 usefulness rating`}>
      <span className="score-value">{value}</span>
      <span className="score-total">/10</span>
      <span className="score-label">usefulness</span>
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const visible = filter === "All"
    ? startups
    : startups.filter((startup) => startup.category === filter);

  const jumpToArticle = () => {
    document.querySelector("#field-notes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Wellness Intelligence home">
          <span className="brand-mark">WI</span>
          <span>Wellness Intelligence</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#field-notes">Field notes</a>
          <a href="#verdict">Verdict</a>
        </nav>
        <span className="issue">Issue 001 · 8 min read</span>
      </header>

      <main id="top">
        <section className="hero">
          <div className="eyebrow"><span /> The wellness AI field guide</div>
          <h1>Can AI fix your<br /><em>skin, hair</em> &amp; <em>workout?</em></h1>
          <div className="hero-bottom">
            <p className="dek">
              Three startups promise more personal care through pixels, strands, and sensors.
              We looked past the buzzwords to ask a simpler question: <strong>is any of it useful?</strong>
            </p>
            <button className="read-button" onClick={jumpToArticle}>
              Read the field notes <span>↓</span>
            </button>
          </div>
          <div className="signal-grid" aria-hidden="true">
            <div className="signal signal-skin"><span>skin</span></div>
            <div className="signal signal-hair"><span>hair</span></div>
            <div className="signal signal-fitness"><span>strength</span></div>
          </div>
        </section>

        <section className="intro section-rule">
          <div className="section-label">The premise</div>
          <div>
            <p className="lead">
              Artificial intelligence is no longer limited to chatbots and self-driving cars.
              Startups now use it to analyze selfies, examine hair strands, and adjust resistance
              while someone is exercising.
            </p>
            <p>
              Haut.AI, MYAVANA, and Tonal apply AI to health and wellness in very different ways.
              Some of the technology seems genuinely helpful. None of it is perfect.
            </p>
          </div>
        </section>

        <section className="directory" id="field-notes">
          <div className="directory-head">
            <div>
              <span className="section-label">Three field notes</span>
              <h2>Meet the machines</h2>
            </div>
            <div className="filters" aria-label="Filter startups by category">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={filter === tab ? "active" : ""}
                  onClick={() => setFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="startup-list">
            {visible.map((startup) => (
              <article className={`startup-card ${startup.accent}`} id={startup.id} key={startup.id}>
                <div className="card-rail">
                  <span className="card-number">{startup.number}</span>
                  <span className="category">{startup.category}</span>
                  <Score value={startup.score} />
                </div>
                <div className="card-body">
                  <header className="card-title">
                    <div>
                      <p className="company">{startup.name}</p>
                      <h3>{startup.title}</h3>
                    </div>
                    <div className={`orb orb-${startup.accent}`} aria-hidden="true"><span /></div>
                  </header>
                  <blockquote>{startup.pull}</blockquote>
                  <div className="story-grid">
                    <section>
                      <h4><span>01</span> What it does</h4>
                      {startup.what.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </section>
                    <section>
                      <h4><span>02</span> Where the AI comes in</h4>
                      {startup.ai.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </section>
                    <section>
                      <h4><span>03</span> Is it actually useful?</h4>
                      {startup.useful.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </section>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="comparison section-rule">
          <div className="section-label">At a glance</div>
          <div className="comparison-table" role="table" aria-label="Startup comparison">
            <div className="table-row table-head" role="row">
              <span>Startup</span><span>Reads</span><span>Best use</span><span>Score</span>
            </div>
            {startups.map((startup) => (
              <a className="table-row" href={`#${startup.id}`} role="row" key={startup.id}>
                <strong>{startup.name}</strong>
                <span>{startup.category === "Skin" ? "Selfie pixels" : startup.category === "Hair" ? "Photos + strands" : "Motion + performance"}</span>
                <span>{startup.category === "Skin" ? "Narrowing product choices" : startup.category === "Hair" ? "Building a tailored routine" : "Adaptive resistance"}</span>
                <strong>{startup.score}/10</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="verdict" id="verdict">
          <span className="section-label light">Our verdict</span>
          <div className="verdict-grid">
            <div>
              <p className="kicker">Most interesting</p>
              <h2>MYAVANA</h2>
              <div className="winner-score">8<span>/10</span></div>
            </div>
            <div className="verdict-copy">
              <p className="lead">
                HairID is easy to understand, tackles a familiar problem, and focuses on hair
                types that beauty technology has often overlooked.
              </p>
              <p>
                More importantly, MYAVANA combines AI with actual strand testing instead of pretending
                one photograph can reveal everything. It is a thoughtful blend of machine pattern-finding
                and physical evidence.
              </p>
            </div>
          </div>
          <p className="closing">
            The real question is not whether a product <em>contains</em> AI.<br />
            It is whether the AI makes the product meaningfully more useful.
          </p>
        </section>

        <section className="next-issue">
          <span>Next in the field guide</span>
          <p>More AI startups in personal care, fitness, and everyday wellness — coming soon.</p>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">WI</span>
          <span>Wellness Intelligence</span>
        </a>
        <p>Clear eyes on artificial intelligence in everyday health.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
