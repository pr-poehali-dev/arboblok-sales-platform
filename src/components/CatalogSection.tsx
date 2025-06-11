import React from "react";
import ProductCard from "./ProductCard";

const CatalogSection = () => {
  const products = [
    {
      name: "ЛИГА-9П полуавтомат (НОВИНКА)",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "от 450 000 ₽",
      performance: "15 м.куб. в смену (8 часов)",
      power: "7.5 кВт",
      features: [
        "Приготовленная смесь в дозатор подается транспортером. Засыпка арболитовой смеси производится дозатором. Все процессы, а именно - перемещение форм, трамбовка, распалубка, перемещение готового блока на приемный стол - производится в автоматическом режиме.",
      ],
    },
    {
      name: "Формовочная машина ФМ-12",
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "от 680 000 ₽",
      performance: "12 блоков/цикл",
      power: "4 кВт",
      features: [
        "Точная геометрия блоков",
        "Быстрая смена форм",
        "Пневматическая система",
      ],
    },
    {
      name: "Сушильная камера СК-24",
      image:
        "https://images.unsplash.com/photo-1518709779341-a2c7e3d4a498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "от 280 000 ₽",
      performance: "24 блока/цикл",
      power: "3 кВт",
      features: [
        "Равномерная сушка",
        "Регулируемая температура",
        "Энергосберегающая технология",
      ],
    },
  ];

  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог оборудования
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Современное оборудование для полного цикла производства арболитовых
            блоков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Показать все оборудование
          </button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
