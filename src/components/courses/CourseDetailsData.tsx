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
  const hue = (course.progress / 100) * 120;
  const lightness = 40 + (course.progress / 100) * 20; //
  return (
    <>
      <div className="flex flex-col gap-3 mb-5 ">
        <h1 className="text-xl font-bold ">{course.title}</h1>
        <h2 className="text-xs">
          {" "}
          {course.description && <>{course.description}</>}
        </h2>
        <h3 className="text-xs">Completed in {course.progress}%</h3>
        <div className="h-1 w-full bg-gray-200">
          <div
            className={`h-1 bg-red-400 `}
            style={{
              width: `${course.progress}%`,
              backgroundColor: `hsl(${hue}, 80%, ${lightness}%)`,
            }}
          />
        </div>
      </div>
    </>
  );
}
