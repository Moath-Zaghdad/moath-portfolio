import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import Link from './Link';
import portfolioLogo from '../assets/MZ.svg'

function Navbar() {
  const { currentPath } = useContext(NavigationContext);

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about-me' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Me', path: '/contact-me' },
  ];

  const renderedLinks = links.map((link) => {
    const className = `nav-item${currentPath === link.path ? ' active' : ''}`;

    return (
      <li className={className} key={link.label}>
        <Link to={link.path} className="nav-link">{link.label}</Link>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to='/' className="navbar-brand mx-4">
        <img alt="" src={portfolioLogo} />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">

        <ul className="navbar-nav">
          {renderedLinks}
        </ul>

      </div>

    </nav>
  );
}
export default Navbar;
