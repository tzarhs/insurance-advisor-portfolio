import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heart from "../assets/services/heart.svg";
import house from "../assets/services/house.svg";
import medical from "../assets/services/health.svg";
import carIcon from "../assets/services/car.svg";

const SERVICES = [
  {
    icon: medical,
    title: "Ασφάλεια Ζωής",
    path: "/zoi",
    desc: "Με μια ασφάλεια ζωής και εισοδήματος μπορείτε να ζήσετε χωρίς να σκέφτεστε αν θα συναντήσετε απρόοπτες καταστάσεις στο μέλλον.",
  },
  {
    icon: house,
    title: "Ασφάλεια Κατοικίας",
    path: "/katoikia",
    desc: "Για να ζείτε ασφαλέστερα, καλύτερα και περισσότερο στον χώρο που αγαπάτε!",
  },
  {
    icon: heart,
    title: "Ασφάλεια Υγείας",
    path: "/ygeia",
    desc: "Η υγεία σας, προτεραιότητά μας για να ζείτε ξέγνοιαστα και με ασφάλεια κάθε στιγμή!",
  },
  {
    icon: carIcon,
    title: "Ασφάλεια Οχήματος",
    path: "/oxima",
    desc: "Φροντίζουμε να είμαστε δίπλα σας στα αναπάντεχα περιστατικά που μπορεί να συμβούν στο όχημά σας.",
  },
];

export default function Services() {
  const [active, setActive] = useState(1);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating || index === active) return;
    setAnimating(true);
    setActive(index);
    setTimeout(() => setAnimating(false), 400);
  };

  const prev = () => goTo(active === 0 ? SERVICES.length - 1 : active - 1);
  const next = () => goTo(active === SERVICES.length - 1 ? 0 : active + 1);

  const getVisible = () => {
    const len = SERVICES.length;
    return [(active - 1 + len) % len, active, (active + 1) % len];
  };

  const [left, center, right] = getVisible();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-neutral-950 py-24 md:py-36 px-6 md:px-16 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-950/50 blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            aria-hidden="true"
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-7 h-px bg-red-600" />
            <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
              Υπηρεσίες
            </span>
            <div className="w-7 h-px bg-red-600" />
          </div>
          <h2
            id="services-heading"
            className="font-serif text-4xl md:text-5xl text-white font-bold"
          >
            Πως μπορώ να σας βοηθήσω;
          </h2>
        </div>

        {/* Slider — role="region" + aria-label groups it for screen readers */}
        <div
          role="region"
          aria-label="Slider υπηρεσιών"
          className="relative flex items-center justify-center gap-4 md:gap-6"
        >
          {/* Prev button — aria-label describes the action clearly */}
          <button
            onClick={prev}
            aria-label={`Προηγούμενη υπηρεσία: ${SERVICES[(active - 1 + SERVICES.length) % SERVICES.length].title}`}
            className="flex-shrink-0 w-11 h-11 rounded-full border border-white/15 text-white/60 flex items-center justify-center transition-all duration-200 hover:border-red-600 hover:text-red-500 z-10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Cards container */}
          {/* aria-live="polite" announces the active card title to screen readers on change */}
          <div
            className="flex items-center flex-1 justify-center w-full"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Εμφανίζεται: ${SERVICES[center].title}`}
          >
            <div className="hidden md:flex items-center w-full justify-center gap-6">
              <div
                className="max-w-[260px] cursor-pointer"
                onClick={prev}
                aria-hidden="true"
              >
                <ServiceCard service={SERVICES[left]} variant="side" />
              </div>

              <div className="max-w-[320px] z-10">
                <ServiceCard service={SERVICES[center]} variant="active" />
              </div>

              <div
                className="max-w-[260px] cursor-pointer"
                onClick={next}
                aria-hidden="true"
              >
                <ServiceCard service={SERVICES[right]} variant="side" />
              </div>
            </div>

            {/* Mobile (1 card only) */}
            <div className="flex md:hidden w-full justify-center">
              <div className="w-full max-w-sm">
                <ServiceCard service={SERVICES[center]} variant="active" />
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label={`Επόμενη υπηρεσία: ${SERVICES[(active + 1) % SERVICES.length].title}`}
            className="flex-shrink-0 w-11 h-11 rounded-full border border-white/15 text-white/60 flex items-center justify-center transition-all duration-200 hover:border-red-600 hover:text-red-500 z-10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots — each button clearly labeled */}
        <div
          role="tablist"
          aria-label="Επιλογή υπηρεσίας"
          className="flex justify-center gap-2 mt-10"
        >
          {SERVICES.map((service, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => goTo(i)}
              aria-selected={i === active}
              aria-label={`Υπηρεσία ${i + 1}: ${service.title}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-red-600"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, variant }) {
  const isActive = variant === "active";
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-sm border transition-all duration-400 ${
        isActive
          ? "bg-[#9e2828] border-red-900/50 p-8 shadow-2xl shadow-red-950/40 md:scale-[1.08] scale-100"
          : "bg-neutral-800 border-white/6 p-6 opacity-50 md:scale-[0.96] scale-100"
      }`}
    >
      {/* Icon — alt text matches the card title to give context */}
      <img
        src={service.icon}
        alt=""
        aria-hidden="true"
        className={`mb-4 transition-all duration-300 invert ${isActive ? "w-8 h-8" : "w-5 h-5"}`}
      />

      {/* h3 — correct level under the h2 section heading */}
      <h3
        className={`font-serif font-bold mb-3 transition-all duration-300 ${
          isActive ? "text-white text-2xl" : "text-white/70 text-lg"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`text-sm leading-relaxed transition-all duration-300 ${
          isActive ? "text-white/55" : "text-white/30 line-clamp-5"
        }`}
      >
        {service.desc}
      </p>

      {/* "Μάθετε Περισσότερα" — aria-label adds context so screen readers
          don't just hear "Μάθετε Περισσότερα" with no indication what about */}
      {isActive && (
        <button
          onClick={() => navigate(service.path)}
          aria-label={`Μάθετε περισσότερα για ${service.title}`}
          className="mt-4 flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-white py-2.5 rounded-sm transition-all duration-200 hover:opacity-85 group"
        >
          Μάθετε Περισσότερα
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
