import './header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/books">Book</NavLink></li>
    </ul>
  );
}
export default Header;