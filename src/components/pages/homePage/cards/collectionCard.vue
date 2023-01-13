<template>
    <div class="collection-card">
        <img :src="collectionData.img" alt="">
        <div class="card-slide">
            <img v-for="url in collectionData.slideImages" :key="url" :src="url" alt="">
        </div>
        <div class="card-text">
            <div>
                <h2>{{collectionData.title}}</h2>
                <h3>Koleksiyonu</h3>
            </div>
            <button>Hepsini Göster</button>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
        };
    },
    props: ['collectionData']
}
</script>