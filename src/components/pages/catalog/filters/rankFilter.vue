<template>
  <div class="special-filter filter-wellow" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}">
      <span>Önerilen Sıralama</span>
      <i class="fa-light fa-chevron-right" @click="filterActive=!filterActive"></i>
    </div>
    <div class="filter-div">

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
    }
  }
}
</script>