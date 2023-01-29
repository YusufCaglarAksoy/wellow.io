<template>
    <section class="futureExperiences products">
        <div class="futureExperiences-header wellow-container section-header">
            <div class="section-header-left">
                <h3>Gelecek Deneyimler</h3>
            </div>
            <div class="section-header-right">
                <h3>Hepsini Göster</h3>
                <button><i class="fa-light fa-chevron-left"></i></button>
                <button><i class="fa-light fa-chevron-right"></i></button>
            </div>
        </div>
        <div class="futureExperiences-inner wellow-container">
            <sessionCard :sessionData="sessionDatas[0]" />
            <sessionCard :sessionData="sessionDatas[1]" />
            <sessionCard :sessionData="sessionDatas[2]" />
        </div>
    </section>
</template>
<script>
import sessionCard from './cards/sessionCard.vue'
export default{
    data() {
        return {
            sessionDatas:[{
                    img:require("@/assets/media/media/future-experiences-1.png"),
                    location:"Uzaktan",
                    date:"9 Ekim 2022",
                    title:"Profesyonel Yaşamda İletişim",
                    price:"150₺",
                    session:"tek seans"
                },
                {
                    img:require("@/assets/media/media/future-experiences-2.png"),
                    location:"İstanbul(Avr)",
                    date:"9 Ekim 2022",
                    title:"Sunum görselleştirme",
                    price:"150₺",
                    session:"tek seans"
                },                
                {
                    img:require("@/assets/media/media/future-experiences-3.png"),
                    location:"İstanbul(Avr)",
                    date:"9 Ekim 2022",
                    title:"Etkili Bir Sunum Nasıl Yapılır ?",
                    price:"150₺",
                    session:"tek seans"
                }
            ]
        };
    },
    components : {
        sessionCard,
    }
}
</script>