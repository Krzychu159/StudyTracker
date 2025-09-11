import { getCourses } from "../../services/coursesApi";

import { useEffect, useState } from "react";
import { getLessons } from "../../services/lessonsApi";
import DashboardLatest from "../../components/dashboard/DashboardLatest";

type Course = {
  id: number;
  title: string;
  progress: number;
  description: string;
};

type Lessons = {
  id: number;
  title: string;
  done: boolean;
};

export default function Dashboardpage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [lessons, setLessons] = useState<Lessons[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCourses().then(setCourses);
    setLoading(false);
  }, []);
  useEffect(() => {
    setLoading(true);
    getLessons().then(setLessons);
    setLoading(false);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[700px] p-4 flex justify-center gap-6">
      <DashboardLatest courses={courses} lessons={lessons} loading={loading} />
    </div>
  );
}
