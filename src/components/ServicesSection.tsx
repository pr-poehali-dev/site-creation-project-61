import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Truck',
    title: 'Джип-туры по Камчатке',
    description: 'Экстремальные поездки на внедорожниках к действующим вулканам и горным массивам',
    features: ['Вулканы Мутновский и Горелый', 'Массив Вачкажец', 'Профессиональные гиды']
  },
  {
    icon: 'Fish',
    title: 'Камчатская рыбалка',
    description: 'Незабываемая рыбалка на лососевых в реках Авача и Паратунка',
    features: ['Ловля лосося и гольца', 'Снасти включены', 'Опытный инструктор']
  },
  {
    icon: 'Shell',
    title: 'Крабовое сафари',
    description: 'Морская прогулка по Авачинской бухте с ловлей и дегустацией камчатского краба',
    features: ['Ловля краба', 'Приготовление на месте', 'Экскурсия по бухте']
  },
  {
    icon: 'Mountain',
    title: '4-дневная поездка на Толбачик',
    description: 'Многодневный тур к легендарному вулкану с ночёвками в палатках и исследованием лавовых полей',
    features: ['Палаточный лагерь', 'Восхождение на вулкан', 'Полное снаряжение']
  },
  {
    icon: 'Compass',
    title: 'Горный массив Вачкажец',
    description: 'Треккинг по живописным горным тропам с видами на вулканы и долины',
    features: ['Пешие маршруты', 'Горные озёра', 'Обед на природе']
  },
  {
    icon: 'Sunrise',
    title: 'Рассвет на Халактырском пляже',
    description: 'Утренняя экскурсия на знаменитый чёрный пляж с вулканическим песком',
    features: ['Встреча рассвета', 'Фотосессия', 'Горячий чай и завтрак']
  },
  {
    icon: 'Route',
    title: 'Подбор маршрута по Вашим пожеланиям',
    description: 'Создадим индивидуальную программу путешествия с учётом ваших интересов и возможностей',
    features: ['Персональный маршрут', 'Гибкий график', 'Экспертная консультация']
  }
];

const pricingPlans = [
  {
    name: 'Однодневный',
    price: 'от 10 000',
    period: '1 день',
    description: 'Идеально для знакомства',
    features: [
      'Трансфер',
      'Гид',
      'Питание'
    ],
    highlighted: false
  },
  {
    name: 'Приключение',
    price: 'от 35 000',
    period: '3 дня',
    description: 'Погружение в природу Камчатки',
    features: [
      '3 тура из программы',
      'Трансфер',
      'Питание'
    ],
    highlighted: true
  },
  {
    name: 'Полное погружение',
    price: 'от 75 000',
    period: '7 дней',
    description: 'Максимальный опыт',
    features: [
      'Подбор тура',
      'Гид',
      'Трансфер'
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

interface ServicesSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ServicesSection({ scrollToSection }: ServicesSectionProps) {
  return (
    <>
      <section id="services" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Популярные направления
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Наши туры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лучшие маршруты для знакомства с дикой природой Камчатки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Туристические пакеты
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Цены на туры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите продолжительность путешествия по Камчатке
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
                    <span className="text-muted-foreground"> ₽/чел</span>
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
                    Забронировать
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
    </>
  );
}