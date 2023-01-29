<template>
    <div class="session-card wellow-card-size">
        <div class="card-img">
            <img :src="sessionData.img" alt="">
            <div>
                <p><i class="fa-solid fa-location-dot"></i> {{sessionData.location}}</p>
            </div>
        </div>
        <div class="card-inner">
            <div>
                <h3>{{sessionData.date}}</h3>
                <button><i class="fa-regular fa-heart"></i></button>
            </div>
            <h2>{{sessionData.title}}</h2>
            <p><b>{{sessionData.price}}₺</b> / {{sessionData.session}}</p>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
        };
    },
    props: ['sessionData']
}
</script>