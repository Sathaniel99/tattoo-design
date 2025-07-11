import { useState } from 'react';
import { Eye, Heart, Share2, X } from 'lucide-react';
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Mini-Galería
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
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeFilter === category.id
                ? 'neon-border bg-primary/10 text-primary'
                : 'border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-hidden" style={{ maskImage: 'linear-gradient(to top, #00000000, rgb(0 0 0))', maxHeight: '40rem' }}>
          <AnimatePresence>
            {filteredTattoos.map((tattoo, index) => (
              <motion.div
                key={tattoo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative glow-card rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-neutral-600 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => setSelectedImage(tattoo.image)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={tattoo.image}
                    alt={tattoo.category + "_" + tattoo.id}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal para la imagen */}
      <Dialog.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
          <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl w-full p-4 flex flex-col items-end">
            <button aria-label="Cerrar" className="mb-2 text-white hover:text-primary" onClick={() => setSelectedImage(null)}>
              <X className="w-8 h-8" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Vista previa"
                className="rounded-lg max-h-[80vh] mx-auto"
              />
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

export default Gallery;