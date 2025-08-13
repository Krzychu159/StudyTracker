import { useEffect, useState } from "react";
import { getCourses } from "../../services/coursesApi";
import { Link } from "react-router-dom";

type Course = {
  id: number;
  title: string;
  progress: number;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Courses:</h1>
      <ul className="space-y-2">
        {courses.map((course) => (
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
  );
}
