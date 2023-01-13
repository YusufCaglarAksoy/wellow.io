<template>
  <div class="toogleDiv" :class="{active:toogle}" >
    <div class="toogle-div-header">
      <h3>{{this.title}}</h3>
      <i class="fa-light fa-chevron-right" @click="toogle=!toogle"></i>
    </div>
    <div class="toogle-div-body">
      <slot>

      </slot>
    </div>
  </div>
</template>
<script>
export default{
  props:["title"],
  data() {
    return {
      toogle:false,
    };
  },
}
</script>