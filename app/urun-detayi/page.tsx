"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Droplet, Wind, Home, Flame, Leaf, Clock } from "lucide-react";

export default function UrunDetayi() {
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
              Sandal Ağacı Oda Kokusu
            </h1>
            <p className="text-xl text-[#6B4423] max-w-3xl mx-auto">
              <strong>100ml premium formül</strong> ile yaşam alanlarınıza <em>doğal ferahlık</em> katın.
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
                <h2 className="text-3xl font-bold text-[#2C1810] mb-6">Ürün Özellikleri</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Droplet className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2C1810] mb-2">Hacim & İçerik</h3>
                      <p className="text-[#6B4423]">
                        <strong>100ml</strong> cam şişe içerisinde sunulur. 
                        <u>Saf sandal ağacı esansı</u> ve taşıyıcı sıvı karışımı içerir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Wind className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2C1810] mb-2">Koku Yayılımı</h3>
                      <p className="text-[#6B4423]">
                        <em>8 adet rattan çubuk</em> sayesinde koku, <strong>15-20 m²</strong> alana etkili şekilde yayılır.
                        Çubuk sayısını artırarak <u>yoğunluğu</u> ayarlayabilirsiniz.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2C1810] mb-2">Kullanım Süresi</h3>
                      <p className="text-[#6B4423]">
                        Normal koşullarda <strong>8-12 hafta</strong> boyunca kesintisiz koku sağlar.
                        Oda sıcaklığı ve <em>havalandırma</em> durumuna göre değişkenlik gösterir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Leaf className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2C1810] mb-2">Doğal Formül</h3>
                      <p className="text-[#6B4423]">
                        <u>Sentetik parfüm</u> içermez. Alerjik reaksiyon riski <strong>minimize</strong> edilmiştir.
                        Çocuklu aileler için <em>güvenli</em> bir seçimdir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8B6F47] to-[#D4A574] p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Hemen Sipariş Verin</h3>
                <p className="mb-6 opacity-90">
                  <strong>KARAKAR HOME</strong> güvencesiyle, <em>hızlı kargo</em> ve özenli paketleme.
                </p>
                <Link
                  href="https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#2C1810] px-6 py-4 rounded-full font-bold text-center hover:bg-[#FFF8F0] transition-all duration-300"
                >
                  Satın Al
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-bold text-[#2C1810] mb-6">Teknik Bilgiler</h2>
                
                <table className="w-full mb-6">
                  <tbody className="divide-y divide-[#E8D5B7]">
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Ürün Kodu</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">SA-100ML</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Hacim</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">100ml</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Çubuk Sayısı</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">8 Adet</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Çubuk Malzemesi</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">Rattan</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Şişe Tipi</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">Premium Cam</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Koku Ailesi</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">Odunsu</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Yoğunluk</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">Orta-Yüksek</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Kullanım Süresi</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">8-12 Hafta</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Üretim</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">Türkiye</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#6B4423] font-medium">Marka</td>
                      <td className="py-3 text-[#2C1810] font-bold text-right">KARAKAR HOME</td>
                    </tr>
                  </tbody>
                </table>

                <div className="bg-[#FFF8F0] p-4 rounded-xl">
                  <h4 className="font-bold text-[#2C1810] mb-2 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-[#8B6F47]" />
                    Önemli Not
                  </h4>
                  <p className="text-sm text-[#6B4423]">
                    Ürünü <strong>doğrudan güneş ışığından</strong> uzak tutun.
                    <u>Çocukların</u> erişemeyeceği yerlerde saklayın.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-[#2C1810] mb-6">Koku Profili</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#6B4423] font-medium">Üst Notalar</span>
                      <span className="text-[#8B6F47] font-bold">%30</span>
                    </div>
                    <div className="w-full bg-[#E8D5B7] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <p className="text-sm text-[#6B4423] mt-2">
                      <em>Hafif baharatlı</em> ve <strong>ferah</strong> açılış.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#6B4423] font-medium">Kalp Notaları</span>
                      <span className="text-[#8B6F47] font-bold">%50</span>
                    </div>
                    <div className="w-full bg-[#E8D5B7] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <p className="text-sm text-[#6B4423] mt-2">
                      <u>Yoğun sandal ağacı</u> karakteri. <strong>Sıcak</strong> ve <em>sarıcı</em>.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#6B4423] font-medium">Dip Notalar</span>
                      <span className="text-[#8B6F47] font-bold">%20</span>
                    </div>
                    <div className="w-full bg-[#E8D5B7] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <p className="text-sm text-[#6B4423] mt-2">
                      <strong>Kalıcı odunsu</strong> iz. <em>Mistik</em> ve <u>derin</u>.
                    </p>
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
              Kullanım Talimatları
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">Şişeyi Açın</h3>
                <p className="text-sm text-[#6B4423]">
                  Kapağı <strong>dikkatlice</strong> çıkarın. İçeriği <u>dökmeyin</u>.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">Çubukları Yerleştirin</h3>
                <p className="text-sm text-[#6B4423]">
                  <em>Rattan çubukları</em> şişeye yerleştirin. <strong>4-8 adet</strong> kullanın.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">Bekleyin</h3>
                <p className="text-sm text-[#6B4423]">
                  <u>İlk 24 saat</u> içinde koku yayılmaya başlar. <strong>Sabırlı</strong> olun.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">Çevirin</h3>
                <p className="text-sm text-[#6B4423]">
                  Haftada <em>bir kez</em> çubukları ters çevirin. <strong>Koku</strong> tazelenir.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#FFF8F0] rounded-2xl">
              <h4 className="font-bold text-[#2C1810] mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-[#8B6F47]" />
                Profesyonel İpuçları
              </h4>
              <ul className="space-y-2 text-sm text-[#6B4423]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Dar alanlarda</strong> 4-5 çubuk, <u>geniş odalarda</u> 6-8 çubuk kullanın.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ürünü <em>göz hizasının</em> üzerinde konumlandırın. Koku <strong>yukarı</strong> doğru yayılır.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><u>Hava akımının</u> olduğu noktalara yerleştirin. Kapı veya <strong>pencere</strong> yakını ideal.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Doğrudan <em>güneş ışığından</em> uzak tutun. <strong>Sıvı buharlaşması</strong> hızlanır.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl mb-20"
          >
            <h2 className="text-3xl font-bold text-[#2C1810] mb-8 text-center">
              Hangi Odalarda Kullanılır?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Home className="w-8 h-8 text-[#8B6F47] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2">Oturma Odası</h3>
                  <p className="text-[#6B4423] mb-3">
                    Misafirlerinizi <strong>ilk anda</strong> etkileyin. 
                    Sandal ağacının <em>sıcak</em> karakteri, samimi bir <u>atmosfer</u> yaratır.
                  </p>
                  <div className="bg-[#FFF8F0] p-3 rounded-lg text-sm">
                    <strong className="text-[#8B6F47]">Öneri:</strong> Sehpa veya <em>konsol</em> üzerine yerleştirin.
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Flame className="w-8 h-8 text-[#8B6F47] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2">Yatak Odası</h3>
                  <p className="text-[#6B4423] mb-3">
                    <u>Rahatlatıcı</u> etkisi, uyku kalitenizi <strong>artırır</strong>. 
                    Stres seviyesini <em>düşürür</em>.
                  </p>
                  <div className="bg-[#FFF8F0] p-3 rounded-lg text-sm">
                    <strong className="text-[#8B6F47]">Öneri:</strong> Komodin veya <em>şifonyer</em> üstü ideal.
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Wind className="w-8 h-8 text-[#8B6F47] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2">Banyo</h3>
                  <p className="text-[#6B4423] mb-3">
                    <strong>SPA</strong> deneyimini evinize taşıyın. 
                    Her gün <u>kendinize</u> özel bir <em>an</em> yaratın.
                  </p>
                  <div className="bg-[#FFF8F0] p-3 rounded-lg text-sm">
                    <strong className="text-[#8B6F47]">Öneri:</strong> Lavabo kenarı veya <em>raf</em> kullanın.
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Leaf className="w-8 h-8 text-[#8B6F47] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2">Ofis & Çalışma Alanı</h3>
                  <p className="text-[#6B4423] mb-3">
                    Konsantrasyonu <em>destekler</em>. 
                    Üretkenliğinizi <strong>maksimize</strong> eden bir <u>ortam</u> sağlar.
                  </p>
                  <div className="bg-[#FFF8F0] p-3 rounded-lg text-sm">
                    <strong className="text-[#8B6F47]">Öneri:</strong> Masa köşesi veya <em>dolap</em> üstü.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#8B6F47] to-[#D4A574] p-12 rounded-3xl text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sandal Ağacının Faydaları
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              Binlerce yıldır <strong>değer gören</strong> sandal ağacı, sadece koku değil, <em>yaşam kalitesi</em> sunar.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">Zihinsel Rahatlama</h3>
                <p className="text-sm opacity-90">
                  <u>Meditasyon</u> ve yoga pratiğinde kullanılır. 
                  Zihni <strong>sakinleştirir</strong>, stresi <em>azaltır</em>.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">Uyku Kalitesi</h3>
                <p className="text-sm opacity-90">
                  <strong>Rahatlatıcı</strong> özelliği, daha <u>derin uyku</u> sağlar. 
                  Uyanıklık hissi <em>azalır</em>.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">Konsantrasyon</h3>
                <p className="text-sm opacity-90">
                  Çalışma verimliliğini <strong>artırır</strong>. 
                  Dikkat dağınıklığını <u>minimize</u> eder, <em>odaklanma</em> sağlar.
                </p>
              </div>
            </div>
          </motion.div>
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
              Hemen Sipariş Verin
            </h2>
            <p className="text-lg text-[#D4A574] mb-8 max-w-2xl mx-auto">
              <Link href="/" className="underline hover:text-white transition-colors">
                Ana sayfamızda
              </Link> daha fazla bilgi bulabilir, 
              <Link href="/hakkimizda" className="underline hover:text-white transition-colors mx-1">
                hakkımızda
              </Link> sayfasından markamızı tanıyabilirsiniz. 
              <Link href="/iletisim" className="underline hover:text-white transition-colors ml-1">
                İletişim
              </Link> için her zaman hazırız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.karakarhome.com.tr/sandal-agaci-oda-kokusu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C1810] px-8 py-4 rounded-full font-bold hover:bg-[#D4A574] hover:text-white transition-all duration-300"
              >
                Satın Al
              </Link>
              <Link
                href="https://www.karakarhome.com.tr/oda-kokulari/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#2C1810] transition-all duration-300"
              >
                Diğer Oda Kokuları
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
