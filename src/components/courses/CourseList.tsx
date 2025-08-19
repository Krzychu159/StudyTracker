import CourseCard from "./CourseCard";

type Course = {
  id: number;
  title: string;
  progress: number;
};

type CourseListProps = {
  courses: Course[];
  slices?: number;
};

export default function CourseList({ slices, courses }: CourseListProps) {
  return (
    <ul className="space-y-2">
      {courses.slice(0, slices).map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          progress={course.progress}
        />
      ))}
    </ul>
  );
}
