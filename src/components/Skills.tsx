import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Next.js', level: 80, icon: '▲' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Vue.js', level: 75, icon: '💚' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Express', level: 85, icon: '🚀' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'GraphQL', level: 75, icon: '📊' },
      ]
    },
    {
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git', level: 90, icon: '📋' },
        { name: 'Docker', level: 78, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'Jest', level: 80, icon: '🧪' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications web modernes et performantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{category.title}</h3>
                <div className="w-12 h-1 bg-gradient-primary mx-auto rounded-full" />
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 3 + skillIndex) * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;