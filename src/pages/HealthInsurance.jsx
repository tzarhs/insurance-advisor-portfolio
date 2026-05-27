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

const HIGHLIGHTS = [
  { icon: check, text: "Ιδιόκτητες υποδομές περίθαλψης" },
  { icon: check, text: "Επίγεια και εναέρια μέσα υγειονομικής μεταφοράς" },
  { icon: check, text: "Εκτεταμένο και πανελλαδικό Δίκτυο Υγείας" },
];

const SERVICES = [
  {
    icon: "👨‍⚕️",
    title: "Γιατροί, Διαγνωστικά Κέντρα & Νοσοκομεία",
    desc: "1.400+ γιατροί, όλων των ειδικοτήτων, 260+ σύγχρονα διαγνωστικά κέντρα, κορυφαία ιδιωτικά και όλα τα δημόσια νοσοκομεία είναι στη διάθεσή σας, σε όλη την Ελλάδα.",
  },
  {
    icon: "📱",
    title: "Έλεγχος Συμπτωμάτων Medi On App",
    desc: "Μέσω της εφαρμογής, ελέγχετε κάθε σύμπτωμα υγείας που σας ανησυχεί, λαμβάνετε ιατρική καθοδήγηση, τηλεφωνικά ή μέσω chat, και βρίσκετε κατάλληλο γιατρό ή διαγνωστικό κέντρο στην περιοχή σας.",
  },
  {
    icon: "🚑",
    title: "Άμεση Ιατρική Βοήθεια 24/7",
    desc: "Με ένα τηλεφώνημα στην 24ωρη Γραμμή Υγείας 1010, είμαστε δίπλα σας, 24 ώρες το 24ωρο. Με τα ιδιόκτητα ασθενοφόρα, ελικόπτερα και αεροπλάνα μας, αναλαμβάνουμε την υπεύθυνη μεταφορά σας.",
  },
  {
    icon: "🔬",
    title: "Δεύτερη Ιατρική Γνώμη",
    desc: "Λαμβάνετε δεύτερη ιατρική γνώμη για θέματα διάγνωσης και θεραπείας, από το παγκόσμιο δίκτυο κορυφαίων γιατρών της Best Doctors, μέλος της Teladoc Health.",
  },
  {
    icon: "💊",
    title: "Προνόμια Νοσηλείας",
    desc: "Μειώνετε σημαντικά ή ακόμη και μηδενίζετε τη συμμετοχή σας στα έξοδα νοσηλείας σας, αξιοποιώντας τα Προνόμια Νοσηλείας της Interamerican.",
  },
  {
    icon: "✨",
    title: "Καλύτερη Ζωή",
    desc: "Σας προσφέρουμε μοναδικά προνόμια και αποκλειστικές προσφορές διατροφής και άσκησης, σε συνεργασία με κορυφαία brands.",
  },
  {
    icon: "🏨",
    title: "Αθηναϊκή Mediclinic",
    desc: "Η υπερσύγχρονη Γενική Κλινική της Interamerican, διαθέτει όλες τις ιατρικές ειδικότητες και εξασφαλίζει υψηλής ποιότητας υπηρεσίες πρωτοβάθμιας και δευτεροβάθμιας φροντίδας.",
  },
  {
    icon: "🩺",
    title: "Πολυϊατρεία Medifirst",
    desc: "Οι 3 σύγχρονες ιατρικές μονάδες λειτουργούν 365 μέρες τον χρόνο και παρέχουν υψηλής ποιότητας υπηρεσίες πρόληψης, διάγνωσης και θεραπείας για έκτακτα και τακτικά περιστατικά.",
  },
  {
    icon: "📞",
    title: "Ιατρικό Ιστορικό Μέσω Τηλεφώνου",
    desc: "Ολοκληρώστε την αίτησή σας απαντώντας τηλεφωνικά σε ένα σύντομο ιατρικό ερωτηματολόγιο με τους έμπειρους νοσηλευτές μας, από χώρο και ώρα που σας εξυπηρετεί.",
  },
];

