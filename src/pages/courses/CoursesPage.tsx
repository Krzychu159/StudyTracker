import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") ?? "";
  const rawMin = Number(searchParams.get("min") ?? "1");
  const min = Number.isFinite(rawMin) ? Math.min(100, Math.max(1, rawMin)) : 1;

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  const updateParams = (next: Partial<{ q: string; min: number }>) => {
    const current = Object.fromEntries(searchParams.entries()) as Record<
      string,
      string
    >;
    const merged = {
      ...current,
      ...(next.q !== undefined ? { q: next.q } : {}),
      ...(next.min !== undefined ? { min: String(next.min) } : {}),
    };

    if (!merged.q) delete merged.q;
    if (!merged.min || merged.min === "1") delete merged.min;

    setSearchParams(merged, { replace: true });
  };

  const onQueryChange = (nextQ: string) => updateParams({ q: nextQ });
  const onMinChange = (nextMin: number) => updateParams({ min: nextMin });

  const filtered = useMemo(() => {
    const qq = q.toLowerCase();
    return courses
      .filter((c) => (qq ? c.title.toLowerCase().includes(qq) : true))
      .filter((c) => c.progress >= min);
  }, [courses, q, min]);

  return (
    <div className="p-4 w-full max-w-[700px] space-y-4">
      <CoursesHeader
        q={q}
        min={min}
        onQueryChange={onQueryChange}
        onMinChange={onMinChange}
      />
      <CourseList courses={filtered} />
    </div>
  );
}
