import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Mon parcours</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Développeur Full-Stack avec une expérience dans la création 
                  d'applications web modernes et performantes. Passionné par les nouvelles 
                  technologies et l'innovation numérique.
                </p>
                <p>
                  Spécialisé dans l'écosystème JavaScript, je maîtrise React, 
                  Node.js, et les technologies cloud. J'aime créer des expériences utilisateur 
                  exceptionnelles et des architectures robustes.
                </p>
                <p>
                  Toujours en quête d'apprentissage, je reste à l'affût des dernières tendances 
                  technologiques pour offrir des solutions innovantes et adaptées aux besoins métier.
                </p>
              </div>
            </Card>
          </div>

          {/* <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projets réalisés</div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies maîtrisées</div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Clients satisfaits</div>
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;