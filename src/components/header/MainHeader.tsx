"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiHeart, FiUser, FiSearch, FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import { Toggle, GooeyFilter } from '@/components/ui/liquid-toggle';
import Logo from './Logo';

const MainHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark'; // Manter para implementação futura

  return (
    <>
      {/* Versão mobile */}
      <div className="md:hidden bg-[#EBF2FF] text-[#2A5CFF] px-4 py-3 flex items-center justify-between">
        <button className="text-[#2A5CFF]">
          <FiMenu size={24} />
        </button>
        
        <div className="flex-grow mx-3">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="Pesquisar Produtos..."
              className="w-full h-[47px] px-5 rounded-[45px] bg-white text-gray-800 border-0 focus:outline-none focus:ring-2 focus:ring-[#2A5CFF] placeholder-gray-400"
            />
            <div className="absolute right-2 h-[33px] w-[33px] bg-[#2A5CFF] rounded-full flex items-center justify-center z-10">
              <FiSearch size={18} className="text-white" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[#2A5CFF]">
            <FiHeart size={22} />
          </button>
          <button className="text-[#2A5CFF] relative">
            <FiShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-[#2A5CFF] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">2</span>
          </button>
        </div>
      </div>
      
      {/* Versão desktop */}
      <div className="hidden md:flex bg-[#2A5CFF] text-white px-4 h-[99px] items-center">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo width={180} height={50} color="#FFFFFF" textColor="#FFFFFF" />
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl mx-8 flex justify-center">
            <div className="relative flex items-center w-[687px]">
              <input
                type="text"
                placeholder="Pesquisar Produtos..."
                className="w-full h-[47px] px-5 rounded-[45px] bg-white text-gray-800 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
              <div className="absolute right-2 h-[33px] w-[33px] bg-[#2A5CFF] rounded-full flex items-center justify-center z-10">
                <FiSearch size={18} className="text-white" />
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <GooeyFilter />
              <div className="flex items-center gap-2">
                <Toggle 
                  variant="default" 
                  checked={isDark}
                  onCheckedChange={toggleTheme}
                  className="opacity-50 pointer-events-none" // Desabilitando visivelmente o toggle
                />
                {isDark ? (
                  <FiMoon size={20} className="text-white ml-1" />
                ) : (
                  <FiSun size={20} className="text-white ml-1" />
                )}
              </div>
            </div>
            <button className="hover:text-gray-200">
              <FiHeart size={24} />
            </button>
            <button className="hover:text-gray-200 relative">
              <FiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-white text-[#2A5CFF] rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">2</span>
            </button>
            <div className="relative group">
              <Link
                href="/login"
                className="text-white hover:text-gray-200"
                aria-label="Minha Conta"
              >
                <FiUser size={24} />
              </Link>
              {/* Tooltip de hover */}
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-20 invisible group-hover:visible transition-all duration-150 opacity-0 group-hover:opacity-100">
                <span className="block text-center py-2 px-4 text-sm text-gray-700 font-medium">Fazer login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
