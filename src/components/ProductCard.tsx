import React from "react";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  performance: string;
  power: string;
  features: string[];
}

const ProductCard = ({
  name,
  image,
  price,
  performance,
  power,
  features,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src="https://cdn.poehali.dev/files/3b63af2f-10d1-4372-97d2-8b3f64940dde.png"
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Icon name="Zap" className="h-4 w-4 mr-2 text-blue-600" />
            <span>Производительность: {performance}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Icon name="Settings" className="h-4 w-4 mr-2 text-blue-600" />
            <span>Мощность: {power}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Особенности:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-600"
              >
                <Icon name="Check" className="h-4 w-4 mr-2 text-green-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">{price}</div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
