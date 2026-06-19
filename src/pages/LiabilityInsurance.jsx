import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import check from "../assets/check.svg";
import Contact from "../components/Contact";
import ServiceContact from "../components/ServiceContact";

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
    text: "Σιγουριά & Αξιοπιστία με την εγγύηση της Interamerican",
  },
];

const LIABILITY_PRODUCTS = [
  {
    icon: "👨‍👩‍👧",
    label: "Ασφάλιση Αστικής Ευθύνης Ιδιώτη",
    title: "Οικογενειάρχη",
    desc: "Σύγχρονο πρόγραμμα ασφάλισης για εσάς και την οικογένειά σας.",
    href: "https://www.interamerican.gr/idiotes/proionta-ypiresies/asfaleia-astikis-loipes/astikis-euthinis-oikogeneiarchi",
  },
  {
    icon: "🏢",
    label: "Ασφάλιση Αστικής Ευθύνης Ιδιώτη",
    title: "Διαχειριστή",
    desc: "Ειδικά σχεδιασμένο για εσάς που είστε διαχειριστής.",
    href: "https://www.interamerican.gr/idiotes/proionta-ypiresies/asfaleia-astikis-loipes/astikhs-euthinh-diaxeiristh",
  },
  {
    icon: "💻",
    label: "Ασφάλιση Αστικής Ευθύνης Ιδιώτη",
    title: "my interamerican",
    desc: "Διαχειριστείτε Online το συμβόλαιό σας 24 ώρες το 24ωρο.",
    href: "https://my.interamerican.gr/",
  },
];

const LEGAL_PRODUCTS = [
  {
    icon: "👨‍👩‍👧",
    label: "Ασφάλιση Νομικής Προστασίας",
    title: "Νομική Προστασία Οικογένειας",
    desc: "Για να αισθάνεστε την ασφάλεια που χρειάζεστε.",
    href: "https://www.interamerican.gr/idiotes/proionta-ypiresies/asfaleia-astikis-loipes/nomikis-prostasias-oikogeneiarchi",
  },
  {
    icon: "🏘️",
    label: "Ασφάλιση Νομικής Προστασίας",
    title: "Νομική Προστασία Διαχειριστή Πολυκατοικίας",
    desc: "Για να έχετε εξειδικευμένη & αποτελεσματική προστασία.",
    href: "https://www.interamerican.gr/idiotes/proionta-ypiresies/asfaleia-astikis-loipes/nomikis-prostasias-diaxeiristi",
  },
  {
    icon: "💼",
    label: "Ασφάλιση Νομικής Προστασίας",
    title: "Νομική Προστασία Επαγγελματιών & Επιχειρήσεων",
    desc: "Για θέματα που πιθανόν να προκύψουν στη δουλειά σας.",
    href: "https://www.interamerican.gr/idiotes/proionta-ypiresies/asfaleia-astikis-loipes/nomikh-prostasia-epaggelmatia-kai-epixeirhshs/",
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
      className={`group block bg-white border border-neutral-200 rounded-sm shadow-xl p-5 md:p-7 transition-all duration-500 hover:border-red-300 hover:shadow-2xl hover:shadow-red-50 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* <div className="text-2xl mb-3 md:mb-4">{product.icon}</div> */}
      <p className="text-red-500 text-[0.65rem] tracking-[0.2em] uppercase mb-1">
        {product.label}
      </p>
      <h3 className="font-serif text-base md:text-lg text-neutral-900 font-bold mb-2 group-hover:text-red-700 transition-colors duration-200">
        {product.title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{product.desc}</p>
      <div className="mt-3 md:mt-4 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
    </a>
  );
}

export default function LiabilityInsurance() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const liabilityRef = useRef(null);
  const liabilityInView = useInView(liabilityRef);
  const legalRef = useRef(null);
  const legalInView = useInView(legalRef);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-neutral-800 pt-40 md:pt-52 pb-24 md:pb-32 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-950/30 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-950/15 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-10 md:gap-12 items-center">
            <div>
              <div
                className={`flex items-center gap-3 mb-5 md:mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <span className="text-red-500 text-[0.65rem] md:text-xs tracking-[0.25em] uppercase">
                  Interamerican · Προϊόντα & Υπηρεσίες
                </span>
              </div>

              <h1
                className={`font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-5 md:mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Αστική Ευθύνη &<br />
                <span className="text-red-600">Νομική Προστασία</span>
              </h1>

              <p
                className={`text-white/50 text-sm md:text-base leading-relaxed mb-8 md:mb-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Με τα προγράμματα ασφάλισης Αστικής Ευθύνης Ιδιώτη της
                Interamerican, μπορείτε να αισθάνεστε προστατευμένοι κάθε στιγμή
                από απρόβλεπτα γεγονότα που μπορεί να προκαλέσουν υλική ζημιά ή
                σωματική βλάβη σε τρίτους, στο πλαίσιο της καθημερινής σας
                δραστηριότητας.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.text}
                    className="flex flex-row items-center gap-3 bg-white/5 border border-white/8 rounded-sm px-4 py-5 md:py-6"
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

      {/* Liability Products */}
      <section
        ref={liabilityRef}
        className="bg-black py-16 md:py-20 px-5 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-10 md:mb-12 transition-all duration-700 ${liabilityInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
                Προγράμματα
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl text-white font-bold">
              Ασφάλιση Αστικής Ευθύνης
              <br />
              <span className="text-red-600">Ιδιώτη</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {LIABILITY_PRODUCTS.map((p, i) => (
              <ProductCard key={p.title} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Legal Products */}
      <section
        ref={legalRef}
        className="bg-neutral-100 py-16 md:py-20 px-5 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-10 md:mb-12 transition-all duration-700 ${legalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
                Προγράμματα
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl text-neutral-800 font-bold">
              Ασφάλιση Νομικής
              <span className="text-red-500"> Προστασίας</span>
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed mt-4 max-w-2xl">
              Είστε διαχειριστής ή θέλετε να προστατεύσετε εσάς και τα μέλη της
              οικογένειάς σας; Με τα προγράμματα Νομικής Προστασίας
              Interamerican εξασφαλίζετε κάλυψη δικαστικών ή εξώδικων δαπανών
              που απαιτούνται για να προστατεύσετε τα έννομα συμφέροντά σας.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {LEGAL_PRODUCTS.map((p, i) => (
              <ProductCard key={p.title} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <ServiceContact />
    </div>
  );
}
