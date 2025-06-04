# 🧪 Deployment Test Checklist

## Quick Browser Tests (2 minutes)

### 1. ✅ Console Check
```
F12 → Console tab → Refresh page
```
**Expected**: 
- ❌ Should see NO: "MIME type ('text/css') is not executable" 
- ✅ Should see: No critical CSS/JS errors
- ℹ️ Ignore: "runtime.lastError" (browser extensions)

### 2. ✅ Network Tab Check  
```
F12 → Network tab → Refresh page
```
**CSS Files Check**:
- Filter: "css"
- Each CSS file Status: **200** 
- Content-Type: **text/css; charset=utf-8**

**JS Files Check**:
- Filter: "js" 
- Each JS file Status: **200**
- Content-Type: **text/javascript; charset=utf-8**

### 3. ✅ Font Check
```
F12 → Elements tab → Select any text → Computed styles
```
**Expected**:
- font-family: **"Roboto"** (should be first in stack)
- NOT: system fonts like Arial, sans-serif

### 4. ✅ Visual Test
- Text should look clean and modern (Roboto font)
- All text elements should be readable
- No layout issues

## 🔧 If Tests Fail:

### Step 1: Cache Clear
```
Cloudflare Dashboard → Caching → Purge Everything
Wait 2-3 minutes
```

### Step 2: Hard Browser Refresh
```
Chrome/Edge: Ctrl+Shift+R
Firefox: Ctrl+F5  
Safari: Cmd+Option+R
```

### Step 3: Incognito Test
```
Open incognito/private window
Visit: https://zero-core.com
Repeat tests above
```

## 🚨 Critical Issues:

### MIME Type Error Still Present:
**Symptom**: "MIME type ('text/css') is not executable"
**Fix**: 
1. Check `out/_headers` file exists in deployment
2. Redeploy from Cloudflare Pages dashboard
3. Purge cache immediately after deploy

### Roboto Font Not Loading:
**Symptom**: Text shows Arial/system fonts
**Fix**:
1. Hard refresh browser (Ctrl+Shift+R)
2. Check CSS file loading in Network tab
3. Verify no CSS 404 errors

### Layout Broken:
**Symptom**: No styles applied, raw HTML visible
**Fix**:
1. Check CSS files in Network tab (should be 200, not 404)
2. Verify Content-Type headers on CSS files
3. Clear Cloudflare + browser cache

## ✅ Success Indicators:

- [ ] No MIME type errors in console
- [ ] CSS files load with status 200 and Content-Type: text/css
- [ ] JS files load with status 200 and Content-Type: text/javascript  
- [ ] Roboto font visible in computed styles
- [ ] Site looks polished and modern
- [ ] Mobile responsive (test on phone)

## 🎯 Performance Check:

### Lighthouse Test (Optional):
```
F12 → Lighthouse tab → Analyze page load
```
**Expected**:
- Performance: 90+ (green)
- Accessibility: 90+ (green)  
- Best Practices: 90+ (green)
- SEO: 90+ (green)

### Speed Test:
- First page load: < 2 seconds
- Navigate between sections: Instant
- On mobile: < 3 seconds

---

**🚀 All tests pass? Deployment successful!**

**❌ Issues found? Follow troubleshooting steps in CLOUDFLARE_DEPLOYMENT.md** 