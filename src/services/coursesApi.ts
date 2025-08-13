import { supabase } from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase.from("courses").select("*");

  if (error) {
    console.error("Błąd pobierania kursów:", error.message);
    return [];
  }

  return data || [];
}
