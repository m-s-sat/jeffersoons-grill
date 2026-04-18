import { Star, Quote } from "lucide-react";
import { REVIEWS, RESTAURANT } from "../data/content";
import { useReveal } from "../hooks/useScrollFx";

export const ReviewsSection = () => {
  const [ref, visible] = useReveal(0.15);
  return (
    <section id="reviews" data-testid="reviews-section" ref={ref} className="scroll-mt-nav py-20 sm:py-24 lg:py-32 border-t border-[#3A2A24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-10 sm:gap-14 mb-12 sm:mb-16">
          <div className={`lg:col-span-2 transition-[opacity,transform] duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="overline text-[#E88D39] mb-4">Word of Mouth</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#F4EAE1] tracking-tight leading-none">Guests Are Talking.</h2>
          </div>
          <div className={`flex lg:justify-end items-end transition-[opacity,transform] duration-700 delay-100 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div>
              <div className="font-display text-6xl sm:text-7xl text-[#E88D39] leading-none">{RESTAURANT.rating}</div>
              <div className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= Math.round(RESTAURANT.rating) ? "fill-[#E88D39] text-[#E88D39]" : "text-[#7A6A60]"}`} />
                ))}
              </div>
              <div className="text-[#B5A69B] text-xs sm:text-sm mt-2">Based on {RESTAURANT.reviewCount} Google reviews</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              data-testid={`review-card-${i}`}
              className={`p-6 sm:p-8 bg-[#1B1512] border border-[#3A2A24] hover:border-[#D84B20]/60 rounded-sm transition-[opacity,transform,border-color] duration-[800ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#D84B20] mb-4" />
              <p className="text-[#F4EAE1] leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">"{r.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#3A2A24] gap-3">
                <div className="min-w-0">
                  <div className="font-display text-lg sm:text-xl tracking-tight text-[#F4EAE1] truncate">{r.name}</div>
                  <div className="text-[10px] sm:text-xs text-[#7A6A60] uppercase tracking-[0.18em] mt-1 truncate">{r.meta} · {r.date}</div>
                </div>
                <div className="flex items-center gap-0.5 flex-shrink-0">
                  {[1,2,3,4,5].map(j => (
                    <Star key={j} className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${j <= r.rating ? "fill-[#E88D39] text-[#E88D39]" : "text-[#7A6A60]"}`} />
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
