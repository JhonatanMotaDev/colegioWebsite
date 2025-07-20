import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
<section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/10 pt-24 sm:pt-0">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Educação de{' '}
              <span className="text-primary">Excelência</span>{' '}
              para o{' '}
              <span className="text-secondary">Futuro</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              No Colégio Padrão, formamos cidadãos preparados para os desafios do amanhã, 
              com ensino de qualidade, valores sólidos e tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Conheça nossos cursos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Agende uma visita
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary">45+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">1200+</div>
                <div className="text-sm text-muted-foreground">Alunos formados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Aprovação vestibular</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl p-8 shadow-xl border">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ensino Personalizado</h3>
                  <p className="text-sm text-muted-foreground">
                    Metodologia adaptada às necessidades de cada aluno
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero