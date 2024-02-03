//style
import style from './NavigationFooter.module.css';

function NavigationFooter() {
  return (
    <div className={style.wrapper}>
      <p>
        <a href="/" target="_blank" className={style.contact}>
          Home
        </a>
      </p>
      <p>
        <a href="/about" target="_blank" className={style.contact}>
          About
        </a>
      </p>
      <p>
        <a href="/online-calculator" target="_blank" className={style.contact}>
          Online-calculator
        </a>
      </p>
      <p>
        <a href="/contacts" target="_blank" className={style.contact}>
          Contacts
        </a>
      </p>
    </div>
  );
}

export default NavigationFooter;
