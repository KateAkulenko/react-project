import Banner from '../../components/Banner/Banner';
import base from './../../base.module.css';
import Title from './../../components/Title/Title';
import HomeInfo from './../../components/HomeInfo/HomeInfo';
import HomeTags from './../../components/HomeTags/HomeTags';
import LearnMore from './../../components/LearnMore/LearnMore';

function Home() {
  document.title = "Be Well clinic of dietology"
  return (
    <div>
      <Banner />
      <div className={base.wrapper}>
        <Title title="The clinic of dietology" />
        <HomeInfo />
        <HomeTags />
        <LearnMore />
      </div>
    </div>
  );
}

export default Home;
