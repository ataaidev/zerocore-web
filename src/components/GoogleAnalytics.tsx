'use client';

import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '../lib/constants';

// Google Analytics types
type GtagCommand = 'config' | 'event' | 'js';
type GtagConfig = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag: (
      command: GtagCommand,
      targetId: string | Date,
      config?: GtagConfig
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}

// Custom event tracking functions
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const config: GtagConfig = {
      event_category: category,
    };
    
    if (label) {
      config.event_label = label;
    }
    
    if (value !== undefined) {
      config.value = value;
    }
    
    window.gtag('event', action, config);
  }
};

// Specific tracking functions for the site
export const trackContactClick = (type: 'email' | 'phone') => {
  trackEvent('click', 'contact', type);
};

export const trackExternalLink = (url: string) => {
  trackEvent('click', 'external_link', url);
}; 