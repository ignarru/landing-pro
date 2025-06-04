import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Statistics />
      <Services />
      <WorkProcess />
      <Contact />
      <Footer />
    </div>
  );
}
