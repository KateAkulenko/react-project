//styles
import style from './AboutInfo.module.css';
//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';

function AboutInfo() {
  return (
    <div className={style.wrapper}>
      <p className={style.pharagraf}>
        Our clinic of dietology, established in the year 2002, stands as a
        beacon of health and wellness, transforming lives one person at a time.
        With a mission to promote holistic well-being, we take pride in having
        assisted thousands of individuals on their journey to a healthier and
        happier life.
      </p>
      <h2 className={style.title}>
        <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />A
        Legacy of Health
      </h2>
      <p className={style.pharagraf}>
        Since our inception, our clinic has been dedicated to providing
        personalized and comprehensive dietological services. We believe in
        addressing not only the physical aspects of health but also the mental
        and emotional dimensions, recognizing that true well-being is a
        harmonious balance of these elements.
      </p>
      <h2 className={style.title}>
        <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />
        Transforming Thousands of Lives
      </h2>
      <p className={style.pharagraf}>
        The heartwarming stories of those we've had the privilege to help form
        the core of our success. Many individuals who walked through our doors
        burdened by health challenges have emerged with renewed vitality and
        resilience. Witnessing their transformation is a testament to the
        effectiveness of our approach.
      </p>
      <h2 className={style.title}>
        <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />
        Leading Healthy Lives
      </h2>
      <p className={style.pharagraf}>
        Today, a considerable number of our clients are not just recipients of
        our services but proud torchbearers of a healthy lifestyle. The impact
        of our clinic extends beyond the walls of our facility, as these
        individuals have embraced and incorporated wellness into their daily
        lives.
      </p>
      <h2 className={style.title}>
        <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />
        Our Holistic Approach
      </h2>
      <p className={style.pharagraf}>
        What sets us apart is our commitment to a holistic approach to
        dietology. Our experienced team of professionals considers not only
        dietary factors but also lifestyle, mental well-being, and individual
        preferences. This comprehensive methodology ensures that each person
        receives tailored guidance suited to their unique needs.
      </p>
      <h2 className={style.title}>
        <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />
        Looking Towards the Future
      </h2>
      <p className={style.pharagraf}>
        As we reflect on our journey thus far, we remain dedicated to pushing
        boundaries and exploring innovative ways to enhance the health and
        happiness of our community. The road ahead is filled with opportunities
        to continue making a positive impact on the lives of many more.
      </p>
      <p className={style.pharagraf}>
        In conclusion, our clinic of dietology is not just a healthcare
        provider; we are partners in the journey to better health. Join us as we
        celebrate the successes of the past and look forward to a future where
        everyone can lead a healthy and fulfilling life.
      </p>
    </div>
  );
}

export default AboutInfo;
