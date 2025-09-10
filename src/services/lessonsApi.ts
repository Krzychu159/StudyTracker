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

export async function changeLessonDone(id: number) {
  const { data, error } = await supabase
    .from("lessons")
    .select("done")
    .eq("id", id)
    .single();

  if (error) throw error;
  if (!data) throw new Error("Lesson not found");

  const { data: update, error: updateError } = await supabase
    .from("lessons")
    .update({ done: !data.done })
    .eq("id", id);

  if (updateError) {
    throw updateError;
  }
  return update;
}

export async function deleteLesson(id: number) {
  const { error } = await supabase.from("lessons").delete().eq("id", id);

  if (error) {
    console.error("Error deleting lesson:", error.message);
    throw error;
  }
  return true;
}

export async function addLesson(title: string, courseId: number) {
  const { data, error } = await supabase
    .from("lessons")
    .insert([{ title, course_id: courseId }]);
  if (error) {
    console.error("error added lesson:", error.message);
    throw error;
  }
  return data || [];
}

export async function updateLesson(id: number, title: string) {
  const { data, error } = await supabase
    .from("lessons")
    .update({ title })
    .eq("id", id)
    .select();

  if (error) {
    console.error("error updating lesson:", error.message);
    throw error;
  }
  return data || [];
}
