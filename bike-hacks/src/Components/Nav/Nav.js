import {Link, Route, useLocation} from 'react-router-dom';

const Nav = () => {
const location = useLocation();
  console.log('location:', location);
  return (
    <header>
      <Link to="/" className="logo-block">
        <img src="/assets/logos/BikeHacks-Logo-Green.png" alt="Bike Hacks Logo" />
      </Link>
      {
        location.pathname !== '/' && (
          <nav>
            <Link to="/">Back to all tutorials</Link>
          </nav>
        )
      }
    </header>
  );
}
 
export default Nav;
