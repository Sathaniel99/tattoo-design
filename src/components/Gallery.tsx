import { useState } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos los Trabajos' },
    { id: 'flores', name: 'Flores' },
    { id: 'tribal', name: 'Tribal' },
    { id: 'rostros', name: 'Rostros' },
    { id: 'animales', name: 'Animales' },
    { id: 'animados', name: 'Animados' },
    { id: 'minimalista', name: 'Minimalista' },
  ];

  // Placeholder tattoo gallery data
  const tattoos = [
    { id: 1, category: 'flores', image: '/tattoo-design/tattoos/tattoo_ (1).jpeg' },
    { id: 2, category: 'flores', image: '/tattoo-design/tattoos/tattoo_ (3).jpeg' },
    { id: 3, category: 'flores', image: '/tattoo-design/tattoos/tattoo_ (18).jpeg' },
    { id: 4, category: 'rostros', image: '/tattoo-design/tattoos/tattoo_ (5).jpeg' },
    { id: 5, category: 'rostros', image: '/tattoo-design/tattoos/tattoo_ (9).jpeg' },
    { id: 6, category: 'rostros', image: '/tattoo-design/tattoos/tattoo_ (11).jpeg' },
    { id: 7, category: 'rostros', image: '/tattoo-design/tattoos/tattoo_ (12).jpeg' },
    { id: 8, category: 'rostros', image: '/tattoo-design/tattoos/tattoo_ (19).jpeg' },
    { id: 9, category: 'animados', image: '/tattoo-design/tattoos/tattoo_ (8).jpeg' },
    { id: 10, category: 'animados', image: '/tattoo-design/tattoos/tattoo_ (10).jpeg' },
    { id: 11, category: 'animados', image: '/tattoo-design/tattoos/tattoo_ (15).jpeg' },
    { id: 12, category: 'tribal', image: '/tattoo-design/tattoos/tattoo_ (2).jpeg' },
    { id: 13, category: 'tribal', image: '/tattoo-design/tattoos/tattoo_ (6).jpeg' },
    { id: 14, category: 'tribal', image: '/tattoo-design/tattoos/tattoo_ (7).jpeg' },
    { id: 15, category: 'animales', image: '/tattoo-design/tattoos/tattoo_ (4).jpeg' },
    { id: 16, category: 'animales', image: '/tattoo-design/tattoos/tattoo_ (13).jpeg' },
    { id: 17, category: 'animales', image: '/tattoo-design/tattoos/tattoo_ (14).jpeg' },
    { id: 18, category: 'animales', image: '/tattoo-design/tattoos/tattoo_ (17).jpeg' },
    { id: 19, category: 'minimalista', image: '/tattoo-design/tattoos/tattoo_ (16).jpeg' },
  ];
  const filteredTattoos = activeFilter === 'all' ? tattoos : tattoos.filter(tattoo => tattoo.category === activeFilter);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold neon-text mb-8">
            Galería de Tatuajes
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explora algunos de mis trabajos más recientes y encuentra inspiración para tu próximo tatuaje.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === category.id
                  ? 'neon-border bg-primary/10 text-primary'
                  : 'border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-6">
          {filteredTattoos.map((tattoo, index) => (
            <div
              key={tattoo.id}
              className="group relative glow-card rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-neutral-600"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={tattoo.image}
                  alt={tattoo.category + "_" + tattoo.id}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-full glass-effect flex items-center justify-center bg-transparent backdrop-blur text-white hover:text-primary transition-colors active:bg-black active:text-white">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;