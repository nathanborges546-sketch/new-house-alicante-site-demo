import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Key, Check, ArrowRight, Target, Camera, Users, FileText } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import Layout from "@/components/layout/Layout";

const buyingSteps = [
  { step: 1, title: "Cuéntanos qué buscas", description: "Analizamos tus necesidades, preferencias y presupuesto para entender exactamente lo que necesitas." },
  { step: 2, title: "Selección personalizada", description: "Buscamos entre todas las opciones del mercado y te presentamos solo las propiedades que encajan contigo." },
  { step: 3, title: "Visitas organizadas", description: "Coordinamos las visitas a tu ritmo, acompañándote y resolviéndote todas las dudas." },
  { step: 4, title: "Negociación experta", description: "Negociamos las mejores condiciones en tu nombre, protegiendo siempre tus intereses." },
  { step: 5, title: "Cierre seguro", description: "Te guiamos en todo el proceso legal y administrativo hasta la firma en notaría." },
];

const sellingBenefits = [
  { icon: Target, title: "Valoración precisa", description: "Análisis de mercado detallado para fijar el precio óptimo" },
  { icon: Camera, title: "Marketing profesional", description: "Fotografía profesional, vídeo y home staging virtual" },
  { icon: Users, title: "Red de compradores", description: "Acceso a nuestra base de datos de compradores cualificados" },
  { icon: FileText, title: "Gestión integral", description: "Nos encargamos de todo el papeleo y trámites legales" },
];

const rentalServices = [
  "Búsqueda y selección de inquilinos",
  "Verificación de solvencia",
  "Redacción de contratos",
  "Gestión de fianzas y depósitos",
  "Seguimiento durante el alquiler",
  "Resolución de incidencias",
];

const Servicios = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros servicios</h1>
              <p className="text-secondary-foreground/80 text-lg">
                Soluciones inmobiliarias completas para compradores, vendedores y propietarios en Alicante
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Compra Section */}
      <section id="compra" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <div className="w-14 h-14 rounded-xl gradient-coral flex items-center justify-center mb-6">
                  <Home className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Compra tu hogar ideal</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Te acompañamos en todo el proceso de compra, desde la búsqueda hasta la entrega de llaves. 
                  Nuestro conocimiento del mercado local te garantiza encontrar la mejor opción.
                </p>
                <div className="space-y-4 mb-8">
                  {buyingSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild className="gradient-coral text-white border-0">
                  <Link to="/propiedades">
                    Ver propiedades disponibles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Compra tu hogar"
                className="rounded-xl shadow-lg"
              />
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Venta Section */}
      <section id="venta" className="section-padding bg-warm-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&h=600&fit=crop"
                alt="Vende tu inmueble"
                className="rounded-xl shadow-lg"
              />
            </FadeInLeft>
            <FadeInRight className="order-1 lg:order-2">
              <div>
                <div className="w-14 h-14 rounded-xl gradient-coral flex items-center justify-center mb-6">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Vende con los mejores resultados</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Nuestro plan de marketing personalizado maximiza la visibilidad de tu propiedad 
                  y atrae a los compradores adecuados para conseguir el mejor precio posible.
                </p>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {sellingBenefits.map((benefit) => (
                    <StaggerItem key={benefit.title}>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{benefit.title}</h4>
                          <p className="text-muted-foreground text-xs">{benefit.description}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <Button asChild className="gradient-coral text-white border-0">
                  <Link to="/vender">
                    Solicitar valoración gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Alquiler Section */}
      <section id="alquiler" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <div className="w-14 h-14 rounded-xl gradient-coral flex items-center justify-center mb-6">
                  <Key className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Alquiler sin preocupaciones</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Tanto si buscas alquilar tu propiedad como si necesitas encontrar un piso de alquiler, 
                  te ofrecemos un servicio integral que garantiza tranquilidad a ambas partes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {rentalServices.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="gradient-coral text-white border-0">
                  <Link to="/contacto">
                    Consultar servicio de alquiler
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
                alt="Servicio de alquiler"
                className="rounded-xl shadow-lg"
              />
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Tienes alguna pregunta?
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-8">
                Estamos aquí para ayudarte. Contáctanos sin compromiso y 
                te asesoraremos sobre el servicio que mejor se adapte a tus necesidades.
              </p>
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
                <Link to="/contacto">
                  Contactar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
