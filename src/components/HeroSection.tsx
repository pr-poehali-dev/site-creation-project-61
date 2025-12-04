import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              🚀 Запускаем проекты будущего
            </Badge>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Создаём
              <span className="text-gradient block">цифровые решения</span>
              для вашего роста
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Разрабатываем стратегию, дизайн и технологии для амбициозных проектов. 
              От идеи до запуска — полный цикл digital услуг.
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="gradient-primary text-lg px-8" onClick={() => scrollToSection('booking')}>
                Забронировать консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
            </div>

            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-bold text-gradient">500+</div>
                <div className="text-muted-foreground">Проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">98%</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">24/7</div>
                <div className="text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src="https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/b5e08a7c-ade9-4157-bc70-62f97ccb1388.jpg"
              alt="Hero"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
