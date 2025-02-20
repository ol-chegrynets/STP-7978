import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/parallax';

const swiper = new Swiper('.swiper-container', {
  parallax: true,
  slidesPerView: 'auto',
  loop: true,
});
