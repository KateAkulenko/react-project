import styles from './LearnMore.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

function LearnMore() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`${styles.container} ${inView ? styles.inView : ''}`}>
      <h2 className={styles.title}>More information about us</h2>
      <p className={styles.question}>Would you like to read customers reviews?</p>
      <div className={styles.learnMoreContainer}>
        <a href="/about" target="_blank" className={styles.more}>
          Learn more
        </a>
        <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
      </div>
      <p className={styles.question}>Would you like to calculate your body mass index?</p>
      <div className={styles.learnMoreContainer}>
        <a href="/online-calculator" target="_blank" className={styles.more}>
          Learn more
        </a>
        <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
      </div>
    </div>
  );
}

export default LearnMore;

