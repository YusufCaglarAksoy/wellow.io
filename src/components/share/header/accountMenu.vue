<template>
  <div class="icon-button" :class="{active:isActive}" v-click-outside-element="removeActive">
    <i class="fa-regular fa-user" @click="isActive=!isActive"></i>
    <div class="accountMenu">
        <div @click="passwordModalCheck = true"><span>Şifreni Değiştir</span></div>
        <div @click="choiceModalCheck = true"><span>Wellow’u Kişiselleştir</span></div>
        <router-link :to="{name:'FAQ'}">
          <span>Destek Merkezi & SSS</span>
        </router-link>
        <div @click="logout"><span>Çıkış Yap</span></div>
    </div>
  </div>
  <div class="wellow-modal-shadow" v-if="choiceModalCheck" id="new-account-flow">
    <div class="wellow-modal" >
      <i class="fa-thin fa-xmark close-modal" @click="choiceModalCheck= false"></i>
      <div class="wellow-modal-inner">
        <div class="wellow-modal-head">
          <h2>Seçimini Değiştir</h2>
        </div>
        <div class="wellow-modal-body">
          <p>İlginizi çeken en az 5 kategori seçin</p>
          <div class="editor-choices">
            <input v-for="choice in choices" type="submit" :key="choice" :class="{active:choice.activity }" :value="choice.name" @click="choice.activity=!choice.activity"  >
          </div>
          <p>Size ilgi alanlarınıza ve içinde bulunduğunuz yaşam evresine uygun deneyim ve ürünler sunuyoruz. </p>
        </div>
        <div class="wellow-modal-foot">
          <div class="buttons">
            <button class="prev" @click="choiceModalCheck= false">İptal</button>
            <button class="next">Kaydet</button>
          </div>
        </div>

      </div>
    </div>
  </div>
  <passwordModal v-if="passwordModalCheck" :checkClose="true" />
</template>
<script>
  import passwordModal from "../../pages/modals/passwordModal.vue";
  export default{
    data() {
      return {
        isActive:false,
        passwordModalCheck:false,
        choiceModalCheck:false,
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
    },
    components:{
      passwordModal,
    },
    methods:{
      logout(){
        this.$store.commit("logoutUser");
        this.$router.push({name:"Login"})
      },
      removeActive(){
        this.isActive = false
      }
    }

  }
</script>