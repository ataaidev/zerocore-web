# Cloudflare Pages Deployment Rehberi

## 🚀 Otomatik Deployment

### GitHub Integration ile:
1. Cloudflare Dashboard'a gidin
2. Pages > Create a project
3. GitHub repository'nizi bağlayın
4. Build ayarları:
   - **Build command**: `npm ci && npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (boş bırakın)

### Manual Upload ile:
1. Lokal olarak build alın: `npm run build`
2. `out/` klasörünü zip'leyin
3. Cloudflare Pages'te manual upload yapın

## ⚙️ Environment Variables

Cloudflare Pages dashboard'da şu environment variable'ları ekleyin:

```
NODE_VERSION=22.15.1
NPM_VERSION=10.9.2
NODE_ENV=production
YARN_ENABLED=false
SKIP_YARN_COREPACK=true
```

## 🔧 Build Komutları

### Development:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Local Test:
```bash
npm run build
npx serve out
```

## 📁 Dosya Yapısı (Build Sonrası)

```
out/
├── _next/
│   ├── static/
│   │   ├── css/
│   │   └── js/
├── images/
├── index.html
└── ...
```

## 🛠️ Sorun Giderme

### CSS Yüklenmiyor:
1. `out/` klasöründe CSS dosyalarının var olduğunu kontrol edin
2. Browser developer tools'ta CSS dosyalarının yüklenip yüklenmediğini kontrol edin
3. `_headers` dosyasının doğru deploy edildiğini kontrol edin

### Build Hataları:
1. Node.js versiyonunu kontrol edin (22.15.1)
2. NPM cache'i temizleyin: `npm cache clean --force`
3. `node_modules` ve `out` klasörlerini silin ve tekrar build alın

### Performance:
1. Cloudflare Analytics'i etkinleştirin
2. Browser cache'i kontrol edin
3. CSS minification'ı kontrol edin

## 📊 Monitoring

Cloudflare Dashboard'da:
- **Analytics**: Traffic ve performance
- **Speed**: Core Web Vitals
- **Security**: Attack patterns
- **Caching**: Cache hit rates 