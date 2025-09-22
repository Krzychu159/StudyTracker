import { Link } from "react-router-dom";

type CourseButtonsProps = {
  handleDelete: () => void;
  courseId: number;
};

export default function CourseButtons({
  courseId,
  handleDelete,
}: CourseButtonsProps) {
  return (
    <div className="py-4 flex justify-between flex-wrap gap-4">
      <button className="btn" onClick={handleDelete}>
        Delete Course
      </button>
      <Link to={`/courses/edit/${courseId}`}>
        <button className="btn">Edit Course</button>
      </Link>
      <Link to="/courses">
        <button className="btn">Back to Courses</button>
      </Link>
    </div>
  );
}
