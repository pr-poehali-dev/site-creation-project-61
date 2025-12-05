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
    detailedDescription: 'Джип-туры по Камчатке включают в себя более 20-ти маршрутов, чтобы показать вам настоящую Камчатку — дикую, мощную и доступную на внедорожнике. Выберите свой уровень драйва: от фото-сафари до настоящей экспедиции.',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/625d036d-31ef-4fcc-80f3-1714534205e7.jpg'
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
Приготовленная уха по традиционному рецепту прямо на берегу из свежего улова.`,
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/9f93f620-976e-4bb3-951e-3dac3aff1cc4.jpg'
  },
  {
    icon: 'Shell',
    title: 'Крабовое сафари',
    description: 'Морская прогулка по Авачинской бухте с ловлей и дегустацией камчатского краба',
    features: ['Ловля краба', 'Приготовление на месте', 'Экскурсия по бухте'],
    detailedDescription: `Морское приключение в Авачинской бухте с ловлей настоящего Камчатского краба. Опытный гид покажет лучшие места, вы сами поднимете ловушки, увидите живых крабов, сделаете красивое фото на память. После улова вас ожидает - дегустация свежеприготовленного краба на берегу с черным песком и видом на Авачинскую бухту.`,
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/13c02d80-6734-423b-9b28-ab56ad5e8bfc.jpg'
  },
  {
    icon: 'Mountain',
    title: '4-дневная поездка на Толбачик',
    description: 'Многодневный тур к легендарному вулкану с ночёвками в палатках и исследованием лавовых полей',
    features: ['Палаточный лагерь', 'Восхождение на вулкан', 'Полное снаряжение'],
    detailedDescription: `Незабываемая экспедиция на Толбачик — место где земля дышит огнем. Включает в себя: 
• Ночевки в палаточном лагере
• Прогулка по застывшему лавовому потоку
• Прогулка по Марсовым полям

Включено: трансфер, гид-водитель, установка лагеря.`,
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/c58e4d86-628f-4a2d-a690-0249bb8d1dba.jpg'
  },
  {
    icon: 'Compass',
    title: 'Горный массив Вачкажец',
    description: 'Треккинг по живописным горным тропам с видами на вулканы и долины',
    features: ['Пешие маршруты', 'Горные озёра', 'Обед на природе'],
    detailedDescription: `Горный массив Вачкажец – идеальное место для трекинга с панорамными видами на два ледниковых цирка где сохраняется многолетний снег и лед. Маршрут проходит через каменные россыпи, горные озера и водопад с кристально чистой водой. Подходит для туристов с базовой физической подготовкой.`,
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/13bd90c8-8150-46ad-b07a-fb1765518e23.jpg'
  },
  {
    icon: 'Sunrise',
    title: 'Рассвет на Халактырском пляже',
    description: 'Утренняя экскурсия на знаменитый чёрный пляж с вулканическим песком',
    features: ['Встреча рассвета', 'Фотосессия', 'Горячий чай и завтрак'],
    detailedDescription: `Встречайте рассвет на легендарном Халактырском пляже с черным вулканическим песком, ранний выезд к океану, первые лучи солнца над Тихим океаном, фотосессия на вулканы Корякский и Авачинский, после горячий завтрак прямо на берегу, идеально для романтиков и фотографов.`,
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/81972784-656d-41d0-8c6d-837c37f061a2.jpg'
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
    fullText: `Камчатка — один из немногих регионов планеты, где можно увидеть бурых медведей в дикой природе. Каждое лето сотни медведей собираются на реках полуострова во время нереста лосося.\n\nПравила безопасности:\n• Всегда оставайтесь с гидом\n• Соблюдайте дистанцию минимум 100 метров\n• Не приближайтесь к медведицам с медвежатами\n• Не создавайте резких звуков и движений\n\nЛучшее время для наблюдения — июль-сентябрь, когда идет активный нерест. Самые популярные места: Курильское озеро, реки Жупанова и Озерная.`,
    date: '1 декабря 2024',
    category: 'Дикая природа',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/073ae185-39c5-4651-ae14-779faceee2c3.jpg'
  },
  {
    title: 'Вулканы Камчатки: путеводитель',
    excerpt: 'Самые впечатляющие действующие вулканы полуострова и лучшие маршруты для их посещения',
    fullText: `На Камчатке находится 29 действующих вулканов из 68 объектов Всемирного наследия ЮНЕСКО "Вулканы Камчатки". Это одна из крупнейших вулканических областей мира.\n\nТоп-5 вулканов для посещения:\n\n1. Авачинский (2741м) — самый доступный действующий вулкан, восхождение за 1 день\n2. Мутновский — активный вулкан с кипящими грязевыми котлами и фумаролами\n3. Горелый — кратер диаметром 800м с ярко-бирюзовым кислотным озером\n4. Толбачик — марсианские пейзажи застывшей лавы после извержения 2012-2013 годов\n5. Ключевская сопка (4750м) — высочайший действующий вулкан Евразии\n\nВажно: все восхождения — только с опытным гидом и соответствующей физической подготовкой.`,
    date: '25 ноября 2024',
    category: 'Маршруты',
    image: 'https://cdn.poehali.dev/projects/4907d0d1-6aad-4fca-a3c7-26424ad91843/files/5f645cdf-66a6-415b-b7f2-852573c8a03d.jpg'
  },
  {
    title: '4 дня на Толбачике: приключение',
    excerpt: 'Путешествие к легендарному вулкану с палаточными ночёвками среди марсианских лавовых полей',
    fullText: `Толбачик — это не просто вулкан, это другая планета на Земле. После извержения 2012-2013 годов здесь образовались километры застывшей лавы, создав фантастические марсианские пейзажи.\n\nЧто включает тур:\n\nДень 1: Выезд из Петропавловска-Камчатского, 6-7 часов по бездорожью. Установка базового лагеря у подножия вулкана.\n\nДень 2: Восхождение на плато Толбачик (3085м). Панорамные виды на Ключевскую группу вулканов. Прогулка по лавовым полям.\n\nДень 3: Исследование "Мертвого леса" — территории, погребенной под слоем пепла. Посещение лавовых пещер и трещин.\n\nДень 4: Возвращение в город с остановками для фотосессий.\n\nВажно взять: теплую одежду (ночью до +5°C даже летом), трекинговые ботинки, солнцезащитные очки и крем.`,
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
  const [expandedBlogPost, setExpandedBlogPost] = useState<number | null>(null);

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
                className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                      <Icon name={service.icon} size={28} className="text-white" />
                    </div>
                  </div>
                )}
                <CardHeader>
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
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
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
                className="glass border-border/50 hover:border-primary/50 overflow-hidden group transition-all duration-300 animate-slide-up"
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
                  <CardDescription>
                    {expandedBlogPost === index ? post.fullText : post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="group-hover:text-primary"
                    onClick={() => setExpandedBlogPost(expandedBlogPost === index ? null : index)}
                  >
                    {expandedBlogPost === index ? 'Скрыть' : 'Читать далее'}
                    <Icon name={expandedBlogPost === index ? 'ChevronUp' : 'ArrowRight'} className="ml-2" size={16} />
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