<template>
  <div class="wrapper">
    <header-main />
    <router-view></router-view>
  </div>
</template>

<script>
import headerMain from '@/components/HeaderMain.vue';

export default {
  name: 'app',
  components: { headerMain },
};
</script>
