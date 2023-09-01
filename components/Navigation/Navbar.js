import MenuList from "./MenuList";
import { Hamburger } from "../Icons";

const Navbar = (props) => {
  const mobileMenu = (
    <MenuList
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
      items={props.menuItems}
    />
  );

  const desktopMenu = (
    <MenuList className="menu menu-horizontal px-1" items={props.menuItems} />
  );

  return (
    <header>
      <nav className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Hamburger />
            </label>
            {mobileMenu}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">{desktopMenu}</div>
        <div className="navbar-end" />
      </nav>
    </header>
  );
};

export default Navbar;
