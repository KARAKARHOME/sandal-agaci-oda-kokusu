import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürün Detayı",
  description: "Sandal Ağacı Oda Kokusu 100ml teknik özellikleri, kullanım talimatları ve detaylı ürün bilgileri. 8-12 hafta kullanım süresi, doğal formül.",
  openGraph: {
    title: "Ürün Detayı | Sandal Ağacı Oda Kokusu 100ml",
    description: "Sandal Ağacı Oda Kokusu 100ml teknik özellikleri, kullanım talimatları ve detaylı ürün bilgileri. 8-12 hafta kullanım süresi, doğal formül.",
  },
};

export default function UrunDetayiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
