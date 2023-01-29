<template>
    <section class="companySelection products">
        <div class="companySelection-header wellow-container section-header">
            <div class="section-header-left">
                <h3>Şirketin tarafından Verilenler</h3>
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
          class="companySelection-inner wellow-container"
          id="specialForYou"
          @swiper="onSwiper"
      >
            <swiper-slide>
              <sessionCard :sessionData="sessionDatas[0]" />
            </swiper-slide>
            <swiper-slide>
              <div  class="membership-cards wellow-card-size">
                <membershipCard :membershipData="membershipDatas[0]"/>
                <membershipCard :membershipData="membershipDatas[1]"/>
              </div>
            </swiper-slide>
            <swiper-slide>
              <sessionCard :sessionData="sessionDatas[1]" />
            </swiper-slide>
            <swiper-slide>
              <div  class="membership-cards wellow-card-size">
                <membershipCard :membershipData="membershipDatas[0]"/>
                <membershipCard :membershipData="membershipDatas[1]"/>
              </div>
            </swiper-slide>
            <swiper-slide>
              <sessionCard :sessionData="sessionDatas[1]" />
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
import sessionCard from './cards/sessionCard.vue'
import membershipCard from './cards/membershipCard.vue'
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
            sessionDatas:[{
                    img:require("@/assets/media/media/company-1.png"),
                    location:"Uzaktan",
                    date:"9 Ekim 2022",
                    title:"Doğuma Hazırlık Eğitimi",
                    price:"Ücretsiz",
                    session:"4 seans"
                },
                {
                    img:require("@/assets/media/media/company-4.png"),
                    location:"Uzaktan",
                    date:"9 Ekim 2022",
                    title:"Kodlama hatalarını gidermede uzmanlık",
                    price:"Ücretsiz",
                    session:"tek seans"
                }
            ],
            membershipDatas:[{
                    img:require("@/assets/media/media/company-2.png"),
                    title:"İngilizce Becerileri için Cambly",
                    active:false,
                    price:"Ücretsiz",
                    session:"aylık üyelik"
                },
                {
                    img:require("@/assets/media/media/company-3.png"),
                    title:"Github Premium",
                    active:false,
                    price:"Ücretsiz",
                    session:"aylık üyelik"
                }
            ],
          swiper: null,
        };
    },
    components : {
        sessionCard,
        membershipCard,
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