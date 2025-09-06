import { useEffect, useState } from "react";
import { getLessons } from "../../services/lessonsApi";
import LessonList from "../../components/lessons/LessonList";
import LessonHeader from "../../components/lessons/LessonHeader";

type Lessons = {
  id: number;
  title: string;
  done: boolean;
};

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lessons[]>([]);

  useEffect(() => {
    getLessons().then(setLessons);
  }, []);

  return (
    <div className="p-4 w-full max-w-[500px]">
      <LessonHeader />
      <LessonList lessons={lessons} slices={10} />
    </div>
  );
}
