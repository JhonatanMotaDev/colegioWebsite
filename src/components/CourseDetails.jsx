import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Clock, Users, BookOpen, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react'

const CourseDetails = () => {
  const { courseId } = useParams()

  const coursesData = {
    'educacao-infantil': {
      title: 'Educação Infantil',
      subtitle: 'Desenvolvimento integral da criança',
      age: '2 a 5 anos',
      description: 'Nossa Educação Infantil é baseada no desenvolvimento integral da criança, respeitando suas características individuais e promovendo experiências significativas através do brincar.',
      objectives: [
        'Desenvolver a autonomia e independência',
        'Estimular a criatividade e imaginação',
        'Promover a socialização e convivência',
        'Desenvolver habilidades motoras',
        'Introduzir conceitos básicos de letramento e numeramento'
      ],
      methodology: 'Utilizamos uma metodologia lúdica e interativa, onde o brincar é a principal forma de aprendizagem. Nossos espaços são pensados para estimular a curiosidade e a descoberta.',
      schedule: {
        morning: '7h30 às 12h00',
        afternoon: '13h00 às 17h30',
        fullTime: '7h30 às 17h30'
      },
      facilities: [
        'Salas temáticas adaptadas',
        'Parque infantil seguro',
        'Biblioteca infantil',
        'Sala de artes',
        'Refeitório próprio',
        'Enfermaria'
      ],
      activities: [
        'Contação de histórias',
        'Atividades artísticas',
        'Jogos educativos',
        'Música e movimento',
        'Culinária pedagógica',
        'Horta escolar'
      ],
      teachers: '15 professores especializados',
      classSize: 'Máximo 20 alunos por turma',
      price: 'A partir de R$ 850/mês'
    },
    'ensino-fundamental': {
      title: 'Ensino Fundamental',
      subtitle: 'Base sólida para o futuro',
      age: '6 a 14 anos',
      description: 'Nosso Ensino Fundamental oferece uma base sólida em todas as áreas do conhecimento, preparando os alunos para os desafios acadêmicos e pessoais.',
      objectives: [
        'Desenvolver competências em leitura, escrita e matemática',
        'Estimular o pensamento crítico e científico',
        'Promover valores éticos e cidadania',
        'Desenvolver habilidades socioemocionais',
        'Preparar para o Ensino Médio'
      ],
      methodology: 'Metodologia ativa com projetos interdisciplinares, uso de tecnologia educacional e foco no desenvolvimento de competências do século XXI.',
      schedule: {
        morning: '7h00 às 12h20',
        afternoon: '13h00 às 18h20',
        activities: 'Atividades extracurriculares até 19h00'
      },
      facilities: [
        'Laboratório de ciências',
        'Laboratório de informática',
        'Biblioteca com acervo amplo',
        'Quadra poliesportiva',
        'Sala de artes',
        'Auditório'
      ],
      activities: [
        'Projetos de pesquisa',
        'Feira de ciências',
        'Olimpíadas acadêmicas',
        'Teatro e música',
        'Esportes diversos',
        'Robótica educacional'
      ],
      teachers: '25 professores especializados',
      classSize: 'Máximo 25 alunos por turma',
      price: 'A partir de R$ 1.200/mês'
    },
    'ensino-medio': {
      title: 'Ensino Médio',
      subtitle: 'Preparação para o futuro',
      age: '15 a 17 anos',
      description: 'Nosso Ensino Médio prepara os estudantes para os vestibulares mais concorridos e para a vida universitária, desenvolvendo autonomia e pensamento crítico.',
      objectives: [
        'Preparar para vestibulares e ENEM',
        'Desenvolver projeto de vida',
        'Aprofundar conhecimentos científicos',
        'Estimular liderança e protagonismo',
        'Preparar para o mercado de trabalho'
      ],
      methodology: 'Ensino focado em resultados com simulados regulares, plantões de dúvidas, aulas de aprofundamento e orientação vocacional.',
      schedule: {
        morning: '7h00 às 12h40',
        afternoon: 'Plantões e atividades até 18h00',
        saturday: 'Simulados e aulões aos sábados'
      },
      facilities: [
        'Laboratórios avançados',
        'Sala de estudos 24h',
        'Biblioteca universitária',
        'Auditório moderno',
        'Sala de orientação vocacional',
        'Espaço de convivência'
      ],
      activities: [
        'Simulados semanais',
        'Plantões de dúvidas',
        'Orientação vocacional',
        'Projetos de iniciação científica',
        'Modelo ONU',
        'Intercâmbio cultural'
      ],
      teachers: '20 professores mestres e doutores',
      classSize: 'Máximo 30 alunos por turma',
      price: 'A partir de R$ 1.800/mês'
    }
  }

  const course = coursesData[courseId]

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Curso não encontrado</h1>
          <Link to="/">
            <Button>Voltar ao início</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {course.subtitle}
            </p>
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Users className="w-4 h-4 mr-2" />
              {course.age}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Sobre o Curso</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {course.description}
              </p>
            </section>

            {/* Objectives */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Objetivos Pedagógicos</h2>
              <div className="grid gap-4">
                {course.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{objective}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Methodology */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Metodologia</h2>
              <p className="text-muted-foreground leading-relaxed">
                {course.methodology}
              </p>
            </section>

            {/* Facilities */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Infraestrutura</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="w-4 h-4 text-secondary mr-3" />
                    <span className="text-muted-foreground">{facility}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Atividades</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.activities.map((activity, index) => (
                  <div key={index} className="flex items-center">
                    <BookOpen className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Horários</p>
                    <p className="text-sm text-muted-foreground">
                      Manhã: {course.schedule.morning}
                    </p>
                    {course.schedule.afternoon && (
                      <p className="text-sm text-muted-foreground">
                        Tarde: {course.schedule.afternoon}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Turma</p>
                    <p className="text-sm text-muted-foreground">{course.classSize}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Award className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Professores</p>
                    <p className="text-sm text-muted-foreground">{course.teachers}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-lg font-bold text-primary">{course.price}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Interessado?</CardTitle>
                <CardDescription>
                  Entre em contato para mais informações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar visita
                </Button>
                
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">(38) 3212-2616</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">cursos@colegiopadrao.edu.br</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Outros Cursos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(coursesData)
                  .filter(([id]) => id !== courseId)
                  .map(([id, courseData]) => (
                    <Link key={id} to={`/curso/${id}`}>
                      <div className="p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                        <p className="font-medium text-foreground">{courseData.title}</p>
                        <p className="text-sm text-muted-foreground">{courseData.age}</p>
                      </div>
                    </Link>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails

