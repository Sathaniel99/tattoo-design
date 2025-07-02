import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';
import { SocialIcon } from 'react-social-icons'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


interface FormType {
  name: string
  textarea: string
}

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    textarea: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, [e.target.name]: e.target.value })

  const senMessage = (data: FormType) => {
    const phone = "5359017342"; // tu número sin signos ni espacios
    const text = `Hola, soy ${data.name} y quiero agendar una sesión para el día ${data.textarea}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    senMessage(formValues)
  }


  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación del estudio',
      details: ['123 Cyber Street', 'Neo City, NC 12345']
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+53 59017342']
    },
    {
      icon: Mail,
      title: 'Coreo Electrónico',
      details: ['hello@neonink.studio']
    },
    {
      icon: Clock,
      title: 'Horarios de estudio',
      details: ['Lunes-Viernes: 10AM-8PM', 'Sábado: 12PM-6PM', 'Domingo: Cerrado']
    }
  ];
  const redes = [
    {
      url: 'https://www.instagram.com/graphite_gray_clouds'
    },
    {
      url: 'https://www.threads.com/@graphite_gray_clouds'
    },
    {
      url: 'https://www.facebook.com/graphite.gray.clouds'
    },
    {
      url: 'https://wa.me/+5354528530'
    }
  ]



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
                {redes.map((platform) => (
                  <SocialIcon url={platform.url} className='hover:shadow-lg hover:shadow-neutral-600 rounded-full transition-all duration-200' />
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
                  value={formValues.name}
                  
                  className="glass-effect resize-none transition-all duration-300"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Cuéntame tu idea..."
                  rows={5}
                  value={formValues.textarea}
                  
                  className="glass-effect resize-none transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full neon-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-2000 animate-glow-pulse"
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