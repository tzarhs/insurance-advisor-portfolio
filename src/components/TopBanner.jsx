import { useState } from "react";

const MESSAGE = "25% έκπτωση στην ασφάλεια σεισμού μέχρι 21/07";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <>
      <style>{`
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    animation: marquee 40s linear infinite;
    white-space: nowrap;
  }
  @media (max-width: 768px) {
    .marquee-track {
      animation: marquee 12s linear infinite;
      font-size: 10px;
    }
  }
`}</style>

      <div className="relative z-[60] bg-red-700 overflow-hidden py-2.5">
        <div className="marquee-track text-white text-xs tracking-widest uppercase">
          {Array(40)
            .fill(`${MESSAGE}`)
            .join(" \u00A0\u00A0\u00A0\u00A0\u00A0 ")}
        </div>
      </div>
    </>
  );
}
