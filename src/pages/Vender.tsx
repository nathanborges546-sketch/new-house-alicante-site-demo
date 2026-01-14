import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, 
  Check, 
  TrendingUp, 
  Camera, 
  Target, 
  Globe, 
  FileText, 
  Handshake,
  Calculator,
  Eye,
  Play,
  Home,
  BarChart3,
  Compass
} from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import Layout from "@/components/layout/Layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sellingSteps = [
  {
    step: 1,
    icon: Calculator,
    title: "Valoración profesional",
    description: "Analizamos el mercado y tu propiedad para determinar el precio óptimo de venta con un estudio comparativo de la zona.",
  },
  {
    step: 2,
    icon: Camera,
    title: "Fotografía y vídeo profesional",
    description: "Realizamos reportajes fotográficos profesionales para mostrar el potencial de tu vivienda de forma atractiva y realista.",
  },
  {
    step: 3,
    icon: Eye,
    title: "Visita virtual 360°",
    description: "Mejoramos la experiencia de los compradores potenciales, acelerando el proceso de venta con visitas virtuales desde casa.",
  },
  {
    step: 4,
    icon: Globe,
    title: "Máxima exposición online",
    description: "Te garantizamos que tu casa será la opción NÚMERO UNO en los principales buscadores nacionales para maximizar la exposición.",
  },
  {
    step: 5,
    icon: Handshake,
    title: "Negociación experta",
    description: "Negociamos las mejores condiciones para ti, protegiendo siempre tus intereses hasta conseguir el mejor precio.",
  },
  {
    step: 6,
    icon: FileText,
    title: "Cierre y entrega",
    description: "Gestionamos todo el papeleo hasta la firma en notaría y entrega de llaves con total tranquilidad.",
  },
];

const marketingServices = [
  {
    icon: Camera,
    title: "Fotografía profesional",
    description: "Una imagen vale más que mil palabras. Creamos imágenes descriptivas, impactantes y seductoras que muestran tu casa de forma atractiva.",
  },
  {
    icon: Play,
    title: "Vídeo promocional",
    description: "Promocionamos tu vivienda de una manera distinta que capta la atención del comprador. El vídeo permite sentir la casa sin visitarla.",
  },
  {
    icon: Compass,
    title: "Visita virtual 360°",
    description: "Mejora la experiencia de compradores potenciales y acelera el proceso de venta realizando visitas desde casa sin desplazarse.",
  },
  {
    icon: BarChart3,
    title: "Planos detallados",
    description: "Herramienta indispensable para conocer la distribución de la vivienda. Son de gran utilidad para captar la atención del comprador.",
  },
  {
    icon: Home,
    title: "Asesoramiento Home Staging",
    description: "Preparar la casa para que guste al mayor número de compradores. Con esta técnica tu vivienda se venderá más rápido y a mejor precio.",
  },
  {
    icon: Target,
    title: "Posicionamiento premium",
    description: "El posicionamiento en los portales es esencial. Garantizamos las primeras posiciones para multiplicar visitas y contactos.",
  },
];

const benefits = [
  "Valoración de mercado sin compromiso",
  "Fotografía y vídeo profesional",
  "Home staging virtual incluido",
  "Publicación en +30 portales",
  "Atención personalizada 24/7",
  "Sin comisiones ocultas",
  "Informe de seguimiento semanal",
  "Asesoramiento legal completo",
];

const whyUs = [
  "El 90% de compradores empiezan su búsqueda online",
  "Especialistas en Playa San Juan y Cabo de las Huertas",
  "Años de experiencia en el mercado alicantino",
  "Marketing personalizado porque cada casa es distinta",
  "Compromiso de máxima exposición garantizada",
];

