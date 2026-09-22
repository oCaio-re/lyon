"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  FileCheck,
  FileSpreadsheet,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Shield,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  X,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    tipo: "fornecedor",
    mensagem: "",
  });

  const phoneRaw = "5522999652200";
  const phoneDisplay = "+55 22 99965-2200";
  const emailDisplay = "comercial01.lyon@gmail.com";
  const addressDisplay = "Campos dos Goytacazes - RJ";

  const getWhatsAppLink = (customText?: string) => {
    const defaultText =
      "Olá, Rogério! Acessei o site da Lyon Soluções Comerciais e gostaria de conversar sobre oportunidades e fornecimento.";
    const text = encodeURIComponent(customText || defaultText);
    return `https://wa.me/${phoneRaw}?text=${text}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*Contato via Site Lyon Soluções Comerciais*\n*Nome:* ${formData.nome || "Não informado"}\n*Empresa:* ${formData.empresa || "Não informada"}\n*Telefone:* ${formData.telefone || "Não informado"}\n*Email:* ${formData.email || "Não informado"}\n*Finalidade:* ${formData.tipo === "fornecedor" ? "Cadastro de Fornecedor Parceiro" : "Cotação / Demanda Comercial"}\n*Mensagem:* ${formData.mensagem || "Gostaria de falar com a Lyon."}`;
    window.open(`https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900">
      {/* ── TOP BAR (INSTITUCIONAL SUTIL) ── */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-600 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">
              Sede em Campos dos Goytacazes - RJ • Atuação Bacia de Campos & Polo Macaé
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${emailDisplay}`}
              className="hover:text-[#132238] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>{emailDisplay}</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#132238] font-semibold text-slate-800 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── HEADER / NAVBAR (BRANCO & AZUL MARINHO) ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo com detalhe discreto do cartão */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image
                src="/logo-navy.svg"
                alt="Logo Lyon Soluções Comerciais"
                width={42}
                height={42}
                className="object-contain"
                priority
              />
            </div>

            {/* O detalhe clássico do cartão: filete azul marinho + fino filete vermelho */}
            <div className="h-8 flex items-center gap-1">
              <div className="w-1 h-8 bg-[#132238] rounded-full" />
              <div className="w-0.5 h-8 bg-red-600 rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#132238] font-serif leading-none">
                LYON
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-600 uppercase mt-1">
                Soluções Comerciais
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a
              href="#sobre"
              className="hover:text-[#132238] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#132238] hover:after:w-full after:transition-all"
            >
              Sobre Nós
            </a>
            <a
              href="#como-atuamos"
              className="hover:text-[#132238] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#132238] hover:after:w-full after:transition-all"
            >
              Como Atuamos
            </a>
            <a
              href="#diferenciais"
              className="hover:text-[#132238] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#132238] hover:after:w-full after:transition-all"
            >
              Diferenciais
            </a>
            <a
              href="#fornecedores"
              className="hover:text-[#132238] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#132238] hover:after:w-full after:transition-all"
            >
              Seja Parceiro
            </a>
            <a
              href="#contato"
              className="hover:text-[#132238] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#132238] hover:after:w-full after:transition-all"
            >
              Contato
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#132238] hover:bg-[#1b3150] shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            >
              Sobre Nós
            </a>
            <a
              href="#como-atuamos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            >
              Como Atuamos
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            >
              Diferenciais
            </a>
            <a
              href="#fornecedores"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            >
              Seja Parceiro
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            >
              Contato
            </a>
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#132238] hover:bg-[#1b3150]"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Falar com Rogério Parente</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO SECTION (CLARA, PREDOMINÂNCIA BRANCO & AZUL MARINHO) ── */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Clear Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge sutil com acento vermelho mínimo */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 text-[#132238] border border-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                Inteligência Comercial & Oportunidades Petronect
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#132238] leading-tight font-serif">
                Conectamos indústrias de excelência às demandas corporativas da{" "}
                <span className="text-[#132238] underline decoration-red-600 decoration-3 underline-offset-8">
                  Petrobras
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                A <strong>Lyon Soluções Comerciais</strong> atua como integradora
                estratégica: mapeamos tomadas de preço e editais no portal{" "}
                <strong>Petronect</strong>, equalizamos cotações diretamente com
                fabricantes parceiros e submetemos propostas técnicas completas, com
                rigor documental e máxima agilidade.
              </p>

              {/* Botões de Ação */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#132238] hover:bg-[#1c3252] shadow-sm hover:shadow-md transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Falar com Rogério Parente</span>
                </a>

                <a
                  href="#como-atuamos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-colors"
                >
                  <span>Entenda Nossa Operação</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Destaques de Credibilidade em formato claro */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#132238] uppercase">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    Sede Operacional
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Campos dos Goytacazes - RJ (Bacia de Campos)
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#132238] uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#132238]" />
                    Compliance & Rigor
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Propostas alinhadas aos cadernos da Petrobras
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#132238] uppercase">
                    <Handshake className="w-3.5 h-3.5 text-[#132238]" />
                    Rede de Parceiros
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Cotações diretas de fábrica sem intermediários
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Card Executivo Claro (inspirado na assinatura de email) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-lg relative overflow-hidden">
                {/* Linha de acabamento superior */}
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  <div className="w-3/4 bg-[#132238]" />
                  <div className="w-1/4 bg-red-600" />
                </div>

                <div className="flex flex-col items-center text-center space-y-5 pt-2">
                  <div className="w-24 h-24 p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    <Image
                      src="/logo-navy.svg"
                      alt="Brasão Lyon"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-serif text-[#132238] tracking-wide">
                      LYON
                    </h3>
                    <p className="text-xs font-bold tracking-widest text-slate-600 uppercase mt-1">
                      Soluções Comerciais
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                    Representação comercial e integração de suprimentos para o setor
                    de Óleo & Gás e editais corporativos.
                  </p>

                  <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-200 text-left space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Direção Geral:</span>
                      <strong className="text-[#132238] font-semibold">Rogério Parente</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Atendimento:</span>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#132238] font-bold hover:underline flex items-center gap-1"
                      >
                        <span>{phoneDisplay}</span>
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">E-mail:</span>
                      <span className="text-slate-700 font-medium">{emailDisplay}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Localização:</span>
                      <span className="text-slate-700 font-medium">Campos dos Goytacazes - RJ</span>
                    </div>
                  </div>

                  <div className="w-full pt-1">
                    <a
                      href="#contato"
                      className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#132238] text-xs font-semibold flex items-center justify-center gap-2 border border-slate-300 transition-colors"
                    >
                      <span>Solicitar contato ou cotação</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#132238]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: SOBRE A LYON ── */}
      <section id="sobre" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-red-600 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#132238]">
                  Quem Somos
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132238] font-serif leading-tight">
                A ponte ágil entre a indústria e as maiores contratações de energia.
              </h2>

              <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
                <p>
                  Com base em <strong>Campos dos Goytacazes - RJ</strong>, polo
                  estratégico da Bacia de Campos e vizinha a Macaé, a{" "}
                  <strong>Lyon Soluções Comerciais</strong> foi criada para resolver
                  uma necessidade clara do mercado: simplificar o acesso de
                  indústrias fornecedoras aos processos licitatórios e tomadas de
                  preço da <strong>Petrobras</strong> através da plataforma{" "}
                  <strong>Petronect</strong>.
                </p>
                <p>
                  Sob a direção de <strong>Rogério Parente</strong>, a Lyon opera como{" "}
                  <strong>Integradora Comercial</strong>. Nossa equipe acompanha as
                  requisições publicadas, localiza os fabricantes ideais para cada
                  linha de produto, coleta e equaliza propostas técnicas e submete a
                  oferta consolidada em plena conformidade com os requisitos do
                  edital.
                </p>
                <p>
                  Dessa forma, o fornecedor parceiro ganha um canal de vendas direto
                  e qualificado sem precisar absorver custos fixos com estruturas
                  pesadas de licitação.
                </p>
              </div>

              {/* Pilares rápidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-[#132238] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#132238]" />
                    Atendimento com o Decisor
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Comunicação rápida e sem intermediários com a diretoria da Lyon.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-[#132238] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#132238]" />
                    Domínio do Petronect
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Experiência prática nos parâmetros técnicos, prazos e rotinas de compras.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Clean Corporate Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 shrink-0 shadow-xs">
                      <Image
                        src="/logo-navy.svg"
                        alt="Lyon"
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#132238]">
                        Valores da Lyon
                      </h4>
                      <p className="text-xs text-slate-500">Transparência & Desempenho</p>
                    </div>
                  </div>

                  <blockquote className="text-sm text-slate-700 italic leading-relaxed border-l-2 border-red-600 pl-4 py-1">
                    &ldquo;Nossa meta diária é converter oportunidades do Petronect em
                    fornecimentos reais para a indústria nacional, com seriedade técnica
                    e lealdade aos nossos parceiros.&rdquo;
                  </blockquote>

                  <div>
                    <div className="text-sm font-bold text-[#132238]">Rogério Parente</div>
                    <div className="text-xs text-slate-600 font-medium">
                      Diretor Geral — Lyon Soluções Comerciais
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
                    <span>Campos dos Goytacazes - RJ</span>
                    <span className="text-emerald-700 flex items-center gap-1.5 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      Operação Ativa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: COMO ATUAMOS (4 PASSOS CLAROS) ── */}
      <section id="como-atuamos" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-5 bg-red-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#132238]">
                Etapas Operacionais
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132238] font-serif">
              Como funciona nossa atuação integrada
            </h2>
            <p className="text-base text-slate-600">
              Conheça as etapas transparentes que transformam requisições de compras em propostas competitivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#132238] text-white flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-[#132238] mb-2">
                  Captação de Editais
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Varredura diária no portal Petronect identificando requisições e licitações abertas pela Petrobras que demandam produtos industriais.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#132238]" />
                Triagem tempestiva de prazos
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative">
              {/* Sutil detalhe vermelho de destaque na etapa de cotação */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-red-600 rounded-full" />
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#132238] text-white flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-[#132238] mb-2">
                  Cotação com Parceiros
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Envio das especificações técnicas para indústrias e fabricantes da nossa rede para coleta e equalização de preços diretos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <FileSpreadsheet className="w-3.5 h-3.5 text-red-600" />
                Equalização técnica de preços
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#132238] text-white flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-[#132238] mb-2">
                  Proposta Integrada
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Consolidação da proposta comercial com planilha detalhada, certidões e conformidade técnica para submissão oficial.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <FileCheck className="w-3.5 h-3.5 text-[#132238]" />
                Conformidade documental estrita
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#132238] text-white flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="text-base font-bold text-[#132238] mb-2">
                  Gestão até a Homologação
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Acompanhamento minucioso de cada fase da concorrência, respostas técnicas e suporte comercial até a formalização do fornecimento.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <Truck className="w-3.5 h-3.5 text-[#132238]" />
                Segurança em todo o ciclo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: DIFERENCIAIS DE CREDIBILIDADE ── */}
      <section id="diferenciais" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-5 bg-red-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#132238]">
                Diferenciais
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132238] font-serif">
              Por que fornecedores e clientes confiam na Lyon
            </h2>
            <p className="text-base text-slate-600">
              Precisão, celeridade e seriedade comercial no centro de cada oportunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-[#132238] flex items-center justify-center mb-6 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-[#132238]" />
              </div>
              <h3 className="text-lg font-bold text-[#132238] mb-2">
                Conformidade & Rigor
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Verificação minuciosa de cada exigência técnica, certificação e padrão fiscal dos editais da Petrobras para assegurar elegibilidade total.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-[#132238] flex items-center justify-center mb-6 shadow-xs">
                <Clock className="w-6 h-6 text-[#132238]" />
              </div>
              <h3 className="text-lg font-bold text-[#132238] mb-2">
                Celeridade de Resposta
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Janelas de cotação no Petronect costumam ser curtas. Nossa comunicação direta com os fabricantes garante propostas rápidas e sem perda de prazos.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-[#132238] flex items-center justify-center mb-6 shadow-xs">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-[#132238] mb-2">
                Presença na Bacia de Campos
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Localizada em Campos dos Goytacazes - RJ, a Lyon vive o dia a dia do setor offshore e das operações de suprimento no Norte Fluminense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: SEJA UM FORNECEDOR PARCEIRO (CARD AZUL MARINHO LIMPO) ── */}
      <section id="fornecedores" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#132238] text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-md relative overflow-hidden">
            {/* Detalhe sutil em vermelho na borda lateral */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-red-600" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-800 text-slate-200 border border-slate-700">
                  <Users className="w-3.5 h-3.5 text-red-400" />
                  Rede de Fornecedores Homologados
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif leading-tight">
                  Sua fábrica nas principais cotações do setor de energia.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Se a sua empresa produz materiais industriais, válvulas, conexões,
                  materiais elétricos, EPIs ou peças mecânicas, cadastre seu portfólio
                  com a Lyon para receber solicitações de cotação sempre que novas
                  demandas surgirem no Petronect.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sem custos de adesão ou mensalidades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Acesso a demandas da Petrobras</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={getWhatsAppLink(
                    "Olá, Rogério! Gostaria de cadastrar minha indústria na Rede de Fornecedores da Lyon para oportunidades no Petronect."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-[#132238] bg-white hover:bg-slate-100 shadow-xs transition-colors text-center text-sm"
                >
                  <Handshake className="w-4 h-4 text-[#132238]" />
                  <span>Cadastrar Empresa via WhatsApp</span>
                </a>

                <a
                  href="#contato"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-center text-xs"
                >
                  <span>Preencher Formulário Institucional</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: CONTATO & LOCALIZAÇÃO ── */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-5 bg-red-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#132238]">
                Canais Diretos
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132238] font-serif">
              Fale com a Diretoria da Lyon
            </h2>
            <p className="text-base text-slate-600">
              Estamos prontos para atender sua demanda, analisar catálogos de fornecedores ou tirar dúvidas operacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Information Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#132238]">
                    Diretoria Comercial
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-[#132238] mt-1">
                    Rogério Parente
                  </h3>
                  <p className="text-sm text-slate-600">
                    Diretor Geral — Lyon Soluções Comerciais
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-200 text-sm">
                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-300 flex items-center justify-center shrink-0 text-[#132238] shadow-xs mt-0.5">
                      <Phone className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-semibold">
                        Telefone & WhatsApp
                      </div>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#132238] hover:underline"
                      >
                        {phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-300 flex items-center justify-center shrink-0 text-slate-700 shadow-xs mt-0.5">
                      <Mail className="w-4 h-4 text-[#132238]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-semibold">
                        E-mail Comercial
                      </div>
                      <a
                        href={`mailto:${emailDisplay}`}
                        className="text-sm text-slate-800 hover:text-[#132238] font-medium break-all"
                      >
                        {emailDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-300 flex items-center justify-center shrink-0 text-slate-700 shadow-xs mt-0.5">
                      <MapPin className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-semibold">
                        Sede Operacional
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {addressDisplay}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Norte Fluminense • Bacia de Campos
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#132238] hover:bg-[#1b3150] text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Iniciar conversa no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#132238] mb-2 font-serif">
                Envie uma mensagem
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Preencha os campos abaixo para receber nosso contato ou encaminhe direto ao WhatsApp do Rogério.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-950">
                    Mensagem pronta para envio!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Clique no botão abaixo para abrir a conversa no WhatsApp do Rogério Parente com seus dados preenchidos:
                  </p>
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Abrir no WhatsApp Agora</span>
                  </button>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-slate-500 hover:underline"
                    >
                      Preencher novamente
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitForm} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-xs font-semibold text-slate-700 uppercase mb-1"
                      >
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#132238]/30 focus:border-[#132238]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-xs font-semibold text-slate-700 uppercase mb-1"
                      >
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Ex: Indústria XYZ"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#132238]/30 focus:border-[#132238]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="telefone"
                        className="block text-xs font-semibold text-slate-700 uppercase mb-1"
                      >
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="Ex: (22) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#132238]/30 focus:border-[#132238]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 uppercase mb-1"
                      >
                        E-mail de Contato *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: contato@empresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#132238]/30 focus:border-[#132238]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tipo"
                      className="block text-xs font-semibold text-slate-700 uppercase mb-1"
                    >
                      Finalidade do Contato
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#132238]/30 focus:border-[#132238]"
                    >
                      <option value="fornecedor">
                        Quero ser Fornecedor Parceiro (cadastrar catálogo/produtos)
                      </option>
                      <option value="cotacao">
                        Tenho uma Demanda / Solicitação de Cotação
                      </option>
                      <option value="institucional">
                        Contato Institucional / Dúvidas
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-xs font-semibold text-slate-700 uppercase mb-1"
                    >
                      Mensagem / Linha de Produtos
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Descreva resumidamente os tipos de materiais que sua fábrica fornece..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#132238]/30 focus:border-[#132238] resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#132238] hover:bg-[#1b3150] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>Enviar pelo WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER (AZUL MARINHO CORPORATIVO & DISCRETO) ── */}
      <footer className="bg-[#0e1726] text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 p-1.5 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/logo-navy.svg"
                    alt="Logo Lyon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold font-serif text-white tracking-wide">
                    LYON
                  </span>
                  <span className="block text-[10px] uppercase font-semibold text-slate-400">
                    Soluções Comerciais
                  </span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
                Integradora comercial sediada em Campos dos Goytacazes - RJ.
                Captação de demandas corporativas, equalização de cotações industriais
                e submissão de propostas para a Petrobras via portal Petronect.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <div className="text-slate-200 font-semibold uppercase tracking-wider text-xs">
                Navegação
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#como-atuamos" className="hover:text-white transition-colors">
                    Como Atuamos
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-white transition-colors">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#fornecedores" className="hover:text-white transition-colors">
                    Rede de Fornecedores
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors">
                    Canais de Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="md:col-span-4 space-y-3">
              <div className="text-slate-200 font-semibold uppercase tracking-wider text-xs">
                Atendimento
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-slate-200 block">Rogério Parente</strong>
                  <span className="text-slate-400">Diretor Geral</span>
                </div>
                <div>
                  <span className="text-slate-400">WhatsApp: </span>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline font-semibold"
                  >
                    {phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400">E-mail: </span>
                  <span className="text-slate-300">{emailDisplay}</span>
                </div>
                <div>
                  <span className="text-slate-400">Sede: </span>
                  <span className="text-slate-300">{addressDisplay}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>
              &copy; {new Date().getFullYear()} Lyon Soluções Comerciais. Todos os direitos reservados.
            </div>
            <div>
              Campos dos Goytacazes - RJ • Bacia de Campos
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
