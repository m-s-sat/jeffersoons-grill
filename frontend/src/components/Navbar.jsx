import { useEffect, useState } from "react";
import { Menu, Flame, MapPin, Phone, Clock, Star } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { RESTAURANT } from "../data/content";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "reviews", label: "Reviews" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About" },
  { id: "visit", label: "Visit" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Active section tracking
      const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
      const offset = window.innerHeight * 0.35;
      let current = "home";
      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        if (rect.top <= offset) current = s.id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 120);
  };

  return (
    <nav
      data-testid="main-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        <button data-testid="brand-logo" onClick={() => go("home")} className="flex items-center gap-2.5 text-[#F4EAE1] flex-shrink-0">
          <Flame className="w-5 h-5 text-[#D84B20] flex-shrink-0" strokeWidth={2.2} />
          <span className="font-display text-xl sm:text-2xl tracking-tight whitespace-nowrap">Jefferson's Grill</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => go(l.id)}
              className={`relative text-[13px] uppercase tracking-[0.2em] transition-colors ${
                activeId === l.id ? "text-[#F4EAE1]" : "text-[#B5A69B] hover:text-[#F4EAE1]"
              }`}
              style={{ transition: "color 0.2s ease" }}
            >
              {l.label}
              <span
                className={`absolute -bottom-2 left-0 right-0 mx-auto h-[2px] bg-[#D84B20] ${
                  activeId === l.id ? "w-6 opacity-100" : "w-0 opacity-0"
                }`}
                style={{ transition: "width 0.3s ease, opacity 0.3s ease" }}
              />
            </button>
          ))}
          <button
            data-testid="nav-reserve-btn"
            onClick={() => go("reserve")}
            className="px-5 py-2.5 bg-[#D84B20] hover:bg-[#b83d19] text-white text-[12px] uppercase tracking-[0.2em] rounded-sm"
            style={{ transition: "background-color 0.2s ease" }}
          >
            Reserve
          </button>
        </div>

        {/* Mobile: Sidebar trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              data-testid="nav-mobile-toggle"
              className="md:hidden text-[#F4EAE1] p-2 border border-[#3A2A24] rounded-sm hover:border-[#D84B20]"
              aria-label="Open menu"
              style={{ transition: "border-color 0.2s ease" }}
            >
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            data-testid="mobile-sidebar"
            className="w-[82vw] max-w-[360px] bg-[#14110F] border-l border-[#3A2A24] text-[#F4EAE1] p-0 flex flex-col"
          >
            <SheetHeader className="p-6 border-b border-[#3A2A24]">
              <SheetTitle className="flex items-center gap-2.5 text-left">
                <Flame className="w-5 h-5 text-[#D84B20]" strokeWidth={2.2} />
                <span className="font-display text-2xl tracking-tight text-[#F4EAE1]">Jefferson's Grill</span>
              </SheetTitle>
              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.round(RESTAURANT.rating) ? "fill-[#E88D39] text-[#E88D39]" : "text-[#7A6A60]"}`} />
                  ))}
                </div>
                <span className="text-xs text-[#B5A69B]">{RESTAURANT.rating} · {RESTAURANT.reviewCount} reviews</span>
              </div>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <p className="overline text-[#E88D39] px-2 mb-4">Navigate</p>
              <ul className="flex flex-col gap-1">
                {LINKS.map((l) => {
                  const active = activeId === l.id;
                  return (
                    <li key={l.id}>
                      <button
                        data-testid={`nav-mobile-${l.id}`}
                        onClick={() => go(l.id)}
                        className={`group w-full flex items-center justify-between px-4 py-3.5 rounded-sm border text-left ${
                          active ? "border-[#D84B20]/50 bg-[#D84B20]/10 text-[#F4EAE1]" : "border-transparent text-[#B5A69B] hover:text-[#F4EAE1] hover:bg-[#1B1512]"
                        }`}
                        style={{ transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease" }}
                      >
                        <span className="font-display text-xl tracking-tight">{l.label}</span>
                        <span className={`text-[10px] uppercase tracking-[0.2em] ${active ? "text-[#E88D39]" : "text-[#7A6A60]"}`}>0{LINKS.indexOf(l) + 1}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="ember-divider my-6" />

              <p className="overline text-[#E88D39] px-2 mb-4">Info</p>
              <div className="space-y-3 px-2 text-sm">
                <div className="flex items-start gap-3 text-[#B5A69B]">
                  <MapPin className="w-4 h-4 text-[#D84B20] mt-0.5 flex-shrink-0" />
                  <span>{RESTAURANT.address}</span>
                </div>
                <a href={`tel:${RESTAURANT.phone}`} className="flex items-start gap-3 text-[#B5A69B] hover:text-[#F4EAE1]" style={{ transition: "color 0.2s ease" }}>
                  <Phone className="w-4 h-4 text-[#D84B20] mt-0.5 flex-shrink-0" />
                  <span>{RESTAURANT.phone}</span>
                </a>
                <div className="flex items-start gap-3 text-[#B5A69B]">
                  <Clock className="w-4 h-4 text-[#D84B20] mt-0.5 flex-shrink-0" />
                  <span>Tue – Sun · 12pm – 10pm<br /><span className="text-[#7A6A60] text-xs">Closed Monday</span></span>
                </div>
              </div>
            </nav>

            <div className="p-4 border-t border-[#3A2A24]">
              <button
                data-testid="nav-mobile-reserve"
                onClick={() => go("reserve")}
                className="w-full py-3.5 bg-[#D84B20] hover:bg-[#b83d19] text-white uppercase tracking-[0.25em] text-[11px] rounded-sm"
                style={{ transition: "background-color 0.2s ease" }}
              >
                Reserve a Table
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
