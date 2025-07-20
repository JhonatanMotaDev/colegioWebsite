import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Baby, Users, Trophy, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Courses = () => {
  const courses = [
    {
      id: 'educacao-infantil',
      title: 'Educação Infantil',
      description: 'Desenvolvimento integral da criança através de atividades lúdicas e pedagógicas.',
      age: '2 a 5 anos',
      icon: Baby,
      features: [
        'Ambiente acolhedor e seguro',
        'Atividades recreativas',
        'Desenvolvimento motor',
        'Socialização'
      ],
      color: 'from-primary/20 to-primary/5'
    },
    {
      id: 'ensino-fundamental',
      title: 'Ensino Fundamental',
      description: 'Base sólida em conhecimentos fundamentais com metodologia inovadora.',
      age: '6 a 14 anos',
      icon: Users,
      features: [
        'Currículo atualizado',
        'Laboratórios modernos',
        'Atividades extracurriculares',
        'Acompanhamento individual'
      ],
      color: 'from-secondary/20 to-secondary/5'
    },
    {
      id: 'ensino-medio',
      title: 'Ensino Médio',
      description: 'Preparação completa para vestibulares e formação cidadã.',
      age: '15 a 17 anos',
      icon: Trophy,
      features: [
        'Preparação vestibular',
        'Orientação profissional',
        'Projetos de pesquisa',
        'Intercâmbio cultural'
      ],
      color: 'from-primary/20 to-secondary/20'
    }
  ]

  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nossos Cursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos educação de qualidade em todos os níveis, 
            com metodologia moderna e foco no desenvolvimento integral do aluno.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => {
            const IconComponent = course.icon
            return (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {course.age}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {course.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={`/curso/${course.id}`}>
                    <Button variant="outline" className="w-full group mt-6">
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para começar?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Entre em contato conosco e descubra como podemos ajudar no desenvolvimento do seu filho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Agendar visita
            </Button>
            <Button variant="outline" size="lg">
              Falar com consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses

