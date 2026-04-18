import { GALLERY } from "../data/content";
import { useReveal } from "../hooks/useScrollFx";

export const Gallery = () => {
  const [ref, visible] = useReveal(0.1);
  return (
    <section id="gallery" data-testid="gallery-section" ref={ref} className="scroll-mt-nav py-20 sm:py-24 lg:py-32 bg-charred border-t border-[#3A2A24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className={`mb-10 sm:mb-14 max-w-2xl transition-[opacity,transform] duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="overline text-[#E88D39] mb-4">From The Pit</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#F4EAE1] tracking-tight leading-none">Gallery</h2>
          <p className="mt-5 sm:mt-6 text-[#B5A69B] text-sm sm:text-base">Smoke rings, bark, glaze — the proof is in the plate.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[220px] gap-2 sm:gap-3">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`relative overflow-hidden group rounded-sm ${img.span} transition-[opacity,transform] duration-[900ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110"
                style={{ transition: "transform 0.8s ease" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
