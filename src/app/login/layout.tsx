// Usando caminhos absolutos para evitar problemas de resolução
import React from 'react';

// Importe apenas o que é necessário para a página funcionar sem os headers por enquanto
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Os headers serão adicionados após resolvermos o problema de importação */}
      {children}
    </div>
  );
}
