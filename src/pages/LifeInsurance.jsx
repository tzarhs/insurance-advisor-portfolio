import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const INSURANCE_PRODUCTS = [
  {
    title: "Ασφάλιση Ζωής",
    desc: "Σε περίπτωση πρόωρης απώλειας ζωής, 5 διαφορετικές επιλογές Ασφάλισης Ζωής εξασφαλίζουν το μέλλον και την ποιότητα ζωής των αγαπημένων σας.",
  },
  {
    title: "Ασφάλιση Εισοδήματος",
    desc: "Σε περίπτωση απώλειας εισοδήματος, λόγω ασθένειας ή ατυχήματος, 4 διαφορετικές επιλογές Ασφάλισης Εισοδήματος εξασφαλίζουν οτι εσείς και οι αγαπημένοι σας θα διατηρήσετε την ποιότητα ζωής σας.",
  },
];

const EXTRA_SERVICES = [
  {
    title: "Άμεση Ιατρική Βοήθεια 24/7",
    desc: "Με ένα τηλεφώνημα στην 24ωρη Γραμμή Υγείας 1010, είμαστε δίπλα σας, 24 ώρες το 24ωρο. Με τα ιδιόκτητα ασθενοφόρα, ελικόπτερα και αεροπλάνα μας, αναλαμβάνουμε την υπεύθυνη μεταφορά σας στο κοντινότερο νοσοκομείο.",
    icon: "🚑",
  },
  {
    title: "Αθηναϊκή Mediclinic",
    desc: "Η υπερσύγχρονη Γενική Κλινική της Interamerican, διαθέτει όλες τις ιατρικές ειδικότητες και εξασφαλίζει υψηλής ποιότητας υπηρεσίες πρωτοβάθμιας και δευτεροβάθμιας φροντίδας.",
    icon: "🏥",
  },
  {
    title: "Πολυϊατρεία Medifirst",
    desc: "Οι 3 σύγχρονες ιατρικές μονάδες πρωτοβάθμιας φροντίδας της Interamerican λειτουργούν 24/7 και παρέχουν υψηλής ποιότητας υπηρεσίες πρόληψης, διάγνωσης και θεραπείας.",
    icon: "🩺",
  },
  {
    title: "Καλύτερη Ζωή",
    desc: "Σας προσφέρουμε μοναδικά προνόμια και αποκλειστικές προσφορές διατροφής και άσκησης, σε συνεργασία με κορυφαία brands.",
    icon: "✨",
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
      className={`group block bg-white border border-neutral-200 rounded-sm p-5 md:p-8 transition-all duration-500 hover:border-red-300 hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-serif text-lg md:text-xl text-neutral-900 font-bold mb-3 group-hover:text-red-700 transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed">
            {product.desc}
          </p>
        </div>
        {/* <div className="flex-shrink-0 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-200 mt-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-400 group-hover:text-white transition-colors duration-200"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div> */}
      </div>
      <div className="mt-5 md:mt-6 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
    </a>
  );
}

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <a
      ref={ref}
      href={service.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white border border-neutral-400 rounded-sm p-5 md:p-6 transition-all duration-500 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="text-2xl mb-3 md:mb-4">{service.icon}</div>
      <h3 className="font-serif text-base md:text-lg text-black font-bold mb-2 group-hover:text-red-600 transition-colors duration-200">
        {service.title}
      </h3>
      <p className="text-black/50 text-sm transition-colors leading-relaxed">
        {service.desc}
      </p>
      {/* <div className="mt-4 md:mt-5 flex items-center gap-2 text-red-500 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Μάθετε Περισσότερα
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
      </div> */}
    </a>
  );
}

export default function LifeInsurance() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const extrasRef = useRef(null);
  const extrasInView = useInView(extrasRef);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-neutral-800 pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-950/30 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          {/* Back button */}
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

          <div
            className={`flex items-center gap-3 mb-5 md:mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="w-7 h-px bg-red-600" />
            <span className="text-red-500 text-[0.65rem] md:text-xs tracking-[0.25em] uppercase">
              Interamerican · Ασφάλειες
            </span>
          </div>

          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-7xl text-white font-bold leading-tight mb-5 md:mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Ζωή &<br />
            <span className="text-red-600">Εισόδημα</span>
          </h1>

          <p
            className={`text-xl sm:text-2xl md:text-3xl text-white/70 font-serif mb-5 md:mb-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Εξασφαλίστε ένα ξέγνοιαστο μέλλον!
          </p>

          <p
            className={`text-white/50 text-sm md:text-base leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Με την Ασφάλεια Ζωής και Εισοδήματος της Interamerican, εσείς και οι
            αγαπημένοι σας απολαμβάνετε την ζωή, χωρίς να ανησυχείτε για τις
            αντιξοότητες του μέλλοντος.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-black py-16 md:py-20 px-5 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <div className="w-7 h-px bg-red-600" />
            <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
              Προστατέψτε εσάς και την οικογένειά σας
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {INSURANCE_PRODUCTS.map((p, i) => (
              <ProductCard key={p.title} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section
        ref={extrasRef}
        className="bg-white py-16 md:py-20 px-5 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-10 md:mb-12 transition-all duration-700 ${extrasInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-red-600" />
              <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
                Μοναδικές Παροχές & Υπηρεσίες
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl text-neutral-800 font-bold max-w-xl leading-snug">
              Και για την <span className="text-red-500">υγεία</span> σας
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed mt-4 max-w-2xl">
              Με την Ασφάλεια Ζωής & την Ασφάλεια Εισοδήματος αποκτάτε πρόσβαση
              σε ένα σύνολο προϊόντων, υπηρεσιών, αποκλειστικών παροχών και
              μοναδικών προνομίων. Έτσι, μπορείτε να βελτιώσετε την ποιότητα
              ζωής σας και να φροντίσετε ολιστικά την ευημερία σας!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXTRA_SERVICES.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-neutral-950 py-12 md:py-16 px-5 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
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
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
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
