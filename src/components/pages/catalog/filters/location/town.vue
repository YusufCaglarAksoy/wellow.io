<template>
  <div class="special-filter filter-wellow location-special" :class="{filtered:filtered}" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}" @click="filterActive=!filterActive">
      <span>{{ filterText }}</span>
      <i class="fa-light fa-chevron-right"></i>
    </div>
    <div class="select-option">
      <div @click="removeFilter">Tümü</div>
      <div v-for="town in towns" @click="filter(town)">{{ town.text }}</div>
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
      towns: [
        {
          id:0,
          text:"Vakfıkebir",
        },
        {
          id:1,
          text:"Akçaabat",
        },
        {
          id:2,
          text:"Çarşıbaşı",
        },
        {
          id:3,
          text:"Beşikdüzü",
        },
        {
          id:4,
          text:"Tonya",
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
    filter(town){
      this.filtered = true
      this.filterText = town.text
      this.$emit("filterTown",town)
      this.removeActive()
    },
    removeFilter(){
      this.filtered = false
      this.filterText = "Seçiniz"
      this.$emit("filterTown",-1)
      this.removeActive()
    }
  }
}
</script>