<template>
  <div class="special-filter filter-wellow" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}">
      <span>Konum</span>
      <i class="fa-light fa-chevron-right" @click="filterActive=!filterActive"></i>
    </div>
    <div class="filter-div location-filter">
      <div class="radio-buttons">
        <label for="online" class="radio-button">
          <input type="radio" v-model="location" name="location" value="0" id="online"/>
          <span class="label"></span>Çevrimiçi
        </label>
        <label for="yuzyuze" class="radio-button">
          <input type="radio" v-model="location" name="location" value="1" id="yuzyuze"/>
          <span class="label"></span>Yüzyüze
        </label>
      </div>
      <div class="yuzyuze-div" :class="{active:location==1}">
        <span>Ülke</span>
        <country />
        <span>Şehir</span>
        <city />
        <span>İlçe</span>
        <town />
      </div>
      <div class="price-buttons">
        <button>Seçimleri Sıfırla</button>
        <button>Uygula</button>
      </div>
    </div>
  </div>
</template>
<script>
import country from "./location/country.vue";
import city from "./location/city.vue";
import town from "./location/town.vue";
export default {
  components:{
    country,
    city,
    town
  },
  data(){
    return{
      filterActive:false,
      location:2,
    }
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    }
  }
}
</script>