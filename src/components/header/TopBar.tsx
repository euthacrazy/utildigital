"use client";

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const TopBar: React.FC = () => {
  const { theme } = useTheme();
  // Mantendo o hook useTheme para implementação futura
  
  return (
    <div className="bg-[#2A5CFF] text-white px-4 py-2 border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <span>Bem vindo à Util Digital a sua loja online</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Siga a gente</span>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
