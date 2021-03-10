<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="section">
      <div class="container">
        <h1 class="title title_product">{{ product.title }}</h1>
        <div class="product">
          <div class="product__wrapper-image">
            <carousel
              :perPage="1"
              :paginationEnable="true"
              paginationColor="#b3b3b3"
              paginationActiveColor="#494ce8"
            >
              <slide v-for="(slide, index) of product.gallery" :key="index">
                <img :src="slide.photo" :alt="product.title" />
              </slide>
            </carousel>
          </div>
          <div class="product__wrapper-content">
            <span>Описание</span>
            <p>{{ product.description }}</p>
            <span class="product__price">Стоимость: {{ product.price }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    const { article } = this.$route.params;
    this.product = this.$store.getters.getProduct(article);
  },
};
</script>

<style lang="scss">
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  &__wrapper-content,
  &__wrapper-image {
    max-width: 95%;

    @media (min-width: 480px) {
      max-width: 80%;
    }
    @media (min-width: 768px) {
      max-width: 48%;
    }
  }

  &__wrapper-content {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  &__price {
    font-size: 18px;
    font-weight: 700;

    @media (min-width: 480px) {
      font-size: 22px;
    }
    @media (min-width: 7680px) {
      font-size: 24px;
    }
  }
}

span {
  font-weight: 600;

  @media (min-width: 480px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
}

p {
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 15px;

  @media (min-width: 480px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media (min-width: 1100px) {
    font-size: 22px;
  }
}

.VueCarousel-inner {
  visibility: visible !important;
  flex-basis: 100% !important;
  width: 100% !important;
}
</style>
