import styles from './Banner.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function Banner() {
  return (
    <div className={styles.bunner}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper ${styles.customSwiper}`}
      >
        <SwiperSlide>
          <img src='/public/slider2.jpg' alt="Slider 1" />
          <div className={styles.slideCaption}>"BE WELL" - the clinic of dietology</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/public/slider1.jpg' alt="Slider 2" />
          <div className={styles.slideCaption}>calculate your body mass index</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/public/slide3.jpg' alt="Slider 3" />
          <div className={styles.slideCaption}>our nutritionists have extensive experience and will help everyone</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;