const Vender = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    zone: "",
    size: "",
    bedrooms: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias! Nos pondremos en contacto contigo pronto para valorar tu propiedad.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                  Para propietarios
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Vende tu propiedad al mejor precio
                </h1>
                <p className="text-secondary-foreground/80 text-lg mb-6">
                  Ponemos la mayor parte de nuestro esfuerzo en presentar la casa para la venta. 
                  Con un plan de marketing personalizado porque cada casa es distinta y cada comprador es distinto, 
                  te garantizamos que mostraremos lo mejor de tu casa.
                </p>
                <ul className="space-y-2 mb-8">
                  {whyUs.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-secondary-foreground/90 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
                    <a href="#valoracion">
                      Solicitar valoración gratuita
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <img
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&h=600&fit=crop"
                alt="Vende tu propiedad"
                className="rounded-xl shadow-2xl"
              />
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Video Section 1 - Company Presentation */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/MveewRVOaYs"
                  title="New House Alicante - Inmobiliaria especializada"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Vendemos pisos en Playa San Juan
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Hoy en día existe una gran demanda por la compra de pisos en la zona de Playa San Juan en Alicante. 
                  Somos profesionales con años de experiencia en la venta de pisos y casas en las mejores zonas.
                </p>
                <p className="text-muted-foreground mb-6">
                  En el mercado actual, el 90% de compradores potenciales empiezan la búsqueda de su casa online. 
                  Te garantizamos que tu casa será la opción <strong className="text-foreground">NÚMERO UNO</strong> en 
                  los principales buscadores nacionales para maximizar la exposición.
                </p>
                <Button asChild className="gradient-coral text-white border-0">
                  <a href="#valoracion">
                    Quiero vender mi casa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Marketing Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan de marketing personalizado</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Nuestro escaparate son las plataformas digitales. Si queremos que los usuarios vean nuestros anuncios, 
                debemos mostrar una casa atractiva con las mejores herramientas.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service) => (
              <StaggerItem key={service.title}>
                <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Video Section 2 - Home Staging */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Home Staging: la clave del éxito
                </h2>
                <p className="text-secondary-foreground/80 text-lg mb-6">
                  Preparar la casa para que guste al mayor número de compradores potenciales hará que la vivienda 
                  se venda más rápido. Con esta técnica sacaremos el máximo partido a la vivienda.
                </p>
                <p className="text-secondary-foreground/80 mb-6">
                  La vivienda debe destacar entre la competencia y con estas mejoras competiremos en calidad 
                  y no en precio. Colaboramos con empresas profesionales que se encargan de este proceso para 
                  conseguir que tu casa se venda mejor y más rápido.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-secondary-foreground/90 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Venta más rápida y a mejor precio
                  </li>
                  <li className="flex items-center gap-2 text-secondary-foreground/90 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Tu casa destaca entre la competencia
                  </li>
                  <li className="flex items-center gap-2 text-secondary-foreground/90 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    Pequeña inversión, grandes resultados
                  </li>
                </ul>
              </div>
            </FadeInLeft>
            <FadeInRight className="order-1 lg:order-2">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/k1jxQt5h_eY"
                  title="Home Staging - New House Alicante"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro proceso de venta</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Un método probado para vender tu propiedad de forma rápida y al mejor precio
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellingSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-coral flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Por qué vender con nosotros?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Somos especialistas en el mercado inmobiliario de Alicante. Nuestro conocimiento local 
                  y nuestro compromiso con cada cliente nos permiten ofrecer resultados excepcionales.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="bg-secondary text-secondary-foreground p-8 rounded-xl">
                <TrendingUp className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Marketing que funciona</h3>
                <p className="text-secondary-foreground/80 mb-6">
                  Nuestro plan de marketing personalizado incluye:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Reportaje fotográfico profesional con dron</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Vídeo tour de alta calidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Home staging virtual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Planos 2D y 3D de la vivienda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Publicación en más de 30 portales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Campañas en redes sociales</span>
                  </li>
                </ul>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Valuation Form */}
      <section id="valoracion" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Gratis y sin compromiso
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Cuánto vale tu propiedad?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Completa el formulario y recibirás una valoración profesional de tu inmueble
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="propertyType">Tipo de inmueble *</Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecciona..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartamento">Apartamento</SelectItem>
                        <SelectItem value="piso">Piso</SelectItem>
                        <SelectItem value="atico">Ático</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="chalet">Chalet</SelectItem>
                        <SelectItem value="adosado">Adosado</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zone">Zona *</Label>
                    <Select
                      value={formData.zone}
                      onValueChange={(value) => setFormData({ ...formData, zone: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecciona..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="playa-san-juan">Playa San Juan</SelectItem>
                        <SelectItem value="cabo-huertas">Cabo de las Huertas</SelectItem>
                        <SelectItem value="centro">Centro Alicante</SelectItem>
                        <SelectItem value="otra">Otra zona</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="size">Superficie aproximada (m²)</Label>
                    <Input
                      id="size"
                      name="size"
                      type="number"
                      value={formData.size}
                      onChange={handleChange}
                      placeholder="Ej: 100"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bedrooms">Número de habitaciones</Label>
                    <Select
                      value={formData.bedrooms}
                      onValueChange={(value) => setFormData({ ...formData, bedrooms: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecciona..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 habitación</SelectItem>
                        <SelectItem value="2">2 habitaciones</SelectItem>
                        <SelectItem value="3">3 habitaciones</SelectItem>
                        <SelectItem value="4">4 habitaciones</SelectItem>
                        <SelectItem value="5+">5 o más</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mb-6">
                  <Label htmlFor="message">Información adicional</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntanos más sobre tu propiedad..."
                    className="mt-2"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gradient-coral text-white border-0">
                  Solicitar valoración gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Al enviar este formulario aceptas nuestra{" "}
                  <Link to="/privacidad" className="underline">política de privacidad</Link>
                </p>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vender;
