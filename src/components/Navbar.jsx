import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const SERVICES_MENU = [
  { title: "Ασφάλεια Ζωής", path: "/zoi" },
  { title: "Ασφάλεια Κατοικίας", path: "/katoikia" },
  { title: "Ασφάλεια Υγείας", path: "/ygeia" },
  { title: "Ασφάλεια Οχήματος", path: "/oxima" },
  { title: "Αστική Ευθύνη & Νομική Προστασία", path: "/astiki" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [activeHash, setActiveHash] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef(null);

  const scrollTo = (href) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveHash(href);
      }
    }
    setMenuOpen(false);
  };

  const goToService = (path) => {
    setServicesOpen(false);
    setMenuOpen(false);
    navigate(path);
  };

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServicesDelayed = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

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

    [{ href: "#hero" }, { href: "#about" }, { href: "#services" }].forEach(
      ({ href }) => {
        const el = document.querySelector(href);
        if (el) observer.observe(el);
      },
    );

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Κύρια πλοήγηση"
      className="absolute top-2 left-0 right-0 z-50 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px] relative">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          aria-label="Rafail Simitos — Αρχική σελίδα"
          className="font-serif text-2xl lg:text-3xl tracking-wide text-white whitespace-nowrap no-underline"
        >
          Rafail Simitos
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <button
            onClick={() => scrollTo("#hero")}
            aria-current={activeHash === "#hero" ? "true" : undefined}
            className="bg-transparent border-none cursor-pointer text-white text-sm tracking-[0.15em] uppercase transition-colors duration-200 hover:text-red-600"
          >
            Αρχική
          </button>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServicesDelayed}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-white text-sm tracking-[0.15em] uppercase transition-colors duration-200 hover:text-red-600"
            >
              Υπηρεσίες
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute top-full left-0 pt-4 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-[480px] bg-neutral-950 border border-white/10 rounded-xl shadow-2xl shadow-black/50 py-2">
                <div className="grid grid-cols-2 gap-1">
                  {SERVICES_MENU.map((s) => (
                    <button
                      key={s.path}
                      onClick={() => goToService(s.path)}
                      className="w-full text-left px-5 py-3 bg-transparent border-none cursor-pointer text-white/80 text-sm tracking-wide hover:text-red-500 hover:bg-white/5 transition-colors duration-150"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollTo("#about")}
            aria-current={activeHash === "#about" ? "true" : undefined}
            className="bg-transparent border-none cursor-pointer text-white text-sm tracking-[0.15em] uppercase transition-colors duration-200 hover:text-red-600 aria-[current]:text-red-500"
          >
            Σχετικά
          </button>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          aria-label="Επικοινωνήστε μαζί μου — μετάβαση στη φόρμα επικοινωνίας"
          className="hidden md:block text-white text-sm tracking-[0.1em] uppercase px-5 py-2.5 rounded-xl transition-opacity duration-200 hover:opacity-85"
          style={{ background: "linear-gradient(135deg, #c8141e, #8b0000)" }}
        >
          Επικοινωνία
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Άνοιγμα μενού"
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-8 md:hidden overflow-y-auto py-20">
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Κλείσιμο μενού"
              className="absolute top-6 right-6 text-white"
            >
              <X size={36} />
            </button>

            <button
              onClick={() => scrollTo("#hero")}
              aria-current={activeHash === "#hero" ? "true" : undefined}
              className="bg-transparent border-none cursor-pointer text-white text-2xl tracking-[0.2em] uppercase transition-colors duration-200 hover:text-red-600 aria-[current]:text-red-500"
            >
              Αρχική
            </button>

            {/* Mobile Services accordion */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-white text-2xl tracking-[0.2em] uppercase transition-colors duration-200 hover:text-red-600"
              >
                Υπηρεσίες
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col items-center gap-3 mt-2">
                  {SERVICES_MENU.map((s) => (
                    <button
                      key={s.path}
                      onClick={() => goToService(s.path)}
                      className="bg-transparent border-none cursor-pointer text-white/70 text-base tracking-wide uppercase hover:text-red-500 transition-colors duration-150"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("#about")}
              aria-current={activeHash === "#about" ? "true" : undefined}
              className="bg-transparent border-none cursor-pointer text-white text-2xl tracking-[0.2em] uppercase transition-colors duration-200 hover:text-red-600 aria-[current]:text-red-500"
            >
              Σχετικά
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollTo("#contact")}
              className="text-white text-lg tracking-[0.1em] uppercase px-8 py-4 rounded-xl transition-opacity duration-200 hover:opacity-85"
              style={{
                background: "linear-gradient(135deg, #c8141e, #8b0000)",
              }}
            >
              Επικοινωνία
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
