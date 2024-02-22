import "../App.css";
const NavBar = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
        </div>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default NavBar;
