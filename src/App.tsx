import { Routes, Route, Link } from "react-router-dom";
import CoursesPage from "./pages/courses/CoursesPage";
import LessonsPage from "./pages/lessons/LessonsPage";
import CourseDetailsPage from "./pages/courses/CourseDetailsPage";
import Dashboardpage from "./pages/dashboard/DashboardPage";
import LessonDetailsPage from "./pages/lessons/LessonDetailsPage";

export default function App() {
  return (
    <div className="p-4 space-y-4 flex flex-col items-center">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/lessons">Lessons</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboardpage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/lessons/:id" element={<LessonDetailsPage />} />
      </Routes>
    </div>
  );
}
