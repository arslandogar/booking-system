import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://dbisqvwnliprndsizzrg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiaXNxdndubGlwcm5kc2l6enJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA3MjA1MjIsImV4cCI6MTk3NjI5NjUyMn0.TtYQsn9gSro-9JbOYOYUtm9YIpZ-oQoofwLiNw2RobQ'
);
