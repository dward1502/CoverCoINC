import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const isConfigured = Boolean(supabaseUrl && serviceRoleKey);

if (!isConfigured) {
  console.warn("Supabase server client: missing environment variables. Using fallback data.");
}

export function createServerClient() {
  return createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    serviceRoleKey || "placeholder",
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}

export function isSupabaseConfigured(): boolean {
  return isConfigured;
}
