import "../../css/layoutcss/layout.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <span>KLETOS</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>About Us</li>
        <li>
          <Link to="/faq">FAQs</Link>
        </li>
        <li>My Profile</li>
        <button>
          <Link to="/auth">Sign In</Link>
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
