import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;