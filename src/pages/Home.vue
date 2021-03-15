<template>
  <div class="wrapper__content wrapper__content_fixed">
    <header-main />
    <section class="section">
      <div class="container"> </div>
    </section>
  </div>
</template>

<script>
import headerMain from '@/components/HeaderMain.vue';

export default {
  name: 'home',
  components: { headerMain },
};
</script>
