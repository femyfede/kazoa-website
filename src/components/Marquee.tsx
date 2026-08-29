const words = [
  "BOQ",
  "MKATABA",
  "UBORA",
  "USALAMA",
  "VIPIMO",
  "STRUCTURAL",
  "FINISHING",
  "MAWASILIANO",
  "GHARAMA",
  "MAKABIDHIANO",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-[#dcdcdc] bg-[#e8e8e8] py-5">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {words.map((w, i) => (
              <span key={i} className="flex items-center">
                <span className="px-8 text-lg sm:text-xl font-semibold tracking-widest text-[#444444]">
                  {w}
                </span>
                <span className="text-[#8a8a8a]">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


