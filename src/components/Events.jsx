import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Carnaval',
      description: 'Celebração cultural com desfiles, fantasias e muita alegria.',
      date: '12/02/2024',
      time: '14:00h',
      location: 'Colégio Padrão',
      category: 'Cultural',
      featured: false
    },
    
    {
      id: 2,
      title: 'Mini ONU',
      description: 'Simulação diplomática para desenvolvimento de oratória e pensamento crítico.',
      date: '29/05/2024',
      time: '19:00h',
      location: 'Colégio Padrão',
      category: 'Acadêmico',
      featured: true
    },
    
    {
      id: 3,
      title: 'Coroação',
      description: 'Evento simbólico e religioso com participação dos alunos.',
      date: '31/05/2024',
      time: '19:00h',
      location: 'Colégio Padrão',
      category: 'Cultural',
      featured: false
    },
    
    {
      id: 4,
      title: 'Dia das Mães',
      description: 'Comemoração especial em homenagem às mães dos nossos alunos.',
      date: '12/05/2024',
      time: '19:00h',
      location: 'Colégio Padrão',
      category: 'Social',
      featured: true
    },
    
    {
      id: 5,
      title: 'Festa Junina',
      description: 'Tradição nordestina com comidas típicas, danças e alegria.',
      date: '29/07/2024',
      time: '14:00h',
      location: 'Colégio Padrão',
      category: 'Cultural',
      featured: false
    },

    {
      id: 6,
      title: 'Padrão Music',
      description: 'Festival musical para revelar os talentos da comunidade escolar.',
      date: '12/08/2024',
      time: '14:00h',
      location: 'Colégio Padrão',
      category: 'Cultural',
      featured: false
    },

    {
      id: 7,
      title: 'Dia dos Pais',
      description: 'Homenagem e integração entre pais, filhos e escola.',
      date: '08/08/2024',
      time: '18:00h',
      location: 'Colégio Padrão',
      category: 'Social',
      featured: true
    },

    {
      id: 8,
      title: 'Artes na Primavera',
      description: 'Exposição de trabalhos artísticos e apresentações culturais.',
      date: '04/10/2024',
      time: '07:00h - 17:00h',
      location: 'Colégio Padrão',
      category: 'Cultural',
      featured: false
    },


    {
      id: 9,
      title: 'Olimpadrão',
      description: 'Competição esportiva interna com espírito de equipe e fair play.',
      date: '04/12/2024',
      time: '14:00h',
      location: 'Colégio Padrão',
      category: 'Acadêmico',
      featured: false
    },
    
    {
      id: 10,
      title: 'Jornada Científica',
      description: 'Apresentação de projetos científicos desenvolvidos pelos alunos.',
      date: '19/11/2024',
      time: '19:00h',
      location: 'Colégio Padrão',
      category: 'Acadêmico',
      featured: true
    },
    
    {
      id: 11,
      title: 'Formatura',
      description: 'Cerimônia de conclusão das etapas escolares dos alunos.',
      date: '10/12/2024',
      time: '20:00h',
      location: 'Colégio Padrão',
      category: 'Institucional',
      featured: false
    },
    
    {
      id: 12,
      title: 'Cantata de Natal',
      description: 'Encerramento do ano letivo com música e espírito natalino.',
      date: '25/12/2024',
      time: '19:00h',
      location: 'Colégio Padrão',
      category: 'Cultural',
      featured: true
    }
  ]
  

  const getCategoryColor = (category) => {
    const colors = {
      'Acadêmico': 'bg-primary/10 text-primary',
      'Cultural': 'bg-secondary/10 text-secondary',
      'Institucional': 'bg-muted text-muted-foreground',
      'Social': 'bg-accent/10 text-accent-foreground'
    }
    return colors[category] || 'bg-muted text-muted-foreground'
  }

  return (
    <section id="eventos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Próximos Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossa agenda de atividades e participe da vida escolar. 
            Eventos que enriquecem a experiência educativa de nossos alunos.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className={`group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur ${
                event.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                  {event.featured && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      Destaque
                    </span>
                  )}
                </div>
                
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                
                <CardDescription className="text-sm text-muted-foreground">
                  {event.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  {event.date}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  {event.time}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {event.location}
                </div>
                
                <Button variant="outline" className="w-full group mt-4">
                  Mais informações
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendar CTA */}
        <div className="text-center bg-card rounded-2xl p-8 border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Calendário Completo
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Acesse nosso calendário completo e não perca nenhum evento importante da vida escolar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Ver calendário completo
            </Button>
            <Button variant="outline" size="lg">
              Receber notificações
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

