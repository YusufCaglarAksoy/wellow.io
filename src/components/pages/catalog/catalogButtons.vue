<template>
  <div class="catalog-buttons">
    <button v-for="button in catalog_buttons" :class="{active:checkActive(button)}" @click="changeActive(button)" :key="button">{{button}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter_buttons:[],
      catalog_buttons:[
        "Fitness",
        "Sağlıklı Beslenm",
        "Çocuk Bakımı",
        "Ortak Çalışma Alanları",
        "Mental Sağlık App",
        "Bedene Sağlığı",
        "Entelektüel Yaşam",
        "Ebeveynlik",
        "Sosyal İyi Yaşam",
        "Hobiler",
        "Finansal Sağlık",
        "Teknoloji"
      ]
    };
  },
  methods:{
    checkActive(text){
      var isActive = false;
      this.filter_buttons.forEach(function (button) {
        if(button.toLowerCase().includes(text.toLowerCase())){
          isActive = true;
        }
      })
      return isActive
    },
    changeActive(text){
      var index;
      if(this.checkActive(text)){
        this.filter_buttons.forEach(function (button,key) {
          if(button.toLowerCase().includes(text.toLowerCase())){
            index = key;
          }
        })
        this.filter_buttons.splice(index, 1)
      }
      else{
        this.filter_buttons.push(text);
      }
      this.$emit("filterButtons",this.filter_buttons)
    }
  }
}
</script>
