import { useEffect, useState } from "react";
import { Menu, Flame, X } from "lucide-react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="main-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button data-testid="brand-logo" onClick={() => go("home")} className="flex items-center gap-2.5 text-[#F4EAE1]">
          <Flame className="w-5 h-5 text-[#D84B20]" strokeWidth={2.2} />
          <span className="font-display text-2xl tracking-tight">Jefferson's Grill</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => go(l.id)}
              className="text-[13px] uppercase tracking-[0.2em] text-[#B5A69B] hover:text-[#F4EAE1] transition-colors"
              style={{ transition: "color 0.2s ease" }}
            >
              {l.label}
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
        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-[#F4EAE1] p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden backdrop-blur-xl bg-black/85 border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-mobile-${l.id}`}
                onClick={() => go(l.id)}
                className="text-left uppercase tracking-[0.2em] text-[13px] text-[#B5A69B] hover:text-[#F4EAE1]"
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-mobile-reserve"
              onClick={() => go("reserve")}
              className="mt-2 px-5 py-3 bg-[#D84B20] text-white text-[12px] uppercase tracking-[0.2em] rounded-sm"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
