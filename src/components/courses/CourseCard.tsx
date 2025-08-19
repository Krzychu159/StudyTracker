import { Link } from "react-router-dom";

type CourseCardProps = {
  id: number;
  title: string;
  progress: number;
};

export default function CourseCard({ id, title, progress }: CourseCardProps) {
  return (
    <li className="p-2 border rounded bg-white shadow">
      <Link to={`/courses/${id}`}>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">Progress: {progress}%</div>
      </Link>
    </li>
  );
}
