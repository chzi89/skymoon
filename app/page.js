const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=78&w=${width}`;

const featuredProducts = [
  {
    name: "Premium Basmati Rice",
    category: "Agricultural Staples",
    description:
      "Carefully handled rice supply suitable for buyers seeking dependable staple food sourcing.",
    image: image("photo-1615485519315-78f8b4d61684", 1200),
    alt: "Close-up of premium rice grains in a bowl and field scene",
    action: "View Product",
  },
  {
    name: "Fresh Vegetables",
    category: "Fresh Produce",
    description:
      "Fresh vegetables selected for handling, presentation and consistent supply planning.",
    image: image("photo-1542838132-92c53300491e", 1200),
    alt: "Fresh vegetables arranged in a market display",
    action: "Request Quote",
  },
  {
    name: "Refined Sugar",
    category: "Food Ingredients",
    description:
      "Sugar sourcing coordinated around packaging requirements, delivery planning and buyer needs.",
    image: image("photo-1582719471384-8d33d8a0f6d4", 1200),
    alt: "Refined sugar in a premium industrial packaging setting",
    action: "View Product",
  },
  {
    name: "Cooking Oil",
    category: "Edible Oils",
    description:
      "Cooking oil trade inquiries handled with attention to product grade, packing and market fit.",
    image: image("photo-1473448912268-2022ce9509d8", 1200),
    alt: "Cooking oil bottles on a clean commercial countertop",
    action: "Request Quote",
  },
  {
    name: "Pulses",
    category: "Grains & Legumes",
    description:
      "Lentils, beans and pulse categories sourced for international trade and consistent supply flow.",
    image: image("photo-1582515073490-39981397c445", 1200),
    alt: "Assorted beans and pulses in natural light",
    action: "View Product",
  },
  {
    name: "Mixed Nuts",
    category: "Dry Goods",
    description:
      "Nut supply options managed with attention to handling, storage and customer expectations.",
    image: image("photo-1509440159596-0249088772ff", 1200),
    alt: "Mixed nuts presented in a premium food product display",
    action: "Request Quote",
  },
];

const services = [
  "Product sourcing and supplier coordination",
  "Trading documentation support",
  "Packaging and specification coordination",
  "Cargo, warehouse and shipment follow-up",
];

const reasons = [
  {
    title: "Quality-Minded Sourcing",
    text: "Products are reviewed around buyer requirements, practical specifications and dependable origin relationships.",
  },
  {
    title: "Professional Communication",
    text: "Every inquiry is handled with clear follow-up, practical timelines and straightforward trading terms.",
  },
  {
    title: "Logistics Awareness",
    text: "Orders are planned with shipment, warehousing, documentation and destination requirements in view.",
  },
  {
    title: "Long-Term Trade Focus",
    text: "The goal is reliable repeat business, not one-off transactions without accountability.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero hero-home" id="home">
        <img
          className="hero-media"
          src={image("photo-1586528116311-ad8dd3c8310d", 2200)}
          alt="Shipping containers and cargo logistics in a busy port terminal"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">International Trading & Supply</p>
          <h1>Connecting Quality Products With Global Markets</h1>
          <p className="hero-lede">
            Reliable sourcing, professional trading and quality products,
            connecting trusted supply with opportunities across international
            markets.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact#quote">
              Request a Quote
            </a>
            <a className="btn btn-light" href="#products">
              View Products
            </a>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="about-preview">
        <div className="container split split-about">
          <div className="image-frame tall">
            <img
              src={image("photo-1552664730-d307ca884978", 1400)}
              alt="Business team reviewing trade documents in a corporate office"
            />
          </div>
          <div className="section-copy">
            <p className="eyebrow">About Sky Moon Trading</p>
            <h2>Reliable trade, practical sourcing and clear execution.</h2>
            <p>
              Sky Moon Trading connects quality agricultural and food products
              with buyers across international markets. The company focuses on
              trusted sourcing, professional communication and product movement
              that respects the needs of both suppliers and buyers.
            </p>
            <p>
              Company history, operating regions and credentials can be updated
              here with verified details as they become available.
            </p>
            <a className="text-link" href="/about">
              Learn more about us
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="container section-heading">
          <p className="eyebrow">Featured Products</p>
          <h2>Food and agricultural products for international buyers.</h2>
          <p>
            Specifications, packing options, pricing and availability are
            handled by inquiry so each product can be matched to the buyer's
            market requirements.
          </p>
        </div>
        <div className="container product-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-card-media">
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="product-card-body">
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a href="/contact#quote">{product.action}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="container section-heading light">
          <p className="eyebrow">Why Choose Us</p>
          <h2>A trading partner designed for clarity and consistency.</h2>
        </div>
        <div className="container reason-grid">
          {reasons.map((reason, index) => (
            <article className="reason-card" key={reason.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="container split">
          <div className="section-copy">
            <p className="eyebrow">Services</p>
            <h2>
              End-to-end trading support with a real-world supply chain view.
            </h2>
            <p>
              From first inquiry to shipment follow-up, our work is organized
              around accurate product details, practical documentation and
              reliable coordination.
            </p>
            <div className="service-list">
              {services.map((service) => (
                <div className="service-item" key={service}>
                  <span aria-hidden="true" />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="image-stack">
            <img
              src={image("photo-1586528116311-ad8dd3c8310d", 1300)}
              alt="Cargo containers and warehouse logistics in a commercial port"
            />
            <div className="stack-panel">
              <strong>Trade Coordination</strong>
              <span>
                Sourcing, specification, documentation and shipment support.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="markets">
        <div className="container split reverse">
          <div
            className="market-panel"
            aria-label="Business logistics and market conversation panel"
          >
            <div className="market-map">
              <div className="market-card-overlay">
                <span>Supply</span>
                <strong>Global trade coordination</strong>
              </div>
            </div>
            <p>
              Market planning remains intentionally editable and should be
              updated with confirmed company details when available.
            </p>
          </div>
          <div className="section-copy">
            <p className="eyebrow">Global Markets</p>
            <h2>Connecting trusted supply with demand across borders.</h2>
            <p>
              Sky Moon Trading is positioned for international trade
              conversations across agricultural products, food ingredients and
              supporting logistics. Actual market coverage should be updated
              with confirmed company information.
            </p>
            <a className="text-link" href="/contact">
              Discuss your market requirement
            </a>
          </div>
        </div>
      </section>

      <section className="section inquiry-band">
        <div className="container inquiry-card">
          <div>
            <p className="eyebrow">Contact / Inquiry</p>
            <h2>Have a product requirement or sourcing inquiry?</h2>
            <p>
              Share the product, quantity, destination, packaging preference and
              any required specifications. The team can respond with the most
              relevant next steps.
            </p>
          </div>
          <a className="btn btn-primary" href="/contact#inquiry">
            Submit Inquiry
          </a>
        </div>
      </section>
    </main>
  );
}
