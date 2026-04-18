# Deployment Rehberi

Bu doküman, Sandal Ağacı Oda Kokusu web sitesinin nasıl yayınlanacağını açıklar.

## Vercel ile Deployment (Önerilen)

### 1. Vercel Hesabı Oluşturun
- https://vercel.com adresine gidin
- GitHub hesabınızla giriş yapın

### 2. Projeyi Import Edin
```bash
# GitHub'a push edin
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Vercel'de Ayarlar
- "New Project" butonuna tıklayın
- GitHub reposunu seçin
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output Directory: `.next`

### 4. Environment Variables
Vercel dashboard'da şu değişkenleri ekleyin:
```
NEXT_PUBLIC_SITE_URL=https://sandalagaciodakokusu.com.tr
```

### 5. Domain Ayarları
- Vercel dashboard → Settings → Domains
- `sandalagaciodakokusu.com.tr` ekleyin
- DNS kayıtlarını güncelleyin:
  - A Record: `76.76.21.21`
  - CNAME: `cname.vercel-dns.com`

## Netlify ile Deployment

### 1. Build Ayarları
```
Build command: npm run build
Publish directory: .next
```

### 2. netlify.toml Oluşturun
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Manuel Deployment (VPS/Sunucu)

### 1. Sunucuya Bağlanın
```bash
ssh user@your-server.com
```

### 2. Node.js Kurun
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3. Projeyi Klonlayın
```bash
git clone https://github.com/your-username/sandalagaci.git
cd sandalagaci
npm install
```

### 4. Build Edin
```bash
npm run build
```

### 5. PM2 ile Çalıştırın
```bash
npm install -g pm2
pm2 start npm --name "sandalagaci" -- start
pm2 save
pm2 startup
```

### 6. Nginx Konfigürasyonu
```nginx
server {
    listen 80;
    server_name sandalagaciodakokusu.com.tr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## SSL Sertifikası (Let's Encrypt)

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d sandalagaciodakokusu.com.tr
```

## Post-Deployment Checklist

- [ ] Site açılıyor mu? (https://sandalagaciodakokusu.com.tr)
- [ ] Tüm sayfalar çalışıyor mu?
- [ ] Mobil görünüm düzgün mü?
- [ ] Sipariş Ver butonları doğru linke gidiyor mu?
- [ ] Sosyal medya linkleri çalışıyor mu?
- [ ] Google Search Console'a site eklendi mi?
- [ ] Sitemap gönderildi mi? (sitemap.xml)
- [ ] robots.txt doğru mu?
- [ ] Schema markup kontrol edildi mi?
- [ ] Analytics kuruldu mu?

## SEO Optimizasyonları

### Google Search Console
1. https://search.google.com/search-console adresine gidin
2. Site ekleyin: `sandalagaciodakokusu.com.tr`
3. Sitemap gönderin: `https://sandalagaciodakokusu.com.tr/sitemap.xml`

### Google Analytics (Opsiyonel)
1. Google Analytics hesabı oluşturun
2. Tracking ID'yi `.env` dosyasına ekleyin
3. `app/layout.tsx` içine Google Analytics script'ini ekleyin

## Performans İyileştirmeleri

### 1. Görselleri Optimize Edin
- Logo ve ürün görsellerini WebP formatına çevirin
- Next.js Image component kullanın
- Lazy loading aktif

### 2. Cache Ayarları
```javascript
// next.config.ts
export default {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## Güvenlik

### 1. Environment Variables
- Hassas bilgileri `.env.local` dosyasında tutun
- `.env.local` dosyasını `.gitignore`'a ekleyin

### 2. Security Headers
```javascript
// next.config.ts
export default {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
```

## Destek

Herhangi bir sorun için:
- Email: info@beyazsabunodakokusu.com.tr
- Tel: +90 545 181 40 40
