import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { RESTAURANT } from "../data/content";
import { ReserveForm, ContactForm } from "./Forms";
import { useReveal } from "../hooks/useScrollFx";

const MAP_EMBED =
  "https://www.google.com/maps?q=2430+Bailey+Ave,+Jackson,+MS+39213&hl=en&z=16&output=embed";
const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=2430+Bailey+Ave+Jackson+MS+39213";

export const VisitSection = () => {
  const [headerRef, headerVisible] = useReveal(0.25);
  const [mapRef, mapVisible] = useReveal(0.15);

  return (
    <section id="visit" data-testid="visit-section" className="scroll-mt-nav py-20 sm:py-24 lg:py-32 bg-charred border-t border-[#3A2A24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div
          ref={headerRef}
          className={`mb-12 sm:mb-16 max-w-2xl transition-[opacity,transform] duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="overline text-[#E88D39] mb-4">Come On Over</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#F4EAE1] tracking-tight leading-none">Visit Us</h2>
          <p className="mt-5 sm:mt-6 text-[#B5A69B] text-sm sm:text-base">Reserve a table, send us a message, or just drop by. The pit's always smoking.</p>
        </div>

        {/* Google Maps */}
        <div
          ref={mapRef}
          data-testid="map-embed-wrapper"
          className={`relative mb-10 sm:mb-12 rounded-sm overflow-hidden border border-[#3A2A24] transition-[opacity,transform] duration-[900ms] ease-out ${mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] bg-[#1B1512]">
            <iframe
              data-testid="google-map-iframe"
              title="Jefferson's Grill location map"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.05) saturate(0.9)" }}
              allowFullScreen
            />
          </div>
          <a
            data-testid="map-directions-link"
            href={MAP_DIRECTIONS}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 px-4 py-2.5 bg-[#D84B20] hover:bg-[#b83d19] text-white uppercase tracking-[0.22em] text-[11px] rounded-sm shadow-lg"
            style={{ transition: "background-color 0.2s ease" }}
          >
            Get Directions
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="p-6 sm:p-8 bg-[#1B1512] border border-[#3A2A24] rounded-sm">
              <h3 className="font-display text-2xl sm:text-3xl text-[#F4EAE1] tracking-tight mb-5 sm:mb-6">Find Us</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3"><MapPin className="w-4 h-4 text-[#D84B20] mt-1 flex-shrink-0" /><div className="text-[#F4EAE1] break-words">{RESTAURANT.address}<div className="text-[#7A6A60] text-xs mt-1">{RESTAURANT.plusCode}</div></div></div>
                <div className="flex gap-3"><Phone className="w-4 h-4 text-[#D84B20] mt-1 flex-shrink-0" /><a href={`tel:${RESTAURANT.phone}`} className="text-[#F4EAE1] hover:text-[#E88D39] break-words" style={{transition:"color 0.2s ease"}}>{RESTAURANT.phone}</a></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 text-[#D84B20] mt-1 flex-shrink-0" /><a href={`mailto:${RESTAURANT.email}`} className="text-[#F4EAE1] hover:text-[#E88D39] break-all" style={{transition:"color 0.2s ease"}}>{RESTAURANT.email}</a></div>
              </div>
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#3A2A24]">
                <div className="flex items-center gap-2 mb-4"><Clock className="w-4 h-4 text-[#D84B20]" /><div className="overline text-[#E88D39]">Hours</div></div>
                <ul className="space-y-1.5 text-sm">
                  {RESTAURANT.hours.map(h => (
                    <li key={h.day} className="flex justify-between gap-3">
                      <span className="text-[#B5A69B]">{h.day}</span>
                      <span className={h.hours==="Closed"?"text-[#9E2A2B]":"text-[#F4EAE1]"}>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id="contact" data-testid="contact-section" className="p-6 sm:p-8 bg-[#1B1512] border border-[#3A2A24] rounded-sm scroll-mt-nav">
              <h3 className="font-display text-2xl sm:text-3xl text-[#F4EAE1] tracking-tight mb-5 sm:mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
          <div id="reserve" data-testid="reserve-section" className="lg:col-span-3 scroll-mt-nav">
            <div className="p-6 sm:p-8 lg:p-10 bg-[#1B1512] border border-[#3A2A24] rounded-sm">
              <h3 className="font-display text-2xl sm:text-3xl text-[#F4EAE1] tracking-tight mb-2">Book a Table</h3>
              <p className="text-[#B5A69B] text-xs sm:text-sm mb-6 sm:mb-8">Walk-ins welcome. Reservations recommended for parties of 4+.</p>
              <ReserveForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-[#3A2A24] py-10 sm:py-12">
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-[#7A6A60]">
      <div className="font-display text-xl sm:text-2xl text-[#F4EAE1] tracking-tight">Jefferson's Grill</div>
      <div>© {new Date().getFullYear()} Jefferson's Grill · Jackson, MS</div>
      <div className="overline">Smoked with love</div>
    </div>
  </footer>
);
