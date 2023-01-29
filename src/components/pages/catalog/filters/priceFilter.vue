<template>
  <div class="special-filter filter-wellow" :class="{filtered:filtered}" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}" @click="filterActive=!filterActive">
      <span>{{ filterText }}</span>
      <i class="fa-light fa-chevron-right"></i>
    </div>
    <div class="filter-div price-filter">
      <div>
        <h4>Fiyat Aralığı</h4>
        <span>Ortalama etkinlik fiyatı 352₺'dir.</span>
        <div class="slide-container"  :style="{'--percent1':this.percent1,'--percent2':this.percent2}">
          <div class="slider-track" ></div>
          <div class="button-slide"></div>
          <input type="range" v-model="filters.range1" :min="this.rangeMin" :max="this.rangeMax" step="1" @input="slideOne">
          <input type="range" v-model="filters.range2" :min="this.rangeMin" :max="this.rangeMax" step="1" @input="slideTwo">
        </div>
      </div>
      <div class="min-max-price">
        <button><span v-if="filters.range1==rangeMin">En Az </span> {{ filters.range1 }}₺</button>
        <button><span v-if="filters.range2==rangeMax">En Çok </span> {{ filters.range2 }}₺</button>
      </div>
      <div class="price-buttons">
        <button @click="refreshFilter">Seçimleri Sıfırla</button>
        <button @click="emitFilter">Uygula</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      filterActive:false,
      filterText:"Fiyat",
      filtered:false,
      rangeMin:22,
      rangeMax:765,
      filters:{
        "range1":0,
        "range2":0
      },
      percent1:"",
      percent2:""
    }
  },
  created() {
    this.filters.range1 = this.rangeMin
    this.filters.range2 = this.rangeMax
    this.percent1 = ((this.filters.range1 / this.rangeMax) * 100) + "%"
    this.percent2 = ((this.filters.range2 / this.rangeMax) * 100) + "%"
    this.$emit("filterPrice",this.filters)
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    },
    slideOne(){
      if(parseInt(this.filters.range2) - parseInt(this.filters.range1) <= this.rangeMin){
        this.filters.range1 = parseInt(this.filters.range2) - this.rangeMin;
      }
      this.fillColor()
    },
    slideTwo(){
      if(parseInt(this.filters.range2) - parseInt(this.filters.range1) <= this.rangeMin){
        this.filters.range2 = parseInt(this.filters.range1) + this.rangeMin;
      }
      this.fillColor()
    },
    fillColor(){
      this.percent1 = ((this.filters.range1 / this.rangeMax) * 100) + "%"
      this.percent2 = ((this.filters.range2 / this.rangeMax) * 100) + "%"
    },
    refreshFilter(){
      this.filters.range1 = this.rangeMin
      this.filters.range2 = this.rangeMax
      this.filterText = "0"
      this.fillColor()
      this.emitFilter()
      this.removeActive()
    },
    emitFilter(){
      this.$emit("filterPrice",this.filters)
      this.removeActive()
      if(this.filterText != "0"){
        this.filtered = true;
        this.filterText = this.filters.range1 + "₺ - " + this.filters.range2 + "₺"
      }
      else{
        this.filterText = "Fiyat"
        this.filtered = false;
      }
    }
  }
}
</script>