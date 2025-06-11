import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Factory" className="h-8 w-8 text-blue-600" />
            <span className="font-extrabold text-4xl text-amber-600 px-[5px] py-[5px]">
              ООО "ЛИГА-АРБОЛИТ"
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#catalog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О компании
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Phone" className="h-4 w-4" />
              <span>+7 (977)661-59-33</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
