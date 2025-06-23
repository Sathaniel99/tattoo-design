import { Clock, DollarSign, Palette, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Diseño Personalizado',
      description: 'Diseños de tatuajes únicos y personalizados creados específicamente para ti.',
      price: 'Desde $200',
      duration: '2-4 horas'
    },
    {
      icon: Zap,
      title: 'Estilo Cyberpunk',
      description: 'Diseños futuristas con efectos de neón y estética digital.',
      price: 'Desde $300',
      duration: '3-6 horas'
    },
    {
      icon: Shield,
      title: 'Trabajo de Cubrir',
      description: 'Transforma viejos tatuajes en impresionantes nuevas obras de arte futurista.',
      price: 'Desde $250',
      duration: '4-8 horas'
    },
    {
      icon: Palette,
      title: 'Servicio de Retoque',
      description: 'Refresca y mejora tus tatuajes existentes',
      price: 'Desde $100',
      duration: '1-2 horas'
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Servicios de tatuajes profesionales con un toque futurista
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="glow-card p-6 rounded-lg text-center group hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between">
              <div>
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:animate-glow-pulse rounded-full group-hover:bg-primary/10" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
              <div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-sm">
                    <DollarSign className="w-4 h-4 mr-1 text-primary" />
                    <span className="neon-text font-semibold">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="glass-effect border-primary/50 hover:bg-primary/10 transition-all duration-300 text-primary hover:text-white group-hover:bg-primary/20"
                >
                  Reserva ahora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="glow-card p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8 neon-text">El Proceso</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consulta', desc: 'Discute tu visión e ideas' },
              { step: '02', title: 'Diseño', desc: 'Crea arte personalizado para ti' },
              { step: '03', title: 'Sesión', desc: 'Proceso profesional de tatuaje' },
              { step: '04', title: 'Cuidado posterior', desc: 'Orientación para una correcta curación' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full neon-border flex items-center justify-center neon-text font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
