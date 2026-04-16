/**
 * SEO Configuration from Environment Variables
 * All SEO-related settings in one place
 */
export const seoConfig = {
  // App Info
  appName: process.env.NEXT_PUBLIC_APP_NAME,
  appUrl: process.env.NEXT_PUBLIC_APP_URL,
  appDescription: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  appShortDescription: process.env.NEXT_PUBLIC_APP_SHORT_DESCRIPTION,
  
  // Company Info
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Your Company',
  companyLogo: process.env.NEXT_PUBLIC_COMPANY_LOGO || '/logo.png',
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'support@yourdomain.com',
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+1-555-123-4567',
  
  // Address
  address: {
    street: process.env.NEXT_PUBLIC_COMPANY_STREET,
    city: process.env.NEXT_PUBLIC_COMPANY_CITY,
    state: process.env.NEXT_PUBLIC_COMPANY_STATE,
    zip: process.env.NEXT_PUBLIC_COMPANY_ZIP,
    country: process.env.NEXT_PUBLIC_COMPANY_COUNTRY,
  },
  
  // Social Media
  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
  },
  
  // SEO Settings
  defaultOgImage: process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE || '/og-image.png',
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@yourcompany',
  siteLanguage: process.env.NEXT_PUBLIC_SITE_LANGUAGE || 'en-US',
};

// Helper to get full URL
export const getFullUrl = (path: string = '') => {
  return `${seoConfig.appUrl}${path}`;
};

// Helper to get full image URL
export const getFullImageUrl = (imagePath: string) => {
  if (imagePath.startsWith('http')) return imagePath;
  return `${seoConfig.appUrl}${imagePath}`;
};

// Helper to get social links (filter out empty ones)
export const getSocialLinks = () => {
  return Object.values(seoConfig.social).filter(url => url !== '');
};