import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="acerca" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}> 
          <img
            src="/profile.png"
            alt="Foto de Ignacio Arruvito"
            className="w-full rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Acerca de <span className="gradient-text">Mí</span>
            </h2>
            <p className="text-iabyia-light text-lg leading-relaxed">
              Soy Ignacio Arruvito, consultor en inteligencia artificial y fundador de IAbyIA. Mi objetivo es ayudar a las empresas a adoptar soluciones de IA que impulsen su crecimiento y eficiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
