import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, MapPin, Award, Target, Lightbulb, Phone, Quote } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import Layout from "@/components/layout/Layout";
import felipeImg from "@/assets/felipe-gonzalez.png";
import herneyImg from "@/assets/herney-gonzalez.png";

const values = [
  {
    icon: Heart,
    title: "Pasión por lo que hacemos",
    description: "Cada propiedad es un proyecto personal. Nos involucramos como si fuera nuestra propia casa.",
  },
  {
    icon: Users,
    title: "Trato cercano y personalizado",
    description: "No somos una gran corporación. Conocemos a cada cliente por su nombre y adaptamos el servicio a sus necesidades.",
  },
  {
    icon: Target,
    title: "Transparencia total",
    description: "Sin sorpresas ni letras pequeñas. Te explicamos cada paso del proceso con total claridad.",
  },
  {
    icon: Lightbulb,
    title: "Innovación constante",
    description: "Utilizamos las últimas tecnologías y estrategias de marketing para obtener los mejores resultados.",
  },
];

const differentiators = [
  "Especialistas en Playa San Juan y Cabo de las Huertas",
  "Conocimiento profundo del mercado local",
  "Marketing digital de última generación",
  "Fotografía y vídeo profesional",
  "Home staging virtual incluido",
  "Atención en español, inglés y otros idiomas",
  "Acompañamiento integral hasta la firma",
  "Asesoramiento legal y fiscal",
];

const team = [
  {
    name: "Felipe González",
    phone: "644 476 045",
    image: felipeImg,
  },
  {
    name: "Herney González",
    phone: "644 476 045",
    image: herneyImg,
  },
];

const reviews = [
  {
    name: "Lucia D.J.",
    text: "Muy agradecida, implicación total hasta que encontraron la casa de mi vida. Profesionalidad y cercanía en todo momento. Sin duda los recomiendo.",
  },
  {
    name: "Zhen Bao",
    text: "Felipe es una persona muy seria con los clientes y el trabajo. ¡El trabajo es riguroso y muy confiable!",
  },
  {
    name: "Nacho Santos",
    text: "Impecable la profesionalidad de Felipe, todo han sido soluciones y facilidades. Muy contento con el resultado final.",
  },
  {
    name: "Roberto T.",
    text: "Trato personal y profesional inmejorable. Vendieron nuestra casa rápido y al precio que esperábamos. Totalmente recomendables.",
  },
];

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Hacemos las cosas <span className="text-primary">diferente</span>
                </h1>
                <p className="text-secondary-foreground/80 text-lg leading-relaxed">
                  En New House Alicante creemos que comprar o vender una propiedad es mucho más 
                  que una transacción. Es un momento importante en tu vida, y queremos que sea 
                  una experiencia positiva de principio a fin.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Equipo New House Alicante"
                className="rounded-xl shadow-2xl"
              />
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Team Contact Section */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro equipo</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Profesionales comprometidos con ofrecerte el mejor servicio inmobiliario en Alicante
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover grayscale"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <a
                    href={`tel:+34${member.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra historia</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  New House Alicante nació de una visión clara: ofrecer un servicio inmobiliario 
                  diferente, basado en la cercanía, la profesionalidad y el compromiso real con 
                  cada cliente.
                </p>
                <p className="mb-6">
                  Nos especializamos en las zonas de <strong className="text-foreground">Playa San Juan</strong> y{" "}
                  <strong className="text-foreground">Cabo de las Huertas</strong>, dos de las áreas más 
                  demandadas de Alicante. Conocemos cada calle, cada comunidad, cada rincón. 
                  Este conocimiento local nos permite asesorar con precisión y encontrar 
                  oportunidades que otros pasan por alto.
                </p>
                <p className="mb-6">
                  No somos una inmobiliaria convencional. Combinamos la atención personalizada de 
                  una pequeña agencia con las herramientas de marketing más avanzadas del sector. 
                  Fotografía profesional, vídeo con dron, home staging virtual, campañas digitales... 
                  Todo para que tu propiedad destaque y se venda al mejor precio.
                </p>
                <p>
                  Pero lo que realmente nos diferencia es nuestro compromiso. Para nosotros, cada 
                  cliente es único. Nos tomamos el tiempo de entender tus necesidades, respondemos 
                  a tus dudas con honestidad y te acompañamos en cada paso hasta conseguir tu objetivo.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros valores</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Los principios que guían nuestro trabajo cada día
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl gradient-coral flex items-center justify-center mb-6">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                  alt="Playa San Juan, Alicante"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <MapPin className="h-8 w-8 mb-2" />
                  <p className="text-sm font-medium">Expertos locales</p>
                  <p className="text-xs opacity-90">Playa San Juan & Cabo de las Huertas</p>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Conocemos Alicante como nadie
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Nuestra especialización en Playa San Juan y Cabo de las Huertas nos permite 
                  ofrecerte un asesoramiento preciso y basado en datos reales del mercado local.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {differentiators.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Opiniones de clientes</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Lo que dicen nuestros clientes sobre su experiencia con nosotros
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <StaggerItem key={review.name}>
                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-semibold text-foreground">— {review.name}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Hablamos?
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-8">
                Nos encantaría conocerte y descubrir cómo podemos ayudarte 
                a conseguir tus objetivos inmobiliarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
                  <Link to="/contacto">
                    Contactar ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/propiedades">Ver propiedades</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
