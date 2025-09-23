import { getLessonsByLessonId, updateLesson } from "../../services/lessonsApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Lessons = {
  id: number;
  course_id: number;
  title: string;
  done: boolean;
};

export default function LessonEditForm() {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<Lessons | null>(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!id) return;
    (async () => {
      const course = await getLessonsByLessonId(parseInt(id, 10));
      const l = course.data || null;
      setLesson(l);
      setTitle(l?.title ?? "");
    })();
  }, [id]);

  const trimmed = title.trim();
  const isEmpty = trimmed.length === 0;
  const isSame = trimmed === lesson?.title;
  const isInvalid = isEmpty || isSame;

  const editLesson = async () => {
    if (!lesson) return;

    if (isEmpty) {
      toast.error("Title cannot be empty");
      return;
    }
    if (isSame) {
      toast.error("Title should not be the same");
      return;
    }

    try {
      const updated = await updateLesson(lesson.id, trimmed);
      if (!updated || updated.length === 0) {
        toast.error("Update failed (0 rows). Check RLS/ID.");
        return;
      }
      setLesson({ ...lesson, title: trimmed });
      toast.success("Lesson updated successfully");
    } catch (error) {
      console.error("Error updating lesson:", error);
      toast.error("Failed to update lesson");
    }
  };

  if (!id) return <p>No ID of lesson</p>;
  return (
    <div>
      <form
        className="flex flex-col gap-4 max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          editLesson();
        }}
      >
        <label htmlFor="title">Change title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-2 min-w-[280px]"
        />
        <button className={`btn ${isInvalid ? "btn-off" : ""}`} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
