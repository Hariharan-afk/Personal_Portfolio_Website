import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Hariharan Chandrasekar | AI Engineer & ML Specialist",
  description: "Portfolio of Hariharan Chandrasekar - AI Engineer specializing in Agentic AI, RAG, and MLOps",
  keywords: ["AI Engineer", "Machine Learning", "Agentic AI", "RAG", "MLOps", "Computer Vision"],
  authors: [{ name: "Hariharan Chandrasekar" }],
  openGraph: {
    title: "Hariharan Chandrasekar | AI Engineer",
    description: "Portfolio showcasing AI/ML projects and expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-text`}
      >
        {children}
      </body>
    </html>
  );
}

