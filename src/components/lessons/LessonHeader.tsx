import { getCourses } from "../../services/coursesApi";
import { useEffect, useState } from "react";

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
        <button className="btn">Add new lesson</button>
        <select
          name="courses"
          id="courses"
          onChange={(e) => setCourseId(Number(e.target.value))}
          value={courseId}
        >
          <option value="0">None</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
        <select name="done" id="done">
          <option value="done">Completed</option>
          <option value="not done">Not Coompleted</option>
        </select>
      </div>
    </>
  );
}
