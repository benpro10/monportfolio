import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import blogHero from '@/assets/blog-hero.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Qu\'est-ce qu\'il faut pour devenir développeur web?',
      excerpt: 'Guide complet pour débuter dans le développement web en 2024. Découvrez les compétences essentielles, les langages à apprendre et les ressources incontournables.',
      image: blogHero,
      date: '15 Jan 2024',
      readTime: '5 min',
      category: 'Carrière'
    },
    {
      id: 2,
      title: 'Les tendances React en 2024',
      excerpt: 'Explorez les dernières fonctionnalités de React, les hooks avancés, et les meilleures pratiques pour optimiser vos applications.',
      image: blogHero,
      date: '10 Jan 2024',
      readTime: '8 min',
      category: 'React'
    },
    {
      id: 3,
      title: 'TypeScript : Pourquoi l\'adopter ?',
      excerpt: 'Découvrez comment TypeScript améliore la qualité de votre code JavaScript et accélère le développement de vos projets.',
      image: blogHero,
      date: '5 Jan 2024',
      readTime: '6 min',
      category: 'TypeScript'
    },
    {
      id: 4,
      title: 'Optimisation des performances web',
      excerpt: 'Techniques avancées pour améliorer les performances de vos applications web : lazy loading, code splitting, et plus encore.',
      image: blogHero,
      date: '28 Dec 2023',
      readTime: '10 min',
      category: 'Performance'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Mes réflexions sur le développement web, les nouvelles technologies et conseils pratiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className={`group overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row">
                <div className={`relative overflow-hidden ${index === 0 ? 'md:w-1/2' : 'md:w-1/3'}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className={`p-6 flex flex-col justify-between ${index === 0 ? 'md:w-1/2' : 'md:w-2/3'}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} de lecture</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 self-start text-primary hover:text-primary hover:bg-primary/10 p-0"
                  >
                    Lire la suite
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Voir tous les articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;