<template>
  <div class="wrapper__content wrapper__content_fixed">
    <header-main />
    <section class="section">
      <div class="container">
        <preloader v-if="loading" />
        <ul class="products" v-else>
          <product-item
            v-for="product of products"
            :key="product.article"
            :product="product"
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import productItem from '@/components/ProductItem.vue';
import preloader from '@/components/Preloader.vue';
import headerMain from '@/components/HeaderMain.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'shop',
  components: { productItem, preloader, headerMain },

  computed: {
    ...mapGetters({
      products: 'getProducts',
      loading: 'getLoadingShop',
    }),

  },
  mounted() {
    this.$store.dispatch('getProducts');
  },
};
</script>
