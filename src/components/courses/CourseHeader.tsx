import { Link } from "react-router-dom";

export default function CoursesHeader() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div>Courses</div>
        <Link to="/courses/add">
          <div>+Add</div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-between ">
        <input
          type="text"
          className="border rounded px-3 py-2 flex-1 min-w-[280px]"
          placeholder="Search courses..."
        />
        <div className="flex flex-col ">
          <label htmlFor="min">Set min progress</label>
          <input type="range" id="min" min={1} max={100} defaultValue={1} />
        </div>
      </div>
    </div>
  );
}
