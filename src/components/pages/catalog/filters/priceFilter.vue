<template>
  <div class="special-filter filter-wellow"  v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}">
      <span>Fiyat</span>
      <i class="fa-light fa-chevron-right" @click="filterActive=!filterActive"></i>
    </div>
    <div class="filter-div price-filter">
      <div>
        <h4>Fiyat Aralığı</h4>
        <span>Ortalama etkinlik fiyatı 352₺'dir.</span>
      </div>
      <div class="min-max-price">
        <button>En Az 22₺</button>
        <button>En Çok 765₺</button>
      </div>
      <div class="price-buttons">
        <button>Seçimleri Sıfırla</button>
        <button>Uygula</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      filterActive:false,
    }
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    },
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    }
  }
}
</script>