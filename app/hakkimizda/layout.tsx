import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "KARAKAR HOME olarak sandal ağacı oda kokusu üretiminde öncü markayız. Pendik İstanbul'dan tüm Türkiye'ye kaliteli ürünler sunuyoruz.",
  openGraph: {
    title: "Hakkımızda | Sandal Ağacı Oda Kokusu",
    description: "KARAKAR HOME olarak sandal ağacı oda kokusu üretiminde öncü markayız. Pendik İstanbul'dan tüm Türkiye'ye kaliteli ürünler sunuyoruz.",
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
