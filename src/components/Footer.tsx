import { Zap, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 neon-text" />
              <span className="text-xl font-bold neon-text">NEON INK</span>
            </div>
            <p className="text-muted-foreground">
              Transformando la piel en arte digital con tatuajes futuristas de vanguardia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Galería', 'Servicios', 'Acerca', 'Contacto', 'Reservar Cita'].map((link, i) => (
                <li key={link}>
                  <a href={`#${['galeria','servicios','acerca','contacto','reservar-cita'][i]}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Información del Estudio</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Calle Cyber 123</p>
              <p>Neo Ciudad, NC 12345</p>
              <p>+1 (555) 123-4567</p>
              <p>hola@neonink.studio</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Neon Ink Studio. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Hecho con <Heart className="w-4 h-4 mx-1 text-primary" /> para el futuro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;