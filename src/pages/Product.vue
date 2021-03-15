<template>
  <div class="wrapper__content wrapper__content_fixed">
    <header-main />
    <section class="section">
      <div class="container">
        <router-link class="link-back" :to="linkShop.url">{{
          linkShop.name
        }}</router-link>
        <preloader v-if="loading" />
        <div class="product" v-else>
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
            <h1 class="title title_product">{{ product.title }}</h1>
            <span>Описание:</span>
            <p>{{ product.description }}</p>
            <span class="product__price">Стоимость: {{ product.price }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import headerMain from '../components/HeaderMain.vue';
import preloader from '../components/Preloader.vue';
import axios from '../plugins/axios';

export default {
  name: 'product',
  components: { preloader, headerMain },
  data() {
    return {
      loading: true,
      product: null,
      linkShop: {
        name: 'back',
        url: '/shop',
      },
    };
  },
  async mounted() {
    const { article } = this.$route.params;
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      const response = await axios.get(`products/${article}.json`);
      this.product = response.data;
    } catch (e) {
      console.log('error');
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss">
.link-back {
  position: absolute;
  top: 0;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #2929bb;
  padding-left: 20px;
  transition: 0.3s linear all;
  z-index: 100;

  @media (min-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    color: #000;

    &::before {
      border-color: #000;
    }
  }

  &::before {
    position: absolute;
    top: 4px;
    left: 10px;
    content: '';
    width: 8px;
    height: 8px;
    border-bottom: 2px solid #2929bb;
    border-left: 2px solid #2929bb;
    transform: rotate(45deg);
    transition: 0.3s linear all;

    @media (min-width: 480px) {
      top: 5px;
      width: 10px;
      height: 10px;
      border-width: 3px;
    }
    @media (min-width: 768px) {
      top: 6px;
    }
  }
}

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

.title_product {
  padding-top: 20px;
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
