<template>
  <div class="special-filter filter-wellow" :class="{filtered:filtered}" v-click-outside-element="removeActive">
    <div class="filter" :class="{active:filterActive}" @click="filterActive=!filterActive">
      <span>{{ filterText }}</span>
      <i class="fa-light fa-chevron-right" ></i>
    </div>
    <div class="filter-div language-filter">
      <span>Başlangıç:</span>
      <label for="startDate">
        <input type="date" id="startDate" v-model="filters.firstDate" @input="changeStartDate">
        <span :class="{default:firstDate =='Tarih Seçiniz'}">{{ firstDate }}</span>
      </label>
      <span>Bitiş:</span>
      <label for="endDate">
        <input type="date" id="endDate" v-model="filters.endDate" @input="changeEndDate">
        <span :class="{default:endDate =='Tarih Seçiniz'}">{{ endDate }}</span>
      </label>
      <div class="price-buttons">
        <button @click="refreshFilter">Seçimleri Sıfırla</button>
        <button @click="emitFilter">Uygula</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      filterActive:false,
      filterText:"Tarih",
      filtered:false,
      filters:{
        "firstDate":null,
        "endDate":null
      },
      firstDate:"Tarih Seçiniz",
      endDate:"Tarih Seçiniz",
    }
  },
  created() {
    this.$emit("filterDate",this.filters)
  },
  methods:{
    removeActive(){
      this.filterActive = false;
    },
    changeEndDate(){
      this.endDate = this.filters.endDate
    },
    changeStartDate(){
      this.firstDate = this.filters.firstDate
    },
    refreshFilter(){
      this.filters.firstDate = null
      this.filters.endDate = null
      this.firstDate = "Tarih Seçiniz"
      this.endDate = "Tarih Seçiniz"
      this.filterText = "0"
      this.emitFilter()
      this.removeActive()
    },
    emitFilter(){
      this.$emit("filterDate",this.filters)
      this.removeActive()
      if(this.filterText == "0"){
        this.filterText = "Tarih"
        this.filtered = false;
      }
      else{
        this.filtered = true;
        if(this.firstDate != "Tarih Seçiniz" && this.endDate != "Tarih Seçiniz"){
          this.filterText = this.filters.firstDate + " - " + this.filters.endDate
        }
        else if(this.firstDate != "Tarih Seçiniz"){
          this.filterText = this.filters.firstDate + "- - "
        }
        else if(this.endDate != "Tarih Seçiniz"){
          this.filterText =  "- - " + this.filters.endDate
        }
      }
    }
  },
}
</script>