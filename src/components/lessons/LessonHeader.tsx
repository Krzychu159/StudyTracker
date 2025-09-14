import { Link } from "react-router-dom";
import type { Done } from "../../hooks/useUrlFilters";

type Course = { id: number; title: string };

type Props = {
  q: string;
  done: Done;
  courseId: number | null;
  courses: Course[];
  onQueryChange: (q: string) => void;
  onDoneChange: (d: Done) => void;
  onCourseChange: (id: number | null) => void;
};

export default function LessonHeader({
  q,
  done,
  courseId,
  courses,
  onQueryChange,
  onDoneChange,
  onCourseChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <input
        value={q}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search lessons…"
        className="border rounded px-3 py-2 flex-1 min-w-[200px]"
      />

      <select
        value={done}
        onChange={(e) => onDoneChange(e.target.value as Done)}
        className="border rounded px-3 py-2"
      >
        <option value="all">All</option>
        <option value="true">Completed</option>
        <option value="false">Not completed</option>
      </select>

      <select
        value={courseId ?? ""}
        onChange={(e) => {
          const v = e.target.value;
          onCourseChange(v ? Number(v) : null);
        }}
        className="border rounded px-3 py-2"
      >
        <option value="">All courses</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.title}
          </option>
        ))}
      </select>
      <Link to="/lessons/add">
        <button className="btn">Add new lesson</button>
      </Link>
    </div>
  );
}
