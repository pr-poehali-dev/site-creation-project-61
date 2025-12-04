import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface BookingSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function BookingSection({ scrollToSection }: BookingSectionProps) {
  return (
    <>
      <section id="booking" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Забронируйте тур
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Бронирование тура</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку и мы свяжемся с вами для уточнения деталей
            </p>
          </div>

          <Card className="glass border-primary/30">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Выберите тур</label>
                  <Input placeholder="Например: Джип-тур, Рыбалка, Толбачик..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Дополнительная информация</label>
                  <Textarea 
                    placeholder="Желаемые даты, количество человек, особые пожелания..."
                    rows={6}
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full gradient-primary text-lg"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              Свяжитесь с нами
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Напишите нам!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:Ledukovadiana@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      Ledukovadiana@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефоны</div>
                    <div className="space-y-1">
                      <a href="tel:+79992997447" className="text-muted-foreground hover:text-primary transition-colors block">
                        +7 (999) 299-74-47 — Диана
                      </a>
                      <a href="tel:+79246869595" className="text-muted-foreground hover:text-primary transition-colors block">
                        +7 (924) 686-95-95 — Антон
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Реквизиты</div>
                    <p className="text-muted-foreground">
                      ИП Ледюкова Д.Е.<br />
                      ИНН 410124236711
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle>Быстрая форма связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Сообщение" rows={5} />
                  <Button className="w-full gradient-primary">
                    Отправить
                    <Icon name="Send" className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/7086dc46-7172-4474-866d-817ee153f15c.jpg" 
                alt="Kamchatka Adventures Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <div className="text-2xl font-bold text-gradient">Kamchatka Adventures</div>
            </div>
            
            <div className="flex gap-8 text-sm text-muted-foreground">
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Туры
              </button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('blog')} className="hover:text-primary transition-colors">
                Блог
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2024 Kamchatka Adventures
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}