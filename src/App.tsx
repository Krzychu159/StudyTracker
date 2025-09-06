import { Routes, Route, Link } from "react-router-dom";
import CoursesPage from "./pages/courses/CoursesPage";
import LessonsPage from "./pages/lessons/LessonsPage";
import CourseDetailsPage from "./pages/courses/CourseDetailsPage";
import Dashboardpage from "./pages/dashboard/DashboardPage";
import LessonDetailsPage from "./pages/lessons/LessonDetailsPage";
import CoursesAddPage from "./pages/courses/CourseAddPage";
import LessonAddPage from "./pages/lessons/LessonAddPage";
import CoursesEditPage from "./pages/courses/CourseEditPage";
import { Toaster } from "react-hot-toast";
import "./App.css";
import LessonEditPage from "./pages/lessons/LessonEditPage";

export default function App() {
  return (
    <div className="p-4 space-y-4 flex flex-col items-center">
      <Toaster />
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/lessons">Lessons</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboardpage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/add" element={<CoursesAddPage />} />
        <Route path="/courses/edit/:id" element={<CoursesEditPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/lessons/add" element={<LessonAddPage />} />
        <Route path="/lessons/edit/:id" element={<LessonEditPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/lessons/:id" element={<LessonDetailsPage />} />
      </Routes>
    </div>
  );
}
