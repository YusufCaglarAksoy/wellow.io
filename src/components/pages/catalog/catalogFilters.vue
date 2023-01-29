<template>
  <div class="catalog-filters">
    <div class="special-filters">
      <priceFilter @filterPrice="filterPrice" x/>
      <location-filter v-if="!listType" @filterLocation="filterLocation" />
      <date-filter v-if="!listType" @filterDate="filterDate" />
      <language-filter @filterLang="filterLang" />
    </div>
    <div class="arrangement-filter">
      <rank-filter @rankFilter="rankFilter" />
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
      filters:{
        languageFilters:null,
        locationFilters:null,
        priceFilters: null,
        dateFilters:null,
        rankFilters:null,
      }
    }
  },
  created() {
    this.$emit("filter",this.filters)
  },
  methods:{
    filterLang(lang){
      this.filters.languageFilters = lang
      this.$emit("filter",this.filters)
    },
    filterLocation(location){
      this.filters.locationFilters = location
      this.$emit("filter",this.filters)
    },
    filterPrice(price){
      this.filters.priceFilters = price
      this.$emit("filter",this.filters)
    },
    filterDate(date){
      this.filters.dateFilters = date
      this.$emit("filter",this.filters)
    },
    rankFilter(rank){
      this.filters.rankFilters = rank
      this.$emit("filter",this.filters)
    }
  }
}
</script>