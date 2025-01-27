import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left logo">
          <a href="/">Coffeemo</a>
        </div>
        <div className="navbar-center">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
