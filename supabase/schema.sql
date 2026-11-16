-- Kazoa Website Database Schema for Supabase
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USERS & AUTHENTICATION
-- ============================================

-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- SITE CONTENT MANAGEMENT
-- ============================================

-- Site configuration (global settings)
CREATE TABLE site_config (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value_sw JSONB NOT NULL,
  value_en JSONB NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON site_config FOR SELECT USING (true);
CREATE POLICY "Admin write access" ON site_config
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Hero section content
CREATE TABLE hero_content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  headline_sw TEXT NOT NULL,
  headline_en TEXT NOT NULL,
  subheadline_sw TEXT NOT NULL,
  subheadline_en TEXT NOT NULL,
  cta_primary_sw TEXT NOT NULL,
  cta_primary_en TEXT NOT NULL,
  cta_secondary_sw TEXT NOT NULL,
  cta_secondary_en TEXT NOT NULL,
  background_image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active hero" ON hero_content FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access hero" ON hero_content
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- About section content
CREATE TABLE about_content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  eyebrow_sw TEXT NOT NULL,
  eyebrow_en TEXT NOT NULL,
  title1_sw TEXT NOT NULL,
  title1_en TEXT NOT NULL,
  title2_sw TEXT NOT NULL,
  title2_en TEXT NOT NULL,
  p1_sw TEXT NOT NULL,
  p1_en TEXT NOT NULL,
  p2_sw TEXT NOT NULL,
  p2_en TEXT NOT NULL,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active about" ON about_content FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access about" ON about_content
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Construction Process Steps
CREATE TABLE process_steps (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  step_number INTEGER NOT NULL UNIQUE,
  title_sw TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_sw TEXT NOT NULL,
  description_en TEXT NOT NULL,
  details_sw TEXT[],
  details_en TEXT[],
  highlight_sw TEXT,
  highlight_en TEXT,
  image_url TEXT,
  image_alt_sw TEXT,
  image_alt_en TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE process_steps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active steps" ON process_steps FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access steps" ON process_steps
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Construction Stages (Main Layout)
CREATE TABLE construction_stages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name_sw TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_sw TEXT,
  description_en TEXT,
  display_order INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE construction_stages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active stages" ON construction_stages FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access stages" ON construction_stages
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Quality & Safety
CREATE TABLE quality_safety (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  eyebrow_sw TEXT NOT NULL,
  eyebrow_en TEXT NOT NULL,
  title1_sw TEXT NOT NULL,
  title1_en TEXT NOT NULL,
  title2_sw TEXT NOT NULL,
  title2_en TEXT NOT NULL,
  sub_sw TEXT NOT NULL,
  sub_en TEXT NOT NULL,
  note_sw TEXT,
  note_en TEXT,
  features_sw JSONB, -- Array of {title, description, icon}
  features_en JSONB,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE quality_safety ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active quality" ON quality_safety FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access quality" ON quality_safety
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Financial Section
CREATE TABLE financial_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title_sw TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_sw TEXT NOT NULL,
  description_en TEXT NOT NULL,
  icon_name TEXT NOT NULL, -- lucide icon name
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE financial_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active financial" ON financial_items FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access financial" ON financial_items
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Financial note
CREATE TABLE financial_note (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  note_sw TEXT NOT NULL,
  note_en TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE financial_note ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active note" ON financial_note FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access note" ON financial_note
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Project Journey
CREATE TABLE journey_steps (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  label_sw TEXT NOT NULL,
  label_en TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE journey_steps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active journey" ON journey_steps FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access journey" ON journey_steps
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Gallery Images
CREATE TABLE gallery_images (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title_sw TEXT,
  title_en TEXT,
  description_sw TEXT,
  description_en TEXT,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  category_sw TEXT,
  category_en TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active gallery" ON gallery_images FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access gallery" ON gallery_images
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- FAQ
CREATE TABLE faqs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  question_sw TEXT NOT NULL,
  question_en TEXT NOT NULL,
  answer_sw TEXT NOT NULL,
  answer_en TEXT NOT NULL,
  category_sw TEXT,
  category_en TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active faqs" ON faqs FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access faqs" ON faqs
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- CTA Section
CREATE TABLE cta_content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title1_sw TEXT NOT NULL,
  title1_en TEXT NOT NULL,
  title2_sw TEXT NOT NULL,
  title2_en TEXT NOT NULL,
  sub_sw TEXT NOT NULL,
  sub_en TEXT NOT NULL,
  button_text_sw TEXT NOT NULL,
  button_text_en TEXT NOT NULL,
  background_image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE cta_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active cta" ON cta_content FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access cta" ON cta_content
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- PROJECT PORTFOLIO
-- ============================================

CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title_sw TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug_sw TEXT UNIQUE NOT NULL,
  slug_en TEXT UNIQUE NOT NULL,
  description_sw TEXT NOT NULL,
  description_en TEXT NOT NULL,
  short_description_sw TEXT,
  short_description_en TEXT,
  location_sw TEXT,
  location_en TEXT,
  client_name TEXT,
  project_type_sw TEXT,
  project_type_en TEXT,
  start_date DATE,
  end_date DATE,
  budget_range_sw TEXT,
  budget_range_en TEXT,
  status TEXT DEFAULT 'completed' CHECK (status IN ('planning', 'in_progress', 'completed', 'on_hold')),
  featured_image_url TEXT,
  gallery_images TEXT[], -- Array of image URLs
  features_sw JSONB, -- Array of features
  features_en JSONB,
  technologies_sw TEXT[], -- Materials, techniques used
  technologies_en TEXT[],
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  meta_title_sw TEXT,
  meta_title_en TEXT,
  meta_description_sw TEXT,
  meta_description_en TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active projects" ON projects FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access projects" ON projects
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- BLOG / NEWS
-- ============================================

CREATE TABLE blog_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name_sw TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug_sw TEXT UNIQUE NOT NULL,
  slug_en TEXT UNIQUE NOT NULL,
  description_sw TEXT,
  description_en TEXT,
  color TEXT DEFAULT '#3B82F6',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read active categories" ON blog_categories FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full access categories" ON blog_categories
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE TABLE blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title_sw TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug_sw TEXT UNIQUE NOT NULL,
  slug_en TEXT UNIQUE NOT NULL,
  excerpt_sw TEXT,
  excerpt_en TEXT,
  content_sw TEXT NOT NULL, -- HTML/Markdown content
  content_en TEXT NOT NULL,
  featured_image_url TEXT,
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  meta_title_sw TEXT,
  meta_title_en TEXT,
  meta_description_sw TEXT,
  meta_description_en TEXT,
  tags_sw TEXT[],
  tags_en TEXT[],
  reading_time INTEGER, -- in minutes
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published posts" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Admin full access posts" ON blog_posts
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- CONTACT FORM SUBMISSIONS
-- ============================================

CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  project_type_sw TEXT,
  project_type_en TEXT,
  location TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'contacted', 'quoted', 'closed', 'spam')),
  notes TEXT, -- Admin notes
  assigned_to UUID REFERENCES profiles(id) ON DELETE SET NULL,
  source TEXT DEFAULT 'website', -- website, phone, referral, etc.
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public insert contact" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access contact" ON contact_submissions
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- NEWSLETTER SUBSCRIPTIONS
-- ============================================

CREATE TABLE newsletter_subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  source TEXT DEFAULT 'website',
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public insert newsletter" ON newsletter_subscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access newsletter" ON newsletter_subscriptions
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- SITE SETTINGS
-- ============================================

CREATE TABLE site_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  is_public BOOLEAN DEFAULT false, -- If true, accessible without auth
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read public settings" ON site_settings FOR SELECT USING (is_public = true);
CREATE POLICY "Admin full access settings" ON site_settings
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables with updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_config_updated_at BEFORE UPDATE ON site_config FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_hero_content_updated_at BEFORE UPDATE ON hero_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_about_content_updated_at BEFORE UPDATE ON about_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_process_steps_updated_at BEFORE UPDATE ON process_steps FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_construction_stages_updated_at BEFORE UPDATE ON construction_stages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_quality_safety_updated_at BEFORE UPDATE ON quality_safety FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_financial_items_updated_at BEFORE UPDATE ON financial_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_financial_note_updated_at BEFORE UPDATE ON financial_note FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_journey_steps_updated_at BEFORE UPDATE ON journey_steps FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_gallery_images_updated_at BEFORE UPDATE ON gallery_images FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_faqs_updated_at BEFORE UPDATE ON faqs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cta_content_updated_at BEFORE UPDATE ON cta_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_categories_updated_at BEFORE UPDATE ON blog_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_newsletter_subscriptions_updated_at BEFORE UPDATE ON newsletter_subscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INITIAL DATA
-- ============================================

-- Insert default site config
INSERT INTO site_config (key, value_sw, value_en, description) VALUES
('site_name', '"Kazoa"', '"Kazoa"', 'Site name'),
('phone', '"0621602069"', '"0621602069"', 'Contact phone'),
('email', '"Ngolovintan@ymail.com"', '"Ngolovintan@ymail.com"', 'Contact email'),
('location', '"Dar es Salaam"', '"Dar es Salaam"', 'Location'),
('whatsapp', '"255621602069"', '"255621602069"', 'WhatsApp number'),
('tagline', '"Ujenzi kwa Mpangilio, Ubora na Uwazi"', '"Construction with Planning, Quality and Transparency"', 'Site tagline')
ON CONFLICT (key) DO NOTHING;

-- Insert default financial items
INSERT INTO financial_items (title_sw, title_en, description_sw, description_en, icon_name, display_order) VALUES
('Vifaa', 'Materials', 'Gharama halisi ya materials zinazohitajika.', 'The real cost of materials needed.', 'package', 1),
('Usafiri', 'Transport', 'Gharama za kupeleka vifaa na wafanyakazi inapohitajika.', 'Costs of moving materials and workers where needed.', 'truck', 2),
('Labor Charge', 'Labor Charge', 'Malipo ya mafundi na wasaidizi kulingana na scope ya kazi.', 'Payment for craftsmen and helpers based on the scope of work.', 'users', 3),
('Overhead', 'Overhead', 'Usimamizi, mawasiliano, vifaa vidogo na gharama za uendeshaji.', 'Management, communication, small tools and running costs.', 'settings', 4),
('Faida', 'Profit', 'Kiasi kinachobaki kwa biashara baada ya gharama kuhesabiwa kwa usahihi.', 'What remains for the business after costs are calculated correctly.', 'trending-up', 5)
ON CONFLICT DO NOTHING;

-- Insert default financial note
INSERT INTO financial_note (note_sw, note_en) VALUES
('BOQ nzuri, mkataba wa wazi, kumbukumbu za matumizi, usimamizi wa ubora na mawasiliano mazuri na mteja husaidia kulinda faida na jina la fundi/contractor.',
 'A good BOQ, a clear contract, records of expenses, quality management and good communication with the client help protect the profit and the name of the fundi/contractor.')
ON CONFLICT DO NOTHING;

-- Insert default journey steps
INSERT INTO journey_steps (label_sw, label_en, icon_name, display_order) VALUES
('CLIENT', 'CLIENT', 'user', 1),
('SITE VISIT', 'SITE VISIT', 'map-pin', 2),
('MEASUREMENTS', 'MEASUREMENTS', 'ruler', 3),
('BOQ & PRICE', 'BOQ & PRICE', 'calculator', 4),
('CONTRACT', 'CONTRACT', 'file-text', 5),
('SITE PREPARATION', 'SITE PREPARATION', 'shovel', 6),
('CONSTRUCTION', 'CONSTRUCTION', 'hard-hat', 7),
('QUALITY CONTROL', 'QUALITY CONTROL', 'check-circle', 8),
('FINISHING', 'FINISHING', 'paintbrush', 9),
('FINAL INSPECTION', 'FINAL INSPECTION', 'search', 10),
('HANDOVER', 'HANDOVER', 'key', 11)
ON CONFLICT DO NOTHING;

-- Insert default construction stages
INSERT INTO construction_stages (name_sw, name_en, display_order) VALUES
('Kupima na Kuweka Alama', 'Setting-out', 1),
('Msingi', 'Foundation', 2),
('Ukuta wa Msingi', 'Foundation Wall', 3),
('Kujaza Ua', 'Backfilling', 4),
('Slab ya Sakafu', 'Ground Slab', 5),
('Kuta', 'Walls', 6),
('Nguzo / Ring Beam', 'Columns / Ring Beam', 7),
('Paazi', 'Roofing', 8),
('Maji na Umeme', 'Plumbing & Electrical', 9),
('Plasta', 'Plaster', 10),
('Dari', 'Ceiling', 11),
('Tiles', 'Tiles', 12),
('Milango na Madirisha', 'Doors & Windows', 13),
('Urangi', 'Painting', 14),
('Vifaa vya Mwisho', 'Fittings & Finishing', 15)
ON CONFLICT DO NOTHING;

-- Insert default blog categories
INSERT INTO blog_categories (name_sw, name_en, slug_sw, slug_en, description_sw, description_en, color) VALUES
('Ujenzi', 'Construction', 'ujenzi', 'construction', 'Makala kuhusu mbinu na teknolojia za ujenzi', 'Articles about construction methods and technologies', '#EF4444'),
('Ushauri', 'Advice', 'ushauri', 'advice', 'Ushauri na mwongozo kwa wateja na wafund', 'Advice and guides for clients and contractors', '#3B82F6'),
('Mipango', 'Planning', 'mipango', 'planning', 'Mipango na mpangilio wa miradi ya ujenzi', 'Planning and layout of construction projects', '#10B981'),
('Ubora', 'Quality', 'ubora', 'quality', 'Udhibiti wa ubora na viwango vya ujenzi', 'Quality control and construction standards', '#F59E0B')
ON CONFLICT DO NOTHING;

-- Insert site settings
INSERT INTO site_settings (key, value, description, is_public) VALUES
('maintenance_mode', 'false', 'Enable maintenance mode', true),
('contact_form_enabled', 'true', 'Enable contact form submissions', true),
('google_analytics_id', '""', 'Google Analytics Measurement ID', true),
('whatsapp_number', '"255621602069"', 'WhatsApp number for floating button', true)
ON CONFLICT (key) DO NOTHING;