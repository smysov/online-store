<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="section">
      <div class="container">
        <h1 class="title">Shop</h1>
        <ul class="products">
          <itemProduct
            v-for="product in products"
            :key="product.article"
            :product="product"
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import itemProduct from '@/components/ItemProduct.vue';

export default {
  components: { itemProduct },
  data() {
    return {
      products: null,
    };
  },
  created() {
    this.products = this.$store.getters.getProducts;
  },
};
</script>
