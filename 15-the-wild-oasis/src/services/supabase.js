import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lhkqmjchvldlsqzqyhnp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxoa3FtamNodmxkbHNxenF5aG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzODA4MzUsImV4cCI6MjA1NTk1NjgzNX0.QP-6OFINuTCTHwcHzDXfNKWjQfV7TqzKe3SXHc-LxT0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
