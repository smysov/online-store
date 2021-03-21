<template>
  <div class="wrapper__content wrapper__content_fixed">
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
                <img :src="slide.photo" :alt="product.name" />
              </slide>
            </carousel>
          </div>
          <div class="product__wrapper-content">
            <h2 class="product__title">{{ product.title }}</h2>
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
import preloader from '@/components/Preloader.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'product',
  components: { preloader },
  data() {
    return {
      linkShop: {
        name: 'back',
        url: '/shop',
      },
    };
  },
  computed: {
    ...mapGetters({
      product: 'getProduct',
      loading: 'getLoadingProduct',
    }),
  },
  mounted() {
    const { article } = this.$route.params;
    this.$store.dispatch('getProduct', article);
  },
};
</script>

<style lang="scss" scoped>
.link-back {
  position: relative;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #2929bb;
  padding-left: 20px;
  transition: 0.3s linear all;

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
    left: 12px;
    content: '';
    width: 8px;
    height: 8px;
    border-bottom: 2px solid #2929bb;
    border-left: 2px solid #2929bb;
    transform: rotate(45deg);
    transition: 0.3s linear all;

    @media (min-width: 480px) {
      top: 3px;
      left: 11px;
      width: 10px;
      height: 10px;
      border-width: 3px;
    }
    @media (min-width: 768px) {
      top: 4.4px;
    }
  }
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding-top: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #858585;
    margin-bottom: 5px;

    @media (min-width: 480px) {
      font-size: 22px;
    }
    @media (min-width: 480px) {
      font-size: 24px;
    }
  }

  &__wrapper-content {
    @media (min-width: 480px) {
      max-width: 470px;
    }
    @media (min-width: 768px) {
      max-width: 47%;
    }
  }

  &__wrapper-image {
    text-align: center;
    @media (min-width: 768px) {
      max-width: 340px;
    }
  }

  &__wrapper-content {
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  &__price {
    font-size: 16px;
    font-weight: 700;

    @media (min-width: 480px) {
      font-size: 20px;
    }
    @media (min-width: 7680px) {
      font-size: 24px;
    }
  }
}

span {
  font-size: 16px;
  font-weight: 700;

  @media (min-width: 480px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
}

p {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 15px;

  @media (min-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
  @media (min-width: 1100px) {
    font-size: 22px;
  }
}
</style>
