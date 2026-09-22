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
  Sparkles,
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

  const phoneRaw = "5522998303806";
  const phoneDisplay = "(22) 99830-3806";
  const emailDisplay = "caio@lyonsolucoes.com.br";
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
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-red-900/20 selection:text-red-900">
      {/* ── HEADER / NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 flex items-center justify-center p-1 rounded-lg bg-slate-900 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Logo Lyon Soluções Comerciais"
                width={40}
                height={40}
                className="object-contain filter invert brightness-200"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-950 font-serif leading-none">
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
              className="hover:text-red-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-800 hover:after:w-full after:transition-all"
            >
              Sobre Nós
            </a>
            <a
              href="#como-atuamos"
              className="hover:text-red-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-800 hover:after:w-full after:transition-all"
            >
              Como Atuamos
            </a>
            <a
              href="#diferenciais"
              className="hover:text-red-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-800 hover:after:w-full after:transition-all"
            >
              Diferenciais
            </a>
            <a
              href="#fornecedores"
              className="hover:text-red-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-800 hover:after:w-full after:transition-all"
            >
              Seja Parceiro
            </a>
            <a
              href="#contato"
              className="hover:text-red-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-800 hover:after:w-full after:transition-all"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-red-800 hover:bg-red-900 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
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
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-red-800 hover:bg-red-900"
              >
                <Phone className="w-4 h-4" />
                <span>Falar com Rogério Parente</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0c182b] via-[#102138] to-[#0c182b] text-white py-20 lg:py-28">
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a63_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-800/90 text-red-200 border border-red-800/40 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Inteligência Comercial & Oportunidades Petronect
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-serif">
                Conectando indústrias de excelência às grandes demandas da{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-200">
                  Petrobras
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A <strong>Lyon Soluções Comerciais</strong> é a integradora que
                mapeia demandas no <strong>Petronect</strong>, equaliza cotações
                diretamente com fabricantes qualificados e submete propostas
                integradas de alto padrão técnico, com total compliance e agilidade.
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white bg-red-800 hover:bg-red-900 shadow-lg shadow-red-950/40 hover:shadow-red-950/60 transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>Falar com o Diretor Rogério Parente</span>
                </a>

                <a
                  href="#como-atuamos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 transition-all hover:text-white"
                >
                  <span>Entenda Nossa Operação</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                      Base Operacional
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      Campos dos Goytacazes - RJ (Bacia de Campos)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                      Compliance & Editais
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      Rigor técnico em licitações e requisições
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                  <Handshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                      Canal de Indústrias
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      Escoamento contínuo de fabricantes parceiros
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Corporate Badge Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
                {/* Decorative border line in subtle crimson */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent rounded-full" />

                <div className="flex flex-col items-center text-center space-y-5">
                  <div className="w-24 h-24 p-2 rounded-2xl bg-white shadow-md flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Brasão Lyon"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-serif text-white tracking-wide">
                      LYON
                    </h3>
                    <p className="text-xs font-semibold tracking-widest text-red-400 uppercase mt-1">
                      Soluções Comerciais
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Atuação especializada no setor offshore, óleo & gás e energia,
                    conectando propostas competitivas às demandas do portal Petronect.
                  </p>

                  <div className="w-full bg-slate-800/60 rounded-xl p-4 border border-slate-700/50 text-left space-y-2.5 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Direção Geral:</span>
                      <strong className="text-white">Rogério Parente</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Atendimento:</span>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 font-semibold hover:underline"
                      >
                        {phoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">E-mail:</span>
                      <span className="text-slate-200">{emailDisplay}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Sede:</span>
                      <span className="text-slate-200">Campos dos Goytacazes / RJ</span>
                    </div>
                  </div>

                  <div className="w-full pt-1">
                    <a
                      href="#contato"
                      className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                    >
                      <span>Entrar em contato direto</span>
                      <ChevronRight className="w-3.5 h-3.5" />
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
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-md border border-red-200">
                <Building2 className="w-3.5 h-3.5" />
                Sobre a Empresa
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif leading-tight">
                A ponte estratégica entre a capacidade fabril e as grandes contratações.
              </h2>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  Sediada estrategicamente em <strong>Campos dos Goytacazes - RJ</strong>,
                  ao lado da Bacia de Campos e polo de Macaé, a{" "}
                  <strong>Lyon Soluções Comerciais</strong> foi estruturada para
                  superar um desafio constante do mercado: a complexidade documental
                  e operacional para fornecer produtos industriais a grandes
                  companhias, especialmente em editais da <strong>Petrobras</strong> no{" "}
                  <strong>Petronect</strong>.
                </p>
                <p>
                  Fundada e liderada por <strong>Rogério Parente</strong>, a Lyon não é
                  uma intermediária passiva. Nós operamos ativamente como uma{" "}
                  <strong>Integradora Comercial</strong>: acompanhamos diariamente
                  os processos licitatórios abertos, filtramos as especificações
                  técnicas exatas, buscamos os melhores fornecedores parceiros,
                  equalizamos as cotações e estruturamos uma proposta robusta,
                  competitiva e em total conformidade.
                </p>
                <p>
                  Para os fornecedores, somos um canal de vendas direto e recorrente
                  sem o custo ou atrito de manter uma estrutura interna dedicada a
                  licitações corporativas. Para as contratantes, representamos a
                  garantia de orçamentos precisos, comunicação rápida e seriedade em
                  cada etapa.
                </p>
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-700" />
                    Foco no Decisor
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Atendimento ágil direto com a liderança para tomada rápida de decisões em cotações urgentes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-700" />
                    Inteligência em Petronect
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Conhecimento aprofundado dos prazos, parâmetros de lance e exigências de conformidade técnica.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual Trust Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-800/20 rounded-full blur-2xl" />

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center p-1 shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Lyon"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold">Compromisso Lyon</h4>
                      <p className="text-xs text-slate-400">Nossa Proposta de Valor</p>
                    </div>
                  </div>

                  <blockquote className="text-sm text-slate-300 italic leading-relaxed border-l-2 border-red-700 pl-4 py-1">
                    &ldquo;Nossa missão é aproximar quem tem produtos de primeira linha
                    das demandas mais exigentes do país, transformando editais burocráticos
                    em contratos reais e fornecimento eficiente.&rdquo;
                  </blockquote>

                  <div className="pt-2">
                    <div className="text-sm font-semibold text-white">Rogério Parente</div>
                    <div className="text-xs text-red-400 font-medium">
                      Fundador & Diretor Geral — Lyon Soluções Comerciais
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Campos dos Goytacazes - RJ</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Operação Ativa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: COMO ATUAMOS ── */}
      <section id="como-atuamos" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-100/70 px-3 py-1 rounded-md">
              <TrendingUp className="w-3.5 h-3.5" />
              Processo de Trabalho
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif">
              Como funciona a nossa operação
            </h2>
            <p className="text-base text-slate-600">
              Conheça as etapas transparentes através das quais a Lyon transforma
              oportunidades do Petronect em cotações vencedoras para nossa rede de parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-xs">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Captação de Oportunidades
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Monitoramento contínuo do portal Petronect e requisições abertas pela Petrobras, identificando demandas que coincidem com o portfólio de nossos parceiros.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-700" />
                Agilidade na triagem de editais
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-800 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-xs">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Cotação com Fornecedores
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Acionamos as indústrias e distribuidores parceiros com especificações claras de produtos e prazos, coletando preços competitivos de fábrica.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-red-700" />
                Equalização técnica de preços
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-xs">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Proposta Integrada
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A Lyon compõe a proposta final com rigor documental, memórias de cálculo, certificados de conformidade e envio tempestivo dentro da plataforma oficial.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-red-700" />
                100% de conformidade documental
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-xs">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Gestão & Acompanhamento
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Acompanhamento minucioso de cada fase da concorrência, respostas a esclarecimentos técnicos e gestão da contratação de ponta a ponta.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-red-700" />
                Segurança até a homologação
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: DIFERENCIAIS & CREDIBILIDADE ── */}
      <section id="diferenciais" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-md border border-red-200">
              <Shield className="w-3.5 h-3.5" />
              Por Que Escolher a Lyon
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif">
              Pilares que fundamentam a nossa credibilidade
            </h2>
            <p className="text-base text-slate-600">
              Atuar no ambiente Petronect exige precisão cirúrgica. Veja os diferenciais
              que tornam a Lyon a parceira de confiança para fornecedores e contratantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-800 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Conformidade & Compliance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cada edital da Petrobras impõe regras rígidas de qualificação técnica,
                certificações e regularidade fiscal. A Lyon valida todos os dados
                antes da submissão para eliminar riscos de inabilitação.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Celeridade de Resposta
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prazos em tomadas de preço no Petronect costumam ser curtos. Nossa
                comunicação direta com fabricantes parceiros nos permite cotar com
                rapidez e precisão dentro das janelas de abertura.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-800 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Proximidade da Bacia de Campos
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Com sede em Campos dos Goytacazes e presença contínua no eixo do
                Norte Fluminense, compreendemos a dinâmica logística, operacional
                e contratual específica da indústria de energia offshore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: SEJA UM FORNECEDOR PARCEIRO ── */}
      <section id="fornecedores" className="py-20 bg-gradient-to-b from-slate-900 to-[#0c182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/60 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-700/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-900/30 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/60">
                  <Users className="w-3.5 h-3.5" />
                  Rede de Fornecedores Homologados
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif leading-tight">
                  Sua fábrica nas maiores requisições do setor sem burocracia interna.
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Se a sua empresa fabrica ou distribui materiais industriais, válvulas,
                  conexões, materiais elétricos, EPIs, peças mecânicas ou suprimentos
                  técnicos, você pode se conectar à Lyon para receber solicitações de
                  cotação recorrentes sempre que novas oportunidades surgirem no Petronect.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Sem custos de inscrição ou mensalidades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Cotações com especificações técnicas diretas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Acesso a contratos corporativos de grande porte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Relacionamento comercial ético e transparente</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <a
                  href={getWhatsAppLink(
                    "Olá, Rogério! Gostaria de cadastrar minha empresa e catálogo na Rede de Fornecedores da Lyon para oportunidades no Petronect."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-white bg-red-800 hover:bg-red-900 shadow-xl shadow-red-950/50 transition-all hover:scale-102 text-center"
                >
                  <Handshake className="w-5 h-5" />
                  <span>Cadastrar Empresa no WhatsApp</span>
                </a>

                <a
                  href="#contato"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-900 border border-slate-700 transition-colors text-center text-sm"
                >
                  <span>Preencher Formulário de Cadastro</span>
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
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-md border border-red-200">
              <Mail className="w-3.5 h-3.5" />
              Canais Diretos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif">
              Fale com a Lyon Soluções Comerciais
            </h2>
            <p className="text-base text-slate-600">
              Estamos à disposição para apresentar nossa atuação, avaliar seu catálogo de
              produtos ou esclarecer dúvidas sobre processos de fornecimento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Official Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Diretoria Executiva
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white mt-1">
                    Rogério Parente
                  </h3>
                  <p className="text-sm text-slate-400">
                    Diretor Geral / Fundador — Lyon Soluções Comerciais
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-800 text-sm">
                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-950/80 border border-red-800/60 flex items-center justify-center shrink-0 text-red-400 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">
                        Telefone & WhatsApp
                      </div>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-white hover:text-red-400 transition-colors"
                      >
                        {phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">
                        E-mail Comercial
                      </div>
                      <a
                        href={`mailto:${emailDisplay}`}
                        className="text-sm text-slate-200 hover:text-white font-medium break-all"
                      >
                        {emailDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">
                        Sede Operacional
                      </div>
                      <div className="text-sm text-slate-200 font-medium">
                        {addressDisplay}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Norte Fluminense • Bacia de Campos
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-800 hover:bg-red-900 text-white font-semibold text-sm transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Iniciar conversa no WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Informative Note */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-red-700" />
                  Atendimento Especializado
                </div>
                <p>
                  Respondemos prontamente a solicitações de indústrias que desejam fornecer
                  ou a empresas buscando cotações equalizadas no setor de Óleo & Gás.
                </p>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Envie uma mensagem
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Preencha o formulário abaixo. Se preferir, você também pode enviar a
                mensagem pronta direto para o WhatsApp do Rogério.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-950">
                    Mensagem estruturada com sucesso!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Obrigado pelo contato. Para acelerar o retorno imediato do Rogério
                    Parente, você pode clicar abaixo para abrir a conversa no WhatsApp
                    com estes dados:
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
                      Enviar outra mensagem
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-800/30 focus:border-red-800"
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
                        placeholder="Ex: Indústria Metalúrgica XYZ"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-800/30 focus:border-red-800"
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-800/30 focus:border-red-800"
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-800/30 focus:border-red-800"
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-800/30 focus:border-red-800"
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
                      placeholder="Descreva resumidamente os tipos de materiais que sua fábrica fornece ou a sua dúvida..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-800/30 focus:border-red-800 resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-white bg-red-800 hover:bg-red-900 transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Enviar pelo WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 p-1 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/logo.png"
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
                  <span className="block text-[10px] uppercase font-semibold text-red-400">
                    Soluções Comerciais
                  </span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Integradora comercial sediada em Campos dos Goytacazes - RJ.
                Equalização de cotações industriais e participação em oportunidades
                e editais corporativos no portal Petronect e setor de Óleo & Gás.
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
                Contato & Atendimento
              </div>
              <div className="space-y-2">
                <div>
                  <strong className="text-slate-200 block">Rogério Parente</strong>
                  <span className="text-slate-400">Diretor Geral</span>
                </div>
                <div>
                  <span className="block text-slate-400">Telefone:</span>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline font-semibold"
                  >
                    {phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="block text-slate-400">E-mail:</span>
                  <span className="text-slate-300">{emailDisplay}</span>
                </div>
                <div>
                  <span className="block text-slate-400">Localização:</span>
                  <span className="text-slate-300">Campos dos Goytacazes - RJ</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>
              &copy; {new Date().getFullYear()} Lyon Soluções Comerciais. Todos os direitos reservados.
            </div>
            <div>
              Integradora comercial independente • Operação em Campos dos Goytacazes/RJ
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
