// styles
import styles from './Banner.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// components
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Banner() {
  return (
    <div className={styles.banner}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        //add module Autoplay
        modules={[Pagination, Navigation, Autoplay]}
        className={`mySwiper ${styles.customSwiper}`}
        // Autoplay timing
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          {/* slide img */}
          <img src="/slider2.jpg" alt="Slider 1" />
          {/* slide txt */}
          <div className={styles.slideCaption}>
            "BE WELL" - the clinic of dietology
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider1.jpg" alt="Slider 2" />
          <div className={styles.slideCaption}>
            calculate your body mass index
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide3.jpg" alt="Slider 3" />
          <div className={styles.slideCaption}>
            our nutritionists have extensive experience and will help everyone
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
