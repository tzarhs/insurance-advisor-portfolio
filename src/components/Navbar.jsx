import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Αρχική", href: "#hero" },
  { label: "Σχετικά", href: "#about" },
  { label: "Υπηρεσίες", href: "#services" },
];

export default function Navbar() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="absolute top-2 left-0 right-0 z-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px]">
        {/* Left: Name */}
        <span className="font-serif text-3xl tracking-wide text-white whitespace-nowrap">
          Rafail Simitos
        </span>

        {/* Center: Nav links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="bg-transparent border-none cursor-pointer text-white text-sm tracking-[0.15em] uppercase transition-colors duration-200 hover:text-red-600"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right: CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className="text-white text-sm tracking-[0.1em] uppercase px-5 py-2.5 rounded-xl transition-opacity duration-200 hover:opacity-85"
          style={{ background: "linear-gradient(135deg, #c8141e, #8b0000)" }}
        >
          Επικοινωνία
        </button>
      </div>
    </nav>
  );
}
