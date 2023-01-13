<template>

    <newAccountFlow v-if="_getFirstLogin" />
    <div v-if="!_getFirstLogin ">
      <AppHeader />
      <section class="entrance">
        <div class="entrance-inner wellow-container">
          <div class="entrance-left">
            <img src="@/front/assets/media/media/person.png" alt="">
            <div class="center-div">
              <h1>Hoş Geldin Ali</h1>
              <p v-if="rated" class="rated">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi atque consequatur consequuntur cupiditate, doloribus eius, enim explicabo facere hic laboriosam neque nihil nobis optio, placeat sapiente sed sequi sunt!</p>
              <p v-if="!rated">Bugün kendini nasıl hissediyorsun ?</p>
              <div :class="rate" v-if="!rated" @click="rated=true">
                <i class="fa-light fa-heart" @mouseover="rate='rate1'" @mouseleave="rate='rate0'"></i>
                <i class="fa-light fa-heart" @mouseover="rate='rate2'" @mouseleave="rate='rate0'"></i>
                <i class="fa-light fa-heart" @mouseover="rate='rate3'" @mouseleave="rate='rate0'"></i>
                <i class="fa-light fa-heart" @mouseover="rate='rate4'" @mouseleave="rate='rate0'"></i>
                <i class="fa-light fa-heart" @mouseover="rate='rate5'" @mouseleave="rate='rate0'"></i>
              </div>
            </div>
            <div class="right-div">
              <img src="@/front/assets/media/media/statistic.png" alt="">
              <p>Dijital Koçunuz</p>
            </div>
          </div>
          <div class="entrance-right">
            <div class="entrance-right-top">
              <div>
                <img src="@/front/assets/media/media/wallet.png" alt="">
                <h1>Cüzdan</h1>
              </div>
              <div>
                <h3>Kullanılabilir Bakiye</h3>
                <h2>750,00 <span>₺</span></h2>
              </div>
            </div>
            <div class="entrance-right-bottom">
              <h2>Satın alınanlar</h2>
              <button><i class="fa-light fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>
      <specialForYou />
      <companySelection />
      <popularBrand />
      <popularThisMonth />
      <newsWellow />
      <futureExperiences />
      <goodLifeCollections />
      <scrollTop :scY="scY" />
      <fixedBar :scY="scY" />
      <appFooter />
    </div>

</template>
<script>
    import specialForYou from '../../components/pages/homePage/specialForYou.vue'
    import newAccountFlow from '../../components/pages/modals/newAccountFlow.vue'
    import companySelection from '../../components/pages/homePage/companySelection.vue'
    import popularBrand from '../../components/pages/homePage/popularBrand.vue'
    import popularThisMonth from '../../components/pages/homePage/popularThisMonth.vue'
    import newsWellow from '../../components/pages/homePage/newsWellow.vue'
    import futureExperiences from '../../components/pages/homePage/futureExperiences.vue'
    import goodLifeCollections from '../../components/pages/homePage/goodLifeCollections.vue'
    import store from "../../store";
    import { mapGetters } from 'vuex';
export default{
  data() {
    return {
      rate:"rate0",
      scTimer: 0,
      scY: 0,
      rated:false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed:{
    ...mapGetters(["_getFirstLogin"])
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },

  },
    components : {
        newAccountFlow,
        specialForYou,
        companySelection,
        popularBrand,
        popularThisMonth,
        newsWellow,
        futureExperiences,
        goodLifeCollections,
    }
}
</script>
