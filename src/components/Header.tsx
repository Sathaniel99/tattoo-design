import { useState, useEffect, FormEvent, FormEventHandler } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as Dialog from '@radix-ui/react-dialog';

interface FormType {
  name: string
  date: string
}


const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Acerca', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Contacto', href: '#contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formValues, setFormValues] = useState({
    name: '',
    date: ''
  });
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].href);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Ajusta el offset si tienes header fijo
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


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, [e.target.name]: e.target.value })

  const senMessage = (data: FormType) => {
    const phone = "5359017342"; // tu número sin signos ni espacios
    const text = `Hola, soy ${data.name} y quiero agendar una sesión para el día ${data.date}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    senMessage(formValues)
  }
  return (
    <header className="fixed top-0 w-full z-50 glass-effect" style={ { background: 'rgb(0 0 0 / 45%)'} }>
      <Dialog.Root open={open} onOpenChange={setOpen}>
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
                <a
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
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Dialog.Trigger asChild>
              <Button
                className="hidden md:flex neon-border bg-transparent text-muted-foreground hover:text-white hover:bg-primary/10 transition-all duration-300 active:bg-cyan-500 active:text-black"
              >
                Reservar sesión
              </Button>
            </Dialog.Trigger>

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
                <Dialog.Trigger asChild>
                  <Button
                    className="neon-border bg-transparent text-muted-foreground hover:text-white hover:bg-primary/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agendar Sesión
                  </Button>
                </Dialog.Trigger>
              </nav>
            </div>
          )}

          {/* Modal Dialog */}
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-8 rounded-xl shadow-xl w-full max-w-sm focus:outline-none">
              <Dialog.Title className="text-2xl font-bold neon-text animate-glow-pulse mb-4">Agendar Sesión</Dialog.Title>
              <form
                onSubmit={handleSubmit}
                className="space-y-4">
                <label className="block text-sm mb-1" htmlFor="name">Nombre <input
                  id="name"
                  type="text"
                  name='name'
                  required
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm glass-effect transition-all duration-300"
                  value={formValues.name}
                  onChange={handleChange}
                /></label>
                <label className="block text-sm mb-1" htmlFor="date">Fecha a Agendar <input type="date"
                  name='date'
                  id='date'
                  required
                  value={formValues.date}
                  onChange={handleChange}
                  className="w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm glass-effect transition-all duration-300"
                /></label>
                <div className="flex justify-end gap-2 pt-2">
                  <Dialog.Close asChild>
                    <Button variant="outline" type="button">
                      Cancelar
                    </Button>
                  </Dialog.Close>
                  <Button type="submit" className='text-black'>
                    Agendar
                  </Button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </div>
      </Dialog.Root>
    </header>
  );
};

export default Header;