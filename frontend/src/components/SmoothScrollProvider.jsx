import { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    // Hijack in-page anchor smooth scroll so Lenis controls it
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a[href^='#'], button[data-scroll-to]");
      if (!target) return;
      const id = target.getAttribute("data-scroll-to") || target.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    };
    document.addEventListener("click", handleAnchorClick);

    // scrollIntoView fallback -> use lenis
    const origScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (opts) {
      if (opts && opts.behavior === "smooth") {
        lenis.scrollTo(this, { offset: -80, duration: 1.2 });
      } else {
        origScrollIntoView.call(this, opts);
      }
    };

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", handleAnchorClick);
      Element.prototype.scrollIntoView = origScrollIntoView;
      lenis.destroy();
    };
  }, []);

  return children;
};
