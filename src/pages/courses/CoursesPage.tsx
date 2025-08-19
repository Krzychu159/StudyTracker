import { useEffect, useState } from "react";
import { getCourses } from "../../services/coursesApi";
import CoursesHeader from "../../components/courses/CourseHeader";
import CourseList from "../../components/courses/CourseList";

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
    <div className="p-4 w-full max-w-[500px]">
      <CoursesHeader />
      <CourseList courses={courses} />
    </div>
  );
}
