import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;