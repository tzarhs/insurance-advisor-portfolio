import { useState, useRef, useEffect } from "react";
import heart from "../assets/services/heart.svg";
import house from "../assets/services/house.svg";
import medical from "../assets/services/health.svg";
import carIcon from "../assets/services/car.svg";
import arrow from "../assets/right-arrow.svg";

const SERVICES = [
  {
    icon: medical,
    title: "Ασφάλεια Ζωής",
    desc: "Προστατέψτε αυτό που έχει μεγαλύτερη αξία. Σχεδιάζω προγράμματα που εξασφαλίζουν την οικογένειά σας για το μέλλον, με καλύψεις προσαρμοσμένες στις πραγματικές σας ανάγκες.",
  },
  {
    icon: house,
    title: "Ασφάλεια Κατοικίας",
    desc: "Το σπίτι σας είναι η μεγαλύτερη επένδυσή σας. Φροντίζω για την πλήρη κάλυψη έναντι κάθε κινδύνου — από φυσικές καταστροφές μέχρι κλοπή και αστική ευθύνη.",
  },
  {
    icon: heart,

    title: "Ασφάλεια Υγείας",
    desc: "Πρόσβαση στη φροντίδα υγείας που χρειάζεστε, χωρίς οικονομικές ανησυχίες. Σχεδιάζω προγράμματα με νοσοκομειακή κάλυψη, εξετάσεις και ιατρικές επισκέψεις.",
  },
  {
    icon: carIcon,
    title: "Ασφάλεια Οχήματος",
    desc: "Ολοκληρωμένη κάλυψη για κάθε διαδρομή. Από την υποχρεωτική ασφάλιση μέχρι την πλήρη κάλυψη με roadside assistance και νομική προστασία.",
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

  // Which cards are visible: active-1, active, active+1
  const getVisible = () => {
    const len = SERVICES.length;
    return [(active - 1 + len) % len, active, (active + 1) % len];
  };

  const [left, center, right] = getVisible();

  return (
    <section
      id="services"
      className="bg-neutral-50 py-24 md:py-36 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-7 h-px bg-red-600" />
            <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
              Υπηρεσίες
            </span>
            <div className="w-7 h-px bg-red-600" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 font-bold">
            Τι μπορώ να κάνω για εσάς
          </h2>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6">
          {/* Prev button */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-11 h-11 rounded-full border border-neutral-300 text-neutral-500 flex items-center justify-center transition-all duration-200 hover:border-red-600 hover:text-red-500 z-10"
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
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="flex items-center gap-4 md:gap-5 flex-1 justify-center">
            {/* Left card */}
            <div className="flex-1 max-w-[260px] cursor-pointer" onClick={prev}>
              <ServiceCard service={SERVICES[left]} variant="side" />
            </div>

            {/* Center card (active) */}
            <div className="flex-1 max-w-[320px] z-10">
              <ServiceCard service={SERVICES[center]} variant="active" />
            </div>

            {/* Right card */}
            <div className="flex-1 max-w-[260px] cursor-pointer" onClick={next}>
              <ServiceCard service={SERVICES[right]} variant="side" />
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="flex-shrink-0 w-11 h-11 rounded-full border border-neutral-300 text-neutral-500 flex items-center justify-center transition-all duration-200 hover:border-red-600 hover:text-red-500 z-10"
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
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-red-600"
                  : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
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

  return (
    <div
      className={`rounded-sm border transition-all duration-400 ${
        isActive
          ? "bg-white border-red-800/40 p-8 shadow-2xl  shadow-lg shadow-neutral-200 shadow-red-950/30 scale-105"
          : "bg-neutral-100 border-neutral-200 p-6 opacity-60 scale-95"
      }`}
    >
      {/* Icon */}
      <img
        src={service.icon}
        alt={service.title}
        className={`mb-4 transition-all duration-300 ${isActive ? "w-8 h-8" : "w-5 h-5"}`}
      />

      {/* Title */}
      <h3
        className={`font-serif font-bold mb-3 transition-all duration-300 ${isActive ? "text-neutral-900 text-2xl" : "text-neutral-600 text-lg"}`}
      >
        {service.title}
      </h3>

      {/* Description — only fully visible when active */}
      <p
        className={`text-sm leading-relaxed transition-all duration-300 ${isActive ? "text-neutral-500" : "text-neutral-400 line-clamp-2"}`}
      >
        {service.desc}
      </p>

      {isActive && (
        <button className="mt-6 text-xs tracking-[0.12em] uppercase text-red-500  py-2.5 rounded-sm transition-all duration-200 hover:opacity-85">
          Μάθετε Περισσότερα
        </button>
      )}
    </div>
  );
}
