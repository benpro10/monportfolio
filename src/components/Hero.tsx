import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg text-primary font-medium">Salut 👋</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Je suis{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Développeur
                </span>
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Full-Stack
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionné par la création d'applications web modernes et innovantes. 
              Je transforme vos idées en solutions digitales performantes avec React, Node.js et les technologies de pointe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('portfolio')}
              >
                Voir mes projets
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('contact')}
              >
                Me contacter
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 animate-pulse" />
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={profilePhoto}
                  alt="Photo de profil"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;