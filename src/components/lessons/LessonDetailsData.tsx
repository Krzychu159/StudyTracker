import { Link } from "react-router-dom";
type Lessons = {
  id: number;
  course_id: number;
  title: string;
  done: boolean;
};

type Course = {
  id: number;
  title: string;
  progress: number;
};

type LessonDetailsDataProps = {
  lesson: Lessons | null;
  course: Course | null;
  done: boolean | null;
  handleToggle: () => void;
};

export default function LessonDetailsData({
  lesson,
  course,
  done,
  handleToggle,
}: LessonDetailsDataProps) {
  return (
    <div>
      <div className="p-4 ">{lesson?.title}</div>
      <div className="p-4">
        <div>
          <div>{done ? "Done" : "Not done"}</div>{" "}
          <button className="btn" onClick={handleToggle}>
            {done ? "Mark as not done" : "Mark as done"}
          </button>
        </div>
      </div>
      <Link to={`/courses/${lesson?.course_id}`}>
        {" "}
        <div className="p-4 text-secondary">
          This lesson is from course: {course?.title}
        </div>
      </Link>
    </div>
  );
}
