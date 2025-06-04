import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Agenda una consulta gratuita y descubre cómo la IA puede revolucionar tu empresa
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById("contacto");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-accent hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
          >
            Agendar Consulta Gratuita
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Conecta con <span className="gradient-text">Nuestro Equipo</span>
            </h2>
            <p className="text-xl text-iabyia-light max-w-3xl mx-auto">
              Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a implementar IA en tu negocio
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form 
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="iabyia-secondary border-gray-700 focus:border-accent bg-secondary text-foreground placeholder:text-iabyia-light"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="iabyia-secondary border-gray-700 focus:border-accent bg-secondary text-foreground placeholder:text-iabyia-light"
                />
              </div>
              <Input
                type="text"
                name="company"
                placeholder="Empresa"
                value={formData.company}
                onChange={handleChange}
                className="iabyia-secondary border-gray-700 focus:border-accent bg-secondary text-foreground placeholder:text-iabyia-light"
              />
              <Textarea
                name="message"
                placeholder="Cuéntanos sobre tu proyecto"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="iabyia-secondary border-gray-700 focus:border-accent bg-secondary text-foreground placeholder:text-iabyia-light resize-none"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:opacity-90 text-white py-4 text-lg font-medium transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
