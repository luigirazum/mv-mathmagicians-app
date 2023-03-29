import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navDefinition = '1,/,home]-[2,/calculator,calculator]-[3,/quote,quote';
  const navElements = navDefinition.split(']-[');
  const navItems = navElements.map((navItem) => {
    const navItemConfig = navItem.split(',');
    const [id, path, name] = navItemConfig;

    return (
      <li key={id}>
        <NavLink to={path}>
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>
        {navItems}
      </ul>
    </nav>
  );
};

export default NavBar;
