<template>
  <div class="wellow-modal-shadow" v-if="modalCheck" >
    <div class="wellow-modal" id="new-account-flow">
      <i class="fa-thin fa-xmark close-modal" @click="changeStorage"></i>
      <div class="wellow-modal-inner">
        <whatIsWellow v-if="step==1"/>
        <digitalCoach v-if="step==2"/>
        <editorChoice v-if="step==3"/>
        <lifeCircle v-if="step==4"/>


        <div class="wellow-modal-foot">
          <div class="step-dots" :class="checkStep"><span></span><span></span><span></span><span></span></div>
          <div class="buttons">
            <button class="prev" @click="stepRemove">Geri</button>
            <button class="next" @click="stepAdd">İleri</button>
          </div>
        </div>

      </div>
    </div>
  </div>
  <passwordModal :checkClose="false" @closeModal="completed" />
</template>
<script>
import digitalCoach from "./newAccountSteps/digitalCoach.vue"
import whatIsWellow from "./newAccountSteps/whatIsWellow.vue"
import lifeCircle from "./newAccountSteps/lifeCircle.vue"
import editorChoice from "./newAccountSteps/editorChoice.vue"
import passwordModal from "./passwordModal.vue";

export default{
    data() {
      return {
        step:1,
        modalCheck:false,
      };
    },
    components:{
      digitalCoach,
      whatIsWellow,
      lifeCircle,
      editorChoice,
      passwordModal
    },
  computed:{
      changeStorage(){
        this.modalCheck=false;
        this.$store.commit("changeFirstLogin",false)
      },
      checkStep(){
        return "step" + this.step
      },
  },
  methods:{
      completed() {
        this.modalCheck= true;
      },
      stepAdd(){
        if(this.step!=4){
          this.step++
        }
        else{
        }
      },
      stepRemove(){
        if(this.step!=1){
          this.step--
        }
        else{
        }
      }
  }
  }

</script>