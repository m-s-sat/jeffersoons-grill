import { Star, MapPin } from "lucide-react";
import { RESTAURANT } from "../data/content";

export const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" data-testid="hero-section" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611354609291-69aba96e45df?w=1920&q=85')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#14110F]" />
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 pb-24 pt-32">
        <div className="flex items-center gap-3 mb-6">
          <span className="overline text-[#E88D39]">Jackson, Mississippi</span>
          <span className="w-8 h-px bg-[#E88D39]/40" />
          <span className="overline text-[#B5A69B]">Est. 2024</span>
        </div>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.88] tracking-tight text-[#F4EAE1] max-w-5xl">
          Slow-Smoked.<br />
          <span className="text-[#E88D39]">Southern-Soul.</span>
        </h1>
        <p className="mt-8 max-w-xl text-[#B5A69B] text-base md:text-lg leading-relaxed">
          Hickory, pecan, and a whole lot of patience. Jefferson's Grill serves honest barbecue pulled straight from the pit on Bailey Avenue.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            data-testid="hero-cta-reserve"
            onClick={() => go("reserve")}
            className="px-8 py-4 bg-[#D84B20] hover:bg-[#b83d19] text-white uppercase tracking-[0.25em] text-xs rounded-sm"
            style={{ transition: "background-color 0.2s ease" }}
          >
            Reserve a Table
          </button>
          <button
            data-testid="hero-cta-menu"
            onClick={() => go("menu")}
            className="px-8 py-4 border border-[#F4EAE1]/30 hover:border-[#F4EAE1] text-[#F4EAE1] uppercase tracking-[0.25em] text-xs rounded-sm"
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
            <span className="text-sm tracking-wide">{RESTAURANT.rating} · {RESTAURANT.reviewCount} reviews</span>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[#B5A69B] text-sm">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#D84B20]" /> {RESTAURANT.address}</div>
          <div>Dine-in · Takeaway</div>
          <div>{RESTAURANT.priceRange} per person</div>
        </div>
      </div>
    </section>
  );
};
