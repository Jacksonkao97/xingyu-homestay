import { useLanguageStore, Language } from "@/store/useLanguageStore";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      gallery: "Gallery",
      pricing: "Pricing",
      contact: "Contact",
      bookNow: "Book Now",
    },
    // Hero
    hero: {
      title: "Experience Comfort Like Never Before",
      subtitle:
        "Experience luxury living in the heart of nature. Your perfect getaway awaits.",
      cta: "Book Your Stay",
    },
    // Gallery
    gallery: {
      title: "A Glimpse Inside",
    },
    // Pricing/Amenities
    pricing: {
      title: "Amenities & Pricing",
      perNight: "per night",
      allAmenities: "All Amenities",
      priceLabel: "Price Starts From",
    },
    // Contact
    contact: {
      ready: "Ready to Relax?",
      getInTouch: "Get in Touch",
      subtitle:
        "Have questions about your stay? We're here to help you plan your perfect getaway.",
    },
    // Footer
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      sitemap: "Sitemap",
      rights: "All rights reserved.",
    },
    // Brand
    brand: {
      name: "Star-Whisper Cottage",
      logo: "Star-Whisper",
    },
  },
  zh: {
    // Navigation
    nav: {
      home: "首页",
      gallery: "图库",
      pricing: "价格",
      contact: "联系我们",
      bookNow: "立即预订",
    },
    // Hero
    hero: {
      title: "体验前所未有的舒适感",
      subtitle: "在自然的怀抱中体验奢华生活。您完美的度假胜地等待着您的光临。",
      cta: "预订您的住宿",
    },
    // Gallery
    gallery: {
      title: "内部一瞥",
    },
    // Pricing/Amenities
    pricing: {
      title: "设施与价格",
      perNight: "每晚",
      allAmenities: "所有设施",
      priceLabel: "价格从",
    },
    // Contact
    contact: {
      ready: "准备好放松了吗？",
      getInTouch: "联系我们",
      subtitle: "对您的住宿有疑问吗？我们在这里帮助您规划完美的度假。",
    },
    // Footer
    footer: {
      privacy: "隐私政策",
      terms: "服务条款",
      sitemap: "网站地图",
      rights: "版权所有。",
    },
    // Brand
    brand: {
      name: "星语小屋",
      logo: "星语小屋",
    },
  },
};

export type TranslationKeys = typeof translations.en;

export const useTranslation = () => {
  const { language } = useLanguageStore();

  const t = (path: string) => {
    const keys = path.split(".");
    let result: any = translations[language];

    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path; // Fallback to key path if not found
      }
    }

    return result;
  };

  return { t, language };
};
