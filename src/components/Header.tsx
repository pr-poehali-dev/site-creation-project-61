import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/7086dc46-7172-4474-866d-817ee153f15c.jpg" 
            alt="Kamchatka Adventures Logo" 
            className="w-10 h-10 rounded-lg"
          />
          <div className="text-2xl font-bold text-gradient">Kamchatka Adventures</div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`transition-colors hover:text-primary ${activeSection === 'services' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Туры
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className={`transition-colors hover:text-primary ${activeSection === 'pricing' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Цены
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className={`transition-colors hover:text-primary ${activeSection === 'blog' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Блог
          </button>
          <button
            onClick={() => scrollToSection('booking')}
            className={`transition-colors hover:text-primary ${activeSection === 'booking' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Бронирование
          </button>
          <button
            onClick={() => scrollToSection('contacts')}
            className={`transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Контакты
          </button>
        </div>

        <Button className="gradient-primary">
          Забронировать тур
        </Button>
      </nav>
    </header>
  );
}