import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lyon - Soluções Comerciais | Oportunidades Petronect e Petrobras",
  description:
    "Integradora comercial sediada em Campos dos Goytacazes - RJ. Conectamos indústrias e fornecedores a grandes processos de compras e editais corporativos no Petronect e setor de Óleo & Gás.",
  keywords: [
    "Lyon Soluções Comerciais",
    "Petronect",
    "Petrobras",
    "Bacia de Campos",
    "Campos dos Goytacazes",
    "Macaé",
    "Fornecedores Petrobras",
    "Integradora Comercial",
    "Rogério Parente",
  ],
  authors: [{ name: "Lyon Soluções Comerciais" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Lyon - Soluções Comerciais | Oportunidades Petronect e Petrobras",
    description:
      "Integradora comercial sediada em Campos dos Goytacazes - RJ, conectando fabricantes e fornecedores a oportunidades no Petronect e grandes operadoras.",
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
