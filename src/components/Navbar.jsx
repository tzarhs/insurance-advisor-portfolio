import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Αρχική", href: "#hero" },
  { label: "Σχετικά", href: "#about" },
  { label: "Υπηρεσίες", href: "#services" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#hero");

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveHash(href);
    }
  };

  // Keep activeHash in sync when user scrolls manually
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 },
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Κύρια πλοήγηση"
      className="absolute top-2 left-0 right-0 z-50 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px]">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          aria-label="Rafail Simitos — Αρχική σελίδα"
          className="font-serif text-3xl tracking-wide text-white whitespace-nowrap no-underline"
        >
          Rafail Simitos
        </a>

        {/* Nav links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              // aria-current tells screen readers which section is active
              aria-current={activeHash === l.href ? "true" : undefined}
              className="bg-transparent border-none cursor-pointer text-white text-sm tracking-[0.15em] uppercase transition-colors duration-200 hover:text-red-600 aria-[current]:text-red-500"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          aria-label="Επικοινωνήστε μαζί μου — μετάβαση στη φόρμα επικοινωνίας"
          className="text-white text-sm tracking-[0.1em] uppercase px-5 py-2.5 rounded-xl transition-opacity duration-200 hover:opacity-85"
          style={{ background: "linear-gradient(135deg, #c8141e, #8b0000)" }}
        >
          Επικοινωνία
        </button>
      </div>
    </nav>
  );
}
