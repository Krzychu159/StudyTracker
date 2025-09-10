import { getCourseById, updateCourse } from "../../services/coursesApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Course = {
  id: number;
  title: string;
  progress: number;
  description?: string | null;
};

export default function CourseEditForm() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await getCourseById(parseInt(id, 10));
        const c: Course | null = res.data || null;
        setCourse(c);
        setTitle(c?.title ?? "");
        setDescription(c?.description ?? "");
      } catch (e) {
        console.error(e);
        toast.error("Error loading course data");
      }
    })();
  }, [id]);

  if (!id) return <p>Brak ID kursu.</p>;
  if (!course) return <p>Ładowanie…</p>;

  const originalTitle = (course.title ?? "").trim();
  const originalDesc = (course.description ?? "").trim();

  const trimmedTitle = title.trim();
  const trimmedDesc = description.trim();

  const isTitleEmpty = trimmedTitle.length === 0;
  const isTitleSame = trimmedTitle === originalTitle;
  const isDescSame = trimmedDesc === originalDesc;

  // invalid if title is empty OR (title unchanged AND description unchanged)
  const isInvalid = isTitleEmpty || (isTitleSame && isDescSame);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;

    if (isTitleEmpty) {
      toast.error("Title should not be empty");
      return;
    }
    if (isTitleSame && isDescSame) {
      toast.error("Nothing to update");
      return;
    }

    try {
      const updated = await updateCourse(course.id, trimmedTitle, trimmedDesc);
      const ok = !!updated; // maybeSingle -> object or null
      if (!ok) {
        toast.error("Update failed (0 rows). Check RLS/ID.");
        return;
      }
      setCourse({ ...course, title: trimmedTitle, description: trimmedDesc });
      toast.success("Course updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Error updating course");
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4 max-w-md" onSubmit={handleSubmit}>
        <label htmlFor="title">Change title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Change description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
        />

        <button className={`btn ${isInvalid ? "btn-off" : ""}`} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
