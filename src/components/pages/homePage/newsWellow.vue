<template>
    <section class="newsWellow products">
        <div class="newsWellow-header wellow-container section-header">
            <div class="section-header-left">
                <h3>Wellow'a Yeni Eklenenler</h3>
            </div>
        </div>
        <div class="newsWellow-inner wellow-container">
            <div class="membership-cards wellow-card-size">
                <membershipCard :membershipData="membershipDatas[0]" />
                <membershipCard :membershipData="membershipDatas[1]" />
            </div>
            <sessionCard :sessionData="sessionDatas[0]" />
            <sessionCard :sessionData="sessionDatas[1]" />
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
                    img:require("@/assets/media/media/news-wellow-3.png"),
                    location:"Uzaktan",
                    date:"9 Ekim 2022",
                    title:"Stres ve depresyonla başa çıkın",
                    price:"150₺",
                    session:"tek seans"
                },
                {
                    img:require("@/assets/media/media/news-wellow-2.png"),
                    location:"İstanbul(Avr)",
                    date:"9 Ekim 2022",
                    title:"Grup Yoga Sınıfı",
                    price:"150₺",
                    session:"tek seans"
                }
            ],
            membershipDatas:[{
                    img:require("@/assets/media/media/netflix.png"),
                    title:"Netflix",
                    active:false,
                    price:"77₺",
                    session:"aylık üyelik"
                },
                {
                    img:require("@/assets/media/media/storytel2.png"),
                    title:"Storytel",
                    active:false,
                    price:"50₺",
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