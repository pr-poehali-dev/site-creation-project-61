import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
];

interface BookingSectionProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  scrollToSection: (sectionId: string) => void;
}

export default function BookingSection({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  scrollToSection
}: BookingSectionProps) {
  return (
    <>
      <section id="booking" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Начнём работу
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Бронирование консультации</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите удобное время для обсуждения вашего проекта
            </p>
          </div>

          <Card className="glass border-primary/30">
            <CardContent className="p-8">
              <Tabs defaultValue="calendar" className="space-y-8">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                  <TabsTrigger value="calendar">Выбор даты и времени</TabsTrigger>
                  <TabsTrigger value="info">Информация</TabsTrigger>
                </TabsList>

                <TabsContent value="calendar" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Выберите дату</h3>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-lg border glass p-4"
                        disabled={(date) => date < new Date()}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Доступное время</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? 'default' : 'outline'}
                            className={selectedTime === time ? 'gradient-primary' : ''}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>

                      {selectedDate && selectedTime && (
                        <div className="mt-8 p-4 rounded-lg glass border-primary/30">
                          <div className="flex items-center gap-2 text-primary mb-2">
                            <Icon name="CheckCircle" size={20} />
                            <span className="font-semibold">Выбрано:</span>
                          </div>
                          <p className="text-muted-foreground">
                            {selectedDate.toLocaleDateString('ru-RU', { 
                              day: 'numeric', 
                              month: 'long', 
                              year: 'numeric' 
                            })} в {selectedTime}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="info" className="space-y-6">
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
                    <label className="text-sm font-medium">Расскажите о проекте</label>
                    <Textarea 
                      placeholder="Опишите вашу задачу или проект..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full gradient-primary text-lg"
                    disabled={!selectedDate || !selectedTime}
                  >
                    Забронировать консультацию
                    <Icon name="Calendar" className="ml-2" size={20} />
                  </Button>
                </TabsContent>
              </Tabs>
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
            <div className="text-2xl font-bold text-gradient">Agency</div>
            
            <div className="flex gap-8 text-sm text-muted-foreground">
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Услуги
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
              © 2024 Agency. Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}