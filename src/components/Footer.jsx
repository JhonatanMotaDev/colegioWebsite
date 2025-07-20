import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Institucional', href: '#institucional' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Matrículas', href: '#matriculas' }
  ]

  const courses = [
    { name: 'Educação Infantil', href: '#cursos' },
    { name: 'Ensino Fundamental I', href: '#cursos' },
    { name: 'Ensino Fundamental II', href: '#cursos' },
    { name: 'Ensino Médio', href: '#cursos' }
  ]

  const resources = [
    { name: 'Portal do Aluno', href: '#' },
    { name: 'Portal dos Pais', href: '#' },
    { name: 'Biblioteca Digital', href: '#' },
    { name: 'Calendário Escolar', href: '#' }
  ]

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Colégio Padrão</span>
            </div>
            
            <p className="text-muted-foreground mb-6 text-sm">
              Educação de excelência há mais de 45 anos, formando cidadãos preparados 
              para os desafios do futuro.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                (11) 3456-7890
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                contato@colegiopadrao.edu.br
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                Rua da Educação, 123 - Centro
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Nossos Cursos</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <a 
                    href={course.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Siga-nos</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Colégio Padrão. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

