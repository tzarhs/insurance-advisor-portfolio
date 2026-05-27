import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Αρχική", href: "#hero" },
  { label: "Σχετικά", href: "#about" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Επικοινωνία", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Ασφάλεια Ζωής", path: "/zoi" },
  { label: "Ασφάλεια Κατοικίας", path: "/katikia" },
  { label: "Ασφάλεια Υγείας", path: "/ygeia" },
  { label: "Ασφάλεια Οχήματος", path: "/oxima" },
];

export default function Footer() {
  const navigate = useNavigate();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-neutral-950 border-t border-white/6 px-5 md:px-16 pt-14 md:pt-16 pb-8">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-950/50 blur-[120px] pointer-events-none"
      />
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Left: name + tagline + linkedin */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl text-white font-bold mb-2">
              Rafail I. Simitos
            </h3>
            <p className="text-white/50 text-xs leading-relaxed mb-5 max-w-xs">
              Σύμβουλος Ασφαλίσεων στην Interamerican. Εξατομικευμένες λύσεις
              για κάθε ανάγκη.
            </p>
            <a
              href="https://www.linkedin.com/in/raphael-i-simitos-3b1485323/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-red-500 transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="text-xs tracking-widest uppercase">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Center: nav links */}
          <div>
            <p className="text-white/35 text-[0.65rem] tracking-[0.2em] uppercase mb-4">
              Πλοήγηση
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/50 text-sm hover:text-red-500 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: service links */}
          <div>
            <p className="text-white/30 text-[0.65rem] tracking-[0.2em] uppercase mb-4">
              Υπηρεσίες
            </p>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => navigate(l.path)}
                    className="text-white/50 text-sm hover:text-red-500 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Rafail I. Simitos · Interamerican. Με
            επιφύλαξη παντός δικαιώματος.
          </p>

          {/* Developed by */}
          <p className="text-white/50 text-xs">
            Designed & Developed by{" "}
            <a
              href="https://giannis-tzaris.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 text-xs font-medium"
            >
              Giannis Tzaris
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
