import React from 'react';
import Header from '../components/Header';
import PromoSlider from '../components/home/PromoSlider';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <PromoSlider />
        {/* Conteúdo principal virá aqui */}
      </main>
    </>
  );
}
