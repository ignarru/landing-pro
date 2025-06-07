import { useState, useEffect, useRef } from "react";
import { Rocket, Eye } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
    <section id="acerca" ref={sectionRef} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}> 
          <img
            src="/profile.png"
            alt="Foto de Ignacio Arruvito"
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Acerca de <span className="gradient-text">Mí</span>
            </h2>
            <p className="text-iabyia-light text-lg leading-relaxed">
              Soy Ignacio Arruvito, consultor en inteligencia artificial y fundador de IAbyIA. Mi objetivo es ayudar a las empresas a adoptar soluciones de IA que impulsen su crecimiento y eficiencia.
            </p>
            <p className="text-iabyia-light text-lg leading-relaxed mt-4">
              Cuento con amplia experiencia implementando proyectos de automatización y análisis predictivo para empresas de diversas industrias.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 iabyia-accent rounded-lg flex items-center justify-center mr-4">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <p className="text-iabyia-light leading-relaxed">
                  Impulso emprendedores con soluciones de IA accesibles y potentes.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 iabyia-highlight rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <p className="text-iabyia-light leading-relaxed">
                  Aspiro a posicionar IAbyIA como la consultora referente para potenciar negocios con inteligencia artificial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
