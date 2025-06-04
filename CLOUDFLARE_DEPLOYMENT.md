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
├── _headers      # ← Critical for CSS
├── _redirects    # ← SPA routing
├── index.html
└── ...
```

## 🛠️ Sorun Giderme

### 🚨 CSS Yüklenmiyor (Çözüldü!):
**Sebep**: Cloudflare Pages Content-Type headers sorunu  
**Çözüm**: 
1. ✅ `public/_headers` dosyası eklendi (CSS için Content-Type)
2. ✅ `public/_redirects` dosyası eklendi (Path routing)  
3. ✅ Font dosyları için header'lar eklendi

**Kontrol edilecekler**:
1. `out/_headers` dosyasının var olduğunu kontrol edin
2. Browser Dev Tools → Network → CSS dosyalarının **200 OK** döndüğünü kontrol edin
3. Response headers'ta `Content-Type: text/css` olduğunu kontrol edin

### 💾 Cache Temizleme:
**Eğer CSS hala eski görünüyorsa**:
1. Cloudflare Dashboard → domain → **Caching** → **Purge Everything**
2. Browser hard refresh: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)  
3. Browser Dev Tools açık → **Network** tab → **Disable cache** işaretle

### 🔍 Debug Adımları:
```bash
# 1. Build output kontrol
ls -la out/_headers out/_redirects

# 2. CSS dosyaları var mı?
ls -la out/_next/static/css/

# 3. Font dosyaları var mı?  
ls -la out/_next/static/media/
```

### 🌐 Live Test:
```bash
# CSS dosyasının content-type'ını test et
curl -I https://zero-core.com/_next/static/css/[filename].css

# Expected: Content-Type: text/css; charset=utf-8
```

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

## 🎯 Critical Files Checklist

Deploy öncesi mutlaka kontrol edin:
- [ ] `out/_headers` var (CSS Content-Type için)
- [ ] `out/_redirects` var (SPA routing için)  
- [ ] `out/_next/static/css/` klasöründe CSS dosyaları var
- [ ] `out/index.html` Roboto font references içeriyor 