import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const handleClick = () => {
    setNavState(!navState);
  };
  return (
    <header>
      <nav class='navbar container'>
        <div class='navbar-brand'>
          <Link to='/'>Yum</Link>
        </div>
        <div class='menu-icon' onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class={navState ? 'navbar-nav open-nav' : 'navbar-nav'}>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/upload-recipe'>upload recipe</Link>
          </li>
          <li>
            <Link to='/register'>register</Link>
          </li>
          <li>
            <Link to='/login'>login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
