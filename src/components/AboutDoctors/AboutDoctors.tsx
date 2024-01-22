import style from './AboutDoctors.module.css';
function AboutDoctors() {
  return (
  <>
  <h2 className={style.title}>our doctors</h2>
  <div className={style.card}>
    <div className={style.imgwrapper}>
      <img src="/doctor1.jpg" alt="doctor Helena Gray" className={style.img} />
    </div>
    <div className={style.infowrapper}>
      <p className={style.name}>Doctor: Helena Gray</p>
      <p className={style.info}>In 2000 graduated from the London Medical University</p>
      <p className={style.specialization}>Specialization: nutritionist</p>
        <p className={style.info}>In 2012 completed advanced training courses in Los Angeles</p>
      <p className={style.year}>Since 2015 working in our clinic</p>
      <p className={style.txt}>"My work inspires me; I find joy in guiding individuals towards 
      tangible results. I firmly believe that achieving a balance between healthy and delicious food is 
      entirely possible. Embrace the opportunity to enhance your life for the better; 
      there's no need to fear positive change. Don't be afraid to improve your life for the better"</p>
    </div>
  </div>
  <div className={style.card}>
    <div className={style.imgwrapper}>
      <img src="/doctor2.jpg" alt="Doctor: Simon Berkowich" className={style.img} />
    </div>
    <div className={style.infowrapper}>
      <p className={style.name}>Doctor: Simon Berkowich</p>
      <p className={style.info}>In 1996 graduated from the New York Medical University</p>
      <p className={style.specialization}>Specialization: dietologist</p>
      
        <p className={style.info}>In 2010 completed advanced training courses in Los Angeles</p>
        <p className={style.info}>In 2012 completed advanced training courses in San Francisco</p>
        <p className={style.info}>In 2022 completed advanced training courses in California</p>
      
      <p className={style.year}>Since 2013 working in our clinic</p>
      <p className={style.txt}>"The essence of my work serves as a wellspring of inspiration,
       igniting a passion within me. I take immense pleasure in steering individuals towards concrete, 
       impactful outcomes. I hold a steadfast belief that striking a harmonious balance between nutritious 
       and delectable food is not only attainable but crucial for overall well-being. Embrace the prospect 
       of elevating your life for the better, for there is no reason to shy away from the transformative 
       power of positive change.</p>
    </div>
  </div>
  <div className={style.card}>
    <div className={style.imgwrapper}>
      <img src="/doctor3.jpg" alt="doctor Smitt Whatson" className={style.img} />
    </div>
    <div className={style.infowrapper}>
      <p className={style.name}>Doctor: Smitt Whatson</p>
      <p className={style.info}>In 2003 graduated from the Berlin Medical University</p>
      <p className={style.specialization}>Specialization: nutritionist</p>
      <p className={style.info}>In 2005 completed advanced training courses in Praga</p>
      <p className={style.info}>In 2011 completed advanced training courses in New York</p>
      <p className={style.year}>Since 2010 working in our clinic</p>
      <p className={style.txt}>"My work inspires me; I find joy in guiding individuals towards 
      tangible results. I firmly believe that achieving a balance between healthy and delicious food is 
      entirely possible. I hold a steadfast belief that striking a harmonious balance between nutritious 
       and delectable food is not only attainable but crucial for overall well-being. Embrace the prospect 
       of elevating your life for the better, for there is no reason to shy away from the transformative 
       power of positive change."</p>
    </div>
  </div>
  </>
  );
}

export default AboutDoctors;
