import { useEffect, useState } from "react";
import { getLessons } from "../../services/lessonsApi";
import { Link } from "react-router-dom";

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
      <h1 className="text-xl font-bold mb-4">Lessons:</h1>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id} className=" p-2 border rounded  bg-white shadow">
            {" "}
            <Link to={`/lessons/${lesson.id}`}>
              <div className="font-semibold">{lesson.title}</div>
              <div className="text-sm text-gray-500">
                {lesson.done ? "Completed" : "Not completed"}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
