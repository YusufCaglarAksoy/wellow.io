<template>
    <div class="editor-selection-card wellow-card-size">
        <img :src="selectionData.img" alt="">
        <div class="editor-selection-card-inner">
            <div class="inner-top">
                <button>Editörün Seçimi</button>
            </div>
            <h1>{{selectionData.title}}</h1>
            <div class="inner-bottom">
                <p><b>{{selectionData.price}}'den </b> başlayan <b> {{selectionData.count}} içerik</b></p>
                <router-link :to="{name:'Home'}" class="auth-button">
                    Hepsini Göster
                </router-link>
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
    props: ['selectionData']
}
</script>