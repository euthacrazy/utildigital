"use client";

import { useState } from 'react';
import { FiMapPin, FiChevronDown } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark'; // Mantido para implementação futura

  const categories = [
    'Eletrônicos', 'Celulares', 'Computadores', 'Games', 'Casa e Decoração',
    'Eletrodomésticos', 'Esporte e Lazer', 'Moda', 'Beleza e Perfumaria'
  ];

  return (
    <>
      {/* Versão Mobile */}
      <div className="md:hidden bg-white text-gray-800 w-full">
        <div className="px-4 py-2">
          <div className="relative flex items-center justify-between">
            <div
              className="flex items-center gap-1 text-sm cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>Todas as Categorias</span>
              <FiChevronDown size={16} />
            </div>

            <div className="flex items-center gap-4">
              {/* Botão "Enviar Para" */}
              <div className="flex items-center gap-2 bg-[#2A5CFF] text-white rounded-full pl-3 pr-5 py-1.5">
                <div className="flex items-center justify-center bg-white rounded-full w-[36px] h-[36px]">
                  <FiMapPin className="text-[#2A5CFF]" size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-light">Enviar para</span>
                  <span className="text-sm font-semibold">São Paulo, 01310</span>
                </div>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="absolute bg-white shadow-lg z-10 w-full left-0 mt-2 border-t border-gray-100 py-2">
              <div className="px-4">
                {categories.map((category, index) => (
                  <div key={index} className="py-2 hover:bg-gray-50 cursor-pointer">
                    {category}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Versão Desktop */}
      <div className="hidden md:block bg-white w-full border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-6">
              <div
                className="flex items-center gap-1 text-sm cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Todas as Categorias</span>
                <FiChevronDown size={16} />
              </div>

              <div className="flex items-center gap-6">
                {categories.slice(0, 6).map((category, index) => (
                  <div key={index} className="text-sm cursor-pointer hover:text-[#2A5CFF]">
                    {category}
                  </div>
                ))}
              </div>
            </div>

            {/* Botão "Enviar Para" */}
            <div className="flex items-center gap-2 bg-[#2A5CFF] text-white rounded-full pl-3 pr-5 py-1.5">
              <div className="flex items-center justify-center bg-white rounded-full w-[36px] h-[36px]">
                <FiMapPin className="text-[#2A5CFF]" size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light">Enviar para</span>
                <span className="text-sm font-semibold">São Paulo, 01310</span>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="absolute bg-white shadow-lg z-10 w-full left-0 mt-2 border-t border-gray-100 py-4">
              <div className="container mx-auto px-4 grid grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <div key={index} className="py-2 hover:bg-gray-50 cursor-pointer">
                    {category}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
