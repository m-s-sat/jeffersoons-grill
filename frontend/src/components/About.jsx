import { Flame, Clock, Utensils } from "lucide-react";

export const About = () => {
  return (
    <section id="about" data-testid="about-section" className="scroll-mt-nav py-24 lg:py-32 border-t border-[#3A2A24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1767346427054-d3a371e00f68?w=1200&q=85"
            alt="Warm cozy BBQ restaurant interior"
            className="w-full h-[520px] object-cover rounded-sm"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-[#D84B20] text-white p-6 w-48">
            <div className="font-display text-5xl leading-none">14H</div>
            <div className="text-xs uppercase tracking-[0.2em] mt-2">Brisket Smoke Time</div>
          </div>
        </div>
        <div>
          <p className="overline text-[#E88D39] mb-4">Our Story</p>
          <h2 className="font-display text-5xl md:text-6xl text-[#F4EAE1] tracking-tight leading-none">
            Fire, patience,<br /> and good people.
          </h2>
          <p className="mt-6 text-[#B5A69B] leading-relaxed">
            Jefferson's Grill was born from a backyard smoker, a stubborn passion for real barbecue, and a belief that good food brings neighbors to the table. From our pit on Bailey Avenue, we serve Memphis-style ribs, Texas-cut brisket, and Carolina pulled pork — all cooked the honest way.
          </p>
          <p className="mt-4 text-[#B5A69B] leading-relaxed">
            Every rub is mixed by hand. Every rack rests before it's cut. There are no shortcuts in smoke.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { icon: Flame, label: "Hickory Smoked", sub: "Every day, from 5am" },
              { icon: Clock, label: "Low & Slow", sub: "Up to 14 hours" },
              { icon: Utensils, label: "House-Made Sides", sub: "Cornbread & slaw daily" },
            ].map((f, i) => (
              <div key={i} className="p-5 border border-[#3A2A24] bg-[#1B1512] rounded-sm">
                <f.icon className="w-5 h-5 text-[#D84B20] mb-3" />
                <div className="font-display text-lg text-[#F4EAE1] tracking-tight">{f.label}</div>
                <div className="text-xs text-[#7A6A60] mt-1">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
