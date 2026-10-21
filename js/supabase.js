// Konfigurasi Klien Supabase
// Masukkan kredensial dari Checkpoint 3 pada Checkpoint 10
const SUPABASE_CONFIG = {
  URL: "https://gclteyozjfyebwzjuxjz.supabase.co",
  ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbHRleW96amZ5ZWJ3emp1eGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MjA2MDUsImV4cCI6MjEwODA5NjYwNX0.KXXZFOTj80CDfqlxWbRNk9APIh2H7P7kcdQeaVCKczc"
};

let db = null;

function getSupabaseClient() {
  if (!db && window.supabase) {
    if (!SUPABASE_CONFIG.URL || !SUPABASE_CONFIG.ANON_KEY) {
      console.warn("Supabase URL dan Anon Key belum dikonfigurasi di js/supabase.js");
    } else {
      db = window.supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
    }
  }
  return db;
}
