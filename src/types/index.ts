export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
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
  createdAt: Date;
  updatedAt: Date;
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

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderType {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  productId: string;
  productName: string;
  amount: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageType {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserType {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface SettingsType {
  id: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  facebookURL: string;
  twitterURL: string;
  instagramURL: string;
  linkedinURL: string;
  updatedAt: Date;
}
