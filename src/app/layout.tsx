import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./tailwind-vars.css";
import "./tailwind-utilities.css";
import "./component-styles.css";
import "./globals.css";
import GradientBackground from "@/components/designs/gradients/gradientBackground/GradientBackground";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ani Potts - Portfolio",
  description:
    "Personal portfolio website showcasing Ani Potts' work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full min-h-screen bg-black main-container">
          {/* Navbar is always visible */}
          <Navbar />

          {/* Gradient background with animation */}
          <div className="fixed inset-0">
            <GradientBackground />
          </div>

          {/* The children renders the page-specific content */}
          <div className="relative z-10">{children}</div>

          {/* Footer is always visible */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
