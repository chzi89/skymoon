const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=78&w=${width}`;

export const metadata = {
  title: "About Us | Sky Moon Trading",
  description:
    "Learn about Sky Moon Trading, an international trading company focused on quality agricultural and food product sourcing.",
};

const values = [
  {
    title: "Quality",
    text: "We approach each product inquiry with attention to specifications, handling and buyer expectations.",
  },
  {
    title: "Reliability",
    text: "Commitments are managed through clear communication, practical timelines and steady follow-up.",
  },
  {
    title: "Integrity",
    text: "We keep company claims, product details and trade conversations factual, transparent and editable.",
  },
  {
    title: "Professionalism",
    text: "Documents, product requirements and commercial discussions are handled with care and discretion.",
  },
];

const leadership = [
  {
    role: "Chairman",
    name: "[Name]",
    bio: "[Add a short verified biography, industry background and responsibilities.]",
    portrait: image("photo-1500648767791-00dcc994a43e", 700),
  },
  {
    role: "Managing Director",
    name: "[Name]",
    bio: "[Add a short verified biography, operating focus and leadership responsibilities.]",
    portrait: image("photo-1506794778202-cad84cf45f1d", 700),
  },
  {
    role: "Accounts Department",
    name: "[Department Contact]",
    bio: "[Add the department contact details or a short description of finance and account support.]",
    portrait: image("photo-1522202176988-66273c2fd55f", 700),
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <img
          className="hero-media"
          src={image("photo-1552664730-d307ca884978", 2200)}
          alt="Corporate business meeting with team members discussing trade strategy"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">About Sky Moon Trading</p>
          <h1>Trading Beyond Borders</h1>
          <p className="hero-lede">
            A professional trading company focused on connecting quality
            agricultural and food products with international market
            opportunities.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container split split-about">
          <div className="image-frame tall">
            <img
              src={image("photo-1522202176988-66273c2fd55f", 1300)}
              alt="Business colleagues reviewing trade documents in a modern office"
            />
          </div>
          <div className="section-copy">
            <p className="eyebrow">Who We Are</p>
            <h2>
              A focused trading partner for agricultural and food products.
            </h2>
            <p>
              Sky Moon Trading works with product sourcing, trade coordination
              and buyer communication for food and agricultural categories such
              as rice, vegetables, sugar, cooking oil, pulses and nuts.
            </p>
            <p>
              This page avoids invented history, awards, certificates, clients,
              statistics or country claims. Replace editable placeholders with
              verified company information when available.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <article>
          <p className="eyebrow">Mission</p>
          <h2>Reliable products. Professional execution.</h2>
          <p>
            To support buyers and partners with dependable sourcing, careful
            coordination and trading solutions shaped around real product
            requirements.
          </p>
        </article>
        <article>
          <p className="eyebrow">Vision</p>
          <h2>Trusted connections across international trade.</h2>
          <p>
            To become a preferred trading partner through consistency,
            transparency and long-term commercial relationships.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Core Values</p>
          <h2>The standards that shape each trade conversation.</h2>
        </div>
        <div className="container value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-paper">
        <div className="container section-heading">
          <p className="eyebrow">Leadership</p>
          <h2>Company leadership and operating departments.</h2>
          <p>
            Use verified names, titles, portraits and biographies when they are
            ready. These cards are intentionally editable.
          </p>
        </div>
        <div className="container leadership-grid">
          {leadership.map((person) => (
            <article className="leader-card" key={person.role}>
              <div
                className="leader-avatar"
                aria-label={`${person.role} portrait`}
              >
                <img src={person.portrait} alt={person.role} />
              </div>
              <div>
                <span>{person.role}</span>
                <h3>{person.name}</h3>
                <p>{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="container split">
          <div className="section-copy light">
            <p className="eyebrow">Global Reach</p>
            <h2>Built for borderless trade conversations.</h2>
            <p>
              Add confirmed markets, ports, sourcing regions and destination
              regions here when the company wants to publish them. Until then,
              this section remains intentionally general.
            </p>
          </div>
          <div className="editable-list">
            {[
              "[Confirmed market / region]",
              "[Confirmed sourcing area]",
              "[Confirmed destination]",
              "[Confirmed logistics hub]",
              "[Confirmed trade lane]",
              "[Confirmed partner region]",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container center-copy">
          <p className="eyebrow">Work With Us</p>
          <h2>Let us discuss your next product requirement.</h2>
          <p>
            Share the product category, destination, quantity and preferred
            packaging so the inquiry can be handled with the right context.
          </p>
          <a className="btn btn-primary" href="/contact#inquiry">
            Contact Sky Moon Trading
          </a>
        </div>
      </section>
    </main>
  );
}
