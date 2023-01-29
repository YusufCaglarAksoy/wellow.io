<template>
  <AppHeader activeMenu="KATALOG"/>

  <div class="page-title wellow-container">
    <a href="">Wellow</a>
    <i class="fa-light fa-chevron-right"></i>
    <a href="">Katalog</a>
    <i class="fa-light fa-chevron-right"></i>
    <a href="">Yoga Class</a>
  </div>
  <div class="experience-main wellow-container">
    <div class="experience-left">
      <div class="experience-images">
        <swiper
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
          <swiper-slide><img src="@/assets/media/media/yoga.png" alt=""></swiper-slide>
          <swiper-slide><img src="@/assets/media/media/collection-1.png" alt=""></swiper-slide>
          <swiper-slide><img src="@/assets/media/media/detoks.png" alt=""></swiper-slide>
          <swiper-slide><img src="@/assets/media/media/news-wellow-2.png" alt=""></swiper-slide>
        </swiper>
      </div>
      <div class="experience-educator">
        <img src="@/assets/media/media/educator.png" alt="">
        <div class="educator-title">
          <h2>Yasemin Alnıaçık,</h2>
          <p>Yoga Eğitmeni</p>
        </div>
      </div>
      <div class="experience-live-well">
        <div class="live-well">
          <div class="live-well-ico" style="--back:#FFE577">
            <i class="fa-regular fa-brain"></i>
          </div>
          <div class="live-well-text">
            <h2>Entellektüel İyi Yaşam</h2>
            <p>Yeni deneyimler edin</p>
          </div>
        </div>
        <div class="live-well">
          <div class="live-well-ico" style="--back:#D1F3FF;">
            <Icon icon="mdi:arm-flex-outline"/>
          </div>
          <div class="live-well-text">
            <h2>Fiziksel İyi Yaşam</h2>
            <p>Bedenine iyi bak, kendini geliştir</p>
          </div>
        </div>
      </div>
      <div class="experience-joining toggle-divs">
        <toggleDiv title="Deneyime Katılma" class="small-toogle">
          <div class="toogleDiv-inner">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. </p>
          </div>
        </toggleDiv>
        <toggleDiv title="İptal"  class="small-toogle">
          <div class="toogleDiv-inner">
          </div>
        </toggleDiv>
      </div>
    </div>
    <div class="experience-right">
      <div class="experience-info">
        <h3 class="vendor-name">Yogi House</h3>
        <h1 class="experience-name">Yoga Class</h1>
        <div class="experience-attr">
          <span>Çevrimiçi Deneyim</span>
          <span>4 Oturum</span>
          <span>Türkçe</span>
        </div>
        <div class="experience-date">
          <h2>7 Kasım 2022 - 28 Kasım 2022</h2>
          <a href="">Oturumları gör</a>
        </div>
        <hr>
        <h3 class="experience-session-count">4 oturum </h3>
        <div class="experience-info-bot">
          <div class="experience-info-bot-left">
            <h2>345,00 ₺</h2>
          </div>
          <div class="experience-info-bot-right">
            <button>Satın Al</button>
            <i class="fa-light fa-heart"></i>
          </div>
        </div>
      </div>
      <div class="toggle-divs">
        <toggleDiv title="Deneyimin İçeriği" class="experience-detail">
          <div class="toogleDiv-inner">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </toggleDiv>
        <toggleDiv title="Deneyime katılmak için gerekenler" class="experience-required">
          <div class="toogleDiv-inner">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</li>
            </ul>
          </div>
        </toggleDiv>
        <toggleDiv title="Oturumlar" class="experience-sessions">
          <div class="toogleDiv-inner session">
            <h2>1. Nefes Çalışması</h2>
            <ul>
              <li><i class="fa-regular fa-calendar"></i><span>7 Kasım 2022 Pazar 22:30</span></li>
              <li><i class="fa-regular fa-location-dot"></i><span>Online</span></li>
              <li><i class="fa-regular fa-clock"></i><span>40 dakika</span></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. </p>
          </div>
          <div class="toogleDiv-inner session">
            <h2>2. Nefes Çalışması</h2>
            <ul>
              <li><i class="fa-regular fa-calendar"></i><span>7 Kasım 2022 Pazar 22:30</span></li>
              <li><i class="fa-regular fa-location-dot"></i><span>Online</span></li>
              <li><i class="fa-regular fa-clock"></i><span>40 dakika</span></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. </p>
          </div>
          <div class="toogleDiv-inner session">
            <h2>3. Nefes Çalışması</h2>
            <ul>
              <li><i class="fa-regular fa-calendar"></i><span>7 Kasım 2022 Pazar 22:30</span></li>
              <li><i class="fa-regular fa-location-dot"></i><span>Online</span></li>
              <li><i class="fa-regular fa-clock"></i><span>40 dakika</span></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. </p>
          </div>
        </toggleDiv>
      </div>
    </div>
  </div>
  <similar-products />
  <appFooter/>

</template>
<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import toggleDiv from "../../components/pages/product/toogleDiv.vue"
import similarProducts from "../../components/pages/product/similarProducts.vue";
export default {
  props: ['id'],
  components: {
    Swiper,
    SwiperSlide,
    toggleDiv,
    similarProducts,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
}
</script>
