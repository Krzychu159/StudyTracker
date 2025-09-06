import { getCourses } from "../../services/coursesApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Course = {
  id: number;
  title: string;
  progress: number;
};
export default function CoursesHeader() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseId, setCourseId] = useState<number>(0);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <>
      <h1 className="text-red font-bold mb-4">Lessons:</h1>

      <div>
        <Link to="/lessons/add">
          <button className="btn">Add new lesson</button>
        </Link>
        <div className="flex gap-5 py-3">
          <select
            name="courses"
            id="courses"
            onChange={(e) => setCourseId(Number(e.target.value))}
            value={courseId}
          >
            <option value="0">Course name</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
          <select name="done" id="done">
            <option value="null">Is completed?</option>
            <option value="done">Completed</option>
            <option value="not done">Not Coompleted</option>
          </select>
        </div>
      </div>
    </>
  );
}
