<template>
  <section class="companySelection products">
    <div class="companySelection-header wellow-container section-header">
      <div class="section-header-left">
        <h3>Benzer Deneyimler ve Ürünler</h3>
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
      <swiper-slide class="slideCard">
        <sessionCard :sessionData="sessionDatas[0]" />
      </swiper-slide>
      <swiper-slide class="slideCard">
        <div  class="membership-cards wellow-card-size">
          <membershipCard :membershipData="membershipDatas[0]"/>
          <membershipCard :membershipData="membershipDatas[1]"/>
        </div>
      </swiper-slide>
      <swiper-slide class="slideCard">
        <sessionCard :sessionData="sessionDatas[1]" />
      </swiper-slide>
      <swiper-slide class="slideCard">
        <div  class="membership-cards wellow-card-size">
          <membershipCard :membershipData="membershipDatas[0]"/>
          <membershipCard :membershipData="membershipDatas[1]"/>
        </div>
      </swiper-slide>
      <swiper-slide class="slideCard">
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
import sessionCard from "../homePage/cards/sessionCard.vue";
import membershipCard from "../homePage/cards/membershipCard.vue";
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
        img:"/front/assets/media/media/company-1.png",
        location:"Uzaktan",
        date:"9 Ekim 2022",
        title:"Doğuma Hazırlık Eğitimi",
        price:"Ücretsiz",
        session:"4 seans"
      },
        {
          img:"/front/assets/media/media/company-4.png",
          location:"Uzaktan",
          date:"9 Ekim 2022",
          title:"Kodlama hatalarını gidermede uzmanlık",
          price:"Ücretsiz",
          session:"tek seans"
        }
      ],
      membershipDatas:[{
        img:"/front/assets/media/media/senyorapp.png",
        title:"Senyorapp'le Sağlıklı Yaş Al",
        active:false,
        price:"37₺",
        session:"aylık üyelik"
      },
        {
          img:"/front/assets/media/media/insumo.png",
          title:"İnsumo Görev Yönetimi",
          active:false,
          price:"30₺",
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
  .slideCard {
    flex-shrink: initial;
    height: auto;
    position: relative;
    transition-property: auto;
  }
</style>