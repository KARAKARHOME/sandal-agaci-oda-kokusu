import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "KARAKAR HOME iletişim bilgileri. Pendik İstanbul adresimiz, telefon, e-posta ve sosyal medya hesaplarımız. WhatsApp ve canlı destek.",
  openGraph: {
    title: "İletişim | Sandal Ağacı Oda Kokusu",
    description: "KARAKAR HOME iletişim bilgileri. Pendik İstanbul adresimiz, telefon, e-posta ve sosyal medya hesaplarımız. WhatsApp ve canlı destek.",
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
