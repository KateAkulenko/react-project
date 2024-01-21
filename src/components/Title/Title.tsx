import PropTypes from 'prop-types'; // Якщо ви використовуєте PropTypes
import style from './Title.module.css';

const Title = ({ title }: { title: string }) => {
  return <h1 className={style.title}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;






