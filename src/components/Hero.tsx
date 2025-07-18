import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleScrollToGallery = () => {
    const gallerySection = document.querySelector("#gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-20 left-10 w-20 h-20 border border-slate-500/30 rounded-full animate-float backdrop-blur"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/30 rounded-full animate-float backdrop-blur" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-slide-up">
        <img
          src="/tattoo-design/contact/logo.jpg"
          alt="Logo"
          className="mb-20"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center absolute w-full">
          <Button
            size="lg"
            className="neon-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-2000 animate-glow-pulse"
            onClick={handleScrollToGallery}
          >
            Mini-Galería
          </Button>
          <Button
            onClick={() => navigate("/gallery")}
            size="lg"
            className="md:flex border-neutral-500 border-2 bg-neutral-950 text-muted-foreground hover:text-white hover:bg-neutral-800 transition-all duration-300 active:bg-neutral-700 active:text-white"
            
          >
            Toda la Galería
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
