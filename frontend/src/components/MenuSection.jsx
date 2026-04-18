import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MENU, MENU_TABS } from "../data/content";

export const MenuSection = () => {
  return (
    <section id="menu" data-testid="menu-section" className="scroll-mt-nav relative py-24 lg:py-32 bg-charred">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="overline text-[#E88D39] mb-4">The Pit</p>
            <h2 className="font-display text-5xl md:text-7xl text-[#F4EAE1] tracking-tight leading-none">The Menu</h2>
          </div>
          <p className="max-w-md text-[#B5A69B]">Smoked low and slow, rubbed by hand, served with pride. Prices in USD.</p>
        </div>

        <Tabs defaultValue={MENU_TABS[0].id} className="w-full">
          <TabsList
            data-testid="menu-tabs-list"
            className="flex flex-wrap h-auto gap-1 p-1 bg-[#231B18] border border-[#3A2A24] rounded-sm"
          >
            {MENU_TABS.map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                data-testid={`menu-tab-${t.id}`}
                className="uppercase tracking-[0.2em] text-[11px] px-4 py-2 data-[state=active]:bg-[#D84B20] data-[state=active]:text-white text-[#B5A69B] rounded-sm"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {MENU_TABS.map((t) => (
            <TabsContent key={t.id} value={t.id} className="mt-12">
              <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
                {MENU[t.id].map((item, idx) => (
                  <div key={idx} data-testid={`menu-item-${t.id}-${idx}`} className="group">
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 className="font-display text-2xl text-[#F4EAE1] tracking-tight">{item.name}</h3>
                      <span className="flex-1 border-b border-dashed border-[#3A2A24] translate-y-[-4px]" />
                      <span className="font-display text-2xl text-[#E88D39]">${item.price}</span>
                    </div>
                    <p className="text-[#B5A69B] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
