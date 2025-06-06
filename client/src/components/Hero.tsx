import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import DetailedBrain from "./DetailedBrain";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforma tu negocio con{" "}
            <span className="gradient-text">
              Inteligencia Artificial
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-iabyia-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Automatización inteligente, análisis predictivo y optimización de procesos 
            para llevar tu empresa al siguiente nivel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="iabyia-accent hover:opacity-90 text-white px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all"
            >
              Comenzar Ahora
            </Button>

          </div>
        </div>
        
        {/* Floating AI Brain Illustration */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="relative animate-float">
            <div className="w-32 h-32 mx-auto relative">
              {/* Outer glow */}
              <div className="absolute inset-0 iabyia-accent rounded-full opacity-20 animate-pulse-soft"></div>
              
              {/* Main brain container */}
              <div className="absolute inset-4 bg-gradient-to-br from-iabyia-accent to-iabyia-highlight rounded-full flex items-center justify-center">
                <DetailedBrain className="w-20 h-20 text-white" aria-hidden="true" />
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-4 left-4 w-3 h-3 iabyia-accent rounded-full animate-ping"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 iabyia-highlight rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
              
              {/* Sparkle effects */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-accent animate-pulse" aria-hidden="true" />
              <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-purple-400 animate-pulse" aria-hidden="true" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
