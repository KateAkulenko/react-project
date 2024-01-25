import style from './Navigation.module.css';
import { Link } from 'react-router-dom';
import cn from 'classnames';
type navigationPropsType = {
  isMobile: boolean;
};

function Navigation({isMobile}: navigationPropsType) {

  return (
    <nav className={cn([!isMobile ? style.list : style.listMobile])}>
      <Link to="/" className={style.link}>
        <div className={style.circle}></div>
        Home
      </Link>
      <Link to="/about" className={style.link}>
        <div className={style.circle}></div>
        About
      </Link>
      <Link to="/online-calculator" className={style.link}>
        <div className={style.circle}></div>
        Online-calculator
      </Link>
      <Link to="/contacts" className={style.link}>
        <div className={style.circle}></div>
        Contacts
      </Link>
    </nav>
  );
}

export default Navigation;
