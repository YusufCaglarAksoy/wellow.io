<template>
  <div class="login-page">
    <div class="login-left">
      <img src="@/front/assets/media/media/login-back.png" alt="">
      <div class="login-left-text">
        <h1>Merhaba!</h1>
        <h3>En esnek yan haklarla iyi yaşama hoş geldiniz.</h3>
      </div>
    </div>
    <div class="login-right">
      <div class="login-logo">
        <img src="@/front/assets/media/wellow.png" alt="">
      </div>
      <div class="login-inputs">
        <div class="wellow-inp-group">
          <label for="email" >E-mail</label>
          <input type="text" id="email" v-model="loginData.email" :class="{fail:failMail}">
        </div>
        <div class="wellow-inp-group">
          <label for="password" >Parola</label>
          <input type="password" id="password" v-model="loginData.password" :class="{fail:failMail||failPassword}">
        </div>
        <span>Parolamı Unuttum</span>
      </div>
      <div class="login-submit">
        <button :class="{active:loginData.email&&loginData.password}" @click="register">Giriş Yap</button>
        <div class="login-or"><p>ya da</p></div>
        <p>Admin olarak giriş yap</p>
      </div>
    </div>
  </div>
</template>
<script>

export default{
  data() {
    return {
      failMail:0,
      failPassword:0,
      loginData: {
        email: null,
        password: null,
      }
    };
  },
  computed:{
    register() {
      this.failMail=0,
      this.failPassword=0,
      this.$appAxios.post("/api/v1/auth/login", this.loginData,{headers:{ "Accept-Language": "tr", "Content-Type":"multipart/form-data"}})
          .then(response=>{
            this.$store.commit("setUser",response?.data.data, response?.data.data.vue_token)
            this.$store.commit("changeFirstLogin",response?.data.data?.is_first_login)
            this.$router.push({name:"Home"})
          })
          .catch(error => {
            console.log(error)
            if(error.response?.status == 404){
                  this.failMail = 1 ;
              }
            if(error.response?.status == 401){
              this.failPassword = 1 ;
            }
          });
    },
  },
}
</script>
