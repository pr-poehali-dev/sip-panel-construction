import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;