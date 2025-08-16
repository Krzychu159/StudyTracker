import { getCourseById } from "../../services/coursesApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLessonsByCourseId } from "../../services/lessonsApi";

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

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Course:</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>{course?.title}</div>
            <div>{course?.description}</div>
            <div>{course?.progress}%</div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Lessons in this course:</h2>
        {loading ? (
          <div>Loading lessons...</div>
        ) : (
          <ul className="space-y-2">
            {lessons.map((lesson) => (
              <li
                key={lesson.id}
                className="p-2 border rounded bg-white shadow flex flex-row justify-between items-center max-w-md"
              >
                <div>
                  {" "}
                  <div className="font-semibold">{lesson.title}</div>
                  {lesson.done ? (
                    <div className="text-sm text-accent">Completed</div>
                  ) : (
                    <div className="text-sm text-secondary">Not completed</div>
                  )}
                </div>
                <div>
                  <button className="btn">
                    {" "}
                    {lesson.done ? "Unmark as done" : "Mark as done"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
