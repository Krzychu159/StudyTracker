export default function CourseButton({
  handleDelete,
}: {
  handleDelete: () => void;
}) {
  return (
    <div className="p-4 flex justify-around">
      <button className="btn" onClick={() => handleDelete()}>
        Delete Course
      </button>
      <button className="btn">Update Course</button>
    </div>
  );
}
