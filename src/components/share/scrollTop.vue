<template>
    <div class="scroll-top"  :class="{active:scY>150}" @click="toTop()">
        <i class="fa-regular fa-arrow-left"></i>
    </div>
</template>

<script>
    export default{
        data() {
            return {
            };
        },
        props: ['scY'],
        methods: {
          toTop: function () {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          },
        },
    }
</script>