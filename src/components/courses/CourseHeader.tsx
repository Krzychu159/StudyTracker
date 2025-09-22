import { Link } from "react-router-dom";

type Props = {
  q: string;
  min: number; // 1–100
  onQueryChange: (q: string) => void;
  onMinChange: (min: number) => void;
};

export default function CoursesHeader({
  q,
  min,
  onQueryChange,
  onMinChange,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div className="font-semibold">Courses</div>
        <Link to="/courses/add">
          <div className="text-blue-600 hover:underline">+Add</div>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-between">
        <input
          type="text"
          className="border rounded px-3 py-2 flex-1 min-w-[280px]"
          placeholder="Search courses..."
          value={q}
          onChange={(e) => onQueryChange(e.target.value)}
        />

        <div className="flex flex-col">
          <label htmlFor="min" className="text-sm">
            Set min progress: <span className="font-medium">{min}%</span>
          </label>
          <input
            id="min"
            type="range"
            min={1}
            max={100}
            value={min}
            onChange={(e) => onMinChange(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
