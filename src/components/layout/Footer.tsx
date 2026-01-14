import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="New House Alicante" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              Tu inmobiliaria de confianza en Alicante. Especialistas en Playa San Juan 
              y Cabo de las Huertas con un servicio personalizado y profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegación</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Inicio
              </Link>
              <Link to="/propiedades" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Propiedades
              </Link>
              <Link to="/servicios" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Servicios
              </Link>
              <Link to="/vender" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Vender mi inmueble
              </Link>
              <Link to="/nosotros" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Nosotros
              </Link>
              <Link to="/blog" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link to="/contacto" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/servicios" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Compra de inmuebles
              </Link>
              <Link to="/servicios" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Venta de inmuebles
              </Link>
              <Link to="/servicios" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Alquiler
              </Link>
              <Link to="/vender" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                Valoración gratuita
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+34644476045"
                className="flex items-start gap-3 text-secondary-foreground/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>(+34) 644 476 045</span>
              </a>
              <a
                href="mailto:info@newhousealicante.es"
                className="flex items-start gap-3 text-secondary-foreground/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@newhousealicante.es</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Calle del Currican 44 local 22,<br />
                  Centro comercial Azahara,<br />
                  Cabo de las Huertas, 03540 Alicante
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} New House Alicante. Todos los derechos reservados.
            </p>
            <nav className="flex items-center gap-6">
              <Link
                to="/privacidad"
                className="text-secondary-foreground/60 hover:text-white transition-colors text-sm"
              >
                Política de privacidad
              </Link>
              <Link
                to="/cookies"
                className="text-secondary-foreground/60 hover:text-white transition-colors text-sm"
              >
                Cookies
              </Link>
              <Link
                to="/aviso-legal"
                className="text-secondary-foreground/60 hover:text-white transition-colors text-sm"
              >
                Aviso legal
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
