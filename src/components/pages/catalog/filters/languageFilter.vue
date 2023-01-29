<template>
  <div class="special-filter filter-wellow location-special language-filter" :class="{filtered:filtered}" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}" @click="filterActive=!filterActive">
      <span>{{ filterText }}</span>
      <i class="fa-light fa-chevron-right"></i>
    </div>
    <div class="select-option">
      <div @click="removeFilter">Tümü</div>
      <div v-for="lang in langs" @click="filter(lang)">{{ lang.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      filterActive:false,
      filtered:false,
      filterText:"Dil",
      langs: [
                {
                  id:0,
                  text:"Türkçe",
                },
                {
                  id:1,
                  text:"İngilizce",
                }
          ]
    }
  },
  created() {
    this.$emit("filterLang", {id:-1,text:""})
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    },
    filter(val){
      this.filtered = true
      this.removeActive()
      this.filterText = val.text
      this.$emit("filterLang",val)

    },
    removeFilter(){
      this.filtered = false
      this.filterText = "Dil"
      this.removeActive()
      this.$emit("filterLang",{id:-1,text:""})
    },
  }
}
</script>