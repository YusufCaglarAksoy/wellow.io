<template>
  <div class="catalog-header">
    <button :class="{active:listType}" @click="this.listType=true">
      <img src="@/assets/media/media/catalog-products.png" alt="">
      Ürünler
    </button>
    <button :class="{active:!listType}" @click="this.listType=false">
      <img src="@/assets/media/media/catalog-experience.png" alt="">
      Deneyimler
    </button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        listType:true,
      };
    },
    watch: {
      listType: function(newVal) {
        this.$emit("changedListType",newVal)
      }
    },
  }
</script>
