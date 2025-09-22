import { Link } from "react-router-dom";
type Lesson = {
  id: number;
  title: string;
  done: boolean;
};

type LessonListProps = {
  lessons: Lesson[];
  slices?: number;
};

export default function CourseList({ lessons }: LessonListProps) {
  return (
    <div className="">
      <h2 className="text-xs font-semibold mb-2 ">Lessons in this course:</h2>
      <ul className="space-y-2 ">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className="p-2 border rounded bg-white shadow flex flex-row justify-between items-center "
          >
            <div>
              {" "}
              <div className="font-semibold">{lesson.title}</div>
              {lesson.done ? (
                <div className="text-sm text-accent">Completed</div>
              ) : (
                <div className="text-sm text-secondary">Not completed</div>
              )}
            </div>
            <div>
              <Link to={`/lessons/${lesson.id}`} className="btn">
                View Lesson
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
