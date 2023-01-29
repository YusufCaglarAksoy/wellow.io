<template>
  <div class="special-filter filter-wellow location-special" :class="{filtered:filtered}" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}" @click="filterActive=!filterActive">
      <span>{{ filterText }}</span>
      <i class="fa-light fa-chevron-right" ></i>
    </div>
    <div class="select-option">
      <div @click="removeFilter">Tümü</div>
      <div v-for="country in countries" @click="filter(country)">{{ country.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      filterActive:false,
      filterText:"Seçiniz",
      filtered:false,
      countries: [
        {
          id:0,
          text:"Türkiye",
        },
        {
          id:1,
          text:"ABD",
        },
        {
          id:2,
          text:"Hollanda",
        },
        {
          id:3,
          text:"Almanya",
        },
        {
          id:4,
          text:"Rusya",
        }
      ]
    }
  },
  created() {
    this.$emit("filterCity",-1)
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    },
    filter(country){
      this.filtered = true
      this.filterText = country.text
      this.$emit("filterCountry",country)
      this.removeActive()
    },
    removeFilter(){
      this.filtered = false
      this.filterText = "Seçiniz"
      this.$emit("filterCountry",-1)
      this.removeActive()
    }
  }
}
</script>