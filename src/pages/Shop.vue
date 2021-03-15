<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="section">
      <div class="container">
        <h1 class="title">Shop</h1>
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
import axios from '@/plugins/axios';

export default {
  name: 'shop',
  components: { productItem, preloader },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    try {
      const response = await axios.get('products/products.json');
      this.$store.commit('GET_PRODUCTS', response.data);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    } catch (e) {
      console.log(e.response.data);
    } finally {
      this.loading = false;
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>
