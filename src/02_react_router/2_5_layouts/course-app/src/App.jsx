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
import CoursesPage from "./pages/Courses";
import MainLayout from "./layouts/MainLayout";

// localhost:3000/
// localhost:3000/home
// localhost:3000/about
// localhost:3000/courses

/**
 * Defines the application's routing configuration using React Router.
 *
 * Routes:
 * - "/" (MainLayout)
 *   - index: Renders <HomePage />
 *   - "/home": Renders <HomePage />
 *   - "/about": Renders <AboutPage />
 *   - "/courses": Renders <CoursesPage />
 *
 * @constant
 * @type {import('react-router-dom').Router}
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
