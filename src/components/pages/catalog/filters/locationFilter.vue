<template>
  <div class="special-filter filter-wellow" :class="{filtered:filtered}" v-click-outside-element="removeActive">

    <div class="filter" :class="{active:filterActive}" @click="filterActive=!filterActive">
      <span>{{ filterText }}</span>
      <i class="fa-light fa-chevron-right"></i>
    </div>

    <div class="filter-div location-filter">

      <div class="radio-buttons">
        <label for="online" class="radio-button">
          <input type="radio" v-model="filters.location" name="location" value="0" id="online"/>
          <span class="label"></span>Çevrimiçi
        </label>
        <label for="yuzyuze" class="radio-button">
          <input type="radio" v-model="filters.location" name="location" value="1" id="yuzyuze"/>
          <span class="label"></span>Yüzyüze
        </label>
      </div>

      <div class="yuzyuze-div" v-if="filters.location==1">

        <span>Ülke</span>
        <country @filterCountry="filterCountry" />

        <span>Şehir</span>
        <city v-if="filters.countryID != -1" @filterCity="filterCity" />

        <span>İlçe</span>
        <town v-if="filters.cityID != -1" @filterTown="filterTown" />

      </div>

      <div class="price-buttons">
        <button @click="refreshFilter">Seçimleri Sıfırla</button>
        <button @click="emitFilter">Uygula</button>
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
      filtered:false,
      filterText: "Konum",
      filters:{
        location:-1,
        countryID:-1,
        cityID: -1,
        townID: -1,
      },
      countryName:"Tümü",
      cityName:"Tümü",
      townName:"Tümü",
    }
  },
  created() {
    this.emitFilter()
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    },
    filterCity(val){
      if(val == -1){
        this.filters.cityID = val
        this.cityName ="Tümü"
      }
      else{
        this.filters.cityID = val.id
        this.cityName = val.text
      }
    },
    filterCountry(val){
      if(val == -1){
        this.filters.countryID = val
        this.countryName ="Tümü"
      }
      else{
        this.filters.countryID = val.id
        this.countryName = val.text
      }
    },
    filterTown(val){
      if(val == -1){
        this.filters.townID = val
        this.townName ="Tümü"
      }
      else{
        this.filters.townID = val.id
        this.townName = val.text
      }
    },
    refreshFilter(){
      this.filters.location = -1
      this.filters.countryID = -1
      this.filters.cityID = -1
      this.filters.townID = -1
      this.filterText = "Konum"
      this.filtered = false;
      this.emitFilter()
      this.removeActive()
    },
    emitFilter(){
      this.$emit("filterLocation",this.filters)
      this.removeActive()
      if(this.filters.location != -1){
        this.filtered = true;

        if(this.filters.location == 0){
          this.filterText = "Çevrimiçi"
        }
        else{
          if(this.townName != "Tümü"){
            this.filterText = this.townName
          }
          else if(this.cityName != "Tümü"){
            this.filterText = this.cityName
          }
          else if(this.countryName != "Tümü"){
            this.filterText = this.countryName
          }
          else{
            this.filterText = "Yüzyüze"
          }
        }
      }

    }
  },

}
</script>