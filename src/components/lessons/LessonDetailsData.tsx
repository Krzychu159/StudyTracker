import { Link } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { TbHandFingerRight } from "react-icons/tb";

import { RxCross1 } from "react-icons/rx";

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
      <div className="text-xl font-bold mb-5">{lesson?.title}</div>
      <div className="">
        <div
          className={`flex justify-between gap-3 items-center mb-5 border-2 p-3 rounded-lg ${
            done ? "border-green-500" : "border-red-500"
          }`}
        >
          {done ? (
            <div className="flex items-center gap-2 badge badge-success text-xl text-green-500">
              <MdDone size={22} />
              Complete
            </div>
          ) : (
            <div className="flex items-center gap-2 badge badge-warning text-xl text-red-500">
              <RxCross1 size={22} />
              Incomplete
            </div>
          )}
          <button className="btn" onClick={handleToggle}>
            {done ? "Mark as not done" : "Mark as done"}
          </button>
        </div>
      </div>
      <Link to={`/courses/${lesson?.course_id}`}>
        {" "}
        <div className=" text-primary flex items-center gap-2 font-medium">
          <TbHandFingerRight />
          This lesson is from course {course?.title}
        </div>
      </Link>
    </div>
  );
}
