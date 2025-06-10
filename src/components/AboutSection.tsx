import React from "react";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl mb-6 font-extrabold text-orange-600">
              О компании ООО "ЛИГА-АРБОЛИТ"
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Более 35 лет мы специализируемся на разработке и производстве
              высокотехнологичного оборудования для изготовления арболитовых
              блоков. Наше оборудование успешно работает по всей России и за
              рубежом.{" "}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Мы предлагаем не только качественное оборудование, но и полный
              комплекс услуг: от проектирования производственных линий до
              технического обслуживания.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-600">Установленных линий</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">
                  Техническая поддержка
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Icon name="Award" className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Качество</h3>
                <p className="text-gray-600 text-sm">
                  Все оборудование проходит строгий контроль качества и
                  соответствует ГОСТ
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Icon name="Users" className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Опыт</h3>
                <p className="text-gray-600 text-sm">
                  Команда профессионалов с многолетним опытом в области
                  строительного оборудования
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Icon name="Wrench" className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Сервис</h3>
                <p className="text-gray-600 text-sm">
                  Полный спектр услуг: установка, обучение персонала,
                  техническое обслуживание
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
