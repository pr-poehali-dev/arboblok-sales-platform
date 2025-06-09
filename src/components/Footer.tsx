import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Factory" className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">АрболитПром</span>
            </div>
            <p className="text-gray-400 text-sm">
              Надежное оборудование для производства арболитовых блоков
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Смесители
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Формовочные машины
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сушильные камеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Комплексные линии
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Монтаж оборудования
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обучение персонала
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="h-4 w-4" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="h-4 w-4" />
                <span>info@arbolitprom.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>г. Москва, ул. Промышленная, 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 АрболитПром. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
