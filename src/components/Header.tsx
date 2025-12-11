import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

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

        <div className="flex items-center gap-4">
          <Button className="hidden md:flex gradient-primary" onClick={() => scrollToSection('booking')}>
            Забронировать тур
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              🏠 Главная
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left py-2 transition-colors hover:text-primary ${activeSection === 'services' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              🏔️ Туры
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className={`text-left py-2 transition-colors hover:text-primary ${activeSection === 'pricing' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              💰 Цены
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className={`text-left py-2 transition-colors hover:text-primary ${activeSection === 'blog' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              📖 Блог
            </button>
            <button
              onClick={() => handleNavClick('booking')}
              className={`text-left py-2 transition-colors hover:text-primary ${activeSection === 'booking' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              📅 Бронирование
            </button>
            <button
              onClick={() => handleNavClick('contacts')}
              className={`text-left py-2 transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              📞 Контакты
            </button>
            <Button className="gradient-primary w-full mt-2" onClick={() => handleNavClick('booking')}>
              Забронировать тур
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}