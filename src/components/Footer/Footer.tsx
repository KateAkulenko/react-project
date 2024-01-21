import style from './Footer.module.css';
import base from './../../base.module.css';
import Logo from './../Logo/Logo';
import Social from '../Social/Social';
import ContactsFooter from './../ContactsFooter/ContactsFooter';
import NavigationFooter from './../NavigationFooter/NavigationFooter';

function Footer() {
  return (
  <footer className={style.footer}>
    <div className={base.wrapper}>
      <div className={style.wrapper}>
        <div className={style.info}>
          <Logo />
          <p className={style.p}>Copyrights © 2024 Kateryna Akulenko</p>
        </div>
        <div>
          <ContactsFooter />
        </div>
        <div>
          <NavigationFooter />
        </div>
        <div className={style.social}>
          <Social />
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;