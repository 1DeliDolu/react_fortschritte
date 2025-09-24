import { NavLink, Outlet } from "react-router";

/**
 * MainLayout component that provides the main structure for the application.
 * Includes a navigation bar with links to Home, About, and Courses pages,
 * and renders nested routes via the <Outlet /> component.
 *
 * @component
 * @returns {JSX.Element} The rendered main layout with navigation and nested content.
 */
export default function MainLayout() {
  return (
    <div id="main-layout">
      <h1>Main Layout</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/courses">Courses</NavLink>
      </nav>
      <main>
        
        <Outlet />
      </main>
    </div>
  );
}
