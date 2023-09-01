import Link from "next/link";

const MenuList = (props) => (
  <ul tabIndex={0} className={props.className}>
    {props.items.map((item) => (
      <li key={item.label}>
        <Link href={item.url} key={item.label}>
          {item.icon}
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuList;
