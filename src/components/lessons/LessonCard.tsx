import { Link } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

type LessonCardProps = {
  id: number;
  title: string;
  done: boolean;
};

export default function LessonCard({ id, title, done }: LessonCardProps) {
  return (
    <li key={id} className=" p-2 border rounded  bg-white shadow h-20">
      {" "}
      <Link to={`/lessons/${id}`}>
        <div className="font-semibold">{title}</div>

        {done ? (
          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
            <CheckCircle size={16} /> Completed
          </div>
        ) : (
          <div className="flex items-center gap-1 text-red-600 text-sm font-medium">
            <XCircle size={16} /> Incomplete
          </div>
        )}
        <div className="h-1 w-full bg-gray-200 mt-2">
          <div
            className={`h-1 ${
              done ? "bg-green-500 w-full" : "bg-red-400 w-2/12"
            }`}
          />
        </div>
      </Link>
    </li>
  );
}
