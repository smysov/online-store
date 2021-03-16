<template>
  <li class="products__item">
    <router-link class="products__link" :to="/shop/ + product.article">
      <div class="products__wrapper-image">
        <img :src="product.image" :alt="product.title" />
      </div>
    </router-link>
    <div class="products__wrapper-content">
      <p class="products__price">{{ product.price }}</p>
      <router-link class="products__link" :to="/shop/ + product.article">{{
        product.title
      }}</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;

  &__item {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 5px;
    max-width: 46%;

    @media (min-width: 600px) {
      max-width: 30%;
    }
  }

  &__price {
    font-size: 16px;
    font-weight: 700;

    @media (min-width: 480px) {
      font-size: 18px;
    }
  }

  &__link {
    font-size: 16px;
    color: #000;
    transition: 0.3s all linear;

    @media (min-width: 480px) {
      font-size: 18px;
    }

    &:hover {
      color: #0048ff;
    }
  }
}
</style>
