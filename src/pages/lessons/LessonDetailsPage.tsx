import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLessonsByLessonId } from "../../services/lessonsApi";
import { getCourseById } from "../../services/coursesApi";

type Lessons = {
  id: number;
  course_id: number;
  title: string;
  done: boolean;
};

type Course = {
  id: number;
  title: string;
  progress: number;
};

export default function LessonDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<Lessons | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch lesson
  useEffect(() => {
    if (!id) return;

    async function fetchLesson() {
      setLoading(true);
      const { data, error } = await getLessonsByLessonId(Number(id));
      if (error) {
        console.error("Error fetching lesson:", error.message);
      } else {
        setLesson(data);
      }
      setLoading(false);
    }

    fetchLesson();
  }, [id]);

  // Fetch course after lesson is loaded
  useEffect(() => {
    if (!lesson?.course_id) return;

    async function fetchCourse() {
      if (!lesson) return;
      setLoading(true);
      const { data, error } = await getCourseById(lesson?.course_id);
      if (error) {
        console.error("Error fetching course:", error.message);
      } else {
        setCourse(data);
      }
      setLoading(false);
    }

    fetchCourse();
  }, [lesson]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="p-4">{lesson?.title}</div>
      <div className="p-4">
        {lesson?.done ? <div>done</div> : <div>not done</div>}
      </div>
      <Link to={`/courses/${lesson?.course_id}`}>
        {" "}
        <div className="p-4 text-secondary">
          This lesson is from course: {course?.title}
        </div>
      </Link>
    </div>
  );
}
