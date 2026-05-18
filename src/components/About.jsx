import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/rafail.jpg";

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-white py-24 md:py-36 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Photo */}
        <div
          className={`relative transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          {/* Photo frame */}
          <div className="relative aspect-[5/5] rounded-sm overflow-hidden">
            <img
              src={aboutImg}
              alt="Rafail Simitos"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle red overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent" />
          </div>
        </div>

        {/* Right: Text */}
        <div
          className={`transition-all duration-700 delay-150 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-red-600" />
            <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
              Σχετικά με μένα
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-950 font-bold leading-tight mb-6">
            Αναλυτική σκέψη.
            <br />
            <span className="text-red-600">Εξατομικευμένες</span> λύσεις.
          </h2>

          {/* Bio */}
          <p className="text-neutral-500 text-[0.95rem] leading-relaxed mb-5">
            Ως Ασφαλιστικός Σύμβουλος στην{" "}
            <span className="text-red-500 font-medium">Interamerican</span>, δεν
            πιστεύω σε γενικές λύσεις. Εστιάζω στον εντοπισμό κινδύνων, στη
            βελτιστοποίηση καλύψεων και στη δημιουργία στρατηγικών που έχουν
            πραγματικό νόημα για τον τρόπο ζωής και τα περιουσιακά στοιχεία κάθε
            πελάτη.
          </p>

          <p className="text-neutral-500 text-[0.95rem] leading-relaxed mb-10">
            Κάτοχος προπτυχιακού{" "}
            <span className="text-neutral-700 font-medium">
              Εφαρμοσμένης Πληροφορικής και Πληροφοριακών Συστημάτων
            </span>{" "}
            από το Πανεπιστήμιο Μακεδονίας — συνδυάζω επιχειρηματική γνώση με
            αναλυτική και τεχνική εξειδίκευση στη διαχείριση δεδομένων.
          </p>

          {/* Divider */}
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-neutral-400 text-xs tracking-[0.1em] uppercase mb-1">
              Εξουσιοδοτημένος Αντιπρόσωπος
            </p>
            <p className="text-neutral-500 text-sm font-medium tracking-wide">
              Interamerican · Θεσσαλονίκη
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
