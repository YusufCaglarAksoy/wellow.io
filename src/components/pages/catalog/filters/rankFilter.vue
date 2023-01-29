<template>
  <div class="special-filter filter-wellow" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}" @click="filterActive=!filterActive">
      <span>Önerilen Sıralama</span>
      <i class="fa-light fa-chevron-right"></i>
    </div>
    <div class="filter-div rank-filter">
      <div class="radio-buttons">
        <label class="radio-button" v-for="filter in filters" :for="filter.id">
          <input type="radio" v-model="filterID" name="location" @input="emitFilter(filter)" :value="filter.value" :id="filter.id" selected/>
          <span class="label"></span>{{ filter.text }}
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      filterActive:false,
      filterID:0,
      filters:[
        {
          "text":"Önerilen Sıralama",
          "value":0,
          "id":"suggested"
        },
        {
          "text":"En Popüler",
          "value":1,
          "id":"popular"
        },
        {
          "text":"En Düşük Fiyat",
          "value":2,
          "id":"lower"
        },
        {
          "text":"En Yüksek Fiyat",
          "value":3,
          "id":"high"
        },
        {
          "text":"En Yeniler",
          "value":4,
          "id":"latest"
        }
      ]
    }
  },
  created() {
    this.emitFilter()
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    },
    emitFilter(val){
      this.$emit("rankFilter",val)
    }
  }
}
</script>