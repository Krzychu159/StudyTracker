import { Link } from "react-router-dom";

type CourseCardProps = {
  id: number;
  title: string;
  progress: number;
};

export default function CourseCard({ id, title, progress }: CourseCardProps) {
  const hue = (progress / 100) * 120; // 0 = red, 120 = green
  const lightness = 40 + (progress / 100) * 20; // 40% przy 0, 60% przy 100
  return (
    <li className="p-2 border rounded bg-white shadow h-20">
      <Link to={`/courses/${id}`}>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">Completed in {progress}%</div>
        <div className="h-1 w-full bg-gray-200 mt-2">
          <div
            className={`h-1 bg-red-400`}
            style={{
              width: `${progress}%`,
              backgroundColor: `hsl(${hue}, 80%, ${lightness}%)`,
            }}
          />
        </div>
      </Link>
    </li>
  );
}
