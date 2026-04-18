import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { VisitSection, Footer } from "@/components/VisitSection";

function App() {
  return (
    <div className="App bg-[#14110F] text-[#F4EAE1]">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <ReviewsSection />
        <Gallery />
        <About />
        <VisitSection />
      </main>
      <Footer />
      <Toaster position="top-right" theme="dark" richColors />
    </div>
  );
}

export default App;
