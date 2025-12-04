import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Rocket',
    title: 'Стратегия и консалтинг',
    description: 'Разработка бизнес-стратегии и аудит процессов для роста вашего бизнеса',
    features: ['Анализ рынка', 'Конкурентный анализ', 'Дорожная карта']
  },
  {
    icon: 'Palette',
    title: 'Дизайн и брендинг',
    description: 'Создание уникального визуального стиля и идентичности бренда',
    features: ['Фирменный стиль', 'UI/UX дизайн', 'Брендбук']
  },
  {
    icon: 'Code',
    title: 'Разработка',
    description: 'Создание современных веб-приложений и мобильных решений',
    features: ['Веб-разработка', 'Мобильные приложения', 'API интеграция']
  },
  {
    icon: 'TrendingUp',
    title: 'Маркетинг',
    description: 'Продвижение и масштабирование вашего бизнеса в digital',
    features: ['SMM', 'Контент-маркетинг', 'Performance']
  }
];

const pricingPlans = [
  {
    name: 'Старт',
    price: '50 000',
    period: 'месяц',
    description: 'Для начинающих проектов',
    features: [
      'До 20 часов работы',
      '2 правки включены',
      'Email поддержка',
      'Базовая аналитика'
    ],
    highlighted: false
  },
  {
    name: 'Рост',
    price: '120 000',
    period: 'месяц',
    description: 'Для развивающихся компаний',
    features: [
      'До 60 часов работы',
      'Безлимитные правки',
      'Приоритетная поддержка',
      'Расширенная аналитика',
      'Выделенный менеджер'
    ],
    highlighted: true
  },
  {
    name: 'Масштаб',
    price: 'Индивидуально',
    period: 'проект',
    description: 'Для крупных задач',
    features: [
      'Неограниченные часы',
      'Команда специалистов',
      '24/7 поддержка',
      'Полная аналитика',
      'Персональный аккаунт-менеджер',
      'SLA гарантии'
    ],
    highlighted: false
  }
];

const blogPosts = [
  {
    title: 'Тренды веб-дизайна 2024',
    excerpt: 'Разбираем главные тенденции в дизайне интерфейсов и что будет актуально в следующем году',
    date: '15 ноября 2024',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/ab825734-f45e-4973-ad6a-72cdb978434b.jpg'
  },
  {
    title: 'Как выбрать правильную стратегию',
    excerpt: 'Пошаговое руководство по выбору бизнес-стратегии для digital продуктов',
    date: '10 ноября 2024',
    category: 'Стратегия',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/b5e08a7c-ade9-4157-bc70-62f97ccb1388.jpg'
  },
  {
    title: 'Кейс: Рост конверсии на 300%',
    excerpt: 'История успеха клиента — как мы увеличили конверсию интернет-магазина в три раза',
    date: '5 ноября 2024',
    category: 'Кейсы',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/3aae8e3a-90d3-48e4-85b6-240db4ef87a7.jpg'
  }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
];

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">Agency</div>
          
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
              Услуги
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
            Связаться
          </Button>
        </nav>
      </header>

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

      <section id="services" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Что мы делаем
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр digital услуг для запуска и масштабирования вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              Прозрачные цены
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий план для вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.highlighted ? 'glass border-primary scale-105 shadow-2xl shadow-primary/20' : 'border-border/50'} transition-all duration-300 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="gradient-primary">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    {plan.price !== 'Индивидуально' && <span className="text-muted-foreground"> ₽</span>}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlighted ? 'gradient-primary' : ''}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => scrollToSection('booking')}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Полезные материалы
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делимся опытом и экспертизой в digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="glass border-border/50 hover:border-primary/50 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:text-primary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                    <a href="mailto:hello@agency.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@agency.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Офис</div>
                    <p className="text-muted-foreground">
                      Москва, ул. Примерная, д. 1<br />
                      БЦ "Современный"
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
    </div>
  );
}
