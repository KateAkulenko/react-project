import base from './../../base.module.css';
import Title from './../../components/Title/Title';
import ContactsInfo from './../../components/ContactsInfo/ContactsInfo';
import Map from './../../components/Map/Map';

function Contacts() {
  return (
    <> 
    <div className={base.wrapper}>
          <Title title="Contacts" />
          <ContactsInfo />
    </div>
    <Map />
    </>
  );
}

export default Contacts;
