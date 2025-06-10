import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-slide-up">
        <div className="mb-6">
          <Sparkles className="w-12 h-12 mx-auto mb-4 neon-text animate-glow-pulse" />
        </div>
        
        <h1 className="text-5xl font-bold neon-text mb-4">
          Tatuajes Futuristas, Arte Inolvidable
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Lleva tu piel al siguiente nivel con diseños cyberpunk, geométricos y efectos neón únicos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="neon-border bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 animate-glow-pulse">
            Ver Galeria
          </Button>
          <Button size="lg" variant="outline" className="glass-effect border-border text-muted-foreground hover:text-white hover:bg-primary/10 transition-all duration-300">
            Consultar libro
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
