<template>
  <div class="special-filter filter-wellow location-special language-filter" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}">
      <span>Dil</span>
      <i class="fa-light fa-chevron-right" @click="filterActive=!filterActive"></i>
    </div>
    <div class="select-option">
      <div>Türkiye</div>
      <div>ABD</div>
      <div>Hollanda</div>
      <div>Almanya</div>
      <div>Rusya</div>
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