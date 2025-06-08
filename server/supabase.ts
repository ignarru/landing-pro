import "dotenv/config";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

interface DummyClient {
  from(): { insert(data: unknown): Promise<{ error: null }> };
}

let supabase: SupabaseClient | DummyClient;

export const supabaseConfigured = Boolean(
  process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const supabaseConfigured = Boolean(
  process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
);

const supabaseUrl = process.env.SUPABASE_URL as string;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

if (!supabaseUrl || !serviceKey) {
  console.warn(
    "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are not set; form submissions will be logged only."
  );
  supabase = {
    from() {
      return {
        async insert(_data: unknown) {
          console.log("contact submission", _data);
          return { error: null };
        },
      };
    },
  };
} else {
  supabase = createClient(supabaseUrl, serviceKey);
}

export { supabase };
