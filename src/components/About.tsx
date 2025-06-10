import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Zap, label: 'Años de Experiencia', value: '8+' },
    { icon: Users, label: 'Clientes Satisfechos', value: '500+' },
    { icon: Award, label: 'Premios Ganados', value: '12' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Acerca del Artista
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bienvenido al futuro del arte corporal. Soy un tatuador visionario especializado en diseños cyberpunk, geométricos y futuristas que desafían los límites del tatuaje tradicional.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi trabajo combina técnicas digitales de arte de vanguardia con una maestría en el uso de la aguja,
              creando piezas que parecen descargadas directamente del ciberespacio a tu piel.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 neon-text">Especialidades</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Diseños Cyberpunk y Ciencia Ficción</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Geometría Sagrada y Mandalas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Blackwork y Dotwork</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Efectos Neón y Brillo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="space-y-8">
            {/* Artist Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden glow-card">
                <img
                  src="https://i.pinimg.com/originals/b1/6f/fd/b16ffd120f5b763c28f892e946249097.jpg"
                  alt="Tatuador"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/50 rounded-full animate-float"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glow-card p-6 rounded-lg">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold neon-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;