import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export default function Footer() {
  const socialLinks = [
    { icon: FacebookIcon, href: "https://www.facebook.com/KARAKARHOME/", label: "Facebook" },
    { icon: InstagramIcon, href: "https://www.instagram.com/karakarhome", label: "Instagram" },
    { icon: TwitterIcon, href: "https://x.com/karakarhome", label: "Twitter" },
    { icon: YoutubeIcon, href: "https://www.youtube.com/@KARAKARHOME", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2C1810] to-[#1a0f08] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.webp"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg">Sandal Ağacı</div>
                <div className="text-[#D4A574] text-xs">Oda Kokusu</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Doğal sandal ağacı esansıyla hazırlanan premium çubuklu oda kokusu. Yaşam alanlarınıza huzur ve ferahlık katın.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#8B6F47]/20 hover:bg-[#8B6F47] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4A574]">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/urun-detayi" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors">
                  Ürün Detayı
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.karakarhome.com.tr/oda-kokulari/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors"
                >
                  Oda Kokusu Koleksiyonu
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4A574]">İletişim Bilgileri</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Esenyalı Mah. Edebali Cad. No:13/A<br />
                  34903 Pendik / İstanbul
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                <a href="tel:+905451814040" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors">
                  +90 545 181 40 40
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                <a href="mailto:info@beyazsabunodakokusu.com.tr" className="text-sm text-gray-300 hover:text-[#D4A574] transition-colors">
                  info@beyazsabunodakokusu.com.tr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4A574]">Destek</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/905451814040?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-center"
              >
                WhatsApp İletişim
              </a>
              <a
                href="https://tawk.to/karakar"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#8B6F47] hover:bg-[#6B4423] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-center"
              >
                Canlı Destek
              </a>
              <a
                href="https://tr.pinterest.com/karakarhome/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#E60023] hover:bg-[#C5001A] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-center"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8B6F47]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} <strong className="text-[#D4A574]">KARAKAR HOME</strong>. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Pendik, İstanbul</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">Türkiye</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
