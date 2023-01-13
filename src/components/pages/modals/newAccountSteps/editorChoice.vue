<template>
  <div class="wellow-modal-head">
    <h2>Editörün Seçimi Nasıl Çalışır? </h2>
  </div>
  <div class="wellow-modal-body">
    <p>İlginizi çeken en az 5 kategori seçin</p>
    <div class="editor-choices">
      <input v-for="choice in choices" type="submit" :key="choice" :class="{active:choice.activity }" :value="choice.name" @click="choice.activity=!choice.activity"  >
    </div>
    <p>Size ilgi alanlarınıza ve içinde bulunduğunuz yaşam evresine uygun deneyim ve ürünler sunuyoruz. </p>
  </div>
</template>

<script>
export default{
  data() {
    return {
      choices:[
         {
          name:"Beden Sağlığı",
          activity: false,
        },
        {
          name:"Beslenme",
          activity: false,
        },
        {
          name:"Odaklanma",
          activity: false,
        },
        {
          name:"Finans",
          activity: false,
        },
        {
          name:"Eğlence",
          activity: false,
        },
        {
          name:"Fitness",
          activity: false,
        },
        {
          name:"Psikoloji",
          activity: false,
        },
        {
          name:"Teknoloji",
          activity: false,
        },
        {
          name:"Ev Hayatı",
          activity: false,
        },
        {
          name:"Sosyal Hayat",
          activity: false,
        },
        {
          name:"İlişkiler",
          activity: false,
        },
        {
          name:"Ebeveynlik",
          activity: false,
        },
        {
          name:"Yaşlı bakımı",
          activity: false,
        },
        {
          name:"Yeni iş ",
          activity: false,
        },
        {
          name:"Hamilelik",
          activity: false,
        },
        {
          name:"Boşanma",
          activity: false,
        },
      ]
    };
  }
}
</script>