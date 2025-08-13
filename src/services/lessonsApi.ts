import { supabase } from "./supabase";

export async function getLessons() {
  const { data, error } = await supabase.from("lessons").select("*");

  if (error) {
    console.error("error lessons:", error.message);
    return [];
  }

  return data || [];
}
