import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Key, TrendingUp, MapPin, Shield, Users } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import Layout from "@/components/layout/Layout";

// Placeholder property data
const featuredProperties = [
  {
    id: 1,
    title: "Ático con vistas al mar",
    location: "Playa San Juan, Alicante",
    price: "425.000 €",
    bedrooms: 3,
    bathrooms: 2,
    size: "120 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    type: "Venta",
  },
  {
    id: 2,
    title: "Apartamento reformado",
    location: "Cabo de las Huertas, Alicante",
    price: "285.000 €",
    bedrooms: 2,
    bathrooms: 1,
    size: "85 m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    type: "Venta",
  },
  {
    id: 3,
    title: "Villa con piscina privada",
    location: "Playa San Juan, Alicante",
    price: "750.000 €",
    bedrooms: 4,
    bathrooms: 3,
    size: "280 m²",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    type: "Venta",
  },
];

const services = [
  {
    icon: Home,
    title: "Comprar",
    description: "Te ayudamos a encontrar tu hogar ideal en las mejores zonas de Alicante.",
    link: "/servicios",
  },
  {
    icon: TrendingUp,
    title: "Vender",
    description: "Maximiza el valor de tu propiedad con nuestro plan de marketing personalizado.",
    link: "/vender",
  },
  {
    icon: Key,
    title: "Alquilar",
    description: "Gestión integral de alquileres con total tranquilidad para propietarios e inquilinos.",
    link: "/servicios",
  },
];

const trustPoints = [
  {
    icon: MapPin,
    title: "Expertos locales",
    description: "Especialistas en Playa San Juan y Cabo de las Huertas. Conocemos cada rincón de la zona.",
  },
  {
    icon: Users,
    title: "Trato personalizado",
    description: "Cada cliente es único. Adaptamos nuestro servicio a tus necesidades específicas.",
  },
  {
    icon: Shield,
    title: "Transparencia total",
    description: "Sin sorpresas ni letras pequeñas. Honestidad y claridad en cada paso del proceso.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop"
            alt="Propiedad de lujo en Alicante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
                Tu inmobiliaria en Alicante
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Encuentra tu hogar perfecto en{" "}
                <span className="text-primary">Alicante</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Especialistas en Playa San Juan y Cabo de las Huertas. 
                Te acompañamos en cada paso para hacer realidad tus sueños inmobiliarios.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-coral text-white border-0 h-12 px-8 text-base">
                  <Link to="/propiedades">
                    Ver propiedades
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                  <Link to="/vender">Vender mi inmueble</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                  <Link to="/contacto">Contactar</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Propiedades destacadas</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Descubre nuestra selección de las mejores propiedades en las zonas más exclusivas de Alicante
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <StaggerItem key={property.id}>
                <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      {property.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{property.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{property.bedrooms} hab.</span>
                      <span>{property.bathrooms} baños</span>
                      <span>{property.size}</span>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contacto">Consultar</Link>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="gradient-coral text-white border-0">
                <Link to="/propiedades">
                  Ver todas las propiedades
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros servicios</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Soluciones inmobiliarias completas adaptadas a tus necesidades
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <Link
                  to={service.link}
                  className="group block p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl gradient-coral flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Por qué elegir New House Alicante?
                </h2>
                <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-8">
                  Llevamos años ayudando a familias a encontrar su hogar ideal en Alicante. 
                  Nuestro compromiso es ofrecerte un servicio profesional, cercano y transparente 
                  en cada paso del proceso.
                </p>
                <div className="space-y-6">
                  {trustPoints.map((point, index) => (
                    <div key={point.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <point.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{point.title}</h4>
                        <p className="text-secondary-foreground/70 text-sm">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                  alt="Equipo New House Alicante"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-90">Compromiso con nuestros clientes</p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="bg-gradient-to-br from-primary/10 via-accent to-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para dar el siguiente paso?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Ya sea comprar, vender o alquilar, estamos aquí para ayudarte. 
                Contáctanos sin compromiso y descubre cómo podemos hacer realidad tus objetivos inmobiliarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-coral text-white border-0 h-12 px-8">
                  <Link to="/contacto">
                    Contactar ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8">
                  <Link to="/vender">Valoración gratuita</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
