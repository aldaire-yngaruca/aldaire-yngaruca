import Link from "next/link";
import ThemeToggle from "../darkMode/button";

const NavBarLeft = () => {
  return (
    <div className="nav-left">
      <div className="nav-left-item">
        <Link href="/" className="nav-left-link is-pink">
          HOME
        </Link>
      </div>
      <div className="nav-line is-pink"></div>
      <div className="nav-left-item nav-copyright">
        <div className="copyright">
          ©/2025
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBarLeft;
