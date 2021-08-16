import Link from "next/Link";
import navStyle from "../styles/Nav.module.css";
const NavBar = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
