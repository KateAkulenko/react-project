import base from './../../base.module.css';
import Banner from './../../components/Banner/Banner';
import Title from './../../components/Title/Title';
import AboutInfo from './../../components/AboutInfo/AboutInfo';
import AboutDoctors from './../../components/AboutDoctors/AboutDoctors';
import Posts from '../../components/Posts/Posts';

function About() {
  return (
    <div>
      <Banner />
    <div className={base.wrapper}>
        <Title title="About us" />
        <AboutInfo />
        <AboutDoctors />
        <Posts />
    </div>
    </div>
  );
}

export default About;
