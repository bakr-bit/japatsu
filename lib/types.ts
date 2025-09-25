export interface ContentItem {
  id: string;
  title: string;
  info?: string;
  rating?: number;
  link: string;
  image: string;
  type: 'toplist' | 'banner' | 'sidebar';
  // Add any other fields specific to your content needs
}

export interface ToplistContent extends ContentItem {
  type: 'toplist';
  rank?: number;
  bonus?: string;
  spins?: string;
  payments?: any[];
  morePayments?: number;
}

export interface BannerContent extends ContentItem {
  type: 'banner';
  // Specific fields for banners if any
}

export interface SidebarContent extends ContentItem {
  type: 'sidebar';
  // Specific fields for sidebars if any
}
