import { getCourseById } from "../../services/coursesApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  progress: number;
  description?: string;
};
export default function CourseEditForm() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchCourse = async () => {
      const course = await getCourseById(parseInt(id, 10));
      console.log(course);
      setCourse(course.data || null);
    };
    fetchCourse();
  }, [id]);

  if (!id) return <p>Brak ID kursu.</p>;
  return (
    <div>
      <form className="flex flex-col gap-4 max-w-md">
        <label htmlFor="title">Change title</label>
        <input id="title" type="text" defaultValue={course?.title || ""} />
        <label htmlFor="description">Change description</label>
        <textarea id="description" defaultValue={course?.description || ""} />
        <button className="btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
