//styles
import style from './HomeInfo.module.css';
//base
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HomeInfo() {
  return (
    <div className={style.wrapper}>
      {/* Left section containing textual information */}
      <div className={style.info}>
        <p className={style.subtitle}>Exclusive methods</p>
        {/* Title for the section */}
        <h3 className={style.title}>Our clinic</h3>
        {/* Main text describing the clinic */}
        <p className={style.text}>
          Our clinic of dietology, established in the year 2003, stands as a
          beacon of health and wellness, transforming lives one person at a
          time. With a mission to promote holistic well-being, we take pride in
          having assisted thousands of individuals on their journey to a
          healthier and happier life.{' '}
        </p>
        <p className={style.subtitle}>Since 2003</p>
        {/* Link to the "About" page */}
        <div className={style.learnMoreContainer}>
          <a href="/about" target="_blank" className={style.more}>
            Learn more
          </a>
          {/* FontAwesome arrow icon */}
          <FontAwesomeIcon icon={faArrowRight} className={style.arrowIcon} />
        </div>
      </div>
      {/* Right section containing an image */}
      <div className={style.imgWrapper}>
        <img src="/healthy-diet.png" alt="diet" className={style.img} />
      </div>
    </div>
  );
}

export default HomeInfo;
