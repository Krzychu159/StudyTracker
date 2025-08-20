export default function LessonButtons({
  handleDelete,
}: {
  handleDelete: () => void;
}) {
  return (
    <div className="p-4 flex justify-around">
      <button className="btn" onClick={() => handleDelete()}>
        Delete lesson
      </button>
      <button className="btn">Update lesson</button>
    </div>
  );
}
