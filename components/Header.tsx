"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/urun-detayi", label: "Ürün Detayı" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.webp"
                alt="Sandal Ağacı Oda Kokusu Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#2C1810] font-bold text-xl tracking-tight">
                Sandal Ağacı
              </div>
              <div className="text-[#8B6F47] text-xs tracking-wider">
                Oda Kokusu
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[#2C1810] hover:text-[#8B6F47] transition-colors duration-200 font-medium text-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B6F47] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+905451814040"
              className="flex items-center space-x-2 text-[#8B6F47] hover:text-[#6B4423] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0545 181 40 40</span>
            </a>
            <Link
              href="https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Sipariş Ver
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2C1810] hover:text-[#8B6F47] transition-colors"
            aria-label="Menü"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E8D5B7]"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[#2C1810] hover:bg-[#FFF8F0] hover:text-[#8B6F47] rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-[#E8D5B7]">
                <a
                  href="tel:+905451814040"
                  className="flex items-center justify-center space-x-2 px-4 py-3 text-[#8B6F47] hover:bg-[#FFF8F0] rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">0545 181 40 40</span>
                </a>
                <Link
                  href="https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg transition-all"
                >
                  Sipariş Ver
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
