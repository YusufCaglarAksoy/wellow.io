<template>
    <section class="specialForYou products">
        <div class="specialForYou-header wellow-container section-header">
            <div class="section-header-left">
                <h3>Sana Özel</h3>
            </div>
            <div class="section-header-right" >
                <h3>Hepsini Göster</h3>
                <button @click="swiper.slidePrev()"><i class="fa-light fa-chevron-left"></i></button>
                <button @click="swiper.slideNext()"><i class="fa-light fa-chevron-right"></i></button>
            </div>
        </div >

        <swiper
                :slidesPerView="3"
                :spaceBetween="20"
                :slidesPerGroup="1"
                :modules="modules"
                :options="swiperOptions"
                class="specialForYou-inner wellow-container"
                id="specialForYou"
                @swiper="onSwiper"
            >

                <swiper-slide>
                    <div  class="membership-cards wellow-card-size">
                        <membershipCard :membershipData="membershipDatas[0]"/>
                        <membershipCard :membershipData="membershipDatas[1]"/>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="editor-selection-card wellow-card-size">
                        <img src="@/front/assets/media/media/editor.png" alt="">
                        <div class="editor-selection-card-inner">
                            <div class="inner-top">
                                <button>Editörün Seçimi</button>
                            </div>
                            <h1>Yeni Doğan Paketi</h1>
                            <div class="inner-bottom">
                                <p><b>22₺'den </b> başlayan <b> 14 içerik</b></p>
                                <router-link :to="{name:'Home'}" class="auth-button">
                                    Hepsini Göster
                                </router-link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <slideCard :slideData="slideDatas[0]"/>
                </swiper-slide>
                <swiper-slide>
                  <sessionCard :sessionData="sessionDatas[0]" />
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
                slideDatas:[{
                        logo:"/front/assets/media/media/neoskola.png",
                        backColor:"",
                        textColor:"",
                        text:"Kendini geliştirmek ve hayatta bir adım daha ileri gitmek isteyen herkesin 'en iyi' ile buluşmasını sağlıyoruz.",
                        backgroundImg:[
                            "/front/assets/media/media/neoskola-slide-1.png",
                            "/front/assets/media/media/neoskola-slide-2.png",
                            "/front/assets/media/media/neoskola-slide-3.png",
                        ],
                        backLogo:"./front/assets/media/media/neoskola.png",
                        backText:"Alanında en iyilerle 60'dan fazla eğitim seni bekliyor",
                    },
                ],
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
                swiper: null,
            };
        },
        components : {
            membershipCard,
            slideCard,
            Swiper,
            SwiperSlide,
            sessionCard,
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