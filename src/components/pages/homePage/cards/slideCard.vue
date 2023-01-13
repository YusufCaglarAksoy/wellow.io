<template>
    <div class="slide-card wellow-card-size" @mouseover="slideOver($event)"
            @mouseleave="slideLeave($event)" :style="{'--back':slideData.backColor,'--text':slideData.textColor}" >
                <img :src="slideData.logo" alt="">
                <p class="card-text">{{slideData.text}}</p>
                <div class="slide-card-inner">
                    <div class="slide-images">
                        <img v-for="url in slideData.backgroundImg" :key="url" :src="url">
                    </div>
                    <div class="slide-card-text">
                        <h2 v-if="slideData.backText">{{slideData.backText}}</h2>
                        <img :src="slideData.backLogo" alt="">
                    </div>
                </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
            };
        },
        methods: {
            slideLeave(event){
                event.target.classList.remove("active")
            },
            slideOver(event){
                event.target.classList.add("active")
            }
        },
        props: ['slideData']
    }
</script>