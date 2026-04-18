import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MENU, MENU_TABS } from "../data/content";

const PAGE_SIZE = 4;

export const MenuSection = () => {
  const [pages, setPages] = useState({});
  const getPage = (id) => pages[id] ?? 0;
  const setPage = (id, p) => setPages((prev) => ({ ...prev, [id]: p }));

  return (
    <section id="menu" data-testid="menu-section" className="scroll-mt-nav relative py-20 sm:py-24 lg:py-32 bg-charred">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 sm:mb-14">
          <div>
            <p className="overline text-[#E88D39] mb-4">The Pit</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#F4EAE1] tracking-tight leading-none">The Menu</h2>
          </div>
          <p className="max-w-md text-[#B5A69B] text-sm sm:text-base">Smoked low and slow, rubbed by hand, served with pride. Prices in USD.</p>
        </div>

        <Tabs defaultValue={MENU_TABS[0].id} className="w-full">
          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0 mb-2">
            <TabsList
              data-testid="menu-tabs-list"
              className="inline-flex w-max sm:w-full sm:flex-wrap h-auto gap-1 p-1 bg-[#231B18] border border-[#3A2A24] rounded-sm"
            >
              {MENU_TABS.map((t) => (
                <TabsTrigger
                  key={t.id}
                  value={t.id}
                  data-testid={`menu-tab-${t.id}`}
                  className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] px-3 sm:px-4 py-2 whitespace-nowrap data-[state=active]:bg-[#D84B20] data-[state=active]:text-white text-[#B5A69B] rounded-sm"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {MENU_TABS.map((t) => {
            const items = MENU[t.id];
            const total = items.length;
            const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
            const p = Math.min(getPage(t.id), totalPages - 1);
            const slice = totalPages > 1 ? items.slice(p * PAGE_SIZE, p * PAGE_SIZE + PAGE_SIZE) : items;

            return (
              <TabsContent key={t.id} value={t.id} className="mt-10 sm:mt-12">
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  {slice.map((item, idx) => (
                    <article
                      key={`${t.id}-${p}-${idx}`}
                      data-testid={`menu-item-${t.id}-${p * PAGE_SIZE + idx}`}
                      className="group flex gap-4 sm:gap-5 p-4 bg-[#1B1512]/60 border border-[#3A2A24] hover:border-[#D84B20]/60 rounded-sm"
                      style={{ transition: "border-color 0.25s ease" }}
                    >
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-sm">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105"
                          style={{ transition: "transform 0.5s ease" }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-1.5">
                          <h3 className="font-display text-xl sm:text-2xl text-[#F4EAE1] tracking-tight leading-tight">{item.name}</h3>
                          <span className="flex-1 border-b border-dashed border-[#3A2A24] translate-y-[-4px]" />
                          <span className="font-display text-xl sm:text-2xl text-[#E88D39]">${item.price}</span>
                        </div>
                        <p className="text-[#B5A69B] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div data-testid={`menu-pagination-${t.id}`} className="mt-10 flex items-center justify-center gap-3">
                    <button
                      data-testid={`menu-prev-${t.id}`}
                      onClick={() => setPage(t.id, Math.max(0, p - 1))}
                      disabled={p === 0}
                      className="p-2.5 border border-[#3A2A24] hover:border-[#D84B20] text-[#F4EAE1] disabled:opacity-40 disabled:hover:border-[#3A2A24] rounded-sm"
                      style={{ transition: "border-color 0.2s ease" }}
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        data-testid={`menu-page-${t.id}-${i}`}
                        onClick={() => setPage(t.id, i)}
                        className={`w-9 h-9 flex items-center justify-center rounded-sm text-xs uppercase tracking-widest ${
                          i === p ? "bg-[#D84B20] text-white" : "border border-[#3A2A24] text-[#B5A69B] hover:text-[#F4EAE1] hover:border-[#D84B20]"
                        }`}
                        style={{ transition: "color 0.2s ease, border-color 0.2s ease" }}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      data-testid={`menu-next-${t.id}`}
                      onClick={() => setPage(t.id, Math.min(totalPages - 1, p + 1))}
                      disabled={p === totalPages - 1}
                      className="p-2.5 border border-[#3A2A24] hover:border-[#D84B20] text-[#F4EAE1] disabled:opacity-40 disabled:hover:border-[#3A2A24] rounded-sm"
                      style={{ transition: "border-color 0.2s ease" }}
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};
