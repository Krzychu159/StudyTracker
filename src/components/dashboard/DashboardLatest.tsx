import CourseList from "../courses/CourseList";
import LessonList from "../lessons/LessonList";

type Course = {
  id: number;
  title: string;
  progress: number;
  description: string;
};

type Lesson = {
  id: number;
  title: string;
  done: boolean;
};

type DashboardLatestProps = {
  courses: Course[];
  lessons: Lesson[];
  loading: boolean;
};

export default function DashboardLatest({
  courses,
  lessons,
  loading,
}: DashboardLatestProps) {
  return (
    <>
      <div className="w-full max-w-[400px] mb-4">
        <p>Latest courses</p>
        {loading ? <div className="text-center">Loading...</div> : null}
        <CourseList courses={courses} slices={7} />
      </div>

      <div className="w-full max-w-[400px] mb-4">
        <p>Latest lessons</p>
        {loading ? <div className="text-center">Loading...</div> : null}
        <LessonList lessons={lessons} slices={7} />
      </div>
    </>
  );
}
