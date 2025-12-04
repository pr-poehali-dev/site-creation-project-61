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
              🏔️ Приключения на краю света
            </Badge>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Откройте для себя
              <span className="text-gradient block">дикую Камчатку</span>
              с Kamchatka Adventures
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Эксклюзивные туры к вулканам, горячим источникам и медведям. 
              Незабываемые впечатления от нетронутой природы полуострова.
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="gradient-primary text-lg px-8" onClick={() => scrollToSection('booking')}>
                Забронировать тур
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('services')}>
                Наши туры
              </Button>
            </div>

            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-bold text-gradient">300+</div>
                <div className="text-muted-foreground">Туристов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">15+</div>
                <div className="text-muted-foreground">Маршрутов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">7</div>
                <div className="text-muted-foreground">Авто в парке</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src="https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/190f348b-c0dd-48cd-b1eb-6034ecc3d616.jpg"
              alt="Kamchatka Adventures"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}