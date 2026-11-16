import { supabase } from './client';
import type { Database } from './database.types';

// ============================================
// SITE CONFIG
// ============================================
export async function getSiteConfig() {
  const { data, error } = await supabase
    .from('site_config')
    .select('*');
  
  if (error) throw error;
  return data;
}

export async function getSiteConfigByKey(key: string) {
  const { data, error } = await supabase
    .from('site_config')
    .select('*')
    .eq('key', key)
    .single();
  
  if (error) throw error;
  return data;
}

// ============================================
// HERO CONTENT
// ============================================
export async function getActiveHeroContent() {
  const { data, error } = await supabase
    .from('hero_content')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllHeroContent() {
  const { data, error } = await supabase
    .from('hero_content')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// ============================================
// ABOUT CONTENT
// ============================================
export async function getActiveAboutContent() {
  const { data, error } = await supabase
    .from('about_content')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllAboutContent() {
  const { data, error } = await supabase
    .from('about_content')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// ============================================
// PROCESS STEPS
// ============================================
export async function getActiveProcessSteps() {
  const { data, error } = await supabase
    .from('process_steps')
    .select('*')
    .eq('is_active', true)
    .order('step_number', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getAllProcessSteps() {
  const { data, error } = await supabase
    .from('process_steps')
    .select('*')
    .order('step_number', { ascending: true });
  
  if (error) throw error;
  return data;
}

// ============================================
// CONSTRUCTION STAGES
// ============================================
export async function getActiveConstructionStages() {
  const { data, error } = await supabase
    .from('construction_stages')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getAllConstructionStages() {
  const { data, error } = await supabase
    .from('construction_stages')
    .select('*')
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

// ============================================
// QUALITY & SAFETY
// ============================================
export async function getActiveQualitySafety() {
  const { data, error } = await supabase
    .from('quality_safety')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllQualitySafety() {
  const { data, error } = await supabase
    .from('quality_safety')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// ============================================
// FINANCIAL ITEMS
// ============================================
export async function getActiveFinancialItems() {
  const { data, error } = await supabase
    .from('financial_items')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getAllFinancialItems() {
  const { data, error } = await supabase
    .from('financial_items')
    .select('*')
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getActiveFinancialNote() {
  const { data, error } = await supabase
    .from('financial_note')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();
  
  if (error) throw error;
  return data;
}

// ============================================
// JOURNEY STEPS
// ============================================
export async function getActiveJourneySteps() {
  const { data, error } = await supabase
    .from('journey_steps')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getAllJourneySteps() {
  const { data, error } = await supabase
    .from('journey_steps')
    .select('*')
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

// ============================================
// GALLERY IMAGES
// ============================================
export async function getActiveGalleryImages() {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getAllGalleryImages() {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

// ============================================
// FAQs
// ============================================
export async function getActiveFAQs() {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getAllFAQs() {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
}

// ============================================
// CTA CONTENT
// ============================================
export async function getActiveCTAContent() {
  const { data, error } = await supabase
    .from('cta_content')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllCTAContent() {
  const { data, error } = await supabase
    .from('cta_content')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// ============================================
// PROJECTS
// ============================================
export async function getActiveProjects(limit?: number) {
  let query = supabase
    .from('projects')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });
  
  if (limit) query = query.limit(limit);
  
  const { data, error } = await query;
  
  if (error) throw error;
  return data;
}

export async function getFeaturedProjects(limit = 6) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_active', true)
    .eq('is_featured', true)
    .order('created_at', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data;
}

export async function getProjectBySlug(slug: string, lang: 'sw' | 'en' = 'sw') {
  const column = lang === 'sw' ? 'slug_sw' : 'slug_en';
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq(column, slug)
    .eq('is_active', true)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// ============================================
// BLOG CATEGORIES
// ============================================
export async function getActiveBlogCategories() {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .eq('is_active', true)
    .order('name_sw', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getAllBlogCategories() {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name_sw', { ascending: true });
  
  if (error) throw error;
  return data;
}

// ============================================
// BLOG POSTS
// ============================================
export async function getPublishedBlogPosts(limit?: number) {
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      blog_categories (
        id,
        name_sw,
        name_en,
        slug_sw,
        slug_en,
        color
      ),
      profiles!blog_posts_author_id_fkey (
        id,
        full_name,
        avatar_url
      )
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  
  if (limit) query = query.limit(limit);
  
  const { data, error } = await query;
  
  if (error) throw error;
  return data;
}

export async function getFeaturedBlogPosts(limit = 3) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      blog_categories (
        id,
        name_sw,
        name_en,
        slug_sw,
        slug_en,
        color
      ),
      profiles!blog_posts_author_id_fkey (
        id,
        full_name,
        avatar_url
      )
    `)
    .eq('status', 'published')
    .eq('is_featured', true)
    .order('published_at', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data;
}

export async function getBlogPostBySlug(slug: string, lang: 'sw' | 'en' = 'sw') {
  const column = lang === 'sw' ? 'slug_sw' : 'slug_en';
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      blog_categories (
        id,
        name_sw,
        name_en,
        slug_sw,
        slug_en,
        color
      ),
      profiles!blog_posts_author_id_fkey (
        id,
        full_name,
        avatar_url
      )
    `)
    .eq(column, slug)
    .eq('status', 'published')
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      blog_categories (
        id,
        name_sw,
        name_en,
        slug_sw,
        slug_en,
        color
      ),
      profiles!blog_posts_author_id_fkey (
        id,
        full_name,
        avatar_url
      )
    `)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// ============================================
// CONTACT SUBMISSIONS
// ============================================
export async function createContactSubmission(submission: Omit<Database['public']['Tables']['contact_submissions']['Insert'], 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert(submission)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllContactSubmissions() {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select(`
      *,
      profiles!contact_submissions_assigned_to_fkey (
        id,
        full_name,
        email
      )
    `)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function updateContactSubmissionStatus(id: string, status: Database['public']['Tables']['contact_submissions']['Row']['status'], notes?: string) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .update({ status, notes })
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// ============================================
// NEWSLETTER
// ============================================
export async function subscribeToNewsletter(email: string, name?: string) {
  const { data, error } = await supabase
    .from('newsletter_subscriptions')
    .upsert({ email, name }, { onConflict: 'email' })
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// ============================================
// SITE SETTINGS
// ============================================
export async function getPublicSiteSettings() {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .eq('is_public', true);
  
  if (error) throw error;
  return data;
}

export async function getSiteSetting(key: string) {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .eq('key', key)
    .single();
  
  if (error) throw error;
  return data;
}

// ============================================
// IMAGE UPLOAD
// ============================================
export async function uploadImage(file: File, bucket: string = 'images', folder: string = '') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = folder ? `${folder}/${fileName}` : fileName;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path);

  return publicUrl;
}

export async function deleteImage(url: string, bucket: string = 'images') {
  const path = url.split(`/${bucket}/`)[1];
  if (!path) return;

  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);

  if (error) throw error;
}

// ============================================
// AUTH HELPERS
// ============================================
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
}

export async function getCurrentProfile() {
  const user = await getCurrentUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function signUp(email: string, password: string, fullName: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });
  if (error) throw error;
  return data;
}

export function onAuthStateChange(callback: (event: string, session: any) => void) {
  return supabase.auth.onAuthStateChange(callback);
}