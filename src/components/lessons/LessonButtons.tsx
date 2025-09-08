import { Link } from "react-router-dom";

type LessonButtonsProps = {
  handleDelete: () => void;
  lessonId: number;
};

export default function LessonButtons({
  handleDelete,
  lessonId,
}: LessonButtonsProps) {
  return (
    <div className="p-4 flex justify-around">
      <button className="btn" onClick={handleDelete}>
        Delete lesson
      </button>

      <Link to={`/lessons/edit/${lessonId}`}>
        <button className="btn">Edit lesson</button>
      </Link>

      <Link to="/lessons">
        <button className="btn">Back to Lessons</button>
      </Link>
    </div>
  );
}
