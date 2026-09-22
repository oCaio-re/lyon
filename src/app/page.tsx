"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Award,
  Boxes,
  Briefcase,
  Building,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Factory,
  FileSpreadsheet,
  Flame,
  GitMerge,
  Handshake,
  HardHat,
  Home,
  Landmark,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  RefreshCw,
  Search,
  Send,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trees,
  TrendingUp,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formType, setFormType] = useState<"cliente" | "fornecedor">("cliente");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    segmentoOuCategoria: "",
    mensagem: "",
  });

  const phoneRaw = "5522999652200";
  const phoneDisplay = "(22) 99965 - 2200";
  const emailDisplay = "comercial01.lyon@gmail.com";
  const addressDisplay =
    "Rua Visconde de Itaboraí, nº 390 altos - Parque Rosário, Campos dos Goytacazes/RJ";

  const getWhatsAppLink = (customText?: string) => {
    const defaultText =
      "Olá! Acessei o site da Lyon Soluções Comerciais e gostaria de mais informações sobre suas soluções e serviços corporativos.";
    const text = encodeURIComponent(customText || defaultText);
    return `https://wa.me/${phoneRaw}?text=${text}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    const finalidade =
      formType === "cliente"
        ? "Demanda de Solução / Serviço Corporativo"
        : "Interesse em Parceria / Representação Comercial";

    const text =
      `*Contato via Site - Lyon Soluções Comerciais*\n` +
      `*Tipo:* ${finalidade}\n` +
      `*Nome:* ${formData.nome || "Não informado"}\n` +
      `*Empresa:* ${formData.empresa || "Não informada"}\n` +
      `*Telefone:* ${formData.telefone || "Não informado"}\n` +
      `*E-mail:* ${formData.email || "Não informado"}\n` +
      `*Segmento/Interesse:* ${formData.segmentoOuCategoria || "Não informado"}\n` +
      `*Mensagem:* ${formData.mensagem || "Gostaria de agendar uma reunião comercial."}`;

    window.open(
      `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  // Clientes parceiros oficiais
  const clientPartners = [
    {
      name: "Petrobras",
      category: "Energia & Óleo e Gás",
      logo: "/partners/petrobras.png",
      badge: "Óleo & Gás",
      desc: "Fornecimento de suprimentos e atendimento a demandas corporativas e operacionais de alta exigência técnica.",
    },
    {
      name: "Transpetro",
      category: "Transporte & Logística de Combustíveis",
      logo: "/partners/transpetro.png",
      badge: "Logística O&G",
      desc: "Atendimento comercial estruturado para infraestrutura e logística de transporte de combustíveis e derivados.",
    },
    {
      name: "Factum Construtora",
      category: "Construção Civil & Engenharia",
      logo: "/partners/factum_construtora.png",
      badge: "Construção & Obras",
      desc: "Soluções integradas de suprimentos, materiais e serviços especializados para projetos de engenharia civil.",
    },
    {
      name: "Virtus Engenharia",
      category: "Projetos de Engenharia & Infraestrutura",
      logo: "/partners/virtus_engenharia.png",
      badge: "Engenharia",
      desc: "Suporte comercial e conexão com fornecedores qualificados para obras civis e industriais complexas.",
    },
    {
      name: "Login Informática",
      category: "Tecnologia da Informação & Hardware",
      logo: "/partners/login_informatica.png",
      badge: "Tecnologia",
      desc: "Atendimento corporativo e distribuição de equipamentos e soluções de informática e conectividade.",
    },
    {
      name: "Ontime Log",
      category: "Operações Logísticas & Suprimentos",
      logo: "/partners/ontime_log.png",
      badge: "Logística",
      desc: "Agilidade no fluxo de suprimentos, distribuição e suporte logístico integrado para operações contínuas.",
    },
  ];

  // Fornecedores parceiros oficiais
  const supplierPartners = [
    {
      name: "Movement",
      segment: "Equipamentos Fitness Corporativos",
      logo: "/partners/movement.png",
      badge: "Fitness Corporativo",
      desc: "Líder brasileira em equipamentos de musculação e cárdio para condomínios, empresas e academias.",
    },
    {
      name: "Kodak",
      segment: "Tecnologia & Imagem Corporativa",
      logo: "/partners/kodak.png",
      badge: "Imagem & Tecnologia",
      desc: "Tradição mundial em soluções de imagem, captura e equipamentos tecnológicos de alto desempenho.",
    },
    {
      name: "Plaxmetal",
      segment: "Cadeiras Corporativas & Móveis Escolares",
      logo: "/partners/plaxmetal.png",
      badge: "Mobiliário Corporativo",
      desc: "Referência nacional em ergonomia, assentos corporativos de alto padrão e mobiliário educacional.",
    },
    {
      name: "Matrix",
      segment: "Equipamentos Profissionais de Alta Performance",
      logo: "/partners/matrix.png",
      badge: "Fitness Profissional",
      desc: "Padrão mundial em biomecânica avançada, engenharia e equipamentos premium para bem-estar e saúde.",
    },
    {
      name: "Sony",
      segment: "Áudio, Vídeo & Tecnologia de Ponta",
      logo: "/partners/sony.png",
      badge: "Áudio & Vídeo",
      desc: "Reconhecimento global em displays, sistemas de som, conectividade e equipamentos audiovisuais profissionais.",
    },
    {
      name: "Samsung",
      segment: "Telas, Comunicação & Dispositivos",
      logo: "/partners/samsung.png",
      badge: "Telas & Dispositivos",
      desc: "Liderança global em tecnologia, monitores profissionais, sinalização digital e ecossistema corporativo.",
    },
  ];

  // Carousel refs e estados
  const clientScrollRef = useRef<HTMLDivElement>(null);
  const supplierScrollRef = useRef<HTMLDivElement>(null);

  const [clientActiveIndex, setClientActiveIndex] = useState(0);
  const [supplierActiveIndex, setSupplierActiveIndex] = useState(0);

  const [clientHovered, setClientHovered] = useState(false);
  const [supplierHovered, setSupplierHovered] = useState(false);

  // Sincronização do scroll com indicadores de pontos
  const handleClientScroll = () => {
    if (!clientScrollRef.current) return;
    const container = clientScrollRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth || 300;
    const gap = 20;
    const idx = Math.round(container.scrollLeft / (cardWidth + gap));
    setClientActiveIndex(Math.min(Math.max(0, idx), clientPartners.length - 1));
  };

  const handleSupplierScroll = () => {
    if (!supplierScrollRef.current) return;
    const container = supplierScrollRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth || 300;
    const gap = 20;
    const idx = Math.round(container.scrollLeft / (cardWidth + gap));
    setSupplierActiveIndex(Math.min(Math.max(0, idx), supplierPartners.length - 1));
  };

  // Navegação direta por pontos
  const scrollToClientIndex = (index: number) => {
    if (!clientScrollRef.current) return;
    const container = clientScrollRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth || 300;
    const gap = 20;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setClientActiveIndex(index);
  };

  const scrollToSupplierIndex = (index: number) => {
    if (!supplierScrollRef.current) return;
    const container = supplierScrollRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth || 300;
    const gap = 20;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setSupplierActiveIndex(index);
  };

  // Navegação anterior / próximo com looping
  const scrollCarousel = (
    direction: "prev" | "next",
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!ref.current) return;
    const container = ref.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth || 300;
    const gap = 20;
    const step = cardWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "next") {
      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft <= 20) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -step, behavior: "smooth" });
      }
    }
  };

  // Auto-scroll para o carrossel de clientes
  useEffect(() => {
    if (clientHovered) return;
    const timer = setInterval(() => {
      if (!clientScrollRef.current) return;
      const container = clientScrollRef.current;
      const firstCard = container.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard?.offsetWidth || 300;
      const gap = 20;
      const step = cardWidth + gap;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3800);

    return () => clearInterval(timer);
  }, [clientHovered, clientPartners.length]);

  // Auto-scroll para o carrossel de fornecedores
  useEffect(() => {
    if (supplierHovered) return;
    const timer = setInterval(() => {
      if (!supplierScrollRef.current) return;
      const container = supplierScrollRef.current;
      const firstCard = container.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard?.offsetWidth || 300;
      const gap = 20;
      const step = cardWidth + gap;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4200);

    return () => clearInterval(timer);
  }, [supplierHovered, supplierPartners.length]);

  // Portfólio de Soluções e Serviços
  const services = [
    {
      title: "Venda e Distribuição",
      desc: "Fornecimento de produtos e materiais de diferentes categorias, com foco em atendimento corporativo ágil e estruturado.",
      icon: Boxes,
      badge: "Suprimentos",
    },
    {
      title: "Representação Comercial",
      desc: "Intermediação e desenvolvimento de negócios entre fabricantes, fornecedores e clientes corporativos de grande porte.",
      icon: Handshake,
      badge: "Negócios",
    },
    {
      title: "SPDA",
      desc: "Soluções e serviços especializados relacionados a Sistemas de Proteção contra Descargas Atmosféricas e conformidade técnica.",
      icon: Zap,
      badge: "Proteção & Normas",
    },
    {
      title: "Manutenção Predial",
      desc: "Apoio à conservação, manutenção preventiva/corretiva e adequação contínua de estruturas e instalações físicas.",
      icon: Wrench,
      badge: "Facilities",
    },
    {
      title: "Jardinagem",
      desc: "Serviços de manutenção, conservação e valorização de áreas verdes, jardins e ambientes corporativos externos e internos.",
      icon: Trees,
      badge: "Áreas Verdes",
    },
    {
      title: "Soluções sob Demanda",
      desc: "Estruturação de alternativas comerciais personalizadas conforme especificações técnicas, quantidades, prazos e necessidades do cliente.",
      icon: Layers,
      badge: "Customizado",
    },
  ];

  // Onde podemos gerar valor?
  const marketSectors = [
    { name: "Condomínios e Facilities", icon: Building, desc: "Serviços de conservação, manutenção predial, jardinagem e SPDA." },
    { name: "Óleo e Gás", icon: Flame, desc: "Suprimentos e atendimento a grandes operadoras e demandas do setor." },
    { name: "Projetos e Obras", icon: HardHat, desc: "Apoio técnico, materiais especializados e soluções estruturadas para canteiros." },
    { name: "Infraestrutura", icon: Network, desc: "Conexão com fornecedores homologados para demandas de grande porte." },
    { name: "Órgãos e Instituições", icon: Landmark, desc: "Atendimento formal com rigor documental, prazos e especificações." },
    { name: "Empresas e Escritórios", icon: Briefcase, desc: "Mobiliário corporativo, tecnologia, conservação e facilities." },
    { name: "Indústria e Energia", icon: Factory, desc: "Insumos, proteção contra descargas e contratos de fornecimento contínuo." },
    { name: "Operações Corporativas", icon: Sparkles, desc: "Estruturação sob medida para operações complexas e multissetoriais." },
  ];

  // Como atuamos - 5 etapas
  const methodologySteps = [
    {
      number: "01",
      title: "Entender",
      desc: "Levantamos a necessidade com precisão: especificações técnicas, quantidade, criticidade e prazo de entrega.",
      icon: Search,
    },
    {
      number: "02",
      title: "Conectar",
      desc: "Identificamos fabricantes, fornecedores homologados e as alternativas mais adequadas e competitivas.",
      icon: GitMerge,
    },
    {
      number: "03",
      title: "Propor",
      desc: "Estruturamos a solução comercial completa com clareza, transparência, viabilidade e objetividade técnica.",
      icon: Lightbulb,
    },
    {
      number: "04",
      title: "Executar",
      desc: "Acompanhamos de perto o fornecimento, execução do serviço, logística, qualidade e alinhamento contínuo.",
      icon: Truck,
    },
    {
      number: "05",
      title: "Relacionar",
      desc: "Buscamos continuidade nas parcerias, melhoria contínua dos processos e geração de novas oportunidades.",
      icon: RefreshCw,
    },
  ];

  // Nossos diferenciais
  const differentials = [
    {
      title: "Atendimento Próximo",
      desc: "Relacionamento direto, consultivo e acompanhamento contínuo de cada demanda com prontidão.",
      icon: Users,
    },
    {
      title: "Rede de Parceiros",
      desc: "Conexão com fabricantes e fornecedores reconhecidos nacional e internacionalmente.",
      icon: Share2,
    },
    {
      title: "Agilidade Comercial",
      desc: "Resposta rápida e busca objetiva por alternativas viáveis e econômicas para sua empresa.",
      icon: Zap,
    },
    {
      title: "Flexibilidade",
      desc: "Capacidade comprovada de adaptar a solução às especificidades e exigências de cada cliente.",
      icon: SlidersHorizontal,
    },
    {
      title: "Visão de Longo Prazo",
      desc: "Construção de relações comerciais sólidas, leais e duradouras com clientes e parceiros.",
      icon: TrendingUp,
    },
    {
      title: "Compromisso com a Entrega",
      desc: "Foco intransigente em qualidade, cumprimento rigoroso de prazos e atendimento às normas.",
      icon: ShieldCheck,
    },
  ];

  // Princípios e Valores
  const coreValues = [
    "Ética e transparência",
    "Compromisso com o cliente",
    "Agilidade",
    "Qualidade",
    "Relacionamento",
    "Responsabilidade",
    "Busca contínua por soluções",
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-[#051e3f] selection:text-white">
      {/* ── TOP BAR (INSTITUCIONAL OFICIAL) ── */}
      <div className="bg-[#051e3f] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MapPin className="w-3.5 h-3.5 text-[#ce1528] shrink-0" />
            <span>{addressDisplay}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${emailDisplay}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{emailDisplay}</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium text-emerald-400"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo oficial */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <Image
                src="/logo.svg"
                alt="Logo Lyon Soluções Comerciais"
                width={42}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>

            <div className="h-8 flex items-center gap-1">
              <div className="w-1 h-8 bg-[#051e3f] rounded-full" />
              <div className="w-0.5 h-8 bg-[#ce1528] rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#051e3f] font-serif leading-none">
                LYON
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-600 uppercase mt-1">
                Soluções Comerciais
              </span>
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#solucoes"
              className="hover:text-[#051e3f] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#051e3f] hover:after:w-full after:transition-all"
            >
              Soluções e Serviços
            </a>
            <a
              href="#segmentos"
              className="hover:text-[#051e3f] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#051e3f] hover:after:w-full after:transition-all"
            >
              Segmentos
            </a>
            <a
              href="#clientes"
              className="hover:text-[#051e3f] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#051e3f] hover:after:w-full after:transition-all"
            >
              Clientes
            </a>
            <a
              href="#fornecedores"
              className="hover:text-[#051e3f] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#051e3f] hover:after:w-full after:transition-all"
            >
              Parceiros
            </a>
            <a
              href="#metodologia"
              className="hover:text-[#051e3f] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#051e3f] hover:after:w-full after:transition-all"
            >
              Como Atuamos
            </a>
            <a
              href="#sobre"
              className="hover:text-[#051e3f] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#051e3f] hover:after:w-full after:transition-all"
            >
              Sobre Nós
            </a>
          </nav>

          {/* CTA Header */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#051e3f] text-white hover:bg-[#0d2a52] transition-colors shadow-sm"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Soluções e Serviços
            </a>
            <a
              href="#segmentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Segmentos de Atuação
            </a>
            <a
              href="#clientes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Clientes Parceiros
            </a>
            <a
              href="#fornecedores"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Fornecedores Parceiros
            </a>
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Como Atuamos
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Sobre a Lyon
            </a>
            <div className="pt-2">
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold bg-[#051e3f] text-white"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-16 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headline & Official Tagline */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#051e3f]">
                  <span className="w-2 h-2 rounded-full bg-[#ce1528]" />
                  Soluções Comerciais & Serviços Integrados
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#051e3f] tracking-tight leading-[1.15]">
                  Conectando empresas, fornecedores e oportunidades.
                </h1>

                <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
                  Uma empresa orientada a relacionamento, agilidade e geração de
                  valor.
                </p>

                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  A <strong className="text-slate-900">LYON SOLUÇÕES COMERCIAIS</strong> foi
                  criada para reduzir a distância entre grandes empresas e seus
                  principais fornecedores e clientes, atuando como elo comercial e
                  operacional para transformar necessidades em soluções.
                </p>

                {/* Duplo CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#contato"
                    onClick={() => setFormType("cliente")}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#051e3f] hover:bg-[#0d2a52] transition-colors shadow-md hover:shadow-lg text-sm gap-2"
                  >
                    <span>Solicitar Solução ou Cotação</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contato"
                    onClick={() => setFormType("fornecedor")}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-[#051e3f] bg-white border-2 border-slate-300 hover:border-[#051e3f] hover:bg-slate-50 transition-colors text-sm gap-2"
                  >
                    <Handshake className="w-4 h-4 text-[#ce1528]" />
                    <span>Seja um Fornecedor Parceiro</span>
                  </a>
                </div>

                {/* Pilares rápidos de essência */}
                <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-200">
                  <div className="space-y-1">
                    <span className="block text-xs uppercase font-bold text-slate-500">
                      Foco
                    </span>
                    <span className="text-sm font-bold text-[#051e3f]">
                      Relacionamento
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs uppercase font-bold text-slate-500">
                      Entrega
                    </span>
                    <span className="text-sm font-bold text-[#051e3f]">
                      Agilidade & Rigor
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs uppercase font-bold text-slate-500">
                      Resultado
                    </span>
                    <span className="text-sm font-bold text-[#051e3f]">
                      Geração de Valor
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Card Institucional da Lyon */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                    <div className="w-3/4 bg-[#051e3f]" />
                    <div className="w-1/4 bg-[#ce1528]" />
                  </div>

                  <div className="flex flex-col items-center text-center space-y-5 pt-2">
                    <div className="w-24 h-24 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                      <Image
                        src="/logo.svg"
                        alt="Brasão Lyon"
                        width={70}
                        height={80}
                        className="h-16 w-auto object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold font-serif text-[#051e3f] tracking-wide">
                        LYON
                      </h3>
                      <p className="text-xs font-bold tracking-widest text-slate-600 uppercase mt-1">
                        Soluções Comerciais
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed text-left space-y-2">
                      <div className="font-semibold text-[#051e3f] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Nossa Proposta de Atuação</span>
                      </div>
                      <p>
                        Atuamos na venda, distribuição e representação de
                        produtos, além da prestação de serviços especializados
                        para empresas que buscam confiabilidade, atendimento
                        próximo e capacidade de execução.
                      </p>
                    </div>

                    <div className="w-full pt-1 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                      <span>Campos dos Goytacazes - RJ</span>
                      <span className="font-semibold text-emerald-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Atendimento Ativo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENTES PARCEIROS (CARROSSEL) ── */}
        <section id="clientes" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-[#051e3f]">
                  Relacionamentos Corporativos
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#051e3f]">
                  Clientes Parceiros
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Relacionamentos que refletem nossa capacidade de atender
                  demandas corporativas de alta complexidade e rigor técnico.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Clientes apresentados conforme informações institucionais fornecidas pela LYON.
                </p>
              </div>

              {/* Botões de Navegação do Carrossel */}
              <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
                <button
                  onClick={() => scrollCarousel("prev", clientScrollRef)}
                  aria-label="Cliente anterior"
                  className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-700 hover:text-[#051e3f] hover:border-[#051e3f] hover:bg-slate-50 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollCarousel("next", clientScrollRef)}
                  aria-label="Próximo cliente"
                  className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-700 hover:text-[#051e3f] hover:border-[#051e3f] hover:bg-slate-50 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Container do Carrossel com Máscaras Laterais */}
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 hidden sm:block" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 hidden sm:block" />

              <div
                ref={clientScrollRef}
                onMouseEnter={() => setClientHovered(true)}
                onMouseLeave={() => setClientHovered(false)}
                onTouchStart={() => setClientHovered(true)}
                onTouchEnd={() => setClientHovered(false)}
                onScroll={handleClientScroll}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1 sm:px-4"
              >
                {clientPartners.map((client) => (
                  <div
                    key={client.name}
                    className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#051e3f] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 px-2.5 py-1 bg-slate-100 rounded-md">
                          {client.badge}
                        </span>
                        <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Parceria
                        </span>
                      </div>

                      <div className="w-full h-20 bg-slate-50/60 rounded-xl border border-slate-100 flex items-center justify-center p-3 mb-4 group-hover:bg-slate-50 transition-colors">
                        <Image
                          src={client.logo}
                          alt={`Logo ${client.name}`}
                          width={180}
                          height={70}
                          className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <h3 className="text-base font-bold text-[#051e3f] group-hover:text-[#ce1528] transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {client.category}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                        {client.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Atendimento Corporativo</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores de Posição (Pontos) */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {clientPartners.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToClientIndex(i)}
                    aria-label={`Ir para cliente ${i + 1}`}
                    className={`h-2 transition-all rounded-full cursor-pointer ${
                      clientActiveIndex === i
                        ? "w-8 bg-[#051e3f]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUÇÕES E SERVIÇOS ── */}
        <section id="solucoes" className="py-20 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-[#051e3f] border border-slate-200">
                Portfólio Integrado
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#051e3f]">
                Soluções e Serviços
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Um portfólio pensado para atender diferentes demandas
                corporativas com excelência, segurança e pontualidade.
              </p>
            </div>

            {/* Grid dos 6 Serviços Oficiais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => {
                const IconComponent = svc.icon;
                return (
                  <div
                    key={svc.title}
                    className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#051e3f] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#051e3f] group-hover:bg-[#051e3f] group-hover:text-white transition-colors">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                          {svc.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-serif text-[#051e3f]">
                        {svc.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mt-6">
                      <a
                        href="#contato"
                        onClick={() => {
                          setFormType("cliente");
                          setFormData((prev) => ({
                            ...prev,
                            segmentoOuCategoria: svc.title,
                          }));
                        }}
                        className="text-xs font-bold text-[#051e3f] hover:text-[#ce1528] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Solicitar atendimento para {svc.title}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ONDE PODEMOS GERAR VALOR? / SEGMENTOS ── */}
        <section id="segmentos" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-[#051e3f]">
                Segmentos de Atuação
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#051e3f]">
                Onde podemos gerar valor?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Atuação preparada para diferentes ambientes e necessidades.
                Fornecimento, representação ou serviços especializados conforme a demanda.
              </p>
            </div>

            {/* Grid dos 8 Segmentos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketSectors.map((sec) => {
                const IconComponent = sec.icon;
                return (
                  <div
                    key={sec.name}
                    className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all space-y-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#051e3f]">
                      <IconComponent className="w-6 h-6 text-[#051e3f]" />
                    </div>
                    <h4 className="text-base font-bold text-[#051e3f]">
                      {sec.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FORNECEDORES PARCEIROS (CARROSSEL) ── */}
        <section id="fornecedores" className="py-20 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-[#051e3f] border border-slate-200">
                  Marcas & Fabricantes
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#051e3f]">
                  Fornecedores parceiros
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Relacionamentos sólidos que ampliam nosso portfólio e
                  capacidade de atendimento com produtos e marcas renomadas.
                </p>
              </div>

              {/* Botões de Navegação do Carrossel */}
              <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
                <button
                  onClick={() => scrollCarousel("prev", supplierScrollRef)}
                  aria-label="Fornecedor anterior"
                  className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-700 hover:text-[#051e3f] hover:border-[#051e3f] hover:bg-slate-50 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollCarousel("next", supplierScrollRef)}
                  aria-label="Próximo fornecedor"
                  className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-700 hover:text-[#051e3f] hover:border-[#051e3f] hover:bg-slate-50 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Container do Carrossel com Máscaras Laterais */}
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 hidden sm:block" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 hidden sm:block" />

              <div
                ref={supplierScrollRef}
                onMouseEnter={() => setSupplierHovered(true)}
                onMouseLeave={() => setSupplierHovered(false)}
                onTouchStart={() => setSupplierHovered(true)}
                onTouchEnd={() => setSupplierHovered(false)}
                onScroll={handleSupplierScroll}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1 sm:px-4"
              >
                {supplierPartners.map((supp) => (
                  <div
                    key={supp.name}
                    className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-slate-50/70 p-6 rounded-2xl border-2 border-slate-200 hover:border-[#051e3f] hover:bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 px-2.5 py-1 bg-white border border-slate-200 rounded-md">
                          {supp.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-[#ce1528] flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          Homologado
                        </span>
                      </div>

                      <div className="w-full h-20 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 mb-4 group-hover:shadow-xs transition-shadow">
                        <Image
                          src={supp.logo}
                          alt={`Logo ${supp.name}`}
                          width={180}
                          height={70}
                          className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <h3 className="text-base font-bold text-[#051e3f] group-hover:text-[#ce1528] transition-colors">
                        {supp.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5">
                        {supp.segment}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                        {supp.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Portfólio Oficial</span>
                      <span className="font-semibold text-[#051e3f]">Lyon Soluções</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores de Posição (Pontos) */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {supplierPartners.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSupplierIndex(i)}
                    aria-label={`Ir para fornecedor ${i + 1}`}
                    className={`h-2 transition-all rounded-full cursor-pointer ${
                      supplierActiveIndex === i
                        ? "w-8 bg-[#051e3f]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Chamada para Novos Fornecedores */}
            <div className="mt-12 p-8 rounded-2xl bg-[#051e3f] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-xl font-bold font-serif">
                  É fabricante ou distribuidor industrial?
                </h3>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Conecte seus produtos e marcas à nossa estrutura de
                  distribuição, representação comercial e atendimento a grandes contas.
                </p>
              </div>
              <a
                href="#contato"
                onClick={() => setFormType("fornecedor")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white text-[#051e3f] hover:bg-slate-100 transition-colors shrink-0 text-sm gap-2"
              >
                <Handshake className="w-4 h-4 text-[#ce1528]" />
                <span>Cadastre sua Marca</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── COMO ATUAMOS / METODOLOGIA ── */}
        <section id="metodologia" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-[#051e3f]">
                Metodologia de Atuação
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#051e3f]">
                Como atuamos?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Da identificação da necessidade à entrega da solução, com
                controle de ponta a ponta.
              </p>
            </div>

            {/* 5 Etapas Oficiais */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {methodologySteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.number}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#051e3f] transition-colors relative"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-serif font-bold text-[#ce1528]">
                          {step.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#051e3f]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold font-serif text-[#051e3f]">
                        {step.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#051e3f] w-1/3" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── NOSSOS DIFERENCIAIS ── */}
        <section id="diferenciais" className="py-20 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-[#051e3f] border border-slate-200">
                Nossos Diferenciais
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#051e3f]">
                Nossos diferenciais
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Mais do que fornecer: entender, conectar e entregar.
              </p>
            </div>

            {/* Grid dos 6 Diferenciais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentials.map((diff) => {
                const IconComponent = diff.icon;
                return (
                  <div
                    key={diff.title}
                    className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs transition-all space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#051e3f] shadow-xs">
                      <IconComponent className="w-6 h-6 text-[#ce1528]" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-[#051e3f]">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── QUEM SOMOS / MISSÃO, VISÃO E VALORES ── */}
        <section id="sobre" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Esquerda: Quem Somos & Essência */}
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-[#051e3f]">
                  Institucional
                </span>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#051e3f] leading-tight">
                  Quem somos?
                </h2>

                <p className="text-lg font-medium text-slate-800 leading-snug">
                  Uma empresa orientada a relacionamento, agilidade e geração de valor.
                </p>

                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <h4 className="font-bold text-[#051e3f] mb-1">
                      Nossa essência
                    </h4>
                    <p>
                      A LYON SOLUÇÕES COMERCIAIS foi criada para reduzir a
                      distância entre grandes empresas e seus principais
                      fornecedores e clientes, atuando como elo comercial e
                      operacional para transformar necessidades em soluções.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <h4 className="font-bold text-[#051e3f] mb-1">
                      Nossa proposta
                    </h4>
                    <p>
                      Atuamos na venda, distribuição e representação de
                      produtos, além da prestação de serviços especializados para
                      empresas que buscam confiabilidade, atendimento próximo e
                      capacidade de execução.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direita: Missão, Visão e Valores */}
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Missão */}
                  <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ce1528]">
                      Missão
                    </span>
                    <h3 className="text-lg font-bold font-serif text-[#051e3f]">
                      Excelência & Agilidade
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Oferecer soluções comerciais e serviços com agilidade,
                      confiabilidade e excelência, conectando clientes e parceiros
                      a produtos e serviços que atendam às suas necessidades.
                    </p>
                  </div>

                  {/* Visão */}
                  <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#051e3f]">
                      Visão
                    </span>
                    <h3 className="text-lg font-bold font-serif text-[#051e3f]">
                      Parceria Estratégica
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ser reconhecida como uma parceira estratégica em soluções
                      comerciais e serviços, ampliando relações de longo prazo e
                      entregando valor sustentável aos clientes e fornecedores.
                    </p>
                  </div>
                </div>

                {/* Valores */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    Os princípios que orientam a atuação da LYON:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {coreValues.map((val) => (
                      <div
                        key={val}
                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NOSSO COMPROMISSO ── */}
        <section className="py-16 bg-[#051e3f] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-300 border border-white/20">
              Nosso Compromisso
            </span>
            <blockquote className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white leading-relaxed">
              &ldquo;Conectar necessidades a soluções que façam sentido para o
              cliente e para cada parceiro, com responsabilidade, agilidade e
              relacionamento.&rdquo;
            </blockquote>
            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              <span>Lyon Soluções Comerciais</span>
            </div>
          </div>
        </section>

        {/* ── SEÇÃO DE CONTATO & LOCALIZAÇÃO ── */}
        <section id="contato" className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Informações Institucionais */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-[#051e3f] border border-slate-200">
                    Atendimento Corporativo
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#051e3f]">
                    Estamos preparados para entender sua demanda e apresentar a melhor solução.
                  </h2>
                  <p className="text-lg font-serif text-[#ce1528] font-bold">
                    Vamos construir novas oportunidades juntos?
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Telefone */}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#051e3f] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-bold text-slate-500">
                        Telefone & WhatsApp
                      </span>
                      <span className="text-base font-bold text-[#051e3f] group-hover:text-emerald-700 transition-colors">
                        {phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* E-mail */}
                  <a
                    href={`mailto:${emailDisplay}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#051e3f] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#051e3f] shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-bold text-slate-500">
                        E-mail Comercial
                      </span>
                      <span className="text-base font-bold text-[#051e3f] group-hover:text-[#ce1528] transition-colors break-all">
                        {emailDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Endereço */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#ce1528] shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-bold text-slate-500">
                        Endereço
                      </span>
                      <span className="text-sm font-medium text-slate-800 leading-snug">
                        {addressDisplay}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário Interativo com Abas */}
              <div className="lg:col-span-7">
                <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border-2 border-slate-200 shadow-md">
                  {/* Seletor de Perfil */}
                  <div className="mb-8">
                    <span className="block text-xs uppercase font-bold text-slate-500 mb-2">
                      Selecione o seu objetivo:
                    </span>
                    <div className="grid grid-cols-2 gap-2 p-1.5 rounded-xl bg-slate-200/80">
                      <button
                        type="button"
                        onClick={() => setFormType("cliente")}
                        className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all text-center ${
                          formType === "cliente"
                            ? "bg-[#051e3f] text-white shadow-xs"
                            : "text-slate-700 hover:text-[#051e3f]"
                        }`}
                      >
                        Sou uma Empresa (Busco Soluções)
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormType("fornecedor")}
                        className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all text-center ${
                          formType === "fornecedor"
                            ? "bg-[#051e3f] text-white shadow-xs"
                            : "text-slate-700 hover:text-[#051e3f]"
                        }`}
                      >
                        Sou Fabricante / Parceiro
                      </button>
                    </div>
                  </div>

                  {formSubmitted ? (
                    <div className="p-8 text-center space-y-4 bg-white rounded-2xl border border-emerald-200">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold font-serif text-slate-900">
                        Mensagem Estruturada com Sucesso!
                      </h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Para agilizar seu atendimento de forma imediata, você
                        pode enviar estes dados diretamente para o WhatsApp do
                        nosso time comercial.
                      </p>
                      <button
                        type="button"
                        onClick={handleSendToWhatsApp}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors gap-2 text-sm shadow-sm"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Abrir Conversa no WhatsApp</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitForm} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Seu Nome *
                          </label>
                          <input
                            type="text"
                            name="nome"
                            required
                            value={formData.nome}
                            onChange={handleInputChange}
                            placeholder="Ex: Carlos Silva"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#051e3f]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Nome da Empresa / Condomínio *
                          </label>
                          <input
                            type="text"
                            name="empresa"
                            required
                            value={formData.empresa}
                            onChange={handleInputChange}
                            placeholder="Ex: Construtora ou Condomínio"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#051e3f]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Telefone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            name="telefone"
                            required
                            value={formData.telefone}
                            onChange={handleInputChange}
                            placeholder="(22) 99999-9999"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#051e3f]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            E-mail Corporativo *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="seuemail@empresa.com.br"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#051e3f]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {formType === "cliente"
                            ? "Serviço ou Produto de Interesse"
                            : "Categoria de Produtos ou Linha Fabricada"}
                        </label>
                        <select
                          name="segmentoOuCategoria"
                          value={formData.segmentoOuCategoria}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#051e3f]"
                        >
                          <option value="">Selecione uma opção...</option>
                          {formType === "cliente" ? (
                            <>
                              <option value="Venda e Distribuição">Venda e Distribuição de Materiais</option>
                              <option value="Representação Comercial">Representação Comercial</option>
                              <option value="SPDA">SPDA (Proteção contra Descargas Atmosféricas)</option>
                              <option value="Manutenção Predial">Manutenção Predial & Instalações</option>
                              <option value="Jardinagem">Jardinagem & Conservação de Áreas Verdes</option>
                              <option value="Soluções sob Demanda">Soluções Comerciais sob Demanda</option>
                            </>
                          ) : (
                            <>
                              <option value="Mobiliário e Cadeiras Corporativas">Mobiliário e Cadeiras Corporativas</option>
                              <option value="Tecnologia e Eletrônicos">Tecnologia e Eletrônicos</option>
                              <option value="Equipamentos Fitness / Profissionais">Equipamentos Fitness / Profissionais</option>
                              <option value="Materiais de Engenharia e Elétrica">Materiais de Engenharia e Elétrica</option>
                              <option value="Insumos e Suprimentos Industriais">Insumos e Suprimentos Industriais</option>
                              <option value="Outro segmento de fabricação">Outro segmento de fabricação</option>
                            </>
                          )}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Descreva sua Demanda ou Proposta
                        </label>
                        <textarea
                          name="mensagem"
                          rows={3}
                          value={formData.mensagem}
                          onChange={handleInputChange}
                          placeholder={
                            formType === "cliente"
                              ? "Conte detalhes sobre as especificações, localidade, prazos ou volumes necessários..."
                              : "Conte sobre sua marca, catálogo de produtos e interesse de expansão com a Lyon..."
                          }
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#051e3f]"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          type="submit"
                          className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl font-bold bg-[#051e3f] text-white hover:bg-[#0d2a52] transition-colors shadow-sm text-sm"
                        >
                          Enviar Mensagem
                        </button>

                        <button
                          type="button"
                          onClick={handleSendToWhatsApp}
                          className="w-full sm:w-auto inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-sm gap-2 shadow-sm"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Falar no WhatsApp</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER OFICIAL ── */}
      <footer className="bg-[#051e3f] text-slate-400 py-14 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
            {/* Marca e Slogan */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 p-1 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/logo.svg"
                    alt="Logo Lyon"
                    width={32}
                    height={37}
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold font-serif text-white tracking-wide">
                    LYON
                  </span>
                  <span className="block text-[10px] uppercase font-semibold text-slate-400">
                    Soluções Comerciais
                  </span>
                </div>
              </div>
              <p className="text-slate-300 max-w-sm leading-relaxed text-xs">
                Conectando empresas, fornecedores e oportunidades. Venda,
                distribuição e representação de produtos, além de serviços
                especializados em manutenção predial, SPDA e jardinagem.
              </p>
              <p className="text-slate-400 text-xs">
                {addressDisplay}
              </p>
            </div>

            {/* Links rápidos: Soluções */}
            <div className="md:col-span-4 space-y-3">
              <span className="block text-xs font-bold uppercase tracking-wider text-white">
                Soluções e Serviços
              </span>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#solucoes" className="hover:text-white transition-colors">
                    Venda e Distribuição Corporativa
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-white transition-colors">
                    Representação Comercial
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-white transition-colors">
                    SPDA (Proteção contra Descargas)
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-white transition-colors">
                    Manutenção Predial & Instalações
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-white transition-colors">
                    Jardinagem & Áreas Verdes
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-white transition-colors">
                    Soluções sob Demanda
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato direto */}
            <div className="md:col-span-3 space-y-3">
              <span className="block text-xs font-bold uppercase tracking-wider text-white">
                Contato Comercial
              </span>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${emailDisplay}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="break-all">{emailDisplay}</span>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#contato"
                    className="inline-block py-2 px-4 rounded-lg bg-[#ce1528] text-white font-bold text-xs hover:bg-[#b01222] transition-colors"
                  >
                    Solicitar Atendimento
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
            <p>
              © {new Date().getFullYear()} Lyon Soluções Comerciais. Todos os direitos reservados.
            </p>
            <p>
              Campos dos Goytacazes - RJ • Atendimento Regional e Nacional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
