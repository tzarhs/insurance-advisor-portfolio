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
    // aria-labelledby ties the section to its heading — screen readers
    // announce "Σχετικά με μένα, region" when entering this section
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      className="bg-white py-16 sm:py-20 md:py-36 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Photo */}
        <div
          className={`relative transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[5/5] rounded-sm overflow-hidden">
            {/* Descriptive alt text — who is in the photo and their role */}
            <img
              src={aboutImg}
              alt="Ραφαήλ Σιμητός, Ασφαλιστικός Σύμβουλος στην Interamerican"
              className="w-full h-full object-cover object-[50%_35%] sm:object-[50%_25%] md:object-[50%_60%]"
            />
            {/* Decorative overlay — hidden from screen readers */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div
          className={`transition-all duration-700 delay-150 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-0"
          }`}
        >
          {/* Eyebrow — decorative, hidden from screen readers to avoid
              reading "Σχετικά με μένα" twice (section label + heading) */}
          <div aria-hidden="true" className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-red-600" />
            <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
              Σχετικά με μένα
            </span>
          </div>

          {/* id matches aria-labelledby on <section> */}
          <h2
            id="about-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-950 font-bold leading-tight mb-6"
          >
            Αναλυτική σκέψη.
            <br />
            <span className="text-red-600">Εξατομικευμένες</span> λύσεις.
          </h2>

          <p className="text-neutral-500 text-sm sm:text-[0.95rem] leading-relaxed mb-5">
            Ως Ασφαλιστικός Σύμβουλος στην{" "}
            <span className="text-red-500 font-medium">Interamerican</span>, δεν
            πιστεύω σε γενικές λύσεις. Εστιάζω στον εντοπισμό κινδύνων, στη
            βελτιστοποίηση καλύψεων και στη δημιουργία στρατηγικών που έχουν
            πραγματικό νόημα για τον τρόπο ζωής και τα περιουσιακά στοιχεία κάθε
            πελάτη.
          </p>

          <p className="text-neutral-500 text-[0.95rem] leading-relaxed mb-10">
            Απόφοιτος του τμήματος{" "}
            <span className="text-neutral-700 font-medium">
              Εφαρμοσμένης Πληροφορικής
            </span>{" "}
            του Πανεπιστημίου Μακεδονίας — συνδυάζω επιχειρηματική γνώση με
            αναλυτική και τεχνική εξειδίκευση στη διαχείριση δεδομένων.
          </p>

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
