import { useState, useEffect, useRef } from "react";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = barRef.current?.offsetHeight ?? 0;
      const extraOffset = isMobile ? 0 : -80;
      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight +
        offset +
        extraOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={barRef} className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("inicio")}
            role="button"
            aria-label="Ir al inicio"
          >
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-2xl font-bold gradient-text">IAbyIA</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-accent transition-colors focus-visible:focus"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("acerca")}
              className="text-white hover:text-accent transition-colors focus-visible:focus"
            >
              Acerca de mí
            </button>
            <button
              onClick={() =>
                isMobile
                  ? scrollToSection("servicios")
                  : scrollToSection("servicios-especializados")
              }
              className="text-white hover:text-accent transition-colors focus-visible:focus"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-white hover:text-accent transition-colors focus-visible:focus"
            >
              Proceso
            </button>
            <Button
              onClick={() => scrollToSection("transformar", -100)}
              type="button"
              aria-label="Ir a la sección de consulta"
              className="iabyia-accent hover:opacity-90 text-white font-medium px-6 py-2 rounded-full"
            >
              Consulta Gratis
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-iabyia-highlight hover:text-accent focus-visible:focus"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mobile-menu-enter iabyia-secondary rounded-lg mx-4 mb-4 p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-white hover:text-accent transition-colors focus-visible:focus"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("acerca")}
                className="text-left text-white hover:text-accent transition-colors focus-visible:focus"
              >
                Acerca de mí
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-white hover:text-accent transition-colors focus-visible:focus"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="text-left text-white hover:text-accent transition-colors focus-visible:focus"
              >
                Proceso
              </button>
              <Button
                onClick={() => scrollToSection("transformar", -100)}
                type="button"
                aria-label="Ir a la sección de consulta"
                className="iabyia-accent hover:opacity-90 text-white font-medium w-full"
              >
                Consulta Gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
