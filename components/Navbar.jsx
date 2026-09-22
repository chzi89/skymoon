"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const productLinks = [
  { label: "Rice", href: "/#products" },
  { label: "Vegetables", href: "/#products" },
  { label: "Sugar", href: "/#products" },
  { label: "Cooking Oil", href: "/#products" },
  { label: "Pulses & Nuts", href: "/#products" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products", dropdown: productLinks },
  { label: "Services", href: "/#services" },
  { label: "Global Markets", href: "/#markets" },
  { label: "Contact Us", href: "/contact" },
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href.split("#")[0];
}

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Sky Moon Trading home">
      <span className="brand-mark" aria-hidden="true">
        SM
      </span>
      <span className="brand-copy">
        <strong>Sky Moon Trading</strong>
        <small>International Trade</small>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-container">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div
              className={`nav-item ${item.dropdown ? "has-dropdown" : ""}`}
              key={item.label}
            >
              <Link
                className={`nav-link ${isActive(pathname, item.href) ? "active" : ""}`}
                href={item.href}
              >
                {item.label}
              </Link>
              {item.dropdown ? (
                <div className="dropdown-menu" aria-label="Product links">
                  {item.dropdown.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <Link className="quote-link" href="/contact#quote">
          Request a Quote
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-panel" data-open={open}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div className="mobile-nav-group" key={item.label}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.dropdown ? (
                <div className="mobile-subnav">
                  {item.dropdown.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link
            className="mobile-quote"
            href="/contact#quote"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
