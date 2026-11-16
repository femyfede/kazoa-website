// Generated from Supabase schema - DO NOT EDIT MANUALLY
// Run: npx supabase gen types typescript --project-id <project-id> > src/lib/supabase/database.types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: 'admin' | 'editor';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: 'admin' | 'editor';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: 'admin' | 'editor';
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      site_config: {
        Row: {
          id: string;
          key: string;
          value_sw: Json;
          value_en: Json;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value_sw: Json;
          value_en: Json;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          key?: string;
          value_sw?: Json;
          value_en?: Json;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      hero_content: {
        Row: {
          id: string;
          headline_sw: string;
          headline_en: string;
          subheadline_sw: string;
          subheadline_en: string;
          cta_primary_sw: string;
          cta_primary_en: string;
          cta_secondary_sw: string;
          cta_secondary_en: string;
          background_image_url: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          headline_sw: string;
          headline_en: string;
          subheadline_sw: string;
          subheadline_en: string;
          cta_primary_sw: string;
          cta_primary_en: string;
          cta_secondary_sw: string;
          cta_secondary_en: string;
          background_image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          headline_sw?: string;
          headline_en?: string;
          subheadline_sw?: string;
          subheadline_en?: string;
          cta_primary_sw?: string;
          cta_primary_en?: string;
          cta_secondary_sw?: string;
          cta_secondary_en?: string;
          background_image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      about_content: {
        Row: {
          id: string;
          eyebrow_sw: string;
          eyebrow_en: string;
          title1_sw: string;
          title1_en: string;
          title2_sw: string;
          title2_en: string;
          p1_sw: string;
          p1_en: string;
          p2_sw: string;
          p2_en: string;
          image_url: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          eyebrow_sw: string;
          eyebrow_en: string;
          title1_sw: string;
          title1_en: string;
          title2_sw: string;
          title2_en: string;
          p1_sw: string;
          p1_en: string;
          p2_sw: string;
          p2_en: string;
          image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          eyebrow_sw?: string;
          eyebrow_en?: string;
          title1_sw?: string;
          title1_en?: string;
          title2_sw?: string;
          title2_en?: string;
          p1_sw?: string;
          p1_en?: string;
          p2_sw?: string;
          p2_en?: string;
          image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      process_steps: {
        Row: {
          id: string;
          step_number: number;
          title_sw: string;
          title_en: string;
          description_sw: string;
          description_en: string;
          details_sw: string[] | null;
          details_en: string[] | null;
          highlight_sw: string | null;
          highlight_en: string | null;
          image_url: string | null;
          image_alt_sw: string | null;
          image_alt_en: string | null;
          is_active: boolean;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          step_number: number;
          title_sw: string;
          title_en: string;
          description_sw: string;
          description_en: string;
          details_sw?: string[] | null;
          details_en?: string[] | null;
          highlight_sw?: string | null;
          highlight_en?: string | null;
          image_url?: string | null;
          image_alt_sw?: string | null;
          image_alt_en?: string | null;
          is_active?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          step_number?: number;
          title_sw?: string;
          title_en?: string;
          description_sw?: string;
          description_en?: string;
          details_sw?: string[] | null;
          details_en?: string[] | null;
          highlight_sw?: string | null;
          highlight_en?: string | null;
          image_url?: string | null;
          image_alt_sw?: string | null;
          image_alt_en?: string | null;
          is_active?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      construction_stages: {
        Row: {
          id: string;
          name_sw: string;
          name_en: string;
          description_sw: string | null;
          description_en: string | null;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name_sw: string;
          name_en: string;
          description_sw?: string | null;
          description_en?: string | null;
          display_order: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name_sw?: string;
          name_en?: string;
          description_sw?: string | null;
          description_en?: string | null;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      quality_safety: {
        Row: {
          id: string;
          eyebrow_sw: string;
          eyebrow_en: string;
          title1_sw: string;
          title1_en: string;
          title2_sw: string;
          title2_en: string;
          sub_sw: string;
          sub_en: string;
          note_sw: string | null;
          note_en: string | null;
          features_sw: Json | null;
          features_en: Json | null;
          image_url: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          eyebrow_sw: string;
          eyebrow_en: string;
          title1_sw: string;
          title1_en: string;
          title2_sw: string;
          title2_en: string;
          sub_sw: string;
          sub_en: string;
          note_sw?: string | null;
          note_en?: string | null;
          features_sw?: Json | null;
          features_en?: Json | null;
          image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          eyebrow_sw?: string;
          eyebrow_en?: string;
          title1_sw?: string;
          title1_en?: string;
          title2_sw?: string;
          title2_en?: string;
          sub_sw?: string;
          sub_en?: string;
          note_sw?: string | null;
          note_en?: string | null;
          features_sw?: Json | null;
          features_en?: Json | null;
          image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      financial_items: {
        Row: {
          id: string;
          title_sw: string;
          title_en: string;
          description_sw: string;
          description_en: string;
          icon_name: string;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title_sw: string;
          title_en: string;
          description_sw: string;
          description_en: string;
          icon_name: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title_sw?: string;
          title_en?: string;
          description_sw?: string;
          description_en?: string;
          icon_name?: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      financial_note: {
        Row: {
          id: string;
          note_sw: string;
          note_en: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          note_sw: string;
          note_en: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          note_sw?: string;
          note_en?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      journey_steps: {
        Row: {
          id: string;
          label_sw: string;
          label_en: string;
          icon_name: string;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          label_sw: string;
          label_en: string;
          icon_name: string;
          display_order: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          label_sw?: string;
          label_en?: string;
          icon_name?: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      gallery_images: {
        Row: {
          id: string;
          title_sw: string | null;
          title_en: string | null;
          description_sw: string | null;
          description_en: string | null;
          image_url: string;
          thumbnail_url: string | null;
          category_sw: string | null;
          category_en: string | null;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title_sw?: string | null;
          title_en?: string | null;
          description_sw?: string | null;
          description_en?: string | null;
          image_url: string;
          thumbnail_url?: string | null;
          category_sw?: string | null;
          category_en?: string | null;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title_sw?: string | null;
          title_en?: string | null;
          description_sw?: string | null;
          description_en?: string | null;
          image_url?: string;
          thumbnail_url?: string | null;
          category_sw?: string | null;
          category_en?: string | null;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      faqs: {
        Row: {
          id: string;
          question_sw: string;
          question_en: string;
          answer_sw: string;
          answer_en: string;
          category_sw: string | null;
          category_en: string | null;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          question_sw: string;
          question_en: string;
          answer_sw: string;
          answer_en: string;
          category_sw?: string | null;
          category_en?: string | null;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          question_sw?: string;
          question_en?: string;
          answer_sw?: string;
          answer_en?: string;
          category_sw?: string | null;
          category_en?: string | null;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      cta_content: {
        Row: {
          id: string;
          title1_sw: string;
          title1_en: string;
          title2_sw: string;
          title2_en: string;
          sub_sw: string;
          sub_en: string;
          button_text_sw: string;
          button_text_en: string;
          background_image_url: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title1_sw: string;
          title1_en: string;
          title2_sw: string;
          title2_en: string;
          sub_sw: string;
          sub_en: string;
          button_text_sw: string;
          button_text_en: string;
          background_image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title1_sw?: string;
          title1_en?: string;
          title2_sw?: string;
          title2_en?: string;
          sub_sw?: string;
          sub_en?: string;
          button_text_sw?: string;
          button_text_en?: string;
          background_image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
          title_sw: string;
          title_en: string;
          slug_sw: string;
          slug_en: string;
          description_sw: string;
          description_en: string;
          short_description_sw: string | null;
          short_description_en: string | null;
          location_sw: string | null;
          location_en: string | null;
          client_name: string | null;
          project_type_sw: string | null;
          project_type_en: string | null;
          start_date: string | null;
          end_date: string | null;
          budget_range_sw: string | null;
          budget_range_en: string | null;
          status: 'planning' | 'in_progress' | 'completed' | 'on_hold';
          featured_image_url: string | null;
          gallery_images: string[] | null;
          features_sw: Json | null;
          features_en: Json | null;
          technologies_sw: string[] | null;
          technologies_en: string[] | null;
          is_featured: boolean;
          is_active: boolean;
          meta_title_sw: string | null;
          meta_title_en: string | null;
          meta_description_sw: string | null;
          meta_description_en: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title_sw: string;
          title_en: string;
          slug_sw: string;
          slug_en: string;
          description_sw: string;
          description_en: string;
          short_description_sw?: string | null;
          short_description_en?: string | null;
          location_sw?: string | null;
          location_en?: string | null;
          client_name?: string | null;
          project_type_sw?: string | null;
          project_type_en?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          budget_range_sw?: string | null;
          budget_range_en?: string | null;
          status?: 'planning' | 'in_progress' | 'completed' | 'on_hold';
          featured_image_url?: string | null;
          gallery_images?: string[] | null;
          features_sw?: Json | null;
          features_en?: Json | null;
          technologies_sw?: string[] | null;
          technologies_en?: string[] | null;
          is_featured?: boolean;
          is_active?: boolean;
          meta_title_sw?: string | null;
          meta_title_en?: string | null;
          meta_description_sw?: string | null;
          meta_description_en?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title_sw?: string;
          title_en?: string;
          slug_sw?: string;
          slug_en?: string;
          description_sw?: string;
          description_en?: string;
          short_description_sw?: string | null;
          short_description_en?: string | null;
          location_sw?: string | null;
          location_en?: string | null;
          client_name?: string | null;
          project_type_sw?: string | null;
          project_type_en?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          budget_range_sw?: string | null;
          budget_range_en?: string | null;
          status?: 'planning' | 'in_progress' | 'completed' | 'on_hold';
          featured_image_url?: string | null;
          gallery_images?: string[] | null;
          features_sw?: Json | null;
          features_en?: Json | null;
          technologies_sw?: string[] | null;
          technologies_en?: string[] | null;
          is_featured?: boolean;
          is_active?: boolean;
          meta_title_sw?: string | null;
          meta_title_en?: string | null;
          meta_description_sw?: string | null;
          meta_description_en?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      blog_categories: {
        Row: {
          id: string;
          name_sw: string;
          name_en: string;
          slug_sw: string;
          slug_en: string;
          description_sw: string | null;
          description_en: string | null;
          color: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name_sw: string;
          name_en: string;
          slug_sw: string;
          slug_en: string;
          description_sw?: string | null;
          description_en?: string | null;
          color?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name_sw?: string;
          name_en?: string;
          slug_sw?: string;
          slug_en?: string;
          description_sw?: string | null;
          description_en?: string | null;
          color?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      blog_posts: {
        Row: {
          id: string;
          title_sw: string;
          title_en: string;
          slug_sw: string;
          slug_en: string;
          excerpt_sw: string | null;
          excerpt_en: string | null;
          content_sw: string;
          content_en: string;
          featured_image_url: string | null;
          category_id: string | null;
          author_id: string | null;
          status: 'draft' | 'published' | 'archived';
          is_featured: boolean;
          published_at: string | null;
          meta_title_sw: string | null;
          meta_title_en: string | null;
          meta_description_sw: string | null;
          meta_description_en: string | null;
          tags_sw: string[] | null;
          tags_en: string[] | null;
          reading_time: number | null;
          view_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title_sw: string;
          title_en: string;
          slug_sw: string;
          slug_en: string;
          excerpt_sw?: string | null;
          excerpt_en?: string | null;
          content_sw: string;
          content_en: string;
          featured_image_url?: string | null;
          category_id?: string | null;
          author_id?: string | null;
          status?: 'draft' | 'published' | 'archived';
          is_featured?: boolean;
          published_at?: string | null;
          meta_title_sw?: string | null;
          meta_title_en?: string | null;
          meta_description_sw?: string | null;
          meta_description_en?: string | null;
          tags_sw?: string[] | null;
          tags_en?: string[] | null;
          reading_time?: number | null;
          view_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title_sw?: string;
          title_en?: string;
          slug_sw?: string;
          slug_en?: string;
          excerpt_sw?: string | null;
          excerpt_en?: string | null;
          content_sw?: string;
          content_en?: string;
          featured_image_url?: string | null;
          category_id?: string | null;
          author_id?: string | null;
          status?: 'draft' | 'published' | 'archived';
          is_featured?: boolean;
          published_at?: string | null;
          meta_title_sw?: string | null;
          meta_title_en?: string | null;
          meta_description_sw?: string | null;
          meta_description_en?: string | null;
          tags_sw?: string[] | null;
          tags_en?: string[] | null;
          reading_time?: number | null;
          view_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'blog_posts_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'blog_categories';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'blog_posts_author_id_fkey';
            columns: ['author_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          phone: string;
          email: string | null;
          project_type_sw: string | null;
          project_type_en: string | null;
          location: string | null;
          budget: string | null;
          message: string;
          status: 'new' | 'in_progress' | 'contacted' | 'quoted' | 'closed' | 'spam';
          notes: string | null;
          assigned_to: string | null;
          source: string;
          ip_address: string | null;
          user_agent: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          phone: string;
          email?: string | null;
          project_type_sw?: string | null;
          project_type_en?: string | null;
          location?: string | null;
          budget?: string | null;
          message: string;
          status?: 'new' | 'in_progress' | 'contacted' | 'quoted' | 'closed' | 'spam';
          notes?: string | null;
          assigned_to?: string | null;
          source?: string;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string;
          email?: string | null;
          project_type_sw?: string | null;
          project_type_en?: string | null;
          location?: string | null;
          budget?: string | null;
          message?: string;
          status?: 'new' | 'in_progress' | 'contacted' | 'quoted' | 'closed' | 'spam';
          notes?: string | null;
          assigned_to?: string | null;
          source?: string;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'contact_submissions_assigned_to_fkey';
            columns: ['assigned_to'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      newsletter_subscriptions: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          status: 'active' | 'unsubscribed' | 'bounced';
          source: string;
          confirmed_at: string | null;
          unsubscribed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          status?: 'active' | 'unsubscribed' | 'bounced';
          source?: string;
          confirmed_at?: string | null;
          unsubscribed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          status?: 'active' | 'unsubscribed' | 'bounced';
          source?: string;
          confirmed_at?: string | null;
          unsubscribed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      site_settings: {
        Row: {
          id: string;
          key: string;
          value: Json;
          description: string | null;
          is_public: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value: Json;
          description?: string | null;
          is_public?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          key?: string;
          value?: Json;
          description?: string | null;
          is_public?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_role: 'admin' | 'editor';
      project_status: 'planning' | 'in_progress' | 'completed' | 'on_hold';
      blog_status: 'draft' | 'published' | 'archived';
      contact_status: 'new' | 'in_progress' | 'contacted' | 'quoted' | 'closed' | 'spam';
      newsletter_status: 'active' | 'unsubscribed' | 'bounced';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};