import { GALLERY } from "../data/content";

export const Gallery = () => {
  return (
    <section id="gallery" data-testid="gallery-section" className="scroll-mt-nav py-24 lg:py-32 bg-charred border-t border-[#3A2A24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="overline text-[#E88D39] mb-4">From The Pit</p>
          <h2 className="font-display text-5xl md:text-7xl text-[#F4EAE1] tracking-tight leading-none">Gallery</h2>
          <p className="mt-6 text-[#B5A69B]">Smoke rings, bark, glaze — the proof is in the plate.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`relative overflow-hidden group rounded-sm ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105"
                style={{ transition: "transform 0.6s ease" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
