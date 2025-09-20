import CourseList from "../courses/CourseList";
import LessonList from "../lessons/LessonList";
import Loader from "../ui/Loader";
import { Link } from "react-router-dom";

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
  if (loading) return <Loader />;
  return (
    <>
      <div className="w-full max-w-[400px] mb-4 flex flex-col gap-5">
        <div className="flex justify-between items-baseline">
          <div className="text-s">Latest courses</div>{" "}
          <Link to={"/courses"} className="hover:underline cursor-pointer">
            <div className="text-xs">See more courses</div>
          </Link>
        </div>
        <CourseList courses={courses} slices={7} />
      </div>

      <div className="w-full max-w-[400px] mb-4 flex flex-col gap-5">
        <div className="flex justify-between items-baseline">
          <div className="text-s">Latest lessons</div>{" "}
          <Link to={"/lessons"} className="hover:underline cursor-pointer">
            <div className="text-xs">See more lessons</div>
          </Link>
        </div>
        <LessonList lessons={lessons} slices={7} />
      </div>
    </>
  );
}
