import { getCourses } from "../../services/coursesApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLessons } from "../../services/lessonsApi";

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

export default function Dashboardpage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [lessons, setLessons] = useState<Lessons[]>([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);
  useEffect(() => {
    getLessons().then(setLessons);
  }, []);

  return (
    <div className="p-4 flex justify-center gap-8 w-full max-w-[500px]">
      <div>
        <ul className="space-y-2">
          <p>Lastest courses</p>
          {courses.slice(0, 8).map((course) => (
            <li key={course.id} className="p-2 border rounded bg-white shadow">
              <Link to={`/courses/${course.id}`}>
                <div className="font-semibold">{course.title}</div>
              </Link>
              <div className="text-sm text-gray-500">
                {course.progress}% ukończone
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <p>Latest lessons</p>
          {lessons.slice(0, 8).map((lesson) => (
            <li key={lesson.id} className="p-2 border rounded bg-white shadow">
              <Link to={`/lessons/${lesson.id}`}>
                <div className="font-semibold">{lesson.title}</div>
              </Link>
              <div className="text-sm text-gray-500">
                {lesson.done}% ukończone
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
