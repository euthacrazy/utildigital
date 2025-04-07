"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  cta: string;
  imageUrl: string;
  bgColor: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    title: 'Xbox Consoles',
    subtitle: 'Os melhores consoles',
    description: 'Economize até 50% em jogos Xbox selecionados. Ganhe 3 meses de PC Game Pass por US$ 2.',
    price: 'R$399.00',
    cta: 'COMPRE AGORA',
    imageUrl: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop',
    bgColor: '#f4f7fa',
  },
  {
    id: 2,
    title: 'PlayStation 5',
    subtitle: 'Nova geração',
    description: 'Descubra uma nova geração de jogos incríveis com o PlayStation 5. Gráficos realistas e carregamento ultrarrápido.',
    price: 'R$3.999,00',
    cta: 'SAIBA MAIS',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop',
    bgColor: '#f0f2f5',
  },
  {
    id: 3,
    title: 'Notebooks Premium',
    subtitle: 'Desempenho excepcional',
    description: 'Notebooks com tecnologia de ponta para trabalho e entretenimento. Até 20% de desconto nesta semana.',
    price: 'A partir de R$2.899,00',
    cta: 'CONFIRA AGORA',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop',
    bgColor: '#f5f5f7',
  },
  {
    id: 4,
    title: 'Smartphones',
    subtitle: 'As melhores marcas',
    description: 'Os smartphones mais avançados do mercado com até 30% de desconto. Parcele em até 12x sem juros.',
    price: 'A partir de R$1.299,00',
    cta: 'COMPRAR',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop',
    bgColor: '#f2f6f9',
  },
  {
    id: 5,
    title: 'Smart TVs 4K',
    subtitle: 'Entretenimento em alta definição',
    description: 'Experiência visual incomparável com as melhores Smart TVs 4K do mercado. Frete grátis para todo Brasil.',
    price: 'A partir de R$1.899,00',
    cta: 'VER OFERTAS',
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop',
    bgColor: '#f7f7f7',
  }
];

const PromoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left' | null>(null);

  const nextSlide = useCallback(() => {
    setSlideDirection('right');
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  // Auto-play functionality com intervalo de 20 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 20000); // Alterado para 20 segundos conforme solicitado
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play when user hovers over the slider
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative w-full h-[597px] overflow-hidden" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          
          // Classes de animação baseadas na direção do slide
          let animationClass = '';
          if (isActive) {
            if (slideDirection === 'right') {
              animationClass = 'animate-slide-in-right';
            } else if (slideDirection === 'left') {
              animationClass = 'animate-slide-in-left';
            }
          }
          
          return (
            <div 
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10 ' + animationClass : 'opacity-0 z-0'}`}
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="container mx-auto h-full flex items-center px-4 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
                  {/* Text Content - aumentando o padding para não ficar sob as setas */}
                  <div className="z-20 md:px-[250px] lg:pr-[250px] lg:pl-0 py-8 md:py-0 order-2 md:order-1">
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-[#2A5CFF] mb-1">{slide.subtitle}</span>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{slide.title}</h2>
                      <p className="text-gray-600 mb-6 max-w-md">{slide.description}</p>
                      
                      <div className="flex items-center gap-8 mb-6">
                        <span className="text-2xl font-bold text-[#2A5CFF] bg-white py-2 px-4 rounded-full shadow-sm">
                          {slide.price}
                        </span>
                      </div>
                      
                      <button className="bg-[#2A5CFF] text-white py-3 px-6 rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md">
                        {slide.cta}
                        <FiChevronRight />
                      </button>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="flex justify-center items-center md:justify-end md:h-full order-1 md:order-2">
                    <div className="relative h-[300px] md:h-full w-full md:w-auto flex items-center justify-center">
                      <Image 
                        src={slide.imageUrl} 
                        alt={slide.title}
                        width={550} 
                        height={450}
                        className="object-contain max-h-[450px] transition-all duration-500 ease-in-out rounded-lg shadow-lg"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows - com 250px de distância da borda */}
      <button 
        onClick={prevSlide}
        className="absolute left-[250px] top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-colors focus:outline-none"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-[250px] top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-colors focus:outline-none"
        aria-label="Next slide"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-[#2A5CFF]' : 'w-2 bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;
