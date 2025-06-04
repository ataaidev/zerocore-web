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

### 🚨 CSS/JS MIME Type Errors (CRITICAL FIX!)

**Symptoms:**
```
Refused to execute script from '<URL>' because its MIME type ('text/css') is not executable
```

**Root Cause**: Cloudflare Pages serving JS files with CSS Content-Type

**Solution Applied**: ✅ Fixed with prioritized `_headers` rules

**Testing After Deployment:**

#### 1. Browser Developer Tools Test:
```
F12 → Network tab → Refresh page
Check CSS files: Should show "text/css" Content-Type
Check JS files: Should show "text/javascript" Content-Type
```

#### 2. Manual curl test:
```bash
# Test CSS file Content-Type
curl -I https://zero-core.com/_next/static/css/[filename].css

# Expected response:
# Content-Type: text/css; charset=utf-8

# Test JS file Content-Type  
curl -I https://zero-core.com/_next/static/chunks/[filename].js

# Expected response:
# Content-Type: text/javascript; charset=utf-8
```

#### 3. Browser Console Check:
- Open Developer Tools (F12)
- Refresh page
- Check Console for errors
- ✅ Should see NO MIME type errors
- ✅ Should see Roboto fonts loading

#### 4. Visual Verification:
- Text should use **Roboto** font family
- inspect element → Computed styles → font-family should show "Roboto"

### 💾 Cache Clearing Steps:

**If CSS still looks wrong after deployment:**

#### Step 1: Cloudflare Cache
1. Go to Cloudflare Dashboard
2. Select your domain 
3. **Caching** → **Purge Everything**
4. Wait 2-3 minutes

#### Step 2: Browser Cache  
```
Chrome: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
Firefox: Ctrl+F5 (Windows) / Cmd+Shift+R (Mac)
Safari: Cmd+Option+R

OR

Hard refresh with Dev Tools open:
F12 → Network tab → Right-click refresh → "Empty Cache and Hard Reload"
```

#### Step 3: Test in Incognito
- Open incognito/private window
- Visit https://zero-core.com
- Should show correct Roboto fonts

### 🔍 Quick Diagnostics:

**Check 1**: _headers file deployed?
```bash
curl -I https://zero-core.com/_headers
# Should return 200 OK
```

**Check 2**: CSS file Content-Type
```bash
curl -I https://zero-core.com/_next/static/css/*.css
# Should show: Content-Type: text/css; charset=utf-8
```

**Check 3**: Browser Network tab
```
F12 → Network → Filter by CSS
Refresh page
Each CSS file status should be 200 OK
Content-Type should be text/css
```

### ⚠️ Known Issues & Fixes:

#### Issue: "runtime.lastError" messages
**Status**: ✅ Normal - Browser extension messages, ignore

#### Issue: JS served as CSS
**Status**: ✅ Fixed - `_headers` priority rules added

#### Issue: Fonts not loading
**Status**: ✅ Fixed - Roboto integration completed

#### Issue: CSS cache stale
**Solution**: Purge Cloudflare cache + hard browser refresh

### 🎯 Success Checklist:

After deployment, verify:
- [ ] ✅ No MIME type errors in console
- [ ] ✅ CSS files load with `text/css` Content-Type
- [ ] ✅ JS files load with `text/javascript` Content-Type  
- [ ] ✅ Roboto font visible on page
- [ ] ✅ No "runtime.lastError" (these are normal extension messages)
- [ ] ✅ Page loads fast with proper caching headers

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

## 🚀 Final Deployment Steps:

1. `npm run build` - Local build
2. Verify `out/_headers` exists
3. Deploy to Cloudflare Pages  
4. **Purge cache immediately after deploy**
5. Test in incognito browser
6. Check browser console for errors
7. Verify Roboto fonts loading

## 📞 Emergency Rollback:

If critical issues occur:
1. Cloudflare Pages → Deployments
2. Select previous working deployment
3. Click "Retry deployment" 
4. Purge cache after rollback 