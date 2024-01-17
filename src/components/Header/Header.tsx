import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <span>Logo</span>
      <nav style={{ display: 'flex', gap: 20 }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/about/detail'>About detail</Link>
        <Link to='/about/info'>About info</Link>
      </nav>
    </header>
  );
}

export default Header;
