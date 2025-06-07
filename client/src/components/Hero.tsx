import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import InteractiveBrain from "./InteractiveBrain";
import { Button } from "@/components/ui/button";

const HERO_DELAY_MS = 600;

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [brainActive, setBrainActive] = useState(false);
  const [burstActive, setBurstActive] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: string; y: string }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), HERO_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), HERO_DELAY_MS);
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const triggerBurst = () => {
    setBurstActive(true);
    setTimeout(() => setBurstActive(false), 1000);
  };

  const generateSparkles = (count: number) => {
    return Array.from({ length: count }).map((_, idx) => ({
      id: Date.now() + idx,
      x: `${Math.random() * 120 - 60}px`,
      y: `${Math.random() * 120 - 60}px`,
    }));
  };
  
  const handleStartClick = () => {
    setBrainActive(true);
    triggerBurst();
    setSparkles(generateSparkles(8));
    setTimeout(() => {
      setSparkles([]);
      setBrainActive(false);
    }, 1000);
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-28 md:pt-20 scroll-mt-28 md:scroll-mt-20 pb-24 px-4"
    >
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
              onClick={handleStartClick}
              aria-label="Ir a la sección sobre mí"
              type="button"
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
          <div
            className={`relative w-fit mx-auto animate-float ${
              brainActive ? "animate-bounce" : ""
            }`}
          >
            <InteractiveBrain
              className="mx-auto"
              active={brainActive}
              onInteraction={handleStartClick}
            />

            <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-800 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
            <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: "2s" }} />

            {burstActive && (
              <>
                <span
                  className="particle-burst"
                  style={{
                    '--burst-x': '40px',
                    '--burst-y': '-20px',
                  } as React.CSSProperties}
                />
                <span
                  className="particle-burst"
                  style={{
                    '--burst-x': '-30px',
                    '--burst-y': '-30px',
                  } as React.CSSProperties}
                />
                <span
                  className="particle-burst"
                  style={{
                    '--burst-x': '20px',
                    '--burst-y': '35px',
                  } as React.CSSProperties}
                />
              </>
            )}

            {sparkles.map((sp) => (
              <Sparkles
                key={sp.id}
                className="sparkle-burst"
                style={{
                  '--burst-x': sp.x,
                  '--burst-y': sp.y,
                } as React.CSSProperties}
                aria-hidden="true"
              />
            ))}
            
              <Sparkles
                className="absolute -bottom-3 right-4 w-6 h-6 text-accent animate-pulse"
                aria-hidden="true"
              />
              <Sparkles
                className="absolute -bottom-3 left-4 w-4 h-4 text-blue-400 animate-pulse"
                aria-hidden="true"
                style={{ animationDelay: "0.5s" }}
              />
          </div>
        </div>
      </div>
    </section>
  );
}
