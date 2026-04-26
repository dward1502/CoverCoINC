export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  heroImageUrl: string | null;
  featuredImageUrl: string | null;
  isFeatured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  categoryId: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  useCases: string[];
  availableFabrics: string[];
  availableColors: string[];
  brandingOptions: string[];
  imageUrl: string | null;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  heroImageUrl: string | null;
  benefits: string[];
  recommendedCategories: string[];
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  slug: string | null;
  imageUrl: string;
  altText: string;
  caption: string | null;
  beforeAfterType: "before" | "after" | "single" | null;
  productCategoryId: string | null;
  industryId: string | null;
  tags: string[];
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string | null;
  imageUrl: string | null;
  sortOrder: number;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string | null;
  role: string | null;
  quote: string;
  imageUrl: string | null;
  sortOrder: number;
  createdAt: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  sortOrder: number;
  createdAt: string;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export type QuoteStatus = "new" | "contacted" | "quoted" | "closed";
export type InquiryStatus = "new" | "contacted" | "closed";

export interface QuoteRequest {
  id: string;
  createdAt: string;
  status: QuoteStatus;
  name: string;
  company: string;
  email: string;
  phone: string | null;
  industry: string;
  projectLocation: string | null;
  productTypes: string[];
  quantityEstimate: string | null;
  timeline: string | null;
  message: string | null;
  consent: boolean;
  sourcePage: string | null;
}

export interface ContactInquiry {
  id: string;
  createdAt: string;
  status: InquiryStatus;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  message: string;
  sourcePage: string | null;
}
