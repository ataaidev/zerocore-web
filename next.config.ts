import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Cloudflare Pages için optimizasyonlar */
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Static dosyalar için optimizasyon
  assetPrefix: '',
  
  // Image optimizasyonunu devre dışı bırak (Cloudflare için)
  images: {
    unoptimized: true,
  },
  
  // Webpack konfigürasyonu
  webpack: (config) => {
    // CSS dosyalarının doğru şekilde yüklenmesi için
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    // Font dosyaları için
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
};

export default nextConfig;
