import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from "@/context/ModalContext";

const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Acerca', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Contacto', href: '#contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].href);
  const { setOpen } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = navItems[0].href;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el && el instanceof HTMLElement) {
          if (el.offsetTop <= scrollPosition) {
            currentSection = item.href;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Para marcar la sección correcta al cargar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect" style={{ background: 'rgb(0 0 0 / 45%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/tattoo-design/contact/ico.png"
              alt="Logo"
              className="h-8"
            />
            <span className="text-xl font-bold neon-text">Gray Clouds</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={e => {
                  e.preventDefault();
                  const el = document.querySelector(item.href);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
                className={`text-foreground hover:text-primary transition-colors duration-300 relative group hover:cursor-pointer
                  ${activeSection === item.href ? 'text-primary' : ''}
                `}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300
                  ${activeSection === item.href ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            className="hidden md:flex neon-border bg-transparent text-muted-foreground hover:text-white hover:bg-primary/10 transition-all duration-300 active:bg-cyan-500 active:text-black"
            onClick={() => setOpen(true)}
          >
            Reservar sesión
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-gray-700 m-2 mb-4 rounded-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="neon-border bg-transparent text-muted-foreground hover:text-white hover:bg-primary/10"
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpen(true);
                }}
              >
                Agendar Sesión
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;