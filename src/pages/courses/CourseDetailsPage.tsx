import { getCourseById } from "../../services/coursesApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  progress: number;
};

export default function CoursesPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchCourse() {
      setLoading(true);
      const { data, error } = await getCourseById(Number(id));
      if (error) {
        console.error("Error fetching course:", error.message);
      } else {
        setCourse(data);
      }
      setLoading(false);
    }
    fetchCourse();
  }, [id]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Course:</h1>
      {loading ? <div>Loading...</div> : course?.title}
    </div>
  );
}
