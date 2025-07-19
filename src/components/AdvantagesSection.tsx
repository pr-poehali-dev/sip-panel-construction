import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
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
  );
};

export default AdvantagesSection;