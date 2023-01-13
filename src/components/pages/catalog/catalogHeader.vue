<template>
  <div class="catalog-header">
    <button :class="{active:listType}" @click="this.listType=true">
      <img src="@/front/assets/media/media/catalog-products.png" alt="">
      Ürünler
    </button>
    <button :class="{active:!listType}" @click="this.listType=false">
      <img src="@/front/assets/media/media/catalog-experience.png" alt="">
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
      listType: function(newVal, oldVal) {
        this.$emit("changedListType",newVal)
      }
    },
  }
</script>
