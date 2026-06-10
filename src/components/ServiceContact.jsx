import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ServiceContact() {
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
    <section className="bg-white py-16 md:py-24 px-5 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-red-500 text-xs tracking-[0.25em] uppercase">
                Επικοινωνία
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-bold leading-tight mb-4">
              Είστε έτοιμοι να
              <br />
              <span className="text-red-600">ξεκινήσουμε;</span>
            </h2>
            <p className="text-neutral-800 text-sm md:text-base leading-relaxed mb-8">
              Συμπληρώστε τη φόρμα και θα επικοινωνήσω μαζί σας το συντομότερο
              για να βρούμε την κάλυψη που σας ταιριάζει.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+306985084708"
                className="flex items-center gap-3 text-neutral-800 hover:text-red-500 transition-colors duration-200"
              >
                <div className="w-9 h-9 flex-shrink-0 rounded-sm border border-black flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.79a16 16 0 006.29 6.29l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <span className="text-sm">698 508 4708</span>
              </a>
              <a
                href="mailto:simitosr@agency.interamerican.gr"
                className="flex items-center gap-3 text-neutral-800 hover:text-red-500 transition-colors duration-200"
              >
                <div className="w-9 h-9 flex-shrink-0 rounded-sm border border-black flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
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
                </div>
                <span className="text-sm">
                  simitosr@agency.interamerican.gr
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
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
                rows={4}
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
              <p className="text-green-600 text-sm text-center mt-1">
                ✓ Το μήνυμά σας εστάλη επιτυχώς!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center mt-1">
                Κάτι πήγε στραβά. Δοκιμάστε ξανά ή επικοινωνήστε τηλεφωνικά.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
