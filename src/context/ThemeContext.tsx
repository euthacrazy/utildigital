"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Definindo o tema como sempre 'light' independente das configurações
  const [theme, setTheme] = useState<Theme>('light');

  // Forçando a aplicação a sempre usar o tema claro
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    // Manteremos o localStorage para implementação futura
    localStorage.setItem('theme', 'light');
  }, []);

  // Função de toggle desativada, não faz nada por enquanto
  const toggleTheme = () => {
    // Função desativada temporariamente
    // setTheme(theme === 'light' ? 'dark' : 'light');
    return; // Não faz nada quando chamada
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
