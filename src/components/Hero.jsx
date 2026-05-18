import { useState, useEffect } from "react";
import heroImg from "../assets/hero-bg.jpg";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-neutral-950/70" />

      {/* Red gradient accent — left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 via-transparent to-transparent" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Red vertical line accent */}
      <div
        className={`absolute left-[clamp(1.5rem,5vw,4rem)] top-[20%] bottom-[20%] w-[2px] bg-gradient-to-b from-transparent via-red-600 to-transparent transition-opacity duration-1000 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-16 pl-12 md:pl-20">
        {/* Eyebrow */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="w-7 h-px bg-red-600" />
          <span className="text-red-500 text-xs tracking-[0.25em] uppercase font-light">
            Ασφαλιστικός Σύμβουλος · Interamerican
          </span>
        </div>

        {/* Name */}
        <h1
          className={`font-serif text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ραφαήλ Ι. <span className="text-red-600">Σιμητός</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-white/55 text-base md:text-lg leading-relaxed max-w-md mb-10 font-light transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Δεν πιστεύω σε γενικές λύσεις. Κάθε στρατηγική ασφάλισης σχεδιάζεται
          αποκλειστικά για εσάς.
        </p>

        {/* CTAs */}
        <div
          className={`flex gap-4 flex-wrap transition-all duration-700 delay-[650ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="text-white text-xs tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-red-950/40"
            style={{ background: "linear-gradient(135deg, #c8141e, #8b0000)" }}
          >
            Επικοινωνήστε μαζί μου
          </button>

          <button
            onClick={() => scrollTo("#services")}
            className="text-white/80 text-xs tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm border border-white/20 transition-all duration-200 hover:border-red-600 hover:text-white"
          >
            Υπηρεσίες
          </button>
        </div>
      </div>
    </section>
  );
}
