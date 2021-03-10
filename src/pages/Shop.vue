<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="section">
      <div class="container">
        <h1 class="title">Shop</h1>
        <ul class="products">
          <itemProduct
            v-for="product in productList"
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
  components: {
    itemProduct,
  },
  data() {
    return {
      productList: null,
    };
  },
  created() {
    this.productList = this.$store.getters.getProductList;
    console.log(this.productList);
  },
};
</script>
