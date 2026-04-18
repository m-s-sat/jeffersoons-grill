import { Star, MapPin, ChevronDown } from "lucide-react";
import { RESTAURANT } from "../data/content";
import { useScrollY } from "../hooks/useScrollFx";

export const Hero = () => {
  const y = useScrollY();
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Parallax transforms — soft, tasteful
  const bgTranslate = Math.min(y * 0.35, 320);
  const bgScale = 1 + Math.min(y, 600) * 0.00025;
  const contentTranslate = Math.min(y * 0.18, 160);
  const contentOpacity = Math.max(0, 1 - y / 700);
  const rotation = y * 0.08; // rotating ember ring

  return (
    <section id="home" data-testid="hero-section" className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611354609291-69aba96e45df?w=1920&q=85')",
          transform: `translate3d(0, ${bgTranslate}px, 0) scale(${bgScale})`,
          transition: "transform 0.05s linear",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-[#14110F]" />

      {/* Rotating ember ring (decorative) */}
      <div
        aria-hidden
        className="absolute -right-40 sm:-right-56 -top-32 sm:-top-40 w-[480px] sm:w-[680px] h-[480px] sm:h-[680px] pointer-events-none will-change-transform opacity-60"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg viewBox="0 0 680 680" className="w-full h-full">
          <defs>
            <linearGradient id="emberRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D84B20" stopOpacity="0.0" />
              <stop offset="45%" stopColor="#E88D39" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#9E2A2B" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <circle cx="340" cy="340" r="320" fill="none" stroke="url(#emberRing)" strokeWidth="1.2" strokeDasharray="2 14" />
          <circle cx="340" cy="340" r="260" fill="none" stroke="url(#emberRing)" strokeWidth="1" strokeDasharray="1 8" />
          <circle cx="340" cy="340" r="200" fill="none" stroke="#E88D39" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="1 18" />
        </svg>
      </div>

      <div
        className="relative max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-10 pb-16 sm:pb-24 pt-32 will-change-transform"
        style={{ transform: `translate3d(0, ${-contentTranslate}px, 0)`, opacity: contentOpacity }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="overline text-[#E88D39]">Jackson, Mississippi</span>
          <span className="w-8 h-px bg-[#E88D39]/40" />
          <span className="overline text-[#B5A69B] hidden sm:inline">Est. 2024</span>
        </div>
        <h1 className="font-display text-[13vw] sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.88] tracking-tight text-[#F4EAE1] max-w-5xl">
          Slow-Smoked.<br />
          <span className="text-[#E88D39]">Southern-Soul.</span>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-xl text-[#B5A69B] text-sm sm:text-base md:text-lg leading-relaxed">
          Hickory, pecan, and a whole lot of patience. Jefferson's Grill serves honest barbecue pulled straight from the pit on Bailey Avenue.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            data-testid="hero-cta-reserve"
            onClick={() => go("reserve")}
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D84B20] hover:bg-[#b83d19] text-white uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[11px] sm:text-xs rounded-sm"
            style={{ transition: "background-color 0.2s ease" }}
          >
            Reserve a Table
          </button>
          <button
            data-testid="hero-cta-menu"
            onClick={() => go("menu")}
            className="px-6 sm:px-8 py-3.5 sm:py-4 border border-[#F4EAE1]/30 hover:border-[#F4EAE1] text-[#F4EAE1] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[11px] sm:text-xs rounded-sm"
            style={{ transition: "border-color 0.2s ease" }}
          >
            View Menu
          </button>
          <div className="flex items-center gap-2 text-[#F4EAE1]">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className={`w-4 h-4 ${i <= Math.round(RESTAURANT.rating) ? "fill-[#E88D39] text-[#E88D39]" : "text-[#7A6A60]"}`} />
              ))}
            </div>
            <span className="text-xs sm:text-sm tracking-wide">{RESTAURANT.rating} · {RESTAURANT.reviewCount} reviews</span>
          </div>
        </div>
        <div className="mt-10 sm:mt-16 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-[#B5A69B] text-xs sm:text-sm">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#D84B20]" /> {RESTAURANT.address}</div>
          <div>Dine-in · Takeaway</div>
          <div>{RESTAURANT.priceRange} per person</div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => go("menu")}
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#B5A69B] hover:text-[#E88D39] z-10 hidden sm:block"
        style={{ transition: "color 0.2s ease", opacity: Math.max(0, 1 - y / 300) }}
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};
