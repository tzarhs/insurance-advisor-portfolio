import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import check from "../assets/check.svg";

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.12 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const PRODUCTS = [
  {
    label: "Ασφάλιση Κατοικίας",
    title: "Κύριας Κατοικίας",
    desc: "Ολοκληρωμένη προστασία για την κύρια κατοικία σας από κάθε σημαντικό κίνδυνο.",
    icon: "🏠",
  },
  {
    label: "Ασφάλιση Κατοικίας",
    title: "Εξοχικής Κατοικίας",
    desc: "Σύγχρονα προγράμματα ασφάλισης εξοχικής κατοικίας ανάλογα με τις ανάγκες σας.",
    icon: "🏡",
  },
  {
    label: "Ασφάλιση Κατοικίας",
    title: "Ενυπόθηκης Κατοικίας",
    desc: "Ειδικά σχεδιασμένο πρόγραμμα για εσάς που αποκτήσατε την κατοικία σας με δάνειο.",
    icon: "🔑",
  },
  {
    label: "Ασφάλιση Κατοικίας",
    title: "Μέλη Π.ΟΜ.ΙΔ.Α.",
    desc: "Πρωτοποριακά προγράμματα σε συνεργασία με την Π.ΟΜ.ΙΔ.Α. ειδικά για τα μέλη της.",
    icon: "🤝",
  },
  {
    label: "Ασφάλιση Κατοικίας",
    title: "my interamerican",
    desc: "Διαχειριστείτε online το συμβόλαιό σας 24 ώρες το 24ωρο.",
    icon: "💻",
  },
  {
    label: "Ασφάλιση Κατοικίας",
    title: "Άρθρα για το σπίτι",
    desc: "Διαβάστε χρήσιμα άρθρα για το σπίτι και το εξοχική κατοικία μέσα από το blog μας.",
    icon: "📖",
  },
];

const REASONS = [
  "Τα ακραία καιρικά φαινόμενα έχουν αυξηθεί, λόγω της κλιματικής αλλαγής.",
  "Εξασφαλίζει κάλυψη από πολλούς και συνηθισμένους κινδύνους, με προσιτό κόστος.",
  "Έχετε επενδύσει οικονομικά και συναισθηματικά και σε περίπτωση αναπάντεχου περιστατικού θα είναι και πάλι όπως και πριν.",
  "Σε περίπτωση στεγαστικού δανείου η ασφάλιση είναι υποχρεωτική, αλλά η επιλογή της ασφαλιστικής εταιρίας είναι δική σας απόφαση.",
];

const HIGHLIGHTS = [
  {
    icon: check,
    text: "Άμεση υποστήριξη με απλές διαδικασίες και εξειδικευμένους ανθρώπους",
  },
  {
    icon: check,
    text: "Ευελιξία προγραμμάτων με ποιότητα καλύψεων και προσιτά ασφάλιστρα",
  },
  {
    icon: check,
    text: "Σιγουριά & αξιοπιστία με την εγγύηση της Interamerican",
  },
];

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <a
      ref={ref}
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white border border-neutral-200 rounded-sm p-5 md:p-7 transition-all duration-500 hover:border-red-300 hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="text-2xl mb-3 md:mb-4">{product.icon}</div>
      <p className="text-red-500 text-[0.65rem] tracking-[0.2em] uppercase mb-1">
        {product.label}
      </p>
      <h3 className="font-serif text-base md:text-lg text-neutral-900 font-bold mb-2 group-hover:text-red-700 transition-colors duration-200">
        {product.title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{product.desc}</p>
      <div className="mt-4 md:mt-5 flex items-center gap-2 text-red-600 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Δείτε περισσότερα
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
      <div className="mt-3 md:mt-4 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
    </a>
  );
}

export default function HomeInsurance() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const productsRef = useRef(null);
  const productsInView = useInView(productsRef);
  const reasonsRef = useRef(null);
  const reasonsInView = useInView(reasonsRef);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-neutral-800 pt-24 md:pt-32 pb-24 md:pb-32 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-950/30 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-950/15 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          {/* Back */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-10 md:mb-12 hover:text-white/70 transition-colors duration-200 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Επιστροφή
          </button>

          <div className="flex flex-col gap-10 md:gap-12 items-center">
            <div>
              <div
                className={`flex items-center gap-3 mb-5 md:mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="w-7 h-px bg-red-600" />
                <span className="text-red-500 text-[0.65rem] md:text-xs tracking-[0.25em] uppercase">
                  Interamerican · Προϊόντα & Υπηρεσίες
                </span>
              </div>

              <h1
                className={`font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-5 md:mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Ασφάλιση
                <br />
                <span className="text-red-600">Κατοικίας</span>
              </h1>

              <p
                className={`text-white/50 text-sm md:text-base leading-relaxed mb-8 md:mb-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Στην Interamerican γνωρίζουμε καλά ότι το σπίτι σας είναι μέρος
                της ζωής σας. Είναι η επιθυμία που γίνεται πράξη και το
                καταφύγιο που έχετε στεγάσει όλα τα όνειρά σας. Γι' αυτό αξίζει
                να το προστατεύετε!
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.text}
                    className="flex flex-row items-center text-center gap-3 bg-white/5 border border-white/8 rounded-sm px-4 py-5 md:py-6"
                  >
                    <img
                      src={h.icon}
                      alt={h.text}
                      className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0"
                    />
                    <p className="text-white/60 text-xs leading-relaxed text-left">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section
        ref={productsRef}
        className="bg-black py-16 md:py-20 px-5 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-10 md:mb-12 transition-all duration-700 ${productsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-px bg-red-600" />
              <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
                Προγράμματα
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl text-white font-bold">
              Για να ζείτε ασφαλέστερα,
              <br />
              <span className="text-red-600">περισσότερο και καλύτερα</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.title} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why insure */}
      <section
        ref={reasonsRef}
        className="bg-white py-16 md:py-20 px-5 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-10 md:mb-12 transition-all duration-700 ${reasonsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-3 mb-4"></div>
            <h2 className="font-serif text-2xl md:text-4xl text-neutral-800 font-bold">
              Γιατί να ασφαλίσω
              <span className="text-red-500"> την κατοικία μου;</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {REASONS.map((reason, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 bg-neutral-300 border border-neutral-300 rounded-sm p-5 md:p-6 transition-all duration-500 ${
                  reasonsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                  style={{
                    background: "linear-gradient(135deg, #c8141e, #8b0000)",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-black/80 text-sm leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-neutral-950 py-12 md:py-16 px-5 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          <div>
            <p className="text-white/50 text-xs tracking-widest uppercase mb-2">
              Επικοινωνήστε μαζί μου
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-white font-bold">
              Έτοιμοι να ξεκινήσουμε;
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-fit md:w-auto">
            <a
              href="tel:+306985084708"
              className="text-white text-xs tracking-[0.1em] uppercase px-6 py-3 rounded-sm text-center transition-all duration-200 hover:opacity-85"
              style={{
                background: "linear-gradient(135deg, #c8141e, #8b0000)",
              }}
            >
              📞 698 508 4708
            </a>
            <button
              onClick={() => navigate("/#contact")}
              className="text-white/70 text-xs tracking-[0.1em] uppercase px-6 py-3 rounded-sm border border-white/15 transition-all duration-200 hover:border-red-600 hover:text-white"
            >
              Φόρμα Επικοινωνίας
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
