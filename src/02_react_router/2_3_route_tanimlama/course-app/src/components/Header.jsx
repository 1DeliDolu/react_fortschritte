import { Link } from "react-router-dom";

const Header = () => (
    <header style={{ padding: "1rem", background: "#eee" }}>
        <nav>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/course">Course</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;