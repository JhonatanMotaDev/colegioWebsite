import { Card, CardContent } from '@/components/ui/card'
import { Target, Heart, Star, Users } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excelência',
      description: 'Buscamos sempre a excelência em tudo que fazemos, desde o ensino até o atendimento.'
    },
    {
      icon: Heart,
      title: 'Cuidado',
      description: 'Cada aluno é único e merece atenção personalizada para seu desenvolvimento.'
    },
    {
      icon: Star,
      title: 'Inovação',
      description: 'Utilizamos metodologias modernas e tecnologia para potencializar o aprendizado.'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Construímos uma comunidade educativa forte, envolvendo família e escola.'
    }
  ]

  return (
    <section id="institucional" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Sobre o Colégio Padrão
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Há mais de 45 anos, o Colégio Padrão tem sido referência em educação de qualidade, 
                formando gerações de estudantes preparados para os desafios do futuro.
              </p>
              
              <p>
                Nossa missão é proporcionar uma educação integral, que desenvolva não apenas 
                o conhecimento acadêmico, mas também os valores humanos, a criatividade e 
                o pensamento crítico de nossos alunos.
              </p>
              
              <p>
                Acreditamos que cada criança e jovem tem potencial único, e nosso papel é 
                criar um ambiente estimulante e acolhedor onde possam descobrir e desenvolver 
                seus talentos.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="mt-12 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Formar cidadãos éticos, críticos e criativos, preparados para contribuir 
                  positivamente com a sociedade.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a melhor instituição de ensino da região, 
                  referência em inovação educacional e formação humana.
                </p>
              </div>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className="space-y-8">
            {/* Image placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center border">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Campus Moderno</p>
              </div>
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 border-0 bg-primary/5">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">45+</div>
                  <div className="text-sm text-muted-foreground">Anos de tradição</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-0 bg-secondary/5">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Professores qualificados</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Nossos Valores
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que norteiam nossa prática educativa e nossa relação com a comunidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center p-6 border-0 bg-card/50 hover:bg-card transition-colors">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

