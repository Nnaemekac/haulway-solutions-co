// Create a module to manage Supabase client creation
// supabase.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oecowxxcyzcaeaztfmqd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lY293eHhjeXpjYWVhenRmbXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MzEyODQsImV4cCI6MjAyNzMwNzI4NH0.gRx3hDGsbSn1BzdTPcbS8sjzyrxjujjDxfKyTh_NPzo"; // Your Supabase anonymous key

// Create and export a singleton instance of the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
