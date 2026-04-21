export interface Database {
  public: {
    Tables: {
      site_settings: {
        Row: {
          id: string;
          key: string;
          value: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          key?: string;
          value?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      product_categories: {
        Row: {
          id: string;
          slug: string;
          name: string;
          short_description: string;
          long_description: string | null;
          hero_image_url: string | null;
          featured_image_url: string | null;
          is_featured: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          short_description: string;
          long_description?: string | null;
          hero_image_url?: string | null;
          featured_image_url?: string | null;
          is_featured?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          short_description?: string;
          long_description?: string | null;
          hero_image_url?: string | null;
          featured_image_url?: string | null;
          is_featured?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          category_id: string | null;
          slug: string;
          name: string;
          summary: string;
          description: string | null;
          use_cases: string[] | null;
          available_fabrics_json: string[] | null;
          available_colors_json: string[] | null;
          branding_options_json: string[] | null;
          image_url: string | null;
          is_active: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          category_id?: string | null;
          slug: string;
          name: string;
          summary: string;
          description?: string | null;
          use_cases?: string[] | null;
          available_fabrics_json?: string[] | null;
          available_colors_json?: string[] | null;
          branding_options_json?: string[] | null;
          image_url?: string | null;
          is_active?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string | null;
          slug?: string;
          name?: string;
          summary?: string;
          description?: string | null;
          use_cases?: string[] | null;
          available_fabrics_json?: string[] | null;
          available_colors_json?: string[] | null;
          branding_options_json?: string[] | null;
          image_url?: string | null;
          is_active?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      industries: {
        Row: {
          id: string;
          slug: string;
          name: string;
          summary: string;
          description: string | null;
          hero_image_url: string | null;
          benefits_json: string[] | null;
          recommended_categories_json: string[] | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          summary: string;
          description?: string | null;
          hero_image_url?: string | null;
          benefits_json?: string[] | null;
          recommended_categories_json?: string[] | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          summary?: string;
          description?: string | null;
          hero_image_url?: string | null;
          benefits_json?: string[] | null;
          recommended_categories_json?: string[] | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      gallery_items: {
        Row: {
          id: string;
          title: string;
          slug: string | null;
          image_url: string;
          alt_text: string;
          caption: string | null;
          before_after_type: "before" | "after" | "single" | null;
          product_category_id: string | null;
          industry_id: string | null;
          tags_json: string[] | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug?: string | null;
          image_url: string;
          alt_text: string;
          caption?: string | null;
          before_after_type?: "before" | "after" | "single" | null;
          product_category_id?: string | null;
          industry_id?: string | null;
          tags_json?: string[] | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string | null;
          image_url?: string;
          alt_text?: string;
          caption?: string | null;
          before_after_type?: "before" | "after" | "single" | null;
          product_category_id?: string | null;
          industry_id?: string | null;
          tags_json?: string[] | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      quote_requests: {
        Row: {
          id: string;
          created_at: string;
          status: "new" | "contacted" | "quoted" | "closed";
          name: string;
          company: string;
          email: string;
          phone: string | null;
          industry: string;
          project_location: string | null;
          product_types: string[] | null;
          quantity_estimate: string | null;
          timeline: string | null;
          message: string | null;
          consent: boolean;
          source_page: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          status?: "new" | "contacted" | "quoted" | "closed";
          name: string;
          company: string;
          email: string;
          phone?: string | null;
          industry: string;
          project_location?: string | null;
          product_types?: string[] | null;
          quantity_estimate?: string | null;
          timeline?: string | null;
          message?: string | null;
          consent?: boolean;
          source_page?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          status?: "new" | "contacted" | "quoted" | "closed";
          name?: string;
          company?: string;
          email?: string;
          phone?: string | null;
          industry?: string;
          project_location?: string | null;
          product_types?: string[] | null;
          quantity_estimate?: string | null;
          timeline?: string | null;
          message?: string | null;
          consent?: boolean;
          source_page?: string | null;
        };
      };
      contact_inquiries: {
        Row: {
          id: string;
          created_at: string;
          status: "new" | "contacted" | "closed";
          name: string;
          company: string | null;
          email: string;
          phone: string | null;
          message: string;
          source_page: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          status?: "new" | "contacted" | "closed";
          name: string;
          company?: string | null;
          email: string;
          phone?: string | null;
          message: string;
          source_page?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          status?: "new" | "contacted" | "closed";
          name?: string;
          company?: string | null;
          email?: string;
          phone?: string | null;
          message?: string;
          source_page?: string | null;
        };
      };
      team_members: {
        Row: {
          id: string;
          name: string;
          title: string;
          bio: string | null;
          image_url: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          title: string;
          bio?: string | null;
          image_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          title?: string;
          bio?: string | null;
          image_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          company: string | null;
          role: string | null;
          quote: string;
          image_url: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          company?: string | null;
          role?: string | null;
          quote: string;
          image_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          company?: string | null;
          role?: string | null;
          quote?: string;
          image_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
      };
      faqs: {
        Row: {
          id: string;
          question: string;
          answer: string;
          category: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          question: string;
          answer: string;
          category?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          question?: string;
          answer?: string;
          category?: string | null;
          sort_order?: number;
          created_at?: string;
        };
      };
    };
  };
}
