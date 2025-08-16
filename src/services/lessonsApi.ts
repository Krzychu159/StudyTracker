import { supabase } from "./supabase";

export async function getLessons() {
  const { data, error } = await supabase.from("lessons").select("*");

  if (error) {
    console.error("error lessons:", error.message);
    return [];
  }

  return data || [];
}
export async function getLessonsByCourseId(id: number) {
  return await supabase.from("lessons").select("*").eq("course_id", id);
}
export async function getLessonsByLessonId(id: number) {
  return await supabase.from("lessons").select("*").eq("id", id).single();
}
