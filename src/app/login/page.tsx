'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import Header from '../../components/Header';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-gray-50">
        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {isLogin ? 'Fazer login' : 'Criar conta'}
            </h2>

            <p className="text-center text-gray-600">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
              <button
                type="button"
                onClick={toggleView}
                className="text-[#2A5CFF] hover:text-[#0039CC] font-medium transition-colors focus:outline-none"
              >
                {isLogin ? 'Cadastre-se' : 'Fazer login'}
              </button>
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4 rounded-md">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Nome completo
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-lg border-0 py-3.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2A5CFF] sm:text-sm"
                        placeholder="Nome completo"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="sr-only">
                    E-mail
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full rounded-lg border-0 py-3.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2A5CFF] sm:text-sm"
                      placeholder="E-mail"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Senha
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <FiLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete={isLogin ? 'current-password' : 'new-password'}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="block w-full rounded-lg border-0 py-3.5 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2A5CFF] sm:text-sm"
                      placeholder="Senha"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showPassword ? (
                          <FiEyeOff className="h-5 w-5" />
                        ) : (
                          <FiEye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <Link
                      href="/recuperar-senha"
                      className="text-[#2A5CFF] hover:text-[#0039CC] transition-colors"
                    >
                      Esqueceu sua senha?
                    </Link>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg bg-[#2A5CFF] px-3 py-3.5 text-sm font-semibold text-white hover:bg-[#0039CC] focus:outline-none focus:ring-2 focus:ring-[#2A5CFF] focus:ring-offset-2 transition-colors"
                >
                  {isLogin ? 'Entrar' : 'Criar conta'}
                </button>
              </div>

              {!isLogin && (
                <div className="text-xs text-center text-gray-500">
                  Ao se cadastrar, você concorda com os nossos{' '}
                  <Link href="/termos" className="text-[#2A5CFF] hover:text-[#0039CC] transition-colors">
                    Termos de Serviço
                  </Link>{' '}
                  e{' '}
                  <Link href="/privacidade" className="text-[#2A5CFF] hover:text-[#0039CC] transition-colors">
                    Política de Privacidade
                  </Link>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
