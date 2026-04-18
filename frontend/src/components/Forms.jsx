import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { format } from "date-fns";
import { CalendarIcon, Clock, Users } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TIMES = ["12:00 PM","12:30 PM","1:00 PM","1:30 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM"];

export const ReserveForm = () => {
  const [form, setForm] = useState({ name:"", email:"", phone:"", date: null, time: "", guests: "2", occasion: "", notes: "" });
  const [loading, setLoading] = useState(false);
  const set = (k,v) => setForm(p => ({...p,[k]:v}));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      toast.error("Please fill all required fields."); return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/reservations`, {
        ...form,
        date: format(form.date, "yyyy-MM-dd"),
        guests: parseInt(form.guests, 10),
      });
      toast.success("Table reserved! We'll see you soon.");
      setForm({ name:"", email:"", phone:"", date:null, time:"", guests:"2", occasion:"", notes:"" });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not submit reservation.");
    } finally { setLoading(false); }
  };

  const inp = "bg-[#231B18] border-[#3A2A24] text-[#F4EAE1] focus-visible:ring-[#D84B20] focus-visible:border-[#D84B20] rounded-sm h-11";

  return (
    <form data-testid="reservation-form" onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Name*</Label>
          <Input data-testid="res-name" className={inp} value={form.name} onChange={e=>set("name",e.target.value)} /></div>
        <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Phone*</Label>
          <Input data-testid="res-phone" className={inp} value={form.phone} onChange={e=>set("phone",e.target.value)} /></div>
      </div>
      <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Email*</Label>
        <Input data-testid="res-email" type="email" className={inp} value={form.email} onChange={e=>set("email",e.target.value)} /></div>
      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Date*</Label>
          <Popover>
            <PopoverTrigger asChild>
              <button type="button" data-testid="res-date-trigger" className={`${inp} w-full flex items-center gap-2 px-3 text-left`}>
                <CalendarIcon className="w-4 h-4 text-[#E88D39]" />
                {form.date ? format(form.date,"PPP") : <span className="text-[#7A6A60]">Pick a date</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="bg-[#231B18] border-[#3A2A24]" align="start">
              <Calendar mode="single" selected={form.date} onSelect={(d)=>set("date",d)} disabled={(d)=>d < new Date(new Date().setHours(0,0,0,0))} />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Time*</Label>
          <Select value={form.time} onValueChange={(v)=>set("time",v)}>
            <SelectTrigger data-testid="res-time" className={inp}><Clock className="w-4 h-4 text-[#E88D39] mr-2" /><SelectValue placeholder="Select time" /></SelectTrigger>
            <SelectContent className="bg-[#231B18] border-[#3A2A24] text-[#F4EAE1]">
              {TIMES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Guests*</Label>
          <Select value={form.guests} onValueChange={(v)=>set("guests",v)}>
            <SelectTrigger data-testid="res-guests" className={inp}><Users className="w-4 h-4 text-[#E88D39] mr-2" /><SelectValue /></SelectTrigger>
            <SelectContent className="bg-[#231B18] border-[#3A2A24] text-[#F4EAE1]">
              {Array.from({length:12}, (_,i) => i+1).map(n => <SelectItem key={n} value={String(n)}>{n} {n===1?"guest":"guests"}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Occasion</Label>
        <Input data-testid="res-occasion" className={inp} placeholder="Birthday, anniversary..." value={form.occasion} onChange={e=>set("occasion",e.target.value)} /></div>
      <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Special requests</Label>
        <Textarea data-testid="res-notes" className={`${inp} h-24`} value={form.notes} onChange={e=>set("notes",e.target.value)} /></div>
      <button data-testid="res-submit" disabled={loading} className="w-full py-4 bg-[#D84B20] hover:bg-[#b83d19] disabled:opacity-60 text-white uppercase tracking-[0.25em] text-xs rounded-sm" style={{ transition: "background-color 0.2s ease" }}>
        {loading ? "Booking..." : "Reserve Table"}
      </button>
    </form>
  );
};

export const ContactForm = () => {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [loading, setLoading] = useState(false);
  const set = (k,v) => setForm(p=>({...p,[k]:v}));
  const inp = "bg-[#231B18] border-[#3A2A24] text-[#F4EAE1] focus-visible:ring-[#D84B20] focus-visible:border-[#D84B20] rounded-sm h-11";

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { toast.error("Please fill all required fields."); return; }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name:"", email:"", subject:"", message:"" });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not send message.");
    } finally { setLoading(false); }
  };

  return (
    <form data-testid="contact-form" onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Name*</Label>
          <Input data-testid="ct-name" className={inp} value={form.name} onChange={e=>set("name",e.target.value)} /></div>
        <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Email*</Label>
          <Input data-testid="ct-email" type="email" className={inp} value={form.email} onChange={e=>set("email",e.target.value)} /></div>
      </div>
      <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Subject</Label>
        <Input data-testid="ct-subject" className={inp} value={form.subject} onChange={e=>set("subject",e.target.value)} /></div>
      <div><Label className="text-[#B5A69B] text-xs uppercase tracking-[0.2em]">Message*</Label>
        <Textarea data-testid="ct-message" className={`${inp} h-32`} value={form.message} onChange={e=>set("message",e.target.value)} /></div>
      <button data-testid="ct-submit" disabled={loading} className="w-full py-4 bg-transparent border border-[#F4EAE1]/30 hover:border-[#F4EAE1] text-[#F4EAE1] uppercase tracking-[0.25em] text-xs rounded-sm" style={{ transition: "border-color 0.2s ease" }}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
