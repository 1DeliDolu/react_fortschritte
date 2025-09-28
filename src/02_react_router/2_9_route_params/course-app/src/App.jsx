// / => <Home />
// /about => <About />
// /courses => <Courses />

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage, { coursesLoader } from "./pages/Courses";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/help/ContactPage";
import FaqPage from "./pages/help/FaqPage";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailsPage, {
  courseDetailsLoader,
} from "./pages/CourseDetailsPage";

// localhost:3000/
// localhost:3000/home
// localhost:3000/about
// localhost:3000/courses

/**
 * Defines the application's route configuration using React Router.
 *
 * Routes:
 * - "/" (MainLayout)
 *   - index: HomePage
 *   - "home": HomePage
 *   - "about": AboutPage
 *   - "courses": CoursesPage (with coursesLoader)
 *   - "courses/:courseid": CourseDetailsPage (with courseDetailsLoader)
 *   - "help" (HelpLayout)
 *     - "contact": ContactPage
 *     - "faq": FaqPage
 *
 * Each route specifies its path, the component to render (`element`), and optional data loaders.
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage />, loader: coursesLoader },
      {
        path: "courses/:courseid",
        element: <CourseDetailsPage />,
        loader: courseDetailsLoader,
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FaqPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
