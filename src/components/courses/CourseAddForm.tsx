import { useState } from "react";
import { addCourse } from "../../services/coursesApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CourseAddForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAddCourse = () => {
    addCourse(title, description)
      .then(() => {
        setTitle("");
        setDescription("");
        toast.success("Course added successfully");
        navigate("/courses");
      })
      .catch((error) => {
        console.error("Error adding course:", error);
        toast.error("Failed to add course");
      });
  };

  return (
    <>
      <h1 className="text-xl ">Add new course</h1>
      <label htmlFor="title">Course title</label>
      <input
        type="text"
        placeholder="Title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border rounded px-3 py-2 min-w-[280px]"
      />
      <label htmlFor="desciption">Course description</label>
      <input
        type="text"
        placeholder="description"
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border rounded px-3 py-2 min-w-[280px]"
      />
      <button className="btn" onClick={() => handleAddCourse()}>
        Add Course
      </button>
    </>
  );
}
