import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import Layout from "@/components/layout/Layout";

const blogPosts = [
  {
    id: 1,
    title: "5 consejos para comprar tu primera vivienda en Alicante",
    excerpt: "Comprar tu primera casa es una de las decisiones más importantes de tu vida. Te compartimos los mejores consejos para hacerlo con éxito en el mercado alicantino.",
    category: "Consejos",
    date: "12 enero 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    readTime: "5 min lectura",
  },
  {
    id: 2,
    title: "¿Por qué Playa San Juan es la mejor zona para vivir en Alicante?",
    excerpt: "Descubre las razones por las que Playa San Juan se ha convertido en una de las zonas residenciales más demandadas de toda la provincia.",
    category: "Vida en Alicante",
    date: "8 enero 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    readTime: "4 min lectura",
  },
  {
    id: 3,
    title: "Tendencias del mercado inmobiliario en Alicante para 2024",
    excerpt: "Analizamos las principales tendencias que marcarán el mercado inmobiliario alicantino este año: precios, demanda y oportunidades de inversión.",
    category: "Mercado inmobiliario",
    date: "3 enero 2024",
    image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&h=500&fit=crop",
    readTime: "6 min lectura",
  },
  {
    id: 4,
    title: "Guía completa: Documentación necesaria para vender tu casa",
    excerpt: "Todo lo que necesitas saber sobre los documentos y trámites para vender tu propiedad sin complicaciones.",
    category: "Consejos",
    date: "28 diciembre 2023",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    readTime: "7 min lectura",
  },
];

const categories = [
  { name: "Todos", count: 12 },
  { name: "Mercado inmobiliario", count: 4 },
  { name: "Vida en Alicante", count: 3 },
  { name: "Consejos", count: 5 },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
              <p className="text-secondary-foreground/80 text-lg">
                Noticias, consejos y tendencias del mercado inmobiliario en Alicante
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          <FadeIn>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <article className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="text-muted-foreground text-xs">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="px-0 text-primary">
                      Leer más
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Cargar más artículos
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Recibe las últimas noticias
              </h2>
              <p className="text-muted-foreground mb-6">
                Suscríbete a nuestra newsletter y mantente al día de las novedades del mercado inmobiliario en Alicante
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="gradient-coral text-white border-0 h-12 px-6">
                  Suscribirse
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Sin spam. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
