import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getLessonsByLessonId,
  changeLessonDone,
  deleteLesson,
} from "../../services/lessonsApi";
import { getCourseById } from "../../services/coursesApi";
import toast from "react-hot-toast";
import LessonDetailsData from "../../components/lessons/LessonDetailsData";
import LessonButtons from "../../components/lessons/LessonButtons";

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
  const [done, setDone] = useState<boolean | null>(null);
  const navigate = useNavigate();

  // Fetch lesson
  useEffect(() => {
    if (!id) return;

    async function fetchLesson() {
      setLoading(true);
      const { data, error } = await getLessonsByLessonId(Number(id));
      setDone(data.done);
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

  async function handleToggle() {
    if (!lesson) return;
    const newDone = !done;
    setDone(newDone);

    try {
      await changeLessonDone(lesson.id);
    } catch (error) {
      console.error("Error changing lesson done status:", error);
      setDone(!newDone); // Revert the change if there was an error
    }
  }

  async function handleDelete() {
    if (!lesson) return;
    if (window.confirm("Are you sure you want to delete this lesson?")) {
      try {
        await deleteLesson(lesson.id);
        navigate(`/courses/${lesson.course_id}`);
        toast.success("Lesson deleted successfully");
      } catch (error) {
        console.error("Error deleting lesson:", error);
      }
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 w-full max-w-[500px]">
      <LessonDetailsData
        lesson={lesson}
        course={course}
        handleToggle={handleToggle}
        done={done}
      />
      <LessonButtons handleDelete={handleDelete} lessonId={lesson?.id ?? 0} />
    </div>
  );
}
