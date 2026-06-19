import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/rafail.webp";

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
          <div aria-hidden="true" className="flex items-center gap-3 mb-5">
            <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
              Σχετικα με εμενα
            </span>
          </div>

          {/* id matches aria-labelledby on <section> */}
          <h2
            id="about-heading"
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-neutral-950 font-bold leading-tight mb-5"
          >
            Η σωστή ασφάλιση
            <br />
            <span className="text-red-600"> δεν ξεκινά</span> από ένα συμβόλαιο.
          </h2>

          <p className="text-neutral-700 text-sm sm:text-[0.95rem] leading-relaxed mb-5">
            Ξεκινά από την κατανόηση των ανθρώπων, των στόχων τους και των
            κινδύνων που μπορεί να απειλήσουν όσα έχουν χτίσει.
          </p>
          <p className="text-neutral-700 text-sm sm:text-[0.95rem] leading-relaxed mb-5">
            Ως Ασφαλιστικός Σύμβουλος της{" "}
            <span className="text-red-600 font-medium">Interamerican</span>,
            προσεγγίζω κάθε περίπτωση με αναλυτική σκέψη και στρατηγική λογική.
            Δεν πιστεύω στις τυποποιημένες λύσεις ούτε στις γενικές προτάσεις.
            Κάθε άνθρωπος, κάθε οικογένεια και κάθε επιχείρηση έχει διαφορετικές
            ανάγκες και αξίζει μια προσέγγιση σχεδιασμένη ειδικά για εκείνον.
          </p>

          <p className="text-neutral-700 text-[0.95rem] leading-relaxed mb-5">
            Απόφοιτος του Τμήματος Εφαρμοσμένης Πληροφορικής του Πανεπιστημίου
            Μακεδονίας, συνδυάζω επιχειρηματική αντίληψη, τεχνολογική γνώση και
            ανάλυση δεδομένων, ώστε να αξιολογώ αποτελεσματικά τους κινδύνους
            και να προτείνω λύσεις με πραγματική αξία.
          </p>
          <p className="text-neutral-700 text-[0.95rem] leading-relaxed mb-5">
            Ως μέλος ενός ασφαλιστικού γραφείου με ιστορία άνω των 40 ετών στην
            Interamerican και με την υποστήριξη ενός δικτύου εξειδικευμένων
            συνεργατών, μπορώ να προσφέρω ολοκληρωμένες λύσεις που καλύπτουν
            κάθε πτυχή της προσωπικής και επαγγελματικής προστασίας.
          </p>
          <p className="text-neutral-700 text-[0.95rem] leading-relaxed font-medium mb-5">
            Γιατί η πραγματική αξία της ασφάλισης δεν βρίσκεται στο συμβόλαιο.
          </p>
          <p className="text-red-700 text-[0.95rem] leading-relaxed mb-5">
            Βρίσκεται στο να γνωρίζεις ότι ό,τι κι αν συμβεί, έχεις προβλέψει το
            επόμενο βήμα, είναι μια στρατηγική απόφαση που προστατεύει το παρόν
            και διασφαλίζει το μέλλον.
          </p>

          <div className="border-t border-neutral-200 pt-4">
            <p className="text-neutral-400 text-xs tracking-[0.1em] uppercase mb-1">
              Εξουσιοδοτημενος Αντιπροσωπος
            </p>
            <p className="text-neutral-500 text-sm font-medium tracking-wide">
              Interamerican · Θεσσαλονικη
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
