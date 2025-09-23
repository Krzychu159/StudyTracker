import { getCourses } from "../../services/coursesApi";
import { addLesson } from "../../services/lessonsApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Course = {
  id: number;
  title: string;
  progress: number;
};

export default function LessonAddForm() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  const handleAddLesson = () => {
    if (courseId === 0 || title.trim() === "") {
      toast.error("Please select a course and enter a title");
      return;
    }
    addLesson(title, courseId)
      .then(() => {
        setTitle("");
        setCourseId(0);
        toast.success("lesson added successfully");
        navigate("/lessons");
      })
      .catch((error) => {
        console.error("Error adding lesson:", error);
        toast.error("Failed to add lesson");
      });
  };
  return (
    <>
      <h1 className="text-xl">Add new lesson</h1>
      <label htmlFor="courses">Choose course</label>
      <select
        name="courses"
        id="courses"
        onChange={(e) => setCourseId(Number(e.target.value))}
        value={courseId}
        className="border rounded px-3 py-2 min-w-[280px]"
      >
        <option value="0">None</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.title}
          </option>
        ))}
      </select>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border rounded px-3 py-2 min-w-[280px]"
      />
      <button className="btn" onClick={() => handleAddLesson()}>
        Add new lesson
      </button>
    </>
  );
}
