import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Дмитрий Глумов - Fullstack Developer",
  description: "Портфолио Дмитрия Глумова - Fullstack разработчика с опытом в Next.js, React, Python и интеграции ИИ-агентов. Создаю современные веб-приложения с инновационными решениями.",
  keywords: ["разработчик", "fullstack", "next.js", "react", "python", "портфолио", "веб-разработка", "typescript", "tailwind"],
  authors: [{ name: "Дмитрий Глумов" }],
  creator: "Дмитрий Глумов",
  publisher: "Дмитрий Глумов",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Дмитрий Глумов - Fullstack Developer",
    description: "Портфолио Fullstack разработчика с опытом в Next.js, React, Python и интеграции ИИ",
    type: "website",
    locale: "ru_RU",
    siteName: "Портфолио Дмитрия Глумова",
  },
  twitter: {
    card: "summary_large_image",
    title: "Дмитрий Глумов - Fullstack Developer",
    description: "Портфолио Fullstack разработчика с опытом в Next.js, React, Python и интеграции ИИ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
        style={{ scrollBehavior: 'smooth' }}
      >
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
