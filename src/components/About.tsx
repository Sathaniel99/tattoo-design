import React, { useState } from 'react';
import { Award, Users, BicepsFlexed } from 'lucide-react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  "/tattoo-design/contact/photo_1.jpg",
  "/tattoo-design/contact/photo_2.jpg",
  "/tattoo-design/contact/photo_3.jpg",
  "/tattoo-design/contact/photo_4.jpg",
];

const About = () => {
  const stats = [
    { icon: BicepsFlexed, label: 'Años de Experiencia', value: '8+' },
    { icon: Users, label: 'Seguidores', value: '4.6 mil+' }
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold neon-text">
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
            {/* Artist Image Carousel */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden glow-card bg-transparent">
                <img
                  src={images[current]}
                  alt={`Tatuador ${current + 1}`}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
                />
                {/* Botones de navegación con Material UI */}
                <IconButton
                  onClick={prevImage}
                  className="!absolute !left-2 !top-1/2 -translate-y-1/2 !bg-black/40 !text-white backdrop-blur hover:!bg-black/70 transition"
                  aria-label="Anterior"
                  size="large"
                  style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', border: '1px solid grey' }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                  onClick={nextImage}
                  className="!absolute !right-2 !top-1/2 -translate-y-1/2 !bg-black/40 !text-white backdrop-blur hover:!bg-black/70 transition"
                  aria-label="Siguiente"
                  size="large"
                  style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', border: '1px solid grey' }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
                {/* Indicadores */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-primary' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/50 rounded-full animate-float backdrop-blur"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center glow-card p-6 rounded-lg">
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