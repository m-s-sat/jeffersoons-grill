import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { RESTAURANT } from "../data/content";
import { ReserveForm, ContactForm } from "./Forms";

export const VisitSection = () => {
  return (
    <section id="visit" data-testid="visit-section" className="scroll-mt-nav py-24 lg:py-32 bg-charred border-t border-[#3A2A24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="overline text-[#E88D39] mb-4">Come On Over</p>
          <h2 className="font-display text-5xl md:text-7xl text-[#F4EAE1] tracking-tight leading-none">Visit Us</h2>
          <p className="mt-6 text-[#B5A69B]">Reserve a table, send us a message, or just drop by. The pit's always smoking.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 bg-[#1B1512] border border-[#3A2A24] rounded-sm">
              <h3 className="font-display text-3xl text-[#F4EAE1] tracking-tight mb-6">Find Us</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3"><MapPin className="w-4 h-4 text-[#D84B20] mt-1" /><div className="text-[#F4EAE1]">{RESTAURANT.address}<div className="text-[#7A6A60] text-xs mt-1">{RESTAURANT.plusCode}</div></div></div>
                <div className="flex gap-3"><Phone className="w-4 h-4 text-[#D84B20] mt-1" /><a href={`tel:${RESTAURANT.phone}`} className="text-[#F4EAE1] hover:text-[#E88D39]" style={{transition:"color 0.2s ease"}}>{RESTAURANT.phone}</a></div>
                <div className="flex gap-3"><Mail className="w-4 h-4 text-[#D84B20] mt-1" /><a href={`mailto:${RESTAURANT.email}`} className="text-[#F4EAE1] hover:text-[#E88D39]" style={{transition:"color 0.2s ease"}}>{RESTAURANT.email}</a></div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#3A2A24]">
                <div className="flex items-center gap-2 mb-4"><Clock className="w-4 h-4 text-[#D84B20]" /><div className="overline text-[#E88D39]">Hours</div></div>
                <ul className="space-y-1.5 text-sm">
                  {RESTAURANT.hours.map(h => (
                    <li key={h.day} className="flex justify-between">
                      <span className="text-[#B5A69B]">{h.day}</span>
                      <span className={h.hours==="Closed"?"text-[#9E2A2B]":"text-[#F4EAE1]"}>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id="contact" data-testid="contact-section" className="p-8 bg-[#1B1512] border border-[#3A2A24] rounded-sm scroll-mt-nav">
              <h3 className="font-display text-3xl text-[#F4EAE1] tracking-tight mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
          <div id="reserve" data-testid="reserve-section" className="lg:col-span-3 scroll-mt-nav">
            <div className="p-8 lg:p-10 bg-[#1B1512] border border-[#3A2A24] rounded-sm">
              <h3 className="font-display text-3xl text-[#F4EAE1] tracking-tight mb-2">Book a Table</h3>
              <p className="text-[#B5A69B] text-sm mb-8">Walk-ins welcome. Reservations recommended for parties of 4+.</p>
              <ReserveForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-[#3A2A24] py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-sm text-[#7A6A60]">
      <div className="font-display text-2xl text-[#F4EAE1] tracking-tight">Jefferson's Grill</div>
      <div>© {new Date().getFullYear()} Jefferson's Grill · Jackson, MS</div>
      <div className="overline">Smoked with love</div>
    </div>
  </footer>
);
