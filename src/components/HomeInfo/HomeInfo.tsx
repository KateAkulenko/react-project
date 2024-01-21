import style from './HomeInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function HomeInfo() {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <p className={style.subtitle}>Exclusive methods</p>
        <h3 className={style.title}>Our clinic</h3>
        <p className={style.text}>Our clinic of dietology, established in the year 2003, 
        stands as a beacon of health and wellness, transforming lives one person at a time. 
        With a mission to promote holistic well-being, we take pride in having assisted thousands 
        of individuals on their journey to a healthier and happier life. </p>
        <p className={style.subtitle}>Since 2003</p>
        <div className={style.learnMoreContainer}>
          <a href="/about" target="_blank" className={style.more}>
            Learn more
          </a>
          <FontAwesomeIcon icon={faArrowRight} className={style.arrowIcon} />
        </div>
      </div>
      <div className={style.imgWrapper}>
        <img src="/healthy-diet.png" alt="diet" className={style.img}/>
      </div>
    </div>
  );
}

export default HomeInfo;
