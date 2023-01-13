<template>
  <div class="catalog-filters" v-click-outside-element="removeActive">
    <div class="special-filters">
      <priceFilter />
      <location-filter />
      <date-filter />
      <language-filter />
    </div>
    <div class="arrangement-filter">
      <rank-filter />
    </div>
  </div>
</template>
<script>
import priceFilter from "./filters/priceFilter.vue";
import locationFilter from "./filters/locationFilter.vue";
import languageFilter from "./filters/languageFilter.vue";
import dateFilter from "./filters/dateFilter.vue";
import rankFilter from "./filters/rankFilter.vue";
export default {
  props:["listType"],
  components:{
    priceFilter,
    locationFilter,
    dateFilter,
    languageFilter,
    rankFilter
  },
  data(){
    return{

    }
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    }
  }
}
</script>