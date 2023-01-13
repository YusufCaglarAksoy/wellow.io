<template>
  <AppHeader activeMenu="KATALOG"/>
  <div class="page-title wellow-container">
    <a href="">Wellow</a>
    <i class="fa-light fa-chevron-right"></i>
    <a href="">Katalog</a>
  </div>
  <div class="catalog wellow-container">
    <catalogHeader @changedListType="changeList"/>
    <catalogButtons @filterButtons="getFilterButtons" />
    <catalogFilters :listType="listType"/>
  </div>
  <appFooter/>
</template>
<script>
import catalogButtons from "../../components/pages/catalog/catalogButtons.vue";
import catalogHeader from "../../components/pages/catalog/catalogHeader.vue";
import catalogFilters from "../../components/pages/catalog/catalogFilters.vue";
export default {
  props: ['id'],
  components:{
    catalogButtons,
    catalogHeader,
    catalogFilters
  },
  data() {
    return {
      listType:true,
      filter_buttons:[]
    };
  },
  methods:{
    getFilterButtons(data){
      this.filter_buttons = data;
    },
    changeList(val){
      this.listType = val;
    }
  }
}
</script>
