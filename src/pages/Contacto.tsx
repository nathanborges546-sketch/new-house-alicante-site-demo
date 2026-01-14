import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/ui/animations";
import Layout from "@/components/layout/Layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactarnos! Te responderemos lo antes posible.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
              <p className="text-secondary-foreground/80 text-lg">
                ¿Tienes alguna pregunta? Estamos aquí para ayudarte. 
                Contáctanos y te responderemos lo antes posible.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <FadeInLeft>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Información de contacto</h2>
                
                <div className="space-y-6 mb-10">
                  <a
                    href="tel:+34644476045"
                    className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-coral flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">Teléfono</h3>
                      <p className="text-muted-foreground">(+34) 644 476 045</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@newhousealicante.es"
                    className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-coral flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">Email</h3>
                      <p className="text-muted-foreground">info@newhousealicante.es</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-lg gradient-coral flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Dirección</h3>
                      <p className="text-muted-foreground">
                        Calle del Currican 44 local 22,<br />
                        Centro comercial Azahara,<br />
                        Cabo de las Huertas, 03540 Alicante
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-lg gradient-coral flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Horario</h3>
                      <p className="text-muted-foreground">
                        Lunes - Viernes: 10:00 - 14:00 / 17:00 - 20:00<br />
                        Sábado: 10:00 - 14:00<br />
                        Domingo: Cerrado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">
                      Mapa interactivo<br />
                      Cabo de las Huertas, Alicante
                    </p>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Contact Form */}
            <FadeInRight>
              <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg gradient-coral flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Envíanos un mensaje</h2>
                    <p className="text-muted-foreground text-sm">Te responderemos en menos de 24 horas</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Asunto *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecciona..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="comprar">Quiero comprar</SelectItem>
                          <SelectItem value="vender">Quiero vender</SelectItem>
                          <SelectItem value="alquilar">Quiero alquilar</SelectItem>
                          <SelectItem value="valoracion">Valoración de inmueble</SelectItem>
                          <SelectItem value="informacion">Información general</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-coral text-white border-0">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar mensaje
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario aceptas nuestra{" "}
                    <Link to="/privacidad" className="underline">política de privacidad</Link>
                  </p>
                </form>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <h3 className="font-semibold mb-2">¿Buscas propiedad?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Explora nuestra selección de inmuebles en Alicante
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/propiedades">Ver propiedades</Link>
                </Button>
              </div>
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <h3 className="font-semibold mb-2">¿Quieres vender?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Solicita una valoración gratuita de tu inmueble
                </p>
                <Button asChild className="w-full gradient-coral text-white border-0">
                  <Link to="/vender">Valoración gratuita</Link>
                </Button>
              </div>
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <h3 className="font-semibold mb-2">Llámanos directamente</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Estamos disponibles para atenderte
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+34644476045">
                    <Phone className="mr-2 h-4 w-4" />
                    644 476 045
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
