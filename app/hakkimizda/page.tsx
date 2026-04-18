"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Target, Users, Zap } from "lucide-react";
import type { Metadata } from "next";

export default function Hakkimizda() {
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
              Hikayemiz
            </h1>
            <p className="text-xl text-[#6B4423] max-w-3xl mx-auto">
              <strong>KARAKAR HOME</strong>, yaşam alanlarınıza <em>değer</em> katan ürünler sunma misyonuyla yola çıktı.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#2C1810] mb-6">
                Sandal Ağacı ile Tanışma
              </h2>
              <p className="text-[#6B4423] mb-4 leading-relaxed">
                Sandal ağacı, <strong>binlerce yıldır</strong> insanlık tarihinde özel bir yere sahiptir. 
                Hint kültüründen Uzak Doğu meditasyon geleneklerine kadar <u>geniş bir coğrafyada</u> kullanılmıştır.
              </p>
              <p className="text-[#6B4423] mb-4 leading-relaxed">
                Biz de bu <em>kadim bilgeliği</em> modern yaşama taşıma kararı aldık. 
                Pendik İstanbul'daki atölyemizde, <strong>özenle seçilmiş</strong> sandal ağacı esanslarını işliyoruz.
              </p>
              <p className="text-[#6B4423] leading-relaxed">
                Her şişe, <u>kalite kontrol</u> süreçlerinden geçer. 
                Müşterilerimize <strong>en iyi deneyimi</strong> sunmak için titizlikle çalışırız.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-[#2C1810] mb-6">Değerlerimiz</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <strong className="text-[#2C1810]">Doğallık:</strong>
                    <span className="text-[#6B4423]"> Sentetik katkılardan uzak, <em>saf</em> formüller.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <strong className="text-[#2C1810]">Kalite:</strong>
                    <span className="text-[#6B4423]"> Her üretim aşamasında <u>sıkı denetim</u> uygularız.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <strong className="text-[#2C1810]">Müşteri Memnuniyeti:</strong>
                    <span className="text-[#6B4423]"> Geri bildirimleriniz, <strong>gelişimimizin</strong> temelidir.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <strong className="text-[#2C1810]">Sürdürülebilirlik:</strong>
                    <span className="text-[#6B4423]"> Çevreye <em>saygılı</em> üretim anlayışını benimseriz.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Misyonumuz",
                description: "Türkiye'nin dört bir yanındaki evlere <strong>premium koku deneyimi</strong> sunmak. Her müşterimizin yaşam kalitesini <u>artırmak</u> için çalışıyoruz."
              },
              {
                icon: Sparkles,
                title: "Vizyonumuz",
                description: "Oda kokusu kategorisinde <em>lider marka</em> olmak. Yenilikçi ürünlerle <strong>sektöre yön</strong> vermek istiyoruz."
              },
              {
                icon: Heart,
                title: "Tutkumuz",
                description: "Koku, <u>duyguları</u> tetikler. Biz de bu gücü kullanarak insanların <strong>mutlu anılar</strong> biriktirmesine yardımcı oluyoruz."
              },
              {
                icon: Award,
                title: "Kalite Standartları",
                description: "<strong>ISO sertifikalı</strong> tesislerde üretim yapıyoruz. Her ürün, <em>laboratuvar testlerinden</em> geçer."
              },
              {
                icon: Users,
                title: "Ekibimiz",
                description: "Alanında <u>uzman</u> parfümerler ve kimyagerlerle çalışıyoruz. <strong>Deneyim</strong> ve <em>tutku</em> bir arada."
              },
              {
                icon: Zap,
                title: "Hızlı Teslimat",
                description: "Pendik merkezli <strong>lojistik ağımız</strong> sayesinde, siparişleriniz <u>24-48 saat</u> içinde yola çıkar."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B6F47] to-[#D4A574] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2C1810] mb-3">{item.title}</h3>
                <p className="text-[#6B4423] leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden KARAKAR HOME?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Sadece ürün satmıyoruz. <strong>Yaşam tarzı</strong> sunuyoruz. 
              Her müşterimiz, <em>ailemizin</em> bir parçasıdır.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">10.000+</div>
                <div className="text-sm opacity-90">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">%98</div>
                <div className="text-sm opacity-90">Memnuniyet Oranı</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5 Yıl</div>
                <div className="text-sm opacity-90">Sektör Deneyimi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#2C1810] mb-6">
                Üretim Sürecimiz
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#8B6F47] pl-6">
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2">1. Hammadde Seçimi</h3>
                  <p className="text-[#6B4423]">
                    <strong>Güvenilir tedarikçilerden</strong> sandal ağacı esansı temin ederiz. 
                    Her parti, <u>laboratuvar analizinden</u> geçer.
                  </p>
                </div>
                <div className="border-l-4 border-[#8B6F47] pl-6">
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2">2. Formülasyon</h3>
                  <p className="text-[#6B4423]">
                    Parfümerlerimiz, <em>ideal koku yoğunluğunu</em> belirler. 
                    Taşıyıcı sıvılarla <strong>mükemmel dengeyi</strong> yakalar.
                  </p>
                </div>
                <div className="border-l-4 border-[#8B6F47] pl-6">
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2">3. Şişeleme</h3>
                  <p className="text-[#6B4423]">
                    <u>Hijyenik ortamda</u>, premium cam şişelere doldurulur. 
                    Çubuklar, <strong>özel olarak</strong> kesilir.
                  </p>
                </div>
                <div className="border-l-4 border-[#8B6F47] pl-6">
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2">4. Kalite Kontrol</h3>
                  <p className="text-[#6B4423]">
                    Her ürün, <em>son kontrolden</em> geçer. 
                    Sadece <strong>standartları</strong> karşılayanlar sevk edilir.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-[#2C1810] mb-6">
                Sıkça Sorulan Sorular
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#2C1810] mb-2">Ürünleriniz doğal mı?</h4>
                  <p className="text-[#6B4423] text-sm">
                    Evet. <strong>%100 doğal</strong> sandal ağacı esansı kullanıyoruz. 
                    Sentetik parfüm içermez.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2C1810] mb-2">Kargo süresi ne kadar?</h4>
                  <p className="text-[#6B4423] text-sm">
                    Pendik'ten <u>tüm Türkiye'ye</u> 2-4 iş günü içinde ulaşır. 
                    <em>Hızlı kargo</em> seçeneği mevcuttur.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2C1810] mb-2">İade politikanız var mı?</h4>
                  <p className="text-[#6B4423] text-sm">
                    <strong>14 gün</strong> içinde iade hakkınız bulunur. 
                    Koşulsuz <u>müşteri memnuniyeti</u> önceliğimizdir.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#E8D5B7]">
                <Link
                  href="/iletisim"
                  className="block w-full bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white px-6 py-3 rounded-full font-bold text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Daha Fazla Soru İçin İletişime Geçin
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2C1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ürünlerimizi Keşfedin
            </h2>
            <p className="text-lg text-[#D4A574] mb-8 max-w-2xl mx-auto">
              <Link href="/" className="underline hover:text-white transition-colors">
                Ana sayfamızda
              </Link> <strong>sandal ağacı oda kokusunun</strong> tüm detaylarını bulabilirsiniz. 
              <Link href="/urun-detayi" className="underline hover:text-white transition-colors ml-1">
                Ürün detay sayfasında
              </Link> ise <em>teknik özellikler</em> ve <u>kullanım önerileri</u> yer alır.
            </p>
            <Link
              href="https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#2C1810] px-8 py-4 rounded-full font-bold hover:bg-[#D4A574] hover:text-white transition-all duration-300"
            >
              Hemen Sipariş Ver
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
