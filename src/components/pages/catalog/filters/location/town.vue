<template>
  <div class="special-filter filter-wellow location-special" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}">
      <span>Seçiniz</span>
      <i class="fa-light fa-chevron-right" @click="filterActive=!filterActive"></i>
    </div>
    <div class="select-option">
      <div>İstanbul</div>
      <div>Ankara</div>
      <div>İzmir</div>
      <div>Adana</div>
      <div>Trabzon</div>
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