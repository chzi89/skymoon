const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=78&w=${width}`;

export const metadata = {
  title: "Contact Us | Sky Moon Trading",
  description:
    "Contact Sky Moon Trading for product inquiries, quote requests and international trading conversations.",
};

const contactDetails = [
  {
    label: "Phone",
    value: "[Phone number]",
    icon: "phone",
  },
  {
    label: "Email",
    value: "[Email address]",
    icon: "mail",
  },
  {
    label: "Address",
    value: "[Company address, City, Country]",
    icon: "pin",
  },
  {
    label: "Business Hours",
    value: "[Business hours]",
    icon: "clock",
  },
];

function ContactIcon({ type }) {
  const paths = {
    phone: (
      <path d="M7 4h4l2 5-2.5 1.5a14 14 0 0 0 6 6L18 14l5 2v4c0 1.1-.9 2-2 2A19 19 0 0 1 5 6c0-1.1.9-2 2-2Z" />
    ),
    mail: (
      <>
        <rect x="4" y="6" width="20" height="16" rx="2" />
        <path d="m4 8 10 7 10-7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <img
          className="hero-media"
          src={image("photo-1497366754035-f200968a6e72", 2200)}
          alt="Professional corporate meeting room with business discussion"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Contact Sky Moon Trading</p>
          <h1>Let's Start a Conversation</h1>
          <p className="hero-lede">
            Send a product inquiry, sourcing request or trade question and the
            team can follow up with the information needed to move forward.
          </p>
        </div>
      </section>

      <section className="section section-paper" id="inquiry">
        <div className="container contact-grid">
          <aside className="contact-info">
            <p className="eyebrow">Company Information</p>
            <h2>Professional trade inquiries start with clear details.</h2>
            <p>
              Use the form for product requests, quote conversations,
              documentation questions or introductory business inquiries.
            </p>
            <div className="contact-detail-list">
              {contactDetails.map((detail) => (
                <div className="contact-detail" key={detail.label}>
                  <ContactIcon type={detail.icon} />
                  <div>
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <form className="inquiry-form">
            <div className="form-row">
              <label>
                Full Name
                <input name="fullName" type="text" placeholder="Your name" />
              </label>
              <label>
                Company Name
                <input name="company" type="text" placeholder="Company name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" placeholder="+00 000 000000" />
              </label>
            </div>
            <label>
              Product / Inquiry
              <select name="product" defaultValue="">
                <option value="" disabled>
                  Select inquiry type
                </option>
                <option>Rice</option>
                <option>Vegetables</option>
                <option>Sugar</option>
                <option>Cooking Oil</option>
                <option>Pulses</option>
                <option>Nuts</option>
                <option>General Trading Inquiry</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Share product, quantity, destination, packaging and timeline."
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="section quote-section" id="quote">
        <div className="container quote-card">
          <div>
            <p className="eyebrow">Request a Quote</p>
            <h2>Ready to discuss pricing, specifications or supply?</h2>
            <p>
              Include the product, grade or specification, estimated quantity,
              destination, packaging preference and delivery timeline for a more
              useful response.
            </p>
          </div>
          <a className="btn btn-light" href="#inquiry">
            Start Quote Request
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Location</p>
          <h2>Visit or contact our office.</h2>
          <p>
            The address below is editable. Replace it with the verified company
            address before publishing live business details.
          </p>
        </div>
        <div className="container map-section">
          <div className="map-address">
            <span>Sky Moon Trading</span>
            <strong>[Company address, City, Country]</strong>
            <p>
              Map location and embedded coordinates should be updated with the
              confirmed office address.
            </p>
          </div>
          <iframe
            title="Editable Sky Moon Trading map location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=67.0000%2C24.8000%2C67.1200%2C24.9400&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
