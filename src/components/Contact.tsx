import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación del estudio',
      details: ['123 Cyber Street', 'Neo City, NC 12345']
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+1 (555) 123-4567']
    },
    {
      icon: Mail,
      title: 'Coreo Electrónico',
      details: ['hello@neonink.studio']
    },
    {
      icon: Clock,
      title: 'Horarios de estudio',
      details: ['Lunes-Viernes: 10AM-8PM', 'Sábado: 12PM-6PM', 'Domingo: Closed']
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold neon-text mb-8">
            Contáctame
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            ¿Listo para tu próximo tatuaje? Completa el formulario y me pondré en contacto contigo pronto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 neon-text">Información de Contacto</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4 glow-card p-6 rounded-lg">
                <info.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glow-card p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Sigue Mi Trabajo</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Twitter', 'TikTok'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 rounded-full glass-effect border border-primary/50 text-sm hover:bg-primary/10 transition-all duration-300"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glow-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 neon-text">Envía un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="glass-effect border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="glass-effect border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Cuéntame tu idea..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="glass-effect border-primary/30 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full neon-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 animate-glow-pulse"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;