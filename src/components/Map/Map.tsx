import style from './Map.module.css';

function Map() {
  return (
    <div className={style.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.672507890439!2d-118.3617405!3d34.0779085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9331848f987%3A0x73ef92ebf72d6763!2sLa%20Clinic%20of%20Med%20Genetics!5e0!3m2!1suk!2spl!4v1706113977002!5m2!1suk!2spl"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
