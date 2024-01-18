import styles from './Logo.module.css';

function Logo() {
  return (
    <a href="/" className={styles.logo} title="Home page">
      <img src="/logo233.png" alt="logo"></img>
    </a>
  );
}
export default Logo;
