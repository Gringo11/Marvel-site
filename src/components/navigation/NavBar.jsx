import { Link } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="left-header">
        <span className="red">Marvel </span>information portal
      </div>
      <div className="navigation-buttons">
        <Link to="/" className="link">
          Characters
        </Link>
        /
        <Link to="/comics" className="link-2">
          Comics
        </Link>
      </div>
    </div>
  );
};
