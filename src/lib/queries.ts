import { createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";
import {
  fallbackProductCategories,
  fallbackProducts,
  fallbackIndustries,
  fallbackGalleryItems,
  fallbackTeamMembers,
  fallbackTestimonials,
  fallbackFaqs,
} from "@/lib/fallback-data";
import type {
  ProductCategory,
  Product,
  Industry,
  GalleryItem,
  TeamMember,
  Testimonial,
  Faq,
} from "@/types";

function mapCategory(row: Record<string, unknown>): ProductCategory {
  return {
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.name),
    shortDescription: String(row.short_description ?? row.shortDescription ?? ""),
    longDescription: String(row.long_description ?? row.longDescription ?? ""),
    heroImageUrl: row.hero_image_url ? String(row.hero_image_url) : null,
    featuredImageUrl: row.featured_image_url ? String(row.featured_image_url) : null,
    isFeatured: Boolean(row.is_featured ?? row.isFeatured ?? false),
    sortOrder: Number(row.sort_order ?? row.sortOrder ?? 0),
    createdAt: String(row.created_at ?? row.createdAt ?? ""),
    updatedAt: String(row.updated_at ?? row.updatedAt ?? ""),
  };
}

function mapProduct(row: Record<string, unknown>): Product {
  return {
    id: String(row.id),
    categoryId: String(row.category_id ?? row.categoryId ?? ""),
    slug: String(row.slug),
    name: String(row.name),
    summary: String(row.summary),
    description: String(row.description ?? ""),
    useCases: Array.isArray(row.use_cases ?? row.useCases) ? (row.use_cases ?? row.useCases) as string[] : [],
    availableFabrics: Array.isArray(row.available_fabrics_json ?? row.availableFabrics) ? (row.available_fabrics_json ?? row.availableFabrics) as string[] : [],
    availableColors: Array.isArray(row.available_colors_json ?? row.availableColors) ? (row.available_colors_json ?? row.availableColors) as string[] : [],
    brandingOptions: Array.isArray(row.branding_options_json ?? row.brandingOptions) ? (row.branding_options_json ?? row.brandingOptions) as string[] : [],
    imageUrl: row.image_url ? String(row.image_url) : null,
    isActive: Boolean(row.is_active ?? row.isActive ?? true),
    sortOrder: Number(row.sort_order ?? row.sortOrder ?? 0),
    createdAt: String(row.created_at ?? row.createdAt ?? ""),
    updatedAt: String(row.updated_at ?? row.updatedAt ?? ""),
  };
}

function mapIndustry(row: Record<string, unknown>): Industry {
  return {
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.name),
    summary: String(row.summary),
    description: String(row.description ?? ""),
    heroImageUrl: row.hero_image_url ? String(row.hero_image_url) : null,
    benefits: Array.isArray(row.benefits_json ?? row.benefits) ? (row.benefits_json ?? row.benefits) as string[] : [],
    recommendedCategories: Array.isArray(row.recommended_categories_json ?? row.recommendedCategories) ? (row.recommended_categories_json ?? row.recommendedCategories) as string[] : [],
    sortOrder: Number(row.sort_order ?? row.sortOrder ?? 0),
    createdAt: String(row.created_at ?? row.createdAt ?? ""),
    updatedAt: String(row.updated_at ?? row.updatedAt ?? ""),
  };
}

function mapGalleryItem(row: Record<string, unknown>): GalleryItem {
  return {
    id: String(row.id),
    title: String(row.title),
    slug: row.slug ? String(row.slug) : null,
    imageUrl: String(row.image_url ?? row.imageUrl ?? ""),
    altText: String(row.alt_text ?? row.altText ?? ""),
    caption: row.caption ? String(row.caption) : null,
    beforeAfterType: (row.before_after_type ?? row.beforeAfterType) as "before" | "after" | "single" | null,
    productCategoryId: row.product_category_id ? String(row.product_category_id) : null,
    industryId: row.industry_id ? String(row.industry_id) : null,
    tags: Array.isArray(row.tags_json ?? row.tags) ? (row.tags_json ?? row.tags) as string[] : [],
    sortOrder: Number(row.sort_order ?? row.sortOrder ?? 0),
    createdAt: String(row.created_at ?? row.createdAt ?? ""),
    updatedAt: String(row.updated_at ?? row.updatedAt ?? ""),
  };
}

function mapTeamMember(row: Record<string, unknown>): TeamMember {
  return {
    id: String(row.id),
    name: String(row.name),
    title: String(row.title),
    bio: row.bio ? String(row.bio) : null,
    imageUrl: row.image_url ? String(row.image_url) : null,
    sortOrder: Number(row.sort_order ?? row.sortOrder ?? 0),
    createdAt: String(row.created_at ?? row.createdAt ?? ""),
  };
}

