import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mpfaxubkxuwolbkkdbkr.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wZmF4dWJreHV3b2xia2tkYmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMDA3NDgsImV4cCI6MjA3NDg3Njc0OH0.eOlLtcmkrGWq3EZI2oIq5rSOlS5TlTFxBJfm1yLsqec"; 

export const supabase = createClient(supabaseUrl, supabaseKey);
