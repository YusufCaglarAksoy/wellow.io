<template>
  <router-view></router-view>
</template>
<script>

export default{
  data() {
    return {
      rate:"rate0",
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    }
  }
}
</script>