function mapTestimonial(row: Record<string, unknown>): Testimonial {
  return {
    id: String(row.id),
    name: String(row.name),
    company: row.company ? String(row.company) : null,
    role: row.role ? String(row.role) : null,
    quote: String(row.quote),
    imageUrl: row.image_url ? String(row.image_url) : null,
    sortOrder: Number(row.sort_order ?? row.sortOrder ?? 0),
    createdAt: String(row.created_at ?? row.createdAt ?? ""),
  };
}

function mapFaq(row: Record<string, unknown>): Faq {
  return {
    id: String(row.id),
    question: String(row.question),
    answer: String(row.answer),
    category: row.category ? String(row.category) : null,
    sortOrder: Number(row.sort_order ?? row.sortOrder ?? 0),
    createdAt: String(row.created_at ?? row.createdAt ?? ""),
  };
}

// ─── Product Category Queries ────────────────────────────────────────────────

export async function getProductCategories(): Promise<ProductCategory[]> {
  if (!isSupabaseConfigured()) {
    return fallbackProductCategories;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("product_categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getProductCategories error:", error);
    return fallbackProductCategories;
  }

  return (data ?? []).map((r) => mapCategory(r as Record<string, unknown>));
}

export async function getFeaturedCategories(): Promise<ProductCategory[]> {
  const all = await getProductCategories();
  return all.filter((c) => c.isFeatured);
}

export async function getProductCategoryBySlug(slug: string): Promise<ProductCategory | null> {
  if (!isSupabaseConfigured()) {
    return fallbackProductCategories.find((c) => c.slug === slug) ?? null;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("product_categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("getProductCategoryBySlug error:", error);
    return fallbackProductCategories.find((c) => c.slug === slug) ?? null;
  }

  return mapCategory(data as Record<string, unknown>);
}

// ─── Product Queries ─────────────────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured()) {
    return fallbackProducts;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getProducts error:", error);
    return fallbackProducts;
  }

  return (data ?? []).map((r) => mapProduct(r as Record<string, unknown>));
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  if (!isSupabaseConfigured()) {
    return fallbackProducts.filter((p) => p.categoryId === categoryId);
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", categoryId)
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getProductsByCategory error:", error);
    return fallbackProducts.filter((p) => p.categoryId === categoryId);
  }

  return (data ?? []).map((r) => mapProduct(r as Record<string, unknown>));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isSupabaseConfigured()) {
    return fallbackProducts.find((p) => p.slug === slug) ?? null;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("getProductBySlug error:", error);
    return fallbackProducts.find((p) => p.slug === slug) ?? null;
  }

  return mapProduct(data as Record<string, unknown>);
}

// ─── Industry Queries ────────────────────────────────────────────────────────

export async function getIndustries(): Promise<Industry[]> {
  if (!isSupabaseConfigured()) {
    return fallbackIndustries;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("industries")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getIndustries error:", error);
    return fallbackIndustries;
  }

  return (data ?? []).map((r) => mapIndustry(r as Record<string, unknown>));
}

export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
  if (!isSupabaseConfigured()) {
    return fallbackIndustries.find((i) => i.slug === slug) ?? null;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("industries")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("getIndustryBySlug error:", error);
    return fallbackIndustries.find((i) => i.slug === slug) ?? null;
  }

  return mapIndustry(data as Record<string, unknown>);
}

// ─── Gallery Queries ─────────────────────────────────────────────────────────

export async function getGalleryItems(): Promise<GalleryItem[]> {
  if (!isSupabaseConfigured()) {
    return fallbackGalleryItems;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("gallery_items")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getGalleryItems error:", error);
    return fallbackGalleryItems;
  }

  return (data ?? []).map((r) => mapGalleryItem(r as Record<string, unknown>));
}

export async function getGalleryItemsByTag(tag: string): Promise<GalleryItem[]> {
  const items = await getGalleryItems();
  return items.filter((item) => item.tags.includes(tag));
}

// ─── Team Member Queries ─────────────────────────────────────────────────────

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!isSupabaseConfigured()) {
    return fallbackTeamMembers;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getTeamMembers error:", error);
    return fallbackTeamMembers;
  }

  return (data ?? []).map((r) => mapTeamMember(r as Record<string, unknown>));
}

// ─── Testimonial Queries ─────────────────────────────────────────────────────

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSupabaseConfigured()) {
    return fallbackTestimonials;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getTestimonials error:", error);
    return fallbackTestimonials;
  }

  return (data ?? []).map((r) => mapTestimonial(r as Record<string, unknown>));
}

// ─── FAQ Queries ─────────────────────────────────────────────────────────────

export async function getFaqs(): Promise<Faq[]> {
  if (!isSupabaseConfigured()) {
    return fallbackFaqs;
  }
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("faqs")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getFaqs error:", error);
    return fallbackFaqs;
  }

  return (data ?? []).map((r) => mapFaq(r as Record<string, unknown>));
}
