//*Base
import classNames from 'classnames';
//*Styles
import styles from './Button.module.css';

function Button({text = 'Default B txt', type = 'button', onClick, alertMode }) {
  const buttonStyles = [styles.button];

  if (alertMode) {
    buttonStyles.push(styles.alert);
  }

  return (
    <button type={type} className={classNames([buttonStyles])} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}

export default Button;