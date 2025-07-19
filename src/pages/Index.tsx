import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [houseSize, setHouseSize] = useState([150]);
  const [floors, setFloors] = useState([1]);
  const [calculatorPrice, setCalculatorPrice] = useState(3750000);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const calculatePrice = () => {
    const basePrice = 25000; // за кв.м
    const floorMultiplier = floors[0] === 2 ? 1.3 : 1;
    const totalPrice = houseSize[0] * basePrice * floorMultiplier;
    setCalculatorPrice(totalPrice);
  };

  React.useEffect(() => {
    calculatePrice();
  }, [houseSize, floors]);

  const projects = [
    {
      id: 1,
      title: "Дом 'Уют'",
      size: "120 м²",
      price: "3 000 000 ₽",
      image: "/img/7c3d18b0-fddf-4ea3-87cb-9a97d161edd5.jpg",
      features: ["2 этажа", "3 спальни", "2 санузла"]
    },
    {
      id: 2,
      title: "Дом 'Комфорт'",
      size: "180 м²",
      price: "4 500 000 ₽",
      image: "/img/c2c76a30-a024-4492-a6de-4a5e395708c0.jpg",
      features: ["2 этажа", "4 спальни", "3 санузла"]
    },
    {
      id: 3,
      title: "Дом 'Премиум'",
      size: "250 м²",
      price: "6 250 000 ₽",
      image: "/img/7c3d18b0-fddf-4ea3-87cb-9a97d161edd5.jpg",
      features: ["2 этажа", "5 спален", "4 санузла"]
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Быстрое строительство",
      description: "Дом строится за 2-3 месяца вместо года"
    },
    {
      icon: "Thermometer",
      title: "Энергоэффективность",
      description: "Экономия на отоплении до 70%"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Устойчивость к землетрясениям и ветрам"
    },
    {
      icon: "DollarSign",
      title: "Доступная цена",
      description: "На 30% дешевле кирпичного дома"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-muted">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-heading font-bold text-secondary">СИП Строй</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-secondary hover:text-primary transition-colors">Главная</a>
              <a href="#projects" className="text-secondary hover:text-primary transition-colors">Проекты</a>
              <a href="#calculator" className="text-secondary hover:text-primary transition-colors">Калькулятор</a>
              <a href="#consultation" className="text-secondary hover:text-primary transition-colors">Консультация</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🏗️ Современные технологии строительства
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-secondary leading-tight">
                  Строительство домов из{' '}
                  <span className="text-primary">СИП-панелей</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Быстро, надежно, энергоэффективно. Построим дом вашей мечты 
                  за 2-3 месяца с гарантией качества и онлайн-поддержкой архитекторов.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                      Консультация архитектора
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Онлайн-консультация с архитектором</DialogTitle>
                      <DialogDescription>
                        Получите бесплатную консультацию по вашему проекту
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <Button className="w-full">
                        <Icon name="Send" className="mr-2 h-4 w-4" />
                        Записаться на консультацию
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Построенных домов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">2-3</div>
                  <div className="text-sm text-muted-foreground">Месяца строительства</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Лет гарантии</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/7c3d18b0-fddf-4ea3-87cb-9a97d161edd5.jpg" 
                  alt="Современный дом из СИП-панелей" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">Экологично</div>
                    <div className="text-sm text-muted-foreground">100% натуральные материалы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-4">
              Преимущества СИП-панелей
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современная технология строительства, которая экономит ваше время и деньги
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-4">
              Проекты домов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовые проекты домов из СИП-панелей для любого бюджета и семьи
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-heading">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.size}</Badge>
                  </div>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {project.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full">
                      <Icon name="Eye" className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-4">
                Калькулятор стоимости
              </h2>
              <p className="text-xl text-muted-foreground">
                Рассчитайте приблизительную стоимость строительства вашего дома
              </p>
            </div>
            
            <Card className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Площадь дома: {houseSize[0]} м²
                    </Label>
                    <Slider
                      value={houseSize}
                      onValueChange={setHouseSize}
                      max={500}
                      min={50}
                      step={10}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>50 м²</span>
                      <span>500 м²</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Количество этажей: {floors[0]}
                    </Label>
                    <Slider
                      value={floors}
                      onValueChange={setFloors}
                      max={3}
                      min={1}
                      step={1}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1 этаж</span>
                      <span>3 этажа</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Стоимость за м²:</span>
                      <span className="font-semibold">25 000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Площадь:</span>
                      <span className="font-semibold">{houseSize[0]} м²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Коэффициент этажности:</span>
                      <span className="font-semibold">×{floors[0] === 2 ? 1.3 : floors[0] === 3 ? 1.5 : 1}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-2xl font-bold">
                        <span>Итого:</span>
                        <span className="text-primary">{calculatorPrice.toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-muted/50 p-6 rounded-2xl">
                    <h3 className="font-heading font-semibold text-lg mb-4">В стоимость включено:</h3>
                    <ul className="space-y-2">
                      {[
                        "Фундамент",
                        "СИП-панели стен и перекрытий",
                        "Крыша с металлочерепицей",
                        "Окна и двери",
                        "Внешняя отделка"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Icon name="FileText" className="mr-2 h-5 w-5" />
                    Получить подробную смету
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * Точная стоимость зависит от сложности проекта и выбранных материалов
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-accent text-white p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <Icon name="Users" className="h-16 w-16 mx-auto opacity-90" />
              <h2 className="text-3xl lg:text-4xl font-heading font-bold">
                Получите бесплатную консультацию архитектора
              </h2>
              <p className="text-xl opacity-90">
                Обсудите ваш проект с профессиональным архитектором онлайн. 
                Получите рекомендации по планировке, материалам и технологиям.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      <Icon name="Video" className="mr-2 h-5 w-5" />
                      Видеоконсультация
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Запись на видеоконсультацию</DialogTitle>
                      <DialogDescription>
                        Выберите удобное время для онлайн-встречи с архитектором
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <Label htmlFor="time">Предпочтительное время</Label>
                        <Input id="time" type="datetime-local" />
                      </div>
                      <Button className="w-full">Записаться</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
                  Чат с экспертом
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Home" className="h-8 w-8 text-primary" />
                <span className="text-2xl font-heading font-bold">СИП Строй</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Строительство современных энергоэффективных домов из СИП-панелей 
                с применением передовых технологий.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Услуги</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Проектирование</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Строительство</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Консультации</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Сметы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">info@sipstroy.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">Москва, ул. Строителей, 15</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Следите за нами</h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-primary hover:border-primary">
                  <Icon name="MessageCircle" className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-primary hover:border-primary">
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-primary hover:border-primary">
                  <Icon name="Youtube" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 СИП Строй. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;