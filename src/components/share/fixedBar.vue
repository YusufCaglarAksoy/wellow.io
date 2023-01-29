<template>
  <div class="fixed-bar" :class="{active:scY>150}" >
    <div class="fixed-bar-inner wellow-container" :class="{active:hasMessage}">
      <div class="fixed-bar-left" v-if="hasMessage">
        <i class="fa-solid fa-bell"><span>1</span></i>
        <p>Son Deneyiminiz Nasıldı ? Değerlendirmek ister misiniz ?</p>
      </div>
      <div class="fixed-bar-right">
        <img src="@/assets/media/media/wallet.png" alt="">
        <h2>750,00<span>₺</span></h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        hasMessage: true
      };
    },
    props: ['scY'],
  }
</script>