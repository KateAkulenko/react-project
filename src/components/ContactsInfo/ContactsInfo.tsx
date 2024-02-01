//style
import style from './ContactsInfo.module.css';
//libraries and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function ContactsInfo() {
  return (
  <div className={style.wrapper}>
    <div className={style.container}>
    <p> 
        <span className={style.icon}> <FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
      <a href="https://maps.app.goo.gl/1hiWYVjPboLTkxQd8" target="_blank" className={style.contact}>369 N Fairfax Ave #2, Los Angeles, CA 90036, USA</a>
      </p> 
      <p>
      <span className={style.icon}>  <FontAwesomeIcon icon={faPhone} /> </span>
      <a href="tel: +001 256-168-2478" className={style.contact}>+001 256-168-2478</a> 
      </p>
      <p>  
      <span className={style.icon}>  <FontAwesomeIcon icon={faEnvelope} /> </span>
      <a href="mailto:bewell@service.com" className={style.contact}>bewell@service.com</a> 
      </p>
      <p>
      <span className={style.icon}> <FontAwesomeIcon icon={faClock} /> </span>
        <span className={style.hours}>Mon - Fr: from 09:00 AM to 19:00 PM</span>
      </p>  
    </div>
  </div>
  );
}

export default ContactsInfo;
