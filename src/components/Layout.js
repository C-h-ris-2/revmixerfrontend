import { Outlet, Link } from "react-router-dom";
import './mainpage.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/mainpage">Main Page</Link>
          </li>
          <li>
            <Link to="/addnewsong">Add a new song!</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;