import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ProjectsSection = () => {
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

  return (
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
  );
};

export default ProjectsSection;