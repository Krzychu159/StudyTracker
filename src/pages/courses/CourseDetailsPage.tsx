import { deleteCourse, getCourseById } from "../../services/coursesApi";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLessonsByCourseId } from "../../services/lessonsApi";
import toast from "react-hot-toast";
import CourseButtons from "../../components/courses/CourseButtons";
import CourseDetailsData from "../../components/courses/CourseDetailsData";
import CourseDetailsLessonsList from "../../components/courses/CourseDetailsLessonsList";

type Course = {
  id: number;
  title: string;
  progress: number;
  description: string;
};

type Lessons = {
  id: number;
  title: string;
  done: boolean;
};

export default function CoursesPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [lessons, setLessons] = useState<Lessons[]>([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!id) return;

    async function fetchLessons() {
      setLoading(true);
      const { data, error } = await getLessonsByCourseId(Number(id));
      if (error) {
        console.error("Error fetching course:", error.message);
      } else {
        setLessons(data);
      }
      setLoading(false);
    }
    fetchLessons();
  }, [id]);

  async function handleDelete() {
    if (!course) return;
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(course.id);
        navigate(`/courses`);
        toast.success("Lesson deleted successfully");
      } catch (error) {
        console.error("Error deleting lesson:", error);
      }
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="p-4 w-full max-w-[500px]">
        <CourseDetailsData course={course} />
        <CourseDetailsLessonsList lessons={lessons} />
        <CourseButtons handleDelete={handleDelete} courseId={course?.id ?? 0} />
      </div>
    </>
  );
}
