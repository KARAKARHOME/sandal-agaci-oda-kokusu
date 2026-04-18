"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export default function Iletisim() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBF5] to-[#FFF8F0] pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6">
              İletişime Geçin
            </h1>
            <p className="text-xl text-[#6B4423] max-w-3xl mx-auto">
              <strong>KARAKAR HOME</strong> ekibi, sorularınızı <em>yanıtlamak</em> için hazır.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-bold text-[#2C1810] mb-8">İletişim Bilgileri</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-[#FFF8F0] rounded-xl hover:shadow-lg transition-all">
                    <MapPin className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2C1810] mb-2">Adres</h3>
                      <p className="text-[#6B4423]">
                        Esenyalı Mah. Edebali Cad. No:13/A<br />
                        <strong>34903 Pendik / İstanbul</strong>
                      </p>
                      <a
                        href="https://maps.google.com/?q=Esenyalı+Mah.+Edebali+Cad.+No:13/A+34903+Pendik+İstanbul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#8B6F47] hover:underline mt-2 inline-block"
                      >
                        Haritada Göster →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-[#FFF8F0] rounded-xl hover:shadow-lg transition-all">
                    <Phone className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2C1810] mb-2">Telefon</h3>
                      <a
                        href="tel:+905451814040"
                        className="text-[#6B4423] hover:text-[#8B6F47] transition-colors"
                      >
                        <strong>+90 545 181 40 40</strong>
                      </a>
                      <p className="text-sm text-[#6B4423] mt-1">
                        <em>Hafta içi</em> 09:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-[#FFF8F0] rounded-xl hover:shadow-lg transition-all">
                    <Mail className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2C1810] mb-2">E-Posta</h3>
                      <a
                        href="mailto:info@beyazsabunodakokusu.com.tr"
                        className="text-[#6B4423] hover:text-[#8B6F47] transition-colors break-all"
                      >
                        <strong>info@beyazsabunodakokusu.com.tr</strong>
                      </a>
                      <p className="text-sm text-[#6B4423] mt-1">
                        <u>24 saat</u> içinde yanıt veriyoruz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-[#FFF8F0] rounded-xl hover:shadow-lg transition-all">
                    <Clock className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2C1810] mb-2">Çalışma Saatleri</h3>
                      <div className="text-[#6B4423] space-y-1">
                        <p><strong>Pazartesi - Cuma:</strong> 09:00 - 18:00</p>
                        <p><strong>Cumartesi:</strong> 10:00 - 16:00</p>
                        <p><strong>Pazar:</strong> <em>Kapalı</em></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8B6F47] to-[#D4A574] p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Hızlı İletişim</h3>
                <p className="mb-6 opacity-90">
                  Anında <strong>destek</strong> almak için aşağıdaki kanalları kullanın.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/905451814040?text=Merhaba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp ile İletişim</span>
                  </a>
                  <a
                    href="https://tawk.to/karakar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    <span>Canlı Destek</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl h-full">
                <h2 className="text-3xl font-bold text-[#2C1810] mb-6">Konum</h2>
                
                <div className="aspect-video bg-[#E8D5B7] rounded-2xl mb-6 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8234567890123!2d29.2345678!3d40.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUyJzM1LjYiTiAyOcKwMTQnMDQuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KARAKAR HOME Konum"
                  ></iframe>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#FFF8F0] p-4 rounded-xl">
                    <h4 className="font-bold text-[#2C1810] mb-2">Ulaşım</h4>
                    <ul className="text-sm text-[#6B4423] space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Metro:</strong> Pendik metro istasyonuna <u>5 dakika</u> yürüme mesafesi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Otobüs:</strong> <em>E-10, KM-22</em> hatları yakınından geçer</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Araç:</strong> Ücretsiz <u>otopark</u> imkanı mevcut</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#FFF8F0] p-4 rounded-xl">
                    <h4 className="font-bold text-[#2C1810] mb-2">Yakın Noktalar</h4>
                    <ul className="text-sm text-[#6B4423] space-y-1">
                      <li>• <strong>Pendik Marina:</strong> 2 km</li>
                      <li>• <strong>Sabiha Gökçen Havalimanı:</strong> 15 km</li>
                      <li>• <strong>E-5 Karayolu:</strong> 3 km</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl mb-20"
          >
            <h2 className="text-3xl font-bold text-[#2C1810] mb-8 text-center">
              Sosyal Medya
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://www.facebook.com/KARAKARHOME/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#FFF8F0] to-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">Facebook</h3>
                <p className="text-sm text-[#6B4423] text-center">
                  Güncel <strong>kampanyalar</strong> ve <em>duyurular</em>
                </p>
              </a>

              <a
                href="https://www.instagram.com/karakarhome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#FFF8F0] to-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">Instagram</h3>
                <p className="text-sm text-[#6B4423] text-center">
                  <u>Görsel</u> içerikler ve <strong>hikayeler</strong>
                </p>
              </a>

              <a
                href="https://x.com/karakarhome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#FFF8F0] to-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">X (Twitter)</h3>
                <p className="text-sm text-[#6B4423] text-center">
                  <em>Anlık</em> güncellemeler ve <strong>haberler</strong>
                </p>
              </a>

              <a
                href="https://www.youtube.com/@KARAKARHOME"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#FFF8F0] to-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">YouTube</h3>
                <p className="text-sm text-[#6B4423] text-center">
                  <strong>Video</strong> içerikler ve <u>kullanım</u> rehberleri
                </p>
              </a>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://tr.pinterest.com/karakarhome/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#E60023] hover:bg-[#C5001A] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
                <span>Pinterest'te Takip Edin</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#8B6F47] to-[#D4A574] p-12 rounded-3xl text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sorularınız mı Var?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              <Link href="/" className="underline hover:text-[#FFF8F0] transition-colors">
                Ana sayfamızda
              </Link> ürün hakkında detaylı bilgi, 
              <Link href="/urun-detayi" className="underline hover:text-[#FFF8F0] transition-colors mx-1">
                ürün detay
              </Link> sayfasında teknik özellikler ve 
              <Link href="/hakkimizda" className="underline hover:text-[#FFF8F0] transition-colors ml-1">
                hakkımızda
              </Link> sayfasında markamız hakkında bilgi bulabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C1810] px-8 py-4 rounded-full font-bold hover:bg-[#FFF8F0] transition-all duration-300"
              >
                Hemen Sipariş Ver
              </Link>
              <a
                href="tel:+905451814040"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#2C1810] transition-all duration-300"
              >
                Bizi Arayın
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
