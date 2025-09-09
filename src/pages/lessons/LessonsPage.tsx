import { useEffect, useMemo, useState } from "react";
import { useUrlFilters } from "../../hooks/useUrlFilters";
import { getLessons } from "../../services/lessonsApi";
import { getCourses } from "../../services/coursesApi";
import LessonHeader from "../../components/lessons/LessonHeader";
import LessonList from "../../components/lessons/LessonList";

type Lesson = { id: number; title: string; done: boolean; course_id: number };
type Course = { id: number; title: string };

export default function LessonsPage() {
  const { q, done, courseId, update } = useUrlFilters();

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getLessons().then(setLessons);
  }, []);
  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  const filtered = useMemo(() => {
    const qq = q.toLowerCase();
    return lessons
      .filter((l) => (courseId !== null ? l.course_id === courseId : true))
      .filter((l) =>
        done === "all" ? true : done === "true" ? l.done : !l.done
      )
      .filter((l) => (qq ? l.title.toLowerCase().includes(qq) : true));
  }, [lessons, q, done, courseId]);

  return (
    <div className="p-4 w-full max-w-[700px] space-y-4">
      <LessonHeader
        q={q}
        done={done}
        courseId={courseId}
        courses={courses}
        onQueryChange={(next) => update({ q: next })}
        onDoneChange={(next) => update({ done: next })}
        onCourseChange={(id) => update({ courseId: id })} // pass null to clear
      />
      <LessonList lessons={filtered} />
    </div>
  );
}
