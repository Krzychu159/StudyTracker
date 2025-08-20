import { supabase } from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase.from("courses").select("*");

  if (error) {
    console.error("error courses:", error.message);
    return [];
  }

  return data || [];
}

export async function getCourseById(id: number) {
  return await supabase.from("courses").select("*").eq("id", id).single();
}

export async function deleteCourse(id: number) {
  const { error } = await supabase.from("courses").delete().eq("id", id);

  if (error) {
    console.error("Error deleting course:", error.message);
    throw error;
  }
  return true;
}

export async function addCourse(title: string, description: string) {
  const { data, error } = await supabase
    .from("courses")
    .insert([{ title, description }]);
  if (error) {
    console.error("error added courses:", error.message);
    throw error;
  }
  return data || [];
}
