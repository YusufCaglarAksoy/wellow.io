<template>
  <div class="wellow-modal-shadow" v-if="passwordModalCheck" id="change-password" style="z-index: 10001;">
    <div class="wellow-modal small" >
      <i class="fa-thin fa-xmark close-modal" @click="passwordModalCheck= false" v-if="checkClose"></i>
      <div class="wellow-modal-inner">
        <div class="wellow-modal-head">
          <h2>Şifreni Değiştir</h2>
        </div>
        <div class="wellow-modal-body">
          <div class="modal-inputs" v-if="!changedPassword">
            <div class="wellow-inp-group">
              <label for="currentPassword">Mevcut şifrenizi girin</label>
              <div>
                <input :type="oldPassword ? 'text' : 'password'" v-model="changeData.oldPassword" id="currentPassword">
                <a @click="oldPassword=!oldPassword" :class="{active:oldPassword}">
                  <Icon icon="akar-icons:eye-closed" color="#ced4da" />
                  <i class="fa-solid fa-eye"></i>
                </a>
              </div>

            </div>
            <div class="wellow-inp-group">
              <label for="newPassword">Yeni şifrenizi girin</label>
              <div>
                <input :type="password ? 'text' : 'password'" v-model="changeData.password" id="newPassword" @input="check">
                <a @click="password=!password" :class="{active:password}">
                  <Icon icon="akar-icons:eye-closed" color="#ced4da" />
                  <i class="fa-solid fa-eye"></i>
                </a>
              </div>
              <div class="infos">
                <span :class="{danger:checkLength}">En az 6 karakter</span>
                <span :class="{danger:checkNumber}">En az 1 rakam</span>
                <span :class="{danger:checkChar}">En az 1 sembol</span>
              </div>
            </div>
            <div class="wellow-inp-group">
              <label for="againPassword">Yeni şifrenizi girin</label>
              <div>
                <input :type="repeatPassword ? 'text' : 'password'" v-model="changeData.repeatPassword" id="againPassword" @input="check">
                <a @click="repeatPassword=!repeatPassword" :class="{active:repeatPassword}">
                  <Icon icon="akar-icons:eye-closed" color="#ced4da" />
                  <i class="fa-solid fa-eye"></i>
                </a>
              </div>
              <div class="infos">
                <span :class="{danger:checkMatch}">Yeni şifrenizi yanlış girdiniz</span>
              </div>
            </div>
          </div>
          <div class="passwordChanged" v-if="changedPassword">
            <img src="@/assets/media/media/changePassword.png" alt="" class="step-img">
            <p>Tebrikler, şifreniz oluşturuldu.</p>
          </div>
        </div>
        <div class="wellow-modal-foot">
          <div class="buttons" v-if="!changedPassword" :class="{rightAlign:!checkClose}">
            <button class="prev" @click="passwordModalCheck= false" v-if="checkClose">İptal</button>
            <button class="save" :class="{active:!checkLength&&!checkNumber&&!checkChar&&!checkMatch&&changeData.oldPassword}" @click="post">Kaydet</button>
          </div>
          <div class="buttons passwordChanged" v-if="changedPassword">
            <button @click="emit">Devam Et</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

  export default{

    data() {
      return {
        passwordModalCheck:true,
        changedPassword:false,
        oldPassword:false,
        password:false,
        repeatPassword:false,
        checkLength:true,
        checkNumber:true,
        checkChar:true,
        checkMatch:true,
        changeData:{
          oldPassword:null,
          password:null,
          repeatPassword:null,
        },
      };
    },
    props: ['checkClose'],
    methods:{
      check(){
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        this.checkLength = (this.changeData.password.length<6) ? true :false;
        this.checkNumber = (/[0-9]/.test(this.changeData.password)) ? false :true;
        this.checkChar = (specialChars.test(this.changeData.password)) ? false :true;
        this.checkMatch = (this.changeData.password == this.changeData.repeatPassword) ? false :true;
      },
      emit(){
        this.$emit('closeModal');
        this.passwordModalCheck = false;
      },
      post(){
        this.changedPassword = true;
      }
    }

  }
</script>