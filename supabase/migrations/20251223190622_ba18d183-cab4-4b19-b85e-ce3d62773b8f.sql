-- Create articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  meta_title TEXT,
  meta_description TEXT,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url TEXT,
  author TEXT DEFAULT 'Intorza Team',
  category TEXT,
  keywords TEXT[],
  tags TEXT[],
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  reading_time INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Public can read published articles
CREATE POLICY "Anyone can view published articles" 
ON public.articles 
FOR SELECT 
USING (status = 'published');

-- Admins can do everything
CREATE POLICY "Admins can manage all articles" 
ON public.articles 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_articles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_articles_updated_at();

-- Create index for faster slug lookups
CREATE INDEX idx_articles_slug ON public.articles(slug);
CREATE INDEX idx_articles_status ON public.articles(status);
CREATE INDEX idx_articles_category ON public.articles(category);
CREATE INDEX idx_articles_published_at ON public.articles(published_at DESC);