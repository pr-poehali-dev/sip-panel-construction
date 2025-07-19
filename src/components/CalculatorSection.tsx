import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const CalculatorSection = () => {
  const [houseSize, setHouseSize] = useState([150]);
  const [floors, setFloors] = useState([1]);
  const [calculatorPrice, setCalculatorPrice] = useState(3750000);

  const calculatePrice = () => {
    const basePrice = 25000; // за кв.м
    const floorMultiplier = floors[0] === 2 ? 1.3 : floors[0] === 3 ? 1.5 : 1;
    const totalPrice = houseSize[0] * basePrice * floorMultiplier;
    setCalculatorPrice(totalPrice);
  };

  React.useEffect(() => {
    calculatePrice();
  }, [houseSize, floors]);

  return (
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
  );
};

export default CalculatorSection;