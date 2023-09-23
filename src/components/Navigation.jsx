import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul id="nav-list">
        <li>
          <NavLink to="/">General</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/sports">Sports</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
