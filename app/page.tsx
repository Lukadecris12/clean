import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CorporateProfile from "@/components/CorporateProfile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <CorporateProfile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