function ServiceCard({ service, index, inView }) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-sm p-4 md:p-6 transition-all duration-500 hover:border-red-300 hover:shadow-lg hover:shadow-red-50 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className="text-2xl mb-3 md:mb-4">{service.icon}</div>
      <h3 className="font-serif text-base md:text-lg text-neutral-900 font-bold mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{service.desc}</p>
      <div className="mt-4 md:mt-5 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function HealthInsurance() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef);
  const bewellRef = useRef(null);
  const bewellInView = useInView(bewellRef);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-neutral-800 pt-24 md:pt-32 pb-12 md:pb-18 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-950/30 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-red-950/15 blur-[100px] pointer-events-none" />

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

          <div className="flex flex-col gap-8 md:gap-12 items-center">
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
                className={`font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Ασφάλεια
                <br />
                <span className="text-red-600">Υγείας</span>
              </h1>

              <p
                className={`font-serif text-lg md:text-xl text-white/60 mb-5 md:mb-6 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Η υγεία σας, προτεραιότητά μας
              </p>

              <p
                className={`text-white/50 text-sm leading-relaxed mb-7 md:mb-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Στην Interamerican προτεραιότητά μας είναι να ενισχύσουμε και να
                διαφυλάξουμε την καλή υγεία σας, για να ζείτε ξέγνοιαστα και με
                ασφάλεια κάθε στιγμή!
              </p>

              {/* Highlights + badge */}
              <div
                className={`flex flex-col gap-3 md:gap-4 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  {HIGHLIGHTS.map((h) => (
                    <div
                      key={h.text}
                      className="flex flex-row items-center gap-3 bg-white/5 border border-white/8 rounded-sm px-4 py-4 md:py-6"
                    >
                      <img
                        src={h.icon}
                        alt={h.text}
                        className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0"
                      />
                      <p className="text-white/60 text-xs leading-relaxed">
                        {h.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="inline-flex items-center gap-3 border border-red-800/40 rounded-sm px-4 py-2 self-start"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(200,20,30,0.1), rgba(139,0,0,0.05))",
                  }}
                >
                  <span className="text-red-400 text-lg font-serif font-bold">
                    20%*
                  </span>
                  <p className="text-white/50 text-xs">
                    Οικογενειακές εκπτώσεις στην ασφάλεια υγείας σας
                  </p>
                </div>
              </div>

              <p className="text-neutral-400 text-xs mt-6 md:mt-8 leading-relaxed max-w-2xl">
                * Το ποσοστό της έκπτωσης καθορίζεται με βάση την επιλογή του
                προγράμματος ασφάλισης καθώς και το σύνολο των ασφαλισμένων ανά
                συμβόλαιο.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bewell System */}
      <section
        ref={bewellRef}
        className="bg-neutral-900 py-16 md:py-20 px-5 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${bewellInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4"></div>
              <h2 className="font-serif text-2xl md:text-4xl text-white font-bold mb-4 md:mb-5">
                Σύστημα Υγείας <span className="text-red-600">Bewell</span>
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-5 md:mb-6">
                Δημιουργήστε ένα ενιαίο συμβόλαιο για ολόκληρη την οικογένειά
                σας, με όσα έχει πραγματικά ανάγκη το κάθε μέλος της. Ρυθμίστε
                το ύψος των καλύψεων, το όριο συμμετοχής και τις πρόσθετες
                παροχές που σας προσφέρει η Interamerican.
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Με την ασφάλεια υγείας Bewell αποκτάτε πρόσβαση σε ένα σύνολο
                προϊόντων, υπηρεσιών, αποκλειστικών παροχών και μοναδικών
                προνομίων που ξεπερνά την παραδοσιακή έννοια της ασφάλισης.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { num: "1.400+", label: "Γιατροί όλων των ειδικοτήτων" },
                { num: "260+", label: "Σύγχρονα διαγνωστικά κέντρα" },
                { num: "24/7", label: "Γραμμή Υγείας 1010" },
                { num: "365", label: "Μέρες λειτουργίας Medifirst" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 md:p-5"
                >
                  <div className="font-serif text-2xl md:text-3xl text-red-600 font-bold mb-1">
                    {s.num}
                  </div>
                  <div className="text-neutral-800 text-xs leading-relaxed">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gradient bridge */}
      <div className="h-20 bg-gradient-to-b from-white to-neutral-50" />

      {/* Services grid */}
      <section
        ref={servicesRef}
        className="bg-neutral-50 py-16 md:py-20 px-5 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-10 md:mb-12 transition-all duration-700 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-red-600" />
              <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
                Μοναδικές Παροχές & Υπηρεσίες
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl text-neutral-900 font-bold">
              Ό,τι χρειάζεστε,
              <br />
              <span className="text-red-600">όπου κι αν βρίσκεστε</span>
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
