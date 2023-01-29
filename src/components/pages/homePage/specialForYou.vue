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
                    <editor-selection-card :selectionData="selectionDatas[0]"/>
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
    import editorSelectionCard from "./cards/editorSelectionCard.vue";

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
                membershipDatas:[
                    {
                        img:require("@/assets/media/media/senyorapp.png"),
                        title:"Senyorapp'le Sağlıklı Yaş Al",
                        active:false,
                        price:"37₺",
                        session:"aylık üyelik"
                    },
                    {
                        img:require("@/assets/media/media/insumo.png"),
                        title:"İnsumo Görev Yönetimi",
                        active:false,
                        price:"30₺",
                        session:"aylık üyelik"
                    }
                ],
                slideDatas:[{
                        logo:require("@/assets/media/media/neoskola.png"),
                        backColor:"",
                        textColor:"",
                        text:"Kendini geliştirmek ve hayatta bir adım daha ileri gitmek isteyen herkesin 'en iyi' ile buluşmasını sağlıyoruz.",
                        backgroundImg:[
                            require("@/assets/media/media/neoskola-slide-1.png"),
                            require("@/assets/media/media/neoskola-slide-2.png"),
                            require("@/assets/media/media/neoskola-slide-3.png"),
                        ],
                        backLogo:require("@/assets/media/media/neoskola.png"),
                        backText:"Alanında en iyilerle 60'dan fazla eğitim seni bekliyor",
                    },
                ],
                sessionDatas:[
                    {
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
                selectionDatas:[
                  {
                    img:require("@/assets/media/media/editor.png"),
                    title:"Yeni Doğan Paketi",
                    price:22,
                    count:14
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
            editorSelectionCard
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