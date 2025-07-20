import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, FileText, Calendar, Phone, Mail, MapPin } from 'lucide-react'

const Enrollment = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Documentação',
      description: 'Prepare os documentos necessários para a matrícula'
    },
    {
      icon: Calendar,
      title: 'Agendamento',
      description: 'Agende uma visita para conhecer nossa estrutura'
    },
    {
      icon: CheckCircle,
      title: 'Matrícula',
      description: 'Finalize o processo de matrícula presencialmente'
    }
  ]

  const documents = [
    'Certidão de nascimento (cópia)',
    'CPF do aluno (cópia)',
    'RG e CPF dos responsáveis (cópia)',
    'Comprovante de residência atualizado',
    'Histórico escolar (para transferências)',
    'Declaração de escolaridade',
    'Carteira de vacinação atualizada',
    '2 fotos 3x4 recentes'
  ]

  return (
    <section id="matriculas" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Matrículas 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Garante já a vaga do seu filho no Colégio Padrão. 
            Processo simples e rápido para você fazer parte da nossa família.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Process & Info */}
          <div className="space-y-8">
            {/* Process Steps */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Como fazer sua matrícula
              </h3>
              
              <div className="space-y-6">
                {steps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {index + 1}. {step.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Documents */}
            <Card className="border-0 bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Documentos Necessários
                </CardTitle>
                <CardDescription>
                  Tenha em mãos os seguintes documentos para agilizar o processo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-3 text-secondary flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 bg-card/50">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Entre em contato conosco para esclarecer dúvidas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-foreground">(11) 3456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-foreground">matriculas@colegiopadrao.edu.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-foreground">Rua da Educação, 123 - Centro</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="border-0 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Solicite Informações</CardTitle>
                <CardDescription>
                  Preencha o formulário e entraremos em contato com você
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome do responsável</Label>
                    <Input id="nome" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="aluno">Nome do aluno</Label>
                    <Input id="aluno" placeholder="Nome do aluno" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idade">Idade</Label>
                    <Input id="idade" placeholder="Idade" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="curso">Curso de interesse</Label>
                  <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                    <option value="">Selecione o curso</option>
                    <option value="infantil">Educação Infantil</option>
                    <option value="fundamental">Ensino Fundamental</option>
                    <option value="medio">Ensino Médio</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                  <Textarea 
                    id="mensagem" 
                    placeholder="Conte-nos um pouco sobre suas expectativas ou dúvidas..."
                    rows={4}
                  />
                </div>

                <Button className="w-full" size="lg">
                  Enviar solicitação
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade 
                  e autoriza o contato para fins educacionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Matrículas Abertas para 2025!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Vagas limitadas. Garante já o futuro educacional do seu filho no Colégio Padrão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Agendar visita presencial
            </Button>
            <Button variant="outline" size="lg">
              Baixar documentos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Enrollment

