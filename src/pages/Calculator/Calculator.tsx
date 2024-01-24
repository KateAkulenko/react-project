import base from './../../base.module.css';
import Banner from './../../components/Banner/Banner';
import Title from './../../components/Title/Title';
import BodyMassCalculator from './../../components/BodyMassCalculator/BodyMassCalculator';
import BodyMassInfo from './../../components/BodyMassInfo/BodyMassInfo';

function Calculator() {
  return (
    <>
    <Banner />
    <div className={base.wrapper}>
    <Title title="Calculate body mass index" />
    <BodyMassCalculator />
    <BodyMassInfo />
    </div>
    </>
  );
}

export default Calculator;
