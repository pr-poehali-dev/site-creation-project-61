import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const services = [
  {
    icon: 'Truck',
    title: 'Джип-туры по Камчатке',
    description: 'Экстремальные поездки на внедорожниках к действующим вулканам и горным массивам',
    features: ['Вулканы Мутновский и Горелый', 'Массив Вачкажец', 'Профессиональные гиды'],
    detailedDescription: 'Джип-туры по Камчатке включают в себя более 20-ти маршрутов, чтобы показать вам настоящую Камчатку — дикую, мощную и доступную на внедорожнике. Выберите свой уровень драйва: от фото-сафари до настоящей экспедиции.'
  },
  {
    icon: 'Fish',
    title: 'Камчатская рыбалка',
    description: 'Незабываемая рыбалка на лососевых в реках Авача и Паратунка',
    features: ['Ловля лосося и гольца', 'Снасти включены', 'Опытный инструктор'],
    detailedDescription: `Река Авача
Особенность: Самая доступная и популярная лососевая река 
Сезон: Июнь — сентябрь
Основные виды:
• Горбуша (пик: июль–август)
• Кета (август–сентябрь)
• Кижуч (сентябрь–октябрь)
• Голец (июль-сентябрь)

После рыбалки Вас ждёт:
Приготовленная уха по традиционному рецепту прямо на берегу из свежего улова.`
  },
  {
    icon: 'Shell',
    title: 'Крабовое сафари',
    description: 'Морская прогулка по Авачинской бухте с ловлей и дегустацией камчатского краба',
    features: ['Ловля краба', 'Приготовление на месте', 'Экскурсия по бухте'],
    detailedDescription: `Морское приключение в Авачинской бухте с ловлей настоящего камчатского краба. Опытный капитан покажет лучшие места, вы сами поднимете ловушки и увидите живых крабов. После улова — дегустация свежеприготовленного краба прямо на борту катера с видом на Авачинскую сопку и бухту Три Брата.`
  },
  {
    icon: 'Mountain',
    title: '4-дневная поездка на Толбачик',
    description: 'Многодневный тур к легендарному вулкану с ночёвками в палатках и исследованием лавовых полей',
    features: ['Палаточный лагерь', 'Восхождение на вулкан', 'Полное снаряжение'],
    detailedDescription: `Легендарная экспедиция к вулкану Толбачик — место, где земля дышит огнём. Маршрут включает:
• Переезд через Центральную Камчатку
• Ночёвки в палаточном лагере у подножия вулкана
• Восхождение на Плоский Толбачик
• Прогулки по застывшим лавовым полям извержения 2012-2013 годов
• Фотографии марсианских пейзажей

Включено: палатки, спальники, питание, трансфер, гид.`
  },
  {
    icon: 'Compass',
    title: 'Горный массив Вачкажец',
    description: 'Треккинг по живописным горным тропам с видами на вулканы и долины',
    features: ['Пешие маршруты', 'Горные озёра', 'Обед на природе'],
    detailedDescription: `Горный массив Вачкажец — идеальное место для треккинга с панорамными видами на вулканы Авачинской группы. Маршрут проходит через альпийские луга, каменные россыпи и горные озёра с кристально чистой водой. Подходит для туристов с базовой физической подготовкой. Обед готовится на костре среди гор.`
  },
  {
    icon: 'Sunrise',
    title: 'Рассвет на Халактырском пляже',
    description: 'Утренняя экскурсия на знаменитый чёрный пляж с вулканическим песком',
    features: ['Встреча рассвета', 'Фотосессия', 'Горячий чай и завтрак'],
    detailedDescription: `Встречайте рассвет на легендарном Халактырском пляже с чёрным вулканическим песком. Ранний выезд к океану, первые лучи солнца над Тихим океаном, фотосессия с видом на вулканы Корякский и Авачинский. После — горячий чай и завтрак с камчатскими деликатесами прямо на берегу. Идеально для романтиков и фотографов.`
  },
  {
    icon: 'Route',
    title: 'Подбор маршрута по Вашим пожеланиям',
    description: 'Создадим индивидуальную программу путешествия с учётом ваших интересов и возможностей',
    features: ['Персональный маршрут', 'Гибкий график', 'Экспертная консультация'],
    detailedDescription: `Каждое путешествие уникально. Мы создадим персональный маршрут с учётом ваших интересов, физической подготовки, бюджета и времени. Хотите совместить вулканы с рыбалкой? Или предпочитаете спокойные экскурсии к термальным источникам? Расскажите о своих мечтах — мы воплотим их в реальность на Камчатке.`
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
    title: 'Встреча с медведями Камчатки',
    excerpt: 'Как безопасно наблюдать за бурыми медведями в их естественной среде обитания на реках полуострова',
    date: '1 декабря 2024',
    category: 'Дикая природа',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/073ae185-39c5-4651-ae14-779faceee2c3.jpg'
  },
  {
    title: 'Вулканы Камчатки: путеводитель',
    excerpt: 'Самые впечатляющие действующие вулканы полуострова и лучшие маршруты для их посещения',
    date: '25 ноября 2024',
    category: 'Маршруты',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/5f645cdf-66a6-415b-b7f2-852573c8a03d.jpg'
  },
  {
    title: '4 дня на Толбачике: приключение',
    excerpt: 'Путешествие к легендарному вулкану с палаточными ночёвками среди марсианских лавовых полей',
    date: '20 ноября 2024',
    category: 'Туры',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/18fbaef4-0981-4fc5-93bc-4749bcb9e4b4.jpg'
  }
];

interface ServicesSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ServicesSection({ scrollToSection }: ServicesSectionProps) {
  const [expandedService, setExpandedService] = useState<number | null>(null);

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
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {service.detailedDescription && (
                    <>
                      {expandedService === index && (
                        <div className="mt-4 p-4 bg-background/50 rounded-lg border border-border/30">
                          <p className="text-muted-foreground leading-relaxed">
                            {service.detailedDescription}
                          </p>
                        </div>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full mt-2"
                        onClick={() => setExpandedService(expandedService === index ? null : index)}
                      >
                        {expandedService === index ? (
                          <>
                            Скрыть подробности
                            <Icon name="ChevronUp" size={16} className="ml-2" />
                          </>
                        ) : (
                          <>
                            Подробнее
                            <Icon name="ChevronDown" size={16} className="ml-2" />
                          </>
                        )}
                      </Button>
                    </>
                  )}
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
            <h2 className="text-5xl font-bold mb-4">Блог о Камчатке</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делимся знаниями о природе и путешествиях по полуострову
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