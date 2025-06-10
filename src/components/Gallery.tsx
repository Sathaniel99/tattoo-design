import { useState } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos los Trabajos' },
    { id: 'cyberpunk', name: 'Cyberpunk' },
    { id: 'geometric', name: 'Geométricos' },
    { id: 'blackwork', name: 'Blackwork' },
    { id: 'color', name: 'Color' }
  ];

  // Placeholder tattoo gallery data
  const tattoos = [
    { id: 1, category: 'cyberpunk', image: 'https://i.etsystatic.com/37009083/r/il/300d3e/4228929192/il_1080xN.4228929192_kzoi.jpg', title: 'Neural Interface', likes: 124 },
    { id: 2, category: 'geometric', image: 'https://outsons.com/wp-content/uploads/2021/11/Sacred-Geometry-Tattoos-1024x807.jpg', title: 'Sacred Geometry', likes: 89 },
    { id: 3, category: 'blackwork', image: 'https://th.bing.com/th/id/R.7cc1f4f62598e286388042f9317c069a?rik=rBfDPu9NKbXChw&pid=ImgRaw&r=0', title: 'Dark Mandala', likes: 156 },
    { id: 4, category: 'color', image: 'https://th.bing.com/th/id/R.208d22527cdd4966432e0cbb9b1c2016?rik=xq2459iK4w2pFg&pid=ImgRaw&r=0', title: 'Neon Dreams', likes: 203 },
    { id: 5, category: 'cyberpunk', image: 'https://tse3.mm.bing.net/th/id/OIP.HjX42nLYZXR4vzKUjU-FQwHaJ4?r=0&rs=1&pid=ImgDetMain', title: 'Circuit Board', likes: 167 },
    { id: 6, category: 'geometric', image: 'https://th.bing.com/th/id/R.8db1a0660f3130fa72965929905a15c4?rik=GwUptstrZ9ZEHA&pid=ImgRaw&r=0', title: 'Hexagonal Flow', likes: 98 }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTattoos.map((tattoo, index) => (
            <div
              key={tattoo.id}
              className="group relative glow-card rounded-lg overflow-hidden transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={tattoo.image}
                  alt={tattoo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold mb-2">{tattoo.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-white/80">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{tattoo.likes}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-full glass-effect flex items-center justify-center text-white hover:text-primary transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full glass-effect flex items-center justify-center text-white hover:text-primary transition-colors">
                        <Share2 className="w-4 h-4" />
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