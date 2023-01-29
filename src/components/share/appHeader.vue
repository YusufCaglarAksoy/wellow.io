<template>
  <header>
    <div class="header-inner wellow-container">
      <div class="header-top">
        <div class="header-top-left">
          <router-link :to="{name:'Home'}">
            <img src="@/assets/media/logo.png" alt="">
          </router-link>
        </div>
        <div class="header-top-right">
          <router-link :to="{name:'Favorites'}" class="icon-button">
            <i class="fa-regular fa-heart"></i>
          </router-link>
          <accountMenu/>
          <div class="icon-button" :class="{active:langActive}" v-click-outside-element="removeActive">
            <div class="language" @click="langActive=!langActive"><i class="fa-regular fa-globe"></i> TR</div>
            <div class="accountMenu languageMenu">
              <div><img src="@/assets/media/media/tr.png" alt=""><span>Türkçe</span></div>
              <div><img src="@/assets/media/media/en.png" alt=""><span>English</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="header-bottom-left">

          <router-link :to="{name:'Catalog'}" :class="{active:this.activeMenu=='KATALOG'}">
            <span>KATALOG</span>
          </router-link>

          <router-link :to="{name:'EditorSelection'}" :class="{active:this.activeMenu=='EDİTÖRÜN SEÇİMİ'}">
            <span>EDİTÖRÜN SEÇİMİ</span>
          </router-link>

          <router-link :to="{name:'Brands'}" :class="{active:this.activeMenu=='MARKALAR'}">
            <span>MARKALAR</span>
          </router-link>

        </div>
        <div class="header-bottom-right">
          <search-area/>
        </div>
      </div>
    </div>
  </header>
  <div class="head-space"></div>
</template>
<script>
import searchArea from './header/searchArea.vue'
import accountMenu from './header/accountMenu.vue'

export default {
  data() {
    return {
      langActive: false,
    };
  },
  methods: {
    removeActive() {
      this.langActive = false
    }
  },
  props: ["activeMenu"],
  components: {
    searchArea,
    accountMenu
  },

}
</script>