import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkIcon from "../assets/check.svg";

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
    icon: checkIcon,
    text: "Προγράμματα ασφάλισης με ποιότητα καλύψεων & προσιτά ασφάλιστρα",
  },
  { icon: checkIcon, text: "Αποζημίωση με ξεκάθαρους όρους ασφάλισης" },
  {
    icon: checkIcon,
    text: "Άμεση υποστήριξη με απλές διαδικασίες και εξειδικευμένους ανθρώπους",
  },
];

const PRODUCTS = [
  {
    icon: "🚗",
    label: "Ασφάλιση Οχημάτων",
    title: "Αυτοκινήτου",
    desc: "Διαφορετικά προγράμματα για να προσαρμόζετε την ασφάλεια στις δικές σας ανάγκες.",
  },
  {
    icon: "🏍️",
    label: "Ασφάλιση Οχημάτων",
    title: "Μηχανής",
    desc: "Τρεις διαφορετικές επιλογές ασφάλισης, ανάλογα με την προστασία που χρειάζεστε.",
  },
  {
    icon: "🚚",
    label: "Ασφάλιση Οχημάτων",
    title: "Φορτηγού",
    desc: "Διαφορετικές επιλογές ασφάλισης, για να επιλέξετε τον βαθμό κάλυψης που επιθυμείτε.",
  },
  {
    icon: "🚜",
    label: "Ασφάλιση Οχημάτων",
    title: "Αγροτικού Φορτηγού & Τρακτέρ",
    desc: "Επιλέξτε το πρόγραμμα που χρειάζεστε και προστατεύστε το εργαλείο της δουλειάς σας.",
  },
  {
    icon: "⛵",
    label: "Ασφάλιση Οχημάτων",
    title: "Σκάφους",
    desc: "Σύγχρονα προγράμματα ασφάλισης, για να επιλέξετε αυτό που ταιριάζει στις ανάγκες σας.",
  },
  {
    icon: "🔧",
    label: "Ασφάλιση Οχημάτων",
    title: "Οδικής Βοήθειας",
    desc: "Καλύψεις βλάβης ή ατυχήματος για το όχημά σας.",
  },
];

const SERVICES = [
  {
    icon: "📱",
    label: "Ασφάλιση Οχημάτων",
    title: "Drive On",
    desc: "Οποιαδήποτε στιγμή μας χρειαστείτε, ειδοποιήστε την Οδική Βοήθεια μέσω της πρωτοποριακής υπηρεσίας Drive On είτε από το site είτε από την εφαρμογή.",
  },
  {
    icon: "📞",
    label: "Ασφάλιση Οχημάτων",
    title: "Οδική Βοήθεια 1158",
    desc: "Όλες οι υπηρεσίες σε ένα τηλέφωνο. Κοντά σας παντού και πάντα για ό,τι σημαντικό χρειαστείτε.",
  },
  {
    icon: "🔩",
    label: "Ασφάλιση Οχημάτων",
    title: "Δίκτυο Επισκευής Οχημάτων",
    desc: "Άμεση και υπεύθυνη επισκευή του οχήματός σας σε ένα ευρύ και αξιόπιστο δίκτυο.",
  },
  {
    icon: "🏢",
    label: "Ασφάλιση Οχημάτων",
    title: "Car Point",
    desc: "Επισκευάστε το όχημά σας στις πρότυπες μονάδες αποζημίωσης και επισκευής οχημάτων.",
  },
  {
    icon: "🔍",
    label: "Ασφάλιση Οχημάτων",
    title: "Προασφαλιστικός Έλεγχος",
    desc: "Εύκολος & γρήγορος προασφαλιστικός έλεγχος από το κινητό σας, μέσω της υπηρεσίας VCS.",
  },
  {
    icon: "💻",
    label: "Ασφάλιση Οχημάτων",
    title: "my interamerican",
    desc: "Διαχειριστείτε online το συμβόλαιό σας 24 ώρες το 24ωρο.",
  },
  {
    icon: "📖",
    label: "Ασφάλιση Οχημάτων",
    title: "Άρθρα για Μετακίνηση & Ασφαλείς Διαδρομές",
    desc: "Διαβάστε χρήσιμα άρθρα για την ασφαλή μετακίνηση μέσα από το blog μας.",
  },
];

function ProductCard({ product, index, inView }) {
  return (
    <div
      className={`group bg-white border border-neutral-200 rounded-sm p-5 md:p-7 transition-all duration-500 hover:border-red-300 hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 ${
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
      <div className="mt-3 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

function ServiceCard({ service, index, inView }) {
  return (
    <a
      href={service.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white border border-neutral-200 rounded-sm p-4 md:p-6 transition-all duration-500 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="text-2xl mb-3 md:mb-4">{service.icon}</div>
      <p className="text-red-600 text-[0.65rem] tracking-[0.2em] uppercase mb-1">
        {service.label}
      </p>
      <h3 className="font-serif text-base md:text-lg text-neutral-800 font-bold mb-2 group-hover:text-red-600 transition-colors duration-200">
        {service.title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{service.desc}</p>
      <div className="mt-4 md:mt-5 flex items-center gap-2 text-red-500 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
      </div>
    </a>
  );
}
export default function VehicleInsurance() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const productsRef = useRef(null);
  const productsInView = useInView(productsRef);
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-neutral-900 pt-24 md:pt-32 pb-24 md:pb-32 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-red-950/30 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full bg-red-950/15 blur-[80px] pointer-events-none" />

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

          <div className="flex flex-col gap-8 md:gap-10">
            {/* Title + description */}
            <div>
              <div
                className={`flex items-center gap-3 mb-5 md:mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="w-7 h-px bg-red-600" />
                <span className="text-red-500 text-[0.65rem] md:text-xs tracking-[0.2em] uppercase">
                  Interamerican · Προϊόντα & Υπηρεσίες
                </span>
              </div>

              <h1
                className={`font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Ασφάλιση
                <br />
                <span className="text-red-600">Οχημάτων</span>
              </h1>

              <p
                className={`text-white/50 text-sm leading-relaxed max-w-xl transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Η ζωή μας είναι γεμάτη νέες διαδρομές. Στην Interamerican
                φροντίζουμε να είμαστε δίπλα σας και να αντιμετωπίζουμε μαζί τα
                αναπάντεχα περιστατικά που μπορεί να συμβούν στο όχημά σας, ώστε
                να συνεχίζετε με περισσότερη ασφάλεια και ηρεμία.
              </p>
            </div>

            {/* Highlights */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.text}
                  className="flex flex-row items-center gap-3 md:gap-4 bg-white/5 border border-white/8 rounded-sm px-4 md:px-5 py-4 md:py-5"
                >
                  <img
                    src={h.icon}
                    alt={h.text}
                    className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0"
                  />
                  <p className="text-white/60 text-xs leading-relaxed">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
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
              Οι επιλογές για να απολαμβάνετε
              <br className="hidden md:block" />
              <span className="text-red-600">
                {" "}
                ξέγνοιαστα τις διαδρομές σας
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {PRODUCTS.map((p, i) => (
              <ProductCard
                key={p.title}
                product={p}
                index={i}
                inView={productsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        ref={servicesRef}
        className="bg-neutral-100 py-16 md:py-20 px-5 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-10 md:mb-12 transition-all duration-700 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-red-600" />
              <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
                Υπηρεσίες
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl text-neutral-800 font-bold">
              Δίπλα σας για ό,τι χρειαστεί,
              <br className="hidden md:block" />
              <span className="text-red-500"> με μοναδικές υπηρεσίες</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.title}
                service={s}
                index={i}
                inView={servicesInView}
              />
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
