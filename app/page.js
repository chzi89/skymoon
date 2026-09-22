const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=78&w=${width}`;

const featuredProducts = [
  {
    name: "Rice",
    category: "Agricultural Staples",
    description:
      "Quality rice sourcing for buyers seeking dependable staple food supply.",
    image: image("photo-1748919430481-3614b5f9542b", 1200),
    alt: "Rice grains growing in a field",
  },
  {
    name: "Vegetables",
    category: "Fresh Produce",
    description:
      "Fresh vegetable supply options coordinated with careful handling and clear specifications.",
    image: image("photo-1775825772432-58a1a31dcf40", 1200),
    alt: "Fresh vegetables and fruits displayed in crates",
  },
  {
    name: "Sugar",
    category: "Food Ingredients",
    description:
      "Sugar and food ingredient inquiries supported with packaging and volume details on request.",
    image: image("photo-1769259397222-33e425659c43", 1200),
    alt: "White granular sugar in a glass jar",
  },
  {
    name: "Cooking Oil",
    category: "Edible Oils",
    description:
      "Cooking oil trading solutions for food service, retail and distribution requirements.",
    image: image("photo-1562500273-8ab8072d58e0", 1200),
    alt: "Bottle of cooking oil",
  },
  {
    name: "Pulses",
    category: "Grains & Legumes",
    description:
      "Beans, peas, lentils and related pulse products sourced for international buyers.",
    image: image("photo-1575519893292-bc112ee03729", 1200),
    alt: "Assorted beans and pulses",
  },
  {
    name: "Nuts",
    category: "Dry Goods",
    description:
      "Nut and dry goods inquiries handled with attention to grade, packaging and destination needs.",
    image: image("photo-1772986797512-aca552d6bffb", 1200),
    alt: "Almonds and pistachios on a light surface",
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
          src={image("photo-1778441531349-b0c874287ebc", 2200)}
          alt="Cargo containers, trucks and rail logistics at an international port"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">International Trading & Supply</p>
          <h1>Connecting Quality Products With Global Markets</h1>
          <p className="hero-lede">
            Reliable sourcing, professional trading and quality products -
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
              src={image("photo-1770710195407-b31627609c0b", 1400)}
              alt="Stacked shipping containers at a logistics terminal"
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
                <a href="/contact#quote">Request details</a>
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
            <h2>End-to-end trading support with a real-world supply chain view.</h2>
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
              src={image("photo-1774929105466-0d08336e4baf", 1300)}
              alt="Colorful shipping containers stacked at a port"
            />
            <div className="stack-panel">
              <strong>Trade Coordination</strong>
              <span>Sourcing, specification, documentation and shipment support.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="markets">
        <div className="container split reverse">
          <div className="market-panel" aria-label="Editable global markets map">
            <div className="market-map">
              <span className="pin pin-one" />
              <span className="pin pin-two" />
              <span className="pin pin-three" />
              <span className="pin pin-four" />
            </div>
            <p>
              Market regions are intentionally editable. Replace these labels
              only with verified countries or regions served by the company.
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
