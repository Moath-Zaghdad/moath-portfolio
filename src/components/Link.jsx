import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children, className }) {
  const { navigate } = useContext(NavigationContext);

  const haldleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={haldleClick} className={className}>{children}</a>;
}

export default Link;
