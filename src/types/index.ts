export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProductType {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  images: string[];
  featured: boolean;
  available: boolean;
  inventory: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioItemType {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  client: string;
  date: Date;
}

export interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featuredImage: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}
