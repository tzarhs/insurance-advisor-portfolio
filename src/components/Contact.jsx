import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const INFO_CARDS = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "ΤΟΠΟΘΕΣΙΑ",
    value: "Θεσσαλονίκη",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.79a16 16 0 006.29 6.29l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "ΤΗΛΕΦΩΝΟ",
    value: "698 508 4708",
    href: "tel:+306985084708",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "EMAIL",
    value: "simitosr@agency.interamerican.gr",
    href: "mailto:simitosr@agency.interamerican.gr",
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24 px-5 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Info cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-20">
          {INFO_CARDS.map((card) => (
            <a
              key={card.label}
              href={card.href || undefined}
              className="group flex flex-col items-center text-center bg-white border border-neutral-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-300"
              style={{ textDecoration: "none" }}
            >
              <div className="text-neutral-700 group-hover:text-red-600 transition-colors duration-200 mb-4">
                {card.icon}
              </div>
              <p className="text-neutral-900 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                {card.label}
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {card.value}
              </p>
              {card.sub && (
                <p className="text-neutral-400 text-xs mt-0.5">{card.sub}</p>
              )}
            </a>
          ))}
        </div>

        {/* Bottom: form + text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Right: text */}
          <div className="md:pt-2 order-first md:order-last">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-bold mb-4 leading-tight">
              Ας μιλήσουμε
            </h2>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6">
              Κάθε ερώτηση αξίζει μια ειλικρινή απάντηση. Επικοινωνήστε μαζί μου
              και ας βρούμε μαζί την κάλυψη που σας ταιριάζει.
            </p>
            <div className="w-12 h-0.5 bg-red-600" />

            <a
              href="https://www.linkedin.com/in/raphael-i-simitos-3b1485323/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-blue-800  transition-colors duration-200 group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="text-xs tracking-widest uppercase">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Left: form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 order-last md:order-first"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-neutral-600 text-xs font-semibold tracking-widest uppercase">
                  Όνομα
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Το όνομά σας"
                  className="bg-neutral-50 border-b border-neutral-300 px-0 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-red-500 transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-neutral-600 text-xs font-semibold tracking-widest uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="bg-neutral-50 border-b border-neutral-300 px-0 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-red-500 transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-600 text-xs font-semibold tracking-widest uppercase">
                Θέμα
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Θέμα μηνύματος"
                className="bg-neutral-50 border-b border-neutral-300 px-0 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-red-500 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-600 text-xs font-semibold tracking-widest uppercase">
                Μήνυμα
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Γράψτε το μήνυμά σας..."
                className="bg-neutral-50 border-b border-neutral-300 px-0 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-red-500 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 text-white text-xs tracking-[0.15em] uppercase px-8 py-3.5 rounded-2xl transition-all duration-200 hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed mt-2 w-fit min-w-[300px] mx-auto"
              style={{
                background: "linear-gradient(135deg, #c8141e, #8b0000)",
              }}
            >
              {status === "sending" ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Αποστολή...
                </>
              ) : (
                "Αποστολή"
              )}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm mt-1">
                ✓ Το μήνυμά σας εστάλη επιτυχώς!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm mt-1">
                Κάτι πήγε στραβά. Δοκιμάστε ξανά ή επικοινωνήστε τηλεφωνικά.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
