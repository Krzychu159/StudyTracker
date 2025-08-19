import { Link } from "react-router-dom";

type LessonCardProps = {
  id: number;
  title: string;
  done: boolean;
};

export default function LessonCard({ id, title, done }: LessonCardProps) {
  return (
    <li key={id} className=" p-2 border rounded  bg-white shadow">
      {" "}
      <Link to={`/lessons/${id}`}>
        <div className="font-semibold">{title}</div>

        {done ? (
          <div className="text-sm text-accent">Completed</div>
        ) : (
          <div className="text-sm text-secondary">Not completed</div>
        )}
      </Link>
    </li>
  );
}
