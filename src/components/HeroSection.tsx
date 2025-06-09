import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Оборудование для производства
              <span className="text-orange-600"> арболитовых блоков</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Полный комплекс высокотехнологичного оборудования для эффективного
              производства качественных арболитовых строительных блоков
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-semibold transition-colors">
                Смотреть каталог
              </button>
              <button className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-semibold transition-colors">
                Получить консультацию
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Icon name="Award" className="h-6 w-6 text-blue-400" />
                <span>Гарантия 1 год</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Truck" className="h-6 w-6 text-blue-400" />
                <span>Доставка по РФ</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Производственное оборудование"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
