import { getLessonsByLessonId } from "../../services/lessonsApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Lessons = {
  id: number;
  course_id: number;
  title: string;
  done: boolean;
};

export default function LessonEditForm() {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<Lessons | null>(null);
  useEffect(() => {
    if (!id) return;
    const fetchLesson = async () => {
      const course = await getLessonsByLessonId(parseInt(id, 10));
      console.log(course);
      setLesson(course.data || null);
    };
    fetchLesson();
  }, [id]);
  if (!id) return <p>No ID of lesson</p>;
  return (
    <div>
      <form className="flex flex-col gap-4 max-w-md">
        <label htmlFor="title">Change title</label>
        <input id="title" type="text" defaultValue={lesson?.title || ""} />
        <button className="btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
