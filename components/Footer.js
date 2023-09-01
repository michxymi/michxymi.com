import MenuList from "../components/Navigation/MenuList";

const Footer = (props) => (
  <footer>
    <div className="footer footer-center bg-base-200 text-base-content rounded">
      <MenuList
        className="menu bg-base-200 lg:menu-horizontal rounded-box"
        items={props.menuItems}
      />
    </div>
  </footer>
);

export default Footer;
