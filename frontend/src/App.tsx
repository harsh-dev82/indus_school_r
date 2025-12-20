import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./admin/AdminLayout";
import ProtectedRoute from "./admin/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

/* ================= PUBLIC PAGES ================= */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Principal = lazy(() => import("./pages/Principal"));
const Notices = lazy(() => import("./pages/Notices"));

/* ================= ADMIN PAGES ================= */
const Login = lazy(() => import("./admin/Login"));
const ForgotPassword = lazy(() => import("./admin/ForgotPassword"));
const Dashboard = lazy(() => import("./admin/Dashboard"));
const GalleryAdmin = lazy(() => import("./admin/GalleryAdmin"));
const NoticesAdmin = lazy(() => import("./admin/NoticesAdmin"));

/* ================= FALLBACK ================= */
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-center">
    <div>
      <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-gray-600">Page not found</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-blue-700 font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>

          {/* ================= PUBLIC WEBSITE ================= */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/principal" element={<Principal />} />
            <Route path="/notices" element={<Notices />} />
          </Route>

          {/* ================= ADMIN AUTH ================= */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />

          {/* ================= ADMIN PANEL (PROTECTED) ================= */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="gallery" element={<GalleryAdmin />} />
            <Route path="notices" element={<NoticesAdmin />} />
          </Route>

          {/* ================= 404 ================= */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
