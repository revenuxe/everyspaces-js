-- Remove inline TOC from wardrobe article
UPDATE public.articles 
SET content = REGEXP_REPLACE(
  content, 
  '<h2>📑 Table of Contents</h2>\s*<ul>\s*(<li>.*?</li>\s*)*</ul>', 
  '', 
  'gs'
)
WHERE slug = 'wardrobe-design-ideas-bangalore-apartments';

-- Remove inline TOC from electronic city article (the "What You'll Learn" section acts as a TOC)
UPDATE public.articles 
SET content = REGEXP_REPLACE(
  content, 
  '<h3>📖 What You''ll Learn in This Guide</h3>\s*<ul>\s*(<li>.*?</li>\s*)*</ul>', 
  '', 
  'gs'
)
WHERE slug = 'end-to-end-interior-solutions-electronic-city-bangalore';