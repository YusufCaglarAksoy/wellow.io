<template>
    <section class="goodLifeCollections">
        <div class="goodLifeCollections-header wellow-container section-header">
            <div class="section-header-left">
                <h3>İyi Yaşam Koleksiyonları</h3>
            </div>
        </div>
        <div class="goodLifeCollections-inner wellow-container">
            <collectionCard  class="verticalCollection" :collectionData="collectionDatas[0]"/>
            <div class="horizontalCollection ">
                <collectionCard :collectionData="collectionDatas[1]"/>
                <collectionCard :collectionData="collectionDatas[2]"/>
            </div>
        </div>
        <div class="goodLifeCollections-inner wellow-container">

            <div class="horizontalCollection ">
                <collectionCard :collectionData="collectionDatas[3]"/>
                <collectionCard :collectionData="collectionDatas[4]"/>
            </div>
            <collectionCard  class="verticalCollection" :collectionData="collectionDatas[5]"/>
        </div>
        <div class="goodLifeCollections-inner wellow-container">
            <collectionCard  class="verticalCollection" :collectionData="collectionDatas[6]"/>
            <div class="horizontalCollection ">
                <collectionCard :collectionData="collectionDatas[7]"/>
                <collectionCard :collectionData="collectionDatas[8]"/>
            </div>

        </div>
    </section>
</template>
<script>
import collectionCard from './cards/collectionCard.vue'
export default{
    
    data() {
        return {
            collectionDatas:[{
                    img:"/front/assets/media/media/collection-1.png",
                    title:"Fiziksel İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-2.png",
                        "/front/assets/media/media/collection-3.png"
                    ]
                },
                {
                    img:"/front/assets/media/media/collection-2.png",
                    title:"Duygusal İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-1.png",
                        "/front/assets/media/media/collection-3.png"
                    ]
                },
                {
                    img:"/front/assets/media/media/collection-3.png",
                    title:"Mesleki İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-1.png",
                        "/front/assets/media/media/collection-2.png"
                    ]
                },
                {
                    img:"./front/assets/media/media/collection-4.png",
                    title:"Sosyal İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-1.png",
                        "/front/assets/media/media/collection-2.png"
                    ]
                },
                {
                    img:"./front/assets/media/media/collection-5.png",
                    title:"Entelektüel İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-1.png",
                        "/front/assets/media/media/collection-2.png"
                    ]
                },
                {
                    img:"/front/assets/media/media/collection-6.png",
                    title:"Spiritüel İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-1.png",
                        "/front/assets/media/media/collection-2.png"
                    ]
                },
                {
                    img:"/front/assets/media/media/collection-7.png",
                    title:"Çevresel İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-1.png",
                        "/front/assets/media/media/collection-2.png"
                    ]
                },
                {
                    img:"/front/assets/media/media/collection-8.png",
                    title:"Finansal İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-1.png",
                        "/front/assets/media/media/collection-2.png"
                    ]
                },
                {
                    img:"/front/assets/media/media/collection-9.png",
                    title:"Çocukla İyi Yaşam",
                    slideImages:[
                        "/front/assets/media/media/collection-1.png",
                        "/front/assets/media/media/collection-2.png"
                    ]
                },
            ]
        };
    },
    components : {
        collectionCard
    }
}
</script>