<template>
  <div class="special-filter filter-wellow location-special" :class="{filtered:filtered}" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}" @click="filterActive=!filterActive">
      <span>{{ filterText }}</span>
      <i class="fa-light fa-chevron-right"></i>
    </div>
    <div class="select-option">
      <div @click="removeFilter">Tümü</div>
      <div v-for="city in cities" @click="filter(city)">{{ city.text }}</div>
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
      cities: [
        {
          id:0,
          text:"İstanbul",
        },
        {
          id:1,
          text:"Ankara",
        },
        {
          id:2,
          text:"İzmir",
        },
        {
          id:3,
          text:"Adana",
        },
        {
          id:4,
          text:"Trabzon",
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
    filter(city){
      this.filtered = true
      this.filterText = city.text
      this.$emit("filterCity",city)
      this.removeActive()
    },
    removeFilter(){
      this.filtered = false
      this.filterText = "Seçiniz"
      this.$emit("filterCity",-1)
      this.removeActive()
    }
  }
}
</script>