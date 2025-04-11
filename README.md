# Útil Digital - Aplicativo Web

Este é o repositório oficial do aplicativo web da Útil Digital, uma plataforma de comércio eletrônico moderna e intuitiva.

## Design System

- **Cor Primária**: Azul tecnológico (#2A5CFF) com gradientes suaves
- **Cores Secundárias**: Branco puro (#FFFFFF) e cinza claro (#F5F7FA)
- **Tipografia**: Inter ou Poppins
- **Ícones**: Minimalistas com linhas finas
- **Espaçamento**: Generoso e hierarquia visual clara

## Recursos de UI/UX

- Micro-interações e transições suaves
- Estados de carregamento skeleton
- Notificações toast
- Suporte ao modo escuro
- Conformidade de contraste AA/AAA
- Design responsivo mobile-first
- Recursos PWA
- Otimizado para pontuação Lighthouse > 90

## Tecnologias Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- React Icons

## Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar em modo de produção
npm start
```

## Estrutura do Projeto

- `src/app`: Páginas e rotas da aplicação
- `src/components`: Componentes reutilizáveis
  - `header/`: Componentes do cabeçalho (TopBar, MainHeader, NavigationBar)
  - `home/`: Componentes da página inicial
  - `auth/`: Componentes de autenticação
  - `ui/`: Componentes de interface do usuário
- `src/context`: Contextos React para gerenciamento de estado
- `src/lib`: Utilitários e funções auxiliares

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.
