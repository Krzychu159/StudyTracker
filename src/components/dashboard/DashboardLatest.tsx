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
      <div>
        <p>Latest courses</p>
        {loading ? <div className="text-center">Loading...</div> : null}
        <CourseList courses={courses} slices={8} />
      </div>

      <div>
        <p>Latest lessons</p>
        {loading ? <div className="text-center">Loading...</div> : null}
        <LessonList lessons={lessons} slices={8} />
      </div>
    </>
  );
}
