import { Link } from 'react-router-dom';
import AppLogo from './AppLogo';

const AppTitle = () => (
  <Link
    to="/"
    className="appTitle"
  >
    <AppLogo />
    Math Magicians
  </Link>
);

export default AppTitle;
