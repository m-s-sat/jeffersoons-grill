import { Star, Quote } from "lucide-react";
import { REVIEWS, RESTAURANT } from "../data/content";

export const ReviewsSection = () => {
  return (
    <section id="reviews" data-testid="reviews-section" className="scroll-mt-nav py-24 lg:py-32 border-t border-[#3A2A24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-14 mb-16">
          <div className="lg:col-span-2">
            <p className="overline text-[#E88D39] mb-4">Word of Mouth</p>
            <h2 className="font-display text-5xl md:text-7xl text-[#F4EAE1] tracking-tight leading-none">Guests Are Talking.</h2>
          </div>
          <div className="flex lg:justify-end items-end">
            <div>
              <div className="font-display text-7xl text-[#E88D39] leading-none">{RESTAURANT.rating}</div>
              <div className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= Math.round(RESTAURANT.rating) ? "fill-[#E88D39] text-[#E88D39]" : "text-[#7A6A60]"}`} />
                ))}
              </div>
              <div className="text-[#B5A69B] text-sm mt-2">Based on {RESTAURANT.reviewCount} Google reviews</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              data-testid={`review-card-${i}`}
              className="p-8 bg-[#1B1512] border border-[#3A2A24] hover:border-[#D84B20]/60 rounded-sm"
              style={{ transition: "border-color 0.25s ease" }}
            >
              <Quote className="w-6 h-6 text-[#D84B20] mb-4" />
              <p className="text-[#F4EAE1] leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#3A2A24]">
                <div>
                  <div className="font-display text-xl tracking-tight text-[#F4EAE1]">{r.name}</div>
                  <div className="text-xs text-[#7A6A60] uppercase tracking-[0.18em] mt-1">{r.meta} · {r.date}</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(j => (
                    <Star key={j} className={`w-3.5 h-3.5 ${j <= r.rating ? "fill-[#E88D39] text-[#E88D39]" : "text-[#7A6A60]"}`} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
