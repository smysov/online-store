<template>
  <li class="products__item">
    <div class="products__wrapper-image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="products__wrapper-content">
      <h2 class="products__link link">{{ product.title }}</h2>
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
  align-items: center;
  flex-direction: column;
  row-gap: 30px;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 35px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 10px;
    max-width: 85%;

    @media (min-width: 480px) {
      max-width: 46%;
    }
  }

  &__link {
    transition: 0.3s all linear;

    &:hover {
      color: #9d62a7;
    }
  }
}
</style>
