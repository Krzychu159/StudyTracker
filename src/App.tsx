import { Routes, Route, Link } from "react-router-dom";
import CoursesPage from "./pages/courses/CoursesPage";
import LessonsPage from "./pages/lessons/LessonsPage";
import CourseDetailsPage from "./pages/courses/CourseDetailsPage";

function Home() {
  return <h1 className="text-2xl">Dashboard</h1>;
}

export default function App() {
  return (
    <div className="p-4 space-y-4">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/lessons">Lessons</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
      </Routes>
    </div>
  );
}
