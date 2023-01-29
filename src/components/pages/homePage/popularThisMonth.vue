<template>
    <section class="populerThisMonth products">
        <div class="populerThisMonth-header wellow-container section-header">
            <div class="section-header-left">
                <h3>Bu Ay Öne Çıkanlar</h3>
            </div>
            <div class="section-header-right">
                <h3>Hepsini Göster</h3>
                <button><i class="fa-light fa-chevron-left"></i></button>
                <button><i class="fa-light fa-chevron-right"></i></button>
            </div>
        </div>
        <div class="populerThisMonth-inner wellow-container">
            <sessionCard :sessionData="sessionDatas[0]" />
            <sessionCard :sessionData="sessionDatas[1]" />
            <div class="membership-cards wellow-card-size">
                <membershipCard :membershipData="membershipDatas[0]" />
                <membershipCard :membershipData="membershipDatas[1]" />
            </div>
        </div>
    </section>
</template>
<script>
import sessionCard from './cards/sessionCard.vue'
import membershipCard from './cards/membershipCard.vue'
export default{
    
    data() {
        return {
            sessionDatas:[{
                    img:require("@/assets/media/media/detoks.png"),
                    location:"İstanbul(Avr)",
                    date:"9 Ekim 2022",
                    title:"Zihinsel Detoks",
                    price:"150₺",
                    session:"tek seans"
                },
                {
                    img:require("@/assets/media/media/ayurveda.png"),
                    location:"Uzaktan",
                    date:"9 Ekim 2022",
                    title:"Ayurveda 'Yaşama Sanatı'",
                    price:"150₺",
                    session:"tek seans"
                }
            ],
            membershipDatas:[{
                    img:require("@/assets/media/media/shopify.png"),
                    title:"Boxing session by Macfit",
                    active:false,
                    price:"50₺",
                    session:"aylık üyelik"
                },
                {
                    img:require("@/assets/media/media/istock.png"),
                    title:"İstock",
                    active:false,
                    price:"45₺",
                    session:"aylık üyelik"
                }
            ]
        };
    },
    components : {
        sessionCard,
        membershipCard
    }
}
</script>