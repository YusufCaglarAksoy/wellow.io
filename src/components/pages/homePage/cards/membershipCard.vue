<template>
    <div class="membership-card">
        <div class="card-img">
            <img :src="membershipData.img" alt="">
        </div>
        <div class="card-inner">
            <div>
                <h2>{{membershipData.title}}</h2>
                <button><i class="fa-regular fa-heart"></i></button>
            </div>
            <p><b>{{membershipData.price}}</b> / {{membershipData.session}}</p>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
        };
    },
    props: ['membershipData']
}
</script>