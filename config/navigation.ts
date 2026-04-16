export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
  description?: string;
  badge?: string;
  external?: boolean;
  requiredRoles?: string[];
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export const MAIN_NAV: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Modules', href: '/#modules' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Blog', href: '/blog' },
];

// Footer Navigation
export const FOOTER_NAV: NavigationSection[] = [
  {
    title: 'Product',
    items: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Company',
    items: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Status', href: '/status', external: true },
    ],
  }
];