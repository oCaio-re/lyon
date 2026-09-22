import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lyon Soluções Comerciais | Conectando Empresas, Fornecedores e Oportunidades",
  description:
    "Soluções comerciais e serviços especializados com agilidade e confiabilidade. Venda e distribuição, representação comercial, manutenção predial, SPDA e jardinagem para empresas, condomínios e indústria. Sede em Campos dos Goytacazes - RJ.",
  keywords: [
    "Lyon Soluções Comerciais",
    "Venda e Distribuição Corporativa",
    "Representação Comercial",
    "SPDA",
    "Manutenção Predial",
    "Jardinagem Corporativa",
    "Soluções sob Demanda",
    "Campos dos Goytacazes",
    "Petrobras",
    "Transpetro",
    "Facilities",
  ],
  authors: [{ name: "Lyon Soluções Comerciais" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Lyon Soluções Comerciais | Conectando Empresas, Fornecedores e Oportunidades",
    description:
      "Atuamos na venda, distribuição e representação de produtos, além da prestação de serviços especializados para empresas que buscam confiabilidade, atendimento próximo e capacidade de execução.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
