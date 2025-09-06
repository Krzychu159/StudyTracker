type Course = {
  id: number;
  title: string;
  progress: number;
  description?: string;
};

type CourseDetailsDataProps = {
  course: Course | null;
};

export default function CourseDetailsData({ course }: CourseDetailsDataProps) {
  if (!course) return <p>No data of course</p>;

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Course:</h1>
      <div>
        <div>{course.title}</div>
        {course.description && <div>{course.description}</div>}
        <div>{course.progress}%</div>
      </div>
    </>
  );
}
