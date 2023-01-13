<template>
    <section class="populerBrands products">
        <div class="populerBrands-header wellow-container section-header">
            <div class="section-header-left">
                <h3>Popüler Markalar</h3>
            </div>
          <div class="section-header-right" >
            <h3>Hepsini Göster</h3>
            <button @click="swiper.slidePrev()"><i class="fa-light fa-chevron-left"></i></button>
            <button @click="swiper.slideNext()"><i class="fa-light fa-chevron-right"></i></button>
          </div>
        </div>
      <swiper
          :slidesPerView="3"
          :spaceBetween="20"
          :slidesPerGroup="1"
          :modules="modules"
          :options="swiperOptions"
          class="populerBrands-inner wellow-container"
          id="specialForYou"
          @swiper="onSwiper"
      >
          <swiper-slide>
            <slideCard :slideData="slideDatas[0]"/>
          </swiper-slide>
          <swiper-slide>
            <slideCard :slideData="slideDatas[1]"/>
          </swiper-slide>
          <swiper-slide>
            <slideCard :slideData="slideDatas[2]"/>
          </swiper-slide>
          <swiper-slide>
            <slideCard :slideData="slideDatas[3]"/>
          </swiper-slide>
       </swiper>

    </section>
</template>
<script>
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import slideCard from './cards/slideCard.vue'
export default{
    data() {
        return {
            swiperOptions: {
            breakpoints: {
              1300: {
                width:400,
              }
            },
            navigation: {
              nextEl: '.specialForYou-right-arrow',
              prevEl: '.specialForYou-left-arrow'
            },
          },
            slideDatas:[{
                    logo:"/front/assets/media/media/storytel.png",
                    backColor:"#41071F",
                    textColor:"#FDFDFD",
                    text:"Storytel, dünyanın en büyük sesli kitap ve e-kitap yayın hizmetlerinden biridir ve küresel ölçekte bir milyondan fazla kitap sunar.",
                    backgroundImg:[
                        "/front/assets/media/media/popularbrands-1.png",
                    ],
                    backLogo:"/front/assets/media/media/storytel.png",
                    backText:"",
                },
                {
                    logo:"/front/assets/media/media/xfit.png",
                    backColor:"#FFFFFF",
                    textColor:"#6C757D",
                    text:"En son teknolojiler ve spor ekipmanları ile spor deneyiminizi bir adım öteye taşıyın! Profesyonel eğitmenler ile antrenman yapın ve maksimum verim alın.",
                    backgroundImg:[
                        "/front/assets/media/media/popularbrands-3.png",
                    ],
                    backLogo:"/front/assets/media/media/xfit2.png",
                    backText:"İYİ BİR YAŞAM VE SPOR HAKKINDA ARADIĞINIZ HER ŞEY BURADA!",
                },               
                {
                    logo:"/front/assets/media/media/mealbox.png",
                    backColor:"#000000",
                    textColor:"#FDFDFD",
                    text:"Mealbox, sağlıklı ve taze yemeklerin kapınıza teslim edilmesi için tek durak çözümdür.",
                    backgroundImg:[
                        "/front/assets/media/media/popularbrands-2.png",
                    ],
                    backLogo:"/front/assets/media/media/mealbox.png",
                    backText:"Aylık ödeyin, sağlıklı ve lezzetli yemekleri her gün kapınıza kadar getirelim.",
                },
              {
                logo:"/front/assets/media/media/neoskola.png",
                backColor:"",
                textColor:"",
                text:"Kendini geliştirmek ve hayatta bir adım daha ileri gitmek isteyen herkesin 'en iyi' ile buluşmasını sağlıyoruz.",
                backgroundImg:[
                  "/front/assets/media/media/neoskola-slide-1.png",
                  "/front/assets/media/media/neoskola-slide-2.png",
                  "/front/assets/media/media/neoskola-slide-3.png",
                ],
                backLogo:"/front/assets/media/media/neoskola.png",
                backText:"Alanında en iyilerle 60'dan fazla eğitim seni bekliyor",
              },
            ],
          swiper: null,
        };
    },
    components : {
        slideCard,
        Swiper,
        SwiperSlide,
    },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },

    handleSlideTo() {
      this;
    },
  },
}
</script>
  <style>
  .swiper-slide {
    flex-shrink: initial;
    height: auto;
    position: relative;
    transition-property: auto;
  }
</style>