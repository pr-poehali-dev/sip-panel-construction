import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ConsultationSection = () => {
  return (
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
  );
};

export default ConsultationSection;