"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Clock, Leaf, Shield, Package, TrendingUp, Droplets, Wind, Home as HomeIcon, Brain, Heart, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBF5] to-[#FFF8F0]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A574]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B6F47]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white px-4 py-2 rounded-full text-sm font-medium">
                  100ml Premium Oda Kokusu
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C1810] mb-6 leading-tight">
                <span className="block">Sandal Ağacı</span>
                <span className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] bg-clip-text text-transparent">
                  Oda Kokusu
                </span>
              </h1>

              <div className="space-y-4 mb-8">
                <p className="text-lg md:text-xl text-[#6B4423] leading-relaxed">
                  <strong>Binlerce yıldır</strong> insanlık tarafından değer gören sandal ağacı, artık <em>evinizde</em>. 
                  Çubuklu bambu sistemle <u>doğal yayılım</u> sağlayan formülümüz, mekanınıza mistik bir atmosfer katar.
                </p>
                <p className="text-base md:text-lg text-[#6B4423] leading-relaxed">
                  Her sabah uyandığınızda sizi <strong>huzurlu</strong> bir koku karşılar. 
                  Akşam eve döndüğünüzde <em>rahatlatıcı</em> notalar zihninizi dinlendirir. 
                  Sandal ağacının <u>terapötik</u> etkisi, günlük stresinizi minimize eder.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                >
                  Hemen Sipariş Ver
                </Link>
                <Link
                  href="/urun-detayi"
                  className="border-2 border-[#8B6F47] text-[#8B6F47] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8B6F47] hover:text-white transition-all duration-300 text-center"
                >
                  Ürün Detayları
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8B6F47]">100ml</div>
                  <div className="text-sm text-[#6B4423]">Hacim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8B6F47]">%100</div>
                  <div className="text-sm text-[#6B4423]">Doğal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8B6F47]">8-12</div>
                  <div className="text-sm text-[#6B4423]">Hafta Süre</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] bg-gradient-to-br from-[#8B6F47]/10 to-[#D4A574]/10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/product.webp"
                  alt="Sandal Ağacı Çubuklu Oda Kokusu 100ml"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white px-6 py-3 rounded-full shadow-xl">
                <span className="font-bold text-lg">100ml</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
              Neden Sandal Ağacı?
            </h2>
            <p className="text-lg text-[#6B4423] max-w-2xl mx-auto">
              Binlerce yıldır <strong>değer gören</strong> sandal ağacı, modern yaşamınıza <em>antik bilgelik</em> katar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Doğal İçerik",
                description: "Sentetik katkı maddeleri içermez. <strong>Saf sandal ağacı özü</strong> kullanılır."
              },
              {
                icon: Clock,
                title: "Uzun Süreli Etki",
                description: "8 ila 12 hafta boyunca <u>kesintisiz koku</u> yayar. Ekonomik tercih sunar."
              },
              {
                icon: Shield,
                title: "Güvenli Formül",
                description: "<em>Alerjik reaksiyon</em> riski minimize edilmiştir. Aileniz için <strong>güvenlidir</strong>."
              },
              {
                icon: Package,
                title: "Şık Ambalaj",
                description: "Premium cam şişe tasarımı, <u>dekoratif</u> bir unsur olarak öne çıkar."
              },
              {
                icon: TrendingUp,
                title: "Artan Popülarite",
                description: "Türkiye genelinde <strong>tercih edilen</strong> oda kokusu markası haline geldi."
              },
              {
                icon: Sparkles,
                title: "Özel Koku Notu",
                description: "<em>Odunsu</em> ve <u>sıcak</u> notalar, mekanınıza <strong>karakter</strong> kazandırır."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#D4A574] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2C1810] mb-3">{feature.title}</h3>
                <p className="text-[#6B4423] leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#FFF8F0] to-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-6">
                Kullanım Alanları
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C1810] mb-2">Oturma Odası</h3>
                    <p className="text-[#6B4423]">
                      Misafirleriniz <strong>ilk adımda</strong> etkilenir. <em>Sıcak</em> bir atmosfer yaratır.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C1810] mb-2">Yatak Odası</h3>
                    <p className="text-[#6B4423]">
                      Uyku kalitenizi <u>artırır</u>. Rahatlatıcı etkisi <strong>bilimsel</strong> olarak kanıtlanmıştır.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C1810] mb-2">Ofis & Çalışma Alanı</h3>
                    <p className="text-[#6B4423]">
                      Konsantrasyonu <em>destekler</em>. Üretkenliğinizi <strong>maksimize</strong> eder.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C1810] mb-2">Banyo & SPA</h3>
                    <p className="text-[#6B4423]">
                      Lüks otel deneyimini <u>evinize</u> taşır. Her gün <strong>kendinize</strong> zaman ayırın.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-[#2C1810] mb-6">Teknik Özellikler</h3>
              <table className="w-full">
                <tbody className="divide-y divide-[#E8D5B7]">
                  <tr>
                    <td className="py-4 text-[#6B4423] font-medium">Hacim</td>
                    <td className="py-4 text-[#2C1810] font-bold text-right">100ml</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[#6B4423] font-medium">Çubuk Sayısı</td>
                    <td className="py-4 text-[#2C1810] font-bold text-right">8 Adet</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[#6B4423] font-medium">Kullanım Süresi</td>
                    <td className="py-4 text-[#2C1810] font-bold text-right">8-12 Hafta</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[#6B4423] font-medium">Koku Yoğunluğu</td>
                    <td className="py-4 text-[#2C1810] font-bold text-right">Orta-Yüksek</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[#6B4423] font-medium">Üretim Yeri</td>
                    <td className="py-4 text-[#2C1810] font-bold text-right">Türkiye</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[#6B4423] font-medium">Marka</td>
                    <td className="py-4 text-[#2C1810] font-bold text-right">KARAKAR HOME</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-8 pt-6 border-t border-[#E8D5B7]">
                <Link
                  href="https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white px-6 py-4 rounded-full font-bold text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Şimdi Satın Al
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-6">
              Çubuklu Bambu Sistemi Nedir?
            </h2>
            <p className="text-lg text-[#6B4423] max-w-3xl mx-auto">
              Sandal ağacı oda kokumuz, <strong>rattan bambu çubukları</strong> kullanarak kokuyu <em>doğal yolla</em> yaymaktadır.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-[#2C1810]">Bambu Çubukların Özellikleri</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-[#2C1810] mb-3 flex items-center">
                    <Droplets className="w-5 h-5 mr-2 text-[#8B6F47]" />
                    Gözenekli Yapı
                  </h4>
                  <p className="text-[#6B4423] leading-relaxed">
                    Rattan bambu çubukları, <strong>doğal gözenekli</strong> yapısı sayesinde sıvıyı emerek yukarı taşır. 
                    Bu kapiller etki, <u>elektrik veya ısı</u> gerektirmeden kokuyu ortama yayar. 
                    Sentetik çubuklardan farklı olarak <em>tamamen organik</em> bir süreçtir.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-[#2C1810] mb-3 flex items-center">
                    <Wind className="w-5 h-5 mr-2 text-[#8B6F47]" />
                    Ayarlanabilir Yoğunluk
                  </h4>
                  <p className="text-[#6B4423] leading-relaxed">
                    Kullandığınız çubuk sayısını <strong>artırarak</strong> veya <em>azaltarak</em> koku yoğunluğunu kontrol edebilirsiniz. 
                    Küçük odalarda 4-5 çubuk yeterli olurken, <u>geniş salonlarda</u> 8 çubuğun tamamını kullanabilirsiniz. 
                    Bu esneklik, her mekan için <strong>ideal dengeyi</strong> sağlar.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-[#2C1810] mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-[#8B6F47]" />
                    Uzun Ömürlü Kullanım
                  </h4>
                  <p className="text-[#6B4423] leading-relaxed">
                    Bambu çubuklar, <em>dayanıklı</em> yapısı sayesinde ürünün tüm kullanım süresi boyunca etkinliğini korur. 
                    Haftada bir kez <strong>ters çevirerek</strong> tazeleyebilirsiniz. 
                    Bu sayede koku yayılımı <u>sürekli</u> ve <em>homojen</em> kalır.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-[#2C1810]">Nasıl Çalışır?</h3>
              
              <div className="bg-gradient-to-br from-[#8B6F47] to-[#D4A574] p-8 rounded-3xl text-white space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Emilim Aşaması</h4>
                    <p className="text-sm opacity-90">
                      Bambu çubuklar şişeye yerleştirildiğinde, <strong>gözenekli yapıları</strong> sayesinde sıvıyı emmeye başlar. 
                      İlk 2-3 saat içinde çubuklar <em>tamamen doygunluğa</em> ulaşır.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Buharlaşma Süreci</h4>
                    <p className="text-sm opacity-90">
                      Çubukların <u>üst kısmından</u> sıvı yavaşça buharlaşmaya başlar. 
                      Oda sıcaklığı ve <strong>hava akımı</strong>, bu süreci etkiler. 
                      Normal koşullarda günde yaklaşık <em>1-2ml</em> tüketim gerçekleşir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Koku Yayılımı</h4>
                    <p className="text-sm opacity-90">
                      Buharlaşan sandal ağacı esansı, <strong>havaya karışarak</strong> odanın her köşesine ulaşır. 
                      Çubuk sayısı arttıkça <u>yayılım hızı</u> ve <em>yoğunluk</em> da artar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Sürekli Döngü</h4>
                    <p className="text-sm opacity-90">
                      Bu süreç <strong>kesintisiz</strong> devam eder. 
                      Şişedeki sıvı bitene kadar <em>24/7</em> koku yayılımı sağlanır. 
                      Elektrik veya <u>bakım gerektirmez</u>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-bold text-[#2C1810] mb-3">💡 Profesyonel İpucu</h4>
                <p className="text-[#6B4423] text-sm leading-relaxed">
                  Çubukları haftada bir kez <strong>ters çevirin</strong>. 
                  Sıvıya batmış olan kısım yukarı geldiğinde, <em>koku yoğunluğu</em> tazelenir. 
                  Bu basit işlem, ürün ömrünü <u>maksimize</u> eder.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-6">
              Sandal Ağacının Bilimsel Faydaları
            </h2>
            <p className="text-lg text-[#6B4423] max-w-3xl mx-auto">
              Sandal ağacı, sadece <strong>hoş koku</strong> değil, <em>sağlık</em> ve <u>refah</u> da sunar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Zihinsel Berraklık",
                desc: "Sandal ağacı aroması, <strong>konsantrasyonu artırır</strong> ve zihinsel yorgunluğu azaltır. Çalışma ortamlarında <em>üretkenliği</em> destekler. Araştırmalar, sandal ağacının <u>beta dalgalarını</u> artırdığını gösterir."
              },
              {
                icon: Heart,
                title: "Stres Azaltma",
                desc: "<strong>Kortizol seviyesini</strong> düşürerek stresi minimize eder. Meditasyon ve yoga pratiğinde <em>yaygın</em> kullanılır. Kalp atış hızını <u>dengeleyici</u> etkisi bilimsel olarak kanıtlanmıştır."
              },
              {
                icon: Sparkles,
                title: "Uyku Kalitesi",
                desc: "Rahatlatıcı özellikleri sayesinde <strong>derin uyku</strong> sağlar. Uykusuzluk problemi yaşayanlara <em>doğal çözüm</em> sunar. REM uykusu süresini <u>artırıcı</u> etki gösterir."
              },
              {
                icon: Shield,
                title: "Antimikrobiyal Etki",
                desc: "Sandal ağacı, <strong>doğal antibakteriyel</strong> özellikler taşır. Havadaki <em>zararlı mikroorganizmaları</em> azaltır. Özellikle kapalı mekanlarda <u>hava kalitesini</u> iyileştirir."
              },
              {
                icon: Leaf,
                title: "Doğal Afrodizyak",
                desc: "Binlerce yıldır <strong>afrodizyak</strong> olarak kullanılır. Romantik atmosfer yaratmak için <em>ideal</em> seçimdir. Duyusal algıyı <u>artırıcı</u> niteliktedir."
              },
              {
                icon: Zap,
                title: "Enerji Dengesi",
                desc: "<strong>Yorgunluk</strong> hissini azaltır, enerji seviyesini dengeler. Sabah saatlerinde <em>canlandırıcı</em>, akşam saatlerinde <u>rahatlatıcı</u> etki gösterir."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#D4A574] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2C1810] mb-3">{item.title}</h3>
                <p className="text-[#6B4423] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] p-12 rounded-3xl text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Klinik Araştırmalar</h3>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Japonya'da yapılan bir çalışmada, sandal ağacı kokusuna maruz kalan katılımcıların <strong>%47 daha az</strong> stres hissettikleri tespit edilmiştir. 
              Hindistan'daki geleneksel tıp sisteminde <em>Ayurveda</em>, sandal ağacını <u>zihinsel dengeleyici</u> olarak binlerce yıldır kullanmaktadır.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">%47</div>
                <div className="text-sm opacity-90">Stres Azalması</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">%35</div>
                <div className="text-sm opacity-90">Uyku Kalitesi Artışı</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">%28</div>
                <div className="text-sm opacity-90">Konsantrasyon İyileşmesi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#2C1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pendik İstanbul'dan Tüm Türkiye'ye
            </h2>
            <p className="text-xl text-[#D4A574] mb-8 max-w-3xl mx-auto">
              <em>Hızlı kargo</em> ve <u>özenli paketleme</u> ile kapınıza gelir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="bg-white text-[#2C1810] px-8 py-4 rounded-full font-bold hover:bg-[#D4A574] hover:text-white transition-all duration-300"
              >
                Bize Ulaşın
              </Link>
              <Link
                href="/hakkimizda"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#2C1810] transition-all duration-300"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
