import { Link } from "react-router-dom";

export default function CoursesHeader() {
  return (
    <>
      <h1 className="text-red font-bold mb-4">Courses:</h1>

      <Link to="/courses/add">
        <button className="btn">Add new course</button>
      </Link>
    </>
  );
}
