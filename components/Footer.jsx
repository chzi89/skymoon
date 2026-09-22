import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Global Markets", href: "/#markets" },
  { label: "Contact Us", href: "/contact" },
];

const products = ["Rice", "Vegetables", "Sugar", "Cooking Oil", "Pulses", "Nuts"];
const services = [
  "Product Sourcing",
  "Trade Coordination",
  "Documentation Support",
  "Logistics Follow-up",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand footer-brand-link" href="/">
            <span className="brand-mark" aria-hidden="true">
              SM
            </span>
            <span className="brand-copy">
              <strong>Sky Moon Trading</strong>
              <small>International Trade</small>
            </span>
          </Link>
          <p>
            Sky Moon Trading connects quality agricultural and food products
            with international markets through reliable sourcing, professional
            communication and practical trade coordination.
          </p>
          <div className="footer-social" aria-label="Social media placeholders">
            <a href="#" aria-label="LinkedIn placeholder">in</a>
            <a href="#" aria-label="Facebook placeholder">f</a>
            <a href="#" aria-label="Instagram placeholder">ig</a>
          </div>
        </div>

        <div>
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product}>
                <Link href="/#products">{product}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <Link href="/#services">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li>[Company address]</li>
            <li>[City, Country]</li>
            <li>[Phone number]</li>
            <li>[Email address]</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Copyright {new Date().getFullYear()} Sky Moon Trading. All rights reserved.</p>
        <p>Privacy Policy / Terms of Business</p>
      </div>
    </footer>
  );
}
