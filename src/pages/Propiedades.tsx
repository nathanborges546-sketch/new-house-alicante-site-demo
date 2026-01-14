import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Search } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import Layout from "@/components/layout/Layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allProperties = [
  {
    id: 1,
    title: "Ático con vistas al mar",
    location: "Playa San Juan",
    price: 425000,
    priceFormatted: "425.000 €",
    bedrooms: 3,
    bathrooms: 2,
    size: 120,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    type: "venta",
    propertyType: "atico",
  },
  {
    id: 2,
    title: "Apartamento reformado",
    location: "Cabo de las Huertas",
    price: 285000,
    priceFormatted: "285.000 €",
    bedrooms: 2,
    bathrooms: 1,
    size: 85,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    type: "venta",
    propertyType: "apartamento",
  },
  {
    id: 3,
    title: "Villa con piscina privada",
    location: "Playa San Juan",
    price: 750000,
    priceFormatted: "750.000 €",
    bedrooms: 4,
    bathrooms: 3,
    size: 280,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    type: "venta",
    propertyType: "villa",
  },
  {
    id: 4,
    title: "Piso luminoso cerca del mar",
    location: "Cabo de las Huertas",
    price: 1200,
    priceFormatted: "1.200 €/mes",
    bedrooms: 2,
    bathrooms: 1,
    size: 75,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    type: "alquiler",
    propertyType: "piso",
  },
  {
    id: 5,
    title: "Chalet adosado con jardín",
    location: "Playa San Juan",
    price: 395000,
    priceFormatted: "395.000 €",
    bedrooms: 3,
    bathrooms: 2,
    size: 150,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
    type: "venta",
    propertyType: "chalet",
  },
  {
    id: 6,
    title: "Estudio moderno reformado",
    location: "Centro Alicante",
    price: 145000,
    priceFormatted: "145.000 €",
    bedrooms: 1,
    bathrooms: 1,
    size: 45,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    type: "venta",
    propertyType: "estudio",
  },
  {
    id: 7,
    title: "Apartamento con terraza",
    location: "Playa San Juan",
    price: 950,
    priceFormatted: "950 €/mes",
    bedrooms: 1,
    bathrooms: 1,
    size: 55,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    type: "alquiler",
    propertyType: "apartamento",
  },
  {
    id: 8,
    title: "Piso familiar con parking",
    location: "Cabo de las Huertas",
    price: 320000,
    priceFormatted: "320.000 €",
    bedrooms: 3,
    bathrooms: 2,
    size: 110,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    type: "venta",
    propertyType: "piso",
  },
];

const Propiedades = () => {
  const [operationType, setOperationType] = useState<string>("todos");
  const [propertyType, setPropertyType] = useState<string>("todos");
  const [zone, setZone] = useState<string>("todos");
  const [priceRange, setPriceRange] = useState<string>("todos");

  const filteredProperties = allProperties.filter((property) => {
    if (operationType !== "todos" && property.type !== operationType) return false;
    if (propertyType !== "todos" && property.propertyType !== propertyType) return false;
    if (zone !== "todos" && !property.location.toLowerCase().includes(zone.toLowerCase())) return false;
    if (priceRange !== "todos") {
      if (property.type === "alquiler") {
        if (priceRange === "bajo" && property.price > 1000) return false;
        if (priceRange === "medio" && (property.price < 1000 || property.price > 1500)) return false;
        if (priceRange === "alto" && property.price < 1500) return false;
      } else {
        if (priceRange === "bajo" && property.price > 200000) return false;
        if (priceRange === "medio" && (property.price < 200000 || property.price > 400000)) return false;
        if (priceRange === "alto" && property.price < 400000) return false;
      }
    }
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Propiedades en Alicante</h1>
              <p className="text-secondary-foreground/80 text-lg">
                Encuentra tu próximo hogar entre nuestra selección de propiedades en las mejores zonas de Alicante
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container-custom">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Search className="h-5 w-5" />
                <span className="font-medium">Filtrar:</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 w-full">
                <Select value={operationType} onValueChange={setOperationType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Operación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas las operaciones</SelectItem>
                    <SelectItem value="venta">Venta</SelectItem>
                    <SelectItem value="alquiler">Alquiler</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de inmueble" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los tipos</SelectItem>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="piso">Piso</SelectItem>
                    <SelectItem value="atico">Ático</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="chalet">Chalet</SelectItem>
                    <SelectItem value="estudio">Estudio</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={zone} onValueChange={setZone}>
                  <SelectTrigger>
                    <SelectValue placeholder="Zona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas las zonas</SelectItem>
                    <SelectItem value="playa san juan">Playa San Juan</SelectItem>
                    <SelectItem value="cabo de las huertas">Cabo de las Huertas</SelectItem>
                    <SelectItem value="centro">Centro Alicante</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Precio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los precios</SelectItem>
                    <SelectItem value="bajo">Hasta 200.000 € / 1.000 €/mes</SelectItem>
                    <SelectItem value="medio">200.000 € - 400.000 € / 1.000 - 1.500 €/mes</SelectItem>
                    <SelectItem value="alto">Más de 400.000 € / 1.500 €/mes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <p className="text-muted-foreground mb-8">
              Mostrando {filteredProperties.length} propiedad{filteredProperties.length !== 1 ? "es" : ""}
            </p>
          </FadeIn>

          {filteredProperties.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <StaggerItem key={property.id}>
                  <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-medium ${
                        property.type === "venta" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-secondary-foreground"
                      }`}>
                        {property.type === "venta" ? "Venta" : "Alquiler"}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{property.location}</span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {property.title}
                      </h3>
                      <p className="text-xl font-bold text-primary mb-3">{property.priceFormatted}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Bed className="h-4 w-4" />
                          {property.bedrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="h-4 w-4" />
                          {property.bathrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Square className="h-4 w-4" />
                          {property.size} m²
                        </span>
                      </div>
                      <Button asChild variant="outline" className="w-full" size="sm">
                        <Link to="/contacto">Consultar</Link>
                      </Button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
                  No se encontraron propiedades con los filtros seleccionados
                </p>
                <Button
                  onClick={() => {
                    setOperationType("todos");
                    setPropertyType("todos");
                    setZone("todos");
                    setPriceRange("todos");
                  }}
                  variant="outline"
                >
                  Limpiar filtros
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Cuéntanos qué estás buscando y te ayudaremos a encontrar la propiedad perfecta para ti
              </p>
              <Button asChild className="gradient-coral text-white border-0">
                <Link to="/contacto">Contactar con nosotros</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Propiedades;
