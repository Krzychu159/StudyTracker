import LessonCard from "./LessonCard";

type Lesson = {
  id: number;
  title: string;
  done: boolean;
};

type LessonListProps = {
  lessons: Lesson[];
  slices?: number;
};

export default function CourseList({ slices, lessons }: LessonListProps) {
  return (
    <ul className="space-y-2">
      {lessons.slice(0, slices).map((lesson) => (
        <LessonCard
          key={lesson.id}
          id={lesson.id}
          title={lesson.title}
          done={lesson.done}
        />
      ))}
    </ul>
  );
}
