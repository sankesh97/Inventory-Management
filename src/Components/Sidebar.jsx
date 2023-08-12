import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const activeChecker = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link text-white';
  return (
    <>
      <ul className='nav nav-pills flex-column'>
        <li className='nav-item'>
          <NavLink to='/' className={activeChecker}>
            Dashboard
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/department' className={activeChecker}>
            Departments
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/products' className={activeChecker}>
            Products
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
