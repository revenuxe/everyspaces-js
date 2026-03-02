
-- Create storage bucket for AI design reports
INSERT INTO storage.buckets (id, name, public) VALUES ('design-reports', 'design-reports', true);

-- Allow anyone to read reports (public bucket)
CREATE POLICY "Anyone can view design reports"
ON storage.objects FOR SELECT
USING (bucket_id = 'design-reports');

-- Allow anonymous uploads (since users aren't authenticated)
CREATE POLICY "Anyone can upload design reports"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'design-reports');
