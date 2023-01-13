<template>
  <div class="special-filter filter-wellow" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}">
      <span>Tarih</span>
      <i class="fa-light fa-chevron-right" @click="filterActive=!filterActive"></i>
    </div>
    <div class="filter-div language-filter">
      <span>Başlangıç:</span>
      <label for="startDate">
        <input type="date" id="startDate" v-model="firstDate">
        <span :class="{default:firstDate=='Tarih Seçiniz'}">{{ firstDate }}</span>
      </label>
      <span>Bitiş:</span>
      <label for="endDate">
        <input type="date" id="endDate" v-model="endDate">
        <span :class="{default:endDate=='Tarih Seçiniz'}">{{ endDate }}</span>
      </label>
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
      firstDate:"Tarih Seçiniz",
      endDate:"Tarih Seçiniz",
    }
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    }
  },
  watch: {
    firstDate: function(newVal, oldVal) {

    },
    endDate: function(newVal, oldVal) {
    }
  },
}
</script>