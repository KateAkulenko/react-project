import style from './BodyMassInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';

function BodyMassInfo() {
  return (
    <>
      <h2 className={style.titlemain}>About BMI</h2>
      <div className={style.wrapper}>
      <h2 className={style.title}>
          <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />What is BMI
        </h2>
        <p className={style.pharagraf}>
          Body Mass Index, or BMI, is a numerical value of a person's weight in
          relation to their height. It is a widely used screening tool to
          identify possible weight-related health issues. BMI is a simple and
          quick method that provides a general indication of whether an
          individual falls within a healthy weight range. To calculate BMI, the
          weight of an individual in kilograms is divided by the square of their
          height in meters.  </p>
          <h2 className={style.title}>
          <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />The measurement
        </h2>
          <p className={style.pharagraf}>The resulting number is categorized into different
          ranges: 
          <p className={style.measurement}>< br />BMI less than 18.5 - underweight < br /> BMI between
          18.5 and 24.9 - normal weight< br /> BMI between 25 and 29.9 - overweight< br /> BMI of 30 or
          greater - obese</p> </p>
          
          <h2 className={style.title}>
          <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />True about BMI</h2>
          <p className={style.pharagraf}> While BMI is a useful screening tool, it doesn't directly
          measure body fat and may not be suitable for everyone. For instance,
          athletes with high muscle mass may have a higher BMI, despite having a
          lower percentage of body fat. Additionally, BMI doesn't account for
          the distribution of fat in the body, which is relevant to health.
          Understanding your BMI can be a starting point for assessing your
          weight and health. If you find that your BMI falls outside the normal
          range, it's essential to consult with a healthcare professional for a
          more comprehensive evaluation. </p>
          <h2 className={style.title}>
          <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />Factors affecting on indicators</h2>
          <p className={style.pharagraf}> A healthcare provider can consider
          other factors, such as age, gender, muscle mass, and overall health,
          to provide a more accurate assessment. Maintaining a healthy BMI is
          associated with a lower risk of various health conditions, including
          heart disease, diabetes, and certain types of cancers. However, it's
          crucial to adopt a holistic approach to health, including regular
          physical activity, a balanced diet, and overall well-being. In
          conclusion, while BMI is a valuable tool for gauging weight-related
          health risks, it's essential to interpret the results alongside other
          health indicators. Achieving and maintaining a healthy weight involves
          a combination of healthy lifestyle choices tailored to individual
          needs and circumstances.</p>
          <h2 className={style.title}>
          <FontAwesomeIcon icon={faStethoscope} className={style.stetoscope} />Contact us</h2>
          <p className={style.pharagraf}> Contact us or register for more information.
          <a href="#"> Go to registration.</a>
          </p>
          <div>
        </div>

      </div>
    </>
  );
}

export default BodyMassInfo;
