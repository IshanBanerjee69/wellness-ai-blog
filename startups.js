/*
  ADDING A STARTUP
  ----------------
  1. Copy one complete startup object below.
  2. Paste it before the final closing bracket.
  3. Change the text inside it.
  4. Set featured: true on only one startup.

  The page automatically creates the card, category filter,
  comparison row, numbering, startup count, and featured verdict.
*/

window.STARTUPS = [
  {
    name: "Haut.AI",
    website: "https://haut.ai/",
    category: "Skin",
    accent: "coral",
    title: "A skin analysis from a selfie",
    pullQuote: "A useful shopping guide — not a dermatologist in your pocket.",
    score: 7,
    reads: "Selfie pixels",
    bestUse: "Narrowing product choices",
    featured: false,
    whatItDoes: [
      "Buying skincare can feel like guessing. Shelves are packed with cleansers, moisturizers, and serums, but it is difficult to know which product is right for you.",
      "Haut.AI provides computer-vision software to beauty brands and retailers. A customer uploads a selfie, and the system analyzes visible features such as redness, pigmentation, blemishes, wrinkles, and skin texture. A recommendation system can then suggest products from the brand’s catalog."
    ],
    howAIWorks: [
      "The software identifies skin areas and separates them from hair, eyes, and the background. Machine-learning models search for patterns in the skin pixels and turn them into measurements and recommendations.",
      "SkinGPT can also simulate what someone’s skin might look like after using a product. The result is an illustration, not a guaranteed prediction."
    ],
    usefulness: [
      "The analysis depends heavily on the selfie. Lighting, makeup, shadows, or a blurry camera can affect the result. A photograph also cannot explain the medical cause of a skin condition.",
      "It could make online skincare shopping feel more personal and less random, but it should not replace a dermatologist or be treated as a diagnosis."
    ]
  },
  {
    name: "MYAVANA",
    website: "https://www.myavana.com/",
    category: "Hair",
    accent: "gold",
    title: "A digital identity for your hair",
    pullQuote: "The strongest idea here: a photo starts the story, but a strand tells more.",
    score: 8,
    reads: "Photos + strands",
    bestUse: "Building a tailored routine",
    featured: true,
    featuredIntro: "HairID is easy to understand, tackles a familiar problem, and focuses on hair types that beauty technology has often overlooked.",
    featuredDetail: "Most importantly, MYAVANA combines AI with actual strand testing instead of pretending that one photograph can reveal everything.",
    whatItDoes: [
      "Hair differs in curl pattern, thickness, porosity, elasticity, damage, and moisture needs. MYAVANA builds a HairID: a detailed profile focused especially on textured and multicultural hair.",
      "Users upload a photograph and answer questions about treatments, concerns, and goals. A deeper service lets customers mail physical hair strands for analysis."
    ],
    howAIWorks: [
      "Machine learning helps classify texture, type, and visible condition. Strand testing can add measurements such as porosity, elasticity, density, diameter, curl pattern, and damage.",
      "The deeper analysis combines AI, laboratory measurements, product information, and human expertise. HairID then matches users with products, ingredients, and routines."
    ],
    usefulness: [
      "MYAVANA goes beyond a basic curl-type quiz by considering several characteristics at once. Its accuracy still depends on the quality of its training data and product database.",
      "The combination of photos, strand testing, and personalized recommendations could be genuinely helpful. Sudden hair loss or scalp pain, however, still belongs with a medical professional."
    ]
  },
  {
    name: "Tonal",
    website: "https://tonal.com/",
    category: "Fitness",
    accent: "blue",
    title: "A weight machine that thinks while you lift",
    pullQuote: "Here, AI does more than recommend — it changes the workout in real time.",
    score: 8,
    reads: "Motion + performance",
    bestUse: "Adaptive resistance",
    featured: false,
    whatItDoes: [
      "Tonal is a wall-mounted exercise system that creates resistance electronically instead of using metal weight plates. Users pull cables while following guided workouts on a screen.",
      "The system estimates strength and recommends resistance. Sensors track repetition speed, range of motion, cable movement, and previous performance."
    ],
    howAIWorks: [
      "If a user begins struggling, Spotter Mode can temporarily reduce resistance. Other modes change weight during parts of a movement or as the person becomes tired.",
      "Camera-based movement analysis can estimate joint positions and compare a user’s movement with expected exercise form."
    ],
    usefulness: [
      "AI feels especially necessary here because it changes the workout while it is happening. A normal video cannot automatically lower the weight when a user struggles.",
      "It is not the same as a skilled trainer, and it cannot fully understand pain, injury, or medical history. Its cost and need for wall space also limit access."
    ]
  }
];
